import Link from "next/link";
import PremiumNav from "./PremiumNav";

export function Mark() {
  return (
    <img
      className="company-logo"
      src="/green-hub-navbar-logo.png"
      alt="Green Hub Solar Energy"
    />
  );
}

export function SiteHeader() {
  return <PremiumNav />;
}

export function SiteFooter() {
  return (
    <footer className="gh-footer">
      <div className="container gh-footer__top">
        <div className="gh-footer__brand-col">
          <Link className="brand logo-brand inverse" href="/">
            <Mark />
          </Link>
          <p className="gh-footer__tagline">
            Driving a Cleaner Tomorrow. Certified rooftop solar engineering,
            tailored for Kerala homes and commercial properties.
          </p>
          <div className="gh-footer__contact-badges">
            <a
              href="tel:7034010111"
              className="gh-footer__pill"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>+91 70340 10111</span>
            </a>
            <a
              href="https://wa.me/917034010111?text=Hello%20Green%20Hub,%20I%20would%20like%20to%20get%20a%20solar%20assessment."
              target="_blank"
              rel="noopener noreferrer"
              className="gh-footer__pill"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.07 7.42C8.91 7.42 8.65 7.48 8.42 7.73C8.19 7.98 7.56 8.57 7.56 9.78C7.56 10.99 8.44 12.16 8.57 12.33C8.69 12.5 10.29 14.97 12.75 16.03C13.33 16.28 13.79 16.43 14.14 16.54C14.73 16.73 15.26 16.7 15.69 16.64C16.17 16.57 17.15 16.05 17.35 15.48C17.56 14.91 17.56 14.42 17.5 14.32C17.43 14.22 17.27 14.16 17.02 14.04C16.78 13.91 15.58 13.32 15.35 13.24C15.13 13.16 14.96 13.12 14.8 13.36C14.64 13.61 14.18 14.16 14.04 14.32C13.9 14.49 13.76 14.51 13.52 14.39C13.27 14.26 12.23 13.92 11 12.83C10.04 11.97 9.39 10.92 9.27 10.71C9.15 10.51 9.26 10.39 9.38 10.27C9.49 10.16 9.63 9.98 9.75 9.83C9.88 9.69 9.92 9.58 10 9.42C10.08 9.25 10.04 9.11 9.98 8.98C9.92 8.86 9.45 7.7 9.26 7.23C9.07 6.78 8.88 6.84 8.74 6.83L8.3 6.83C8.14 6.83 7.88 6.89 7.65 7.14" />
              </svg>
              <span>WhatsApp</span>
            </a>
            <a
              href="https://instagram.com/greenhub_solarenergy"
              target="_blank"
              rel="noopener noreferrer"
              className="gh-footer__pill"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>greenhub_solarenergy</span>
            </a>
          </div>
        </div>

        <nav className="gh-footer__nav-col">
          <h4>Navigation</h4>
          <Link href="/">Home</Link>
          <Link href="/about">About Our Team</Link>
          <Link href="/products">Solar Solutions</Link>
          <Link href="/projects">Our Projects</Link>
          <Link href="/contact">Free Assessment</Link>
        </nav>

        <div className="gh-footer__info-col">
          <h4>HQ & Operations</h4>
          <p>
            Mattom, Thrissur<br />
            Kerala, India — 680602<br />
            <em>In-house certified technical team.</em>
          </p>
          <div className="gh-footer__cta-box">
            <span>Ready to cut your electric bill?</span>
            <Link href="/contact" className="gh-footer__cta-link">
              Book a Roof Survey &rarr;
            </Link>
          </div>
        </div>
      </div>

      <div className="container gh-footer__bottom">
        <span>&copy; {new Date().getFullYear()} GREEN HUB SOLAR ENERGY. ALL RIGHTS RESERVED.</span>
        <span>DRIVING A CLEANER TOMORROW &bull; MADE WITH SUN FOR THRISSUR &amp; KERALA</span>
      </div>
      <FloatingWhatsApp />
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917034010111?text=Hello%20Green%20Hub,%20I%20would%20like%20to%20enquire%20about%20a%20solar%20installation."
      target="_blank"
      rel="noopener noreferrer"
      className="gh-floating-whatsapp"
      aria-label="Chat with Green Hub Solar on WhatsApp"
      title="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.07 7.42C8.91 7.42 8.65 7.48 8.42 7.73C8.19 7.98 7.56 8.57 7.56 9.78C7.56 10.99 8.44 12.16 8.57 12.33C8.69 12.5 10.29 14.97 12.75 16.03C13.33 16.28 13.79 16.43 14.14 16.54C14.73 16.73 15.26 16.7 15.69 16.64C16.17 16.57 17.15 16.05 17.35 15.48C17.56 14.91 17.56 14.42 17.5 14.32C17.43 14.22 17.27 14.16 17.02 14.04C16.78 13.91 15.58 13.32 15.35 13.24C15.13 13.16 14.96 13.12 14.8 13.36C14.64 13.61 14.18 14.16 14.04 14.32C13.9 14.49 13.76 14.51 13.52 14.39C13.27 14.26 12.23 13.92 11 12.83C10.04 11.97 9.39 10.92 9.27 10.71C9.15 10.51 9.26 10.39 9.38 10.27C9.49 10.16 9.63 9.98 9.75 9.83C9.88 9.69 9.92 9.58 10 9.42C10.08 9.25 10.04 9.11 9.98 8.98C9.92 8.86 9.45 7.7 9.26 7.23C9.07 6.78 8.88 6.84 8.74 6.83L8.3 6.83C8.14 6.83 7.88 6.89 7.65 7.14" />
      </svg>
      <span className="gh-floating-whatsapp__tooltip">Chat on WhatsApp</span>
    </a>
  );
}
