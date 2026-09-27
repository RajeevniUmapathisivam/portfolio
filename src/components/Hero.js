import { motion, useReducedMotion, useMotionValue, useSpring } from "framer-motion";
import { SITE } from "../data/portfolio";
import { fadeRight, fadeUp, stagger, staggerFast } from "../utils/motion";
import { IconLinkedIn, IconGitHub, IconMail, IconDownload } from "./Icons";

const PROFILE_IMAGE = `${process.env.PUBLIC_URL}/${SITE.profileImage}`;
const CV_URL = `${process.env.PUBLIC_URL}/${SITE.cvPdf}`;

const TECH_STACK = ["React", "Node.js", "MongoDB", "MySQL", "REST APIs"];

export default function Hero() {
  const reduced = useReducedMotion();
  const tiltX = useMotionValue(3);
  const tiltY = useMotionValue(-7);
  const rotateX = useSpring(tiltX, { stiffness: 150, damping: 22 });
  const rotateY = useSpring(tiltY, { stiffness: 150, damping: 22 });
  const resetTilt = () => { tiltX.set(3); tiltY.set(-7); };
  const handleTilt = (event) => {
    if (reduced || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = Math.max(-0.5, Math.min(0.5, (event.clientX - bounds.left) / bounds.width - 0.5));
    const y = Math.max(-0.5, Math.min(0.5, (event.clientY - bounds.top) / bounds.height - 0.5));
    tiltX.set(3 - y * 16);
    tiltY.set(-7 + x * 20);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg-grid" aria-hidden="true" />

      <div className="container hero-layout">
        <motion.div
          className="hero-content"
          variants={stagger}
          initial={reduced ? false : "hidden"}
          animate="visible"
        >
          <motion.span className="hero-status" variants={fadeUp}>
            <span className="hero-status-dot" aria-hidden="true" />
            Open to internships &amp; junior roles
          </motion.span>

          <motion.p className="hero-eyebrow" variants={fadeUp}>
            {SITE.role}
          </motion.p>
          <motion.h1 className="hero-title" variants={fadeUp}>
            {SITE.name.split(" ").map((word, i) => (
              <span key={word}>
                {i > 0 && " "}
                <span className={i === SITE.name.split(" ").length - 1 ? "hero-title-accent" : ""}>
                  {word}
                </span>
              </span>
            ))}
          </motion.h1>

          <motion.p className="hero-meta" variants={fadeUp}>
            {SITE.heroSubtitle}
          </motion.p>

          <motion.p className="hero-desc" variants={fadeUp}>
            {SITE.tagline}
          </motion.p>

          <motion.ul className="hero-tech" aria-label="Core technologies" variants={staggerFast}>
            {TECH_STACK.map((tech) => (
              <motion.li key={tech} variants={fadeUp}>
                {tech}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div className="hero-actions" variants={fadeUp}>
            <a href="#projects" className="btn-primary">
              View my work
            </a>
            <a href={CV_URL} className="btn-outline" download="Rajeevni-CV.pdf">
              <IconDownload /> Download CV
            </a>
          </motion.div>

          <motion.div className="hero-social-row" aria-label="Social profiles" variants={fadeUp}>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <IconLinkedIn />
              <span>LinkedIn</span>
            </a>
            <a href={SITE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <IconGitHub />
              <span>GitHub</span>
            </a>
            <a href={`mailto:${SITE.email}`} aria-label="Email">
              <IconMail />
              <span>Email</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-profile"
          variants={fadeRight}
          initial={reduced ? false : "hidden"}
          animate="visible"
          transition={{ delay: 0.15 }}
        >
          <div className="profile-stage" onPointerMove={handleTilt} onPointerLeave={resetTilt} onPointerCancel={resetTilt}>
          <motion.div className="profile-float"
            initial={false}
            animate={{ y: reduced ? 0 : [0, -8, 0] }}
            transition={{ duration: reduced ? 0 : 4, ease: "easeInOut" }}
          >
          <motion.div
            className="hero-profile-frame"
            style={{ rotateX: reduced ? 0 : rotateX, rotateY: reduced ? 0 : rotateY }}
          >
            <div className="profile-depth" aria-hidden="true" />
            <div className="profile-depth profile-depth-back" aria-hidden="true" />
            <div className="profile-card-heading" aria-hidden="true"><span>RU / DEVELOPER</span><span>PORTFOLIO</span></div>
            <div className="profile-sheen" aria-hidden="true" />
            <div className="hero-profile-inner">
              <img src={PROFILE_IMAGE} alt={SITE.name} width={400} height={500} />
            </div>
            <div className="profile-floating-tag" aria-hidden="true"><span>&lt;/&gt;</span> Building with purpose</div>
            <div className="hero-profile-footer">
              <span className="hero-profile-name">{SITE.shortName}</span>
              <span className="hero-profile-role">{SITE.role}</span>
            </div>
          </motion.div>
          </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero-scroll"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="hero-scroll-text">Scroll</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.a>
    </section>
  );
}
