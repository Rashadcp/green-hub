import Link from "next/link";
import Image from "next/image";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata = {
  title: "Solar Solutions — Green Hub Solar Energy",
  description:
    "Explore residential, commercial, and hybrid rooftop solar solutions from Green Hub in Thrissur, Kerala. Tier-1 bifacial monocrystalline panels and smart inverters.",
};

const products = [
  [
    "01",
    "Residential Rooftop Solar",
    "Custom solar arrays for independent houses, villas, and apartments in Kerala. Slash up to 90% of your bi-monthly KSEB bill.",
  ],
  [
    "02",
    "Commercial & Industrial Solar",
    "Engineered to lower peak daytime operational electricity costs for hospitals, schools, bakeries, and manufacturing hubs.",
  ],
  [
    "03",
    "Hybrid Solar with Storage",
    "Combines solar generation with lithium or tubular battery backup for uninterrupted power during grid outages.",
  ],
  [
    "04",
    "24/7 Smart Cloud Monitoring",
    "Real-time mobile tracking of generation, household consumption, export to KSEB grid, and automated fault alerts.",
  ],
];

export default function Products() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Products Hero */}
        <section className="subhero cream-hero">
          <div className="container">
            <p className="eyebrow">
              <i /> Certified Solar Technology
            </p>
            <h1>
              Everything your roof needs to work <em>smarter.</em>
            </h1>
            <p>
              Tier-1 bifacial panels, intelligent string &amp; hybrid inverters,
              and cyclone-rated mounting structures engineered for Kerala.
            </p>
          </div>
          <div className="product-orbit">
            <span>&#9728;</span>
          </div>
        </section>

        {/* Real Product & Hardware Showcase Card */}
        <section className="section gh-showcase-section">
          <div className="container">
            <div className="gh-single-feature">
              <div className="gh-single-feature__media">
                <Image
                  src="/green-hub-expert.jpg"
                  alt="Green Hub solar technician inspecting high-efficiency bifacial solar panel array"
                  fill
                  sizes="(max-width: 900px) 100vw, 550px"
                  style={{ objectFit: "cover" }}
                />
                <div className="gh-single-feature__media-tag">
                  <b>Tier-1 Mono PERC Bifacial</b>
                  <small>550W+ High Output</small>
                </div>
              </div>

              <div className="gh-single-feature__content">
                <p className="eyebrow">
                  <i /> Hardware Standard
                </p>
                <h3>
                  Tested for tropical heat &amp; <em>monsoon rains.</em>
                </h3>
                <p>
                  Every panel installed by Green Hub features anti-reflective
                  tempered glass, split-cell architecture to minimize shading
                  losses, and corrosion-resistant anodized aluminum frames.
                </p>
                <div className="gh-evidence-card__highlights">
                  <div className="gh-evidence-card__item">
                    <span className="gh-evidence-card__check">✓</span>
                    <span>Dual-glass bifacial generation (up to 25% rear boost)</span>
                  </div>
                  <div className="gh-evidence-card__item">
                    <span className="gh-evidence-card__check">✓</span>
                    <span>IP68 waterproof junction boxes &amp; MC4 connectors</span>
                  </div>
                  <div className="gh-evidence-card__item">
                    <span className="gh-evidence-card__check">✓</span>
                    <span>12-year product warranty &bull; 25-year performance warranty</span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "14px", marginTop: "24px", flexWrap: "wrap" }}>
                  <Link href="/contact" className="button lime">
                    Request System Quote &rarr;
                  </Link>
                  <a
                    href="https://wa.me/917034010111?text=Hello%20Green%20Hub,%20I%20would%20like%20to%20enquire%20about%20your%20solar%20products."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                    style={{ alignSelf: "center" }}
                  >
                    WhatsApp Enquiry &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="section">
          <div className="container">
            <div className="split">
              <div>
                <p className="eyebrow">
                  <i /> Built around your roof
                </p>
                <h2>
                  Not a one-size-fits-all <span>system.</span>
                </h2>
              </div>
              <p className="side-copy">
                We perform shadow-casting simulation, terrace load checks, and
                tariff analysis before designing the right system configuration.
              </p>
            </div>
            <div className="product-grid">
              {products.map(([num, title, copy]) => (
                <article key={num}>
                  <small>{num} / GREEN HUB</small>
                  <span className="product-glyph">
                    {num === "01" ? "◫" : num === "02" ? "↗" : num === "03" ? "◉" : "⌁"}
                  </span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <Link href="/contact">Enquire about this solution &rarr;</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Standard Highlights */}
        <section className="section support">
          <div className="container split">
            <div>
              <p className="eyebrow">
                <i /> The Green Hub Guarantee
              </p>
              <h2>
                Selected for durability. Installed with <span>care.</span>
              </h2>
            </div>
            <div className="spec-list">
              <p>
                <b>Tier-1 Certified Hardware</b>
                <span>
                  Only internationally certified Bloomberg NEF Tier-1 solar
                  manufacturers with active service backing in India.
                </span>
              </p>
              <p>
                <b>Elevated Hot-Dip GI Structure</b>
                <span>
                  Allows you to continue using your terrace for recreation and
                  drying clothes while optimizing airflow under the panels.
                </span>
              </p>
              <p>
                <b>Direct Technical Line in Thrissur</b>
                <span>
                  Immediate support from our Mattom headquarters: +91 70340 10111.
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
