"use client";

import { motion } from "framer-motion";
import { INDUSTRIES, ICON_MAP } from "@/lib/constants";
import CTA from "@/components/home/cta";
import { Factory, CheckCircle2, ShieldCheck, Globe, Zap, Activity } from "lucide-react";
import Image from "next/image";

export default function IndustriesPage() {
  return (
    <div className="pt-20">
      <section className="py-16 md:py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-3 px-4 py-2 rounded-2xl bg-primary/5 text-primary text-sm font-bold uppercase tracking-[0.3em] mb-8"
            >
              <Factory className="h-4 w-4" />
              <span>Cross-Industry Expertise</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-bold text-foreground mb-8 leading-[1] tracking-tighter"
            >
              Sectors We <br />
              <span className="text-primary italic">Empower.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground  leading-relaxed"
            >
              Providing high-compliance calibration solutions for the world's most demanding engineering environments.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-32">
            {INDUSTRIES.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="h-full flex flex-col p-10 rounded-[3rem] bg-muted border border-border group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_40px_80px_-15px_rgba(0,87,217,0.2)] transition-all duration-500">
                  <div className="w-20 h-20 rounded-[2rem] bg-background flex items-center justify-center mb-10 shadow-sm border border-border group-hover:bg-primary-foreground/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {(() => {
                      const Icon = ICON_MAP[industry.iconId] || Activity;
                      return <Icon className="h-10 w-10 text-primary group-hover:text-white transition-colors" />;
                    })()}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-white transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-muted-foreground  text-base group-hover:text-white/80 transition-colors leading-relaxed mb-6 flex-grow">
                    Specialized metrology services designed for the unique regulatory landscape of {industry.name.toLowerCase()} engineering.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-white/60">Compliance</div>
                    <div className="text-sm font-bold text-foreground group-hover:text-white">{industry.compliance}</div>
                    <div className="flex flex-wrap gap-2">
                      {industry.keyServices.map(s => (
                        <span key={s} className="px-2 py-1 bg-primary/5 group-hover:bg-white/10 rounded-md text-[10px] font-bold text-primary group-hover:text-white border border-primary/10 group-hover:border-white/20">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center text-primary group-hover:text-white font-bold text-sm uppercase tracking-widest transition-colors">
                    <span>View Protocol</span>
                    <CheckCircle2 className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-12">
            <div className="relative group">
              <div className="relative aspect-[4/3] rounded-[4rem] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800"
                  alt="Industrial Sector Excellence"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-background  p-10 rounded-[3rem] shadow-2xl border border-border z-20 hidden md:block">
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Industry Compliance</div>
              </div>
            </div>

            <div className="space-y-12">
              <h2 className="text-5xl font-bold text-foreground tracking-tight leading-[1.1]">Sector-Specific <br />Technical <span className="text-primary italic">Competence.</span></h2>
              <div className="space-y-10">
                {[
                  { title: "Regulatory Compliance", desc: "Our lab operates under strict adherence to sector-specific mandates including FDA, DGCA, and Automotive standards.", icon: ShieldCheck },
                  { icon: Globe, title: "Traceable Metrology", desc: "Unbroken chains of traceability back to National (NPL) and International (NIST) primary standards." },
                  { icon: Zap, title: "Operational Velocity", desc: "Process-driven calibration designed to sync with your high-volume manufacturing cycles." },
                ].map((item) => (
                  <div key={item.title} className="flex space-x-8 group">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-muted border border-border flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-sm">
                      <item.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-foreground mb-3">{item.title}</h4>
                      <p className="text-lg text-muted-foreground  leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
}
