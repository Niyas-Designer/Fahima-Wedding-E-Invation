import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function useLenis(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;

    const lenis = new Lenis({
      duration: 1.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.72,
      touchMultiplier: 1,
    });

    lenis.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [enabled]);
}
