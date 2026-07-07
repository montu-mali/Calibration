"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/home/section-heading";
import CTA from "@/components/home/cta";
import { Award, Target, Eye, Heart, ShieldCheck, Users } from "lucide-react";

export default function AboutPage() {
  const values = [
    { icon: Target, title: "Mission", text: "To provide world-class calibration services that ensure measurement accuracy and reliability for our clients." },
    { icon: Eye, title: "Vision", text: "To be the most trusted and innovative calibration partner globally, driving excellence in every measurement." },
    { icon: Heart, title: "Values", text: "Integrity, Precision, Customer-Centricity, and Continuous Improvement are at our core." },
  ];

  const timeline = [
    { year: "2004", event: "Calibration Lab Founded", desc: "Started as a specialized electrical calibration facility." },
    { year: "2008", event: "Achieved NABL Accreditation", desc: "First major milestone towards global technical competence." },
    { year: "2015", event: "Multi-Domain Expansion", desc: "Added Mechanical, Pressure, and Temperature capabilities." },
    { year: "2020", event: "Digital Transformation", desc: "Implemented cloud-based traceable reporting systems." },
    { year: "2024", event: "Innovation Center", desc: "Opened state-of-the-art R&D center for metrology." },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,#0057D9_0%,transparent_50%)] opacity-30" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-3 px-4 py-2 rounded-2xl bg-white dark:bg-slate-950/5 border border-white/10 text-primary text-sm font-bold uppercase tracking-[0.3em] mb-8"
          >
            <span>Since 2004</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-bold text-white mb-8 tracking-tighter leading-[1]"
          >
            Our <span className="text-primary italic">Story</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-3xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Two decades of relentless dedication to the science of precision and engineering excellence.
          </motion.p>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 bg-white dark:bg-slate-950 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square rounded-[3.5rem] overflow-hidden shadow-2xl z-10">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                  alt="Engineering Excellence"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -right-10 bg-primary p-12 rounded-[3rem] text-white hidden md:block shadow-2xl z-20">
                <div className="text-6xl font-bold mb-2 tracking-tighter">20+</div>
                <div className="text-sm font-bold uppercase tracking-widest opacity-80">Years of Precision</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-secondary dark:text-white mb-10 tracking-tight leading-[1.1]">
                Built on Integrity and <span className="text-primary">Absolute Accuracy</span>
              </h2>
              <div className="space-y-8 text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
                <p>
                  Calibration began with a singular focus: to redefine the standards of measurement in the industrial world. What started as a specialized lab in 2004 has evolved into a national leader in metrology.
                </p>
                <p>
                  Today, we serve the most critical sectors—from Aerospace to Pharmaceuticals—ensuring that every measurement is traceable, every tool is accurate, and every client is compliant.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-12">
                {[
                  { icon: ShieldCheck, label: "NABL Accredited", value: "ISO 17025" },
                  { icon: Users, label: "Expert Staff", value: "50+ Engineers" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-50 dark:bg-slate-900/50 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
                      <div className="text-2xl font-bold text-secondary dark:text-white">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-12 rounded-[3.5rem] bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-[2rem] bg-primary/5 flex items-center justify-center mb-10 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <val.icon className="h-10 w-10 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-3xl font-bold text-secondary dark:text-white mb-6">{val.title}</h3>
                <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">{val.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Timeline */}
      <section className="py-20 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeading title="Our Evolution" centered subtitle="A journey of technical milestones and continuous innovation." />

          <div className="relative max-w-5xl mx-auto pt-20">
            {/* Horizontal line for desktop */}
            <div className="absolute top-[20%] left-0 w-full h-[2px] bg-slate-100 hidden lg:block" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                  <div className="hidden lg:block absolute top-[-5px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-primary group-hover:bg-primary group-hover:scale-150 transition-all z-10" />
                  <div className="text-center lg:pt-12">
                    <div className="text-4xl font-bold text-primary mb-2">{item.year}</div>
                    <h4 className="text-xl font-bold text-secondary dark:text-white mb-4 group-hover:text-primary transition-colors">{item.event}</h4>
                    <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
