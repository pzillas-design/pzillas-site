import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen">
        <section className="px-6 md:px-12 py-24 max-w-2xl mx-auto">
          <h1 className="font-mono text-3xl font-bold tracking-tight uppercase text-white mb-12">
            Impressum
          </h1>
          <div className="font-sans text-white/60 leading-relaxed space-y-6">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/40 mb-2">
                Betreiber
              </p>
              <p>Michael Pzillas</p>
              <p>Lahnstraße 96</p>
              <p>60326 Frankfurt am Main</p>
            </div>
            <div>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/40 mb-2">
                Kontakt
              </p>
              <a
                href="mailto:pzillas2@gmail.com"
                className="hover:text-white transition-colors"
              >
                pzillas2@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
