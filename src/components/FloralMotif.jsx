import { useId } from "react";

export default function FloralMotif({ className = "", flip = false }) {
  const gradientId = useId().replace(/:/g, "");

  return (
    <svg
      className={className}
      viewBox="0 0 180 180"
      fill="none"
      aria-hidden="true"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <path
        d="M24 142C63 122 65 67 113 45"
        stroke={`url(#${gradientId})`}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M68 104C52 92 46 76 50 58C67 68 77 82 68 104Z"
        fill="#5F4524"
        fillOpacity="0.72"
      />
      <path
        d="M92 72C76 60 71 43 77 25C94 37 101 52 92 72Z"
        fill="#5F4524"
        fillOpacity="0.66"
      />
      <path
        d="M111 45C124 25 144 19 164 24C154 44 137 52 111 45Z"
        fill="#FAF8F3"
        stroke="#5F4524"
        strokeWidth="1.5"
      />
      <path
        d="M39 131C28 114 27 98 36 83C48 98 49 114 39 131Z"
        fill="#FAF8F3"
        stroke="#5F4524"
        strokeWidth="1.5"
      />
      <circle cx="111" cy="45" r="4" fill="#5F4524" />
      <circle cx="39" cy="131" r="3" fill="#5F4524" />
      <defs>
        <linearGradient id={gradientId} x1="24" y1="142" x2="138" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5F4524" />
          <stop offset="1" stopColor="#5F4524" />
        </linearGradient>
      </defs>
    </svg>
  );
}
