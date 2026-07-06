import { Metadata } from "next";
import ServicesClient from "./services-client";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive calibration services across electrical, mechanical, thermal, and fluid domains.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
