"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface GalleryItem {
  src: string;
  label?: string;
  href?: string;
}

interface GallerySliderProps {
  items: GalleryItem[];
  itemWidth?: number;
  itemHeight?: number;
}

export default function GallerySlider({
  items,
  itemWidth = 420,
  itemHeight = 380,
}: GallerySliderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) =>
    ref.current?.scrollBy({ left: dir * (itemWidth + 16), behavior: "smooth" });

  return (
    <div className="pl-6 md:pl-12">
      <div
        ref={ref}
        className="no-scrollbar flex gap-4 overflow-x-auto pb-2"
        style={{ scrollbarWidth: "none" }}
      >
        {items.map((item) => {
          const card = (
            <div className="shrink-0 group" style={{ width: itemWidth }}>
              <div
                className="relative rounded-lg overflow-hidden bg-white/5"
                style={{ width: itemWidth, height: itemHeight }}
              >
                <Image
                  src={item.src}
                  alt={item.label || ""}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes={`${itemWidth}px`}
                />
              </div>
              {item.label && (
                <p className="font-mono text-xs tracking-widest uppercase text-white/50 mt-3 group-hover:text-white transition-colors">
                  {item.label}
                </p>
              )}
            </div>
          );

          if (item.href) {
            return (
              <Link key={item.src} href={item.href} className="shrink-0">
                {card}
              </Link>
            );
          }
          return <div key={item.src}>{card}</div>;
        })}
      </div>

      {/* Arrows */}
      <div className="flex gap-4 mt-4 pr-6 md:pr-12 justify-end">
        <button
          onClick={() => scroll(-1)}
          className="opacity-50 hover:opacity-100 transition-opacity"
          aria-label="Previous"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/arrow-left.svg" className="h-7 w-auto" alt="" />
        </button>
        <button
          onClick={() => scroll(1)}
          className="opacity-50 hover:opacity-100 transition-opacity"
          aria-label="Next"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/arrow-right.svg" className="h-9 w-auto" alt="" />
        </button>
      </div>
    </div>
  );
}
