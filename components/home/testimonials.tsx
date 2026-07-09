"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import SectionHeading from "./section-heading";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6">
        <SectionHeading
          title="Voice of Our Partners"
          subtitle="Trusted by over 1,500 enterprises globally for mission-critical accuracy."
          centered
        />

        <div className="relative max-w-6xl mx-auto">
          <div className="bg-muted  rounded-[4rem] p-10 md:p-24 relative overflow-hidden shadow-sm border border-border">
            <Quote className="absolute top-12 left-12 h-24 w-24 text-primary/10 -rotate-12" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                  <div className="relative shrink-0">
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-[3rem] overflow-hidden shadow-2xl relative z-10 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      <Image
                        src={TESTIMONIALS[current].image}
                        alt={TESTIMONIALS[current].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Decorative square behind image */}
                    <div className="absolute inset-0 bg-primary rounded-[3rem] -rotate-6 z-0" />
                  </div>

                  <div className="flex-grow">
                    <div className="flex mb-8 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-6 w-6",
                            i < TESTIMONIALS[current].rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200"
                          )}
                        />
                      ))}
                    </div>
                    <p className="text-2xl md:text-4xl text-foreground font-medium leading-[1.4] mb-12 italic tracking-tight">
                      "{TESTIMONIALS[current].content}"
                    </p>
                    <div className="flex items-center space-x-6">
                      <div className="h-px w-12 bg-primary" />
                      <div>
                        <h4 className="text-2xl font-bold text-foreground mb-1">{TESTIMONIALS[current].name}</h4>
                        <p className="text-primary font-bold uppercase tracking-widest text-sm">{TESTIMONIALS[current].company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-12 gap-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="w-16 h-16 rounded-full border-2 border-border text-foreground hover:bg-primary hover:border-primary hover:text-white transition-all shadow-xl "
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="w-16 h-16 rounded-full border-2 border-border text-foreground hover:bg-primary hover:border-primary hover:text-white transition-all shadow-xl "
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
