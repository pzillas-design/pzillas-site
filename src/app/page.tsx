import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IllustrationHeader from "@/components/IllustrationHeader";
import GallerySlider from "@/components/GallerySlider";
import IconButton from "@/components/IconButton";
import Image from "next/image";

/* ── Data ─────────────────────────────────────────────────── */

const galleryImages = [
  { src: "/images/expose.jpg", label: "Exposé" },
  { src: "/images/fashion.jpg", label: "Fashion" },
  { src: "/images/leavenoonebehind.jpg", label: "#LEAVENOONEBEHIND" },
  { src: "/images/guinness.jpg", label: "Guinness" },
  { src: "/images/uxui/tososto.png", label: "Tososto" },
  { src: "/images/uxui/600kids.png", label: "600kids" },
];

const videos = [
  {
    title: "ENDSTATION\nTENERIFFA",
    description:
      "Das beliebte Urlaubsziel Teneriffa steht einem enormen Anstieg von Migranten bevor, welche vor Konflikten und wirtschaftlicher Unterdrückung in Westafrika nach Europa fliehen.",
    image: "/images/thumbnail-teneriffa.jpg",
  },
  {
    title: "AUGMENTED\nSPACES",
    description:
      "Ein Kollektiv aus Künstlern und Performern erforscht den virtuellen Raum und verwandelt Kunstwerke in eine Augmented Reality.",
    image: "/images/thumbnail-augmented.jpg",
  },
  {
    title: "EIN TAG MIT\nITLER\nEVGENIJ",
    description:
      "In der Recruiting-Kampagne für die Firma Telroth begleite ich IT-Spezialisten, Azubis und Vertriebler einen Tag und gebe Einblicke in ihre Berufswelt.",
    image: "/images/thumbnail-telroth.jpg",
  },
];

const uxuiProjects = [
  { src: "/images/uxui/tososto.png", label: "Tososto", href: "/uxui" },
  { src: "/images/uxui/600kids.png", label: "600kids", href: "/uxui" },
  { src: "/images/uxui/leasehub.jpg", label: "Leasehub", href: "/uxui" },
  { src: "/images/uxui/florian.jpg", label: "Florian Zimmer", href: "/uxui" },
  { src: "/images/uxui/staatstheater.png", label: "Staatstheater", href: "/uxui" },
  { src: "/images/uxui/jakob-admin.jpg", label: "Jakob Admin", href: "/uxui" },
  { src: "/images/uxui/jakob-techniker.jpg", label: "Jakob App", href: "/uxui" },
  { src: "/images/uxui/qrmine-secondary.jpg", label: "QR Mine", href: "/uxui" },
  { src: "/images/uxui/evmoosburg.jpg", label: "EV Moosburg", href: "/uxui" },
  { src: "/images/uxui/bout.jpg", label: "Bout", href: "/uxui" },
];

const fotoCategories = [
  { src: "/images/foto/architektur.jpg", label: "Immobilienfotos", href: "/foto/living" },
  { src: "/images/foto/events-preview.jpg", label: "People & Events", href: "/foto/events" },
];

/* ── Page ──────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[74px]">
        {/* ── Hero: CRISPY PIXELS. ── */}
        <section className="px-lg pb-lg pt-xl">
          <h1 className="font-mono text-[clamp(3rem,10vw,5rem)] font-bold tracking-tight leading-[1] text-center mb-sm">
            CRISPY PIXELS.
          </h1>
          <div className="relative w-full aspect-[16/6] rounded-lg overflow-hidden bg-black">
            {/* Geometric Shapes Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Green Triangle */}
              <div className="absolute left-[5%] top-0 bottom-0 w-[33%]">
                <Image
                  src="/images/hero-vector-red.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              {/* Green/Black Rectangle */}
              <div className="absolute left-[33%] top-0 bottom-0 w-[33%]">
                <Image
                  src="/images/hero-rect-green.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              {/* Blue H Shape */}
              <div className="absolute right-[5%] top-0 bottom-0 w-[33%]">
                <Image
                  src="/images/hero-h-blue.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <IconButton variant="play" />
            </div>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="px-lg py-xl flex flex-col md:flex-row gap-xl items-center">
          <div className="flex-1">
            <p className="font-mono text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.25] tracking-tight">
              FOTOS<br />VIDEOS<br />UX/UI
            </p>
          </div>
          <div className="flex-1">
            <p className="font-sans text-base text-[#ccc] leading-[1.75] max-w-lg">
              Ich bin Michael Pzillas, freischaffender Mediendesigner und lebe in Frankfurt. Ich fühle mich in allen Bereichen der Kommunikation zu Hause, von Webentwicklung und UX/UI-Design bis hin zu Fotografie und Videoproduktion.
            </p>
          </div>
        </section>

        {/* ── Gallery Slider ── */}
        <GallerySlider items={galleryImages} itemWidth={420} itemHeight={380} />

        {/* ── Abstand ── */}
        <div className="h-xl" />

        {/* ── Videos ── */}
        <IllustrationHeader
          title="Videos"
          illustration="/images/illus-fotos-vector.svg"
          italic
        />

        {/* ── Video List ── */}
        <section className="px-lg py-lg flex flex-col gap-lg max-w-5xl">
          {videos.map((v) => (
            <div key={v.title} className="flex flex-col md:flex-row gap-lg items-center">
              <div className="flex-1 min-w-[250px]">
                <h3 className="font-mono text-2xl md:text-[32px] font-bold tracking-tight whitespace-pre-line mb-sm leading-[1.1]">
                  {v.title}
                </h3>
                <p className="font-sans text-base text-[#999] leading-relaxed max-w-sm">
                  {v.description}
                </p>
              </div>
              <div className="w-full md:w-[550px] shrink-0 h-[340px] relative rounded overflow-hidden bg-white/5">
                <Image
                  src={v.image}
                  alt={v.title.replace(/\n/g, " ")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 550px"
                />
              </div>
            </div>
          ))}
        </section>

        {/* ── Abstand ── */}
        <div className="h-xl" />

        {/* ── UX/UI Section ── */}
        <IllustrationHeader
          title="UX/UI DESIGN"
          illustration="/images/illus-uxui-vector2.svg"
        />
        <GallerySlider items={uxuiProjects} itemWidth={380} itemHeight={380} />

        {/* ── Abstand ── */}
        <div className="h-xl" />

        {/* ── Fotografie Section ── */}
        <IllustrationHeader
          title="Fotografie"
          illustration="/images/illus-foto-vector4.svg"
          italic
        />
        <GallerySlider items={fotoCategories} itemWidth={600} itemHeight={450} />

        {/* ── Abstand ── */}
        <div className="h-xl" />

        {/* ── Testimonial ── */}
        <section className="px-lg py-xl text-center">
          <blockquote className="font-mono text-2xl md:text-[64px] font-bold leading-[1.1] tracking-tight max-w-4xl mx-auto mb-sm">
            » SEHR SCHNELL, SEHR UNKOMPLIZIERT UND SEHR GUT GESTALTET. «
          </blockquote>
          <cite className="font-sans text-base text-[#999] not-italic">
            Sven, Salto Film UG
          </cite>
        </section>
      </main>
      <Footer />
    </>
  );
}
