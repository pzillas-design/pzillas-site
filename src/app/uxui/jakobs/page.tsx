import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

/* ── Data ─────────────────────────────────────────────────── */

const sliderImages = [
  { src: "/images/uxui/jakob-admin.jpg", alt: "Jakob Wassertechnik Admin Portal" },
  { src: "/images/uxui/jakob-techniker.jpg", alt: "Jakob Techniker App" },
];

/* ── Page ──────────────────────────────────────────────────── */

export default function JakobsCasePage() {
  return (
    <>
      <Header />
      <main className="pt-[74px]">
        {/* ── Hero ── */}
        <section className="flex flex-col gap-lg items-center justify-center py-xl">
          <h1 className="font-mono text-[clamp(3rem,9vw,8.125rem)] font-normal uppercase text-white leading-[1.13]">
            Wassertechnik
          </h1>
          <p className="font-sans text-base text-muted leading-relaxed max-w-[680px] text-center px-lg">
            Als Fotograf ist meine Kamera nicht nur ein Werkzeug, sondern auch ein Spiegel meiner
            Wahrnehmung. In jedes Foto, das ich auswähle und bearbeite, fließen unweigerlich meine
            Vorlieben und mein Blick auf die Welt mit ein. Dieser Blick ist geprägt von einer
            Wertschätzung für das Ruhige, das Sinnliche aber auch für Neugier und Philanthropie.
          </p>
          <a
            href="https://jakobs-wassertechnik.de"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-base font-bold text-black bg-white px-[36px] py-[14px] hover:bg-white/90 transition-colors"
          >
            Seite öffnen
          </a>
        </section>

        {/* ── Slider Section ── */}
        <section className="relative h-[700px] md:h-[1036px] overflow-hidden">
          <div className="flex gap-xl items-center justify-center p-xl absolute inset-0">
            {sliderImages.map((img) => (
              <div key={img.src} className="relative h-full aspect-[4/3] shrink-0 rounded overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            ))}
          </div>
          {/* Arrow Left */}
          <button
            className="absolute left-lg top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Vorheriges Bild"
          >
            <span className="text-white text-xl">&lsaquo;</span>
          </button>
          {/* Arrow Right */}
          <button
            className="absolute right-lg top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Nächstes Bild"
          >
            <span className="text-white text-xl">&rsaquo;</span>
          </button>
        </section>

        {/* ── Testimonial ── */}
        <section className="flex flex-col gap-md items-center justify-center px-lg py-xl text-center overflow-hidden">
          <blockquote className="font-sans text-[clamp(1.25rem,3vw,2rem)] font-semibold leading-snug text-white max-w-3xl">
            » ANTWORTET SCHNELL UND ZEIGT DEUTLICH, DASS ER SEINEN JOB MIT LEIDENSCHAFT AUSÜBT. «
          </blockquote>
          <cite className="font-sans text-sm text-muted not-italic">
            Jens, Tososto GmbH
          </cite>
        </section>

        {/* ── Next Article ── */}
        <section className="flex items-center justify-end px-lg py-md">
          <Link
            href="/uxui"
            className="font-sans text-lg font-semibold tracking-[4px] text-white hover:text-white/70 transition-colors"
          >
            600KIDS &gt;
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
