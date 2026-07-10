// app/manifest.ts
// Web App Manifest — enables "Add to Home Screen" on mobile and improves mobile SEO signals.
// Next.js serves this at /manifest.webmanifest automatically.

import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mechatronics Calibration LLP",
    short_name: "Mechatronics",
    description:
      "NABL-accredited ISO 17025 calibration laboratory in Ahmedabad. Precision calibration services for electrical, mechanical, thermal & pressure instruments.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0f1e",
    theme_color: "#0ea5e9",
    orientation: "portrait",
    categories: ["business", "productivity"],
    lang: "en-IN",
    icons: [
      {
        src: "/calibration_logo.jpg",
        sizes: "192x192",
        type: "image/jpeg",
        purpose: "any",
      },
      {
        src: "/calibration_logo.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "maskable",
      },
    ],
  };
}
