"use client";
import { useState } from "react";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

interface ProjectItem {
  id: string;
  title: string;
  location: string;
  image: string;
}

const projects: ProjectItem[] = [
  {
    id: "kandanassery",
    title: "5.4 kWp Rooftop Solar",
    location: "Kandanassery, Kunnamkulam",
    image: "/projects/project-kandanassery-kunnamkulam.jpg",
  },
  {
    id: "choondal-mattom-1",
    title: "6.5 kWp Split-Level Solar",
    location: "Choondal - Mattom Road",
    image: "/projects/project-choondal-mattom-1.jpg",
  },
  {
    id: "choondal-mattom-walkway",
    title: "Elevated Maintenance Walkway",
    location: "Choondal - Mattom Road",
    image: "/projects/project-choondal-mattom-2.jpg",
  },
  {
    id: "peruvallur-chavakkad-1",
    title: "4.2 kWp Purlin-Mounted Array",
    location: "Peruvallur, Chavakkad",
    image: "/projects/project-peruvallur-chavakkad-1.jpg",
  },
  {
    id: "peruvallur-chavakkad-2",
    title: "Heritage Villa Solar Installation",
    location: "Peruvallur, Chavakkad",
    image: "/projects/project-peruvallur-chavakkad-2.jpg",
  },
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<ProjectItem | null>(null);

  return (
    <>
      <SiteHeader />
      <main>
        {/* Minimal Clean Hero */}
        <section className="subhero dark-hero compact-hero" style={{ padding: "90px 0 50px" }}>
          <div className="container" style={{ textAlign: "center", maxWidth: "640px" }}>
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              <i /> Our Installations
            </p>
            <h1>
              Our <em>Projects.</em>
            </h1>
            <p style={{ margin: "10px auto 0", fontSize: "15px", color: "var(--slate)" }}>
              Recent rooftop solar installations completed across Thrissur, Kerala.
            </p>
          </div>
          <div className="sun-disc" />
        </section>

        {/* Minimal Photo Grid */}
        <section className="section" style={{ padding: "50px 0 80px" }}>
          <div className="container">
            <div className="gh-minimal-grid">
              {projects.map((item) => (
                <article
                  key={item.id}
                  className="gh-minimal-card"
                  onClick={() => setSelectedImage(item)}
                  title="Click to view photo"
                >
                  <div className="gh-minimal-card__media">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <span className="gh-minimal-card__zoom-hint">Enlarge</span>
                  </div>

                  <div className="gh-minimal-card__body">
                    <h3>{item.title}</h3>
                    <span className="gh-minimal-card__loc">
                      📍 {item.location}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {/* Minimal WhatsApp Inquiry Link */}
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <a
                href="https://wa.me/917034010111"
                target="_blank"
                rel="noopener noreferrer"
                className="button lime"
                style={{ padding: "0 28px", height: "46px" }}
              >
                Inquire via WhatsApp &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Minimal Lightbox Modal */}
        {selectedImage && (
          <div className="gh-lightbox" onClick={() => setSelectedImage(null)}>
            <div
              className="gh-lightbox__dialog"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="gh-lightbox__close"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="gh-lightbox__img-wrap">
                <img src={selectedImage.image} alt={selectedImage.title} />
              </div>
              <div className="gh-lightbox__info" style={{ padding: "18px 24px" }}>
                <h3 style={{ margin: "0 0 4px", fontSize: "17px" }}>
                  {selectedImage.title}
                </h3>
                <p style={{ margin: "0 0 14px", color: "var(--slate)", fontSize: "13px" }}>
                  📍 {selectedImage.location}
                </p>
                <a
                  href={`https://wa.me/917034010111?text=Hello%20Green%20Hub,%20I%20am%20asking%20about:%20${encodeURIComponent(
                    selectedImage.title
                  )}%20in%20${encodeURIComponent(selectedImage.location)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button lime"
                  style={{ minHeight: "40px", padding: "0 18px", fontSize: "12px" }}
                >
                  WhatsApp About This Project &rarr;
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
