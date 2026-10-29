"use client";

import { useSepet } from "./lib/SepetContext";

export default function SepeteEkleButonu({
  urun,
}: {
  urun: { id: number; isim: string; fiyat: number };
}) {
  const { sepeteEkle } = useSepet();

  return (
    <button
      onClick={() => sepeteEkle(urun)}
      className="bg-gray-900 text-white px-8 py-3 rounded font-medium hover:bg-gray-700 transition"
    >
      🛒 Sepete Ekle
    </button>
  );
}