export const SITE = {
  name: "Rajeevni Umapathisivam",
  shortName: "Rajeevni",
  role: "Full Stack Developer",
  heroSubtitle:
    "Final-year BSc (Hons) in IT undergraduate · University of Vavuniya",
  tagline:
    "I build fast, user-friendly web applications — from React frontends to Node.js APIs. Strongest in authentication flows, REST APIs, and turning coursework into production-style apps.",
  aboutBio: [
    "I'm a final-year BSc (Hons) in IT student at the University of Vavuniya, specialising in full stack web development. Over the past two years I've built four end-to-end projects — rental marketplaces, gate-pass systems, and registration portals — using React, Node.js, Express, MongoDB, and MySQL.",
    "On team projects I typically own API design, database schema, and integration; on solo work I deliver the full stack. I'm currently seeking internship and junior developer roles — remote or on-site in Sri Lanka.",
  ],
  email: "urajeevni@gmail.com",
  phone: "+94 778 280 888",
  location: "Trincomalee, Sri Lanka",
  linkedin: "https://www.linkedin.com/in/rajeevni-umapathisivam",
  github: "https://github.com/RajeevniUmapathisivam",
  liveUrl: "https://rajeevniumapathisivam.github.io/portfolio",
  cvPdf: "cv.pdf",
  profileImage: "rajeevni.jpeg",
  aboutImage: "about.jpg",
  contactIntro:
    "Have a project in mind or a role you think I'd be a great fit for? I'd love to hear from you. I'm open to internships, junior developer positions, and freelance web development projects — remote or on-site. Let us connect and explore how I can contribute.",
};

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Focus" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export const ABOUT_STATS = [
  { icon: "💼", value: "4", label: "Full-stack projects", sub: "Academic & personal" },
  { icon: "✓", value: "Now", label: "Available", sub: "Remote & on-site" },
  { icon: "🎓", value: "BSc (Hons) in IT", label: "University of Vavuniya", sub: "Final-year student" },
];

export const services = [
  {
    icon: "⚛️",
    title: "Frontend Development",
    desc: "Building responsive, accessible interfaces with React and JavaScript. I focus on component architecture, performance, and smooth UX — from landing pages to complex dashboards with modern CSS and reusable components.",
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
      { name: "Responsive UI / CSS", level: "Intermediate" },
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

/** Friendlier labels shown on skill badges */
export const LEVEL_LABEL = {
  Advanced: "Strong",
  Intermediate: "Comfortable",
  Strong: "Strong",
  Proficient: "Comfortable",
  Familiar: "Learning",
};

export const education = [
  {
    title: "Final-year IT undergraduate",
    org: "University of Vavuniya, Sri Lanka",
    date: "2026",
    dateLabel: "2026",
    detail: "BSc (Hons) in IT · Seeking internship and junior developer opportunities.",
    current: true,
  },
  {
    title: "Developing full-stack applications",
    org: "University of Vavuniya, Sri Lanka",
    date: "2025",
    dateLabel: "2025",
    detail: "Continued BSc (Hons) in IT studies with a focus on full-stack development. Applied React, Node.js, Express, and databases to academic and personal projects, building experience with REST APIs, authentication, and team collaboration.",
  },
  {
    title: "Building a foundation in IT",
    org: "University of Vavuniya, Sri Lanka",
    date: "2024",
    dateLabel: "2024",
    detail: "Developed a foundation in programming, web development, and database concepts through undergraduate coursework. Practised HTML, CSS, and JavaScript while learning to turn requirements into structured, working applications.",
  },
  {
    title: "Started BSc (Hons) in IT",
    org: "University of Vavuniya, Sri Lanka",
    date: "2023-09",
    dateLabel: "2023",
    detail: "Began undergraduate studies in September 2023.",
  },
  {
    title: "G.C.E. Advanced Level",
    org: "Physical Science stream",
    date: "2021",
    dateLabel: "2021",
    detail: "Combined Mathematics, Physics, Chemistry",
  },
];

export const PROJECT_FILTERS = ["All", "Full Stack", "Web"];

export const projects = [
  {
    id: 1,
    title: "RentorX",
    category: "Full Stack",
    summary:
      "A full-featured rental marketplace built as a team project. Features map-based item search, user authentication, booking management, and a real-time admin dashboard.",
    highlight: "Team · IT3232 · Map search, bookings & admin dashboard",
    meta: "React · Node.js · MongoDB",
    bullets: [
      "Contributed to API routes and MongoDB models for listings and bookings",
      "Implemented auth and role-based access for renters and admins",
    ],
    repo: "https://github.com/RajeevniUmapathisivam",
    repoNote: "Team coursework — repository may be private",
    demo: null,
    image: "projects/rentorx.jpg",
  },
  {
    id: 2,
    title: "Vehicle Gatepass System",
    category: "Full Stack",
    summary:
      "A digital gate-pass workflow replacing manual paper processes. Includes role-based access for admins and security personnel, pass generation, and audit logs.",
    highlight: "Group · IT3162 · Replaced manual gate-pass paperwork",
    meta: "React · Express · MySQL",
    bullets: [
      "Built Express REST API with MySQL for pass requests and approvals",
      "Designed admin vs security dashboards with audit-friendly logs",
    ],
    repo: "https://github.com/RajeevniUmapathisivam",
    repoNote: "Group coursework — repository may be private",
    demo: null,
    image: "projects/gatepass.jpg",
  },
  {
    id: 3,
    title: "Movie App",
    category: "Full Stack",
    summary:
      "A movie discovery platform with TMDB integration. Users can search, rate, and manage a personal watchlist, secured with JWT authentication.",
    highlight: "Solo · IT3133 · TMDB API + JWT auth + watchlists",
    meta: "React · Node.js · MongoDB · TMDB API",
    bullets: [
      "Integrated TMDB API for search and movie metadata",
      "Implemented JWT login, protected routes, and personal watchlists",
    ],
    repo: "https://github.com/RajeevniUmapathisivam/Movie-app",
    demo: null,
    image: "projects/movie-app.jpg",
  },
  {
    id: 4,
    title: "EduEnrollPro",
    category: "Full Stack",
    summary:
      "A course registration portal for students and administrators. Handles enrolment requests, admin approval workflows, and analytics dashboards.",
    highlight: "Group · IT2212 · Enrolment + admin approval flows",
    meta: "React · Node.js · MySQL",
    bullets: [
      "Developed student enrolment flow and admin approval workflow",
      "MySQL schema for courses, students, and request status tracking",
    ],
    repo: "https://github.com/RajeevniUmapathisivam/EduEnrollPro",
    demo: null,
    image: "projects/eduenroll.jpg",
  },
  {
    id: 5,
    title: "Portfolio Website",
    category: "Web",
    summary:
      "Personal developer portfolio with dark/light themes, scroll animations, accessible layout, and GitHub Pages deployment.",
    highlight: "Solo · React · Framer Motion · GitHub Pages",
    meta: "React · CSS · Framer Motion · GitHub Pages",
    bullets: [
      "Single-page React app with theme toggle and scroll-triggered animations",
      "Deployed to GitHub Pages with SEO meta tags and structured data",
    ],
    repo: "https://github.com/RajeevniUmapathisivam/portfolio",
    demo: "https://rajeevniumapathisivam.github.io/portfolio",
    image: "projects/portfolio.jpg",
  },
];
