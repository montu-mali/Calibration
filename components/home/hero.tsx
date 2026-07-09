"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Activity, Gauge, Zap, Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[150px]"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-success/5 rounded-full blur-[150px]"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center space-x-3 px-4 py-2 rounded-2xl bg-primary/5 border border-primary/10 backdrop-blur-md text-primary text-sm font-bold uppercase tracking-widest mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-success animate-pulse" />
              <span>NABL Accredited Laboratory</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-8 leading-[1] tracking-tighter">
              Precision <br />
              Beyond <br />
              <span className="text-success italic">Measurement</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-xl leading-relaxed">
              ISO Certified Calibration Laboratory delivering world-class accuracy and reliability for mission-critical engineering across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="rounded-2xl h-16 px-10 text-xl font-bold shadow-2xl shadow-primary/20 group overflow-hidden relative" asChild>
                <Link href="/contact">
                  <span className="relative z-10 flex items-center">
                    Request Quote
                    <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-success opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl h-16 px-10 text-xl font-bold text-primary border-primary/20 bg-primary/5 hover:bg-primary/10 backdrop-blur-md transition-all" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>

            <div className="mt-16 flex items-center space-x-8 opacity-30">
              {[ShieldCheck, Activity, Gauge, Zap].map((Icon, i) => (
                <Icon key={i} className="h-8 w-8 text-foreground" />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-2xl mx-auto">
              {/* Animated Rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    rotate: 360,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    rotate: { duration: 20 + i * 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className={cn(
                    "absolute inset-0 rounded-[4rem] border border-primary/5",
                    i === 0 ? "m-0" : i === 1 ? "m-12" : "m-24"
                  )}
                />
              ))}

              {/* Main Visual */}
              <div className="absolute inset-0 m-12 bg-gradient-to-br from-white to-gray-50 backdrop-blur-2xl rounded-[4rem] border border-border shadow-2xl overflow-hidden flex items-center justify-center p-12">
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
                    alt="Precision Engineering"
                    fill
                    className="object-cover rounded-3xl opacity-20"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="w-48 h-48 bg-primary rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(0,87,217,0.3)] border-8 border-white"
                    >
                      <Activity className="text-white h-24 w-24" />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute top-10 right-0 bg-white/80 backdrop-blur-xl p-6 rounded-3xl border border-border shadow-xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-success rounded-xl flex items-center justify-center">
                    <Gauge className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-foreground font-bold text-sm">Accuracy</div>
                    <div className="text-success text-sm font-bold">99.998%</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-20 -left-10 bg-white/80 backdrop-blur-xl p-6 rounded-3xl border border-border shadow-xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-success rounded-xl flex items-center justify-center">
                    <ShieldCheck className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-foreground font-bold text-sm">Certified</div>
                    <div className="text-success text-sm font-bold">ISO 17025</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
      >
        <span className="text-muted-foreground text-xs font-bold uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
