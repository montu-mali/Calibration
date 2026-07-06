import { Metadata } from "next";
import CareersClient from "./careers-client";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join our team of experts and build your career in the high-growth field of technical metrology.",
};

export default function CareersPage() {
  return <CareersClient />;
}
