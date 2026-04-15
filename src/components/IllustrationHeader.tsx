import Image from "next/image";

interface IllustrationHeaderProps {
  title: string;
  illustration: string;
  italic?: boolean;
}

export default function IllustrationHeader({
  title,
  illustration,
  italic = false,
}: IllustrationHeaderProps) {
  return (
    <section className="relative h-[360px] flex items-center px-6 md:px-12 overflow-hidden border-t border-white/[0.06]">
      <Image
        src={illustration}
        alt=""
        fill
        className="object-contain object-left opacity-15 pointer-events-none"
      />
      <h2
        className={`relative z-10 font-mono font-bold tracking-tight leading-none ${
          italic ? "italic" : ""
        }`}
        style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
      >
        {title}
      </h2>
    </section>
  );
}
