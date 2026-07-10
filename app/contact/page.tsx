import type { Metadata } from "next";
import ContactClient from "./contact-client";
import JsonLd from "@/components/seo/json-ld";
import { buildMetadata, localBusinessSchema, siteUrl } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Mechatronics Calibration LLP in Ahmedabad for calibration inquiries, quotes, and technical consultation. Call +91 (79) 2583-0000 or email us.",
  path: "/contact",
  keywords: [
    "contact calibration lab Ahmedabad",
    "calibration inquiry Gujarat",
    "NABL lab contact",
    "calibration quote India",
  ] as string[],
});

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": siteUrl("/contact#webpage"),
  name: "Contact Mechatronics Calibration LLP",
  description: "Contact us for calibration services, quotes, and technical consultation.",
  url: siteUrl("/contact"),
  inLanguage: "en-IN",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Contact", item: siteUrl("/contact") },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[contactPageSchema, localBusinessSchema()]} />
      <ContactClient />
    </>
  );
}
