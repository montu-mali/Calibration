import type { Metadata } from "next";
import GalleryClient from "./gallery-client";
import JsonLd from "@/components/seo/json-ld";
import { buildMetadata, siteUrl } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Laboratory Gallery",
  description:
    "Explore our state-of-the-art calibration laboratory in Ahmedabad — precision instruments, NABL-certified test benches, and calibration processes in action.",
  path: "/gallery",
  keywords: [
    "calibration lab photos",
    "NABL laboratory images",
    "calibration equipment gallery",
    "Ahmedabad calibration lab",
  ] as string[],
});

const galleryPageSchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": siteUrl("/gallery#webpage"),
  name: "Laboratory Gallery — Mechatronics Calibration LLP",
  description:
    "Photo gallery of our NABL-accredited calibration laboratory in Ahmedabad, Gujarat.",
  url: siteUrl("/gallery"),
  inLanguage: "en-IN",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Gallery", item: siteUrl("/gallery") },
    ],
  },
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={galleryPageSchema} />
      <GalleryClient />
    </>
  );
}
