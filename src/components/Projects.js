import { useState } from "react";
import { PROJECT_FILTERS, projects } from "../data/portfolio";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Recent Portfolio</h2>
        </div>
        <div className="project-filters">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={`filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          {filtered.map((p) => (
            <article key={p.id} className="portfolio-card">
              <div className="portfolio-card-img">
                <img src={p.image} alt="" loading="lazy" />
              </div>
              <div className="portfolio-card-body">
                <span className="portfolio-tag">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <div className="portfolio-links">
                  <a href={p.repo} target="_blank" rel="noreferrer" className="btn-sm">
                    GitHub
                  </a>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="btn-sm btn-sm-fill">
                      Live
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
