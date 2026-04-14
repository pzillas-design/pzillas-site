import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhotoGrid from "@/components/PhotoGrid";
import Link from "next/link";

const images = [
  { src: "/images/people/web32b.jpg", alt: "Portrait" },
  { src: "/images/people/web50e.jpg", alt: "Portrait" },
  { src: "/images/people/web1d2.jpg", alt: "Portrait" },
  { src: "/images/people/dsc07273.jpg", alt: "Portrait" },
  { src: "/images/people/bildschirm.jpg", alt: "Portrait" },
  { src: "/images/people/dsc07760.jpg", alt: "Portrait" },
  { src: "/images/people/p1210241.jpg", alt: "Portrait" },
  { src: "/images/people/dsc07480.jpg", alt: "Portrait" },
];

export default function PeoplePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="px-6 md:px-12 py-16 max-w-5xl mx-auto">
          <h1 className="font-mono text-3xl md:text-5xl font-bold tracking-tight uppercase text-white mb-8 leading-tight">
            Szenen<br />des Lebens
          </h1>
          <p className="font-sans text-base text-white/60 leading-relaxed max-w-2xl mb-12">
            Als Fotograf ist meine Kamera nicht nur ein Werkzeug, sondern auch ein Spiegel meiner
            Wahrnehmung. In jedes Foto, das ich auswähle und bearbeite, fließen unweigerlich meine
            Vorlieben und mein Blick auf die Welt mit ein. Dieser Blick ist geprägt von einer
            Wertschätzung für das Ruhige, das Sinnliche aber auch für Neugier und Philanthropie.
          </p>
          <PhotoGrid images={images} columns={3} />
        </section>
        <nav className="flex justify-between px-6 md:px-12 py-6 border-t border-white/10 font-sans text-sm text-white/40">
          <Link href="/foto/events" className="hover:text-white transition-colors">
            ← Events
          </Link>
          <span />
        </nav>
      </main>
      <Footer />
    </>
  );
}
