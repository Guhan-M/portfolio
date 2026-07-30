// Add one object per certificate. `fileUrl` should point to a PDF or image
// you've placed in public/certificates/ (e.g. "/certificates/mern-cert.pdf").
// `credentialUrl` is for an external verification link (Coursera, Udemy,
// LinkedIn Learning, etc.) — set whichever ones you have, or leave "".

const certificates = [
  {
    title: "MERN Stack Development",
    issuer: "GUVI Geek Networks, IITM Research Park",
    date: "2024",
    fileUrl: "https://www.guvi.in/share-certificate/8RpM0w1110z65fZ675", // or image/PDF path
    credentialUrl: "", // Add GUVI verification URL if available
  },
  {
    title: "PGDCA (Post Graduate Diploma in Computer Applications)",
    issuer: "Astro Computer Education, Chennai",
    date: "2023",
    fileUrl: "https://drive.google.com/file/d/1XygiuP-LyGAqeomt6FDJLg3mlcArPhpN/view?usp=sharing",
    credentialUrl: "",
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL (SWAYAM)",
    date: "2025",
    fileUrl: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs57/Course/NPTEL25CS57S74320423604424745.pdf",
    credentialUrl: "", // Add NPTEL verification URL if available
  },
];

export default certificates;
