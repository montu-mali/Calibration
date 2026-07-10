import type { Metadata } from "next";
import ServiceDetailClient from "./service-detail-client";
import JsonLd from "@/components/seo/json-ld";
import { buildMetadata, serviceSchema, breadcrumbSchema, siteUrl } from "@/lib/seo";
import { SERVICES } from "@/lib/constants";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested calibration service page could not be found.",
    };
  }

  return buildMetadata({
    title: `${service.title} Calibration Service`,
    description: `${service.description} NABL-accredited calibration with traceable certificates. Serving Ahmedabad, Gujarat, and all of India.`,
    path: `/services/${service.slug}`,
    keywords: [
      `${service.title} calibration`,
      `${service.title} NABL calibration`,
      `${service.title} calibration service India`,
      "NABL accredited laboratory",
      "ISO 17025 calibration certificate",
      "Mechatronics Calibration LLP",
    ] as string[],
    openGraph: {
      type: "website",
    },
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  const schemas = service
    ? [
        serviceSchema({
          name: service.title,
          description: service.description,
          slug: service.slug,
          category: service.category ?? "Calibration Service",
        }),
        breadcrumbSchema([
          { name: "Home", url: siteUrl("/") },
          { name: "Services", url: siteUrl("/services") },
          { name: service.title, url: siteUrl(`/services/${service.slug}`) },
        ]),
      ]
    : [];

  return (
    <>
      {schemas.length > 0 && <JsonLd data={schemas} />}
      <ServiceDetailClient params={params} />
    </>
  );
}
