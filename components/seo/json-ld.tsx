// components/seo/json-ld.tsx
// Reusable component to inject JSON-LD structured data into the page <head>.
// Usage: <JsonLd data={localBusinessSchema()} />
//        <JsonLd data={[schema1, schema2]} />  ← array for multiple schemas on one page

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export default function JsonLd({ data }: JsonLdProps) {
  const schemas = Array.isArray(data) ? data : [data];
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
        />
      ))}
    </>
  );
}
