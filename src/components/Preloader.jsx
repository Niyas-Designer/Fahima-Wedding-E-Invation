import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import { GiLinkedRings } from "react-icons/gi";
import loadingFloral from "../assets/loading-floral.json";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let completionTimer;
    const timer = window.setInterval(() => {
      setProgress((value) => {
        const next = Math.min(value + Math.ceil(Math.random() * 8), 100);
        if (next === 100) {
          window.clearInterval(timer);
          completionTimer = window.setTimeout(onComplete, 720);
        }
        return next;
      });
    }, 120);

    return () => {
      window.clearInterval(timer);
      window.clearTimeout(completionTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="loader-page fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-ivory"
        exit={{ opacity: 0, scale: 1.015, filter: "blur(14px)" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 paper-noise" />
        <motion.div
          className="loader-halo"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        />
        <div className="relative flex w-full max-w-sm flex-col items-center px-8 text-center">
          <motion.p
            className="mb-3 font-arabic text-2xl text-olive"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            dir="rtl"
          >
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </motion.p>

          <div className="loader-stationery relative mb-5 h-48 w-64">
            <div className="absolute left-1/2 top-0 h-36 w-36 -translate-x-1/2">
              <Lottie animationData={loadingFloral} loop autoplay />
            </div>
            <motion.div
              className="loader-card absolute inset-x-5 bottom-0 top-16"
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-heading text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-olive">
                A blessed beginning
              </span>
              <span className="gold-text mt-2 block font-heading text-4xl font-semibold">F · S</span>
              <GiLinkedRings className="mx-auto mt-2 text-2xl text-champagne" />
            </motion.div>
            <div className="loader-envelope-back" />
            <div className="loader-envelope-pocket" />
          </div>

          <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.34em] text-olive">
            Preparing your invitation
          </p>
          <div className="h-[2px] w-full max-w-[17rem] overflow-hidden rounded-full bg-champagne/20">
            <motion.div
              className="h-full bg-champagne"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
          </div>
          <div className="mt-3 font-display text-3xl text-ink tabular-nums">{progress}%</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
