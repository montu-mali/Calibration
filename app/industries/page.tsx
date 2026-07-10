import type { Metadata } from "next";
import IndustriesClient from "./industries-client";
import JsonLd from "@/components/seo/json-ld";
import { buildMetadata, siteUrl } from "@/lib/seo";
import { INDUSTRIES } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve",
  description:
    "Mechatronics Calibration LLP provides NABL-accredited calibration services to automotive, pharma, aerospace, defence, oil & gas, healthcare and more across India.",
  path: "/industries",
  keywords: [
    "calibration for automotive industry",
    "pharmaceutical instrument calibration",
    "aerospace calibration services India",
    "defence calibration NABL",
    "oil gas pressure calibration",
    "healthcare instrument calibration",
    "industrial calibration Gujarat",
  ] as string[],
});

const industriesPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": siteUrl("/industries#webpage"),
  name: "Industries We Serve — Mechatronics Calibration LLP",
  description:
    "Calibration services provided to diverse industrial sectors across India.",
  url: siteUrl("/industries"),
  inLanguage: "en-IN",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Industries", item: siteUrl("/industries") },
    ],
  },
  hasPart: INDUSTRIES.map((ind) => ({
    "@type": "ItemList",
    name: ind.name,
    description: ind.description,
  })),
};

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={industriesPageSchema} />
      <IndustriesClient />
    </>
  );
}
