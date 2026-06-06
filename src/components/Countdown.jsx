import { AnimatePresence, motion } from "framer-motion";
import SectionShell from "./SectionShell";
import { useCountdown } from "../hooks/useCountdown";

function TimeUnit({ label, value }) {
  return (
    <div className="count-card">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ rotateX: -75, opacity: 0, y: -8 }}
          animate={{ rotateX: 0, opacity: 1, y: 0 }}
          exit={{ rotateX: 75, opacity: 0, y: 8 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="block font-display text-4xl font-semibold tabular-nums text-ink"
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </AnimatePresence>
      <span className="mt-2 block text-[0.62rem] font-bold uppercase tracking-[0.22em] text-olive">
        {label}
      </span>
    </div>
  );
}

export default function Countdown({ date }) {
  const time = useCountdown(date);

  return (
    <SectionShell
      eyebrow="The Journey Begins Soon"
      title="Counting the moments until Allah's beautiful decree unfolds"
    >
      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3">
        <TimeUnit label="Days" value={time.days} />
        <TimeUnit label="Hours" value={time.hours} />
        <TimeUnit label="Minutes" value={time.minutes} />
        <TimeUnit label="Seconds" value={time.seconds} />
      </div>
      <p className="mx-auto mt-6 max-w-lg text-center text-base leading-7 text-cocoa">
        A sacred bond, a new beginning, and a celebration surrounded by family,
        love, and heartfelt du&apos;as.
      </p>
    </SectionShell>
  );
}
