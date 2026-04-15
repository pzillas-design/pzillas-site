import Image from "next/image";

interface UxuiCardProps {
  title: string;
  description: string;
  image: string;
}

export default function UxuiCard({ title, description, image }: UxuiCardProps) {
  return (
    <div className="flex flex-col gap-xs">
      <div className="relative aspect-[16/10] overflow-hidden bg-white/5 rounded">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <h3 className="font-mono text-sm tracking-widest uppercase text-white">{title}</h3>
      <p className="font-sans text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
}
