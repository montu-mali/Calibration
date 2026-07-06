import { Metadata } from "next";
import CertificatesClient from "./certificates-client";

export const metadata: Metadata = {
  title: "Certificates",
  description: "View our NABL accreditations, ISO certifications, and quality assurance approvals.",
};

export default function CertificatesPage() {
  return <CertificatesClient />;
}
