import { Metadata } from "next";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Mechatronics Calibration's dedication to precision and engineering excellence.",
};

export default function AboutPage() {
  return <AboutClient />;
}
