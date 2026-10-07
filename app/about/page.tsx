import Link from "next/link";
import Image from "next/image";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata = {
  title: "About Our Solar Engineering Team — Green Hub Thrissur",
  description:
    "Meet Green Hub's certified in-house solar engineering crew in Mattom, Thrissur. Direct rooftop solar EPC, zero subcontractors, and dedicated KSEB liaison squad.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Our Solar Engineering Team — Green Hub Thrissur",
    description:
      "Certified in-house solar technicians and engineers in Mattom, Thrissur, Kerala. 1,200+ rooftop installations completed.",
    url: "https://greenhubsolar.in/about",
    images: [
      {
        url: "/green-hub-team.jpg",
        width: 1000,
        height: 667,
        alt: "Green Hub In-House Solar Engineering Crew",
      },
    ],
  },
};

export default function About() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* About Hero */}
        <section className="subhero dark-hero">
          <div className="container">
            <p className="eyebrow">
              <i /> Mattom, Thrissur &bull; Kerala
            </p>
            <h1>
              Built for a more <em>considered</em> energy future.
            </h1>
            <p>
              Green Hub brings together certified solar engineering, Tier-1
              hardware, and an unwavering commitment to our local Thrissur
              community.
            </p>
          </div>
          <div className="sun-disc" />
        </section>

        {/* Team Showcase with Real Photo */}
        <section className="section gh-showcase-section">
          <div className="container">
            <div className="split">
              <div>
                <p className="eyebrow">
                  <i /> Our Core Differentiator
                </p>
                <h2>
                  Meet the in-house team <span>behind your power.</span>
                </h2>
              </div>
              <p className="side-copy">
                Unlike sales brokers who outsource installation to unknown
                subcontractors, Green Hub operates with a dedicated, certified,
                uniformed in-house engineering and mounting squad.
              </p>
            </div>

            <div className="gh-team-banner">
              <Image
                src="/green-hub-team.jpg"
                alt="Green Hub founder and in-house technical solar crew on rooftop in Thrissur"
                fill
                sizes="(max-width: 900px) 100vw, 1200px"
                className="gh-team-banner__img"
                style={{ objectFit: "cover", objectPosition: "center 30%" }}
              />
              <div className="gh-team-banner__overlay">
                <div className="gh-team-banner__tags">
                  <span className="gh-team-badge">In-House Certified Crew</span>
                  <span className="gh-team-badge outline">Direct Accountability</span>
                  <span className="gh-team-badge outline">Mattom, Thrissur</span>
                </div>
                <h3>Engineers & Technicians Committed to Perfection</h3>
                <p>
                  Every member of our team is trained in structural rigidity,
                  electrical safety, KSEB net-metering protocols, and zero-leakage
                  roof attachments. When we finish a job, you know exactly who to
                  call.
                </p>
                <div className="gh-team-banner__actions">
                  <a
                    href="https://wa.me/917034010111?text=Hello%20Green%20Hub,%20I%20would%20like%20to%20speak%20with%20your%20team."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button lime"
                  >
                    Chat with Team on WhatsApp &rarr;
                  </a>
                  <a
                    href="tel:7034010111"
                    className="text-link"
                    style={{ color: "#fff" }}
                  >
                    Direct Call: +91 70340 10111 &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Two-Column Expert Craftsmanship Feature */}
        <section className="section gh-showcase-section cream-bg">
          <div className="container">
            <div className="gh-single-feature">
              <div className="gh-single-feature__media">
                <Image
                  src="/green-hub-kerala-workmanship.jpg"
                  alt="Green Hub rooftop solar panel installation on traditional Kerala tiled roof overlooking scenic backwaters"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 550px"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <div className="gh-single-feature__media-tag">
                  <b>Green Hub Certified EPC</b>
                  <small>+91 70340 10111</small>
                </div>
              </div>

              <div className="gh-single-feature__content">
                <p className="eyebrow">
                  <i /> Workmanship Standard
                </p>
                <h3>
                  Every roof handled with <em>surgical precision.</em>
                </h3>
                <p>
                  From Kerala&apos;s tropical monsoons to scorching coastal heat,
                  our elevated hot-dip galvanized mounting structures and
                  bifacial split-cell modules ensure long-term energy yield with
                  zero compromises.
                </p>
                <div className="points" style={{ margin: "24px 0" }}>
                  <p>
                    <span className="check">✓</span>
                    <span>
                      <b>100% Leak-Proof Mounts</b>
                      <small>Chemical anchors and EPDM weather seals.</small>
                    </span>
                  </p>
                  <p>
                    <span className="check">✓</span>
                    <span>
                      <b>Full KSEB Paperwork Handled</b>
                      <small>Bi-directional net meter coordination included.</small>
                    </span>
                  </p>
                  <p>
                    <span className="check">✓</span>
                    <span>
                      <b>Transparent Local Warranty</b>
                      <small>Local Mattom presence for quick on-site service.</small>
                    </span>
                  </p>
                </div>
                <Link href="/contact" className="button lime">
                  Book a Site Survey &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section">
          <div className="container about-intro">
            <div className="split">
              <div>
                <p className="eyebrow">
                  <i /> Why we exist
                </p>
                <h2>
                  Good energy changes <span>everyday life.</span>
                </h2>
              </div>
              <div>
                <p className="lede">
                  We believe clean power should feel simple: clear advice before
                  you decide, meticulous work on your roof, and support that keeps
                  showing up after switch-on.
                </p>
                <Link className="text-link" href="/contact">
                  Meet the team &rarr;
                </Link>
              </div>
            </div>
            <div className="value-grid">
              <article>
                <b>01</b>
                <h3>Clarity first</h3>
                <p>
                  Plain-language recommendations, transparent estimates, and zero
                  high-pressure sales tactics.
                </p>
              </article>
              <article>
                <b>02</b>
                <h3>Made to endure</h3>
                <p>
                  Only Tier-1 split-cell bifacial modules and inverters selected
                  for dependable, 25-year output.
                </p>
              </article>
              <article>
                <b>03</b>
                <h3>Care after launch</h3>
                <p>
                  Real-time cloud monitoring, prompt local support, and a team
                  based right here in Mattom, Thrissur.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Banner Promise */}
        <section className="section lime-section">
          <div className="container split">
            <div>
              <p className="eyebrow">
                <i /> Our promise
              </p>
              <h2>
                A roof is not just a surface. It&apos;s a chance to make a
                difference.
              </h2>
            </div>
            <p className="lede">
              From homes to workplaces across Thrissur, we design each Green Hub
              system around the people and routines it will power.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
