import { ServiceCardSkeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-muted dark:bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="h-20 w-1/3 bg-muted-foreground/10 rounded-2xl mb-12 animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <ServiceCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
