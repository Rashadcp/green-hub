import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Completed Rooftop Solar Projects in Kerala — Green Hub",
  description:
    "Explore authentic rooftop solar installations completed across Thrissur, Kunnamkulam, Chavakkad, and Mattom. Real photos, verified specs, and KSEB grid synchronization.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Completed Solar Projects in Kerala — Green Hub",
    description:
      "Verified residential and commercial rooftop solar installations engineered by Green Hub across Thrissur and Kerala.",
    url: "https://greenhubsolar.in/projects",
    images: [
      {
        url: "/projects/project-choondal-mattom-1.jpg",
        width: 1200,
        height: 675,
        alt: "Green Hub Rooftop Solar Installation in Kerala",
      },
    ],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
