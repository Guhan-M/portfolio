import { motion } from "framer-motion";
import skillGroups from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-mist-100/60 py-20 dark:bg-ink-900/60">
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          className="eyebrow mb-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.p>
        <motion.h2
          className="section-heading mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Tools I build with
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((g, gi) => (
            <motion.div
              key={g.group}
              className="card p-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08 }}
            >
              <h3 className="mb-3 font-display font-semibold">{g.group}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
