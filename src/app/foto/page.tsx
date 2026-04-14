import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { label: "Living", href: "/foto/living", image: "/images/foto/architektur.jpg" },
  { label: "Events", href: "/foto/events", image: "/images/foto/events-preview.jpg" },
  { label: "People", href: "/foto/people", image: "/images/foto/personen-preview.jpg" },
];

export default function FotoPage() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen">
        <section className="px-6 md:px-12 py-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/40 mb-12">
            Fotografie
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h2 className="font-mono text-sm tracking-widest uppercase text-white group-hover:text-white/70 transition-colors">
                  {cat.label}
                </h2>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
