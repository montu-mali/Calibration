"use client";

import { motion } from "framer-motion";
import { SERVICES, ICON_MAP } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionHeading from "./section-heading";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Activity } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Industry-Leading Services"
          subtitle="Precision calibration solutions across 10+ domains, ensuring your equipment meets world-class standards."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-[0_40px_80px_-15px_rgba(0,87,217,0.15)] transition-all duration-500 border-none bg-white dark:bg-slate-950 rounded-[2.5rem] overflow-hidden flex flex-col p-4">
                <CardHeader className="relative p-8 pb-4">
                  <div className="w-20 h-20 rounded-2xl bg-gray-50 dark:bg-slate-900/50 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                    {(() => {
                      const Icon = ICON_MAP[service.iconId] || Activity;
                      return <Icon className="h-10 w-10 text-primary group-hover:text-white transition-colors" />;
                    })()}
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pt-0 flex-grow">
                  <CardDescription className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {service.description}
                  </CardDescription>
                  <div className="mt-8 pt-8 border-t border-slate-50 grid grid-cols-2 gap-4">
                    {service.equipment?.slice(0, 2).map((eq) => (
                      <div key={eq} className="text-[11px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 p-2 rounded-lg text-center truncate">
                        {eq}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-8 pt-4">
                  <Button variant="outline" className="w-full h-14 rounded-2xl border-2 group/btn font-bold text-lg hover:bg-primary hover:border-primary hover:text-white transition-all" asChild>
                    <Link href={`/services/${service.slug}`}>
                      Service Details
                      <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
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
              View All 10+ Services
              <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
