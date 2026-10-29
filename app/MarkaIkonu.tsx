export default function MarkaIkonu({ size = 32 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="14" fill="#0f1b2d" />
      <path d="M24 25v-4a8 8 0 0 1 16 0v4" fill="none" stroke="#d9b382" strokeWidth="4" strokeLinecap="round" />
      <rect x="15" y="24" width="34" height="28" rx="6" fill="#ffffff" />
      <path d="M22.5 45V33.5l9.5 8 9.5-8V45" fill="none" stroke="#0f1b2d" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}