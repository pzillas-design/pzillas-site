import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UxuiCard from "@/components/UxuiCard";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Tososto",
    description:
      "Eine Plattform, die Projektentwickler, Investoren, Bau- und Fachfirmen zusammenführt, um nachhaltige Immobilienprojekte zu realisieren.",
    image: "/images/uxui/tososto.png",
  },
  {
    title: "600kids.org",
    description:
      "Webseite für eine Wohltätigkeitsorganisation für Kinder in Myanmar.",
    image: "/images/uxui/600kids.png",
  },
  {
    title: "LEASEHUB",
    description:
      "Software u.A. zum Erstellen von Leasingverträgen. Klares UI und automatisierbare Workflows unterstützen den Anwender für mehr Effizienz in der Kundenbetreuung.",
    image: "/images/uxui/leasehub.jpg",
  },
  {
    title: "FLORIANZIMMER TICKETSHOP",
    description:
      "Ticketsystem für das Florian Zimmer Theater mit Webshop und CMS, und Ticket Validierung.",
    image: "/images/uxui/florian.jpg",
  },
  {
    title: "Staatstheater Darmstadt",
    description:
      "\u201eRewriting the map\u201c \u2013 Eine App um die Stadtkarte von Darmstadt neu zu schreiben, eigene Spuren zu hinterlassen, sich mit Menschen vernetzen, sich zu gemeinsamen Spazierg\u00e4ngen verabreden und Dinge zu tauschen.",
    image: "/images/uxui/staatstheater.png",
  },
  {
    title: "JAKOB AdminPortal",
    description:
      "Software zur Koordination von Aufgaben, Touren, Kontakten und Ressourcen eines Dienstleisters im Bereich Wassertechnik.",
    image: "/images/uxui/jakob-admin.jpg",
  },
  {
    title: "JAKOB TECHNIKER-APP",
    description:
      "Die App erfasst Tätigkeiten, Zeiten, fertigt Berichte an, digitalisiert den vorher papierlastigen Arbeitsalltag von Kundendiensttechnikern.",
    image: "/images/uxui/jakob-techniker.jpg",
  },
  {
    title: "QR MINE APP",
    description:
      "QR Mine hilft dabei, verlorene Sachen wiederzufinden. Man kann aufklebbare QR-Codes bestellen, Finder können anschließend über die Web-App den Besitzer kontaktieren.",
    image: "/images/uxui/qrmine-secondary.jpg",
  },
  {
    title: "EV MOOSBURG",
    description:
      "Ticketshop für den Eishockeyclub Moosburg, mit CMS und Ticket-Validator.",
    image: "/images/uxui/evmoosburg.jpg",
  },
  {
    title: "Bout (Concept)",
    description:
      "Sport-Tracking-App mit Fokus auf Outdoor-Aktivitäten, ermöglicht Spielanalyse und bietet eine interaktive Karte für Sportstätten.",
    image: "/images/uxui/bout.jpg",
  },
];

export default function UxuiPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Header Banner */}
        <div className="relative h-48 md:h-64 w-full overflow-hidden">
          <Image
            src="/images/uxui/ux.png"
            alt="UX/UI Design"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center px-6 md:px-12">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/60">
              UX / UI Design
            </p>
          </div>
        </div>

        {/* Project Grid */}
        <section className="px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((p) => (
              <UxuiCard key={p.title} {...p} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 py-16 border-t border-white/10 text-center">
            <p className="font-sans text-base md:text-lg text-white/70 mb-6">
              Lasst uns gemeinsam etwas Umwerfendes entwickeln.
            </p>
            <Link
              href="/kontakt"
              className="font-sans text-sm tracking-widest uppercase border border-white/30 px-8 py-3 hover:bg-white hover:text-black transition-all"
            >
              Kontakt
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
