"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Solar Solutions" },
  { href: "/projects", label: "Our Projects" },
  { href: "/contact", label: "Contact" },
];

export default function PremiumNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change or escape key
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`gh-nav-wrapper ${scrolled ? "is-scrolled" : ""}`}>
      {/* Main Glass Navbar */}
      <div className="gh-nav">
        <div className="gh-nav__container">
          <Link href="/" className="gh-brand" onClick={() => setOpen(false)}>
            <Image
              src="/green-hub-navbar-logo.png"
              alt="Green Hub Solar Energy"
              width={174}
              height={56}
              priority
              className="gh-brand__logo"
            />
          </Link>

          <nav className="gh-menu">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`gh-menu__item ${isActive ? "is-active" : ""}`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="gh-menu__pill" />}
                </Link>
              );
            })}
          </nav>

          <div className="gh-actions">
            <button
              type="button"
              className={`gh-toggle ${open ? "is-active" : ""}`}
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span className="gh-toggle__line" />
              <span className="gh-toggle__line" />
              <span className="gh-toggle__line" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`gh-drawer ${open ? "is-open" : ""}`}>
        <div className="gh-drawer__overlay" onClick={() => setOpen(false)} />
        <div className="gh-drawer__content">
          <div className="gh-drawer__header">
            <Image
              src="/green-hub-navbar-logo.png"
              alt="Green Hub"
              width={140}
              height={44}
              className="gh-drawer__logo"
            />
            <button
              className="gh-drawer__close"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>

          <div className="gh-drawer__links">
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`gh-drawer__item ${isActive ? "is-active" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  <span className="gh-drawer__num">0{idx + 1}</span>
                  <span className="gh-drawer__label">{link.label}</span>
                  <span className="gh-drawer__arrow">&rarr;</span>
                </Link>
              );
            })}
          </div>

          <div className="gh-drawer__footer">
            <div className="gh-drawer__badge">
              <span className="gh-live-dot" />
              <span>Certified Solar EPC &bull; Mattom, Thrissur</span>
            </div>

            <a
              href="https://wa.me/917034010111?text=Hello%20Green%20Hub,%20I%20would%20like%20to%20enquire%20about%20a%20solar%20rooftop%20system."
              target="_blank"
              rel="noopener noreferrer"
              className="gh-drawer__whatsapp"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.07 7.42C8.91 7.42 8.65 7.48 8.42 7.73C8.19 7.98 7.56 8.57 7.56 9.78C7.56 10.99 8.44 12.16 8.57 12.33C8.69 12.5 10.29 14.97 12.75 16.03C13.33 16.28 13.79 16.43 14.14 16.54C14.73 16.73 15.26 16.7 15.69 16.64C16.17 16.57 17.15 16.05 17.35 15.48C17.56 14.91 17.56 14.42 17.5 14.32C17.43 14.22 17.27 14.16 17.02 14.04C16.78 13.91 15.58 13.32 15.35 13.24C15.13 13.16 14.96 13.12 14.8 13.36C14.64 13.61 14.18 14.16 14.04 14.32C13.9 14.49 13.76 14.51 13.52 14.39C13.27 14.26 12.23 13.92 11 12.83C10.04 11.97 9.39 10.92 9.27 10.71C9.15 10.51 9.26 10.39 9.38 10.27C9.49 10.16 9.63 9.98 9.75 9.83C9.88 9.69 9.92 9.58 10 9.42C10.08 9.25 10.04 9.11 9.98 8.98C9.92 8.86 9.45 7.7 9.26 7.23C9.07 6.78 8.88 6.84 8.74 6.83L8.3 6.83C8.14 6.83 7.88 6.89 7.65 7.14" />
              </svg>
              <span>Chat on WhatsApp: 7034010111</span>
            </a>

            <div className="gh-drawer__cta-row">
              <a href="tel:7034010111" className="gh-drawer__call">
                Call: 70340 10111
              </a>
              <Link
                href="/contact"
                className="gh-drawer__assess"
                onClick={() => setOpen(false)}
              >
                Free Assessment &rarr;
              </Link>
            </div>

            <div className="gh-drawer__meta">
              <a
                href="mailto:greenhubsolar@gmail.com"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>greenhubsolar@gmail.com</span>
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
                <span>greenhub_solarenergy</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
