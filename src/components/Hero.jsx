import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileDown, UserRound, Code2 } from "lucide-react";
import profile from "../data/profile";
import useTypewriter from "../hooks/useTypewriter";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Photo() {
  const [errored, setErrored] = useState(false);

  return (
    <div className="relative mx-auto h-56 w-56 shrink-0 sm:h-64 sm:w-64 lg:h-72 lg:w-72">
      {/* decorative glow blob */}
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-brand-400/40 to-brand-600/10 blur-2xl" />

      {/* slow-spinning dashed ring */}
      <div className="absolute -inset-3 rounded-full border-2 border-dashed border-brand-400/50 [animation:spin_18s_linear_infinite]" />

      {/* photo / fallback */}
      <div className="absolute inset-0 overflow-hidden rounded-full border-4 border-white shadow-card dark:border-ink-800">
        {!errored ? (
          <img
            src={profile.photoUrl}
            alt={profile.name}
            className="h-full w-full object-cover"
            onError={() => setErrored(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-mist-100 text-mist-400 dark:bg-ink-800 dark:text-ink-700">
            <UserRound size={72} strokeWidth={1.2} />
          </div>
        )}
      </div>

      {/* floating badge */}
      <div className="absolute -bottom-2 -right-2 flex h-14 w-14 items-center justify-center rounded-full border-4 border-mist-50 bg-brand-500 text-ink-950 shadow-card dark:border-ink-950">
        <Code2 size={24} />
      </div>
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="home" className="mx-auto max-w-5xl px-6 pb-16 pt-28 sm:pt-36">
      <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-xl text-center lg:text-left">
          <motion.p variants={item} className="eyebrow mb-4">
            {profile.location}
          </motion.p>

          <motion.h1 variants={item} className="font-display text-4xl font-extrabold leading-tight sm:text-6xl">
            Hi, I&apos;m {profile.name}
          </motion.h1>

          <motion.p variants={item} className="mt-4 h-9 font-mono text-lg text-brand-600 dark:text-brand-400 sm:text-xl">
            {typed}
            <span className="animate-pulse">|</span>
          </motion.p>

          <motion.p variants={item} className="mt-5 text-base text-ink-700 dark:text-mist-200 sm:text-lg">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#projects" className="btn-primary">
              View projects <ArrowRight size={16} />
            </a>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-outline">
              Resume <FileDown size={16} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <Photo />
        </motion.div>
      </div>
    </section>
  );
}
