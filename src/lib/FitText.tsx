"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

type FitTextProps = {
  children: React.ReactNode;
  className?: string;
  baseFontSize?: number;
  minFontSize?: number;
  maxFontSize?: number;
  as?: ElementType;
};

export default function FitText({
  children,
  className = "",
  baseFontSize = 64,
  minFontSize = 12,
  maxFontSize = 1000,
  as,
}: FitTextProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLElement | null>(null);
  const [fontSize, setFontSize] = useState<number>(baseFontSize);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    let raf = 0;

    function adjust() {
      const containerWidth = containerRef.current!.clientWidth;
      const textEl = textRef.current!;

      // Create a hidden measurement element so we don't touch the visible element
      const meas = document.createElement("span");
      meas.style.position = "absolute";
      meas.style.visibility = "hidden";
      meas.style.whiteSpace = "nowrap";
      meas.style.display = "inline-block";
      meas.style.fontSize = `${baseFontSize}px`;
      if (className) meas.className = className;

      // Use textContent for measurement; fallback to children string if needed
      meas.textContent = textEl.textContent || String(children ?? "");

      containerRef.current!.appendChild(meas);
      const rect = meas.getBoundingClientRect();
      const textWidth = rect.width || 1;
      containerRef.current!.removeChild(meas);

      let newSize = (baseFontSize * containerWidth) / textWidth;
      newSize = Math.max(minFontSize, Math.min(maxFontSize, newSize));

      // avoid tiny updates that cause repaint jitter
      setFontSize((prev) => (Math.abs(prev - newSize) > 0.5 ? newSize : prev));
    }

    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(adjust);
    });

    ro.observe(containerRef.current);
    window.addEventListener("resize", adjust);

    // initial adjust
    adjust();

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", adjust);
      cancelAnimationFrame(raf);
    };
  }, [baseFontSize, minFontSize, maxFontSize, children, className]);

  const Tag: ElementType = as || "div";

  return (
    <div ref={containerRef} className="w-full">
      <Tag
        ref={textRef}
        className={className}
        style={{ fontSize: `${fontSize}px`, lineHeight: 1 }}
      >
        {children}
      </Tag>
    </div>
  );
}
