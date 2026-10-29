/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import Iyzipay from "iyzipay";
import { iyzipay } from "../../../lib/iyzico";

export async function POST(request: Request) {
  const site = process.env.SITE_URL!;
  const form = await request.formData();
  const token = String(form.get("token") ?? "");

  if (token) {
    try {
      const sonuc: any = await new Promise((resolve, reject) =>
        iyzipay.checkoutForm.retrieve(
          { locale: Iyzipay.LOCALE.TR, token },
          (err: unknown, res: unknown) => (err ? reject(err) : resolve(res))
        )
      );

      if (sonuc.status === "success" && sonuc.paymentStatus === "SUCCESS") {
        const no = encodeURIComponent(String(sonuc.conversationId ?? sonuc.paymentId));
        return NextResponse.redirect(`${site}/odeme/sonuc?durum=basarili&no=${no}`, 303);
      }
    } catch (e) {
      console.error("Ödeme sorgulama hatası:", e);
    }
  }

  return NextResponse.redirect(`${site}/odeme/sonuc?durum=basarisiz`, 303);
}
