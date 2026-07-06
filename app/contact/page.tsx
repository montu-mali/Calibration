import { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our calibration specialists for technical consultation and service inquiries.",
};

export default function ContactPage() {
  return <ContactClient />;
}
