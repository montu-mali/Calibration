"use client";

import { motion } from "framer-motion";
import {
  PackageSearch,
  Search,
  Activity,
  CheckCircle,
  FileCheck,
  Truck,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import SectionHeading from "./section-heading";

const STEPS = [
  { icon: PackageSearch, title: "Equipment Intake", desc: "Digital logging and initial documentation." },
  { icon: Search, title: "Pre-Calibration", desc: "Environmental stabilization and inspection." },
  { icon: Activity, title: "Active Calibration", desc: "Comparison against NIST/NABL standards." },
  { icon: CheckCircle, title: "Quality Assurance", desc: "Internal verification and uncertainty analysis." },
  { icon: FileCheck, title: "Certification", desc: "Digital and physical traceable reports." },
  { icon: Truck, title: "Deployment", desc: "Rapid return with full documentation." },
];

export default function CalibrationProcess() {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none"
           style={{ backgroundImage: "radial-gradient(#0057D9 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="container mx-auto px-6">
        <SectionHeading
          title="The Calibration Lifecycle"
          subtitle="Our ISO 17025 compliant workflow ensures absolute traceability and precision at every stage."
          centered
          light
        />

        <div className="relative">
          {/* Vertical line for mobile, horizontal for desktop */}
          <div className="absolute left-[39px] lg:left-0 top-0 w-0.5 lg:w-full h-full lg:h-0.5 bg-gradient-to-b lg:bg-gradient-to-r from-primary/0 via-primary to-primary/0 top-1/2 lg:-translate-y-1/2 z-0 opacity-20" />

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-8 relative z-10">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex lg:flex-col items-center lg:items-center text-left lg:text-center group"
              >
                <div className="shrink-0 w-20 h-20 rounded-[2rem] bg-background/5 border-4 border-secondary flex items-center justify-center mb-0 lg:mb-8 mr-8 lg:mr-0 group-hover:bg-primary group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(0,87,217,0.4)] transition-all duration-500 relative">
                  <step.icon className="h-8 w-8 text-muted-foreground group-hover:text-white transition-colors" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-success rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
