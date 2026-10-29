import Link from "next/link";
import { urunler } from "../../lib/urunler";
import SepeteEkleButonu from "../../SepeteEkleButonu";

export default async function UrunDetay({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const urun = urunler.find((u) => u.id === Number(id));

  if (!urun) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Ürün bulunamadı</h1>
        <Link href="/" className="text-orange-600 underline">
          Ana sayfaya dön
        </Link>
      </div>
    );
  }

  const indirimYuzdesi = Math.round(
    ((urun.eskiFiyat - urun.fiyat) / urun.eskiFiyat) * 100,
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Link href="/" className="text-sm text-gray-500 hover:text-gray-900">
        ← Ürünlere dön
      </Link>

      <div className="grid md:grid-cols-2 gap-10 mt-6">
        <div className="bg-gray-50 rounded-lg h-80 md:h-96 flex items-center justify-center relative">
          <span className="text-gray-300">Ürün Resmi</span>
          {indirimYuzdesi > 0 && (
            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -{indirimYuzdesi}%
            </span>
          )}
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{urun.isim}</h1>

          <div className="flex items-center gap-1 mb-4">
            <span className="text-yellow-500">★</span>
            <span className="text-sm text-gray-600">{urun.puan}</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl font-bold">{urun.fiyat} TL</span>
            <span className="text-lg text-gray-400 line-through">
              {urun.eskiFiyat} TL
            </span>
          </div>

          <p className="text-gray-600 mb-6">{urun.aciklama}</p>

          <SepeteEkleButonu
            urun={{ id: urun.id, isim: urun.isim, fiyat: urun.fiyat }}
          />

          <ul className="mt-8 space-y-2 text-sm text-gray-600">
            <li>🚚 500 TL üzeri ücretsiz kargo</li>
            <li>↩️ 30 gün iade garantisi</li>
            <li>🔒 Güvenli ödeme</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
