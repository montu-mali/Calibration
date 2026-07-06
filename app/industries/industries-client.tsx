"use client";

import { motion } from "framer-motion";
import { INDUSTRIES } from "@/lib/constants";
import CTA from "@/components/home/cta";
import { Factory, CheckCircle2, ShieldCheck, Globe, Zap } from "lucide-react";
import Image from "next/image";

export default function IndustriesPage() {
  return (
    <div className="pt-20">
      <section className="py-24 md:py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
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
              className="text-6xl md:text-8xl font-bold text-secondary dark:text-white mb-8 leading-[1] tracking-tighter"
            >
              Sectors We <br />
              <span className="text-primary italic">Empower.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed"
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
                <div className="h-full flex flex-col p-10 rounded-[3rem] bg-gray-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_40px_80px_-15px_rgba(0,87,217,0.2)] transition-all duration-500">
                  <div className="w-20 h-20 rounded-[2rem] bg-white dark:bg-slate-950 flex items-center justify-center mb-10 shadow-sm border border-slate-100 dark:border-slate-800 group-hover:bg-white dark:bg-slate-950/20 group-hover:border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <industry.icon className="h-10 w-10 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary dark:text-white mb-6 group-hover:text-white transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-lg group-hover:text-white/80 transition-colors leading-relaxed mb-8 flex-grow">
                    Specialized metrology services designed for the unique regulatory landscape of {industry.name.toLowerCase()} engineering.
                  </p>
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
              <div className="absolute -bottom-10 -right-10 bg-white dark:bg-slate-950 p-10 rounded-[3rem] shadow-2xl border border-slate-50 z-20 hidden md:block">
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Industry Compliance</div>
              </div>
            </div>

            <div className="space-y-12">
              <h2 className="text-5xl font-bold text-secondary dark:text-white tracking-tight leading-[1.1]">Sector-Specific <br />Technical <span className="text-primary italic">Competence.</span></h2>
              <div className="space-y-10">
                {[
                  { title: "Regulatory Compliance", desc: "Our lab operates under strict adherence to sector-specific mandates including FDA, DGCA, and Automotive standards.", icon: ShieldCheck },
                  { icon: Globe, title: "Traceable Metrology", desc: "Unbroken chains of traceability back to National (NPL) and International (NIST) primary standards." },
                  { icon: Zap, title: "Operational Velocity", desc: "Process-driven calibration designed to sync with your high-volume manufacturing cycles." },
                ].map((item) => (
                  <div key={item.title} className="flex space-x-8 group">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-gray-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                      <item.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-secondary dark:text-white mb-3">{item.title}</h4>
                      <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
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
