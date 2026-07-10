import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ChevronRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Terms of Service for Mechatronics Calibration LLP — the terms and conditions governing use of our website and calibration services.",
  path: "/terms-of-service",
});

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing or using the website at mechatronics-calibration.com (the \"Site\") or engaging any services provided by Mechatronics Calibration LLP (\"Company\", \"we\", \"us\"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Site or services.",
      "These Terms of Service are governed by the laws of India, including the Information Technology Act, 2000 and applicable rules thereunder.",
    ],
  },
  {
    title: "Services Provided",
    content: [
      "Mechatronics Calibration LLP provides NABL-accredited calibration, testing, and related metrology services for industrial instruments and equipment. Our services include, but are not limited to, electrical calibration, mechanical calibration, thermal calibration, pressure calibration, and ISO compliance consulting.",
      "Service details, scope, and pricing are communicated via formal quotations and are subject to the specific terms of each engagement.",
    ],
  },
  {
    title: "Use of the Website",
    content: [
      "You agree to use this Site only for lawful purposes and in a manner that does not infringe the rights of others. You must not:",
      "• Use the Site to transmit any unlawful, harmful, or fraudulent material.",
      "• Attempt to gain unauthorised access to any part of the Site or its servers.",
      "• Use automated tools to scrape or harvest data from the Site without our express written consent.",
      "• Represent yourself as affiliated with Mechatronics Calibration LLP without authorisation.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "All content on this Site — including text, images, logos, graphics, and technical documents — is the intellectual property of Mechatronics Calibration LLP or its licensors and is protected under applicable Indian and international copyright laws.",
      "You may not reproduce, distribute, modify, or create derivative works from any content on this Site without our prior written permission.",
    ],
  },
  {
    title: "Calibration Certificates and Reports",
    content: [
      "Calibration certificates and test reports issued by Mechatronics Calibration LLP are valid only for the specific instrument, serial number, and conditions stated therein. They must not be altered, reproduced in part, or used out of context.",
      "The Company bears no liability for decisions made based on calibration reports that have been altered or applied outside their stated scope.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "To the maximum extent permitted by applicable law, Mechatronics Calibration LLP shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of this Site or our services.",
      "Our total liability to you for any claim arising under these Terms shall not exceed the amount paid by you for the specific service giving rise to the claim.",
    ],
  },
  {
    title: "Disclaimer of Warranties",
    content: [
      "The Site and its content are provided on an \"as is\" and \"as available\" basis without any warranties of any kind, express or implied, including but not limited to warranties of merchantability or fitness for a particular purpose.",
      "We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.",
    ],
  },
  {
    title: "Payment and Cancellation",
    content: [
      "Payment terms for calibration services are specified in individual quotations. Unless otherwise agreed, payment is due within 30 days of invoice date.",
      "Cancellations of confirmed service bookings must be communicated in writing at least 48 hours in advance. Late cancellations may attract a cancellation fee as stated in the service agreement.",
    ],
  },
  {
    title: "Governing Law and Jurisdiction",
    content: [
      "These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Ahmedabad, Gujarat, India.",
    ],
  },
  {
    title: "Changes to These Terms",
    content: [
      "We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to the Site. Your continued use of the Site after any changes constitutes acceptance of the revised terms.",
    ],
  },
  {
    title: "Contact",
    content: [
      "For any questions regarding these Terms of Service, contact us at:",
      "Mechatronics Calibration LLP",
      "Plot No. 45, GIDC Estate, Vatva, Ahmedabad, Gujarat 382445, India",
      "Email: mechatronics018@gmail.com · Phone: +91 7984193798",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="pt-20">
      <section className="py-8 md:py-12 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#0057D9_0%,transparent_50%)] opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/40">Terms of Service</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter leading-[1]">
            Terms of Service
          </h1>
          <p className="text-base md:text-lg text-white/60 max-w-2xl">
            Last updated: July 2025 · Mechatronics Calibration LLP
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 pb-12 border-b border-border">
              Please read these Terms of Service carefully before using our website or engaging our calibration services. These terms constitute a legally binding agreement between you and Mechatronics Calibration LLP.
            </p>

            <div className="space-y-12">
              {sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    {section.title}
                  </h2>
                  <div className="space-y-3 pl-10">
                    {section.content.map((para, j) => (
                      <p key={j} className="text-muted-foreground leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-border flex flex-wrap gap-6 text-sm text-muted-foreground">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors font-medium">
                Privacy Policy →
              </Link>
              <Link href="/cookie-policy" className="hover:text-primary transition-colors font-medium">
                Cookie Policy →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
