import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="pt-[74px]">
        <section className="py-xl flex flex-col items-center overflow-hidden">
          <div className="w-[672px] max-w-full px-lg md:px-0">
            {/* Heading */}
            <h1 className="font-mono text-[64px] font-bold tracking-tight uppercase text-white">
              KONTAKT
            </h1>

            {/* Spacer md */}
            <div className="h-md" />

            {/* Description */}
            <p className="font-sans text-base text-muted leading-relaxed">
              Erleben Sie Beratung neu – ungebunden, ergebnisorientiert. Meine Zusage? Nur, wenn ich
              Ihrem Projekt echten Mehrwert verleihen kann. Jedes Design-Projekt startet mit einem
              kostenlosen grafischen Entwurf.
            </p>

            {/* Spacer lg */}
            <div className="h-lg" />

            {/* Contact Info */}
            <div className="flex flex-col gap-md">
              <div className="flex flex-col gap-xs">
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/30">
                  E-MAIL
                </p>
                <a
                  href="mailto:pzillas2@gmail.com"
                  className="font-sans text-base text-white hover:text-white/70 transition-colors"
                >
                  pzillas2@gmail.com
                </a>
              </div>
              <div className="flex flex-col gap-xs">
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/30">
                  TELEFON
                </p>
                <a
                  href="tel:+4915906401995"
                  className="font-sans text-base text-white hover:text-white/70 transition-colors"
                >
                  +49 159 06401995
                </a>
              </div>
            </div>

            {/* Spacer lg */}
            <div className="h-lg" />

            {/* Divider */}
            <div className="h-px bg-black w-full" />

            {/* Spacer md */}
            <div className="h-md" />

            {/* Impressum Link */}
            <Link
              href="/impressum"
              className="font-sans text-sm text-white/30 hover:text-white/60 transition-colors"
            >
              Impressum
            </Link>
          </div>
        </section>

        {/* Bottom spacer */}
        <div className="h-[200px]" />
      </main>
      <Footer />
    </>
  );
}
