import Link from "next/link";

interface FotoSubpageNavProps {
  prevLabel: string;
  prevHref: string;
  nextLabel: string;
  nextHref: string;
}

export default function FotoSubpageNav({
  prevLabel,
  prevHref,
  nextLabel,
  nextHref,
}: FotoSubpageNavProps) {
  return (
    <nav className="flex items-center justify-between p-xl">
      <Link
        href={prevHref}
        className="flex items-center gap-sm group"
      >
        <span className="font-mono text-xl text-white/50 group-hover:text-white transition-colors">
          &lsaquo;
        </span>
        <span className="font-mono text-[clamp(1.5rem,3vw,2.5rem)] uppercase text-white group-hover:text-white/70 transition-colors">
          {prevLabel}
        </span>
      </Link>
      <Link
        href={nextHref}
        className="flex items-center gap-sm group"
      >
        <span className="font-mono text-[clamp(1.5rem,3vw,2.5rem)] uppercase text-white group-hover:text-white/70 transition-colors">
          {nextLabel}
        </span>
        <span className="font-mono text-xl text-white/50 group-hover:text-white transition-colors">
          &rsaquo;
        </span>
      </Link>
    </nav>
  );
}
