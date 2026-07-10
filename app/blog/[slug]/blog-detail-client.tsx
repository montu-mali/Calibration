"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  ChevronRight,
  CheckCircle2,
  Lightbulb,
  BookOpen,
  User,
} from "lucide-react";
import CTA from "@/components/home/cta";

// ─── Types ────────────────────────────────────────────────────────────────────

export type ContentBlock =
  | { type: "intro"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "callout"; title: string; text: string }
  | { type: "list"; title: string; items: string[] };

export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  readTime: string;
  author: Author;
  tags: string[];
  content: ContentBlock[];
}

interface BlogDetailClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

// ─── Content Block Renderer ───────────────────────────────────────────────────

function RenderBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "intro":
      return (
        <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-medium border-l-4 border-primary pl-6 py-2 mb-10 italic">
          {block.text}
        </p>
      );

    case "paragraph":
      return (
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          {block.text}
        </p>
      );

    case "heading":
      return (
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
          <span className="w-1.5 h-7 bg-primary rounded-full inline-block shrink-0" />
          {block.text}
        </h2>
      );

    case "callout":
      return (
        <div className="my-8 rounded-3xl bg-primary/5 border border-primary/20 p-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <Lightbulb className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">
                {block.title}
              </p>
              <p className="text-foreground/80 leading-relaxed">{block.text}</p>
            </div>
          </div>
        </div>
      );

    case "list":
      return (
        <div className="my-8 rounded-3xl bg-muted border border-border p-8">
          <p className="font-bold text-foreground text-lg mb-5">{block.title}</p>
          <ul className="space-y-3">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    default:
      return null;
  }
}

// ─── Share Buttons ─────────────────────────────────────────────────────────────

function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const url = `https://mechatronics-calibration.com/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <Share2 className="w-4 h-4" /> Share
      </span>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-xl bg-muted hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2] border border-border transition-all flex items-center justify-center"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-4 h-4" />
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-xl bg-muted hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] border border-border transition-all flex items-center justify-center"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-xl bg-muted hover:bg-[#1877F2]/10 hover:text-[#1877F2] border border-border transition-all flex items-center justify-center"
        aria-label="Share on Facebook"
      >
        <Facebook className="w-4 h-4" />
      </a>
    </div>
  );
}

// ─── Table of Contents ─────────────────────────────────────────────────────────

function TableOfContents({ content }: { content: ContentBlock[] }) {
  const headings = content.filter((b) => b.type === "heading") as {
    type: "heading";
    text: string;
  }[];

  if (headings.length === 0) return null;

  return (
    <div className="rounded-3xl bg-muted border border-border p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-4 h-4 text-primary" />
        <h3 className="font-bold text-foreground text-sm uppercase tracking-widest">
          In This Article
        </h3>
      </div>
      <ol className="space-y-2">
        {headings.map((h, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-primary font-bold text-xs mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-sm text-muted-foreground hover:text-primary transition-colors leading-snug cursor-pointer">
              {h.text}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

// ─── Category badge colours ────────────────────────────────────────────────────

const categoryColour: Record<string, string> = {
  Standards: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Maintenance: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  Technology: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
};

// ─── Main Component ────────────────────────────────────────────────────────────

export default function BlogDetailClient({ post, relatedPosts }: BlogDetailClientProps) {
  const catClass = categoryColour[post.category] ?? "bg-primary/10 text-primary";

  return (
    <div className="pt-20">
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[45vh] flex items-end overflow-hidden">
        {/* background image */}
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-secondary/20" />
        </div>

        {/* hero content */}
        <div className="relative z-10 container mx-auto px-6 pb-8 md:pb-12">
          {/* breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/40 line-clamp-1">{post.title}</span>
          </motion.nav>

          {/* category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className={`inline-block px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-[0.2em] bg-primary text-white`}>
              {post.category}
            </span>
          </motion.div>

          {/* title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tighter mb-8 max-w-5xl"
          >
            {post.title}
          </motion.h1>

          {/* meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-6"
          >
            {/* author */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/20">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">{post.author.name}</p>
                <p className="text-white/60 text-xs">{post.author.role}</p>
              </div>
            </div>

            <div className="w-px h-8 bg-white/20" />

            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>

            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ARTICLE + SIDEBAR ────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* ── ARTICLE BODY ─────────────────────────────────────────────── */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-8"
            >
              {/* content blocks */}
              <div className="prose-custom">
                {post.content.map((block, i) => (
                  <RenderBlock key={i} block={block} />
                ))}
              </div>

              {/* tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap items-center gap-3">
                  <Tag className="w-4 h-4 text-muted-foreground" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-xl bg-muted border border-border text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* share */}
              <div className="mt-8 pt-8 border-t border-border">
                <ShareButtons title={post.title} slug={post.slug} />
              </div>

              {/* author card */}
              <div className="mt-10 rounded-[2.5rem] bg-muted border border-border p-8 flex gap-6 items-start">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-primary/20 shrink-0">
                  <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <User className="w-3.5 h-3.5 text-primary" />
                    <span className="text-primary text-xs font-bold uppercase tracking-widest">Author</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{post.author.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{post.author.role} — Mechatronics Calibration LLP</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A seasoned metrology professional with extensive hands-on experience in calibration laboratory management, instrument testing, and quality assurance systems for industrial clients across India.
                  </p>
                </div>
              </div>

              {/* back link */}
              <div className="mt-12">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to all articles
                </Link>
              </div>
            </motion.article>

            {/* ── SIDEBAR ──────────────────────────────────────────────────── */}
            <aside className="lg:col-span-4 space-y-6">
              {/* sticky wrapper */}
              <div className="lg:sticky lg:top-28 space-y-6">

                {/* TOC */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <TableOfContents content={post.content} />
                </motion.div>

                {/* meta card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                  className="rounded-3xl bg-muted border border-border p-6"
                >
                  <h3 className="font-bold text-foreground text-sm uppercase tracking-widest mb-4">Article Info</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Category</span>
                      <span className={`px-3 py-1 rounded-lg text-xs font-bold ${catClass}`}>{post.category}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Published</span>
                      <span className="font-medium text-foreground">{post.date}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Read time</span>
                      <span className="font-medium text-foreground">{post.readTime}</span>
                    </div>
                  </div>
                </motion.div>

                {/* related posts */}
                {relatedPosts.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="rounded-3xl bg-muted border border-border p-6"
                  >
                    <h3 className="font-bold text-foreground text-sm uppercase tracking-widest mb-5">
                      Related Articles
                    </h3>
                    <div className="space-y-5">
                      {relatedPosts.map((related) => (
                        <Link
                          key={related.id}
                          href={`/blog/${related.slug}`}
                          className="group flex gap-4 items-start"
                        >
                          <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                            <Image
                              src={related.image}
                              alt={related.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">
                              {related.category}
                            </p>
                            <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-3 leading-snug mb-1">
                              {related.title}
                            </h4>
                            <p className="text-xs text-muted-foreground">{related.date}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* get calibrated CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                  className="rounded-3xl bg-secondary text-white p-6 relative overflow-hidden"
                >
                  {/* decorative circle */}
                  <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-primary/20" />
                  <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-primary/10" />

                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Ready to calibrate?</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-5">
                      Get NABL-accredited calibration for your instruments with fast turnaround.
                    </p>
                    <Link
                      href="/contact"
                      className="block text-center py-3 px-5 rounded-2xl bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-colors"
                    >
                      Request a Quote
                    </Link>
                  </div>
                </motion.div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
