"use client";

import { motion } from "framer-motion";
import { CERTIFICATES } from "@/lib/constants";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

export default function CertificatesSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900/50/30">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Global Accreditation"
          subtitle="Our technical competence is validated by international regulatory bodies."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-950 rounded-[3rem] overflow-hidden shadow-sm dark:shadow-none border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/5 transition-colors duration-500" />
                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 bg-white dark:bg-slate-950/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg">
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>
              <div className="p-10 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-secondary dark:text-white mb-4 leading-tight">{cert.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-base mb-8 leading-relaxed flex-grow">
                  {cert.description}
                </p>
                <Button variant="outline" className="w-full h-14 rounded-2xl group/btn border-2 border-slate-100 dark:border-slate-800 font-bold hover:bg-primary hover:border-primary hover:text-white transition-all shadow-sm dark:shadow-none">
                  <Download className="mr-2 h-5 w-5 group-hover/btn:animate-bounce" />
                  Download PDF
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
