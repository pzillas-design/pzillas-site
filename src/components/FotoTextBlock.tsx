import Link from "next/link";

interface FotoTextBlockProps {
  title: string;
  description?: string;
  showButton?: boolean;
}

export default function FotoTextBlock({ title, description, showButton = false }: FotoTextBlockProps) {
  return (
    <section className="flex flex-col gap-lg items-center justify-center p-xl text-center">
      <h1 className="font-mono text-[clamp(2.5rem,8vw,8.125rem)] font-normal uppercase text-white leading-[1.13]">
        {title}
      </h1>
      {description && (
        <p className="font-sans text-base text-white leading-relaxed max-w-[800px]">
          {description}
        </p>
      )}
      {showButton && (
        <Link
          href="/kontakt"
          className="font-sans text-base font-bold text-black bg-white px-[36px] py-[14px] hover:bg-white/90 transition-colors uppercase"
        >
          Kontaktieren
        </Link>
      )}
    </section>
  );
}
