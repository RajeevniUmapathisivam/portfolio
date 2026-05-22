import { useState } from "react";
import { projects } from "../data/portfolio";

export default function Projects() {
  const [index, setIndex] = useState(0);
  const current = projects[index];

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Most recent work</p>
        </div>
        <div className="projects-carousel">
          <button
            type="button"
            className="carousel-btn"
            onClick={() => setIndex((i) => (i === 0 ? projects.length - 1 : i - 1))}
            aria-label="Previous project"
          >
            ‹
          </button>
          <div className="project-slide">
            <div className="project-thumb">
              <img
                src={current.image}
                alt=""
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.classList.add("fallback");
                }}
              />
              <span className="project-thumb-fallback" aria-hidden="true">
                {current.title.charAt(0)}
              </span>
            </div>
            <div>
              <h3 className="project-slide-title">{current.title}</h3>
              <p className="project-slide-summary">{current.summary}</p>
              <p className="project-slide-meta">{current.meta}</p>
              <div className="project-actions">
                <a
                  href={current.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-teal btn-outline"
                >
                  GitHub →
                </a>
                {current.demo && (
                  <a
                    href={current.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-teal"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          </div>
          <button
            type="button"
            className="carousel-btn"
            onClick={() => setIndex((i) => (i === projects.length - 1 ? 0 : i + 1))}
            aria-label="Next project"
          >
            ›
          </button>
        </div>
        <div className="carousel-dots">
          {projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              className={`carousel-dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to ${p.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
