"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type SepetUrunu = {
  id: number;
  isim: string;
  fiyat: number;
  adet: number;
};

type SepetTipi = {
  sepet: SepetUrunu[];
  sepeteEkle: (urun: { id: number; isim: string; fiyat: number }) => void;
  sepettenCikar: (id: number) => void;
  adetDegistir: (id: number, fark: number) => void;
  sepetiTemizle: () => void;
  toplamAdet: number;
  toplamFiyat: number;
};

const SepetContext = createContext<SepetTipi | null>(null);

export function SepetProvider({ children }: { children: ReactNode }) {
  const [sepet, setSepet] = useState<SepetUrunu[]>([]);
  const [yuklendi, setYuklendi] = useState(false);

  // 1) Sayfa açılınca localStorage'dan oku
  useEffect(() => {
    try {
      const kayitli = localStorage.getItem("sepet");
      if (kayitli) setSepet(JSON.parse(kayitli));
    } catch {}
    setYuklendi(true);
  }, []);

  // 2) Sepet değişince localStorage'a yaz
  useEffect(() => {
    if (!yuklendi) return;
    try {
      localStorage.setItem("sepet", JSON.stringify(sepet));
    } catch {}
  }, [sepet, yuklendi]);

  function sepeteEkle(urun: { id: number; isim: string; fiyat: number }) {
    setSepet((onceki) => {
      const varMi = onceki.find((u) => u.id === urun.id);
      if (varMi) {
        return onceki.map((u) =>
          u.id === urun.id ? { ...u, adet: u.adet + 1 } : u
        );
      }
      return [...onceki, { ...urun, adet: 1 }];
    });
  }

  function sepettenCikar(id: number) {
    setSepet((onceki) => onceki.filter((u) => u.id !== id));
  }

  function adetDegistir(id: number, fark: number) {
    setSepet((onceki) =>
      onceki
        .map((u) => (u.id === id ? { ...u, adet: u.adet + fark } : u))
        .filter((u) => u.adet > 0)
    );
  }

  function sepetiTemizle() {
    setSepet([]);
  }

  const toplamAdet = sepet.reduce((t, u) => t + u.adet, 0);
  const toplamFiyat = sepet.reduce((t, u) => t + u.fiyat * u.adet, 0);

  return (
    <SepetContext.Provider
      value={{
        sepet,
        sepeteEkle,
        sepettenCikar,
        adetDegistir,
        sepetiTemizle,
        toplamAdet,
        toplamFiyat,
      }}
    >
      {children}
    </SepetContext.Provider>
  );
}

export function useSepet() {
  const context = useContext(SepetContext);
  if (!context) throw new Error("useSepet, SepetProvider içinde kullanılmalı");
  return context;
}
