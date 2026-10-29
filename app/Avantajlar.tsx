import Link from "next/link";
import { Package, Percent, Gift } from "lucide-react";

export default function Avantajlar() {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-3 overflow-hidden rounded-sm">
        <div className="bg-[#0f1b2d] text-white p-6 flex items-center gap-4">
         <Package size={48} strokeWidth={1.25} />
          <div>
            <p className="font-bold text-sm tracking-wide">ÜCRETSİZ KARGO</p>
            <p className="text-sm text-gray-300">500 TL üzeri siparişlerde</p>
            <Link href="/urunler" className="text-sm font-semibold mt-1 inline-block">Alışverişe Başla →</Link>
          </div>
        </div>

        <div className="bg-[#b98b5e] text-white p-6 flex items-center gap-4">
          <Percent size={48} strokeWidth={1.25} />
          <div>
            <p className="font-bold text-sm tracking-wide">ÖZEL TEKLİF</p>
            <p className="text-sm">%50'ye varan indirim</p>
            <Link href="/urunler" className="text-sm font-semibold mt-1 inline-block">Fırsatı Yakala →</Link>
          </div>
        </div>

        <div className="bg-[#f1ece7] text-[#0f1b2d] p-6 flex items-center gap-4">
         <Gift size={48} strokeWidth={1.25} />
          <div>
            <p className="font-bold text-sm tracking-wide">ÜYELİK AVANTAJLARI</p>
            <p className="text-sm text-gray-600">Katıl, özel fırsatları kaçırma</p>
            <Link href="/" className="text-sm font-semibold mt-1 inline-block">Ücretsiz Katıl →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}