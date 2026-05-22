import { skillCategories, LEVEL_WIDTH } from "../data/portfolio";
import { AccordionIcon } from "./Icons";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Abilities</span>
          <h2 className="section-title">Skills & Experience</h2>
        </div>
        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.id} className="skill-card">
              <div className="skill-card-header">
                <AccordionIcon type={cat.id} />
                <h3>{cat.label}</h3>
              </div>
              <div className="skill-card-body">
                {cat.skills.map((s) => (
                  <div key={s.name} className="skill-bar-row">
                    <div className="skill-bar-meta">
                      <span>{s.name}</span>
                      <span className="skill-level-badge">{s.level}</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${LEVEL_WIDTH[s.level] || 70}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
