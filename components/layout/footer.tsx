import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { CONTACT_INFO, NAV_LINKS, SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative gradient background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Company Info */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-white font-bold text-2xl">C</span>
              </div>
              <span className="text-3xl font-bold tracking-tight">Calibration</span>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xs">
              Precision Beyond Measurement. India's leading ISO Certified Calibration Laboratory.
            </p>
            <div className="flex space-x-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary transition-all duration-300 hover:-translate-y-1 border border-white/10"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center">
              Quick Links
              <span className="ml-3 h-1 w-8 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-4">
              {NAV_LINKS.filter(l => !l.dropdown).map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-all hover:translate-x-2 flex items-center group">
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white transition-all hover:translate-x-2 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center">
              Core Services
              <span className="ml-3 h-1 w-8 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-4">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.slug}`} className="text-slate-400 hover:text-white transition-all hover:translate-x-2 flex items-center group">
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold mb-8 flex items-center">
              Newsletter
              <span className="ml-3 h-1 w-8 bg-primary rounded-full" />
            </h4>
            <div className="space-y-4">
              <p className="text-slate-400 text-sm">Stay updated with latest calibration standards.</p>
              <div className="flex flex-col space-y-3">
                <Input
                  placeholder="Email address"
                  className="h-12 bg-white/5 border-white/10 text-white focus-visible:ring-primary rounded-xl"
                />
                <Button className="w-full h-12 rounded-xl font-bold">Subscribe</Button>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-4">
              <div className="flex items-center space-x-4 text-slate-400 group">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-4 text-slate-400 group">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">{CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Calibration. Designed for the future of precision.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link key={item} href="#" className="hover:text-white transition-colors">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
