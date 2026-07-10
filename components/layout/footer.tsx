import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { CONTACT_INFO, NAV_LINKS, SERVICES, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-12 overflow-hidden relative">
      {/* Decorative gradient background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Company Info */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-3 bg-white p-3 rounded-2xl w-fit mb-4">
              <img
                src="/calibration_logo.jpg"
                alt="Mechatronics Calibration LLP Logo"
                className="h-12 md:h-14 w-auto object-contain shrink-0"
              />
            </Link>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xs">
              Precision Beyond Measurement. India's leading ISO Certified Calibration Laboratory.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.name === "Facebook" ? Facebook : link.name === "Twitter" ? Twitter : Linkedin;
                return (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary transition-all duration-300 hover:-translate-y-1 border border-white/10"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center text-white">
              Quick Links
              <span className="ml-3 h-1 w-8 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-4">
              {NAV_LINKS.filter(l => !l.dropdown).map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-white transition-all hover:translate-x-2 flex items-center group">
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-white transition-all hover:translate-x-2 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center text-white">
              Core Services
              <span className="ml-3 h-1 w-8 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-4">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.slug}`} className="text-muted-foreground hover:text-white transition-all hover:translate-x-2 flex items-center group">
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold mb-8 flex items-center text-white">
              Newsletter
              <span className="ml-3 h-1 w-8 bg-primary rounded-full" />
            </h4>
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm">Stay updated with latest calibration standards.</p>
              <div className="flex flex-col space-y-3">
                <Input
                  placeholder="Email address"
                  className="h-12 bg-white/5 border-white/10 text-white focus-visible:ring-primary rounded-xl"
                />
                <Button className="w-full h-12 rounded-xl font-bold">Subscribe</Button>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-4">
              <div className="flex items-center space-x-4 text-muted-foreground group">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="font-medium hover:text-primary transition-colors">{CONTACT_INFO.phone}</a>
              </div>
              <div className="flex items-center space-x-4 text-muted-foreground group">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <a href={`mailto:${CONTACT_INFO.email}`} className="font-medium hover:text-primary transition-colors break-all">{CONTACT_INFO.email}</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. Designed for the future of precision.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
