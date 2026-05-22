import { useEffect, useState } from "react";
import { SITE } from "../data/portfolio";
import { IconLocation, IconPhone, IconMail, IconSend } from "./Icons";

const FORM_ACTION = "https://formsubmit.co/urajeevni@gmail.com";
const REDIRECT_URL = `${SITE.liveUrl}/#contact?sent=1`;

export default function Contact() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (window.location.hash.includes("sent=1")) {
      setSent(true);
    }
  }, []);

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">Get in touch</p>
        </div>
        <div className="contact-info-row">
          <div className="contact-info-item">
            <IconLocation />
            <span>{SITE.location}</span>
          </div>
          <div className="contact-info-item">
            <IconPhone />
            <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
          </div>
          <div className="contact-info-item">
            <IconMail />
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
        </div>
        <form
          className="contact-form"
          action={FORM_ACTION}
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Portfolio contact — Rajeevni" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={REDIRECT_URL} />
          <div className="form-row">
            <input type="text" name="firstName" placeholder="First Name" required />
            <input type="text" name="lastName" placeholder="Last Name" required />
          </div>
          <input type="email" name="email" placeholder="Email" required className="form-full" />
          <textarea name="message" placeholder="Message" required />
          <div className="form-submit-wrap">
            <button type="submit" className="btn-teal">
              Send Message <IconSend />
            </button>
          </div>
          {sent && (
            <p className="form-success" role="status">
              Thank you! Your message was sent successfully.
            </p>
          )}
          <p className="form-hint">
            Powered by FormSubmit — messages go directly to {SITE.email}.
          </p>
        </form>
      </div>
    </section>
  );
}
