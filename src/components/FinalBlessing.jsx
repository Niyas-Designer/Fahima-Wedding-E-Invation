import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import SectionShell from "./SectionShell";

function WeddingHallIllustration() {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 360 240"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="#7B5725" strokeLinecap="round" strokeLinejoin="round">
        <path d="M42 204H318" strokeWidth="2" />
        <path d="M58 204V112H302V204" strokeWidth="2" />
        <path d="M76 112V87H284V112" strokeWidth="2" />
        <path d="M96 87V71H264V87" strokeWidth="2" />
        <path d="M133 71C139 43 158 29 180 29C202 29 221 43 227 71" strokeWidth="2.2" />
        <path d="M180 29V16M174 20H186" strokeWidth="1.8" />
        <path d="M72 112C75 93 86 83 99 83C112 83 123 93 126 112" strokeWidth="1.6" />
        <path d="M234 112C237 93 248 83 261 83C274 83 285 93 288 112" strokeWidth="1.6" />
        <path d="M88 204V138H122V204M238 204V138H272V204" strokeWidth="1.6" />
        <path d="M143 204V151C143 130 159 116 180 116C201 116 217 130 217 151V204" strokeWidth="2" />
        <path d="M157 204V154C157 141 167 132 180 132C193 132 203 141 203 154V204" strokeWidth="1.5" />
        <path d="M104 138V204M256 138V204" strokeWidth="1.3" />
        <path d="M58 124H302M76 99H284" strokeWidth="1.2" />
        <path d="M43 204C54 193 65 189 76 190M317 204C306 193 295 189 284 190" strokeWidth="1.5" />
        <circle cx="180" cy="93" r="9" strokeWidth="1.5" />
        <path d="M176 93H184M180 89V97" strokeWidth="1.2" />
      </g>
      <g fill="#956C32">
        <circle cx="58" cy="112" r="2.5" />
        <circle cx="302" cy="112" r="2.5" />
        <circle cx="76" cy="87" r="2" />
        <circle cx="284" cy="87" r="2" />
        <circle cx="96" cy="71" r="2" />
        <circle cx="264" cy="71" r="2" />
      </g>
    </svg>
  );
}

export default function FinalBlessing() {
  return (
    <SectionShell eyebrow="" className="!pb-8 !pt-4">
      <div className="mx-auto max-w-3xl text-center">
        <div className="relative mx-auto flex min-h-52 max-w-sm items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-[0.07]">
            <WeddingHallIllustration />
          </div>
          <p className="relative z-10 mx-auto max-w-xs font-heading text-2xl font-semibold leading-8 text-ink">
            "With love, prayers, and blessings from our families & friends."
          </p>
        </div>
        <motion.span
          className="mx-auto mt-2 grid h-8 w-8 place-items-center text-xl text-champagne"
          animate={{ scale: [1, 1.14, 1, 1.09, 1], opacity: [0.72, 1, 0.78, 0.96, 0.72] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <FaHeart />
        </motion.span>
      </div>
    </SectionShell>
  );
}
