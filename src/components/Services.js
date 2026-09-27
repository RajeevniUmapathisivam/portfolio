import { AccordionIcon } from "./Icons";
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
          {services.map((s, index) => (
            <motion.article
              key={s.title}
              className="service-card"
              variants={fadeUp}

            >
              <span className="service-icon"><AccordionIcon type={["frontend", "backend", "tools"][index]} /></span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
