import { Lock } from "lucide-react";

const rozet =
  "h-8 w-14 rounded-md bg-white flex items-center justify-center shadow-sm";

export default function OdemeLogolari() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="flex items-center gap-1.5 text-xs text-gray-300">
        <Lock size={14} strokeWidth={1.75} />
        Güvenli ödeme
      </span>

      <div className="flex items-center gap-2">
        <span className={rozet} title="Visa">
          <svg viewBox="0 0 48 30" width="44" height="28" aria-label="Visa">
            <text x="24" y="21" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontStyle="italic" fontSize="17" letterSpacing="-0.5" fill="#1a1f71">
              VISA
            </text>
          </svg>
        </span>

        <span className={rozet} title="Mastercard">
          <svg viewBox="0 0 48 30" width="44" height="28" aria-label="Mastercard">
            <circle cx="18" cy="15" r="9" fill="#eb001b" />
            <circle cx="30" cy="15" r="9" fill="#f79e1b" />
            <path d="M24 8.29A9 9 0 0 1 24 21.71A9 9 0 0 1 24 8.29Z" fill="#ff5f00" />
          </svg>
        </span>

        <span className={rozet} title="Troy">
          <svg viewBox="0 0 48 30" width="44" height="28" aria-label="Troy">
            <text x="24" y="20" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="13" letterSpacing="0.5" fill="#0a2d6e">
              TROY
            </text>
          </svg>
        </span>

        <span className="h-8 px-3 rounded-md bg-white flex items-center text-xs font-bold text-[#1e64ff] shadow-sm">
          iyzico
          <span className="ml-1 font-medium text-gray-500">ile Öde</span>
        </span>
      </div>
    </div>
  );
}