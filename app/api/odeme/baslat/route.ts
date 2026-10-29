/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import Iyzipay from "iyzipay";
import { iyzipay } from "../../../lib/iyzico";
import { urunler } from "../../../lib/urunler";

const KARGO_LIMITI = 500;
const KARGO_UCRETI = 49;
const fiyat = (n: number) => n.toFixed(1);

function telefonDuzenle(t: string) {
  const rakam = t.replace(/\D/g, "");
  if (rakam.startsWith("90")) return `+${rakam}`;
  if (rakam.startsWith("0")) return `+9${rakam}`;
  return `+90${rakam}`;
}

export async function POST(request: Request) {
  try {
    const { musteri, sepet } = await request.json();

    const adSoyad = String(musteri?.adSoyad ?? "").trim();
    const email = String(musteri?.email ?? "").trim();
    const telefon = String(musteri?.telefon ?? "").trim();
    const adres = String(musteri?.adres ?? "").trim();
    const sehir = String(musteri?.sehir ?? "").trim();

    if (!adSoyad || !email || !telefon || !adres || !sehir) {
      return NextResponse.json({ hata: "Tüm alanları doldurun." }, { status: 400 });
    }
    if (!Array.isArray(sepet) || sepet.length === 0) {
      return NextResponse.json({ hata: "Sepet boş." }, { status: 400 });
    }

    // Fiyatları sepetten DEĞİL, sunucudaki ürün listesinden alıyoruz
    const kalemler: { id: number; isim: string; fiyat: number; adet: number }[] = [];
    for (const s of sepet) {
      const urun = urunler.find((u) => u.id === Number(s.id));
      const adet = Number(s.adet);
      if (!urun || !Number.isInteger(adet) || adet < 1 || adet > 20) {
        return NextResponse.json({ hata: "Sepette geçersiz ürün var." }, { status: 400 });
      }
      kalemler.push({ id: urun.id, isim: urun.isim, fiyat: urun.fiyat, adet });
    }

    const araToplam = kalemler.reduce((t, k) => t + k.fiyat * k.adet, 0);
    const kargo = araToplam >= KARGO_LIMITI ? 0 : KARGO_UCRETI;
    const toplam = araToplam + kargo;

    const basketItems = kalemler.map((k) => ({
      id: String(k.id),
      name: k.isim,
      category1: "Genel",
      itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
      price: fiyat(k.fiyat * k.adet),
    }));
    if (kargo > 0) {
      basketItems.push({
        id: "KARGO",
        name: "Kargo",
        category1: "Kargo",
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: fiyat(kargo),
      });
    }

    const referans = randomUUID();
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "85.34.78.112";
    const [ad, ...gerisi] = adSoyad.split(/\s+/);
    const soyad = gerisi.join(" ") || ad;
    const adresBilgi = { address: adres, contactName: adSoyad, city: sehir, country: "Turkey" };

    const istek: any = {
      locale: Iyzipay.LOCALE.TR,
      conversationId: referans,
      price: fiyat(toplam),
      paidPrice: fiyat(toplam),
      currency: Iyzipay.CURRENCY.TRY,
      basketId: referans,
      paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
      callbackUrl: `${process.env.SITE_URL}/api/odeme/sonuc`,
      buyer: {
        id: `M-${referans.slice(0, 8)}`,
        name: ad,
        surname: soyad,
        identityNumber: "74300864791", // test değeri, canlıda ele alacağız
        email,
        gsmNumber: telefonDuzenle(telefon),
        registrationAddress: adres,
        city: sehir,
        country: "Turkey",
        ip,
      },
      shippingAddress: adresBilgi,
      billingAddress: adresBilgi,
      basketItems,
    };

    const sonuc: any = await new Promise((resolve, reject) =>
      iyzipay.checkoutFormInitialize.create(istek, (err: unknown, res: unknown) =>
        err ? reject(err) : resolve(res)
      )
    );

    if (sonuc.status !== "success") {
      console.error("Iyzico hata:", sonuc.errorMessage);
      return NextResponse.json(
        { hata: sonuc.errorMessage ?? "Ödeme başlatılamadı." },
        { status: 502 }
      );
    }

    return NextResponse.json({ url: sonuc.paymentPageUrl });
  } catch (e) {
    console.error("Ödeme başlatma hatası:", e);
    return NextResponse.json({ hata: "Ödeme başlatılamadı." }, { status: 500 });
  }
}
