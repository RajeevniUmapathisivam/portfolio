import { motion, useReducedMotion } from "framer-motion";
import { education } from "../data/portfolio";
import { fadeUp, stagger } from "../utils/motion";
import { SectionHeader } from "./Reveal";

export default function Education() {
  const reduced = useReducedMotion();

  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <SectionHeader label="My Journey" title="Qualification" />
        <p className="section-intro">Academic background and milestones along the way.</p>

        <motion.ol
          className="edu-timeline"
          variants={stagger}
          initial={reduced ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
        >
          {education.map((item, i) => (
            <motion.li
              key={item.title}
              className={`edu-timeline-item ${i === 0 ? "edu-timeline-item--current" : ""}`}
              variants={fadeUp}
            >
              <span className="edu-timeline-marker" aria-hidden="true" />
              <div className="edu-timeline-card">
                <time className="edu-timeline-date" dateTime={item.date}>
                  {item.dateLabel || item.date}
                </time>
                <h3>{item.title}</h3>
                <p className="edu-timeline-org">{item.org}</p>
                {item.detail && <p className="edu-timeline-detail">{item.detail}</p>}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
