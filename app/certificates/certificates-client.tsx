"use client";

import { motion } from "framer-motion";
import { CERTIFICATES } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, ShieldCheck, FileText, Award } from "lucide-react";
import CTA from "@/components/home/cta";

export default function CertificatesPage() {
  return (
    <div className="pt-20">
      <section className="py-16 md:py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-3 px-4 py-2 rounded-2xl bg-primary/5 text-primary text-sm font-bold uppercase tracking-[0.3em] mb-8"
            >
              <ShieldCheck className="h-4 w-4" />
              <span>Certified Excellence</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-bold text-foreground mb-8 leading-[1] tracking-tighter"
            >
              Technical <br />
              <span className="text-primary italic">Accreditation.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground  leading-relaxed"
            >
              Our laboratory maintains world-class certifications, validating our competence and commitment to measurement integrity.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-32">
            {CERTIFICATES.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background  rounded-[3.5rem] overflow-hidden shadow-sm border border-border hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
              >
                <div className="relative h-72 w-full overflow-hidden p-4">
                  <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-secondary/30 group-hover:bg-secondary/10 transition-colors" />
                    <div className="absolute top-6 left-6">
                      <div className="bg-primary text-white p-4 rounded-2xl shadow-xl">
                        <Award className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-10 pt-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">{cert.title}</h3>
                  <p className="text-muted-foreground  text-lg mb-10 leading-relaxed flex-grow">
                    {cert.description} Verified adherence to international metrology standards and technical requirements.
                  </p>
                  <Button className="w-full h-16 rounded-2xl group/btn font-bold text-xl relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      <Download className="mr-3 h-6 w-6 group-hover/btn:animate-bounce" />
                      Download PDF
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-success opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto bg-secondary rounded-[4rem] p-12 md:p-32 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-32 opacity-5 rotate-12">
              <ShieldCheck className="h-96 w-96 text-primary" />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight leading-[1.1]">Our Commitment <br /> to Quality Metrology</h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl">
                Our quality management system is built on the foundations of ISO/IEC 17025. We ensure that every measurement is traceable, every engineer is certified, and every process is optimized for accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
}
