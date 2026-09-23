import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import JsonLd from "@/components/layout/json-ld";
import { getBreadcrumbJsonLd } from "@/lib/structured-data";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ name: "Home", path: "/" }, ...items];

  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd(allItems)} />
      <nav
        aria-label="Breadcrumb"
        className="container mx-auto px-4 pt-6 text-sm text-foreground/60"
      >
        <ol className="flex flex-wrap items-center gap-1.5">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                )}
                {isLast ? (
                  <span aria-current="page" className="font-medium text-foreground/80">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className="flex items-center gap-1 hover:text-primary transition-colors"
                  >
                    {index === 0 && <Home className="h-3.5 w-3.5" aria-hidden="true" />}
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
