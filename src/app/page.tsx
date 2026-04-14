import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import UxuiCard from "@/components/UxuiCard";
import Image from "next/image";
import Link from "next/link";

const videos = [
  { type: "youtube" as const, id: "TZHdM6rKTZI", title: "Endstation Teneriffa" },
  { type: "vimeo" as const, id: "636544067", hash: "f4c30a3698", title: "Augmented Spaces" },
  { type: "youtube" as const, id: "CEKRLxDiFQU", title: "Ein Tag mit ITler Evgenij" },
];

const uxuiPreview = [
  {
    title: "Tososto",
    description: "Plattform für nachhaltige Immobilienprojekte.",
    image: "/images/uxui/tososto.png",
  },
  {
    title: "600kids.org",
    description: "Webseite für eine Wohltätigkeitsorganisation für Kinder in Myanmar.",
    image: "/images/uxui/600kids.png",
  },
  {
    title: "LEASEHUB",
    description: "Software zum Erstellen von Leasingverträgen mit klarem UI.",
    image: "/images/uxui/leasehub.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero / Über mich */}
        <section className="px-6 md:px-12 py-24 md:py-36 max-w-4xl mx-auto">
          <h1 className="font-mono text-4xl md:text-6xl font-bold tracking-tight text-white uppercase mb-8 leading-tight">
            Medien&shy;designer.
          </h1>
          <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
            Ich bin Michael Pzillas, freischaffender Mediendesigner und lebe in Frankfurt.
            Ich fühle mich in allen Bereichen der Kommunikation zu Hause, von Webdesign bis zu
            Videoproduktion, und liebe es, Dinge neu zu denken. Mein Grundsatz dabei lautet:
            Gestaltung ist nur so gut wie die Idee, der sie Form verleiht.
          </p>
          <div className="mt-10">
            <a
              href="mailto:pzillas2@gmail.com"
              className="font-sans text-sm tracking-widest uppercase border border-white/30 px-8 py-3 hover:bg-white hover:text-black transition-all"
            >
              Kontakt
            </a>
          </div>
        </section>

        {/* Videos */}
        <section className="px-6 md:px-12 py-16 border-t border-white/10">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/40 mb-10">Videos</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((v) => (
              <div key={v.id}>
                <VideoEmbed {...v} />
                <p className="font-sans text-sm text-white/50 mt-3">{v.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* UX/UI */}
        <section className="px-6 md:px-12 py-16 border-t border-white/10">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/40 mb-10">
            UX / UI Design
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {uxuiPreview.map((p) => (
              <UxuiCard key={p.title} {...p} />
            ))}
          </div>
          <Link
            href="/uxui"
            className="font-sans text-sm tracking-widest uppercase text-white/50 hover:text-white transition-colors"
          >
            Alle Projekte →
          </Link>
        </section>

        {/* Fotografie */}
        <section className="px-6 md:px-12 py-16 border-t border-white/10">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/40 mb-10">
            Fotografie
          </p>
          <div className="relative aspect-[16/7] overflow-hidden mb-8">
            <Image
              src="/images/drohne.jpg"
              alt="Fotografie"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          <blockquote className="font-sans text-white/50 italic mb-6">
            „Sehr schnell, sehr unkompliziert und sehr gut gestaltet." — Sven
          </blockquote>
          <Link
            href="/foto"
            className="font-sans text-sm tracking-widest uppercase text-white/50 hover:text-white transition-colors"
          >
            Fotografie →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
