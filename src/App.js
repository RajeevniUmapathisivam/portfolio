import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────── DATA ─────────── */
const projects = [
  {
    id: 1,
    title: "RentorX",
    desc: "A full-featured rental marketplace with real-time map-based search, advanced filtering, and an owner dashboard for listing management.",
    tech: ["React", "Tailwind", "Leaflet", "Node.js"],
    category: "Full Stack",
    color: "#6366f1",
    emoji: "🏠",
    github: "https://github.com/RajeevniUmapathisivam",
    demo: "#",
  },
  {
    id: 2,
    title: "Vehicle Gate Pass",
    desc: "Smart vehicle entry/exit tracking system with role-based approval workflows, real-time status updates, and audit logs.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
    color: "#10b981",
    emoji: "🚗",
    github: "https://github.com/RajeevniUmapathisivam",
    demo: "#",
  },
  {
    id: 3,
    title: "Movie App",
    desc: "Movie discovery platform with JWT authentication, personal watchlists, ratings, and TMDB API integration.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    category: "Frontend",
    color: "#f59e0b",
    emoji: "🎬",
    github: "https://github.com/RajeevniUmapathisivam",
    demo: "#",
  },
  {
    id: 4,
    title: "Course Registration",
    desc: "University course registration portal with analytics dashboard, student capacity management, and semester planning tools.",
    tech: ["React", "Node.js", "Chart.js", "MySQL"],
    category: "Full Stack",
    color: "#ec4899",
    emoji: "🎓",
    github: "https://github.com/RajeevniUmapathisivam",
    demo: "#",
  },
];

const FILTERS = ["All", "Full Stack", "Frontend"];

const skillCategories = [
  {
    label: "Frontend",
    icon: "🎨",
    color: "#6366f1",
    skills: [
      { name: "React",      icon: "⚛️", level: 88 },
      { name: "JavaScript", icon: "🟨", level: 85 },
      { name: "HTML & CSS", icon: "🌐", level: 92 },
      { name: "Tailwind",   icon: "💨", level: 80 },
    ],
  },
  {
    label: "Backend",
    icon: "⚙️",
    color: "#10b981",
    skills: [
      { name: "Node.js",  icon: "🟩", level: 82 },
      { name: "Express", icon: "🚂", level: 78 },
      { name: "Java",    icon: "☕", level: 75 },
      { name: "REST API",icon: "🔗", level: 83 },
    ],
  },
  {
    label: "Database",
    icon: "🗄️",
    color: "#f59e0b",
    skills: [
      { name: "MongoDB", icon: "🍃", level: 80 },
      { name: "MySQL",   icon: "🐬", level: 72 },
      { name: "Firebase",icon: "🔥", level: 65 },
    ],
  },
  {
    label: "Tools & DevOps",
    icon: "🛠️",
    color: "#ec4899",
    skills: [
      { name: "Git & GitHub", icon: "🐙", level: 86 },
      { name: "VS Code",      icon: "💻", level: 90 },
      { name: "Postman",      icon: "📮", level: 78 },
      { name: "Figma",        icon: "🎭", level: 60 },
    ],
  },
];

/* ─────────── COMPONENT ─────────── */
export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <div style={styles.page}>
        {/* ── NAVBAR ── */}
        <nav style={styles.nav}>
          <h3 style={styles.logo}>
            <span style={styles.logoAccent}>R</span>ajeevni.dev
          </h3>
          <div style={styles.navLinks}>
            {["About", "Skills", "Projects", "Contact"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} style={styles.navLink}>
                {link}
              </a>
            ))}
          </div>
        </nav>

        {/* ── HERO ── */}
        <section style={styles.hero}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div style={styles.avatarWrapper}>
              <div style={styles.avatarRing} />
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rajeevni&backgroundColor=b6e3f4"
                alt="Rajeevni profile"
                style={styles.avatar}
              />
            </div>

            <motion.h1
              style={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Rajeevni Umapathisivam
            </motion.h1>

            <motion.p
              style={styles.subtitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              BSc IT Undergraduate &nbsp;·&nbsp; Full Stack Developer
            </motion.p>

            <motion.p
              style={styles.desc}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
            >
              Passionate about building scalable web applications, modern UI
              systems, and solving real-world problems with clean code.
            </motion.p>

            <motion.div
              style={styles.buttons}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a href="#projects" style={styles.btnPrimary}>
                View Projects
              </a>
              <a href="/cv.pdf" style={styles.btnSecondary}>
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* floating orbs */}
          <div style={{ ...styles.orb, top: "15%", left: "10%", background: "radial-gradient(circle, #6366f155, transparent)" }} />
          <div style={{ ...styles.orb, top: "60%", right: "8%", width: 250, height: 250, background: "radial-gradient(circle, #10b98133, transparent)" }} />
        </section>

        {/* ── ABOUT ── */}
        <section id="about" style={styles.section}>
          <SectionHeader label="about" title="About Me" />
          <motion.p
            style={styles.aboutText}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            I am an enthusiastic IT undergraduate focused on full-stack
            development, system design, and building real-world scalable
            applications. I love turning complex problems into elegant,
            user-friendly experiences.
          </motion.p>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" style={styles.section}>
          <SectionHeader label="skills" title="Technical Skills" />
          <div style={styles.skillCategories}>
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                style={{ ...styles.skillCatCard, borderColor: cat.color + "33" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.12, duration: 0.5 }}
              >
                {/* Category header */}
                <div style={styles.catHeader}>
                  <span style={{ ...styles.catIcon, background: cat.color + "22", color: cat.color }}>
                    {cat.icon}
                  </span>
                  <span style={{ ...styles.catLabel, color: cat.color }}>{cat.label}</span>
                </div>

                {/* Skill bars */}
                <div style={styles.skillList}>
                  {cat.skills.map((skill, si) => (
                    <div key={skill.name} style={styles.skillRow}>
                      <div style={styles.skillMeta}>
                        <span style={styles.skillIcon}>{skill.icon}</span>
                        <span style={styles.skillName}>{skill.name}</span>
                        <span style={{ ...styles.skillPct, color: cat.color }}>{skill.level}%</span>
                      </div>
                      <div style={styles.barTrack}>
                        <motion.div
                          style={{ ...styles.barFill, background: `linear-gradient(90deg, ${cat.color}, ${cat.color}aa)` }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: ci * 0.12 + si * 0.08 + 0.3, duration: 0.7, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" style={styles.section}>
          <SectionHeader label="projects" title="Featured Projects" />

          {/* Filter tabs */}
          <div style={styles.filterRow}>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  ...styles.filterBtn,
                  ...(activeFilter === f ? styles.filterBtnActive : {}),
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <motion.div style={styles.grid} layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  style={{
                    ...styles.card,
                    ...(hoveredCard === p.id ? styles.cardHovered : {}),
                    "--accent": p.color,
                  }}
                  onMouseEnter={() => setHoveredCard(p.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* top accent bar */}
                  <div
                    style={{
                      ...styles.cardAccentBar,
                      background: `linear-gradient(90deg, ${p.color}, ${p.color}88)`,
                    }}
                  />

                  {/* emoji badge */}
                  <div style={{ ...styles.emojiBlock, background: p.color + "22" }}>
                    <span style={{ fontSize: 28 }}>{p.emoji}</span>
                  </div>

                  {/* category badge */}
                  <span
                    style={{
                      ...styles.categoryBadge,
                      background: p.color + "22",
                      color: p.color,
                      border: `1px solid ${p.color}44`,
                    }}
                  >
                    {p.category}
                  </span>

                  <h3 style={styles.cardTitle}>{p.title}</h3>
                  <p style={styles.cardDesc}>{p.desc}</p>

                  {/* tech pills */}
                  <div style={styles.techRow}>
                    {p.tech.map((t) => (
                      <span key={t} style={styles.techPill}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* action buttons */}
                  <div style={styles.cardActions}>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      style={styles.cardBtnGhost}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 6 }}>
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      style={{ ...styles.cardBtnSolid, background: p.color }}
                    >
                      Live Demo ↗
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" style={styles.section}>
          <SectionHeader label="contact" title="Get In Touch" />
          <motion.div
            style={styles.contactBox}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p style={styles.contactIntro}>
              I'm open to opportunities, collaborations, and cool projects.
              Let's connect!
            </p>
            <div style={styles.contactLinks}>
              <ContactItem icon="📧" label="urajeevni@gmail.com" href="mailto:urajeevni@gmail.com" />
              <ContactItem icon="📱" label="0778280888" href="tel:0778280888" />
              <ContactItem icon="🐙" label="GitHub" href="https://github.com/RajeevniUmapathisivam" />
              <ContactItem icon="💼" label="LinkedIn" href="https://www.linkedin.com/in/rajeevni-umapathisivam" />
            </div>
          </motion.div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={styles.footer}>
          <p>© 2024 Rajeevni Umapathisivam · Built with React &amp; ❤️</p>
        </footer>
      </div>
    </>
  );
}

/* ── HELPERS ── */
function SectionHeader({ label, title }) {
  return (
    <motion.div
      style={styles.sectionHeader}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span style={styles.sectionLabel}>{label}</span>
      <h2 style={styles.sectionTitle}>{title}</h2>
      <div style={styles.sectionLine} />
    </motion.div>
  );
}

function ContactItem({ icon, label, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={styles.contactItem}
      whileHover={{ scale: 1.04, background: "#1e1e2e" }}
    >
      <span style={{ fontSize: 20 }}>{icon}</span>
      <span>{label}</span>
    </motion.a>
  );
}

/* ─────────── STYLES ─────────── */
const styles = {
  page: {
    fontFamily: "'Inter', sans-serif",
    backgroundColor: "#080812",
    color: "#e2e8f0",
    minHeight: "100vh",
    overflowX: "hidden",
  },

  /* NAV */
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 60px",
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: "rgba(8,8,18,0.85)",
    backdropFilter: "blur(16px)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  logo: {
    margin: 0,
    fontSize: 20,
    fontWeight: 700,
    color: "#e2e8f0",
    letterSpacing: "-0.5px",
  },
  logoAccent: { color: "#6366f1" },
  navLinks: { display: "flex", gap: 32 },
  navLink: {
    color: "#94a3b8",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 500,
    transition: "color 0.2s",
  },

  /* HERO */
  hero: {
    textAlign: "center",
    padding: "110px 20px 80px",
    position: "relative",
    overflow: "hidden",
  },
  orb: {
    position: "absolute",
    width: 350,
    height: 350,
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 0,
    filter: "blur(60px)",
  },
  avatarWrapper: { position: "relative", display: "inline-block", marginBottom: 24 },
  avatarRing: {
    position: "absolute",
    inset: -4,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #6366f1, #10b981, #f59e0b)",
    zIndex: -1,
    animation: "spin 6s linear infinite",
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: "50%",
    border: "4px solid #080812",
    display: "block",
    background: "#1e1e2e",
  },
  title: {
    fontSize: "clamp(28px, 5vw, 52px)",
    fontWeight: 800,
    margin: "0 0 12px",
    background: "linear-gradient(135deg, #e2e8f0 30%, #6366f1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-1px",
  },
  subtitle: {
    color: "#64748b",
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 16,
  },
  desc: {
    maxWidth: 560,
    margin: "0 auto 28px",
    color: "#94a3b8",
    fontSize: 15,
    lineHeight: 1.7,
  },
  buttons: { display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" },
  btnPrimary: {
    padding: "12px 28px",
    background: "linear-gradient(135deg, #6366f1, #818cf8)",
    color: "#fff",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 14,
    boxShadow: "0 0 24px #6366f155",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  btnSecondary: {
    padding: "12px 28px",
    border: "1px solid #6366f166",
    color: "#818cf8",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 14,
    transition: "border-color 0.2s, background 0.2s",
  },

  /* SECTIONS */
  section: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "70px 40px",
  },
  sectionHeader: { marginBottom: 40 },
  sectionLabel: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 3,
    textTransform: "uppercase",
    color: "#6366f1",
    display: "block",
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: "clamp(22px, 3vw, 36px)",
    fontWeight: 800,
    margin: "0 0 14px",
    letterSpacing: "-0.5px",
  },
  sectionLine: {
    width: 48,
    height: 3,
    borderRadius: 99,
    background: "linear-gradient(90deg, #6366f1, #10b981)",
  },

  /* ABOUT */
  aboutText: {
    color: "#94a3b8",
    fontSize: 16,
    lineHeight: 1.9,
    maxWidth: 680,
  },

  /* SKILLS */
  skills: { display: "flex", flexWrap: "wrap", gap: 10, marginTop: 8 },
  skill: {
    padding: "8px 16px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid transparent",
    borderRadius: 99,
    fontSize: 13,
    fontWeight: 500,
    color: "#cbd5e1",
    cursor: "default",
    transition: "border-color 0.2s, transform 0.2s",
  },

  /* PROJECT FILTERS */
  filterRow: {
    display: "flex",
    gap: 8,
    marginBottom: 32,
    flexWrap: "wrap",
  },
  filterBtn: {
    padding: "8px 20px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 99,
    color: "#94a3b8",
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 500,
    transition: "all 0.2s",
  },
  filterBtnActive: {
    background: "linear-gradient(135deg, #6366f1, #818cf8)",
    border: "1px solid transparent",
    color: "#fff",
    boxShadow: "0 0 16px #6366f144",
  },

  /* PROJECT GRID */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
    gap: 24,
  },

  /* PROJECT CARD */
  card: {
    position: "relative",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 20,
    padding: "28px 24px 24px",
    overflow: "hidden",
    cursor: "default",
    transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
    backdropFilter: "blur(10px)",
  },
  cardHovered: {
    borderColor: "rgba(99,102,241,0.4)",
    boxShadow: "0 20px 60px rgba(99,102,241,0.15)",
    transform: "translateY(-6px)",
  },
  cardAccentBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    borderRadius: "20px 20px 0 0",
  },
  emojiBlock: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 52,
    height: 52,
    borderRadius: 14,
    marginBottom: 14,
  },
  categoryBadge: {
    display: "inline-block",
    padding: "3px 10px",
    borderRadius: 99,
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 0.5,
    marginBottom: 12,
    textTransform: "uppercase",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 700,
    margin: "0 0 10px",
    color: "#e2e8f0",
  },
  cardDesc: {
    fontSize: 14,
    color: "#94a3b8",
    lineHeight: 1.7,
    margin: "0 0 18px",
  },
  techRow: { display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 },
  techPill: {
    padding: "4px 10px",
    background: "rgba(255,255,255,0.06)",
    borderRadius: 6,
    fontSize: 11,
    fontWeight: 600,
    color: "#cbd5e1",
    letterSpacing: 0.3,
  },
  cardActions: { display: "flex", gap: 10, alignItems: "center" },
  cardBtnGhost: {
    display: "inline-flex",
    alignItems: "center",
    padding: "8px 14px",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#94a3b8",
    textDecoration: "none",
    fontSize: 13,
    fontWeight: 500,
    transition: "border-color 0.2s, color 0.2s",
  },
  cardBtnSolid: {
    display: "inline-flex",
    alignItems: "center",
    padding: "8px 16px",
    borderRadius: 8,
    color: "#fff",
    textDecoration: "none",
    fontSize: 13,
    fontWeight: 600,
    boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
    transition: "opacity 0.2s, transform 0.2s",
  },

  /* CONTACT */
  contactBox: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 20,
    padding: "40px",
    backdropFilter: "blur(10px)",
  },
  contactIntro: {
    color: "#94a3b8",
    fontSize: 16,
    marginBottom: 28,
    lineHeight: 1.7,
  },
  contactLinks: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: 12,
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "14px 18px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.07)",
    color: "#cbd5e1",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 500,
    background: "rgba(255,255,255,0.02)",
    transition: "all 0.2s",
  },

  /* FOOTER */
  footer: {
    textAlign: "center",
    padding: "24px",
    color: "#334155",
    fontSize: 13,
    borderTop: "1px solid rgba(255,255,255,0.05)",
  },

  /* SKILL CATEGORIES */
  skillCategories: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: 20,
    marginTop: 8,
  },
  skillCatCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid",
    borderRadius: 20,
    padding: "24px",
    backdropFilter: "blur(12px)",
    transition: "box-shadow 0.3s",
  },
  catHeader: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 20,
  },
  catIcon: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 12,
    fontSize: 20,
  },
  catLabel: {
    fontWeight: 700,
    fontSize: 15,
    letterSpacing: "-0.3px",
  },
  skillList: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  skillRow: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  skillMeta: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  skillIcon: {
    fontSize: 15,
    lineHeight: 1,
  },
  skillName: {
    flex: 1,
    fontSize: 13,
    fontWeight: 500,
    color: "#cbd5e1",
  },
  skillPct: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.5px",
  },
  barTrack: {
    height: 5,
    borderRadius: 99,
    background: "rgba(255,255,255,0.07)",
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    borderRadius: 99,
  },
};