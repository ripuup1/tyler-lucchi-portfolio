"use client";

import { useEffect } from "react";

export default function LinkedInBadge() {
  useEffect(() => {
    // Load LinkedIn badge script
    const existing = document.querySelector('script[src*="platform.linkedin.com/badges"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://platform.linkedin.com/badges/js/profile.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else {
      // If script already loaded, re-render badges
      if (typeof (window as unknown as Record<string, unknown>).LIRenderAll === "function") {
        (window as unknown as { LIRenderAll: () => void }).LIRenderAll();
      }
    }
  }, []);

  return (
    <div className="glow-card rounded-lg bg-bg-card p-5 sm:p-6">
      <h3 className="font-outfit font-semibold text-lg text-text-primary mb-4">LinkedIn</h3>
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="dark"
        data-type="HORIZONTAL"
        data-vanity="tyler-lucchi"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link text-accent-blue hover:underline text-sm font-jetbrains"
          href="https://www.linkedin.com/in/tyler-lucchi?trk=profile-badge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tyler Lucchi
        </a>
      </div>
    </div>
  );
}
