import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FotoTextBlock from "@/components/FotoTextBlock";
import FotoSubpageNav from "@/components/FotoSubpageNav";
import Image from "next/image";

/* ── Data ─────────────────────────────────────────────────── */

const images = [
  { src: "/images/living/immo-0003.jpg", alt: "Immobilien Interieur" },
  { src: "/images/living/immo-0007.jpg", alt: "Immobilien Außenansicht" },
  { src: "/images/living/immo-0009.jpg", alt: "Immobilien Architektur" },
  { src: "/images/living/bild3.jpg", alt: "Wohnraum" },
  { src: "/images/living/drohne-0006.jpg", alt: "Drohnenaufnahme" },
  { src: "/images/living/drohne-0007.jpg", alt: "Luftbild" },
];

/* ── Page ──────────────────────────────────────────────────── */

export default function LivingPage() {
  return (
    <>
      <Header />
      <main className="pt-[74px]">
        <FotoTextBlock
          title="Lebensräume meisterhaft inszeniert"
          description="Mit Professionalität und einem tiefen Verständnis dafür, wie gute Fotografie Szenen zum Leben erweckt, versuche ich, Räume nicht nur abzubilden, sondern ihre Essenz einzufangen und eine Atmosphäre zu schaffen, die den Betrachter emotional anspricht."
        />

        {/* ── Photo Grid ── */}
        <section className="flex flex-wrap gap-xs">
          {images.map((img) => (
            <div key={img.src} className="relative h-[346px] w-[calc(33.333%-6px)] min-w-[300px] grow">
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

        {/* ── Description ── */}
        <div className="px-lg py-lg">
          <p className="font-sans text-base text-[#999] leading-relaxed max-w-[340px]">
            Beim Fotografieren nehme ich mir Zeit, um jeden Raum aus mehreren Perspektiven einzufangen.
            Ich arbeite mit natürlichem Licht, Drohnenaufnahmen und 360°-Kameras, um die Atmosphäre und
            das Raumgefühl authentisch wiederzugeben.
          </p>
        </div>

        {/* ── Subpage Navigation ── */}
        <FotoSubpageNav
          prevLabel="People & Events"
          prevHref="/foto/events"
          nextLabel="People & Events"
          nextHref="/foto/events"
        />
      </main>
      <Footer />
    </>
  );
}
