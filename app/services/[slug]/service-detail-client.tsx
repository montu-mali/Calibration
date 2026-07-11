"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { SERVICES, ICON_MAP } from "@/lib/constants";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowLeft,
  ShieldCheck,
  Activity,
  Settings2,
  BookOpen,
  HelpCircle,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CTA from "@/components/home/cta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = ICON_MAP[service.iconId] || Activity;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pt-2 md:pt-8 pb-16 md:py-20 bg-background relative overflow-hidden border-b border-border">
        <div className="container mx-auto px-6">
          <Link
            href="/services"
            className="group inline-flex items-center text-muted-foreground hover:text-primary mb-6 md:mb-8 font-bold transition-all"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Capabilities
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 md:mb-8 text-primary shadow-sm border border-primary/10">
                <Icon className="h-8 w-8" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground  mb-8 leading-relaxed">
                {service.longDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-xl h-14 px-8 text-lg font-bold shadow-lg shadow-primary/20" asChild>
                  <Link href="/contact">Get a Technical Quote</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-xl h-14 px-8 text-lg font-bold border-2" asChild>
                  <a href="#process">Our Process</a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 flex gap-3">
                {service.standards.map((standard) => (
                  <span key={standard} className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-bold border border-white/30">
                    {standard}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-20 bg-muted ">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left Column: Benefits & Equipment */}
            <div className="lg:col-span-8 space-y-12">

              {/* Benefits */}
              <div className="bg-background  p-8 md:p-10 rounded-3xl md:rounded-[2rem] border border-border shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-600">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Key Benefits</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-4">
                      <div className="mt-1 bg-green-500/10 rounded-full p-1">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      </div>
                      <p className="text-lg text-muted-foreground  font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment Covered */}
              <div className="bg-background  p-8 md:p-10 rounded-3xl md:rounded-[2rem] border border-border shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                    <Settings2 className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Equipment Covered</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.equipment.map((item) => (
                    <div key={item} className="flex items-center gap-3 p-4 bg-muted rounded-xl border border-border">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-bold text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div id="process" className="bg-background  p-8 md:p-10 rounded-3xl md:rounded-[2rem] border border-border shadow-sm">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-600">
                    <Activity className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Calibration Process</h2>
                </div>
                <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-border">
                  {service.process.map((step, idx) => (
                    <div key={step.step} className="relative pl-12">
                      <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center font-bold text-primary z-10">
                        {idx + 1}
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{step.step}</h4>
                      <p className="text-muted-foreground  leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Applications & FAQ */}
            <div className="lg:col-span-4 space-y-12">

              {/* Applications */}
              <div className="bg-primary p-8 md:p-10 rounded-3xl md:rounded-[2rem] text-white shadow-xl shadow-primary/20">
                <div className="flex items-center gap-4 mb-8">
                  <BookOpen className="h-7 w-7" />
                  <h3 className="text-2xl font-bold">Applications</h3>
                </div>
                <div className="space-y-4">
                  {service.applications.map((app) => (
                    <div key={app} className="flex items-center gap-3 p-4 bg-white/10 rounded-xl border border-white/10">
                      <ChevronRight className="h-5 w-5 text-white/60" />
                      <span className="font-bold">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service FAQ */}
              <div className="bg-background  p-8 md:p-10 rounded-3xl md:rounded-[2rem] border border-border shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600">
                    <HelpCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Service FAQ</h3>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  {service.faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`faq-${idx}`} className="border-border">
                      <AccordionTrigger className="text-left font-bold text-foreground hover:text-primary transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground ">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Contact Card */}
              <div className="bg-secondary p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] text-white">
                <h3 className="text-2xl font-bold mb-4">Need Expert Advice?</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our engineers are ready to help you with your specific calibration needs.
                </p>
                <Button variant="default" className="w-full h-14 rounded-xl text-lg font-bold bg-primary hover:bg-primary/90" asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
