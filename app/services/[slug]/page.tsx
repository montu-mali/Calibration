import { Metadata } from "next";
import ServiceDetailClient from "./service-detail-client";
import { SERVICES } from "@/lib/constants";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  return {
    title: service ? service.title : "Service Detail",
    description: service ? service.description : "Professional calibration services.",
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  return <ServiceDetailClient params={params} />;
}
