import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollProgress from "@/components/ui/scroll-progress";
import BackToTop from "@/components/ui/back-to-top";
import CustomCursor from "@/components/ui/custom-cursor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://mechatronics-calibration.com"
  ),
  title: {
    default: "Mechatronics Calibration LLP | Precision Beyond Measurement",
    template: "%s | Mechatronics Calibration LLP",
  },
  description:
    "NABL-accredited, ISO/IEC 17025 certified calibration laboratory in Ahmedabad. Expert calibration of electrical, mechanical, thermal & pressure instruments with traceable certificates. 20+ years, 12,000+ instruments.",
  keywords: [
    "calibration services Ahmedabad",
    "NABL accredited laboratory",
    "ISO 17025 calibration",
    "electrical calibration",
    "mechanical calibration",
    "thermal calibration",
    "pressure calibration",
    "dimensional metrology",
    "instrument calibration India",
    "NABL certificate",
    "precision measurement",
    "calibration laboratory Gujarat",
    "Mechatronics Calibration",
  ],
  authors: [{ name: "Mechatronics Calibration LLP", url: "https://mechatronics-calibration.com" }],
  creator: "Mechatronics Calibration LLP",
  publisher: "Mechatronics Calibration LLP",
  category: "Calibration & Metrology Services",
  classification: "Industrial Services",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mechatronics-calibration.com",
    siteName: "Mechatronics Calibration LLP",
    title: "Mechatronics Calibration LLP | Precision Beyond Measurement",
    description:
      "NABL-accredited ISO 17025 calibration laboratory in Ahmedabad. Precision calibration for electrical, mechanical, thermal & pressure instruments.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mechatronics Calibration LLP — Precision Beyond Measurement",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mechatronics_cal",
    creator: "@mechatronics_cal",
    title: "Mechatronics Calibration LLP | Precision Beyond Measurement",
    description:
      "NABL-accredited ISO 17025 calibration laboratory in Ahmedabad. 20+ years of precision measurement excellence.",
    images: ["/opengraph-image"],
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
      { url: "/calibration_logo.jpg", type: "image/jpeg" },
    ],
    apple: [
      { url: "/calibration_logo.jpg", type: "image/jpeg" },
    ],
    shortcut: "/calibration_logo.jpg",
  },
  // Add your Google Search Console verification token here:
  // verification: { google: "YOUR_GSC_VERIFICATION_TOKEN", other: { "msvalidate.01": "YOUR_BING_TOKEN" } },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-[100]">
          Skip to content
        </a>
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
