import profile from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-mist-200 py-8 dark:border-ink-700">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 text-sm text-ink-700/70 dark:text-mist-200/70 sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="font-mono text-xs">Built with React, Vite &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
