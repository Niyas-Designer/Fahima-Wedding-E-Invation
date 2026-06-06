import { motion } from "framer-motion";

export default function SplitText({ text, className = "", by = "char", delay = 0 }) {
  const parts = by === "word" ? text.split(" ") : Array.from(text);

  return (
    <span className={className} aria-label={text}>
      {parts.map((part, index) => (
        <motion.span
          aria-hidden="true"
          className="inline-block"
          key={`${part}-${index}`}
          initial={{ y: 12, opacity: 0, filter: "blur(5px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{
            delay: delay + index * (by === "word" ? 0.055 : 0.02),
            duration: 0.82,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {part === " " ? "\u00A0" : part}
          {by === "word" && index < parts.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
  );
}
