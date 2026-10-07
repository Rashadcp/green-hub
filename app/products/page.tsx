import Link from "next/link";
import Image from "next/image";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata = {
  title: "Solar Solutions & Hardware Catalog — Green Hub Kerala",
  description:
    "Explore residential & commercial rooftop solar, evacuated tube solar water heaters, EV fast chargers, battery storage UPS, and Enphase/Deye microinverters in Kerala.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Solar Solutions & Hardware Catalog — Green Hub Kerala",
    description:
      "Certified Tier-1 rooftop solar panels, solar water heaters, EV chargers, lithium storage, and micro inverters in Thrissur, Kerala.",
    url: "https://greenhubsolar.in/products",
    images: [
      {
        url: "/solar-battery-inverter.jpg",
        width: 700,
        height: 640,
        alt: "Green Hub Clean Energy Systems & Hardware Catalog",
      },
    ],
  },
};

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.07 7.42C8.91 7.42 8.65 7.48 8.42 7.73C8.19 7.98 7.56 8.57 7.56 9.78C7.56 10.99 8.44 12.16 8.57 12.33C8.69 12.5 10.29 14.97 12.75 16.03C13.33 16.28 13.79 16.43 14.14 16.54C14.73 16.73 15.26 16.7 15.69 16.64C16.17 16.57 17.15 16.05 17.35 15.48C17.56 14.91 17.56 14.42 17.5 14.32C17.43 14.22 17.27 14.16 17.02 14.04C16.78 13.91 15.58 13.32 15.35 13.24C15.13 13.16 14.96 13.12 14.8 13.36C14.64 13.61 14.18 14.16 14.04 14.32C13.9 14.49 13.76 14.51 13.52 14.39C13.27 14.26 12.23 13.92 11 12.83C10.04 11.97 9.39 10.92 9.27 10.71C9.15 10.51 9.26 10.39 9.38 10.27C9.49 10.16 9.63 9.98 9.75 9.83C9.88 9.69 9.92 9.58 10 9.42C10.08 9.25 10.04 9.11 9.98 8.98C9.92 8.86 9.45 7.7 9.26 7.23C9.07 6.78 8.88 6.84 8.74 6.83L8.3 6.83C8.14 6.83 7.88 6.89 7.65 7.14" />
  </svg>
);


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

        {/* Clean Energy Hardware Solutions: Solar Water Heater, Street Lights, EV Charger, Battery & Inverter */}
        <section className="gh-products-section" id="hardware">
          <div className="container">
            <div className="split gh-products-header">
              <div>
                <p className="eyebrow">
                  <i /> Certified Hardware &bull; Thrissur &amp; Kerala
                </p>
                <h2>
                  Solar Water Heaters, Street Lights, <span>EV &amp; Storage.</span>
                </h2>
              </div>
              <p className="side-copy">
                Turnkey green engineering for residential villas, housing communities,
                commercial sites, and institutions with certified local support.
              </p>
            </div>

            <div className="gh-products-grid">
              {/* 01: SOLAR WATER HEATER */}
              <article className="gh-product-card">
                <div className="gh-product-card__img-wrap">
                  <Image
                    src="/solar-water-heater.jpg"
                    alt="Green Hub Solar Water Heater installed on residential rooftop"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="gh-product-card__img"
                  />
                </div>
                <div className="gh-product-card__body">
                  <small className="gh-product-card__num">01 / THERMAL HEATING</small>
                  <h3 className="gh-product-card__title">Solar Water Heater</h3>
                  <p className="gh-product-card__desc">
                    Enjoy steaming hot water round the clock without electricity bills, powered by high-absorption evacuated tube collectors.
                  </p>
                  <div className="gh-product-card__specs">
                    <div className="gh-product-card__spec">
                      <span className="gh-product-card__check">✓</span>
                      <span>Triple-layer evacuated vacuum glass tubes (ETC)</span>
                    </div>
                    <div className="gh-product-card__spec">
                      <span className="gh-product-card__check">✓</span>
                      <span>Food-grade stainless steel insulated tank keeps heat overnight</span>
                    </div>
                    <div className="gh-product-card__spec">
                      <span className="gh-product-card__check">✓</span>
                      <span>Rust-proof galvanized structure built for Kerala monsoons</span>
                    </div>
                    <div className="gh-product-card__spec">
                      <span className="gh-product-card__check">✓</span>
                      <span>Cuts water heating electric expenses by up to 70%</span>
                    </div>
                  </div>
                  <div className="gh-product-card__footer">
                    <a
                      href="https://wa.me/917034010111?text=Hello%20Green%20Hub,%20I%20would%20like%20to%20enquire%20about%20Solar%20Water%20Heater%20for%20my%20home."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gh-product-card__whatsapp-btn"
                    >
                      <WhatsAppIcon />
                      <span>WhatsApp Enquiry</span>
                    </a>
                    <Link href="/contact" className="gh-product-card__quote-link">
                      <span>Request System Pricing</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </article>

              {/* 02: STREET LIGHTS */}
              <article className="gh-product-card">
                <div className="gh-product-card__img-wrap">
                  <Image
                    src="/solar-street-lights.jpg"
                    alt="All-in-one solar street light pole with integrated solar panel and LED luminaire"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="gh-product-card__img"
                  />
                </div>
                <div className="gh-product-card__body">
                  <small className="gh-product-card__num">02 / OUTDOOR LIGHTING</small>
                  <h3 className="gh-product-card__title">Street Lights</h3>
                  <p className="gh-product-card__desc">
                    Autonomous all-in-one solar LED street lighting for villas, private driveways, gated layouts, and commercial campuses.
                  </p>
                  <div className="gh-product-card__specs">
                    <div className="gh-product-card__spec">
                      <span className="gh-product-card__check">✓</span>
                      <span>Integrated all-in-one high-lumen LED solar luminaire</span>
                    </div>
                    <div className="gh-product-card__spec">
                      <span className="gh-product-card__check">✓</span>
                      <span>Smart dusk-to-dawn sensor + PIR motion dimming control</span>
                    </div>
                    <div className="gh-product-card__spec">
                      <span className="gh-product-card__check">✓</span>
                      <span>Long-life LiFePO4 battery with 2,000+ deep charge cycles</span>
                    </div>
                    <div className="gh-product-card__spec">
                      <span className="gh-product-card__check">✓</span>
                      <span>IP65 weatherproof, zero trenching &amp; zero electric cables</span>
                    </div>
                  </div>
                  <div className="gh-product-card__footer">
                    <a
                      href="https://wa.me/917034010111?text=Hello%20Green%20Hub,%20I%20would%20like%20to%20enquire%20about%20Solar%20Street%20Lights."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gh-product-card__whatsapp-btn"
                    >
                      <WhatsAppIcon />
                      <span>WhatsApp Enquiry</span>
                    </a>
                    <Link href="/contact" className="gh-product-card__quote-link">
                      <span>Request Street Light Specs</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </article>

              {/* 03: EV CHARGER */}
              <article className="gh-product-card">
                <div className="gh-product-card__img-wrap">
                  <Image
                    src="/solar-ev-charger.jpg"
                    alt="Modern high-tech wall-mounted solar EV charger charging electric car"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="gh-product-card__img"
                  />
                </div>
                <div className="gh-product-card__body">
                  <small className="gh-product-card__num">03 / CLEAN MOBILITY</small>
                  <h3 className="gh-product-card__title">EV Charger</h3>
                  <p className="gh-product-card__desc">
                    Charge your electric vehicle directly with surplus solar electricity for zero-fuel-cost commuting and total convenience.
                  </p>
                  <div className="gh-product-card__specs">
                    <div className="gh-product-card__spec">
                      <span className="gh-product-card__check">✓</span>
                      <span>Smart AC Level 2 fast charger (7.4kW / 11kW / 22kW)</span>
                    </div>
                    <div className="gh-product-card__spec">
                      <span className="gh-product-card__check">✓</span>
                      <span>Universal Type 2 connector compatible with all Indian EVs</span>
                    </div>
                    <div className="gh-product-card__spec">
                      <span className="gh-product-card__check">✓</span>
                      <span>Solar-sync charging mode to prioritize free rooftop power</span>
                    </div>
                    <div className="gh-product-card__spec">
                      <span className="gh-product-card__check">✓</span>
                      <span>Overload, lightning surge &amp; ground fault safety built-in</span>
                    </div>
                  </div>
                  <div className="gh-product-card__footer">
                    <a
                      href="https://wa.me/917034010111?text=Hello%20Green%20Hub,%20I%20would%20like%20to%20enquire%20about%20a%20Solar%20EV%20Charger."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gh-product-card__whatsapp-btn"
                    >
                      <WhatsAppIcon />
                      <span>WhatsApp Enquiry</span>
                    </a>
                    <Link href="/contact" className="gh-product-card__quote-link">
                      <span>Request Charger Quote</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </article>

              {/* 04: BATTERY & INVERTER */}
              <article className="gh-product-card">
                <div className="gh-product-card__img-wrap">
                  <Image
                    src="/solar-battery-inverter.jpg"
                    alt="Modern hybrid solar inverter and lithium-ion wall-mounted battery storage system"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="gh-product-card__img"
                  />
                </div>
                <div className="gh-product-card__body">
                  <small className="gh-product-card__num">04 / ENERGY STORAGE</small>
                  <h3 className="gh-product-card__title">Battery &amp; Inverter</h3>
                  <p className="gh-product-card__desc">
                    Enjoy uninterrupted power through grid blackouts with smart hybrid inverters and safe, high-capacity lithium battery packs.
                  </p>
                  <div className="gh-product-card__specs">
                    <div className="gh-product-card__spec">
                      <span className="gh-product-card__check">✓</span>
                      <span>Smart hybrid inverters with ultra-fast &lt;10ms UPS switchover</span>
                    </div>
                    <div className="gh-product-card__spec">
                      <span className="gh-product-card__check">✓</span>
                      <span>High-safety Lithium Iron Phosphate (LiFePO4) storage banks</span>
                    </div>
                    <div className="gh-product-card__spec">
                      <span className="gh-product-card__check">✓</span>
                      <span>Daytime solar storage for evening and nighttime household use</span>
                    </div>
                    <div className="gh-product-card__spec">
                      <span className="gh-product-card__check">✓</span>
                      <span>Smart smartphone app tracking of battery level &amp; power flow</span>
                    </div>
                  </div>
                  <div className="gh-product-card__footer">
                    <a
                      href="https://wa.me/917034010111?text=Hello%20Green%20Hub,%20I%20would%20like%20to%20enquire%20about%20Hybrid%20Solar%20Inverter%20and%20Battery%20Storage."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gh-product-card__whatsapp-btn"
                    >
                      <WhatsAppIcon />
                      <span>WhatsApp Enquiry</span>
                    </a>
                    <Link href="/contact" className="gh-product-card__quote-link">
                      <span>Request Battery Pricing</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </article>

              {/* 05: MICRO INVERTER */}
              <article className="gh-product-card">
                <div className="gh-product-card__img-wrap">
                  <Image
                    src="/solar-micro-inverter.jpg"
                    alt="Green Hub Solar Micro Inverter installed under rooftop solar panel"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="gh-product-card__img"
                  />
                </div>
                <div className="gh-product-card__body">
                  <small className="gh-product-card__num">05 / ADVANCED INVERTER</small>
                  <h3 className="gh-product-card__title">Micro Inverter</h3>
                  <p className="gh-product-card__desc">
                    Independent panel-level conversion eliminating shade loss, with touch-safe low-voltage DC and real-time individual module tracking.
                  </p>

                  {/* Available Brands Chips */}
                  <div className="gh-product-card__brand-chips">
                    <span className="gh-product-card__brand-chips-label">Available Brands:</span>
                    <span className="gh-product-card__brand-chip">Enphase</span>
                    <span className="gh-product-card__brand-chip">Deye</span>
                    <span className="gh-product-card__brand-chip">T SUN</span>
                    <span className="gh-product-card__brand-chip">Hoymiles</span>
                  </div>

                  <div className="gh-product-card__specs">
                    <div className="gh-product-card__spec">
                      <span className="gh-product-card__check">✓</span>
                      <span>Module-level MPPT (each panel generates 100% independently)</span>
                    </div>
                    <div className="gh-product-card__spec">
                      <span className="gh-product-card__check">✓</span>
                      <span>Safe touch-safe &lt;60V DC on roof — zero fire risk</span>
                    </div>
                    <div className="gh-product-card__spec">
                      <span className="gh-product-card__check">✓</span>
                      <span>High generation even with tree shade or complex roof slopes</span>
                    </div>
                    <div className="gh-product-card__spec">
                      <span className="gh-product-card__check">✓</span>
                      <span>25-year performance warranty backed by global brand leaders</span>
                    </div>
                  </div>
                  <div className="gh-product-card__footer">
                    <a
                      href="https://wa.me/917034010111?text=Hello%20Green%20Hub,%20I%20would%20like%20to%20enquire%20about%20Micro%20Inverter%20systems%20(Enphase/Deye/TSUN/Hoymiles)."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gh-product-card__whatsapp-btn"
                    >
                      <WhatsAppIcon />
                      <span>WhatsApp Enquiry</span>
                    </a>
                    <Link href="/contact" className="gh-product-card__quote-link">
                      <span>Request Micro Inverter Quote</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </article>

              {/* 06: STRING INVERTER (ALL TYPES AVAILABLE) */}
              <article className="gh-product-card">
                <div className="gh-product-card__img-wrap">
                  <Image
                    src="/solar-string-inverter.jpg"
                    alt="High-efficiency wall-mounted on-grid solar string inverter with DC isolator switch"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="gh-product-card__img"
                  />
                </div>
                <div className="gh-product-card__body">
                  <small className="gh-product-card__num">06 / GRID-TIED &amp; HYBRID</small>
                  <h3 className="gh-product-card__title">String Inverter</h3>
                  <p className="gh-product-card__desc">
                    All types available for residential, commercial, and industrial installations — engineered for peak conversion efficiency and KSEB synchronization.
                  </p>

                  {/* Available Types Chips */}
                  <div className="gh-product-card__brand-chips">
                    <span className="gh-product-card__brand-chips-label">All Types Available:</span>
                    <span className="gh-product-card__brand-chip">Single Phase</span>
                    <span className="gh-product-card__brand-chip">Three Phase</span>
                    <span className="gh-product-card__brand-chip">Hybrid / Storage</span>
                    <span className="gh-product-card__brand-chip">Commercial &amp; C&amp;I</span>
                  </div>

                  <div className="gh-product-card__specs">
                    <div className="gh-product-card__spec">
                      <span className="gh-product-card__check">✓</span>
                      <span>Single-phase (1kW–10kW) &amp; Three-phase (5kW–125kW+) units</span>
                    </div>
                    <div className="gh-product-card__spec">
                      <span className="gh-product-card__check">✓</span>
                      <span>High 98.8%+ conversion efficiency with dual/multi-MPPT tracking</span>
                    </div>
                    <div className="gh-product-card__spec">
                      <span className="gh-product-card__check">✓</span>
                      <span>IP65/IP66 weatherproof die-cast housing built for Kerala humidity</span>
                    </div>
                    <div className="gh-product-card__spec">
                      <span className="gh-product-card__check">✓</span>
                      <span>Built-in DC isolator, lightning surge protection &amp; WiFi app</span>
                    </div>
                  </div>
                  <div className="gh-product-card__footer">
                    <a
                      href="https://wa.me/917034010111?text=Hello%20Green%20Hub,%20I%20am%20enquiring%20about%20String%20Inverters%20(Single%20Phase%20/%20Three%20Phase%20/%20Hybrid)."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gh-product-card__whatsapp-btn"
                    >
                      <WhatsAppIcon />
                      <span>WhatsApp Enquiry</span>
                    </a>
                    <Link href="/contact" className="gh-product-card__quote-link">
                      <span>Request Inverter Pricing</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            {/* AUTHORIZED MICRO INVERTER BRANDS SHOWCASE */}
            <div className="gh-micro-brands-banner">
              <div className="gh-micro-brands-header">
                <span className="gh-micro-brands-badge">
                  <i /> Authorized Partner Brands &bull; Kerala
                </span>
                <h3 className="gh-micro-brands-title">
                  Micro Inverter Brands <span>Available.</span>
                </h3>
                <p className="gh-micro-brands-desc">
                  We supply, configure, and install world-class microinverters with official manufacturer warranties, high monsoon durability, and cloud monitoring apps.
                </p>
              </div>

              <div className="gh-micro-brands-grid">
                {/* BRAND 1: ENPHASE */}
                <div className="gh-micro-brand-card">
                  <div className="gh-micro-brand-logo-wrap">
                    <Image
                      src="/brands/enphase.png"
                      alt="Enphase Microinverters logo"
                      width={140}
                      height={48}
                      className="gh-micro-brand-logo-img"
                    />
                  </div>
                  <h4 className="gh-micro-brand-name">ENPHASE</h4>
                  <p className="gh-micro-brand-info">
                    USA Pioneer &bull; IQ7 / IQ8 Series with Sunlight Jumpstart &amp; 25-Year Warranty.
                  </p>
                  <span className="gh-micro-brand-pill">✓ Available In Stock</span>
                  <a
                    href="https://wa.me/917034010111?text=Hello%20Green%20Hub,%20I%20am%20enquiring%20about%20Enphase%20Micro%20Inverters."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gh-micro-brand-action"
                  >
                    <WhatsAppIcon />
                    <span>Enquire Enphase</span>
                  </a>
                </div>

                {/* BRAND 2: DEYE */}
                <div className="gh-micro-brand-card">
                  <div className="gh-micro-brand-logo-wrap">
                    <Image
                      src="/brands/deye.png"
                      alt="Deye Microinverters logo"
                      width={130}
                      height={44}
                      className="gh-micro-brand-logo-img"
                    />
                  </div>
                  <h4 className="gh-micro-brand-name">DEYE</h4>
                  <p className="gh-micro-brand-info">
                    Global Leader &bull; Dual &amp; Quad MPPT Microinverters with Hybrid Grid Compatibility.
                  </p>
                  <span className="gh-micro-brand-pill">✓ Available In Stock</span>
                  <a
                    href="https://wa.me/917034010111?text=Hello%20Green%20Hub,%20I%20am%20enquiring%20about%20Deye%20Micro%20Inverters."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gh-micro-brand-action"
                  >
                    <WhatsAppIcon />
                    <span>Enquire Deye</span>
                  </a>
                </div>

                {/* BRAND 3: T SUN */}
                <div className="gh-micro-brand-card">
                  <div className="gh-micro-brand-logo-wrap">
                    <Image
                      src="/brands/tsun.png"
                      alt="T SUN Microinverters logo"
                      width={150}
                      height={46}
                      className="gh-micro-brand-logo-img"
                    />
                  </div>
                  <h4 className="gh-micro-brand-name">T SUN</h4>
                  <p className="gh-micro-brand-info">
                    More Safety, More Power &bull; TSOL Series with Integrated WiFi &amp; Multi-Channel Safety.
                  </p>
                  <span className="gh-micro-brand-pill">✓ Available In Stock</span>
                  <a
                    href="https://wa.me/917034010111?text=Hello%20Green%20Hub,%20I%20am%20enquiring%20about%20TSUN%20Micro%20Inverters."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gh-micro-brand-action"
                  >
                    <WhatsAppIcon />
                    <span>Enquire T SUN</span>
                  </a>
                </div>

                {/* BRAND 4: HOYMILES */}
                <div className="gh-micro-brand-card">
                  <div className="gh-micro-brand-logo-wrap">
                    <Image
                      src="/brands/hoymiles.png"
                      alt="Hoymiles Microinverters logo"
                      width={110}
                      height={48}
                      className="gh-micro-brand-logo-img"
                    />
                  </div>
                  <h4 className="gh-micro-brand-name">HOYMILES</h4>
                  <p className="gh-micro-brand-info">
                    World #1 Technology &bull; HMS 1-in-1, 2-in-1 &amp; 4-in-1 with Rapid Shutdown &amp; Sub-1G.
                  </p>
                  <span className="gh-micro-brand-pill">✓ Available In Stock</span>
                  <a
                    href="https://wa.me/917034010111?text=Hello%20Green%20Hub,%20I%20am%20enquiring%20about%20Hoymiles%20Micro%20Inverters."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gh-micro-brand-action"
                  >
                    <WhatsAppIcon />
                    <span>Enquire Hoymiles</span>
                  </a>
                </div>
              </div>
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
