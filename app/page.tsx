import type { Metadata } from "next";
import Hero from "@/components/home/hero";
import TrustSection from "@/components/home/trust-section";
import AboutSection from "@/components/home/about-section";
import ServicesSection from "@/components/home/services-section";
import WhyChooseUs from "@/components/home/why-choose-us";
import CalibrationProcess from "@/components/home/calibration-process";
import IndustriesSection from "@/components/home/industries-section";
import Statistics from "@/components/home/statistics";
import CertificatesSection from "@/components/home/certificates-section";
import ClientSlider from "@/components/home/client-slider";
import Testimonials from "@/components/home/testimonials";
import FAQSection from "@/components/home/faq-section";
import CTA from "@/components/home/cta";
import JsonLd from "@/components/seo/json-ld";
import { localBusinessSchema, websiteSchema, faqSchema } from "@/lib/seo";
import { FAQS } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    url: "https://mechatronics-calibration.com",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), websiteSchema(), faqSchema(FAQS)]} />
      <Hero />
      <TrustSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <CalibrationProcess />
      <IndustriesSection />
      <Statistics />
      <CertificatesSection />
      <ClientSlider />
      <Testimonials />
      <FAQSection />
      <CTA />
    </>
  );
}

