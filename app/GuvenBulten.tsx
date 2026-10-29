import { ShieldCheck } from "lucide-react";

// ÖNEMLİ: Aşağıdaki puan ve yorum sayısı ÖRNEKTİR.
// Siteyi yayınlamadan önce kendi gerçek verinle değiştir ya da bu bölümü kaldır.
const PUAN = "4.8/5";
const YORUM_METNI = "2.500+ yoruma göre";

const avatarlar = [
  { harf: "AY", renk: "bg-[#b98b5e]" },
  { harf: "MK", renk: "bg-[#3d5a80]" },
  { harf: "ZD", renk: "bg-[#6b8f71]" },
  { harf: "EB", renk: "bg-[#8d6a9f]" },
];

export default function GuvenBulten() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
      <div className="flex items-center gap-5 flex-wrap">
        <div className="flex items-center gap-3">
          <ShieldCheck size={40} strokeWidth={1.25} className="text-[#0f1b2d]" />
          <div>
            <p className="font-bold text-sm">BİNLERCE KİŞİNİN TERCİHİ</p>
            <p className="text-xs text-gray-500">Kaliteli ürünler, mutlu müşteriler.</p>
          </div>
        </div>

        <div className="flex -space-x-2.5">
          {avatarlar.map((a) => (
            <span
              key={a.harf}
              className={`w-9 h-9 rounded-full ${a.renk} text-white text-[11px] font-bold flex items-center justify-center ring-2 ring-white`}
            >
              {a.harf}
            </span>
          ))}
        </div>

        <div>
          <p className="font-bold">
            {PUAN} <span className="text-orange-400 text-sm">★★★★★</span>
          </p>
          <p className="text-xs text-gray-500">{YORUM_METNI}</p>
        </div>
      </div>

      <div>
        <p className="font-bold text-sm mb-1">BÜLTENİMİZE ABONE OLUN</p>
        <p className="text-xs text-gray-500 mb-3">
          Yeni ürünler ve kampanyalardan ilk siz haberdar olun.
        </p>
        <form className="flex">
          <input
            type="email"
            placeholder="E-posta adresiniz"
            className="flex-1 border border-gray-300 px-3 py-2 text-sm outline-none"
          />
          <button type="button" className="bg-[#0f1b2d] text-white text-xs font-semibold px-5">
            ABONE OL
          </button>
        </form>
      </div>
    </section>
  );
}