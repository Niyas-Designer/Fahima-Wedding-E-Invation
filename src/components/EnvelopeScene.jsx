import { motion, useAnimationControls } from "framer-motion";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { GiLinkedRings } from "react-icons/gi";
import FloatingParticles from "./FloatingParticles";
import FloralMotif from "./FloralMotif";

export default function EnvelopeScene({ invitation, onRevealComplete }) {
  const [opened, setOpened] = useState(false);
  const sceneRef = useRef(null);
  const controls = useAnimationControls();

  const openEnvelope = async () => {
    if (opened) return;
    setOpened(true);

    const scene = sceneRef.current;
    const timeline = gsap
      .timeline()
      .to(scene, { "--seal-scale": 0.72, duration: 0.22, ease: "power2.out" })
      .to(scene, { "--seal-opacity": 0, duration: 0.36, ease: "power2.out" })
      .to(scene, { "--flap-rotate": -168, duration: 1.05, ease: "power4.inOut" }, 0.18)
      .to(scene, { "--card-y": -178, "--card-scale": 1.03, duration: 1.15, ease: "power4.out" }, 0.48)
      .to(scene, { "--scene-zoom": 1.035, duration: 1.2, ease: "power2.out" }, 0.26);

    await new Promise((resolve) => timeline.eventCallback("onComplete", resolve));
    await controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    });
    onRevealComplete?.();
  };

  return (
    <section
      ref={sceneRef}
      className="hero-scene relative min-h-[100svh] overflow-hidden px-5 pb-8 pt-6"
      style={{
        "--flap-rotate": 0,
        "--card-y": 0,
        "--card-scale": 0.92,
        "--seal-scale": 1,
        "--seal-opacity": 1,
        "--scene-zoom": 1,
      }}
    >
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,.76),transparent_30%),linear-gradient(180deg,rgba(250,248,243,.4),rgba(250,248,243,.94))]" />
      <FloatingParticles density={46} />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-4xl items-center justify-center">
        <button
          className="envelope-wrap group relative h-[310px] w-full max-w-[355px] touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
          onClick={openEnvelope}
          aria-label="Open wedding invitation envelope"
        >
          <div className="envelope-stage">
            <div className="invitation-card">
              <motion.div
                className="absolute -left-12 -top-10 h-28 w-28 opacity-38"
                animate={{ y: [0, -5, 0], rotate: [0, 0.9, 0] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
              >
                <FloralMotif className="h-full w-full" />
              </motion.div>
              <motion.div
                className="absolute -bottom-12 -right-12 h-32 w-32 opacity-38"
                animate={{ y: [0, 6, 0], rotate: [0, -0.8, 0] }}
                transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              >
                <FloralMotif className="h-full w-full" flip />
              </motion.div>
              <p className="font-arabic text-xl leading-relaxed text-olive" dir="rtl">
                بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
              </p>
              <p className="mt-3 text-[0.62rem] font-bold uppercase tracking-[0.34em] text-cocoa">
                You are invited
              </p>
              <p className="mt-3 font-heading text-4xl font-semibold leading-tight text-ink">
                {invitation.event.title}
              </p>
              <p className="mt-3 text-sm font-medium leading-6 text-cocoa">
                {invitation.event.displayDate} 
              </p>
            </div>

            <div className="envelope-back" />
            <div className="envelope-paper left-panel" />
            <div className="envelope-paper right-panel" />
            <div className="envelope-pocket" />
            <div className="envelope-flap" />
            <div className="wax-seal">
              <span>{invitation.couple.initials}</span>
            </div>
          </div>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={controls}
          className="absolute left-0 right-0 top-[calc(50%+165px)] flex flex-col items-center text-center"
        >
          <p className="max-w-xs text-sm leading-6 text-cocoa">
            Scroll gently to unfold the story, the details, and the blessing.
          </p>
          <motion.div
            className="mt-3 flex items-center gap-3 text-champagne"
            animate={{ y: [0, -4, 0], rotate: [0, 1, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          >
            <span className="h-px w-8 bg-champagne/45" />
            <span className="grid h-12 w-12 place-items-center rounded-full border border-champagne/45 bg-ivory/55 text-3xl shadow-gold">
              <GiLinkedRings />
            </span>
            <span className="h-px w-8 bg-champagne/45" />
          </motion.div>
        </motion.div>

        {!opened && (
          <motion.p
            className="absolute bottom-4 text-[0.7rem] font-bold uppercase tracking-[0.35em] text-olive"
            animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          >
            Tap the seal
          </motion.p>
        )}
      </div>
    </section>
  );
}
