"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* Renders children at a fixed design size and scales them to fit the
   container width, so the miniature app screens stay crisp at any frame size. */
export function ScaledScreen({ children, designWidth = 560, aspect = 16 / 10, className }: { children: ReactNode; designWidth?: number; aspect?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / designWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [designWidth]);

  const designHeight = designWidth / aspect;
  return (
    <div ref={ref} className={cn("relative w-full overflow-hidden", className)} style={{ aspectRatio: `${aspect}` }}>
      <div className="absolute left-0 top-0 origin-top-left" style={{ width: designWidth, height: designHeight, transform: `scale(${scale})` }}>
        {children}
      </div>
    </div>
  );
}
