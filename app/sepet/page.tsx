"use client";

import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useSepet } from "../lib/SepetContext";

const KARGO_LIMITI = 500;
const KARGO_UCRETI = 49;

export default function SepetSayfasi() {
  const { sepet, sepettenCikar, adetDegistir, toplamFiyat } = useSepet();

  if (sepet.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-3">Sepetiniz boş</h1>
        <p className="text-gray-500 mb-6">Henüz sepete ürün eklemediniz.</p>
        <Link
          href="/urunler"
          className="bg-[#0f1b2d] text-white text-sm font-semibold px-6 py-3 rounded"
        >
          Alışverişe Devam Et
        </Link>
      </div>
    );
  }

  const kargo = toplamFiyat >= KARGO_LIMITI ? 0 : KARGO_UCRETI;
  const genelToplam = toplamFiyat + kargo;
  const kalan = KARGO_LIMITI - toplamFiyat;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Sepetim</h1>

      {kalan > 0 && (
        <p className="bg-[#f1ece7] text-sm px-4 py-3 rounded mb-6">
          Ücretsiz kargo için <b>{kalan} TL</b> daha ekleyin.
        </p>
      )}

      {sepet.map((urun) => (
        <div
          key={urun.id}
          className="flex items-center justify-between gap-6 border-b py-4"
        >
          <div className="flex-1 min-w-0">
            <p className="font-semibold truncate">{urun.isim}</p>
            <p className="text-sm text-gray-500">{urun.fiyat} TL</p>
          </div>

          <div className="flex items-center border rounded">
            <button
              onClick={() => adetDegistir(urun.id, -1)}
              className="p-2 hover:bg-gray-100"
              aria-label="Azalt"
            >
              <Minus size={14} />
            </button>
            <span className="w-8 text-center text-sm">{urun.adet}</span>
            <button
              onClick={() => adetDegistir(urun.id, 1)}
              className="p-2 hover:bg-gray-100"
              aria-label="Arttır"
            >
              <Plus size={14} />
            </button>
          </div>

          <span className="font-bold w-24 text-right">
            {urun.fiyat * urun.adet} TL
          </span>

          <button
            onClick={() => sepettenCikar(urun.id)}
            className="text-red-500 hover:text-red-700"
            aria-label="Çıkar"
          >
            <Trash2 size={18} />
          </button>
        </div>
      ))}

      <div className="mt-6 ml-auto max-w-xs space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Ara toplam</span>
          <span>{toplamFiyat} TL</span>
        </div>
        <div className="flex justify-between">
          <span>Kargo</span>
          <span>{kargo === 0 ? "Ücretsiz" : `${kargo} TL`}</span>
        </div>
        <div className="flex justify-between text-lg font-bold border-t pt-3">
          <span>Toplam</span>
          <span>{genelToplam} TL</span>
        </div>
        <Link
          href="/odeme"
          className="block text-center w-full bg-[#0f1b2d] text-white py-3 rounded font-medium mt-3"
        >
          Ödemeye Geç
        </Link>
      </div>
    </div>
  );
}
