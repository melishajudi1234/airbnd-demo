"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PropertyCard from "./PropertyCard";
import { Property } from "@/data/properties";

interface SectionProps {
  properties: Property[];
  title?: string;
}

const Section = ({ properties, title = "Popular homes in Bengaluru" }: SectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        scrollContainer.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="mb-16 last:mb-0">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 group cursor-pointer">
          <h2 className="text-xl font-bold text-zinc-900">{title}</h2>
          <div className="bg-zinc-100 rounded-full p-1">
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded-full transition-all bg-white ${canScrollLeft
              ? "bg-zinc-100 hover:bg-zinc-200 cursor-pointer opacity-100"
              : "bg-zinc-100 cursor-default opacity-50"
              }`}
          >
            <ChevronLeft className={`w-4 h-4 ${canScrollLeft
              ? "opacity-100"
              : "opacity-50"
              }`} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded-full transition-all bg-white ${canScrollRight
              ? "bg-zinc-100 hover:bg-zinc-200 cursor-pointer opacity-100"
              : "bg-zinc-100 cursor-default opacity-50"
              }`}
          >
            <ChevronRight className={`w-4 h-4 ${canScrollLeft
              ? "opacity-100"
              : "opacity-50"
              }`} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {properties.map((prop, index) => (
          <div key={index} className="snap-start first:pl-0">
            <PropertyCard property={prop} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
