import { useState } from "react";
import { skillCategories, LEVEL_WIDTH } from "../data/portfolio";
import { AccordionIcon } from "./Icons";

export default function Skills() {
  const [openSkill, setOpenSkill] = useState("frontend");

  return (
    <section id="skills" className="section section-alt">
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
                aria-expanded={openSkill === cat.id}
              >
                <AccordionIcon type={cat.id} />
                {cat.label}
                <span className="accordion-chevron" aria-hidden="true">
                  ▼
                </span>
              </button>
              {openSkill === cat.id && (
                <div className="accordion-body">
                  {cat.skills.map((s) => (
                    <div key={s.name} className="skill-bar-row">
                      <div className="skill-bar-meta">
                        <span>{s.name}</span>
                        <span className="skill-level-badge">{s.level}</span>
                      </div>
                      <div className="skill-bar-track">
                        <div
                          className="skill-bar-fill"
                          style={{ width: `${LEVEL_WIDTH[s.level] || 60}%` }}
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
  );
}
