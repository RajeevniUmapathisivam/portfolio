import { useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { PROJECT_FILTERS, projects } from "../data/portfolio";
import { fadeUp } from "../utils/motion";
import { SectionHeader } from "./Reveal";

function projectImageSrc(path) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${process.env.PUBLIC_URL}/${path}`;
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader label="Portfolio" title="Recent Projects" />
        <div className="project-filters">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={`filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
              {filter === f && <span className="filter-btn-indicator" aria-hidden="true" />}
            </button>
          ))}
        </div>
        <LayoutGroup>
          <motion.div className="portfolio-grid" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.article
                  key={p.id}
                  className="portfolio-card"
                  layout
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="portfolio-card-img">
                    <img src={projectImageSrc(p.image)} alt={p.title} loading="lazy" />
                  </div>
                  <div className="portfolio-card-body">
                    <span className="portfolio-tag">{p.category}</span>
                    <h3>{p.title}</h3>
                    {p.highlight && <p className="portfolio-highlight">{p.highlight}</p>}
                    <p>{p.summary}</p>
                    {p.bullets?.length > 0 && (
                      <ul className="portfolio-bullets">
                        {p.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    )}
                    {p.meta && <p className="portfolio-meta">{p.meta}</p>}
                    <div className="portfolio-links">
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-sm"
                        title={p.repoNote || undefined}
                      >
                        {p.repoNote ? "GitHub (team)" : "GitHub"}
                      </a>
                      {p.demo ? (
                        <a href={p.demo} target="_blank" rel="noreferrer" className="btn-sm btn-sm-fill">
                          Live
                        </a>
                      ) : (
                        <span className="btn-sm btn-sm-disabled" title="Deploy to enable live demo">
                          Live soon
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
