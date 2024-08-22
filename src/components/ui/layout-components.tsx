import { cn } from "@/lib/utils";
import React from "react";

interface LayoutComponentsProps {
  children: React.ReactNode;
  className?: string;
}

export default function LayoutComponents({
  children,
  className,
}: LayoutComponentsProps) {

  return (
    <section className="relative w-full h-full px-4 py-4">
      <div
        className={cn(
          "absolute inset-0 w-full h-full -z-10",
          "items-center justify-center px-8 md:px-12 lg:px-20 gap-4",
          className
        )}
      />
      {children}
    </section>
  );
}
