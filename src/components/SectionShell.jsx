import { motion } from "framer-motion";
import FloralMotif from "./FloralMotif";

export default function SectionShell({ eyebrow, title, children, className = "", id }) {
  return (
    <section id={id} className={`story-section relative overflow-hidden px-5 py-8 ${className}`}>
      <motion.div
        className="absolute -left-14 top-3 h-32 w-32 opacity-20 blur-[0.2px]"
        aria-hidden="true"
        animate={{ y: [0, -7, 0], rotate: [0, 1.2, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <FloralMotif className="h-full w-full" />
      </motion.div>
      <motion.div
        className="absolute -right-14 bottom-2 h-[8.5rem] w-[8.5rem] opacity-[0.16]"
        aria-hidden="true"
        animate={{ y: [0, 8, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <FloralMotif className="h-full w-full" flip />
      </motion.div>
      <motion.div
        className="relative z-10 mx-auto w-full max-w-5xl"
        initial={{ y: 24, opacity: 0, filter: "blur(8px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.32 }}
        transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {(eyebrow || title) && (
          <div className="mb-6 text-center">
            {eyebrow && (
              <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-olive">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mx-auto max-w-2xl font-heading text-4xl font-semibold leading-[1.08] text-ink">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
