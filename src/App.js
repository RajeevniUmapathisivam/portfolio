import React, { useState, useEffect } from "react";
import "./App.css";

/* ─────────── DATA ─────────── */
const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const skillCategories = [
  {
    id: "frontend",
    label: "Frontend Development",
    icon: "code",
    defaultOpen: true,
    skills: [
      { name: "React", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "HTML & CSS", level: 92 },
    ],
  },
  {
    id: "backend",
    label: "Backend Development",
    icon: "server",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express", level: 78 },
      { name: "REST APIs", level: 83 },
    ],
  },
  {
    id: "database",
    label: "Databases",
    icon: "database",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 72 },
      { name: "Firebase", level: 65 },
    ],
  },
  {
    id: "tools",
    label: "Tools & DevOps",
    icon: "tools",
    skills: [
      { name: "Git & GitHub", level: 86 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 78 },
    ],
  },
];

const education = [
  { title: "BSc Information Technology", org: "Undergraduate Programme", date: "2022 — Present" },
  { title: "Diploma in IT", org: "Technical Institute", date: "2020 — 2022" },
  { title: "Advanced Level", org: "Secondary Education", date: "2018 — 2020" },
];

const work = [
  { title: "Full Stack Developer", org: "Personal Projects & Freelance", date: "2023 — Present" },
  { title: "Web Development Intern", org: "Tech Startup", date: "2023" },
  { title: "University Project Lead", org: "Course Registration System", date: "2024" },
];

const projects = [
  {
    id: 1,
    title: "RentorX — Rental Marketplace",
    meta: "Full Stack · React, Node.js, Leaflet",
    emoji: "🏠",
    link: "https://github.com/RajeevniUmapathisivam",
  },
  {
    id: 2,
    title: "Vehicle Gate Pass System",
    meta: "Full Stack · React, MongoDB, Express",
    emoji: "🚗",
    link: "https://github.com/RajeevniUmapathisivam",
  },
  {
    id: 3,
    title: "Movie Discovery App",
    meta: "Frontend · React, JWT, TMDB API",
    emoji: "🎬",
    link: "https://github.com/RajeevniUmapathisivam",
  },
  {
    id: 4,
    title: "Course Registration Portal",
    meta: "Full Stack · React, Chart.js, MySQL",
    emoji: "🎓",
    link: "https://github.com/RajeevniUmapathisivam",
  },
];

/* ─────────── ICONS ─────────── */
const IconLinkedIn = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconGitHub = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const IconMail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconSend = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const IconDownload = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const IconLocation = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const AccordionIcon = ({ type }) => {
  const icons = {
    code: "</>",
    server: "⚙",
    database: "🗄",
    tools: "🛠",
  };
  return <span className="accordion-icon">{icons[type] || "•"}</span>;
};

/* ─────────── MAIN ─────────── */
export default function App() {
  const [theme, setTheme] = useState("light");
  const [openSkill, setOpenSkill] = useState("frontend");
  const [expTab, setExpTab] = useState("education");
  const [projectIndex, setProjectIndex] = useState(0);
  const [formSent, setFormSent] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.firstName} ${form.lastName}`);
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:urajeevni@gmail.com?subject=${subject}&body=${body}`;
    setFormSent(true);
    setForm({ firstName: "", lastName: "", email: "", message: "" });
  };

  const timeline = expTab === "education" ? education : work;
  const currentProject = projects[projectIndex];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="app" data-theme={theme}>
        {/* Nav */}
        <header className="nav">
          <div className="nav-inner">
            <a href="#home" className="nav-logo">
              Rajeevni
            </a>
            <ul className="nav-links">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`}>{l.label}</a>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>
        </header>

        {/* Social sidebar */}
        <aside className="hero-social" aria-label="Social links">
          <a href="https://www.linkedin.com/in/rajeevni-umapathisivam" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <IconLinkedIn />
          </a>
          <a href="mailto:urajeevni@gmail.com" aria-label="Email">
            <IconMail />
          </a>
          <a href="https://github.com/RajeevniUmapathisivam" target="_blank" rel="noreferrer" aria-label="GitHub">
            <IconGitHub />
          </a>
        </aside>

        {/* Hero */}
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div>
              <h1 className="hero-name">Rajeevni Umapathisivam</h1>
              <p className="hero-role">Full Stack Developer</p>
              <p className="hero-desc">
                High level experience in web development, full-stack applications,
                and building scalable solutions with modern technologies.
              </p>
              <a href="#contact" className="btn-teal">
                Contact Me <IconSend />
              </a>
            </div>
            <div className="hero-visual">
              <div className="hero-blob">
                <div className="hero-blob-bg" />
                <img
                  className="hero-photo"
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rajeevni&backgroundColor=b6e3f4"
                  alt="Rajeevni Umapathisivam"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">About Me</h2>
              <p className="section-subtitle">My introduction</p>
            </div>
            <div className="about-grid">
              <div className="about-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                  alt="Developer workspace"
                />
              </div>
              <div>
                <p className="about-text">
                  I am an enthusiastic IT undergraduate focused on full-stack development,
                  system design, and building real-world scalable applications. I love turning
                  complex problems into elegant, user-friendly experiences through clean code
                  and thoughtful UI.
                </p>
                <div className="about-stats">
                  <div className="stat-card">
                    <span className="stat-value">3+</span>
                    <span className="stat-label">Years of experience</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-value">4+</span>
                    <span className="stat-label">Completed projects</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-value">12+</span>
                    <span className="stat-label">Technologies</span>
                  </div>
                </div>
                <a href="/cv.pdf" className="btn-teal">
                  Download CV <IconDownload />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section" style={{ background: "var(--bg-alt)" }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Skills</h2>
              <p className="section-subtitle">My technical level</p>
            </div>
            <div className="skills-grid">
              {skillCategories.map((cat) => (
                <div
                  key={cat.id}
                  className={`accordion ${openSkill === cat.id ? "open" : ""}`}
                >
                  <button
                    type="button"
                    className="accordion-header"
                    onClick={() => setOpenSkill(openSkill === cat.id ? "" : cat.id)}
                  >
                    <AccordionIcon type={cat.id} />
                    {cat.label}
                    <span className="accordion-chevron">▼</span>
                  </button>
                  {openSkill === cat.id && (
                    <div className="accordion-body">
                      {cat.skills.map((s) => (
                        <div key={s.name} className="skill-bar-row">
                          <div className="skill-bar-meta">
                            <span>{s.name}</span>
                            <span>{s.level}%</span>
                          </div>
                          <div className="skill-bar-track">
                            <div
                              className="skill-bar-fill"
                              style={{ width: `${s.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Experience</h2>
              <p className="section-subtitle">Professional journey</p>
            </div>
            <div className="exp-tabs">
              <button
                type="button"
                className={`exp-tab ${expTab === "education" ? "active" : ""}`}
                onClick={() => setExpTab("education")}
              >
                🎓 Education
              </button>
              <button
                type="button"
                className={`exp-tab ${expTab === "work" ? "active" : ""}`}
                onClick={() => setExpTab("work")}
              >
                💼 Work
              </button>
            </div>
            <div className="timeline">
              {timeline.map((item, i) => (
                <div key={`${item.title}-${i}`} className="timeline-item">
                  <span className="timeline-dot" />
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-org">{item.org}</p>
                  <p className="timeline-date">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects (Articles-style carousel) */}
        <section id="projects" className="section" style={{ background: "var(--bg-alt)" }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Projects</h2>
              <p className="section-subtitle">Most recent work</p>
            </div>
            <div className="projects-carousel">
              <button
                type="button"
                className="carousel-btn"
                onClick={() =>
                  setProjectIndex((i) => (i === 0 ? projects.length - 1 : i - 1))
                }
                aria-label="Previous project"
              >
                ‹
              </button>
              <div className="project-slide">
                <div className="project-thumb">{currentProject.emoji}</div>
                <div>
                  <h3 className="project-slide-title">{currentProject.title}</h3>
                  <p className="project-slide-meta">{currentProject.meta}</p>
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-teal"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
              <button
                type="button"
                className="carousel-btn"
                onClick={() =>
                  setProjectIndex((i) => (i === projects.length - 1 ? 0 : i + 1))
                }
                aria-label="Next project"
              >
                ›
              </button>
            </div>
            <div className="carousel-dots">
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  className={`carousel-dot ${i === projectIndex ? "active" : ""}`}
                  onClick={() => setProjectIndex(i)}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Contact</h2>
              <p className="section-subtitle">Get in touch</p>
            </div>
            <div className="contact-info-row">
              <div className="contact-info-item">
                <IconLocation />
                <span>Sri Lanka</span>
              </div>
              <div className="contact-info-item">
                <IconPhone />
                <a href="tel:0778280888">077 828 0888</a>
              </div>
              <div className="contact-info-item">
                <IconMail />
                <a href="mailto:urajeevni@gmail.com">urajeevni@gmail.com</a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={{ marginBottom: "1rem" }}
              />
              <textarea
                placeholder="Message"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <div className="form-submit-wrap">
                <button type="submit" className="btn-teal">
                  Send Message <IconSend />
                </button>
              </div>
              {formSent && (
                <p className="form-success">Your email client will open to send the message.</p>
              )}
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <p className="footer-name">Rajeevni</p>
                <p className="footer-role">Full Stack Developer</p>
              </div>
              <div className="footer-links">
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact Me</a>
              </div>
              <div className="footer-social">
                <a href="https://www.linkedin.com/in/rajeevni-umapathisivam" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <IconLinkedIn />
                </a>
                <a href="https://github.com/RajeevniUmapathisivam" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <IconGitHub />
                </a>
                <a href="mailto:urajeevni@gmail.com" aria-label="Email">
                  <IconMail />
                </a>
              </div>
            </div>
            <p className="footer-copy">
              © {new Date().getFullYear()} Rajeevni Umapathisivam. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
