import type { Metadata } from "next";
import AboutClient from "./about-client";
import JsonLd from "@/components/seo/json-ld";
import { buildMetadata, siteUrl } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn how Mechatronics Calibration LLP has delivered precision calibration services across Gujarat and India for over 20 years. NABL accredited, ISO 17025 certified.",
  path: "/about",
  keywords: [
    "about Mechatronics Calibration",
    "NABL laboratory history",
    "calibration company Ahmedabad",
    "ISO 17025 accredited lab",
  ] as string[],
});

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": siteUrl("/about#webpage"),
  name: "About Mechatronics Calibration LLP",
  description:
    "Mechatronics Calibration LLP is a NABL-accredited calibration laboratory with 20+ years of expertise in precision measurement services.",
  url: siteUrl("/about"),
  inLanguage: "en-IN",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl("/") },
      { "@type": "ListItem", position: 2, name: "About Us", item: siteUrl("/about") },
    ],
  },
  isPartOf: { "@type": "WebSite", url: siteUrl("/") },
  about: {
    "@type": "Organization",
    name: "Mechatronics Calibration LLP",
    description: "NABL accredited calibration laboratory in Ahmedabad, India.",
    foundingDate: "2004",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 20, maxValue: 100 },
    areaServed: "India",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageSchema} />
      <AboutClient />
    </>
  );
}
