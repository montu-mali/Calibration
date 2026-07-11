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
    <section className="py-12 md:py-20 bg-muted ">
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
                className="bg-background px-6 md:px-10 rounded-2xl md:rounded-[2.5rem] border border-border shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-bold text-foreground hover:text-primary transition-all py-6 md:py-10 hover:no-underline group">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 md:pb-10 text-base md:text-lg leading-relaxed font-medium">
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
