"use client";

import { FAQS } from "@/lib/constants";
import SectionHeading from "./section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function FAQSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading
          title="Technical FAQ"
          subtitle="Everything you need to know about our calibration standards and laboratory protocols."
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-6">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white dark:bg-slate-950 px-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm dark:shadow-none overflow-hidden"
              >
                <AccordionTrigger className="text-left text-xl font-bold text-secondary dark:text-white hover:text-primary transition-all py-10 hover:no-underline group">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 dark:text-slate-400 pb-10 text-lg leading-relaxed font-medium">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
