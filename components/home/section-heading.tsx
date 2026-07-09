"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        centered ? "text-center mx-auto max-w-4xl" : "text-left",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-6"
      >
        {centered && (
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-[2px] w-12 bg-primary/30" />
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Innovation</span>
            <div className="h-[2px] w-12 bg-primary/30" />
          </div>
        )}
        <h2
          className={cn(
            "text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]",
            light ? "text-white" : "text-foreground"
          )}
        >
          {title}
        </h2>
      </motion.div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={cn(
            "text-lg md:text-xl leading-relaxed max-w-3xl font-medium",
            light ? "text-muted-foreground" : "text-muted-foreground dark:text-muted-foreground",
            centered ? "mx-auto" : ""
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
