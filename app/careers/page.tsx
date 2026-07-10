import type { Metadata } from "next";
import CareersClient from "./careers-client";
import JsonLd from "@/components/seo/json-ld";
import { buildMetadata, jobPostingSchema, siteUrl } from "@/lib/seo";
import { JOBS } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Careers — Join Our Team",
  description:
    "Explore career opportunities at Mechatronics Calibration LLP in Ahmedabad. We're hiring calibration engineers, quality managers, and technical sales executives. Apply now.",
  path: "/careers",
  keywords: [
    "calibration engineer jobs Ahmedabad",
    "metrology jobs Gujarat",
    "NABL laboratory careers",
    "quality manager calibration lab",
    "technical sales instrumentation",
  ] as string[],
});

export default function CareersPage() {
  return (
    <>
      <JsonLd data={JOBS.map((job) => jobPostingSchema(job))} />
      <CareersClient />
    </>
  );
}
