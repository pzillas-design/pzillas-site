import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="pt-[74px]">
        <section className="p-xl flex flex-col gap-lg font-sans text-base">
          {/* Title */}
          <p className="text-white">IMPRESSUM</p>

          {/* Betreiber */}
          <div className="flex flex-col gap-xs pt-sm">
            <p className="text-white">Betreiber:</p>
            <div className="text-muted">
              <p>Michael Pzillas</p>
              <p>Lahnstraße 96</p>
              <p>60326 Frankfurt am Main</p>
            </div>
          </div>

          {/* Kontakt */}
          <div className="flex flex-col gap-xs">
            <p className="text-white">Kontakt:</p>
            <a
              href="mailto:pzillas2@gmail.com"
              className="text-muted hover:text-white transition-colors"
            >
              pzillas2@gmail.com
            </a>
          </div>
        </section>

        {/* Bottom spacer */}
        <div className="h-[200px]" />
      </main>
      <Footer />
    </>
  );
}
