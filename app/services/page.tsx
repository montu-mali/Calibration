import type { Metadata } from "next";
import ServicesClient from "./services-client";
import JsonLd from "@/components/seo/json-ld";
import { buildMetadata, siteUrl } from "@/lib/seo";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Our Calibration Services",
  description:
    "Comprehensive NABL-accredited calibration services in Ahmedabad — electrical, mechanical, thermal, pressure, dimensional & analytical instruments. On-site & in-lab options.",
  path: "/services",
  keywords: [
    "calibration services list",
    "NABL calibration Ahmedabad",
    "electrical instrument calibration",
    "mechanical instrument calibration",
    "pressure calibration service",
    "thermal calibration India",
  ] as string[],
});

const servicesPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": siteUrl("/services#webpage"),
  name: "Calibration Services — Mechatronics Calibration LLP",
  description:
    "Full list of NABL-accredited calibration services offered by Mechatronics Calibration LLP.",
  url: siteUrl("/services"),
  inLanguage: "en-IN",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Services", item: siteUrl("/services") },
    ],
  },
  hasPart: SERVICES.slice(0, 10).map((s) => ({
    "@type": "Service",
    name: s.title,
    description: s.description,
    url: siteUrl(`/services/${s.slug}`),
    provider: { "@type": "Organization", name: "Mechatronics Calibration LLP" },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesPageSchema} />
      <ServicesClient />
    </>
  );
}
