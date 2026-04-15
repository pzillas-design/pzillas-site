import Link from "next/link";
import Image from "next/image";

const socials = [
  { label: "Mail", href: "mailto:pzillas2@gmail.com", icon: "✉" },
  { label: "Instagram", href: "https://instagram.com/pzillas", icon: "IG" },
  { label: "YouTube", href: "https://youtube.com/channel/UCG7A7KcwGf2p72k74aZY7Hg", icon: "YT" },
  { label: "Vimeo", href: "https://vimeo.com/pzillas", icon: "V" },
];

export default function Footer() {
  return (
    <footer className="bg-black px-lg py-xl flex flex-col items-center gap-md text-center">
      <Link href="/">
        <Image
          src="/images/pzillas-logo.png"
          alt="Pzillas"
          width={240}
          height={100}
          className="h-24 w-auto object-contain"
        />
      </Link>

      <ul className="flex items-center gap-sm">
        {socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="font-sans text-sm text-white/50 hover:text-white transition-colors"
              title={s.label}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
