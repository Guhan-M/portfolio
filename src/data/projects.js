const projects = [
  {
    name: "Resume Builder",
    tagline: "MERN Stack Resume Builder",
    desc: "A full-stack resume builder application that allows users to create professional resumes, upload profile photos, and download resumes as PDFs.",
    features: [
      "Multiple resume templates",
      "PDF download functionality",
      "Profile photo upload using Multer",
      "JWT authentication",
      "Forgot Password with Nodemailer"
    ],
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Multer",
      "Nodemailer"
    ],
    repo: "https://github.com/Guhan-M/Resume-Builder-Frontend", 
    demo: "https://resumebuildergm.netlify.app/" 
  },
  {
    name: "Zendesk Ticket Management",
    tagline: "Apartment Help Portal",
    desc: "A MERN Stack ticket management system where users can raise complaints, track ticket status, and admins can assign and resolve tickets.",
    features: [
      "Public User, Admin, and Super Admin roles",
      "Ticket creation and status tracking",
      "Admin ticket assignment",
      "REST API with Express.js",
      "Responsive React dashboards"
    ],
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT"
    ],
    repo: "https://zen1desk.netlify.app/login", 
    demo: "https://github.com/Guhan-M/ZenDesk-Frontend" 
  },
  {
    name: "ServiceHub",
    tagline: "Full-stack home-services booking platform",
    desc: "A comprehensive platform connecting customers, technicians, and admins with secure authentication, online payments, service booking, and invoice generation.",
    features: [
      "Role-based authentication (Customer, Technician, Super Admin) using JWT & RBAC",
      "Multi-service booking with floating cart interface",
      "Razorpay payment integration (UPI, Card, Net Banking, Wallet, Cash on Service)",
      "OTP-based Forgot Password using Nodemailer & Gmail SMTP",
      "PDF invoice generation using PDFKit"
    ],
    tags: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Razorpay",
      "PDFKit",
      "Nodemailer"
    ],
    repo: "https://github.com/Guhan-M/Service_organizer_frontend_",
    demo: "https://serviceorganzier.netlify.app/login"
  }
];

export default projects;
