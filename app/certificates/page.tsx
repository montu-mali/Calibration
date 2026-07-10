import type { Metadata } from "next";
import CertificatesClient from "./certificates-client";
import JsonLd from "@/components/seo/json-ld";
import { buildMetadata, siteUrl } from "@/lib/seo";
import { CERTIFICATES } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Accreditations & Certificates",
  description:
    "View Mechatronics Calibration LLP's NABL accreditation, ISO 9001:2015 certification, and government approvals. All credentials traceable to national and international standards.",
  path: "/certificates",
  keywords: [
    "NABL accreditation certificate",
    "ISO 9001 calibration lab",
    "ISO 17025 certificate India",
    "government approved calibration laboratory",
    "quality assurance certificate",
  ] as string[],
});

const certificatesPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": siteUrl("/certificates#webpage"),
  name: "Accreditations & Certificates — Mechatronics Calibration LLP",
  description:
    "NABL, ISO 9001, and Government accreditation certificates of Mechatronics Calibration LLP.",
  url: siteUrl("/certificates"),
  inLanguage: "en-IN",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Certificates", item: siteUrl("/certificates") },
    ],
  },
  about: CERTIFICATES.map((cert) => ({
    "@type": "CreativeWork",
    name: cert.title,
    description: cert.description,
    image: siteUrl(cert.image),
  })),
};

export default function CertificatesPage() {
  return (
    <>
      <JsonLd data={certificatesPageSchema} />
      <CertificatesClient />
    </>
  );
}
