import type { Metadata } from "next";

export const SITE = {
  name: "Mechatronics Calibration LLP",
  shortName: "Mechatronics",
  url:
    process.env.NEXT_PUBLIC_SITE_URL || "https://mechatronics-calibration.vercel.app/",
  description:
    "NABL-accredited, ISO 17025 certified calibration laboratory in Ahmedabad. Expert calibration of electrical, mechanical, thermal & pressure instruments with traceable certificates.",
  tagline: "Precision Beyond Measurement",
  locale: "en_IN",
  twitterHandle: "@mechatronics_cal",
  address: {
    street: "Plot No. 45, GIDC Estate, Vatva",
    city: "Ahmedabad",
    state: "Gujarat",
    postalCode: "382445",
    country: "IN",
    region: "GJ",
  },
  contact: {
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 7984193798",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "mechatronics018@gmail.com",
  },
  geo: {
    latitude: "22.9884",
    longitude: "72.6377",
  },
  openingHours: "Mo-Sa 09:00-18:00",
  priceRange: "₹₹",
} as const;

export const DEFAULT_OG_IMAGE = "/opengraph-image";

/** Build full absolute URL from a path */
export function siteUrl(path = ""): string {
  return `${SITE.url}${path}`;
}

/** Standard metadata defaults merged with per-page overrides */
export function buildMetadata(
  overrides: Partial<Metadata> & {
    title: string;
    description: string;
    path?: string;
    ogImage?: string;
  },
): Metadata {
  const {
    title,
    description,
    path = "",
    ogImage = DEFAULT_OG_IMAGE,
    ...rest
  } = overrides;
  const canonical = siteUrl(path);
  const image = ogImage.startsWith("http") ? ogImage : siteUrl(ogImage);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url: canonical,
      siteName: SITE.name,
      title: `${title} | ${SITE.name}`,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      site: SITE.twitterHandle,
      title: `${title} | ${SITE.name}`,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    ...rest,
  };
}

/** JSON-LD: LocalBusiness schema */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "LaboratoryOrganization"],
    "@id": siteUrl("/#organization"),
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    logo: siteUrl("/calibration_logo.jpg"),
    image: siteUrl("/opengraph-image"),
    telephone: SITE.contact.phone,
    email: SITE.contact.email,
    priceRange: SITE.priceRange,
    openingHours: SITE.openingHours,
    hasMap: `https://maps.google.com/?q=${SITE.address.street},${SITE.address.city},${SITE.address.state}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Ahmedabad" },
      { "@type": "State", name: "Gujarat" },
      { "@type": "Country", name: "India" },
    ],
    sameAs: ["https://www.indiamart.com/mechatronics-calibration-services/"],
    knowsAbout: [
      "Calibration Services",
      "NABL Accreditation",
      "ISO/IEC 17025",
      "Electrical Calibration",
      "Mechanical Calibration",
      "Thermal Calibration",
      "Pressure Calibration",
      "Dimensional Metrology",
    ],
  };
}

/** JSON-LD: WebSite schema with SearchAction (Sitelinks Search Box) */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": siteUrl("/#website"),
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": siteUrl("/#organization") },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/services?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** JSON-LD: BreadcrumbList schema */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** JSON-LD: Service schema */
export function serviceSchema(service: {
  name: string;
  description: string;
  slug: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": siteUrl(`/services/${service.slug}#service`),
    name: service.name,
    description: service.description,
    url: siteUrl(`/services/${service.slug}`),
    serviceType: service.category || "Calibration Service",
    provider: { "@id": siteUrl("/#organization") },
    areaServed: { "@type": "Country", name: "India" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} Calibration`,
    },
  };
}

/** JSON-LD: FAQPage schema */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** JSON-LD: BlogPosting / Article schema */
export function articleSchema(post: {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": siteUrl(`/blog/${post.slug}#article`),
    headline: post.title,
    description: post.excerpt,
    url: siteUrl(`/blog/${post.slug}`),
    datePublished: post.date,
    dateModified: post.date,
    image: post.image ? siteUrl(post.image) : siteUrl("/opengraph-image"),
    author: { "@id": siteUrl("/#organization") },
    publisher: { "@id": siteUrl("/#organization") },
    inLanguage: "en-IN",
  };
}

/** JSON-LD: JobPosting schema */
export function jobPostingSchema(job: {
  title: string;
  department: string;
  location: string;
  type: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: `We are looking for a ${job.title} to join our ${job.department} team in ${job.location}.`,
    hiringOrganization: {
      "@type": "Organization",
      name: SITE.name,
      sameAs: SITE.url,
      logo: siteUrl("/calibration_logo.jpg"),
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location,
        addressRegion: SITE.address.region,
        addressCountry: SITE.address.country,
      },
    },
    employmentType: job.type.toUpperCase().replace("-", "_"),
    datePosted: "2024-10-01",
    validThrough: "2025-12-31",
    industry: "Calibration & Metrology",
    occupationalCategory: job.department,
  };
}
