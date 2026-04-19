import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IllustrationHeader from "@/components/IllustrationHeader";
import GallerySlider from "@/components/GallerySlider";
import Image from "next/image";
import Link from "next/link";

/* ── Data ─────────────────────────────────────────────────── */

const galleryImages = [
  { src: "/images/expose.jpg",           label: "Exposé" },
  { src: "/images/fashion.jpg",          label: "Fashion" },
  { src: "/images/leavenoonebehind.jpg", label: "#LEAVENOONEBEHIND" },
  { src: "/images/guinness.jpg",         label: "Guinness" },
  { src: "/images/uxui/tososto.png",     label: "Tososto" },
  { src: "/images/uxui/600kids.png",     label: "600kids" },
];

const videos = [
  {
    titleLines: ["ENDSTATION", "TENERIFFA"],
    description: "Das beliebte Urlaubsziel Teneriffa steht einem enormen Anstieg von Migranten bevor, welche vor Konflikten und wirtschaftlicher Unterdrückung in Westafrika nach Europa fliehen.",
    image: "/images/thumbnail-teneriffa.jpg",
    href: "https://www.youtube.com/watch?v=TZHdM6rKTZI",
    platform: "YouTube",
  },
  {
    titleLines: ["AUGMENTED", "SPACES"],
    description: "Ein Kollektiv aus Künstlern und Performern erforscht den virtuellen Raum und verwandelt Kunstwerke in eine Augmented Reality.",
    image: "/images/leavenoonebehind.jpg",
    href: "https://vimeo.com/636544067",
    platform: "Vimeo",
  },
  {
    titleLines: ["EIN TAG MIT", "IT\u2019LER", "EVGENIJ"],
    description: "In der Recruiting-Kampagne für die Firma Telroth begleite ich IT-Spezialisten, Azubis und Vertriebler einen Tag und gebe Einblicke in ihre Berufswelt.",
    image: "/images/thumbnail-telroth.jpg",
    href: "https://www.youtube.com/watch?v=CEKRLxDiFQU",
    platform: "YouTube",
  },
];

const uxuiProjects = [
  { src: "/images/uxui/tososto.png",        label: "Tososto",        href: "/uxui" },
  { src: "/images/uxui/600kids.png",         label: "600kids",        href: "/uxui" },
  { src: "/images/uxui/leasehub.jpg",        label: "Leasehub",       href: "/uxui" },
  { src: "/images/uxui/florian.jpg",         label: "Florian Zimmer", href: "/uxui" },
  { src: "/images/uxui/staatstheater.png",   label: "Staatstheater",  href: "/uxui" },
  { src: "/images/uxui/jakob-admin.jpg",     label: "Jakob Admin",    href: "/uxui" },
  { src: "/images/uxui/jakob-techniker.jpg", label: "Jakob App",      href: "/uxui" },
  { src: "/images/uxui/qrmine-secondary.jpg",label: "QR Mine",        href: "/uxui" },
  { src: "/images/uxui/evmoosburg.jpg",      label: "EV Moosburg",    href: "/uxui" },
  { src: "/images/uxui/bout.jpg",            label: "Bout",           href: "/uxui" },
];

const fotoCategories = [
  { src: "/images/foto/architektur.jpg",    label: "Immobilienfotos", href: "/foto/living" },
  { src: "/images/foto/events-preview.jpg", label: "People & Events", href: "/foto/events" },
];

/* ── Page ──────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[74px] bg-black">

        {/* ── Hero: CRISPY PIXELS. ── */}
        <section className="px-6 md:px-12 pt-20 pb-12 flex flex-col gap-4">
          <h1
            className="font-mono font-bold text-center leading-none tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            CRISPY PIXELS.
          </h1>

          {/* Geometric art container */}
          <div
            className="relative w-full rounded-lg overflow-hidden"
            style={{ aspectRatio: "16/6" }}
          >
            <div className="absolute inset-0 flex">
              {/* Left: red circle-in-square */}
              <div className="flex-1 relative bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/hero-vector-red.svg" alt="" className="absolute inset-0 w-full h-full object-contain" />
              </div>
              {/* Middle: lime green + black chevrons */}
              <div className="flex-1 relative bg-[#80ff00]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/hero-rect-green.svg" alt="" className="absolute inset-0 w-full h-full object-contain" />
              </div>
              {/* Right: blue + black H */}
              <div className="flex-1 relative bg-[#1400ff]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/hero-h-blue.svg" alt="" className="absolute inset-0 w-full h-full object-contain" />
              </div>
            </div>

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 rounded-full border-2 border-white/50 flex items-center justify-center bg-black/20">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white ml-1" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="px-6 md:px-12 py-20 flex flex-col md:flex-row gap-12 md:gap-20 items-start md:items-center border-t border-white/[0.06]">
          <div className="flex-1 min-w-0 w-full">
            <p
              className="font-mono font-bold tracking-[-0.02em]"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: "1.25" }}
            >
              FOTOS<br />VIDEOS<br />UX/UI
            </p>
          </div>
          <div className="flex-1 min-w-0 w-full">
            <p className="font-sans text-base text-[#ccc]" style={{ lineHeight: "28px" }}>
              Ich bin Michael Pzillas, freischaffender Mediendesigner und lebe in Frankfurt.
              Ich fühle mich in allen Bereichen der Kommunikation zu Hause, von Webentwicklung
              und UX/UI-Design bis hin zu Fotografie und Videoproduktion.
            </p>
          </div>
        </section>

        {/* ── PROJEKTE Slider ── */}
        <section className="pb-10">
          <p className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase mb-5 px-6 md:px-12">
            Projekte
          </p>
          <GallerySlider items={galleryImages} itemWidth={420} itemHeight={380} />
        </section>

        {/* 80 px spacer (Figma: "Abstand") */}
        <div className="h-20" />

        {/* ── Videos header ── */}
        <IllustrationHeader
          title="Videos"
          illustration="/images/illus-fotos-vector.svg"
          italic
        />

        {/* ── Videos ── */}
        <section className="px-6 md:px-12 py-12 flex flex-col gap-12">
          {videos.map((v, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-10 md:gap-12 items-start md:items-center">
              {/* Text col — fixed 350 px on desktop, full width on mobile */}
              <div className="w-full md:w-[350px] shrink-0">
                <div
                  className="font-mono font-bold tracking-[-0.01em] leading-tight text-white mb-4"
                  style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)" }}
                >
                  {v.titleLines.map((line) => <p key={line}>{line}</p>)}
                </div>
                <p className="font-sans text-[#999] text-base mb-5" style={{ lineHeight: "24px" }}>
                  {v.description}
                </p>
                <a
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm font-medium text-white tracking-widest uppercase hover:text-[#999] transition-colors"
                >
                  Ansehen auf {v.platform} →
                </a>
              </div>

              {/* Thumbnail — 550 × 340 px on desktop */}
              <div
                className="relative rounded-lg overflow-hidden bg-white/5 w-full md:w-[550px] shrink-0"
                style={{ height: "340px" }}
              >
                <Image
                  src={v.image}
                  alt={v.titleLines.join(" ")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 550px"
                />
              </div>
            </div>
          ))}
        </section>

        {/* 80 px spacer */}
        <div className="h-20" />

        {/* ── UX/UI ── */}
        <IllustrationHeader
          title="UX/UI Design"
          illustration="/images/illus-uxui-vector2.svg"
        />
        <section className="pb-10">
          <GallerySlider items={uxuiProjects} itemWidth={380} itemHeight={320} />
        </section>

        {/* 80 px spacer */}
        <div className="h-20" />

        {/* ── Fotografie ── */}
        <IllustrationHeader
          title="Fotografie"
          illustration="/images/illus-foto-vector4.svg"
          italic
        />
        <section className="pb-10">
          <GallerySlider items={fotoCategories} itemWidth={600} itemHeight={420} />
        </section>

        {/* 80 px spacer */}
        <div className="h-20" />

        {/* ── Testimonial ── */}
        <section className="px-6 md:px-12 py-20 text-center border-t border-white/[0.06]">
          <blockquote
            className="font-mono font-bold tracking-[-0.02em] leading-tight max-w-3xl mx-auto mb-4"
            style={{ fontSize: "clamp(1.5rem, 4vw, 4rem)" }}
          >
            »SEHR SCHNELL, SEHR UNKOMPLIZIERT UND SEHR GUT GESTALTET.«
          </blockquote>
          <cite className="font-sans text-[#999] text-base not-italic">
            Sven, Salto Film UG
          </cite>
        </section>

        {/* ── Kontakt CTA ── */}
        <section className="px-6 md:px-12 py-16 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-8">
          <p
            className="font-mono font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            Bereit für beeindruckende Bilder?
          </p>
          <Link
            href="/kontakt"
            className="font-sans text-sm tracking-widest uppercase border border-white/30 px-8 py-3 hover:bg-white hover:text-black transition-all shrink-0"
          >
            Kontakt
          </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}
