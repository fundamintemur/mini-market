import Link from "next/link";
import SosyalIkonlar from "./SosyalIkonlar";
import OdemeLogolari from "./OdemeLogolari";
import MarkaIkonu from "./MarkaIkonu";

export default function Footer() {
  return (
    <footer className="bg-[#0f1b2d] text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        <div className="col-span-2 md:col-span-1">
          <p className="flex items-center gap-2.5 text-white font-bold text-lg mb-3">
            <MarkaIkonu size={30} />
            MiniMarket
          </p>
          <p className="text-xs leading-relaxed mb-4">
            Kaliteli ürünler için tek adres. Akıllı alışveriş yapın, daha iyi
            yaşayın.
          </p>
          <SosyalIkonlar />
        </div>

        <div>
          <p className="text-white font-semibold text-xs tracking-wide mb-3">
            HIZLI LİNKLER
          </p>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/">Ana Sayfa</Link>
            </li>
            <li>
              <Link href="/urunler">Mağaza</Link>
            </li>
            <li>
              <Link href="/urunler">Koleksiyonlar</Link>
            </li>
            <li>
              <Link href="/hakkimizda">Hakkımızda</Link>
            </li>
            <li>
              <Link href="/iletisim">İletişim</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold text-xs tracking-wide mb-3">
            MÜŞTERİ HİZMETLERİ
          </p>
          <ul className="space-y-2 text-xs">
            <li>Sık Sorulan Sorular</li>
            <li>Kargo Politikası</li>
            <li>İade ve Değişim</li>
            <li>Şartlar ve Koşullar</li>
            <li>Gizlilik Politikası</li>
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold text-xs tracking-wide mb-3">
            HESABIM
          </p>
          <ul className="space-y-2 text-xs">
            <li>Hesabım</li>
            <li>Sipariş Geçmişi</li>
            <li>Favorilerim</li>
            <li>Sipariş Takibi</li>
            <li>Giriş / Kayıt</li>
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold text-xs tracking-wide mb-3">
            İLETİŞİM
          </p>
          <ul className="space-y-2 text-xs">
            <li>📞 +90 555 555 55 55</li>
            <li>✉️ destek@minimarket.com</li>
            <li>📍 Antalya, Türkiye</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 MiniMarket. Tüm hakları saklıdır.</p>
          <OdemeLogolari />
        </div>
      </div>
    </footer>
  );
}
