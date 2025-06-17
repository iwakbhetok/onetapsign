import React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const GradientText = ({
  children,
  className,
  as: Component = "span",
}: GradientTextProps) => {
  return (
    <Component
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-400",
        className
      )}
    >
      {children}
    </Component>
  );
};

export default GradientText;