import Link from "next/link";
import Image from "next/image";

const socials = [
  { label: "Mail", href: "mailto:pzillas2@gmail.com" },
  { label: "Instagram", href: "https://instagram.com/pzillas" },
  { label: "YouTube", href: "https://youtube.com/channel/UCG7A7KcwGf2p72k74aZY7Hg" },
  { label: "Vimeo", href: "https://vimeo.com/pzillas" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 flex flex-col items-center gap-6 text-center">
      <Link href="/foto">
        <span className="font-mono text-sm tracking-[0.3em] uppercase text-white hover:text-white/70 transition-colors">
          EVENTS ›
        </span>
      </Link>

      <Link href="/">
        <Image
          src="/images/pzillas-logo.png"
          alt="Pzillas"
          width={160}
          height={60}
          className="h-12 w-auto object-contain"
        />
      </Link>

      <ul className="flex items-center gap-6">
        {socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="font-sans text-sm text-white/50 hover:text-white transition-colors"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
