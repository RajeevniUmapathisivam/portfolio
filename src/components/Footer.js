import { motion } from "framer-motion";
import { NAV_LINKS, SITE } from "../data/portfolio";
import { fadeUp } from "../utils/motion";
import { IconLinkedIn, IconGitHub, IconMail } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <motion.div
        className="container footer-inner"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeUp}>
          <p className="footer-logo">{SITE.shortName}</p>
          <p className="footer-role">{SITE.role}</p>
        </motion.div>
        <motion.div className="footer-links" variants={fadeUp}>
          {NAV_LINKS.filter((l) => l.id !== "home").map((l) => (
            <a key={l.id} href={`#${l.id}`}>
              {l.label}
            </a>
          ))}
        </motion.div>
        <motion.div className="footer-social" variants={fadeUp}>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <IconLinkedIn />
          </a>
          <a href={SITE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <IconGitHub />
          </a>
          <a href={`mailto:${SITE.email}`} aria-label="Email">
            <IconMail />
          </a>
        </motion.div>
      </motion.div>
      <p className="footer-copy">
        {SITE.name} · {SITE.role} · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
