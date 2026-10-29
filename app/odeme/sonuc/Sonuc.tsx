"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useSepet } from "../../lib/SepetContext";

export default function Sonuc() {
  const params = useSearchParams();
  const basarili = params.get("durum") === "basarili";
  const no = params.get("no");
  const { sepetiTemizle } = useSepet();

  useEffect(() => {
    if (basarili) sepetiTemizle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basarili]);

  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center">
      <h1
        className={`text-2xl font-bold mb-3 ${
          basarili ? "text-green-600" : "text-red-600"
        }`}
      >
        {basarili ? "Ödemeniz alındı, teşekkürler!" : "Ödeme başarısız oldu"}
      </h1>
      {basarili && no && (
        <p className="text-sm text-gray-500 mb-6">Referans: {no}</p>
      )}
      {!basarili && (
        <p className="text-sm text-gray-600 mb-6">
          Kartınızdan çekim yapılmadı. Sepetiniz duruyor, tekrar deneyebilirsiniz.
        </p>
      )}
      <Link
        href={basarili ? "/" : "/sepet"}
        className="bg-[#0f1b2d] text-white text-sm font-semibold px-6 py-3 rounded"
      >
        {basarili ? "Ana Sayfaya Dön" : "Sepete Dön"}
      </Link>
    </div>
  );
}
