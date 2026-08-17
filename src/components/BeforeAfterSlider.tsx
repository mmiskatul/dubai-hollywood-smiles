"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  title?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = "Before Dental Treatment",
  afterAlt = "After Dental Treatment",
  title,
  className = "",
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let position = (x / rect.width) * 100;
      if (position < 0) position = 0;
      if (position > 100) position = 100;
      setSliderPosition(position);
    },
    []
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {title && (
        <h4 className="text-sm font-semibold text-[#171A1C] text-center">
          {title}
        </h4>
      )}

      <div
        ref={containerRef}
        role="slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Before and After Treatment Comparison Slider"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden select-none cursor-ew-resize border border-[#E9EDEE] bg-[#F8FAFA] shadow-subtle focus:outline-none focus:ring-2 focus:ring-[#0F6B68]"
      >
        {/* AFTER IMAGE (Base Layer) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={false}
          />
          <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#0F6B68] border border-[#E9EDEE] shadow-xs">
            After
          </div>
        </div>

        {/* BEFORE IMAGE (Clipped Layer) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={false}
          />
          <div className="absolute top-4 left-4 z-10 bg-[#171A1C]/80 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-white shadow-xs">
            Before
          </div>
        </div>

        {/* DRAG DIVIDER LINE & HANDLE */}
        <div
          className="absolute top-0 bottom-0 z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-[2px] h-full bg-white shadow-[0_0_8px_rgba(0,0,0,0.3)] -ml-[1px]" />
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-[#0F6B68] border border-[#E9EDEE] shadow-md flex items-center justify-center pointer-events-auto cursor-ew-resize">
            <ChevronsLeftRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-[11px] text-[#8A9297] px-1">
        <span>◀ Drag to compare Before</span>
        <span>After ▶</span>
      </div>
    </div>
  );
};
