import { Suspense } from "react";
import Link from "next/link";
import { urunler } from "../lib/urunler";
import UrunKart from "../UrunKart";

const kategoriler = [
  { isim: "Tümü", slug: "" },
  { isim: "Aksesuar", slug: "aksesuar" },
  { isim: "Elektronik", slug: "elektronik" },
  { isim: "Ev & Yaşam", slug: "ev" },
  { isim: "Moda", slug: "moda" },
  { isim: "Güzellik", slug: "guzellik" },
  { isim: "Spor", slug: "spor" },
  { isim: "Oyuncak", slug: "oyuncak" },
];

export default function Urunler({
  searchParams,
}: {
  searchParams: Promise<{ kategori?: string }>;
}) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Tüm Ürünler</h1>

      <Suspense fallback={<p className="text-gray-500">Yükleniyor...</p>}>
        <UrunListesi searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

async function UrunListesi({
  searchParams,
}: {
  searchParams: Promise<{ kategori?: string }>;
}) {
  const { kategori } = await searchParams;
  const liste = kategori ? urunler.filter((u) => u.kategori === kategori) : urunler;

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8">
        {kategoriler.map((k) => {
          const aktif = (kategori ?? "") === k.slug;
          return (
            <Link
              key={k.slug}
              href={k.slug ? `/urunler?kategori=${k.slug}` : "/urunler"}
              className={`text-xs font-semibold px-4 py-2 rounded-full border ${
                aktif
                  ? "bg-[#0f1b2d] text-white border-[#0f1b2d]"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {k.isim}
            </Link>
          );
        })}
      </div>

      {liste.length === 0 ? (
        <p className="text-gray-500">Bu kategoride henüz ürün yok.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {liste.map((urun) => (
            <UrunKart key={urun.id} urun={urun} />
          ))}
        </div>
      )}
    </>
  );
}