export const SITE = {
  name: "Rajeevni Umapathisivam",
  shortName: "Rajeevni",
  role: "Full Stack Developer",
  heroSubtitle:
    "BSc IT · University of Vavuniya · Available for internships & junior roles",
  tagline:
    "I build fast, user-friendly web applications — from pixel-perfect React interfaces to scalable Node.js backends. Currently seeking internship and junior developer opportunities.",
  aboutBio: [
    "I'm a final-year BSc IT student at the University of Vavuniya, specialising in full stack web development. Over the past two years I've built and shipped four end-to-end projects — spanning e-commerce marketplaces, gate-pass management systems, and course registration portals — using React, Node.js, Express, MongoDB, and MySQL.",
    "I'm passionate about writing clean, maintainable code and designing intuitive user experiences. I thrive in collaborative environments, pick up new technologies quickly, and enjoy turning real-world problems into polished digital products.",
    "Currently open to internships, junior developer roles, and freelance opportunities — remote or on-site.",
  ],
  email: "urajeevni@gmail.com",
  phone: "+94 778 280 888",
  location: "Trincomalee, Sri Lanka",
  linkedin: "https://www.linkedin.com/in/rajeevni-umapathisivam",
  github: "https://github.com/RajeevniUmapathisivam",
  liveUrl: "https://RajeevniUmapathisivam.github.io/portfolio",
  cvPdf: "cv.pdf",
  profileImage: "rajeevni.jpeg",
  aboutImage: "about.jpg",
  contactIntro:
    "Have a project in mind or a role you think I'd be a great fit for? I'd love to hear from you. I'm open to internships, junior developer positions, and freelance web development projects — remote or on-site. Expect a reply within 24 hours.",
};

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export const ABOUT_STATS = [
  { icon: "💼", value: "4", label: "Shipped projects", sub: "Academic & personal" },
  { icon: "✓", value: "Now", label: "Available", sub: "Remote & on-site" },
  { icon: "🎓", value: "BSc IT", label: "University of Vavuniya", sub: "Final-year student" },
];

export const services = [
  {
    icon: "⚛️",
    title: "Frontend Development",
    desc: "Building responsive, accessible interfaces with React and JavaScript. I focus on component architecture, performance, and smooth UX — from landing pages to complex dashboards styled with Tailwind CSS.",
  },
  {
    icon: "🖥️",
    title: "Backend Development",
    desc: "Designing and building RESTful APIs with Node.js and Express. I handle authentication (JWT), database modelling (MongoDB, MySQL), and server-side logic that scales reliably under real usage.",
  },
  {
    icon: "🔗",
    title: "Full Stack Delivery",
    desc: "Taking projects from requirements to deployment — architecting the database, building the API, and crafting the frontend. I deliver working, documented applications hosted on GitHub Pages or your preferred platform.",
  },
];

export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend Developer",
    icon: "code",
    skills: [
      { name: "ReactJS", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "HTML & CSS", level: "Advanced" },
      { name: "Tailwind CSS", level: "Intermediate" },
    ],
  },
  {
    id: "backend",
    label: "Backend Developer",
    icon: "server",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "REST APIs", level: "Advanced" },
      { name: "JWT Auth", level: "Intermediate" },
    ],
  },
  {
    id: "database",
    label: "Databases",
    icon: "database",
    skills: [
      { name: "MongoDB", level: "Advanced" },
      { name: "MySQL", level: "Intermediate" },
      { name: "Firebase", level: "Intermediate" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Other",
    icon: "tools",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "Linux", level: "Intermediate" },
      { name: "Postman", level: "Intermediate" },
    ],
  },
];

export const LEVEL_WIDTH = { Advanced: 92, Intermediate: 72, Strong: 90, Proficient: 75, Familiar: 55 };

export const education = [
  {
    title: "BSc. in Information Technology",
    org: "University of Vavuniya, Sri Lanka",
    date: "Sept 2023 — Present",
    detail: "Final year · Full stack web development",
  },
  {
    title: "G.C.E. Advanced Level — Physical Science",
    org: "Secondary education",
    date: "2021",
  },
];

export const work = [
  {
    title: "RentorX — E-Commerce (IT3232)",
    org: "Rental marketplace · Team project",
    date: "Ongoing",
  },
  {
    title: "Vehicle Gatepass System (IT3162)",
    org: "Digital gate-pass workflow · Group project",
    date: "Aug 2025 — Jan 2026",
  },
  {
    title: "Movie App (IT3133)",
    org: "Movie discovery platform · Individual project",
    date: "Sept — Nov 2025",
  },
  {
    title: "EduEnrollPro (IT2212)",
    org: "Course registration portal · Group project",
    date: "Apr — June 2025",
  },
];

export const PROJECT_FILTERS = ["All", "Web", "App"];

export const projects = [
  {
    id: 1,
    title: "RentorX",
    category: "Web",
    summary:
      "A full-featured rental marketplace built as a team project. Features map-based item search, user authentication, booking management, and a real-time admin dashboard.",
    meta: "React · Node.js · MongoDB",
    repo: "https://github.com/RajeevniUmapathisivam",
    demo: null,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=340&fit=crop",
  },
  {
    id: 2,
    title: "Vehicle Gatepass System",
    category: "Web",
    summary:
      "A digital gate-pass workflow replacing manual paper processes. Includes role-based access for admins and security personnel, pass generation, and audit logs.",
    meta: "React · Express · MySQL",
    repo: "https://github.com/RajeevniUmapathisivam",
    demo: null,
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f725e40f?w=500&h=340&fit=crop",
  },
  {
    id: 3,
    title: "Movie App",
    category: "App",
    summary:
      "A movie discovery platform with TMDB integration. Users can search, rate, and manage a personal watchlist, secured with JWT authentication.",
    meta: "React · Node.js · MongoDB · TMDB API",
    repo: "https://github.com/RajeevniUmapathisivam/Movie-app",
    demo: null,
    image: "https://opengraph.githubassets.com/1/RajeevniUmapathisivam/Movie-app",
  },
  {
    id: 4,
    title: "EduEnrollPro",
    category: "Web",
    summary:
      "A course registration portal for students and administrators. Handles enrolment requests, admin approval workflows, and analytics dashboards.",
    meta: "React · Node.js · MySQL",
    repo: "https://github.com/RajeevniUmapathisivam/EduEnrollPro",
    demo: null,
    image: "https://opengraph.githubassets.com/1/RajeevniUmapathisivam/EduEnrollPro",
  },
  {
    id: 5,
    title: "Portfolio Website",
    category: "Web",
    summary:
      "Personal developer portfolio with dark theme, smooth scroll navigation, and GitHub Pages deployment.",
    meta: "React · Tailwind CSS · GitHub Pages",
    repo: "https://github.com/RajeevniUmapathisivam/portfolio",
    demo: "https://RajeevniUmapathisivam.github.io/portfolio",
    image: "https://opengraph.githubassets.com/1/RajeevniUmapathisivam/portfolio",
  },
];
