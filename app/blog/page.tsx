import { Metadata } from "next";
import BlogClient from "./blog-client";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, updates, and technical articles from the world of metrology and calibration.",
};

export default function BlogPage() {
  return <BlogClient />;
}
