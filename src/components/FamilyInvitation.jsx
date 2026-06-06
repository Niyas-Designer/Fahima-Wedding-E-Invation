import { motion } from "framer-motion";
import SectionShell from "./SectionShell";

export default function FamilyInvitation({ family }) {
  return (
    <SectionShell
      className="two-tone-section"
      eyebrow="With Our Families"
      title="Invited with love, received with du'a"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          className="text-lg leading-9 text-cocoa"
          initial={{ letterSpacing: "0.08em", opacity: 0 }}
          whileInView={{ letterSpacing: "0em", opacity: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>
            <span className="gold-text block font-heading text-2xl font-semibold leading-tight">
              {family.brideParents}
            </span>
            <span className="mt-2 block">({family.brideHome})</span>
          </p>
          <p className="mt-6">
            With hearts full of gratitude to Allah ﷻ, we warmly invite you and
            your family to join us in celebrating a blessed union as our beloved
            daughter enters a new chapter of life and faith.
          </p>
          <p className="mt-6">
            <span className="gold-text block font-heading text-4xl font-semibold leading-tight">
              Fahima Farvez
            </span>
            <span className="mt-3 block font-heading text-2xl font-semibold leading-snug text-ink">
              Grand D/o of C.K Ebrahimkutty &amp; C.K Abdul Azeez
            </span>
          </p>
          <p className="mt-4">with</p>
          <p className="mt-4">
            <span className="gold-text block font-heading text-4xl font-semibold leading-tight">
              Shaz Muhammed Shafeek
            </span>
            <span className="mt-3 block font-heading text-2xl font-semibold leading-snug text-ink">
              S/o of Shafeek &amp; Shuhaiba Shafeek
            </span>
            <span className="mt-2 block">({family.groomHome})</span>
          </p>
          <p className="mt-6">
            Your presence, prayers, and blessings will make this joyous occasion
            even more meaningful to us.
          </p>
        </motion.div>
      </div>
    </SectionShell>
  );
}
