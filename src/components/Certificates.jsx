import { motion } from "framer-motion";
import { Award, FileText, ExternalLink } from "lucide-react";
import certificates from "../data/certificates";

export default function Certificates() {
  return (
    <section id="certificates" className="bg-mist-100/60 py-20 dark:bg-ink-900/60">
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          className="eyebrow mb-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Certificates
        </motion.p>
        <motion.h2
          className="section-heading mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Courses &amp; credentials
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c, i) => (
            <motion.article
              key={c.title}
              className="card flex flex-col p-5"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4 }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                <Award size={22} />
              </div>

              <h3 className="font-display font-semibold leading-snug">{c.title}</h3>
              <p className="mt-1 text-sm text-ink-700 dark:text-mist-200">{c.issuer}</p>
              <p className="mt-1 font-mono text-xs text-ink-700/60 dark:text-mist-200/60">{c.date}</p>

              {(c.fileUrl || c.credentialUrl) ? (
                <div className="mt-4 flex flex-wrap gap-2 pt-1">
                  {c.fileUrl && (
                    <a
                      href={c.fileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline !px-3 !py-1.5 text-xs"
                    >
                      <FileText size={14} /> View
                    </a>
                  )}
                  {c.credentialUrl && (
                    <a
                      href={c.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline !px-3 !py-1.5 text-xs"
                    >
                      <ExternalLink size={14} /> Verify
                    </a>
                  )}
                </div>
              ) : (
                <p className="mt-4 font-mono text-xs text-ink-700/50 dark:text-mist-200/50">
                  add a link in src/data/certificates.js
                </p>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
