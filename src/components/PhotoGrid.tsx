import Image from "next/image";

interface PhotoGridProps {
  images: { src: string; alt: string }[];
  columns?: 2 | 3;
}

export default function PhotoGrid({ images, columns = 3 }: PhotoGridProps) {
  const colClass = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3";
  return (
    <div className={`grid grid-cols-1 ${colClass} gap-xs`}>
      {images.map((img) => (
        <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
