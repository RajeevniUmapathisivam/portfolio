import { NAV_LINKS, SITE } from "../data/portfolio";
import { IconLinkedIn, IconGitHub, IconMail } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-logo">{SITE.shortName}</p>
          <p className="footer-role">{SITE.role}</p>
        </div>
        <div className="footer-links">
          {NAV_LINKS.filter((l) => l.id !== "home").map((l) => (
            <a key={l.id} href={`#${l.id}`}>
              {l.label}
            </a>
          ))}
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
        {SITE.name} · {SITE.role} · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
