/** Shared Framer Motion presets — respects prefers-reduced-motion */

export const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: EASE },
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

export const staggerFast = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

export const viewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -48px 0px",
};

export function motionProps(reduced) {
  return reduced
    ? { initial: false, animate: "visible" }
    : { initial: "hidden", whileInView: "visible", viewport };
}
