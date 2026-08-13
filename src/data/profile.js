
import profilephoto from '../../assests/passport photo.jpg'
import resumeSrc from '../../assests/Guhan_M_resume_ (3).pdf'

const profile = {
  name: "Guhan M",
  role: "Full-Stack Developer",
  roles: ["Full-Stack Developer", "MERN Stack Engineer", "React Developer"],
  location: "Chennai, Tamil Nadu, India",
  tagline:
    "I design and build multi-role web applications end-to-end — from data models and REST APIs to interfaces people actually enjoy using.",
  photoUrl: profilephoto,
  resumeUrl: resumeSrc,
  email: "guhan76guhan@gmail.com",
  phone: "+91 6374331549",
  github: "https://github.com/Guhan-M",
  linkedin: "https://www.linkedin.com/in/guhan-m-42029b25a/",
  about: [
    "I'm an MCA graduate based in Chennai with hands-on experience building full-stack, multi-role web applications using modern JavaScript tooling.",
    "My focus is the MERN stack — React on the front end, Node/Express and MongoDB on the back — with a habit of designing the data model and API first, then building an interface that stays out of the user's way.",
    "I care about the details that make an app feel production-ready: authentication that's actually secure, payments that reconcile correctly, and error states that tell people what to do next.",
  ],
  stats: [
    { label: "Education", value: "MCA" },
    { label: "Based in", value: "Chennai" },
    { label: "Focus", value: "MERN Stack" },
    { label: "Status", value: "Open to work" },
  ],
  emailjs: {
    // Filled in from a .env.local file (see .env.example) — keeps your keys
    // out of the source code and out of git. Until these are set, the
    // contact form falls back to opening the visitor's email client.
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
  },
};

export default profile;
