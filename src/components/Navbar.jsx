import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import useTheme from "../hooks/useTheme";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificates" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 border-b border-mist-200/70 bg-mist-50/80 backdrop-blur dark:border-ink-700/70 dark:bg-ink-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-lg font-bold">
          Guhan<span className="text-brand-500">.</span>
        </a>

        <nav className="hidden gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm font-medium text-ink-700 transition-colors hover:text-brand-500 dark:text-mist-200 dark:hover:text-brand-400"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="rounded-lg border border-mist-200 p-2 text-ink-700 transition-colors hover:border-brand-500 hover:text-brand-500 dark:border-ink-700 dark:text-mist-200 dark:hover:border-brand-400 dark:hover:text-brand-400"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="rounded-lg border border-mist-200 p-2 text-ink-700 dark:border-ink-700 dark:text-mist-200 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="flex flex-col gap-1 border-t border-mist-200 px-6 py-3 dark:border-ink-700 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:bg-mist-100 dark:text-mist-200 dark:hover:bg-ink-800"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
