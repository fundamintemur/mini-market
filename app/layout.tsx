import type { Metadata } from "next";
import { Inter, Great_Vibes } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { SepetProvider } from "./lib/SepetContext";
import SepetIkonu from "./SepetIkonu";
import Footer from "./Footer";
import { Search, User, ShoppingBag, ChevronDown } from "lucide-react";
import NavLinkleri from "./NavLinkleri";

const inter = Inter({ variable: "--font-inter", subsets: ["latin", "latin-ext"] });
const vibes = Great_Vibes({ variable: "--font-vibes", subsets: ["latin", "latin-ext"], weight: "400" });

export const metadata: Metadata = {
  title: "MiniMarket",
  description: "Mini e-ticaret sitesi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${vibes.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-gray-900">
        <SepetProvider>
          <header className="bg-white">
            {/* Duyuru şeridi */}
            <div className="bg-[#0f1b2d] text-white">
              <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center gap-4 text-sm md:text-base font-bold tracking-wide">
                <span>
                 500 TL ÜZERİ SİPARİŞLERDE <span className="text-[#d9b382]">ÜCRETSİZ KARGO!</span>
                </span>
                <span className="hidden sm:inline bg-[#e3c39a] text-[#0f1b2d] text-xs font-semibold px-4 py-2 rounded">
                  KONUŞALIM →
                </span>
              </div>
            </div>

            {/* Ana header */}
            {/* Ana header */}
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between border-b border-gray-100">
              <Link href="/" className="flex items-center gap-3">
                <ShoppingBag size={34} strokeWidth={1.25} />
                <span className="leading-tight">
                  <span className="block text-2xl font-light tracking-[0.18em]">
                    MINIMARKET
                  </span>
                  <span className="block text-[9px] tracking-[0.3em] text-gray-500">
                    HER İHTİYACINIZ İÇİN
                  </span>
                </span>
              </Link>

              <NavLinkleri/>

              <div className="flex items-center gap-5">
                <Search size={20} strokeWidth={1.5} />
                <User size={20} strokeWidth={1.5} />
                <SepetIkonu />
              </div>
            </div>
          </header>

          {children}

          <Footer />
        </SepetProvider>
      </body>
    </html>
  );
}
