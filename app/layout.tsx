import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://greenhubsolar.in"),
  title: {
    default: "Green Hub Solar Energy — Rooftop Solar Systems in Thrissur, Kerala",
    template: "%s | Green Hub Solar",
  },
  description:
    "Certified Tier-1 rooftop solar systems, solar water heaters, EV chargers, battery backups, and microinverters in Kerala. 100% in-house engineering squad in Mattom, Thrissur. KSEB net-metering & PM Surya Ghar ₹78,000 subsidy support.",
  keywords: [
    "Solar energy Kerala",
    "Rooftop solar Thrissur",
    "Green Hub Solar Energy",
    "Solar panel installation Mattom",
    "Solar EPC contractor Kerala",
    "PM Surya Ghar subsidy Kerala 2027",
    "Solar water heater Kerala",
    "Solar EV charger Thrissur",
    "Solar battery inverter storage",
    "Enphase micro inverter Kerala",
    "Deye micro inverter Kerala",
    "KSEB net metering solar",
    "Rooftop solar for homes Kunnamkulam Chavakkad",
  ],
  authors: [{ name: "Green Hub Solar Energy", url: "https://greenhubsolar.in" }],
  creator: "Green Hub Solar Energy",
  publisher: "Green Hub Solar Energy",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Green Hub Solar Energy — Rooftop Solar Systems in Thrissur, Kerala",
    description:
      "Certified Tier-1 rooftop solar panels, smart inverters, and clean energy systems installed across Kerala by our own certified in-house crew.",
    url: "https://greenhubsolar.in",
    siteName: "Green Hub Solar Energy",
    images: [
      {
        url: "/green-hub-solar-cover.png",
        width: 1400,
        height: 700,
        alt: "Green Hub Rooftop Solar Installation Kerala",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Hub Solar Energy — Rooftop Solar in Kerala",
    description: "Certified rooftop solar engineering & installation in Thrissur, Kerala.",
    images: ["/green-hub-solar-cover.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["SolarEnergyContractor", "LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": "https://greenhubsolar.in/#organization",
      "name": "Green Hub Solar Energy",
      "url": "https://greenhubsolar.in",
      "logo": "https://greenhubsolar.in/icon-512.png",
      "image": "https://greenhubsolar.in/green-hub-solar-cover.png",
      "description": "Certified Tier-1 rooftop solar EPC contractor in Mattom, Thrissur, Kerala. Residential solar, commercial plants, EV chargers, battery storage, and solar water heaters.",
      "telephone": "+917034010111",
      "email": "greenhubsolar@gmail.com",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mattom",
        "addressLocality": "Thrissur",
        "addressRegion": "Kerala",
        "postalCode": "680602",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 10.5276,
        "longitude": 76.2144
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "sameAs": [
        "https://instagram.com/greenhub_solarenergy"
      ],
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Thrissur" },
        { "@type": "AdministrativeArea", "name": "Kerala" }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://greenhubsolar.in/#website",
      "url": "https://greenhubsolar.in",
      "name": "Green Hub Solar Energy",
      "publisher": { "@id": "https://greenhubsolar.in/#organization" }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Orbitron:wght@600;700;800;900&family=Sora:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
