"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/constants";

function Counter({ value, target }: { value: string, target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    let timer: NodeJS.Timeout;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [target]);

  return <span ref={ref}>{count}{value.includes('%') ? '%' : '+'}</span>;
}

export default function Statistics() {
  return (
    <section className="py-16 bg-primary overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
           style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
                <Counter value={stat.value} target={stat.target} />
              </div>
              <div className="h-1 w-12 bg-white dark:bg-slate-950/30 mx-auto mb-6 rounded-full" />
              <p className="text-blue-100 text-lg font-bold uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
