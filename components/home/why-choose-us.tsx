"use client";

import { motion } from "framer-motion";
import { Microscope, Award, Zap, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import SectionHeading from "./section-heading";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Global Accreditation",
    description: "Fully accredited by NABL and operating under stringent ISO/IEC 17025:2017 international standards.",
    color: "bg-blue-600",
  },
  {
    icon: Microscope,
    title: "Domain Experts",
    description: "Our technical team consists of senior metrologists and engineers with deep industrial experience.",
    color: "bg-indigo-600",
  },
  {
    icon: Zap,
    title: "Ultra-Low Uncertainty",
    description: "State-of-the-art reference standards ensuring the highest accuracy and lowest possible uncertainty.",
    color: "bg-sky-600",
  },
  {
    icon: Clock,
    title: "Enterprise Velocity",
    description: "Streamlined logistics and high-capacity labs designed to minimize your operational downtime.",
    color: "bg-emerald-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="The Calibration Advantage"
          subtitle="Why world-leading engineering companies trust us with their most critical measurements."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-10 rounded-[3rem] bg-gray-50 dark:bg-slate-900/50 border border-transparent hover:bg-white dark:bg-slate-950 hover:border-primary/20 hover:shadow-[0_40px_80px_-15px_rgba(0,87,217,0.1)] transition-all duration-500 group"
            >
              <div className={`w-20 h-20 rounded-[2rem] ${feature.color} text-white flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 shadow-xl transition-all duration-500`}>
                <feature.icon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-6 leading-tight">{feature.title}</h3>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                {feature.description}
              </p>
              <div className="flex items-center text-primary font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Verified Excellence
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
