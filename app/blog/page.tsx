import type { Metadata } from "next";
import BlogClient from "./blog-client";
import JsonLd from "@/components/seo/json-ld";
import { buildMetadata, articleSchema, siteUrl } from "@/lib/seo";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Blog — Calibration & Metrology Insights",
  description:
    "Expert articles and technical insights on calibration, ISO standards, instrument maintenance, and industrial metrology from Mechatronics Calibration LLP.",
  path: "/blog",
  keywords: [
    "calibration blog",
    "metrology articles",
    "ISO 17025 guide",
    "instrument calibration tips",
    "NABL accreditation explained",
  ] as string[],
});

const blogPageSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": siteUrl("/blog#webpage"),
  name: "Calibration & Metrology Blog — Mechatronics Calibration LLP",
  description:
    "Technical articles and expert insights on calibration, metrology, and ISO standards.",
  url: siteUrl("/blog"),
  inLanguage: "en-IN",
  publisher: {
    "@type": "Organization",
    name: "Mechatronics Calibration LLP",
    logo: siteUrl("/calibration_logo.jpg"),
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: siteUrl("/blog") },
    ],
  },
  blogPost: BLOG_POSTS.map((post) => articleSchema(post)),
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={blogPageSchema} />
      <BlogClient />
    </>
  );
}
