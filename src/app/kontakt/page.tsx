import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen">
        <section className="px-6 md:px-12 py-24 max-w-2xl mx-auto">
          <h1 className="font-mono text-3xl md:text-5xl font-bold tracking-tight uppercase text-white mb-8">
            Kontakt
          </h1>
          <p className="font-sans text-base text-white/60 leading-relaxed mb-12">
            Erleben Sie Beratung neu – ungebunden, ergebnisorientiert. Meine Zusage? Nur, wenn ich
            Ihrem Projekt echten Mehrwert verleihen kann. Jedes Design-Projekt startet mit einem
            kostenlosen grafischen Entwurf.
          </p>
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/40 mb-1">
                E-Mail
              </p>
              <a
                href="mailto:pzillas2@gmail.com"
                className="font-sans text-white hover:text-white/70 transition-colors"
              >
                pzillas2@gmail.com
              </a>
            </div>
            <div>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/40 mb-1">
                Telefon
              </p>
              <a
                href="tel:+4915906401995"
                className="font-sans text-white hover:text-white/70 transition-colors"
              >
                +49 159 06401995
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10">
            <Link
              href="/impressum"
              className="font-sans text-sm text-white/30 hover:text-white/60 transition-colors"
            >
              Impressum
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
