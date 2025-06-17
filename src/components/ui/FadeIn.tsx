import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

const FadeIn = ({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 500,
  once = true,
}: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && domRef.current) {
            observer.unobserve(domRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      });
    });
    
    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }
    
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [once]);

  const getDirectionStyles = () => {
    switch (direction) {
      case "up": return "translate-y-10";
      case "down": return "-translate-y-10";
      case "left": return "translate-x-10";
      case "right": return "-translate-x-10";
      default: return "";
    }
  };

  return (
    <div
      ref={domRef}
      className={cn(
        className,
        "transition-all",
        direction !== "none" && getDirectionStyles(),
        isVisible
          ? "opacity-100 transform-none"
          : "opacity-0"
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        transitionProperty: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;