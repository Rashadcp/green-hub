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
    "Solar Carport & EV Charging",
    "Transform parking driveways into power stations with architectural solar canopies and integrated high-speed EV chargers.",
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
                  src="/green-hub-solar-ev-carport.jpg"
                  alt="Green Hub architectural solar carport with integrated EV charging station"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 550px"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <div className="gh-single-feature__media-tag">
                  <b>Solar Carport &amp; EV Charging</b>
                  <small>100% Green Mobility</small>
                </div>
              </div>

              <div className="gh-single-feature__content">
                <p className="eyebrow">
                  <i /> Modern Solar Architecture
                </p>
                <h3>
                  Power your home &amp; charge your EV with <em>clean sunlight.</em>
                </h3>
                <p>
                  Transform driveways and parking bays into clean energy generation
                  powerhouses. Engineered with cyclone-proof galvanized steel,
                  Tier-1 bifacial panels, and smart EV charging stations.
                </p>
                <div className="gh-evidence-card__highlights">
                  <div className="gh-evidence-card__item">
                    <span className="gh-evidence-card__check">✓</span>
                    <span>High-power bifacial solar canopy providing shade and electricity</span>
                  </div>
                  <div className="gh-evidence-card__item">
                    <span className="gh-evidence-card__check">✓</span>
                    <span>Smart EV fast charger integration with overload and lightning safety</span>
                  </div>
                  <div className="gh-evidence-card__item">
                    <span className="gh-evidence-card__check">✓</span>
                    <span>Weatherproof industrial cabling and seamless KSEB net-metering</span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "14px", marginTop: "24px", flexWrap: "wrap" }}>
                  <Link href="/contact" className="button lime">
                    Request Solar Solution Quote &rarr;
                  </Link>
                  <a
                    href="https://wa.me/917034010111?text=Hello%20Green%20Hub,%20I%20would%20like%20to%20enquire%20about%20your%20solar%20solutions."
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
