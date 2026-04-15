import Image from "next/image";
import Link from "next/link";

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
  return (
    <div className="pl-lg overflow-hidden">
      <div className="flex gap-sm overflow-x-auto no-scrollbar pb-xs">
        {items.map((item) => {
          const card = (
            <div className="shrink-0 group" style={{ width: itemWidth }}>
              <div
                className="relative rounded overflow-hidden bg-white/5"
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
                <p className="font-mono text-xs tracking-widest uppercase text-white/60 mt-sm group-hover:text-white transition-colors">
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
    </div>
  );
}
