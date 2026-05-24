import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, motionProps, stagger } from "../utils/motion";

export function Reveal({ children, className = "", as = "div", delay = 0 }) {
  const reduced = useReducedMotion();
  const Tag = motion[as] || motion.div;

  return (
    <Tag
      className={className}
      variants={fadeUp}
      {...motionProps(reduced)}
      transition={{ delay }}
    >
      {children}
    </Tag>
  );
}

export function SectionHeader({ label, title, align = "center" }) {
  const reduced = useReducedMotion();
  const alignClass =
    align === "left" ? "section-header section-header-left" : "section-header";

  return (
    <motion.div
      className={alignClass}
      variants={stagger}
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.span className="section-label" variants={fadeUp}>
        {label}
      </motion.span>
      <motion.h2 className="section-title" variants={fadeUp}>
        {title}
      </motion.h2>
      <motion.span className="section-title-line" variants={fadeUp} aria-hidden="true" />
    </motion.div>
  );
}

export function Stagger({ children, className = "", fast = false }) {
  const reduced = useReducedMotion();
  const containerVariants = fast
    ? { ...stagger, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } } }
    : stagger;

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
    >
      {children}
    </motion.div>
  );
}
