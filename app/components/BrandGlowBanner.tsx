"use client";
import React from "react";

interface BrandGlowBannerProps {
  /**
   * The company name to display.
   * Defaults to "GREEN HUB" (the site's brand name).
   * Can also be set to "IXORA TECH" or any custom text.
   */
  companyName?: string;
  className?: string;
}

export default function BrandGlowBanner({
  companyName = "GREEN HUB",
  className = "",
}: BrandGlowBannerProps) {
  return (
    <section
      className={`gh-brand-glow-strip ${className}`}
      aria-label="Brand Spotlight"
    >
      {/* Top & Bottom running laser edge highlights across full width */}
      <div className="gh-glow-edge gh-glow-edge--top" aria-hidden="true" />
      <div className="gh-glow-edge gh-glow-edge--bottom" aria-hidden="true" />

      {/* Diffuse moving light beam sweep across entire card */}
      <div className="gh-glow-sweep" aria-hidden="true" />

      {/* Ambient moving radial aura behind text */}
      <div className="gh-glow-aura" aria-hidden="true" />

      {/* Company Name with synchronized left-to-right glow shine */}
      <div className="gh-brand-glow-content">
        <span className="gh-brand-glow-text" data-text={companyName}>
          {companyName}
        </span>
      </div>

      {/* Subtle grid mesh background pattern for depth */}
      <div className="gh-glow-grid" aria-hidden="true" />
    </section>
  );
}
