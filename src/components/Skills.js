import { motion } from "framer-motion";
import { skillCategories, LEVEL_LABEL, LEVEL_WIDTH } from "../data/portfolio";
import { fadeUp } from "../utils/motion";
import { SectionHeader, Stagger } from "./Reveal";
import { AccordionIcon } from "./Icons";

function SkillBar({ skill }) {
  return (
    <div className="skill-bar-row">
      <div className="skill-bar-meta">
        <span>{skill.name}</span>
        <span className="skill-level-badge">{LEVEL_LABEL[skill.level] || skill.level}</span>
      </div>
      <div className="skill-bar-track" aria-hidden="true">
        <div className="skill-bar-fill"
          style={{ width: `${LEVEL_WIDTH[skill.level] || 55}%`, transformOrigin: "left" }}
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
