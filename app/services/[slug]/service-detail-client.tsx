"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle2, ArrowLeft, ShieldCheck, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CTA from "@/components/home/cta";

export default function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-20">
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <Link
            href="/services"
            className="group inline-flex items-center text-slate-400 hover:text-primary mb-12 font-bold transition-all"
          >
            <ArrowLeft className="mr-3 h-5 w-5 transition-transform group-hover:-translate-x-2" />
            Back to Capabilities
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 rounded-[2rem] bg-primary/5 flex items-center justify-center mb-10 text-primary shadow-sm border border-primary/10">
                <service.icon className="h-10 w-10" />
              </div>
              <motion.h1 className="text-5xl md:text-7xl font-bold text-secondary mb-8 leading-[1.1] tracking-tighter">{service.title}</motion.h1>
              <p className="text-2xl text-slate-500 mb-12 leading-relaxed font-medium">
                {service.longDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-32"
            >
              <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] mb-12">
                <Image
                  src={`https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800`}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-primary p-12 rounded-[3.5rem] text-white shadow-2xl shadow-primary/30 relative overflow-hidden">
                <h4 className="text-3xl font-bold mb-6 relative z-10">Technical Quote</h4>
                <Button size="lg" className="w-full h-20 rounded-[2rem] text-2xl font-bold bg-white text-primary hover:bg-white/90 relative z-10 shadow-xl" asChild>
                  <Link href="/contact">Inquire Now</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
}
