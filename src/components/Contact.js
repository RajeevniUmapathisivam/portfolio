import { useEffect, useState } from "react";
import { SITE } from "../data/portfolio";
import { IconSend } from "./Icons";

const FORM_ACTION = "https://formsubmit.co/urajeevni@gmail.com";
const REDIRECT_URL = `${SITE.liveUrl}/#contact?sent=1`;

export default function Contact() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (window.location.hash.includes("sent=1")) setSent(true);
  }, []);

  return (
    <section id="contact" className="section section-alt">
      <div className="container contact-wrap">
        <div className="section-header section-header-left">
          <span className="section-label">Get in touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="contact-lead">Write me about your project</p>
        </div>
        <form className="contact-form" action={FORM_ACTION} method="POST">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Portfolio — New project inquiry" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={REDIRECT_URL} />
          <div className="form-row">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <input type="text" name="project" placeholder="Project Type" className="form-full" />
          <textarea name="message" placeholder="Tell me about your project..." required />
          <button type="submit" className="btn-primary btn-block">
            Send Message <IconSend />
          </button>
          {sent && (
            <p className="form-success" role="status">
              Thank you! Your message was sent successfully.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
