"use client";

import Link from "next/link";
import { useSepet } from "./lib/SepetContext";
import Image from "next/image";

type Urun = {
  id: number;
  isim: string;
  fiyat: number;
  eskiFiyat: number;
  puan: number;
  yorum: number;
  resim: string;
};

export default function UrunKart({ urun }: { urun: Urun }) {
  const { sepeteEkle } = useSepet();
  const indirim = Math.round(
    ((urun.eskiFiyat - urun.fiyat) / urun.eskiFiyat) * 100,
  );
  const dolu = Math.round(urun.puan);

  return (
    <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
      <Link href={`/urun/${urun.id}`} className="block relative">
        {indirim > 0 && (
          <span className="absolute top-2 right-2 z-10 bg-[#0f1b2d] text-white text-[11px] font-bold px-2 py-0.5 rounded">
            -%{indirim}
          </span>
        )}
        <div className="relative h-44 bg-gray-100">
          <Image
            src={urun.resim}
            alt={urun.isim}
            fill
            sizes="(max-width: 768px) 50vw, 20vw"
            className="object-cover"
          />
        </div>
      </Link>

      <div className="p-3">
        <Link
          href={`/urun/${urun.id}`}
          className="text-sm font-medium text-gray-900 block truncate"
        >
          {urun.isim}
        </Link>

        <div className="flex items-center gap-1 mt-1 text-xs">
          <span className="text-orange-400 tracking-tight">
            {"★".repeat(dolu)}
            <span className="text-gray-300">{"★".repeat(5 - dolu)}</span>
          </span>
          <span className="text-gray-500">({urun.yorum})</span>
        </div>

        <div className="flex items-baseline gap-2 mt-2 mb-3">
          <span className="font-bold text-gray-900">{urun.fiyat} TL</span>
          {urun.eskiFiyat > urun.fiyat && (
            <span className="text-xs text-gray-400 line-through">
              {urun.eskiFiyat} TL
            </span>
          )}
        </div>

        <button
          onClick={() => {
            console.log("tıklandı", urun.id);
            sepeteEkle({ id: urun.id, isim: urun.isim, fiyat: urun.fiyat });
          }}
          className="w-full border border-gray-300 text-xs font-semibold tracking-wide py-2 rounded hover:bg-[#0f1b2d] hover:text-white transition"
        >
          🛒 SEPETE EKLE
        </button>
      </div>
    </div>
  );
}
