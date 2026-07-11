"use client";

import { motion } from "framer-motion";
import { INDUSTRIES, ICON_MAP } from "@/lib/constants";
import SectionHeading from "./section-heading";
import Link from "next/link";
import { ArrowRight, ChevronRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <SectionHeading
            title="Industries We Serve"
            subtitle="Tailored calibration protocols for high-compliance sectors."
            className="mb-0 md:mb-0 lg:max-w-xl"
          />
          <Button size="lg" variant="ghost" className="hidden lg:flex items-center text-primary font-bold hover:bg-primary/5 rounded-2xl h-16 px-8 group text-lg" asChild>
            <Link href="/industries">
              All Industries <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {INDUSTRIES.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <Link href="/industries">
                <div className="h-full flex flex-col items-center p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-muted border border-transparent transition-all duration-500 group-hover:bg-card group-hover:border-primary group-hover:shadow-[0_30px_60px_-15px_rgba(0,87,217,0.1)]">
                  <div className="w-20 h-20 rounded-2xl md:rounded-[2rem] bg-background flex items-center justify-center mb-6 shadow-sm border border-border group-hover:bg-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {(() => {
                      const Icon = ICON_MAP[industry.iconId] || Activity;
                      return <Icon className="h-9 w-9 text-primary group-hover:text-white transition-colors" />;
                    })()}
                  </div>
                  <span className="font-bold text-foreground text-lg group-hover:text-primary transition-colors text-center leading-tight">
                    {industry.name}
                  </span>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 lg:hidden text-center">
          <Button size="lg" variant="ghost" className="items-center text-primary font-bold hover:bg-primary/5 rounded-2xl h-14 px-8 group" asChild>
            <Link href="/industries">
              Explore All Industries <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
