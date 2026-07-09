"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionHeading from "./section-heading";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ServicesSection() {
  // Show 6 representative services from different categories on the home page
  const featuredServices = [
    SERVICES.find(s => s.id === "dial-calibration-tester"),
    SERVICES.find(s => s.id === "mass-balance-calibration"),
    SERVICES.find(s => s.id === "pressure-calibrator"),
    SERVICES.find(s => s.id === "hot-wire-anemometer-calibration"),
    SERVICES.find(s => s.id === "iso-9001-service"),
    SERVICES.find(s => s.id === "pickup-delivery-service"),
  ].filter(Boolean) as typeof SERVICES;

  return (
    <section className="py-20 bg-muted dark:bg-muted/50">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Precision Capabilities"
          subtitle="Accredited calibration, ISO certification support, and specialized logistics for mission-critical industries."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-[0_40px_80px_-15px_rgba(0,87,217,0.15)] transition-all duration-500 border-none bg-background dark:bg-card rounded-[3rem] overflow-hidden flex flex-col shadow-sm">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-4 py-2 rounded-full bg-background/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-primary shadow-lg border border-primary/10">
                      {service.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors leading-tight min-h-[4rem] flex items-center">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pt-0 flex-grow">
                  <CardDescription className="text-base text-muted-foreground dark:text-muted-foreground leading-relaxed line-clamp-2 mb-6">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-8 pt-4">
                  <Button variant="outline" className="w-full h-14 rounded-2xl border-2 group/btn font-bold text-lg hover:bg-primary hover:border-primary hover:text-white transition-all" asChild>
                    <Link href={`/services/${service.slug}`}>
                      <span className="flex items-center justify-center">
                        Explore Capability
                        <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button size="lg" variant="ghost" className="rounded-full px-12 h-16 text-xl font-bold text-primary hover:bg-primary/5 transition-all group" asChild>
            <Link href="/services">
              View All 28+ Capabilities
              <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
