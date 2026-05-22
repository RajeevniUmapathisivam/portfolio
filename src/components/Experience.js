import { useState } from "react";
import { education, work } from "../data/portfolio";

export default function Experience() {
  const [tab, setTab] = useState("work");

  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Journey</span>
          <h2 className="section-title">Qualification</h2>
        </div>
        <div className="exp-tabs">
          <button
            type="button"
            className={`exp-tab ${tab === "work" ? "active" : ""}`}
            onClick={() => setTab("work")}
          >
            Experience
          </button>
          <button
            type="button"
            className={`exp-tab ${tab === "education" ? "active" : ""}`}
            onClick={() => setTab("education")}
          >
            Education
          </button>
        </div>
        <div className="exp-list">
          {(tab === "work" ? work : education).map((item, i) => (
            <div key={`${item.title}-${i}`} className="exp-card">
              <div className="exp-card-dot" />
              <div>
                <h3>{item.title}</h3>
                <p className="exp-card-org">{item.org}</p>
                {item.detail && <p className="exp-card-detail">{item.detail}</p>}
                <span className="exp-card-date">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
