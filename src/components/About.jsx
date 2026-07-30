import { motion } from "framer-motion";
import profile from "../data/profile";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <motion.p
        className="eyebrow mb-2"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        About
      </motion.p>
      <motion.h2
        className="section-heading mb-10"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
      >
        A little about me
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {profile.about.map((para) => (
            <p key={para.slice(0, 20)} className="mb-4 text-ink-700 dark:text-mist-200">
              {para}
            </p>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
        >
          {profile.stats.map((s) => (
            <div key={s.label} className="card p-4">
              <p className="font-mono text-xs uppercase tracking-wide text-ink-700/70 dark:text-mist-200/70">
                {s.label}
              </p>
              <p className="mt-1 font-display text-lg font-semibold">{s.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
