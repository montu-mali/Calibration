"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe, MessageSquare } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-16 md:py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-3 px-4 py-2 rounded-2xl bg-primary/5 text-primary text-sm font-bold uppercase tracking-[0.3em] mb-8"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Connect With Us</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-bold text-secondary dark:text-white mb-8 leading-[1] tracking-tighter"
            >
              Let's Talk <br />
              <span className="text-primary italic">Precision.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed"
            >
              Our specialists are ready to provide technical consultation and customized calibration strategies for your organization.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 max-w-7xl mx-auto items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Phone, label: "Call Us", value: CONTACT_INFO.phone, sub: "Mon-Sat, 9am-6pm" },
                  { icon: Mail, label: "Email Us", value: CONTACT_INFO.email, sub: "24/7 Response Time" },
                  { icon: MapPin, label: "Visit Lab", value: "Industrial Area, Mumbai", sub: "View on Maps" },
                  { icon: Globe, label: "Global Presence", value: "Across India", sub: "12+ Service Centers" },
                ].map((item) => (
                  <div key={item.label} className="p-8 rounded-[2.5rem] bg-gray-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:bg-white dark:bg-slate-950 hover:border-primary transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-950 shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <item.icon className="text-primary h-6 w-6 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{item.label}</h3>
                    <div className="text-xl font-bold text-secondary dark:text-white mb-1">{item.value}</div>
                    <div className="text-sm text-slate-400 font-medium">{item.sub}</div>
                  </div>
                ))}
              </div>

              {/* Google Maps Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/50 h-[300px] relative group"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 grayscale group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white dark:bg-slate-950/90 backdrop-blur-md p-6 rounded-3xl shadow-xl text-center border border-white/50">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-secondary dark:text-white mb-1">Main Laboratory</h3>
                    <p className="text-slate-500 dark:text-slate-400 max-w-[200px] mx-auto text-xs font-medium">Industrial Area, Mumbai, MH 400001</p>
                    <Button variant="link" size="sm" className="mt-2 text-primary font-bold" asChild>
                      <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-slate-950 p-10 md:p-16 rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-50 relative overflow-hidden"
            >
              <h3 className="text-3xl font-bold text-secondary dark:text-white mb-10">Request a Consultation</h3>
              <form className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <Input placeholder="John Doe" className="rounded-2xl h-14 bg-gray-50 dark:bg-slate-900/50 border-transparent focus:bg-white dark:bg-slate-950 focus:border-primary transition-all text-lg" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Company Name</label>
                    <Input placeholder="Acme Corp" className="rounded-2xl h-14 bg-gray-50 dark:bg-slate-900/50 border-transparent focus:bg-white dark:bg-slate-950 focus:border-primary transition-all text-lg" />
                  </div>
                </div>
                <Button className="w-full h-20 rounded-[2rem] text-xl font-bold shadow-2xl shadow-primary/30 group relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    Send Inquiry
                    <Send className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
