import type { Metadata } from "next";
import Link from "next/link";
import { Cookie, ChevronRight, CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description:
    "Cookie Policy for Mechatronics Calibration LLP — how we use cookies and how you can control them.",
  path: "/cookie-policy",
});

const cookieTypes = [
  {
    name: "Strictly Necessary Cookies",
    required: true,
    description:
      "These cookies are essential for the website to function and cannot be disabled. They enable core functionality such as form submissions, security features, and basic navigation. They do not store any personally identifiable information.",
    examples: ["Session management", "CSRF protection tokens", "Load balancer cookies"],
  },
  {
    name: "Analytics Cookies",
    required: false,
    description:
      "We use Google Analytics to understand how visitors interact with our website — which pages are most visited, how long visitors stay, and where they come from. This data is anonymised and used solely to improve our website.",
    examples: ["Google Analytics (_ga, _gid)", "Page view tracking", "Session duration"],
  },
  {
    name: "Preference Cookies",
    required: false,
    description:
      "These cookies remember your settings and preferences to improve your experience on return visits, such as your preferred language or display settings.",
    examples: ["Theme/display preferences", "Language settings"],
  },
  {
    name: "Marketing Cookies",
    required: false,
    description:
      "We do not currently use marketing or advertising cookies on this website. If this changes, this policy will be updated accordingly.",
    examples: ["Not currently in use"],
  },
];

const sections = [
  {
    title: "What Are Cookies?",
    content:
      "Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently, to remember your preferences, and to provide information to website operators about how their site is being used.",
  },
  {
    title: "How We Use Cookies",
    content:
      "Mechatronics Calibration LLP uses cookies to ensure our website functions correctly, to analyse site traffic, and to improve user experience. We do not use cookies to track you across other websites or serve targeted advertisements.",
  },
  {
    title: "Third-Party Cookies",
    content:
      "Some cookies on our site are set by third-party services that appear on our pages. These include Google Analytics. These third parties have their own privacy and cookie policies over which we have no control. We recommend reviewing Google's Privacy Policy for details on how they process data.",
  },
  {
    title: "How to Control Cookies",
    content:
      "You can control and manage cookies in several ways. Most browsers allow you to view, delete, and block cookies. Please note that disabling certain cookies may impact your experience on our website. To manage cookies, visit your browser's settings:\n\n• Chrome: Settings → Privacy and Security → Cookies\n• Firefox: Settings → Privacy & Security → Cookies and Site Data\n• Safari: Preferences → Privacy → Manage Website Data\n• Edge: Settings → Cookies and site permissions",
  },
  {
    title: "Cookie Retention",
    content:
      "Session cookies are deleted when you close your browser. Persistent cookies remain on your device for a set period, or until you delete them. Our analytics cookies (Google Analytics) are retained for up to 26 months.",
  },
  {
    title: "Updates to This Policy",
    content:
      "We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. Any changes will be posted on this page with an updated date.",
  },
];

export default function CookiePolicyPage() {
  return (
    <div className="pt-20">
      <section className="py-8 md:py-12 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#0057D9_0%,transparent_50%)] opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/40">Cookie Policy</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter leading-[1]">
            Cookie Policy
          </h1>
          <p className="text-base md:text-lg text-white/60 max-w-2xl">
            Last updated: July 2025 · Mechatronics Calibration LLP
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">

            {/* Intro */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 pb-12 border-b border-border">
              This Cookie Policy explains what cookies are, how Mechatronics Calibration LLP uses them on{" "}
              <a href="https://mechatronics-calibration.com" className="text-primary hover:underline">
                mechatronics-calibration.com
              </a>
              , and what options you have to control them.
            </p>

            {/* General sections */}
            <div className="space-y-10 mb-16">
              {sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed pl-10 whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Cookie types table */}
            <h2 className="text-2xl font-bold text-foreground mb-6">Cookies We Use</h2>
            <div className="space-y-4 mb-16">
              {cookieTypes.map((type) => (
                <div
                  key={type.name}
                  className="rounded-3xl border border-border bg-muted p-6"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-bold text-foreground">{type.name}</h3>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-lg shrink-0 ${
                        type.required
                          ? "bg-primary/10 text-primary"
                          : "bg-muted-foreground/10 text-muted-foreground"
                      }`}
                    >
                      {type.required ? "Required" : "Optional"}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {type.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((ex) => (
                      <div key={ex} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        {ex}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border flex flex-wrap gap-6 text-sm text-muted-foreground">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors font-medium">
                Privacy Policy →
              </Link>
              <Link href="/terms-of-service" className="hover:text-primary transition-colors font-medium">
                Terms of Service →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
