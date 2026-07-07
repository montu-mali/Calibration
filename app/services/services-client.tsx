"use client";

import { motion } from "framer-motion";
import { SERVICES, ICON_MAP } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Activity } from "lucide-react";
import CTA from "@/components/home/cta";

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-3 px-4 py-2 rounded-2xl bg-primary/5 text-primary text-sm font-bold uppercase tracking-[0.3em] mb-8"
            >
              <Zap className="h-4 w-4" />
              <span>Full Spectrum Solutions</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-bold text-secondary dark:text-white mb-8 leading-[1] tracking-tighter"
            >
              Technical <br />
              <span className="text-primary italic">Capabilities.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed"
            >
              NABL accredited calibration services across 10+ domains, delivering traceable results that define industry benchmarks.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-[0_40px_80px_-15px_rgba(0,87,217,0.15)] transition-all duration-500 border-none bg-white dark:bg-slate-950 rounded-[3rem] overflow-hidden flex flex-col p-6">
                  <CardHeader className="p-8 pb-4">
                    <div className="w-20 h-20 rounded-[2rem] bg-gray-50 dark:bg-slate-900/50 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                      {(() => {
                        const Icon = ICON_MAP[service.iconId] || Activity;
                        return <Icon className="h-10 w-10 text-primary group-hover:text-white transition-colors" />;
                      })()}
                    </div>
                    <CardTitle className="text-3xl font-bold group-hover:text-primary transition-colors leading-tight">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pt-0 flex-grow">
                    <CardDescription className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="p-8 pt-4">
                    <Button className="w-full h-16 rounded-2xl group/btn font-bold text-xl relative overflow-hidden" asChild>
                      <Link href={`/services/${service.slug}`}>
                        <span className="relative z-10 flex items-center justify-center">
                          Explore Capability
                          <ArrowUpRight className="ml-2 h-6 w-6 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
}
