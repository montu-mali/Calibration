import type { Metadata } from "next";
import Link from "next/link";
import { Shield, ChevronRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for Mechatronics Calibration LLP — how we collect, use, and protect your personal information.",
  path: "/privacy-policy",
});

const sections = [
  {
    title: "Information We Collect",
    content: [
      "When you use our website or contact us, we may collect the following types of personal information:",
      "• Contact details — name, email address, phone number, and company name submitted via our contact or quote request form.",
      "• Technical data — IP address, browser type, operating system, referring URLs, and pages visited, collected automatically via server logs and analytics tools.",
      "• Communication records — emails, messages, or any correspondence you send us.",
      "We do not collect sensitive personal information such as financial data, government IDs, or health information.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "We use the information we collect for the following purposes:",
      "• To respond to your enquiries, quote requests, and service bookings.",
      "• To send calibration reminders, service updates, or newsletters if you have opted in.",
      "• To improve our website performance, user experience, and content.",
      "• To comply with legal obligations under Indian law, including the Information Technology Act, 2000.",
      "We do not sell, rent, or trade your personal information to third parties for marketing purposes.",
    ],
  },
  {
    title: "Cookies and Tracking",
    content: [
      "Our website uses cookies — small text files stored on your device — to enhance your browsing experience. We use:",
      "• Essential cookies — required for core website functionality (e.g., form submissions).",
      "• Analytics cookies — to understand how visitors interact with our website (e.g., Google Analytics).",
      "You can control cookie settings through your browser. Disabling certain cookies may affect website functionality. Please see our Cookie Policy for full details.",
    ],
  },
  {
    title: "Data Storage and Security",
    content: [
      "Your data is stored on secure servers and is protected by industry-standard encryption and access controls. We retain personal data only as long as necessary to fulfil the purposes described in this policy or as required by applicable law.",
      "While we take reasonable steps to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.",
    ],
  },
  {
    title: "Third-Party Services",
    content: [
      "We may use third-party services including Google Analytics, email service providers, and cloud hosting. These providers operate under their own privacy policies. We ensure that any data shared with them is limited to what is strictly necessary for service delivery.",
      "Our website may contain links to external websites. We are not responsible for the privacy practices of those sites.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "Under applicable Indian data protection laws, you have the right to:",
      "• Access the personal data we hold about you.",
      "• Request correction of inaccurate or incomplete data.",
      "• Request deletion of your personal data (subject to legal obligations).",
      "• Withdraw consent for marketing communications at any time.",
      "To exercise these rights, contact us at mechatronics018@gmail.com.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have questions or concerns about this Privacy Policy, please contact:",
      "Mechatronics Calibration LLP",
      "Plot No. 45, GIDC Estate, Vatva, Ahmedabad, Gujarat 382445, India",
      "Email: mechatronics018@gmail.com",
      "Phone: +91 7984193798",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      <section className="py-8 md:py-12 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#0057D9_0%,transparent_50%)] opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/40">Privacy Policy</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter leading-[1]">
            Privacy Policy
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
              Mechatronics Calibration LLP ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at{" "}
              <a href="https://mechatronics-calibration.com" className="text-primary hover:underline">
                mechatronics-calibration.com
              </a>{" "}
              or use our services.
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
              <Link href="/terms-of-service" className="hover:text-primary transition-colors font-medium">
                Terms of Service →
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
