import { SITE } from "../data/portfolio";
import { IconLinkedIn, IconGitHub, IconMail, IconSend } from "./Icons";

const PROFILE_IMAGE = `${process.env.PUBLIC_URL}/profile.jpg`;

export default function Hero() {
  return (
    <>
      <aside className="hero-social" aria-label="Social links">
        <a href={SITE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <IconLinkedIn />
        </a>
        <a href={`mailto:${SITE.email}`} aria-label="Email">
          <IconMail />
        </a>
        <a href={SITE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <IconGitHub />
        </a>
      </aside>

      <section id="home" className="hero">
        <div className="container hero-grid">
          <div>
            <h1 className="hero-name">{SITE.name}</h1>
            <p className="hero-role">{SITE.role}</p>
            <p className="hero-desc">{SITE.tagline}</p>
            <a href="#contact" className="btn-teal">
              Contact Me <IconSend />
            </a>
          </div>
          <div className="hero-visual">
            <div className="hero-blob">
              <div className="hero-blob-bg" />
              <img
                className="hero-photo"
                src={PROFILE_IMAGE}
                alt={SITE.name}
                width={400}
                height={400}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
