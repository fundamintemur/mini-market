import Image from "next/image";
import { LayoutGrid } from "lucide-react";
import Link from "next/link";

const kategoriler = [
  { isim: "Aksesuar", slug: "aksesuar", resim: "/kat-aksesuar.jpg" },
  { isim: "Elektronik", slug: "elektronik", resim: "/kat-elektronik.jpg" },
  { isim: "Ev & Yaşam", slug: "ev", resim: "/kat-ev.jpg" },
  { isim: "Moda", slug: "moda", resim: "/kat-moda.jpg" },
  { isim: "Güzellik", slug: "guzellik", resim: "/kat-guzellik.jpg" },
  { isim: "Spor", slug: "spor", resim: "/kat-spor.jpg" },
  { isim: "Oyuncak", slug: "oyuncak", resim: "/kat-oyuncak.jpg" },
];

export default function Kategoriler() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-center text-sm font-bold tracking-wide mb-6">
        KATEGORİYE GÖRE GÖZAT
      </h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
        {kategoriler.map((k) => (
          <Link
            key={k.isim}
            href={`/urunler?kategori=${k.slug}`}
            className="bg-gray-100 rounded-md overflow-hidden hover:shadow transition block"
          >
            {/* içi aynı kalıyor: Image ve p */}
          </Link>
        ))}
       <Link href="/urunler"></Link>
      </div>
    </section>
  );
}
