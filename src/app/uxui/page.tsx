import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

/* ── Data ─────────────────────────────────────────────────── */

const projects = [
  {
    label: "Tososto",
    image: "/images/uxui/tososto.png",
    href: "/uxui/jakobs",
  },
  {
    label: "600kids",
    image: "/images/uxui/600kids.png",
    href: "/uxui/jakobs",
  },
  {
    label: "Jakob Admin",
    image: "/images/uxui/jakob-admin.jpg",
    href: "/uxui/jakobs",
  },
  {
    label: "Staatstheater",
    image: "/images/uxui/staatstheater.png",
    href: "/uxui/jakobs",
  },
  {
    label: "Florian Zimmer",
    image: "/images/uxui/florian.jpg",
    href: "/uxui/jakobs",
  },
  {
    label: "Leasehub",
    image: "/images/uxui/leasehub.jpg",
    href: "/uxui/jakobs",
  },
];

/* ── Page ──────────────────────────────────────────────────── */

export default function UxuiPage() {
  return (
    <>
      <Header />
      <main className="pt-[74px]">
        {/* ── Topic Hero ── */}
        <section className="relative py-xl overflow-hidden">
          <Image
            src="/images/illus-uxui-vector2.svg"
            alt=""
            fill
            className="object-contain object-center opacity-20"
          />
          <h1 className="relative z-10 font-mono text-[clamp(3rem,9vw,8.125rem)] font-normal tracking-tight uppercase text-white text-center leading-[1.13]">
            UX/UI Design
          </h1>
        </section>

        {/* ── Project Grid ── */}
        <section className="p-[40px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
            {projects.map((p, i) => (
              <div key={p.label}>
                <div className="w-full h-[504px] relative rounded overflow-hidden bg-white/5">
                  <Image
                    src={p.image}
                    alt={p.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {i < 2 && (
                  <p className="font-mono text-[40px] uppercase text-white mt-sm">
                    {p.label}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
