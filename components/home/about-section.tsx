"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Award } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section className="py-20 bg-background overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl z-10">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
                alt="Precision Calibration Laboratory"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
            </div>

            {/* Secondary Image/Card Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-10 -right-10 bg-background  p-10 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] max-w-[280px] z-20 border border-border"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Award className="text-primary h-8 w-8" />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-3">NABL Accredited</h4>
              <p className="text-muted-foreground  font-medium leading-relaxed">Technical competence in accordance with ISO/IEC 17025.</p>
            </motion.div>

            {/* Decorative dots */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[radial-gradient(#0057D9_2px,transparent_2px)] [background-size:20px_20px] opacity-20 -z-10" />
          </motion.div>

          {/* Content Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-xl bg-primary/5 text-primary text-sm font-bold uppercase tracking-[0.2em] mb-8">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Who We Are</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-[1.1] tracking-tight">
              Driving Accuracy <br />
              Since <span className="text-primary">2004</span>
            </h2>

            <p className="text-xl text-muted-foreground  mb-12 leading-relaxed">
              For years, {SITE_CONFIG.name} has been at the forefront of measurement science. We combine cutting-edge technology with deep technical expertise to ensure your instruments perform with ultimate precision.
            </p>

            <div className="grid gap-10 mb-12">
              {[
                { title: "Advanced Laboratory", content: "Equipped with primary master standards for unmatched measurement reliability." },
                { title: "Expert Solutions", content: "Customized calibration protocols for specialized industrial applications." },
              ].map((item, index) => (
                <div key={item.title} className="flex space-x-6 group">
                  <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <CheckCircle2 className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-lg text-muted-foreground  leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="rounded-2xl h-16 px-10 text-lg font-bold group" asChild>
              <Link href="/about">
                Explore Our Story
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
