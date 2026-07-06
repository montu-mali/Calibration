"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="py-32 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-secondary rounded-[4rem] p-12 md:p-32 text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.3)]"
        >
          {/* Futuristic background patterns */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#0057D9_0%,transparent_50%)] opacity-20" />
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-3 px-4 py-2 rounded-2xl bg-white dark:bg-slate-950/5 border border-white/10 text-primary text-sm font-bold uppercase tracking-[0.3em] mb-12"
            >
              <span>Get Started</span>
            </motion.div>

            <h2 className="text-5xl md:text-8xl font-bold text-white mb-10 leading-[1] tracking-tighter">
              Ready to <br />
              <span className="text-primary italic">Elevate</span> Your <br />
              Quality Standards?
            </h2>

            <p className="text-xl md:text-2xl text-slate-400 mb-16 leading-relaxed max-w-2xl mx-auto">
              Our engineers are ready to build a custom calibration plan for your organization. Contact us today for a technical consultation.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <Button size="lg" className="rounded-[2rem] h-20 px-12 text-2xl font-bold w-full md:w-auto shadow-2xl shadow-primary/30 group relative overflow-hidden" asChild>
                <Link href="/contact">
                  <span className="relative z-10 flex items-center justify-center">
                    Request Quote
                    <ArrowRight className="ml-3 h-7 w-7 transition-transform group-hover:translate-x-2" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </Button>
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-950/5 border border-white/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                    <Phone className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-1">Call Technical</div>
                    <div className="text-white text-xl font-bold">{CONTACT_INFO.phone}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-24 pt-16 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {[
                { label: "Instruments", value: "12,000+" },
                { label: "Technical Staff", value: "50+" },
                { label: "Enterprise Clients", value: "1,500+" },
                { label: "ISO Accredited", value: "17025:2017" },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{item.value}</div>
                  <div className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
