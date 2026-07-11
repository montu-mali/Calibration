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
    <section className="py-12 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-muted rounded-2xl md:rounded-[2.5rem] p-6 md:p-12 border border-border shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between gap-6 md:gap-8 lg:gap-12 relative z-10">
            {BADGES.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4 group cursor-default"
              >
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-background shadow-sm border border-border flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <badge.icon className="h-6 w-6 md:h-7 md:w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-foreground font-bold text-sm md:text-lg block group-hover:text-primary transition-colors">
                    {badge.label}
                  </span>
                  <span className="text-muted-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest">Verified</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
