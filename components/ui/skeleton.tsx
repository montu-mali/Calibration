"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-slate-200 dark:bg-slate-800",
        className
      )}
    />
  );
}

export function ServiceCardSkeleton() {
  return (
    <div className="p-10 rounded-[3rem] bg-gray-50 border border-slate-100">
      <Skeleton className="w-16 h-16 rounded-2xl mb-10" />
      <Skeleton className="h-8 w-3/4 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-8" />
      <Skeleton className="h-6 w-24" />
    </div>
  );
}

export function IndustryCardSkeleton() {
  return (
    <div className="aspect-square rounded-[3rem] overflow-hidden bg-gray-100">
      <Skeleton className="w-full h-full" />
    </div>
  );
}
