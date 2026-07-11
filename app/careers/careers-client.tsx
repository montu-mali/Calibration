"use client";


import { motion } from "framer-motion";
import { JOBS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ArrowRight, Zap, Users, Trophy, Heart, Star } from "lucide-react";
import CTA from "@/components/home/cta";
import Link from "next/link";

export default function CareersClient() {
  const perks = [
    { icon: Zap, title: "Modern Metrology", desc: "Work with the most advanced reference standards in the industry." },
    { icon: Users, title: "Collaborative Culture", desc: "A team of senior experts committed to knowledge sharing." },
    { icon: Trophy, title: "Career Acceleration", desc: "Fast-track growth opportunities in a high-growth technical field." },
    { icon: Heart, title: "Premium Benefits", desc: "Comprehensive insurance, flexible cycles, and performance incentives." },
  ];

  return (
    <div className="pt-20">
      <section className="py-10 md:py-16 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#0057D9_0%,transparent_50%)] opacity-30" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4"
          >
            <Star className="h-4 w-4" />
            <span>Be Part of the Future</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter leading-[1]"
          >
            Engineer Your <br />
            <span className="text-primary italic">Ambition.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            We are looking for the next generation of metrologists and engineers to drive measurement excellence.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
            {perks.map((perk, idx) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 md:p-12 rounded-3xl md:rounded-[3.5rem] bg-muted border border-border hover:bg-card hover:border-primary transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-background shadow-sm flex items-center justify-center mb-10 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <perk.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{perk.title}</h3>
                <p className="text-lg text-muted-foreground  leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-foreground tracking-tight mb-4">Open Opportunities</h2>
              <div className="h-1.5 w-24 bg-primary rounded-full mx-auto" />
            </div>

            <div className="space-y-10">
              {JOBS.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-8 md:p-14 rounded-3xl md:rounded-[3.5rem] bg-background  border border-border shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:border-primary transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
                    <div className="space-y-6">
                      <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                        {job.department}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">{job.title}</h3>
                      <div className="flex flex-wrap gap-8">
                        <div className="flex items-center text-muted-foreground font-bold text-sm uppercase tracking-widest">
                          <MapPin className="h-5 w-5 mr-3 text-primary" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-muted-foreground font-bold text-sm uppercase tracking-widest">
                          <Clock className="h-5 w-5 mr-3 text-primary" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    <Button size="lg" className="rounded-2xl h-20 px-12 text-2xl font-bold shadow-xl shadow-primary/20 group/btn relative overflow-hidden" asChild>
                      <Link href="/contact">
                        <span className="relative z-10 flex items-center">
                          Apply
                          <ArrowRight className="ml-3 h-7 w-7 transition-transform group-hover/btn:translate-x-2" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-success opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </Button>
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
