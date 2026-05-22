export const SITE = {
  name: "Rajeevni Umapathisivam",
  shortName: "Rajeevni",
  role: "Full Stack Developer",
  tagline:
    "BSc IT undergraduate (3rd year) at University of Vavuniya — motivated developer with CGPA 3.37, strong in React, Node.js, and real-world academic projects.",
  aboutSummary:
    "Motivated IT undergraduate with a strong foundation in programming and web development, eager to gain practical industry experience. Quick learner with strong problem-solving skills and a passion for working on real-world projects in collaborative environments.",
  email: "urajeevni@gmail.com",
  phone: "+94 778 280 888",
  location: "Trincomalee, Sri Lanka",
  linkedin: "https://www.linkedin.com/in/rajeevni-umapathisivam",
  github: "https://github.com/RajeevniUmapathisivam",
  liveUrl: "https://RajeevniUmapathisivam.github.io/portfolio",
  cvPdf: "cv.pdf",
};

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const ABOUT_STATS = [
  { value: "3.37", label: "CGPA (out of 4.0)" },
  { value: "4", label: "Academic projects" },
  { value: "2", label: "Certifications" },
];

/** Matches TECHNICAL SKILLS + SOFT SKILLS + CERTIFICATIONS from CV */
export const skillCategories = [
  {
    id: "programming",
    label: "Programming",
    icon: "code",
    skills: [
      { name: "JavaScript", level: "Strong" },
      { name: "Java", level: "Strong" },
      { name: "C / C++", level: "Proficient" },
      { name: "C#", level: "Proficient" },
      { name: "PHP", level: "Proficient" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: "code",
    skills: [
      { name: "ReactJS", level: "Strong" },
      { name: "React Native", level: "Proficient" },
      { name: "Tailwind CSS", level: "Proficient" },
      { name: "HTML & CSS", level: "Strong" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", level: "Strong" },
      { name: "Express.js", level: "Strong" },
      { name: "REST APIs", level: "Strong" },
      { name: "JWT Authentication", level: "Proficient" },
    ],
  },
  {
    id: "database",
    label: "Databases",
    icon: "database",
    skills: [
      { name: "MongoDB", level: "Strong" },
      { name: "MySQL", level: "Proficient" },
      { name: "Firebase", level: "Proficient" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    icon: "tools",
    skills: [
      { name: "VS Code", level: "Strong" },
      { name: "Visual Studio", level: "Proficient" },
      { name: "GitHub", level: "Strong" },
      { name: "Linux", level: "Proficient" },
      { name: "Shell Scripting", level: "Proficient" },
    ],
  },
  {
    id: "soft",
    label: "Soft Skills",
    icon: "soft",
    listOnly: true,
    skills: [
      { name: "Leadership" },
      { name: "Communication" },
      { name: "Teamwork" },
      { name: "Critical Thinking" },
      { name: "Problem Solving" },
    ],
  },
  {
    id: "certifications",
    label: "Certifications",
    icon: "cert",
    listOnly: true,
    skills: [
      { name: "Cisco — JavaScript Essentials 1" },
      { name: "Sololearn — SQL (Intro & Intermediate)" },
    ],
  },
];

export const LEVEL_WIDTH = { Strong: 90, Proficient: 75, Familiar: 55 };

export const education = [
  {
    title: "BSc. in Information Technology",
    org: "University of Vavuniya, Sri Lanka · CGPA 3.37 / 4.0",
    date: "Sept 2023 — Present",
    detail: "3rd Year · OOP, DSA, OS, Networks, Software Engineering, DB Systems",
  },
  {
    title: "G.C.E. Advanced Level — Physical Science",
    org: "Secondary education",
    date: "2021",
  },
  {
    title: "G.C.E. Ordinary Level",
    org: "7A, 2B (Mathematics, ICT, English Literature)",
    date: "2018",
  },
];

export const work = [
  {
    title: "RentorX — E-Commerce (IT3232)",
    org: "Web rental marketplace · Group project · Ongoing",
    date: "Ongoing",
  },
  {
    title: "Online Vehicle Gatepass System (IT3162)",
    org: "Gate pass & vehicle tracking · Group project",
    date: "Aug 2025 — Jan 2026",
  },
  {
    title: "Movie App (IT3133)",
    org: "Movie browse, auth, watchlist · Individual project",
    date: "Sept 2025 — Nov 2025",
  },
  {
    title: "Course Registration System (IT2212)",
    org: "EduEnrollPro · MIS group project",
    date: "Apr 2025 — June 2025",
  },
];

export const achievements = [
  "IEEE Xtreme 18.0 — Participant (2024)",
  "AIESEC Member (2025)",
];

export const projects = [
  {
    id: 1,
    title: "RentorX — Rental Marketplace",
    summary:
      "IT3232 E-Commerce group project: property/equipment rental with map-based search, bookings dashboard, and Leaflet-powered nearby view.",
    meta: "React · Tailwind CSS · Leaflet · Vite · IT3232",
    repo: "https://github.com/RajeevniUmapathisivam",
    demo: null,
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Online Vehicle Gatepass Management System",
    summary:
      "IT3162 group project: digital gate pass requests, vehicle entry/exit tracking, admin & security dashboards, and approval workflows.",
    meta: "React · Node.js · Express · MongoDB · REST API",
    repo: "https://github.com/RajeevniUmapathisivam",
    demo: null,
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f725e40f?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Movie App",
    summary:
      "IT3133 individual project: browse and search movies, ratings, trailers, JWT auth, favorites/watchlist, and responsive UI.",
    meta: "React · Node.js · MongoDB · JWT · REST APIs",
    repo: "https://github.com/RajeevniUmapathisivam/Movie-app",
    demo: null,
    image:
      "https://opengraph.githubassets.com/1/RajeevniUmapathisivam/Movie-app",
  },
  {
    id: 4,
    title: "Course Registration System — EduEnrollPro",
    summary:
      "IT2212 MIS group project: semester course registration, admin approval, analytics, notifications, and audit logs.",
    meta: "React · Node.js · MongoDB · JWT · Chart.js",
    repo: "https://github.com/RajeevniUmapathisivam/EduEnrollPro",
    demo: null,
    image:
      "https://opengraph.githubassets.com/1/RajeevniUmapathisivam/EduEnrollPro",
  },
];
