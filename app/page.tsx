"use client";
import Link from "next/link";
import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import PremiumNav from "./components/PremiumNav";
import BrandGlowBanner from "./components/BrandGlowBanner";
import SolarGlobe3D from "./components/SolarGlobe3D";
import { SiteFooter } from "./components/SiteChrome";

const Arrow = () => <span aria-hidden="true">&rarr;</span>;
const Check = () => <span className="check">✓</span>;
const Sun = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="32" r="11" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <path d="M32 4v9M32 51v9M4 32h9M51 32h9M12 12l7 7M45 45l7 7M52 12l-7 7M19 45l-7 7" />
    </g>
  </svg>
);
const Bolt = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Home() {
  const [sent, setSent] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const subsidyCardRef = useRef<HTMLDivElement>(null);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setSent(true);
  };

  useEffect(() => {
    const card = subsidyCardRef.current;
    if (!card) return;

    // Check if browser natively handles CSS scroll-driven animation
    const supportsScrollTimeline =
      typeof CSS !== "undefined" &&
      typeof CSS.supports === "function" &&
      CSS.supports("animation-timeline", "view()");

    if (supportsScrollTimeline) return;

    let ticking = false;
    const updateZoom = () => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const vh = window.innerHeight;

      // Scroll progress through viewport: 0 when entering bottom, 1 when leaving top
      const total = vh + rect.height;
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / total));

      // Zoom from scale 0.88 to 1.0 between 20% (0.2) and 60% (0.6) progress
      let scale = 0.88;
      let opacity = 0.88;
      if (progress <= 0.2) {
        scale = 0.88;
        opacity = 0.88;
      } else if (progress >= 0.6) {
        scale = 1.0;
        opacity = 1.0;
      } else {
        const factor = (progress - 0.2) / 0.4;
        scale = 0.88 + factor * 0.12;
        opacity = 0.88 + factor * 0.12;
      }

      card.style.transform = `scale(${scale.toFixed(4)})`;
      card.style.opacity = `${opacity.toFixed(3)}`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateZoom);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateZoom();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".site-shell .section, .site-shell .solution, .site-shell .quote-card, .gh-team-banner, .gh-evidence-card, .gh-single-feature, .gh-min-support-card"
      )
    );
    targets.forEach((target, index) => {
      target.classList.add("motion-ready");
      target.style.setProperty(
        "--reveal-delay",
        `${Math.min(index % 4, 3) * 80}ms`
      );
    });
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("motion-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -45px" }
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .hero:after {
          display: none !important;
        }
        .hero {
          min-height: 720px !important;
          padding-bottom: 0 !important;
          background-image: linear-gradient(
              90deg,
              rgba(10, 15, 33, 0.88) 0%,
              rgba(10, 15, 33, 0.6) 45%,
              rgba(10, 15, 33, 0.15) 80%
            ),
            url('/green-hub-solar-cover.png') !important;
          background-size: cover !important;
          background-position: center !important;
        }
        .hero .hero-glow,
        .hero .hero-art,
        .hero .scroll {
          display: none !important;
        }
        .hero .hero-grid {
          grid-template-columns: 1fr !important;
          min-height: 720px;
        }
        .hero .hero-copy {
          max-width: 720px;
          padding: 100px 0 60px;
        }
        .hero .hero-copy h1 {
          color: var(--paper);
        }
        .hero .hero-copy .lede,
        .hero .hero-copy .eyebrow,
        .hero .proof {
          color: rgba(251, 250, 246, 0.82);
        }
        .hero .hero-copy .eyebrow {
          color: rgba(251, 250, 246, 0.8);
        }
        @media (max-width: 600px) {
          .hero,
          .hero .hero-grid {
            min-height: 620px !important;
          }
          .hero {
            background-position: 62% center !important;
          }
          .hero .hero-copy {
            padding-top: 80px;
          }
        }
      `}</style>

      {/* Redesigned Premium Glass Sticky Navbar */}
      <PremiumNav />

      <main className="site-shell">
        {/* Hero Section */}
        <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <i /> Certified Solar EPC &bull; Mattom, Thrissur
            </p>
            <h1>
              Power your world with <em>sunlight.</em>
            </h1>
            <p className="lede">
              High-efficiency rooftop solar systems engineered for Kerala homes
              and commercial facilities. Installed by our certified in-house
              technical squad.
            </p>
            <div className="actions">
              <a className="button lime" href="#contact">
                Start your solar journey <Arrow />
              </a>
              <Link className="text-link" href="/products">
                Explore solar systems <Arrow />
              </Link>
            </div>
            <div className="proof">
             
              <span>
                <Check /> 100% in-house certified crew
              </span>
              <span>
                <Check /> KSEB net-metering support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Spotlight Card with Left-to-Right Animated Glow Effect */}
      <BrandGlowBanner companyName="GREEN HUB" />

      {/* Interactive 3D Rotating Solar Globe (Three.js WebGL) */}
      <SolarGlobe3D />

      {/* Intro Stats Section */}
      <section className="section intro" id="about">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">
                <i /> A cleaner tomorrow starts here
              </p>
              <h2>
                Energy that feels <span>good.</span>
              </h2>
            </div>
            <div>
              <p className="lede">
                We make switching to solar uncomplicated. Thoughtful system
                design, proven Tier-1 technology, and dedicated local engineers
                who stay with you long after installation.
              </p>
              <Link className="text-link" href="/about">
                Read our story &rarr;
              </Link>
            </div>
          </div>
          <div className="stats">
            <div>
              <b>
                1,200<small>+</small>
              </b>
              <p>Rooftop systems deployed</p>
            </div>
            <div>
              <b>
                18.6<small>MW</small>
              </b>
              <p>Clean capacity energized</p>
            </div>
            <div>
              <b>
                34<small>GWh</small>
              </b>
              <p>Clean power generated</p>
            </div>
            <aside>
              Every kilowatt tells a better story.
              <br />
              Let&apos;s build yours in Kerala. <Arrow />
            </aside>
          </div>
        </div>
      </section>

      {/* PM SURYA GHAR 2027 SUBSIDY & 3 PILLARS CAMPAIGN SECTION */}
      <section className="gh-subsidy-section" id="subsidy">
        <div className="container">
          <div className="gh-subsidy-card" ref={subsidyCardRef}>
            <div className="gh-subsidy-grid">
              <div>
                <h2 className="gh-subsidy-title">
                  ₹78,000 <span className="highlight">വരെ സബ്‌സിഡി.</span>
                </h2>

                <div className="gh-subsidy-deadline-banner">
                  <span className="gh-subsidy-deadline-year">2027</span>
                  <div className="gh-subsidy-deadline-text">
                    <strong>മാർച്ച് 31 വരെ &bull; സബ്‌സിഡി ലഭിക്കാനുള്ള അവസാന അവസരം</strong>
                    <span>Avail direct central government rooftop solar subsidy before March 31, 2027.</span>
                  </div>
                </div>

                {/* 3 Core Pillars */}
                <div className="gh-subsidy-pillars">
                  {/* Pillar 1: High Efficiency Solar Solutions */}
                  <div className="gh-subsidy-pillar-card">
                    <div className="gh-subsidy-pillar-icon">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                        <path d="M3 19h18M5 15h14" />
                      </svg>
                    </div>
                    <div className="gh-subsidy-pillar-info">
                      <h4>High Efficiency Solar Solutions</h4>
                      <p>Tier-1 bifacial panels engineered for maximum generation, high monsoon resistance, and 25-year performance warranty.</p>
                    </div>
                  </div>

                  {/* Pillar 2: EV Charging Made Easy */}
                  <div className="gh-subsidy-pillar-card">
                    <div className="gh-subsidy-pillar-icon">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 22h12M4 9h10M4 5h10M4 2h10a2 2 0 0 1 2 2v18" />
                        <path d="M16 8h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2" />
                        <path d="M7 13l2-4h-2l2-4" />
                      </svg>
                    </div>
                    <div className="gh-subsidy-pillar-info">
                      <h4>EV Charging Made Easy</h4>
                      <p>Charge your electric vehicle directly from rooftop solar with smart home chargers and zero fuel costs.</p>
                    </div>
                  </div>

                  {/* Pillar 3: Sustainable Living */}
                  <div className="gh-subsidy-pillar-card">
                    <div className="gh-subsidy-pillar-icon">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <path d="M9 22V12h6v10" />
                        <path d="M15 9.5c1.5-1 3.5.5 3 2.5-1.5 2-4 1.5-3-2.5z" />
                      </svg>
                    </div>
                    <div className="gh-subsidy-pillar-info">
                      <h4>Sustainable Living</h4>
                      <p>Zero electric bills, reduced carbon footprint, and complete clean energy self-reliance for your family.</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Visual Poster Card */}
              <div className="gh-subsidy-visual-wrap">
                <div className="gh-subsidy-poster-frame">
                  <Image
                    src="/pm-surya-ghar-subsidy.jpg"
                    alt="Green Hub Solar PM Surya Ghar 2027 ₹78,000 Subsidy Campaign Poster"
                    width={520}
                    height={650}
                    className="gh-subsidy-poster-img"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO 1 SHOWCASE: In-House Certified Team Banner */}
      <section className="section gh-showcase-section cream-bg">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">
                <i /> Authentic Engineering Excellence
              </p>
              <h2>
                Meet the in-house team on <span>your roof.</span>
              </h2>
            </div>
            <p className="side-copy">
              No middle-men. No third-party subcontractors. When you choose
              Green Hub, our dedicated engineering squad takes personal pride
              in every screw, clamp, and kilowatt.
            </p>
          </div>

          <div className="gh-team-banner">
            <Image
              src="/green-hub-team.jpg"
              alt="Green Hub certified solar technicians"
              fill
              sizes="(max-width: 900px) 100vw, 1200px"
              className="gh-team-banner__img"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
            <div className="gh-team-banner__overlay">
              <div className="gh-team-banner__tags">
                <span className="gh-team-badge">100% In-House Crew &bull; Kerala</span>
              </div>
              <h3>Certified Solar Specialists</h3>
              <p>
                Precision rooftop engineering and seamless KSEB grid synchronization.
              </p>
              <div className="gh-team-banner__actions">
                <a
                  href="https://wa.me/917034010111?text=Hello%20Green%20Hub,%20I%20would%20like%20to%20consult%20your%20engineering%20team."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button lime"
                >
                  Consult Our Team &rarr;
                </a>
                <a
                  href="tel:7034010111"
                  className="text-link"
                  style={{ color: "#fff" }}
                >
                  +91 70340 10111 &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section solutions" id="solutions">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">
                <i /> Made for your life
              </p>
              <h2>
                One sun. Infinite <span>possibilities.</span>
              </h2>
            </div>
            <p className="side-copy">
              Whether it&apos;s your private home, villa, or commercial
              enterprise, we build a system tailored for maximum ROI.
            </p>
          </div>
          <div className="solution-grid">
            <article className="solution dark">
              <small>01 / RESIDENTIAL</small>
              <div className="circle-icon">
                <Sun />
              </div>
              <h3>Solar for your home.</h3>
              <p>
                Drastically reduce your monthly electric bills, secure uninterrupted
                daytime power, and future-proof your household against tariff hikes.
              </p>
              <a href="#contact">
                Build my residential system <Arrow />
              </a>
              <Sun />
            </article>
            <article className="solution lime-bg">
              <small>02 / COMMERCIAL</small>
              <div className="circle-icon">
                <Bolt />
              </div>
              <h3>Solar for your business.</h3>
              <p>
                Substantially trim daytime operating overheads with accelerated
                depreciation benefits and prominent ESG sustainability credentials.
              </p>
              <a href="#contact">
                Power my business <Arrow />
              </a>
              <div className="chart">
                {[24, 39, 33, 65, 81, 100].map((h, i) => (
                  <i key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* PHOTO 2 & 3 SHOWCASE: Real Rooftop Evidence & Engineering */}
      <section className="section gh-showcase-section">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">
                <i /> Real Installation Evidence
              </p>
              <h2>
                Rooftop craft you can <span>see & trust.</span>
              </h2>
            </div>
            <p className="side-copy">
              Take a closer look at our live rooftop projects. Every installation
              reflects structural durability, electrical safety, and aesthetics.
            </p>
          </div>

          <div className="gh-evidence-grid">
            {/* Card 1: Expert Inspection */}
            <article className="gh-evidence-card">
              <div className="gh-evidence-card__img-wrap">
                <span className="gh-evidence-card__pill">High-Efficiency Panels</span>
                <Image
                  src="/green-hub-expert.jpg"
                  alt="Green Hub solar technician inspecting high-efficiency solar panels"
                  fill
                  sizes="(max-width: 900px) 100vw, 600px"
                  className="gh-evidence-card__img"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="gh-evidence-card__body">
                <small>01 / SOLAR HARDWARE</small>
                <h4>High-Efficiency Solar Panels</h4>
                <p>
                  Built for Kerala weather. Generates electricity from both direct
                  sunlight and reflected light for up to 25% more power.
                </p>
                <div className="gh-evidence-card__highlights">
                  <div className="gh-evidence-card__item">
                    <span className="gh-evidence-card__check">✓</span>
                    <span>Rust-free elevated frame (keeps your roof usable)</span>
                  </div>
                  <div className="gh-evidence-card__item">
                    <span className="gh-evidence-card__check">✓</span>
                    <span>Tested to handle strong winds and heavy monsoon rains</span>
                  </div>
                  <div className="gh-evidence-card__item">
                    <span className="gh-evidence-card__check">✓</span>
                    <span>25-year long-term power generation warranty</span>
                  </div>
                </div>
                <div className="gh-evidence-card__footer">
                  <Link href="/products" className="gh-evidence-card__link">
                    View Panel Details &rarr;
                  </Link>
                  <a href="tel:7034010111" className="gh-evidence-card__phone">
                    Call: 70340 10111
                  </a>
                </div>
              </div>
            </article>

            {/* Card 2: Active Rooftop Installation Work */}
            <article className="gh-evidence-card">
              <div className="gh-evidence-card__img-wrap">
                <span className="gh-evidence-card__pill">100% Leak-Proof Mounting</span>
                <Image
                  src="/green-hub-installation-work.jpg"
                  alt="Green Hub technicians assembling elevated solar structure and mounting solar panels"
                  fill
                  sizes="(max-width: 900px) 100vw, 600px"
                  className="gh-evidence-card__img"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="gh-evidence-card__body">
                <small>02 / EXPERT INSTALLATION</small>
                <h4>Careful &amp; Leak-Proof Fitting</h4>
                <p>
                  Installed directly by our own trained team with strong fittings —
                  100% leak-proof and completely safe for your terrace.
                </p>
                <div className="gh-evidence-card__highlights">
                  <div className="gh-evidence-card__item">
                    <span className="gh-evidence-card__check">✓</span>
                    <span>Neat, heat-resistant safety wiring and pipes</span>
                  </div>
                  <div className="gh-evidence-card__item">
                    <span className="gh-evidence-card__check">✓</span>
                    <span>Proper copper earthing for full home safety</span>
                  </div>
                  <div className="gh-evidence-card__item">
                    <span className="gh-evidence-card__check">✓</span>
                    <span>Built-in protection against lightning &amp; voltage surges</span>
                  </div>
                </div>
                <div className="gh-evidence-card__footer">
                  <Link href="/projects" className="gh-evidence-card__link">
                    See Completed Projects &rarr;
                  </Link>
                  <a
                    href="https://wa.me/917034010111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gh-evidence-card__phone"
                  >
                    WhatsApp Support
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Engineering Highlights */}
      <section className="section engineering">
        <div className="container engineering-grid">
          <div className="engineering-art">
            <div className="engineering-lines">
              {Array.from({ length: 12 }, (_, i) => (
                <i key={i} />
              ))}
            </div>
            <div className="engineering-sun">
              <Sun />
            </div>
            <span className="tag tag-a">PEAK EFFICIENCY</span>
            <span className="tag tag-b">&bull; SMART CLOUD MONITORING</span>
            <span className="tag tag-c">✓ KERALA MONSOON RESILIENT</span>
            <small>
              10.5276&deg; N<br />
              76.2144&deg; E (Thrissur)
            </small>
          </div>
          <div>
            <p className="eyebrow">
              <i /> Engineered with purpose
            </p>
            <h2>
              Built for every <span>ray.</span>
            </h2>
            <p className="lede">
              Every Green Hub system is customized for your terrace layout,
              local weather patterns, and real consumption profile.
            </p>
            <div className="points">
              <p>
                <Check />
                <span>
                  <b>Tailored system design</b>
                  <small>Optimised for your roof tilt, shade, and future expansion.</small>
                </span>
              </p>
              <p>
                <Check />
                <span>
                  <b>Premium, proven hardware</b>
                  <small>Only Tier-1 modules and smart inverters we rely on ourselves.</small>
                </span>
              </p>
              <p>
                <Check />
                <span>
                  <b>Always-on smartphone visibility</b>
                  <small>Track live generation, daily savings, and battery status 24/7.</small>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Process Section */}
      <section className="section process" id="how">
        <div className="container">
          <p className="eyebrow">
            <i /> Simple by design
          </p>
          <h2>
            From first hello to<br />
            <span>full power.</span>
          </h2>
          <div className="expand-list" onMouseLeave={() => setActiveStep(0)}>
            {[
              [
                "01",
                "Listen & assess roof",
                "We study your electricity bills, roof orientation, and discuss your personal energy targets.",
                "◌",
              ],
              [
                "02",
                "Design & 3D layout",
                "A customized solar plan, clear generation forecast, ROI calculation, and transparent paperwork.",
                "✦",
              ],
              [
                "03",
                "Install with certified crew",
                "Our in-house technicians assemble elevated galvanized frames and wire modules with zero roof leaks.",
                "⌁",
              ],
              [
                "04",
                "KSEB sync & switch-on",
                "We handle bi-directional net-metering approvals, commission the plant, and guide you through mobile app monitoring.",
                "✓",
              ],
            ].map(([n, t, d, icon], index) => (
              <button
                className={
                  activeStep === index ? "expand-item is-active" : "expand-item"
                }
                key={n}
                onMouseEnter={() => setActiveStep(index)}
                onFocus={() => setActiveStep(index)}
                onClick={() => setActiveStep(index)}
              >
                <small>{n}</small>
                <span className="expand-icon">{icon}</span>
                <span className="expand-copy">
                  <b>{t}</b>
                  <em>{d}</em>
                </span>
                <span className="expand-arrow">&rarr;</span>
                <span className="expand-meter">
                  <i />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal Care & Support Banner */}
      <section className="section gh-minimal-support">
        <div className="container">
          <div className="gh-min-support-card">
            <div className="gh-min-support-top">
              <span className="gh-min-tag">
                <i /> Lifetime Support &bull; Thrissur, Kerala
              </span>
              <span className="gh-min-stars">★★★★★</span>
            </div>

            <h2 className="gh-min-support-title">
              Solar is just the <em>start.</em>
            </h2>

            <p className="gh-min-support-quote">
              &ldquo;Installed neatly in 2 days. Always a phone call away in Mattom.&rdquo;
            </p>

            <div className="gh-min-support-badges">
              <div className="gh-min-badge">
                <span>⚡</span>
                <span>KSEB Net-Metering</span>
              </div>
              <div className="gh-min-badge">
                <span>🛡️</span>
                <span>Monsoon Audits</span>
              </div>
              <div className="gh-min-badge">
                <span>📱</span>
                <span>24/7 Cloud Tracking</span>
              </div>
              <div className="gh-min-badge">
                <span>📍</span>
                <span>Mattom Direct Team</span>
              </div>
            </div>

            <div className="gh-min-support-actions">
              <a
                href="https://wa.me/917034010111?text=Hello%20Green%20Hub,%20I%20have%20an%20enquiry%20about%20solar%20support."
                target="_blank"
                rel="noopener noreferrer"
                className="button lime"
              >
                WhatsApp Engineer &rarr;
              </a>
              <a href="tel:7034010111" className="gh-min-support-call">
                Call: +91 70340 10111
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Free Assessment Contact Form Section */}
      <section className="section assessment" id="contact">
        <div className="container split">
          <div>
            <p className="eyebrow">
              <i /> Your solar journey starts here
            </p>
            <h2>
              See what the sun can do for <em>you.</em>
            </h2>
            <p>
              Tell us a little about your home or commercial building, and
              we&apos;ll prepare a customized solar engineering feasibility
              report and financial payback projection.
            </p>
            <div className="contact-lines">
              <a href="tel:7034010111">Call: +91 70340 10111</a>
              <a
                href="https://wa.me/917034010111?text=Hello%20Green%20Hub,%20I%20would%20like%20to%20get%20a%20free%20solar%20assessment."
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: +91 70340 10111
              </a>
              <a
                href="mailto:greenhubsolar@gmail.com"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>Email: greenhubsolar@gmail.com</span>
              </a>
              <a
                href="https://instagram.com/greenhub_solarenergy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>Instagram: greenhub_solarenergy</span>
              </a>
              <span style={{ color: "rgba(251,250,246,0.6)", fontSize: "12px", fontFamily: "'DM Mono'" }}>
                &bull; Mattom, Thrissur, Kerala
              </span>
            </div>
          </div>
          <div className="form-box">
            {sent ? (
              <div className="success">
                <span>✓</span>
                <h3>Thank you &mdash; we&apos;ll be in touch promptly.</h3>
                <p>
                  Your solar assessment request has been received by our Thrissur
                  engineering desk.
                </p>
                <button className="text-link" onClick={() => setSent(false)}>
                  Send another request <Arrow />
                </button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <header>
                  FREE SOLAR ASSESSMENT <span>01 / 01</span>
                </header>
                <label>
                  Your full name
                  <input required placeholder="e.g. Rahul Menon" />
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
                    City / Town in Kerala
                    <input required placeholder="e.g. Thrissur / Mattom" />
                  </label>
                </div>
                <label>
                  System required
                  <select defaultValue="">
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option>Residential Rooftop Solar (Home/Villa)</option>
                    <option>Commercial / Industrial Solar</option>
                    <option>Hybrid Solar with Battery Backup</option>
                    <option>Agricultural / Pump Solar</option>
                  </select>
                </label>
                <button className="button lime" type="submit">
                  Get my free assessment <Arrow />
                </button>
                <small>
                  NO PRESSURE. NO THIRD PARTIES. CERTIFIED LOCAL EXPERTS.
                </small>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Unified Upgraded Site Footer */}
      <SiteFooter />
    </main>
  </>
);
}
