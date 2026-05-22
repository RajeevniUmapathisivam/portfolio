export const SITE = {
  name: "Rajeevni Umapathisivam",
  shortName: "Rajeevni",
  role: "Full Stack Developer",
  tagline:
    "BSc IT undergraduate building scalable web apps with React, Node.js, and MongoDB.",
  aboutSummary:
    "Motivated IT undergraduate with a strong foundation in programming and web development, eager to gain practical industry experience. Quick learner with strong problem-solving skills and a passion for real-world projects in collaborative environments.",
  email: "urajeevni@gmail.com",
  phone: "+94 778 280 888",
  location: "Trincomalee, Sri Lanka",
  linkedin: "https://www.linkedin.com/in/rajeevni-umapathisivam",
  github: "https://github.com/RajeevniUmapathisivam",
  liveUrl: "https://RajeevniUmapathisivam.github.io/portfolio",
  cvPdf: "cv.pdf",
  profileImage: "rajeevni.jpeg",
  aboutImage: "about.jpg",
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
  { icon: "🎓", value: "3.37", label: "CGPA Score", sub: "University of Vavuniya" },
  { icon: "💼", value: "4+", label: "Projects Done", sub: "Academic & personal" },
  { icon: "🌐", value: "24/7", label: "Open to Work", sub: "Remote & on-site" },
];

export const services = [
  {
    icon: "⚛️",
    title: "Frontend Developer",
    desc: "Modern React interfaces, responsive layouts, and smooth user experiences with JavaScript and Tailwind.",
  },
  {
    icon: "🖥️",
    title: "Backend Developer",
    desc: "REST APIs, Node.js, Express, authentication, and database design with MongoDB and MySQL.",
  },
  {
    icon: "🔗",
    title: "Full Stack Solutions",
    desc: "End-to-end web applications from concept to deployment, including GitHub Pages and project delivery.",
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
    org: "University of Vavuniya · CGPA 3.37 / 4.0",
    date: "Sept 2023 — Present",
    detail: "3rd Year · OOP, DSA, OS, Networks, Software Engineering",
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
    org: "Rental marketplace · Group project",
    date: "Ongoing",
  },
  {
    title: "Vehicle Gatepass System (IT3162)",
    org: "Gate pass management · Group project",
    date: "Aug 2025 — Jan 2026",
  },
  {
    title: "Movie App (IT3133)",
    org: "Individual project",
    date: "Sept — Nov 2025",
  },
  {
    title: "EduEnrollPro (IT2212)",
    org: "Course registration system",
    date: "Apr — June 2025",
  },
];

export const achievements = [
  "IEEE Xtreme 18.0 — Participant (2024)",
  "AIESEC Member (2025)",
];

export const PROJECT_FILTERS = ["All", "Web", "App"];

export const projects = [
  {
    id: 1,
    title: "RentorX",
    category: "Web",
    summary: "E-commerce rental marketplace with map search and booking dashboard.",
    meta: "React · Tailwind · Leaflet",
    repo: "https://github.com/RajeevniUmapathisivam",
    demo: null,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=340&fit=crop",
  },
  {
    id: 2,
    title: "Vehicle Gatepass",
    category: "Web",
    summary: "Digital gate pass system with admin and security dashboards.",
    meta: "React · Node.js · MongoDB",
    repo: "https://github.com/RajeevniUmapathisivam",
    demo: null,
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f725e40f?w=500&h=340&fit=crop",
  },
  {
    id: 3,
    title: "Movie App",
    category: "App",
    summary: "Movie discovery with JWT auth, watchlist, and TMDB integration.",
    meta: "React · Node.js · JWT",
    repo: "https://github.com/RajeevniUmapathisivam/Movie-app",
    demo: null,
    image: "https://opengraph.githubassets.com/1/RajeevniUmapathisivam/Movie-app",
  },
  {
    id: 4,
    title: "EduEnrollPro",
    category: "Web",
    summary: "Course registration portal with analytics and admin approval.",
    meta: "React · MongoDB · Chart.js",
    repo: "https://github.com/RajeevniUmapathisivam/EduEnrollPro",
    demo: null,
    image: "https://opengraph.githubassets.com/1/RajeevniUmapathisivam/EduEnrollPro",
  },
  {
    id: 5,
    title: "Portfolio Website",
    category: "Web",
    summary: "Personal portfolio with dark theme and GitHub Pages deploy.",
    meta: "React · CSS",
    repo: "https://github.com/RajeevniUmapathisivam/portfolio",
    demo: "https://RajeevniUmapathisivam.github.io/portfolio",
    image: "https://opengraph.githubassets.com/1/RajeevniUmapathisivam/portfolio",
  },
];
