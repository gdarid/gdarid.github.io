import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SplitSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

/**
 * SplitSection Component
 * Centered section with title and blob counter above content
 */
export default function SplitSection({
  title,
  children,
  className,
  id
}: SplitSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "px-8 md:px-16 lg:px-24 bg-background",
        className
      )}
    >
      <div className="w-full max-w-4xl mx-auto">
        <div className="top-[44px] bg-background z-20 text-center py-6 md:py-8">

          <h2 className="text-section text-[var(--color-brand)]">{title}</h2>
        </div>
        <div className="py-6 md:py-8">
          {children}
        </div>
      </div>
    </section>
  );
}
