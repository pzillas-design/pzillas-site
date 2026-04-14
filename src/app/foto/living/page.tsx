import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhotoGrid from "@/components/PhotoGrid";
import Link from "next/link";

const images = [
  { src: "/images/living/drohne-0006.jpg", alt: "Drohnenfotografie" },
  { src: "/images/living/immo-0007.jpg", alt: "Immobilienfotografie" },
  { src: "/images/living/immo-0012.jpg", alt: "Immobilienfotografie" },
  { src: "/images/living/drohne-0007.jpg", alt: "Drohnenfotografie" },
  { src: "/images/living/immo-0003.jpg", alt: "Immobilienfotografie" },
  { src: "/images/living/immo-0009.jpg", alt: "Immobilienfotografie" },
  { src: "/images/living/bild3.jpg", alt: "Interieur" },
];

export default function LivingPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="px-6 md:px-12 py-16 max-w-5xl mx-auto">
          <h1 className="font-mono text-3xl md:text-5xl font-bold tracking-tight uppercase text-white mb-8 leading-tight">
            Lebensräume<br />meisterhaft<br />Inszeniert.
          </h1>
          <p className="font-sans text-base text-white/60 leading-relaxed max-w-2xl mb-12">
            Mit Professionalität und einem tiefen Verständnis dafür, wie gute Fotografie Szenen zum
            Leben erweckt, versuche ich, Räume nicht nur abzubilden, sondern ihre Essenz einfangen
            und eine Atmosphäre zu schaffen, die den Betrachter emotional anspricht. Beim Fotografieren
            nehme ich mir Zeit, um jeden Raum aus mehreren Perspektiven einzufangen. Ich arbeite mit
            verschiedenen Kameras, inklusive 360°-Kameras und Drohnen. In der Nachbearbeitung wähle
            ich die Motive aus, die am besten zusammen wirken.
          </p>
          <PhotoGrid images={images} columns={3} />
          <div className="mt-12 py-12 border-t border-white/10 text-center">
            <p className="font-mono text-sm tracking-widest uppercase text-white mb-4">
              Bereit für beeindruckende Bilder?
            </p>
            <a
              href="mailto:pzillas2@gmail.com"
              className="font-sans text-sm tracking-widest uppercase border border-white/30 px-8 py-3 hover:bg-white hover:text-black transition-all"
            >
              Kontaktieren
            </a>
          </div>
        </section>
        <nav className="flex justify-between px-6 md:px-12 py-6 border-t border-white/10 font-sans text-sm text-white/40">
          <span />
          <Link href="/foto/events" className="hover:text-white transition-colors">
            Weiter → Events
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  );
}
