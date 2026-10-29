"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const linkler = [
  { href: "/", isim: "ANA SAYFA" },
  { href: "/urunler", isim: "MAĞAZA" },
  { href: "/hakkimizda", isim: "HAKKIMIZDA" },
  { href: "/blog", isim: "BLOG" },
  { href: "/iletisim", isim: "İLETİŞİM" },
];

export default function NavLinkleri() {
  const yol = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wide">
      {linkler.map((l) => {
        const aktif = l.href === "/" ? yol === "/" : yol.startsWith(l.href);
        return (
          <Link
            key={l.href}
            href={l.href}
            className={aktif ? "border-b-2 border-[#0f1b2d] pb-1" : "pb-1 border-b-2 border-transparent"}
          >
            {l.isim}
          </Link>
        );
      })}
    </nav>
  );
}