import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "../data/portfolio";
import { SectionHeader, Reveal } from "./Reveal";
import { IconSend, IconMail, IconPhone, IconLocation, IconGitHub, IconGlobe } from "./Icons";

const FORM_ACTION = "https://formsubmit.co/urajeevni@gmail.com";
const REDIRECT_URL = `${SITE.liveUrl}/#contact?sent=1`;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (window.location.hash.includes("sent=1")) setSent(true);
  }, []);

  const validate = (form) => {
    const next = {};
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(email)) next.email = "Please enter a valid email address.";
    if (!message) next.message = "Please enter a message.";
    else if (message.length < 10) next.message = "Message should be at least 10 characters.";

    return next;
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    const next = validate(form);
    setErrors(next);

    if (Object.keys(next).length > 0) {
      e.preventDefault();
      return;
    }

    setSubmitting(true);
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <SectionHeader label="Contact" title="Get in Touch" />

        <div className="contact-grid">
          <Reveal className="contact-details">
            <p className="contact-lead">{SITE.contactIntro}</p>
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
                <IconGlobe />
                <div>
                  <span className="contact-detail-label">Portfolio</span>
                  <a href={SITE.liveUrl} target="_blank" rel="noreferrer">
                    rajeevniumapathisivam.github.io/portfolio
                  </a>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              className="contact-form-card"
              action={FORM_ACTION}
              method="POST"
              onSubmit={handleSubmit}
              noValidate
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Portfolio — New inquiry" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={REDIRECT_URL} />

              <div className="form-row">
                <label className="form-field">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "err-name" : undefined}
                    onChange={() => errors.name && setErrors((e) => ({ ...e, name: undefined }))}
                  />
                  {errors.name && (
                    <span id="err-name" className="form-error" role="alert">
                      {errors.name}
                    </span>
                  )}
                </label>
                <label className="form-field">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "err-email" : undefined}
                    onChange={() => errors.email && setErrors((e) => ({ ...e, email: undefined }))}
                  />
                  {errors.email && (
                    <span id="err-email" className="form-error" role="alert">
                      {errors.email}
                    </span>
                  )}
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
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "err-message" : undefined}
                  onChange={() => errors.message && setErrors((e) => ({ ...e, message: undefined }))}
                />
                {errors.message && (
                  <span id="err-message" className="form-error" role="alert">
                    {errors.message}
                  </span>
                )}
              </label>

              <div className="contact-form-actions">
                <button
                  type="submit"
                  className="btn-primary contact-submit"
                  disabled={submitting}
                  aria-busy={submitting}
                >
                  <span>{submitting ? "Sending…" : "Send Message"}</span>
                  {!submitting && <IconSend />}
                </button>
              </div>

              <AnimatePresence>
                {sent && (
                  <motion.p
                    className="form-success"
                    role="status"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    Thank you! Your message was sent successfully.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
