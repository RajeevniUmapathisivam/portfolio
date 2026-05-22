import { SITE } from "../data/portfolio";
import { IconLinkedIn, IconGitHub, IconMail } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <p className="footer-name">{SITE.shortName}</p>
            <p className="footer-role">{SITE.role}</p>
          </div>
          <div className="footer-links">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact Me</a>
          </div>
          <div className="footer-social">
            <a href={SITE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <IconLinkedIn />
            </a>
            <a href={SITE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <IconGitHub />
            </a>
            <a href={`mailto:${SITE.email}`} aria-label="Email">
              <IconMail />
            </a>
          </div>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
