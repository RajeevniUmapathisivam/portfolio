import { motion } from "framer-motion";
import { ABOUT_STATS, SITE } from "../data/portfolio";
import { fadeUp, scaleIn } from "../utils/motion";
import { SectionHeader, Stagger } from "./Reveal";

const ABOUT_IMAGE = `${process.env.PUBLIC_URL}/${SITE.aboutImage}`;

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader label="About Me" title="Professional Bio" align="left" />
        <div className="about-grid">
          <motion.div
            className="about-photo-wrap"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={ABOUT_IMAGE} alt="Professional workspace" loading="lazy" />
          </motion.div>
          <div className="about-content">
            <Stagger className="about-info-cards">
              {ABOUT_STATS.map((s) => (
                <motion.div key={s.label} className="info-card" variants={fadeUp}>
                  <span className="info-card-icon">{s.icon}</span>
                  <div>
                    <strong className="info-card-value">{s.value}</strong>
                    <span className="info-card-label">{s.label}</span>
                    <span className="info-card-sub">{s.sub}</span>
                  </div>
                </motion.div>
              ))}
            </Stagger>
            <Stagger className="about-text-block" fast>
              {SITE.aboutBio.map((paragraph) => (
                <motion.p key={paragraph.slice(0, 40)} className="about-text" variants={fadeUp}>
                  {paragraph}
                </motion.p>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
