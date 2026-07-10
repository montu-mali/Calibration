// app/opengraph-image.tsx
// Auto-generated Open Graph image at /opengraph-image (1200×630).
// Next.js serves this for the root OG image. No external files needed.

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mechatronics Calibration LLP — Precision Beyond Measurement";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #0a0f1e 0%, #0c1a35 50%, #071525 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            border: "1px solid rgba(14,165,233,0.15)",
            top: "-100px",
            right: "-100px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            border: "1px solid rgba(14,165,233,0.1)",
            bottom: "-60px",
            left: "-60px",
          }}
        />
        {/* Accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #0ea5e9, #38bdf8, #7dd3fc)",
          }}
        />

        {/* NABL badge */}
        <div
          style={{
            background: "rgba(14,165,233,0.12)",
            border: "1px solid rgba(14,165,233,0.3)",
            borderRadius: "100px",
            padding: "8px 24px",
            color: "#38bdf8",
            fontSize: "18px",
            fontWeight: 600,
            letterSpacing: "2px",
            marginBottom: "32px",
          }}
        >
          NABL ACCREDITED · ISO/IEC 17025
        </div>

        {/* Company name */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-1px",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "12px",
          }}
        >
          Mechatronics
        </div>
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            background: "linear-gradient(90deg, #0ea5e9, #38bdf8)",
            backgroundClip: "text",
            color: "transparent",
            letterSpacing: "-1px",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "28px",
          }}
        >
          Calibration LLP
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "26px",
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            fontWeight: 400,
            letterSpacing: "1px",
            marginBottom: "48px",
          }}
        >
          Precision Beyond Measurement
        </div>

        {/* Bottom info strip */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            color: "rgba(255,255,255,0.45)",
            fontSize: "16px",
          }}
        >
          <span>📍 Ahmedabad, Gujarat, India</span>
          <span>📞 +91 (79) 2583-0000</span>
          <span>🌐 mechatronics-calibration.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
