import Image from "next/image";
import Link from "next/link";

/* ── Marquee CSS ──────────────────────────────────────────── */
const marqueeStyle = `
  @keyframes marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .marquee-track { animation: marquee 28s linear infinite; }
`;

const disciplines = [
  "FOTOGRAFIE",
  "UX/UI DESIGN",
  "VIDEOPRODUKTION",
  "WEBENTWICKLUNG",
  "MOTION",
  "BRANDING",
];

const works = [
  { src: "/images/expose.jpg",           title: "Exposé",            cat: "FOTOGRAFIE", href: "/foto/living" },
  { src: "/images/uxui/tososto.png",     title: "Tososto",           cat: "UX/UI",      href: "/uxui" },
  { src: "/images/leavenoonebehind.jpg", title: "#LEAVENOONEBEHIND", cat: "EVENTS",     href: "/foto/events" },
  { src: "/images/foto-drone.jpg",       title: "Aerial",            cat: "FOTOGRAFIE", href: "/foto" },
];

const videoList = [
  { num: "01", title: "Endstation Teneriffa",  platform: "YouTube", href: "https://www.youtube.com/watch?v=TZHdM6rKTZI" },
  { num: "02", title: "Augmented Spaces",      platform: "Vimeo",   href: "https://vimeo.com/636544067" },
  { num: "03", title: "IT'ler Evgenij · Telroth", platform: "YouTube", href: "https://www.youtube.com/watch?v=CEKRLxDiFQU" },
];

export default function V2() {
  const track = [...disciplines, ...disciplines]; // doubled for seamless loop

  return (
    <div
      className="bg-black text-white min-h-screen overflow-x-hidden"
      style={{ fontFamily: "var(--font-sans, 'Space Grotesk', system-ui, sans-serif)" }}
    >
      <style>{marqueeStyle}</style>

      {/* ━━ NAV ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-5 bg-black/80 backdrop-blur-md border-b border-white/[0.06]">
        <Link
          href="/"
          className="font-mono text-[10px] tracking-[0.2em] text-white/30 hover:text-white/70 transition-colors"
        >
          ← PZILLAS.COM
        </Link>
        <span className="font-mono text-[10px] tracking-[0.2em] text-white/20 select-none">
          V2 · 2025
        </span>
        <div className="flex gap-8">
          {[
            { label: "UX/UI",   href: "/uxui" },
            { label: "FOTO",    href: "/foto" },
            { label: "KONTAKT", href: "/kontakt" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="font-mono text-[10px] tracking-[0.2em] text-white/40 hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* ━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="min-h-screen pt-[62px] grid grid-cols-1 md:grid-cols-[1fr_1fr]">

        {/* Left: editorial text */}
        <div className="flex flex-col justify-between px-8 md:px-12 pt-16 pb-8">
          <div>
            <p className="font-mono text-[#FF2D2D] text-[10px] tracking-[0.3em] mb-10">001</p>
            <h1
              className="font-mono font-bold leading-[0.88] tracking-[-0.03em] text-white mb-10"
              style={{ fontSize: "clamp(4rem, 10vw, 7.5rem)" }}
            >
              CRISPY<br />PIXELS.
            </h1>
            <div className="mb-10">
              <p className="font-sans text-[#999] text-sm tracking-wide leading-relaxed">Michael Pzillas</p>
              <p className="font-sans text-[#555] text-sm tracking-wide leading-relaxed">Freischaffender Mediendesigner</p>
              <p className="font-sans text-[#444] text-sm tracking-wide leading-relaxed">Frankfurt am Main</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Fotografie", "UX/UI", "Video", "Web"].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-[0.15em] border border-white/15 px-3 py-1.5 text-white/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 md:mt-0">
            <div className="h-px bg-white/8 mb-6" />
            <div className="flex items-center justify-between">
              <span className="font-sans text-[#444] text-xs">Verfügbar für Projekte</span>
              <a
                href="mailto:pzillas2@gmail.com"
                className="font-mono text-[10px] tracking-[0.15em] text-[#FF2D2D] hover:text-white transition-colors"
              >
                ANFRAGE STELLEN →
              </a>
            </div>
          </div>
        </div>

        {/* Right: hero photo */}
        <div className="relative min-h-[55vh] md:min-h-0">
          <Image
            src="/images/foto-drone.jpg"
            alt="Pzillas"
            fill
            className="object-cover object-center"
            sizes="50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent md:from-black/30" />
        </div>
      </section>

      {/* ━━ MARQUEE STRIP ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="border-y border-white/[0.06] py-3 overflow-hidden">
        <div className="marquee-track flex gap-14 whitespace-nowrap">
          {track.map((d, i) => (
            <span key={i} className="font-mono text-[10px] tracking-[0.25em] text-white/25 shrink-0">
              {d} ·
            </span>
          ))}
        </div>
      </div>

      {/* ━━ SELECTED WORKS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="px-8 md:px-12 pt-20 pb-24">
        <SectionHeader num="002" title={"AUSGEWÄHLTE\nARBEITEN"} />

        <div className="grid grid-cols-12 gap-3 mt-14">
          <WorkCard {...works[0]} className="col-span-12 md:col-span-8" aspect="aspect-[4/3]" sizes="(max-width: 768px) 100vw, 67vw" />
          <WorkCard {...works[1]} className="col-span-12 md:col-span-4" aspect="aspect-[4/3]" sizes="(max-width: 768px) 100vw, 33vw" />
          <WorkCard {...works[2]} className="col-span-12 md:col-span-4" aspect="aspect-[4/3]" sizes="(max-width: 768px) 100vw, 33vw" />
          <WorkCard {...works[3]} className="col-span-12 md:col-span-8" aspect="aspect-[4/3]" sizes="(max-width: 768px) 100vw, 67vw" />
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="/uxui"
            className="font-mono text-[10px] tracking-[0.2em] text-white/25 hover:text-white transition-colors"
          >
            ALLE PROJEKTE →
          </Link>
        </div>
      </section>

      {/* ━━ VIDEOS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="px-8 md:px-12 pt-20 pb-24 border-t border-white/[0.06]">
        <SectionHeader num="003" title="VIDEOS" />

        <div className="mt-14 flex flex-col">
          {videoList.map((v) => (
            <a
              key={v.num}
              href={v.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-6 border-b border-white/[0.06] hover:border-white/20 transition-colors"
            >
              <div className="flex items-center gap-8">
                <span className="font-mono text-[#333] text-[10px] tracking-[0.2em] w-6 shrink-0">
                  {v.num}
                </span>
                <span
                  className="font-mono font-bold text-white group-hover:text-[#FF2D2D] transition-colors tracking-tight"
                  style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.75rem)" }}
                >
                  {v.title}
                </span>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#444]">{v.platform}</span>
                <span className="text-white/20 group-hover:text-white/50 transition-colors">→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ━━ ÜBER MICH ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="px-8 md:px-12 pt-20 pb-24 border-t border-white/[0.06]">
        <SectionHeader num="004" title="ÜBER MICH" />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <blockquote
            className="font-mono font-bold leading-[1.0] tracking-tight text-white"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3.25rem)" }}
          >
            „Gestaltung ist nur so gut wie die Idee, der sie Form verleiht."
          </blockquote>

          <div className="flex flex-col gap-8">
            <p className="font-sans text-[#999] text-base leading-relaxed">
              Ich bin Michael Pzillas, freischaffender Mediendesigner und lebe in Frankfurt.
              Ich fühle mich in allen Bereichen der Kommunikation zu Hause — von
              Webentwicklung und UX/UI-Design bis hin zu Fotografie und Videoproduktion.
            </p>
            <div className="border-l-2 border-[#FF2D2D] pl-6">
              <p className="font-mono text-white text-sm leading-relaxed mb-2">
                »SEHR SCHNELL, SEHR UNKOMPLIZIERT UND SEHR GUT GESTALTET.«
              </p>
              <p className="font-sans text-[#555] text-xs">Sven, Salto Film UG</p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━ KONTAKT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="px-8 md:px-12 pt-20 pb-32 border-t border-white/[0.06]">
        <SectionHeader num="005" title="KONTAKT" />

        <div className="mt-14">
          <a
            href="mailto:pzillas2@gmail.com"
            className="block font-mono font-bold leading-[0.9] tracking-[-0.02em] text-white hover:text-[#FF2D2D] transition-colors duration-300 break-all"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            pzillas2<br />@gmail.com
          </a>
          <p className="font-sans text-[#444] text-sm mt-8">+49 159 06401995</p>
        </div>
      </section>

      {/* ━━ FOOTER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <footer className="px-8 md:px-12 py-6 border-t border-white/[0.06] flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.2em] text-white/20">
          PZILLAS · FRANKFURT · 2025
        </span>
        <div className="flex gap-6">
          {[
            { label: "IMPRESSUM", href: "/impressum" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="font-mono text-[10px] tracking-[0.2em] text-white/20 hover:text-white/60 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
}

/* ── Sub-components ───────────────────────────────────────── */

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-baseline gap-5 pb-5 border-b border-white/[0.06]">
      <span className="font-mono text-[#FF2D2D] text-[10px] tracking-[0.3em] shrink-0">{num}</span>
      <h2
        className="font-mono font-bold tracking-tight text-white whitespace-pre-line"
        style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
      >
        {title}
      </h2>
    </div>
  );
}

function WorkCard({
  src,
  title,
  cat,
  href,
  className = "",
  aspect = "aspect-[4/3]",
  sizes = "50vw",
}: {
  src: string;
  title: string;
  cat: string;
  href: string;
  className?: string;
  aspect?: string;
  sizes?: string;
}) {
  return (
    <Link href={href} className={`group relative overflow-hidden block ${aspect} ${className}`}>
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        sizes={sizes}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <p className="font-mono text-[10px] tracking-[0.25em] text-white/40 mb-1.5">{cat}</p>
        <p className="font-mono font-bold text-white text-lg md:text-xl tracking-tight">{title}</p>
      </div>
    </Link>
  );
}
