import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailClient from "./blog-detail-client";
import type { BlogPost } from "./blog-detail-client";
import JsonLd from "@/components/seo/json-ld";
import { buildMetadata, articleSchema, breadcrumbSchema, siteUrl } from "@/lib/seo";
import { BLOG_POSTS as RAW_BLOG_POSTS } from "@/lib/constants";

// Cast needed because constants.ts infers `type` as string rather than literal union
const BLOG_POSTS = RAW_BLOG_POSTS as unknown as BlogPost[];

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return { title: "Post Not Found" };

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    ogImage: post.image.startsWith("http") ? post.image : post.image,
    keywords: post.tags as string[],
    openGraph: {
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    } as Record<string, unknown>,
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) notFound();

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  const schemas = [
    articleSchema({
      title: post.title,
      excerpt: post.excerpt,
      slug: post.slug,
      date: post.date,
      image: post.image,
    }),
    breadcrumbSchema([
      { name: "Home", url: siteUrl("/") },
      { name: "Blog", url: siteUrl("/blog") },
      { name: post.title, url: siteUrl(`/blog/${post.slug}`) },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <BlogDetailClient post={post} relatedPosts={relatedPosts} />
    </>
  );
}
