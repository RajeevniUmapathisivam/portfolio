export const SITE = {
  name: "Rajeevni Umapathisivam",
  shortName: "Rajeevni",
  role: "Full Stack Developer",
  tagline:
    "BSc IT undergraduate building full-stack apps with React, Node.js, and MongoDB — 4+ shipped university and personal projects.",
  email: "urajeevni@gmail.com",
  phone: "0778280888",
  location: "Sri Lanka",
  linkedin: "https://www.linkedin.com/in/rajeevni-umapathisivam",
  github: "https://github.com/RajeevniUmapathisivam",
  liveUrl: "https://RajeevniUmapathisivam.github.io/portfolio",
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
  { value: "3+", label: "Years learning & building" },
  { value: "4+", label: "Featured projects" },
  { value: "12+", label: "Technologies used" },
];

export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend Development",
    icon: "code",
    skills: [
      { name: "React", level: "Strong" },
      { name: "JavaScript", level: "Strong" },
      { name: "HTML & CSS", level: "Strong" },
      { name: "Tailwind CSS", level: "Proficient" },
    ],
  },
  {
    id: "backend",
    label: "Backend Development",
    icon: "server",
    skills: [
      { name: "Node.js", level: "Proficient" },
      { name: "Express", level: "Proficient" },
      { name: "REST APIs", level: "Strong" },
      { name: "Java", level: "Proficient" },
    ],
  },
  {
    id: "database",
    label: "Databases",
    icon: "database",
    skills: [
      { name: "MongoDB", level: "Proficient" },
      { name: "MySQL", level: "Proficient" },
      { name: "Firebase", level: "Familiar" },
    ],
  },
  {
    id: "tools",
    label: "Tools & DevOps",
    icon: "tools",
    skills: [
      { name: "Git & GitHub", level: "Strong" },
      { name: "VS Code", level: "Strong" },
      { name: "Postman", level: "Proficient" },
      { name: "Figma", level: "Familiar" },
    ],
  },
];

export const LEVEL_WIDTH = { Strong: 90, Proficient: 75, Familiar: 55 };

export const education = [
  {
    title: "BSc (Hons) Information Technology",
    org: "Undergraduate degree programme · Sri Lanka",
    date: "2022 — Present",
  },
  {
    title: "Advanced Level (Physical Science)",
    org: "Secondary education",
    date: "2018 — 2020",
  },
];

export const work = [
  {
    title: "Full Stack Developer — Personal Projects",
    org: "React, Node.js, MongoDB applications",
    date: "2023 — Present",
  },
  {
    title: "Course Project Lead — EduEnrollPro",
    org: "University course registration system",
    date: "2024 — 2025",
  },
  {
    title: "Web Services & APIs — IT2234",
    org: "RESTful services coursework (GitHub)",
    date: "2025",
  },
];

export const projects = [
  {
    id: 1,
    title: "EduEnrollPro — Course Registration Portal",
    summary:
      "University course registration system with analytics dashboard, capacity management, and semester planning.",
    meta: "Full Stack · React, Node.js, Chart.js, MySQL",
    repo: "https://github.com/RajeevniUmapathisivam/EduEnrollPro",
    demo: null,
    image:
      "https://opengraph.githubassets.com/1/RajeevniUmapathisivam/EduEnrollPro",
  },
  {
    id: 2,
    title: "Movie Discovery App",
    summary:
      "Movie platform with authentication, personal watchlists, ratings, and TMDB API integration.",
    meta: "Frontend · React, TypeScript, JWT",
    repo: "https://github.com/RajeevniUmapathisivam/Movie-app",
    demo: null,
    image:
      "https://opengraph.githubassets.com/1/RajeevniUmapathisivam/Movie-app",
  },
  {
    id: 3,
    title: "Web Services Application — IT2234",
    summary:
      "Web services coursework covering REST APIs, backend integration, and structured service design.",
    meta: "Backend · Web Services · IT2234",
    repo: "https://github.com/RajeevniUmapathisivam/WebService-IT2234",
    demo: null,
    image:
      "https://opengraph.githubassets.com/1/RajeevniUmapathisivam/WebService-IT2234",
  },
  {
    id: 4,
    title: "Developer Portfolio",
    summary:
      "Personal portfolio with responsive layout, dark mode, project showcase, and GitHub Pages deployment.",
    meta: "Frontend · React, CSS, GitHub Pages",
    repo: "https://github.com/RajeevniUmapathisivam/portfolio",
    demo: "https://RajeevniUmapathisivam.github.io/portfolio",
    image:
      "https://opengraph.githubassets.com/1/RajeevniUmapathisivam/portfolio",
  },
];
