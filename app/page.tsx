import Link from "next/link";
import { urunler } from "./lib/urunler";
import UrunKart from "./UrunKart";
import HeroBanner from "./HeroBanner";
import Kategoriler from "./Kategoriler";
import Avantajlar from "./Avantajlar";
import GuvenBulten from "./GuvenBulten";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Kategoriler />

      <section className="max-w-6xl mx-auto px-4 pb-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-sm font-bold tracking-wide">TREND ÜRÜNLER</h2>
          <Link href="/urunler" className="text-xs font-semibold">TÜM ÜRÜNLERİ GÖR →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {urunler.map((urun) => (
            <UrunKart key={urun.id} urun={urun} />
          ))}
        </div>
      </section>

      <Avantajlar />
      <GuvenBulten />
    </div>
  );
}