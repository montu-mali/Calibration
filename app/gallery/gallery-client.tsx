"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import CTA from "@/components/home/cta";
import { Microscope, Camera, Factory, Users, ExternalLink } from "lucide-react";

const CATEGORIES = ["All", "Laboratory", "On-Site", "Equipment", "Team"];

const IMAGES = [
  { id: 1, category: "Laboratory", url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600", title: "Main Calibration Lab", span: "row-span-2" },
  { id: 2, category: "Equipment", url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600", title: "Precision Multimeters", span: "col-span-1" },
  { id: 3, category: "On-Site", url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=600", title: "Industrial Site Testing", span: "col-span-1" },
  { id: 4, category: "Laboratory", url: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600", title: "Clean Room Facility", span: "col-span-2" },
  { id: 5, category: "Team", url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600", title: "Our Engineering Team", span: "col-span-1" },
  { id: 6, category: "Equipment", url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600", title: "Oscilloscope Calibration", span: "row-span-2" },
  { id: 7, category: "On-Site", url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600", title: "Factory Scale Calibration", span: "col-span-1" },
  { id: 8, category: "Laboratory", url: "https://images.unsplash.com/photo-1532187875605-7fe347469ebf?auto=format&fit=crop&q=80&w=600", title: "Chemical Lab Setup", span: "col-span-1" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All"
    ? IMAGES
    : IMAGES.filter(img => img.category === activeCategory);

  return (
    <div className="pt-20">
      <section className="py-24 md:py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-3 px-4 py-2 rounded-2xl bg-primary/5 text-primary text-sm font-bold uppercase tracking-[0.3em] mb-8"
            >
              <Camera className="h-4 w-4" />
              <span>Behind the Scenes</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-bold text-secondary dark:text-white mb-8 leading-[1] tracking-tighter"
            >
              Visual <br />
              <span className="text-primary italic">Heritage.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed"
            >
              A window into our advanced facilities, specialized instrumentation, and the technical team driving our precision.
            </motion.p>
          </div>

          {/* Premium Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-10 py-4 rounded-2xl font-bold transition-all duration-500 border-2 text-lg",
                  activeCategory === cat
                    ? "bg-primary border-primary text-white shadow-2xl shadow-primary/30"
                    : "bg-white dark:bg-slate-950 border-slate-100 dark:border-slate-800 text-slate-400 hover:border-primary/30 hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-[300px]">
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "group relative rounded-[3rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700",
                  img.span
                )}
              >
                <Image
                  src={img.url}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <div className="bg-white dark:bg-slate-950/10 backdrop-blur-md border border-white/20 p-8 rounded-[2rem] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">{img.category}</span>
                    <div className="flex items-center justify-between">
                      <h4 className="text-white text-2xl font-bold leading-tight">{img.title}</h4>
                      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0 ml-4">
                        <ExternalLink className="text-white h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
}
