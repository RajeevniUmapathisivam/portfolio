import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { skillCategories, LEVEL_LABEL, LEVEL_WIDTH } from "../data/portfolio";
import { fadeUp } from "../utils/motion";
import { SectionHeader, Stagger } from "./Reveal";
import { AccordionIcon } from "./Icons";

function SkillBar({ skill }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();
  const width = LEVEL_WIDTH[skill.level] || 70;

  return (
    <div ref={ref} className="skill-bar-row">
      <div className="skill-bar-meta">
        <span>{skill.name}</span>
        <span className="skill-level-badge">{LEVEL_LABEL[skill.level] || skill.level}</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: reduced ? `${width}%` : "0%" }}
          animate={{ width: inView || reduced ? `${width}%` : "0%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader label="My Abilities" title="Skills & Experience" />
        <Stagger className="skills-grid">
          {skillCategories.map((cat) => (
            <motion.div key={cat.id} className="skill-card" variants={fadeUp}>
              <div className="skill-card-header">
                <AccordionIcon type={cat.id} />
                <h3>{cat.label}</h3>
              </div>
              <div className="skill-card-body">
                {cat.skills.map((s) => (
                  <SkillBar key={s.name} skill={s} />
                ))}
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
