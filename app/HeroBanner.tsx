import Link from "next/link";
import Image from "next/image";
import { Truck, RotateCcw, ShieldCheck, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto relative grid md:grid-cols-2 min-h-[440px]">
        {/* Sağdaki fotoğraf */}
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2">
          <Image src="/hero.jpg" alt="Hero" fill priority sizes="60vw" className="object-cover object-left" />
        </div>

        <button className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10"><ChevronLeft size={22} /></button>
        <button className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow items-center justify-center"><ChevronRight size={20} /></button>

        {/* Yüzen indirim rozeti */}
        <div className="hidden md:flex absolute top-8 left-[52%] z-10 w-28 h-28 rounded-full bg-[#0f1b2d] text-white flex-col items-center justify-center">
          <span className="text-[10px] tracking-widest">EN FAZLA</span>
          <span className="text-3xl font-extrabold text-[#c9a36f] leading-none">%50</span>
          <span className="text-[10px] tracking-widest">İNDİRİM</span>
        </div>

        {/* Sol metin */}
        <div className="relative z-10 px-4 py-12 md:py-16 bg-white/80 md:bg-transparent">
          <p className="text-[#b98b5e] font-semibold text-xs tracking-wider mb-3">MINIMARKET'E HOŞ GELDİNİZ</p>
          <h1 className="text-4xl md:text-[3.4rem] font-extrabold leading-[1.05] text-[#0f1b2d] mb-3">
            HER ŞEY.<br />HERKES İÇİN.
          </h1>
          <p className="text-4xl text-[#b98b5e] mb-4" style={{ fontFamily: "var(--font-vibes)" }}>
            En İyi Kalite, En İyi Fiyat!
          </p>
          <p className="text-gray-600 text-sm mb-6 max-w-xs">
            Sizin için özenle seçilmiş, geniş yelpazede kaliteli ürünleri keşfedin.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <Link href="/urunler" className="bg-[#0f1b2d] text-white text-xs font-semibold tracking-wide px-6 py-3 rounded flex items-center gap-2">
              ALIŞVERİŞE BAŞLA <ArrowRight size={14} />
            </Link>
            <Link href="/urunler" className="border border-gray-300 bg-white text-[#0f1b2d] text-xs font-semibold tracking-wide px-6 py-3 rounded">
              KOLEKSİYONLARI KEŞFET
            </Link>
          </div>

          <div className="flex flex-wrap gap-5 text-[11px] text-gray-600">
            {[
              { i: Truck, t: "ÜCRETSİZ KARGO", s: "500 TL üzeri siparişlerde" },
              { i: RotateCcw, t: "KOLAY İADE", s: "30 gün iade garantisi" },
              { i: ShieldCheck, t: "GÜVENLİ ÖDEME", s: "%100 güvenli alışveriş" },
            ].map(({ i: Icon, t, s }) => (
              <div key={t} className="flex items-center gap-2">
                <Icon size={24} strokeWidth={1.25} />
                <div><b className="block text-gray-900">{t}</b>{s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 pb-4 relative z-10">
        <span className="w-2 h-2 rounded-full bg-[#b98b5e]" />
        <span className="w-2 h-2 rounded-full bg-gray-300" />
        <span className="w-2 h-2 rounded-full bg-gray-300" />
        <span className="w-2 h-2 rounded-full bg-gray-300" />
      </div>
    </section>
  );
}