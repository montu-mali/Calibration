"use client";

import { motion } from "framer-motion";
import { BLOG_POSTS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowRight, ChevronRight, Newspaper } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CTA from "@/components/home/cta";

export default function BlogPage() {
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
              <Newspaper className="h-4 w-4" />
              <span>Metrology Insights</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-bold text-foreground mb-8 leading-[1] tracking-tighter"
            >
              Industry <br />
              <span className="text-primary italic">Intelligence.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground  leading-relaxed"
            >
              Exploring the frontiers of measurement science, quality standards, and industrial innovation.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-8 group cursor-pointer"
            >
              <div className="relative aspect-[16/9] rounded-[4rem] overflow-hidden mb-12 shadow-2xl">
                <Image
                  src={BLOG_POSTS[0].image}
                  alt={BLOG_POSTS[0].title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-12 md:p-16">
                  <div className="inline-block px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-[0.2em] mb-8">
                    {BLOG_POSTS[0].category}
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 group-hover:text-primary transition-colors leading-tight">
                    {BLOG_POSTS[0].title}
                  </h2>
                  <p className="text-slate-300 text-xl mb-10 max-w-2xl font-medium leading-relaxed">
                    {BLOG_POSTS[0].excerpt}
                  </p>
                  <div className="flex items-center text-white font-bold text-lg">
                    Read Intelligence <ArrowRight className="ml-3 h-6 w-6" />
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-4 space-y-12">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                <Input
                  placeholder="Search insights..."
                  className="pl-16 h-20 rounded-[2rem] bg-muted border-transparent focus:bg-card focus:border-primary transition-all text-lg font-medium"
                />
              </div>

              <div className="p-10 rounded-[3rem] bg-muted border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-8">Recent Updates</h3>
                <div className="space-y-10">
                  {BLOG_POSTS.slice(1).map((post, idx) => (
                    <Link key={post.id} href="#" className="group flex gap-6 items-center">
                      <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-md">
                        <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">{post.category}</div>
                        <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="text-muted-foreground text-xs font-bold">{post.date}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[...BLOG_POSTS, ...BLOG_POSTS].slice(0, 6).map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-background  rounded-[3.5rem] overflow-hidden border border-border shadow-sm hover:shadow-[0_40px_80px_-15px_rgba(0,87,217,0.1)] transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden m-4 rounded-[2.5rem]">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 left-6">
                    <div className="px-4 py-2 rounded-xl bg-background/90 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-widest shadow-lg">
                      {post.category}
                    </div>
                  </div>
                </div>
                <div className="p-10 pt-4">
                  <div className="text-muted-foreground text-xs font-bold uppercase tracking-widest mb-6">{post.date}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-lg text-muted-foreground  mb-8 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link href="#" className="inline-flex items-center font-bold text-primary text-sm uppercase tracking-widest group/link">
                    Read Analysis
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
}
