"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Clock, Users, Calendar, Trophy } from "lucide-react";

const BADGES = [
  { icon: ShieldCheck, label: "ISO Certified" },
  { icon: Award, label: "NABL Standard" },
  { icon: Clock, label: "Fast Turnaround" },
  { icon: Users, label: "Expert Engineers" },
  { icon: Calendar, label: "20+ Years Exp." },
  { icon: Trophy, label: "1000+ Clients" },
];

export default function TrustSection() {
  return (
    <section className="py-12 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-gray-50 dark:bg-slate-900/50 rounded-[2.5rem] p-10 md:p-12 border border-slate-100 dark:border-slate-800 shadow-sm dark:shadow-none relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-12 relative z-10">
            {BADGES.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4 group cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-950 shadow-sm dark:shadow-none border border-slate-100 dark:border-slate-800 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <badge.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-secondary dark:text-white font-bold text-base md:text-lg block group-hover:text-primary transition-colors">
                    {badge.label}
                  </span>
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Verified</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
