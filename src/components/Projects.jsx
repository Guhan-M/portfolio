import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <motion.p
        className="eyebrow mb-2"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.p>
      <motion.h2
        className="section-heading mb-10"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
      >
        Things I&apos;ve built
      </motion.h2>

      <div className="grid gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <div>
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-brand-600 dark:text-brand-400">{p.tagline}</p>
            </div>

            <p className="mt-4 text-ink-700 dark:text-mist-200">{p.desc}</p>

            <ul className="mt-4 grid gap-x-6 gap-y-1 sm:grid-cols-2">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-ink-700 dark:text-mist-200">
                  <span className="text-brand-500">▸</span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>

            {(p.repo || p.demo) && (
              <div className="mt-6 flex flex-wrap gap-3 border-t border-mist-200 pt-5 dark:border-ink-700">
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" className="btn-outline">
                    <Github size={16} /> GitHub
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="btn-primary">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
