"use client";

import { useState } from "react";
import { useSepet } from "../lib/SepetContext";

const KARGO_LIMITI = 500;
const KARGO_UCRETI = 49;

const alanlar = [
  { name: "adSoyad", label: "Ad Soyad", type: "text" },
  { name: "email", label: "E-posta", type: "email" },
  { name: "telefon", label: "Telefon (05xx xxx xx xx)", type: "tel" },
  { name: "sehir", label: "Şehir", type: "text" },
];

export default function Odeme() {
  const { sepet, toplamFiyat } = useSepet();
  const [hata, setHata] = useState("");
  const [yukleniyor, setYukleniyor] = useState(false);

  const kargo = toplamFiyat >= KARGO_LIMITI ? 0 : KARGO_UCRETI;

  async function gonder(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setHata("");
    setYukleniyor(true);

    const musteri = Object.fromEntries(new FormData(e.currentTarget).entries());
    const response = await fetch("/api/odeme/baslat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        musteri,
        sepet: sepet.map((s) => ({ id: s.id, adet: s.adet })),
      }),
    });
    const veri = await response.json();

    if (!response.ok) {
      setHata(veri.hata ?? "Bir hata oluştu.");
      setYukleniyor(false);
      return;
    }
    window.location.href = veri.url; // Iyzico'nun güvenli ödeme sayfası
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-10">
      <form onSubmit={gonder} className="md:col-span-2 space-y-4">
        <h1 className="text-2xl font-bold mb-2">Teslimat Bilgileri</h1>

        {alanlar.map((a) => (
          <label key={a.name} className="block text-sm font-medium">
            {a.label}
            <input
              name={a.name}
              type={a.type}
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </label>
        ))}

        <label className="block text-sm font-medium">
          Adres
          <textarea
            name="adres"
            required
            rows={3}
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
        </label>

        {hata && <p className="text-red-600 text-sm">{hata}</p>}

        <button
          type="submit"
          disabled={yukleniyor || sepet.length === 0}
          className="bg-[#0f1b2d] text-white px-8 py-3 rounded font-medium disabled:opacity-50"
        >
          {yukleniyor ? "Yönlendiriliyor..." : "Kartla Öde"}
        </button>
      </form>

      <aside className="bg-gray-50 rounded-lg p-5 h-fit text-sm space-y-2">
        <h2 className="font-bold mb-2">Sipariş Özeti</h2>
        {sepet.map((s) => (
          <div key={s.id} className="flex justify-between">
            <span>
              {s.isim} x {s.adet}
            </span>
            <span>{s.fiyat * s.adet} TL</span>
          </div>
        ))}
        <div className="border-t pt-2 flex justify-between">
          <span>Kargo</span>
          <span>{kargo === 0 ? "Ücretsiz" : `${kargo} TL`}</span>
        </div>
        <div className="flex justify-between font-bold text-base">
          <span>Toplam</span>
          <span>{toplamFiyat + kargo} TL</span>
        </div>
      </aside>
    </div>
  );
}
