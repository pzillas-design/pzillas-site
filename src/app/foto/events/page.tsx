import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FotoTextBlock from "@/components/FotoTextBlock";
import FotoSubpageNav from "@/components/FotoSubpageNav";
import IllustrationHeader from "@/components/IllustrationHeader";
import Image from "next/image";

/* ── Data ─────────────────────────────────────────────────── */

const eventImages = [
  { src: "/images/events/da2ecba0.jpg", alt: "Event 1" },
  { src: "/images/events/dsc00631.jpg", alt: "Event 2" },
  { src: "/images/events/dsc00793.jpg", alt: "Event 3" },
  { src: "/images/events/dsc07273.jpg", alt: "Event 4" },
  { src: "/images/events/web1d223.jpg", alt: "Event 5" },
  { src: "/images/events/webfedd.jpg", alt: "Event 6" },
];

const peopleImages = [
  { src: "/images/people/bildschirm.jpg", alt: "Portrait 1" },
  { src: "/images/people/dsc07273.jpg", alt: "Portrait 2" },
  { src: "/images/people/dsc07480.jpg", alt: "Portrait 3" },
  { src: "/images/people/dsc07760.jpg", alt: "Portrait 4" },
  { src: "/images/people/p1210241.jpg", alt: "Portrait 5" },
  { src: "/images/people/web1d2.jpg", alt: "Portrait 6" },
  { src: "/images/people/web32b.jpg", alt: "Portrait 7" },
  { src: "/images/people/web50e.jpg", alt: "Portrait 8" },
];

/* ── Page ──────────────────────────────────────────────────── */

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="pt-[74px]">
        {/* ── Topic Hero ── */}
        <IllustrationHeader
          title="UX/UI Design"
          illustration="/images/illus-uxui-vector2.svg"
        />

        {/* ── Intro Text ── */}
        <section className="flex flex-col gap-lg items-center justify-center p-xl text-center">
          <p className="font-sans text-base text-white leading-relaxed max-w-[800px]">
            Als Fotograf ist meine Kamera nicht nur ein Werkzeug, sondern auch ein Spiegel meiner
            Wahrnehmung. In jedes Foto, das ich auswähle und bearbeite, fließen unweigerlich meine
            Vorlieben und mein Blick auf die Welt mit ein. Dieser Blick ist geprägt von einer
            Wertschätzung für das Ruhige, das Sinnliche aber auch für Neugier und Philanthropie.
          </p>
        </section>

        {/* ── Events Photo Grid ── */}
        <section className="flex flex-wrap gap-xs">
          {eventImages.map((img) => (
            <div key={img.src} className="relative h-[316px] w-[calc(33.333%-6px)] min-w-[300px] grow">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </section>

        {/* ── Portrait & Business Section ── */}
        <FotoTextBlock
          title="Portain und Buisnes Fotografie"
          description="Als Fotograf ist meine Kamera nicht nur ein Werkzeug, sondern auch ein Spiegel meiner Wahrnehmung. In jedes Foto, das ich auswähle und bearbeite, fließen unweigerlich meine Vorlieben und mein Blick auf die Welt mit ein. Dieser Blick ist geprägt von einer Wertschätzung für das Ruhige, das Sinnliche aber auch für Neugier und Philanthropie."
        />

        {/* ── People Photo Grid ── */}
        <section className="flex flex-wrap gap-xs">
          {peopleImages.map((img) => (
            <div key={img.src} className="relative h-[290px] w-[calc(33.333%-6px)] min-w-[280px] grow">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </section>

        {/* ── CTA ── */}
        <FotoTextBlock title="Bereit für beeindrucknede Bilder?" />

        {/* ── Subpage Navigation ── */}
        <FotoSubpageNav
          prevLabel="Immobilien"
          prevHref="/foto/living"
          nextLabel="Immobilien"
          nextHref="/foto/living"
        />
      </main>
      <Footer />
    </>
  );
}
