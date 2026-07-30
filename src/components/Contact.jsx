import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";
import profile from "../data/profile";

const SOCIALS = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { icon: Github, label: "GitHub", value: profile.github.replace("https://", ""), href: profile.github },
  { icon: Linkedin, label: "LinkedIn", value: profile.linkedin.replace("https://", ""), href: profile.linkedin },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const emailjsConfigured = profile.emailjs.serviceId && profile.emailjs.templateId && profile.emailjs.publicKey;

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailjsConfigured) {
      // No EmailJS keys yet — fall back to opening the user's mail client.
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${profile.email}?subject=Portfolio contact&body=${body}`;
      return;
    }

    try {
      setStatus("sending");
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        profile.emailjs.serviceId,
        profile.emailjs.templateId,
        { from_name: form.name, from_email: form.email, reply_to: form.email, message: form.message },
        { publicKey: profile.emailjs.publicKey }
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <motion.p
        className="eyebrow mb-2"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.p>
      <motion.h2
        className="section-heading mb-4"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
      >
        Let&apos;s work together
      </motion.h2>
      <p className="mb-10 max-w-xl text-ink-700 dark:text-mist-200">
        Have a role, project, or just want to talk shop about the MERN stack? Send a message or
        reach me directly below.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.form
          onSubmit={handleSubmit}
          className="card space-y-4 p-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-mist-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-ink-700"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-mist-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-ink-700"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-mist-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-ink-700"
              placeholder="What's on your mind?"
            />
          </div>

          <button type="submit" className="btn-primary w-full justify-center" disabled={status === "sending"}>
            {status === "sent" ? (
              <>
                <CheckCircle2 size={16} /> Sent!
              </>
            ) : status === "sending" ? (
              "Sending..."
            ) : (
              <>
                Send message <Send size={16} />
              </>
            )}
          </button>

           </motion.form>

        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {SOCIALS.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="card flex items-center gap-3 p-4 transition-transform hover:-translate-y-0.5"
            >
              <span className="rounded-lg bg-brand-500/10 p-2 text-brand-600 dark:text-brand-400">
                <Icon size={18} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-ink-700/70 dark:text-mist-200/70">
                  {label}
                </span>
                <span className="font-medium">{value}</span>
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
