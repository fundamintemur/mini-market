import { Suspense } from "react";
import Sonuc from "./Sonuc";

export default function SonucSayfasi() {
  return (
    <Suspense
      fallback={<p className="text-center py-20 text-gray-500">Yükleniyor...</p>}
    >
      <Sonuc />
    </Suspense>
  );
}
