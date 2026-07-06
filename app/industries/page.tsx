import { Metadata } from "next";
import IndustriesClient from "./industries-client";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Explore how we provide critical calibration services across diverse industrial sectors.",
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
