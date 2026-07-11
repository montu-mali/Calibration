"use client";

import { motion } from "framer-motion";
import { CERTIFICATES } from "@/lib/constants";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

export default function CertificatesSection() {
  return (
    <section className="py-20 bg-muted ">
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
              className="bg-background rounded-3xl md:rounded-[3rem] overflow-hidden shadow-sm border border-border hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
            >
              <div className="relative h-48 md:h-64 w-full overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/5 transition-colors duration-500" />
                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 bg-background/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg">
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-10 flex-grow flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4 leading-tight">{cert.title}</h3>
                <p className="text-muted-foreground  text-base mb-2 md:mb-4 leading-relaxed flex-grow">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
