// components/seo/breadcrumb.tsx
// Visible breadcrumb navigation + matching JSON-LD BreadcrumbList schema.
// Renders a semantic <nav> accessible breadcrumb trail and injects schema markup.

import Link from "next/link";
import JsonLd from "./json-ld";
import { breadcrumbSchema, siteUrl } from "@/lib/seo";

export interface BreadcrumbItem {
  label: string;
  href?: string; // omit for the current/last item
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const schemaItems = [
    { name: "Home", url: siteUrl("/") },
    ...items.map((item) => ({
      name: item.label,
      url: item.href ? siteUrl(item.href) : siteUrl(""),
    })),
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="breadcrumb-nav">
        <ol
          className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground py-3"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <Link
              href="/"
              itemProp="item"
              className="hover:text-foreground transition-colors"
            >
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>

          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-1.5"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <span aria-hidden="true" className="text-muted-foreground/50">
                /
              </span>
              {item.href ? (
                <Link
                  href={item.href}
                  itemProp="item"
                  className="hover:text-foreground transition-colors"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span
                  itemProp="name"
                  className="text-foreground font-medium"
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}
              <meta itemProp="position" content={String(index + 2)} />
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
