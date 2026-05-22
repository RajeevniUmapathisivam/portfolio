import { useEffect, useState } from "react";
import { SITE } from "../data/portfolio";
import { IconSend, IconMail, IconPhone, IconLocation } from "./Icons";

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
          <span className="section-label">Get in touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="contact-lead">Have a project in mind? Let&apos;s talk.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-details">
            <h3>Talk to me</h3>
            <p className="contact-details-text">
              I&apos;m open to internships, freelance work, and collaboration on web
              development projects.
            </p>
            <ul className="contact-detail-list">
              <li>
                <IconMail />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <IconPhone />
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
              </li>
              <li>
                <IconLocation />
                <span>{SITE.location}</span>
              </li>
            </ul>
          </div>

          <form className="contact-form-card" action={FORM_ACTION} method="POST">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Portfolio — New project inquiry" />
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
              <input type="text" name="project" placeholder="e.g. Web app, portfolio, API" />
            </label>
            <label className="form-field">
              <span>Message</span>
              <textarea
                name="message"
                placeholder="Briefly describe your project or inquiry..."
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
