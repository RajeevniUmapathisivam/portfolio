import { useEffect, useState } from "react";
import { SITE } from "../data/portfolio";
import { IconSend, IconMail, IconPhone, IconLocation, IconGitHub } from "./Icons";

const FORM_ACTION = "https://formsubmit.co/urajeevni@gmail.com";
const REDIRECT_URL = `${SITE.liveUrl}/#contact?sent=1`;

export default function Contact() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (window.location.hash.includes("sent=1")) setSent(true);
  }, []);

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get in Touch</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-details">
            <p className="contact-details-text">{SITE.contactIntro}</p>
            <ul className="contact-detail-list">
              <li>
                <IconMail />
                <div>
                  <span className="contact-detail-label">Email</span>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </div>
              </li>
              <li>
                <IconPhone />
                <div>
                  <span className="contact-detail-label">Phone</span>
                  <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
                </div>
              </li>
              <li>
                <IconLocation />
                <div>
                  <span className="contact-detail-label">Location</span>
                  <span>{SITE.location}</span>
                </div>
              </li>
              <li>
                <IconGitHub />
                <div>
                  <span className="contact-detail-label">GitHub</span>
                  <a href={SITE.github} target="_blank" rel="noreferrer">
                    github.com/RajeevniUmapathisivam
                  </a>
                </div>
              </li>
              <li>
                <IconMail />
                <div>
                  <span className="contact-detail-label">Portfolio</span>
                  <a href={SITE.liveUrl} target="_blank" rel="noreferrer">
                    rajeevniumapathisivam.github.io/portfolio
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <form className="contact-form-card" action={FORM_ACTION} method="POST">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Portfolio — New inquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={REDIRECT_URL} />

            <div className="form-row">
              <label className="form-field">
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label className="form-field">
                <span>Email</span>
                <input type="email" name="email" placeholder="your@email.com" required />
              </label>
            </div>
            <label className="form-field">
              <span>Project type</span>
              <input type="text" name="project" placeholder="Internship, freelance, web app..." />
            </label>
            <label className="form-field">
              <span>Message</span>
              <textarea
                name="message"
                placeholder="Tell me about the role or project..."
                required
              />
            </label>

            <div className="contact-form-actions">
              <button type="submit" className="btn-primary contact-submit">
                <span>Send Message</span>
                <IconSend />
              </button>
            </div>

            {sent && (
              <p className="form-success" role="status">
                Thank you! Your message was sent successfully.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
