"use client";
import { FormEvent, useState } from "react";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <SiteHeader />
      <main>
        {/* Contact Hero */}
        <section className="subhero cream-hero compact-hero">
          <div className="container">
            <p className="eyebrow">
              <i /> Start your solar story &bull; Thrissur, Kerala
            </p>
            <h1>
              Let&apos;s make your roof work <em>harder.</em>
            </h1>
            <p>
              Ask an engineering question, request a free roof feasibility survey,
              or speak directly to our local technical team.
            </p>
          </div>
        </section>

        {/* Contact Page Content */}
        <section className="section contact-page">
          <div className="container split">
            <div>
              <p className="eyebrow">
                <i /> Direct Communication
              </p>
              <h2>
                Good solar advice starts with a <span>conversation.</span>
              </h2>
              <p className="lede">
                We&apos;ll inspect your current electric bills, run shadow
                simulations, and provide an honest, jargon-free assessment for
                your home or business.
              </p>

              <div className="contact-lines">
                <a href="tel:7034010111">
                  <strong>Call Us:</strong> +91 70340 10111
                </a>
                <a
                  href="https://wa.me/917034010111?text=Hello%20Green%20Hub,%20I%20would%20like%20to%20get%20a%20free%20solar%20assessment."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>WhatsApp:</strong> +91 70340 10111
                </a>
                <a
                  href="mailto:greenhubsolar@gmail.com"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span><strong>Email:</strong> greenhubsolar@gmail.com</span>
                </a>
                <a
                  href="https://instagram.com/greenhub_solarenergy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span><strong>Instagram:</strong> greenhub_solarenergy</span>
                </a>
                <span style={{ color: "var(--slate)", fontSize: "13px", lineHeight: "1.6", marginTop: "10px" }}>
                  📍 <strong>Office Location:</strong><br />
                  Green Hub Solar Energy<br />
                  Mattom, Thrissur, Kerala &bull; 680602
                </span>
              </div>
            </div>

            <div className="form-box">
              {sent ? (
                <div className="success">
                  <span>✓</span>
                  <h3>Thank you &mdash; we&apos;ll be in touch soon.</h3>
                  <p>
                    Your solar assessment request has been received by our
                    engineering team in Thrissur. We will call you back shortly.
                  </p>
                  <button className="text-link" onClick={() => setSent(false)}>
                    Send another message &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <header>
                    CONTACT GREEN HUB 
                  </header>
                  <label>
                    Your full name
                    <input required placeholder="e.g. Anand Varma" />
                  </label>
                  <div className="form-row">
                    <label>
                      Phone number / WhatsApp
                      <input
                        required
                        type="tel"
                        placeholder="+91 70340 10111"
                      />
                    </label>
                    <label>
                      City / Location in Kerala
                      <input required placeholder="e.g. Mattom / Thrissur" />
                    </label>
                  </div>
                  <label>
                    How can we help?
                    <select defaultValue="">
                      <option value="" disabled>
                        Select system interest
                      </option>
                      <option>Residential Rooftop Solar (Home/Villa)</option>
                      <option>Commercial / Factory Solar System</option>
                      <option>Hybrid Solar with Battery Storage</option>
                      <option>General Technical Question / Service</option>
                    </select>
                  </label>
                  <button className="button lime" type="submit">
                    Send assessment request &rarr;
                  </button>
                  <small>
                    NO PRESSURE. NO SPAM. DIRECT TECHNICAL EXPERTISE.
                  </small>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
