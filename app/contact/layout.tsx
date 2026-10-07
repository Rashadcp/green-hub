import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Green Hub Solar — Free Rooftop Survey in Kerala",
  description:
    "Book a free rooftop solar site assessment, get custom solar pricing, and apply for PM Surya Ghar ₹78,000 subsidy in Thrissur, Kerala. Direct Mattom office support: +91 70340 10111.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Green Hub Solar — Free Rooftop Survey in Kerala",
    description:
      "Get a free rooftop solar assessment and subsidy consultation from certified engineers in Thrissur, Kerala.",
    url: "https://greenhubsolar.in/contact",
    images: [
      {
        url: "/green-hub-team.jpg",
        width: 1000,
        height: 667,
        alt: "Green Hub Solar Engineering Crew in Kerala",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
