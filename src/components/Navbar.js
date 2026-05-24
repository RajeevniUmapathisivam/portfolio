import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { NAV_LINKS, SITE } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import { IconSun, IconMoon } from "./Icons";

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();
  const reduced = useReducedMotion();
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      className={`nav ${scrolled ? "nav-scrolled" : ""}`}
      initial={reduced ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-inner">
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          <span className="nav-logo-mark">{SITE.shortName.charAt(0)}</span>
          <span>{SITE.shortName}</span>
        </a>

        <button
          type="button"
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav-menu ${menuOpen ? "open" : ""}`} aria-label="Main">
          <ul className="nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={closeMenu}
                  className={activeSection === l.id ? "active" : ""}
                  aria-current={activeSection === l.id ? "page" : undefined}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        >
          <span className="theme-toggle-icon" aria-hidden="true">
            {theme === "dark" ? <IconSun /> : <IconMoon />}
          </span>
        </button>
      </div>
    </motion.header>
  );
}
