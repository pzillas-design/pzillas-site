import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhotoGrid from "@/components/PhotoGrid";
import Link from "next/link";

const images = [
  { src: "/images/events/dsc00793.jpg", alt: "Event" },
  { src: "/images/events/web1d223.jpg", alt: "Event" },
  { src: "/images/events/dsc07273.jpg", alt: "Event" },
  { src: "/images/events/da2ecba0.jpg", alt: "Event" },
  { src: "/images/events/webfedd.jpg", alt: "Event" },
  { src: "/images/events/dsc00631.jpg", alt: "Event" },
];

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="px-6 md:px-12 py-16 max-w-5xl mx-auto">
          <h1 className="font-mono text-3xl md:text-5xl font-bold tracking-tight uppercase text-white mb-12 leading-tight">
            Bring your<br />Community<br />closer
          </h1>
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
          <Link href="/foto/living" className="hover:text-white transition-colors">
            ← Living
          </Link>
          <Link href="/foto/people" className="hover:text-white transition-colors">
            Weiter → People
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  );
}
