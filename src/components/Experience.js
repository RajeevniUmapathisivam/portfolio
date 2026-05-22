import { useState } from "react";
import { education, work } from "../data/portfolio";

export default function Experience() {
  const [expTab, setExpTab] = useState("education");
  const timeline = expTab === "education" ? education : work;

  return (
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
        <div className="timeline" key={expTab}>
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
  );
}
