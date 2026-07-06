"use client";

import { motion } from "framer-motion";
import { CLIENT_LOGOS } from "@/lib/constants";

export default function ClientSlider() {
  const duplicatedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-20 bg-white dark:bg-slate-950 border-y border-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs">
          Powering World-Class Enterprises
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          animate={{
            x: [0, -150 * CLIENT_LOGOS.length],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap items-center"
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="mx-16 text-4xl md:text-5xl font-black text-slate-100 hover:text-primary transition-all duration-500 cursor-default tracking-tighter"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
