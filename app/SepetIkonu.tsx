"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useSepet } from "./lib/SepetContext";

export default function SepetIkonu() {
  const { toplamAdet, toplamFiyat } = useSepet();

  return (
    <Link href="/sepet" className="flex items-center gap-2 text-sm font-semibold">
      <span className="relative">
        <ShoppingBag size={22} strokeWidth={1.5} />
        {toplamAdet > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#0f1b2d] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
            {toplamAdet}
          </span>
        )}
      </span>
      <span className="hidden sm:inline">{toplamFiyat} TL</span>
    </Link>
  );
}