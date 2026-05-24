import { motion } from "framer-motion";
import { services } from "../data/portfolio";
import { fadeUp } from "../utils/motion";
import { SectionHeader, Stagger } from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <SectionHeader label="What I Do" title="Focus Areas" />
        <Stagger className="services-grid">
          {services.map((s) => (
            <motion.article
              key={s.title}
              className="service-card"
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              <span className="service-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
