"use client";

import { useEffect, useRef } from "react";

const bars = [
  { top: 18, h: 5, speed: 0.7 },
  { top: 28, h: 4, speed: 1.1 },
  { top: 38, h: 3, speed: 0.5 },
  { top: 48, h: 5, speed: 1.3 },
  { top: 58, h: 3, speed: 0.8 },
  { top: 68, h: 4, speed: 1.4 },
  { top: 78, h: 5, speed: 0.9 },
];

export default function Divider() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = vh + rect.height;
      const distance = vh - rect.top;
      const progress = Math.max(0, Math.min(1, distance / total));

      el.querySelectorAll("[data-bar]").forEach((bar, i) => {
        const range = 400;
        const y = (progress - 0.5) * range * bars[i].speed;
        bar.style.transform = `translateY(${y}px)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="relative h-32 overflow-hidden bg-[#D04A1F] md:h-40"
    >
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#efece7]" />

      {bars.map((b, i) => {
        const isLight = b.top < 50;
        return (
          <div
            key={i}
            data-bar
            className="absolute left-0 right-0 will-change-transform"
            style={{
              top: `${b.top}%`,
              height: `${b.h}px`,
              background: isLight ? "#efece7" : "#D04A1F",
            }}
          />
        );
      })}
    </div>
  );
}
