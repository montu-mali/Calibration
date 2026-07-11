"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight, Zap, ChevronDown } from "lucide-react";
import CTA from "@/components/home/cta";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function ServicesContent() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    if (categoryFilter === "instruments") setActiveCategory("Calibration Instruments");
    else if (categoryFilter === "services") setActiveCategory("Calibration Services");
    else if (categoryFilter === "iso") setActiveCategory("ISO Services");
    else if (categoryFilter === "support") setActiveCategory("Support Service");
    else setActiveCategory(null);
  }, [categoryFilter]);

  const categories = ["Calibration Instruments", "Calibration Services", "ISO Services", "Support Service"];

  const filteredServices = activeCategory
    ? SERVICES.filter(s => s.category === activeCategory)
    : SERVICES;

  const groupedServices = categories.reduce((acc, cat) => {
    const services = SERVICES.filter(s => s.category === cat);
    if (services.length > 0) acc[cat] = services;
    return acc;
  }, {} as Record<string, typeof SERVICES>);

  return (
    <div className="pt-20">
      <section className="py-8 md:py-12 bg-muted ">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-3 px-4 py-2 rounded-2xl bg-primary/5 text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4"
            >
              <Zap className="h-4 w-4" />
              <span>Full Spectrum Solutions</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-4 leading-[1] tracking-tighter"
            >
              Technical <br />
              <span className="text-primary italic">Capabilities.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-muted-foreground  leading-relaxed"
            >
              Industry-leading calibration for precision instruments, ISO compliance, and specialized laboratory services.
            </motion.p>
          </div>

          {/* Mobile Category Filter (Dropdown) */}
          <div className="md:hidden mb-12 max-w-sm mx-auto">
            <div className="relative">
              <select
                className="w-full h-14 appearance-none bg-background border border-border rounded-2xl px-6 text-lg font-bold text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
                value={activeCategory || ""}
                onChange={(e) => setActiveCategory(e.target.value || null)}
              >
                <option value="">All Services</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                <ChevronDown className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Desktop Category Filter (Pills) */}
          <div className="hidden md:flex flex-wrap justify-center gap-4 mb-20">
            <Button
              variant={activeCategory === null ? "default" : "outline"}
              onClick={() => setActiveCategory(null)}
              className="rounded-full px-8 h-12 font-bold"
            >
              All Services
            </Button>
            {categories.map(cat => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                onClick={() => setActiveCategory(cat)}
                className="rounded-full px-8 h-12 font-bold"
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="space-y-32 mb-32">
            {(activeCategory ? [activeCategory] : categories).map((cat) => {
              const categoryServices = SERVICES.filter(s => s.category === cat);
              if (categoryServices.length === 0) return null;

              return (
                <div key={cat} className="space-y-12">
                  <div className="flex items-center space-x-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{cat}</h2>
                    <div className="h-px bg-border flex-grow" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {categoryServices.map((service, index) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                      >
                        <Card className="h-full group hover:shadow-[0_40px_80px_-15px_rgba(0,87,217,0.15)] transition-all duration-500 border-none bg-background  rounded-3xl md:rounded-[3rem] overflow-hidden flex flex-col shadow-sm">
                          <div className="relative h-64 w-full overflow-hidden">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </div>
                          <CardHeader className="p-6 md:p-10 pb-2 md:pb-4">
                            <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors leading-tight min-h-[4rem] flex items-center">
                              {service.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="px-6 md:px-10 pt-0 flex-grow">
                            <CardDescription className="text-base text-muted-foreground  leading-relaxed mb-6">
                              {service.description}
                            </CardDescription>
                          </CardContent>
                          <CardFooter className="p-6 md:p-10 pt-4 md:pt-4">
                            <Button className="w-full h-14 rounded-2xl group/btn font-bold text-lg relative overflow-hidden" asChild>
                              <Link href={`/services/${service.slug}`}>
                                <span className="relative z-10 flex items-center justify-center">
                                  View Details
                                  <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary to-success opacity-0 group-hover:opacity-100 transition-opacity" />
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="pt-40 text-center">Loading capabilities...</div>}>
      <ServicesContent />
    </Suspense>
  );
}
