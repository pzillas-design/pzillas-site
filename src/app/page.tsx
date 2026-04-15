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
  { src: "/images/uxui/tososto.png",        label: "Tososto",       href: "/uxui" },
  { src: "/images/uxui/600kids.png",         label: "600kids",       href: "/uxui" },
  { src: "/images/uxui/leasehub.jpg",        label: "Leasehub",      href: "/uxui" },
  { src: "/images/uxui/florian.jpg",         label: "Florian Zimmer",href: "/uxui" },
  { src: "/images/uxui/staatstheater.png",   label: "Staatstheater", href: "/uxui" },
  { src: "/images/uxui/jakob-admin.jpg",     label: "Jakob Admin",   href: "/uxui" },
  { src: "/images/uxui/jakob-techniker.jpg", label: "Jakob App",     href: "/uxui" },
  { src: "/images/uxui/qrmine-secondary.jpg",label: "QR Mine",       href: "/uxui" },
  { src: "/images/uxui/evmoosburg.jpg",      label: "EV Moosburg",   href: "/uxui" },
  { src: "/images/uxui/bout.jpg",            label: "Bout",          href: "/uxui" },
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
        <section className="px-6 md:px-12 pt-16 pb-10">
          <h1 className="font-mono font-bold tracking-tight leading-none text-center mb-6"
            style={{ fontSize: "clamp(2.5rem, 9vw, 5rem)" }}>
            CRISPY PIXELS.
          </h1>

          {/* Geometric art container */}
          <div className="relative w-full rounded-lg overflow-hidden bg-[#0d0d0d]" style={{ aspectRatio: "16/6" }}>
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
              <div className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center bg-black/20">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white ml-0.5" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row gap-12 md:gap-20 items-center border-t border-white/[0.06]">
          <div className="flex-1">
            <p className="font-mono font-bold leading-tight tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              FOTOS<br />VIDEOS<br />UX/UI
            </p>
          </div>
          <div className="flex-1">
            <p className="font-sans text-base text-[#ccc] leading-7 max-w-lg">
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

        {/* ── Videos ── */}
        <IllustrationHeader
          title="Videos"
          illustration="/images/illus-fotos-vector.svg"
          italic
        />

        <section className="px-6 md:px-12 py-12 flex flex-col gap-16">
          {videos.map((v, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
              <div className="flex-1">
                <div className="font-mono font-bold leading-tight tracking-tight text-white mb-5"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                  {v.titleLines.map((line) => <p key={line}>{line}</p>)}
                </div>
                <p className="font-sans text-[#999] text-base leading-7 max-w-sm mb-5">
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
              <div className="w-full md:flex-1 relative rounded-lg overflow-hidden bg-white/5"
                style={{ height: "320px" }}>
                <Image
                  src={v.image}
                  alt={v.titleLines.join(" ")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </section>

        {/* ── UX/UI ── */}
        <IllustrationHeader
          title="UX/UI Design"
          illustration="/images/illus-uxui-vector2.svg"
        />
        <section className="pb-10">
          <GallerySlider items={uxuiProjects} itemWidth={380} itemHeight={320} />
        </section>

        {/* ── Fotografie ── */}
        <IllustrationHeader
          title="Fotografie"
          illustration="/images/illus-foto-vector4.svg"
          italic
        />
        <section className="pb-10">
          <GallerySlider items={fotoCategories} itemWidth={600} itemHeight={420} />
        </section>

        {/* ── Testimonial ── */}
        <section className="px-6 md:px-20 py-24 text-center border-t border-white/[0.06]">
          <blockquote className="font-mono font-bold leading-tight tracking-tight max-w-3xl mx-auto mb-5"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}>
            »SEHR SCHNELL, SEHR UNKOMPLIZIERT UND SEHR GUT GESTALTET.«
          </blockquote>
          <cite className="font-sans text-[#555] text-sm not-italic">
            Sven, Salto Film UG
          </cite>
        </section>

        {/* ── Kontakt CTA ── */}
        <section className="px-6 md:px-12 py-16 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="font-mono font-bold tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
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
