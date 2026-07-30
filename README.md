# Guhan M — Portfolio

A personal portfolio built with **React, Vite, Tailwind CSS, Framer Motion, and EmailJS**
— modeled after the same feature set as https://ishika-portfolio-snowy.vercel.app/
(clean minimal UI, light/dark theme, animated sections, interactive project cards,
resume download, working contact form, GitHub/LinkedIn links).

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Features

- Light / dark theme toggle (persisted, respects system preference on first visit)
- Framer Motion entrance and scroll-triggered animations
- Typewriter effect cycling through role titles in the hero
- Contact form wired for EmailJS, with a mailto fallback until you add your keys
- Fully responsive, keyboard-focus visible, respects reduced-motion preference

## Personalize it

- **`src/data/profile.js`** — name, email, phone, GitHub/LinkedIn, tagline, and about text.
  (EmailJS keys go in `.env.local`, not here — see below.)
- **`src/data/skills.js`** — skill groups.
- **`src/data/projects.js`** — one entry per project; add more objects to the array
  as you ship new work.
- **`src/data/certificates.js`** — one entry per certificate/course. Drop the
  certificate file (PDF or image) into `public/certificates/` and point
  `fileUrl` at it (e.g. `/certificates/mern-cert.pdf`), and/or set
  `credentialUrl` to an external verification link. Leave both blank to show
  a "add a link" placeholder instead of broken buttons.

### Photo

Drop your photo into `public/` as `profile.jpg` (or update `photoUrl` in
`src/data/profile.js` to match your filename). Until you add one, the hero
shows a placeholder avatar inside the same decorative ring.

### Resume

Drop your resume PDF into `public/` and update `resumeUrl` in `src/data/profile.js`
to match the filename (e.g. `public/resume.pdf` → `resumeUrl: "/resume.pdf"`).

### Contact form (EmailJS)

The form is already wired for EmailJS in `src/components/Contact.jsx` — you just
need an account and three values.

1. **Sign up** at [emailjs.com](https://www.emailjs.com) (free tier: 200 emails/month).
2. **Email Services** → *Add New Service* → connect Gmail (or Outlook/other).
   Use your real sending address — don't tick "Use Default Email Address".
   Copy the **Service ID**.
3. **Email Templates** → *Create New Template*. Set the "To Email" field to
   your own address, and use these variables in the subject/body so they
   match the code:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{reply_to}}` — set the template's Reply-To field to this, so replying goes to the visitor
   - `{{message}}` — the message body

   Save it and copy the **Template ID**.
4. **Account → API Keys** → copy your **Public Key**.
5. Copy `.env.example` to `.env.local` in the project root and fill in the
   three values:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
6. Restart `npm run dev` (Vite only reads `.env.local` on startup). Submit
   the form to test — you should get an email at the address you set in step 3.

`.env.local` is gitignored, so your keys won't be committed. When you deploy
(Vercel/Netlify/etc.), add the same three variables in your host's
environment-variable settings, since `.env.local` doesn't get deployed with
the build.

**Security note:** the Public Key is meant to be public — it's fine that it
ends up in the built JS bundle. Never put an EmailJS *Private Key* (Access
Token) in this project; that one must stay server-side.

Until you set this up, the form falls back to opening the visitor's email
client with a pre-filled message instead.


## Deploying

`npm run build` outputs a static `dist/` folder — deploy it to Vercel, Netlify,
GitHub Pages, or any static host.
