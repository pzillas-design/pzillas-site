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
    <section className="relative h-[420px] flex items-center px-lg overflow-hidden">
      <Image
        src={illustration}
        alt=""
        fill
        className="object-contain object-left opacity-20"
      />
      <h2
        className={`relative z-10 font-mono text-[clamp(3rem,8vw,6rem)] font-bold tracking-tight ${
          italic ? "italic" : ""
        }`}
      >
        {title}
      </h2>
    </section>
  );
}
