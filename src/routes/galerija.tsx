import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";
import { X } from "lucide-react";

import g1 from "@/assets/gallery/debaniceva-1.jpg.asset.json";
import g2 from "@/assets/gallery/debaniceva-2.jpg.asset.json";
import g3 from "@/assets/gallery/fasada-poslije.jpg.asset.json";
import g4 from "@/assets/gallery/fasada-prije.jpg.asset.json";
import g5 from "@/assets/gallery/nehajska-1.jpg.asset.json";
import g6 from "@/assets/gallery/nehajska-2.jpg.asset.json";
import g7 from "@/assets/gallery/rogoza-1.jpg.asset.json";
import g8 from "@/assets/gallery/rogoza-2.jpg.asset.json";
import g9 from "@/assets/gallery/rogoza-3.jpg.asset.json";
import g10 from "@/assets/gallery/rogoza-4.jpg.asset.json";
import g11 from "@/assets/gallery/rogoza-5.jpg.asset.json";
import g12 from "@/assets/gallery/stoosova-1.jpg.asset.json";
import g13 from "@/assets/gallery/stoosova-2.jpg.asset.json";
import g14 from "@/assets/gallery/vile-velebita-1.jpg.asset.json";
import g15 from "@/assets/gallery/vile-velebita-2.jpg.asset.json";

const images = [
  { src: g3.url, alt: "Obnovljeno pročelje zgrade" },
  { src: g4.url, alt: "Pročelje prije obnove" },
  { src: g1.url, alt: "Zgrada u ulici Debanićeva" },
  { src: g2.url, alt: "Zgrada u ulici Debanićeva — pogled" },
  { src: g5.url, alt: "Zgrada u Nehajskoj ulici" },
  { src: g6.url, alt: "Zgrada u Nehajskoj ulici — detalj" },
  { src: g12.url, alt: "Zgrada u Stoošovoj ulici" },
  { src: g13.url, alt: "Zgrada u Stoošovoj ulici — pogled" },
  { src: g14.url, alt: "Vile Velebita — vanjski pogled" },
  { src: g15.url, alt: "Vile Velebita — detalj" },
  { src: g7.url, alt: "Zgrada Rogoza — 1" },
  { src: g8.url, alt: "Zgrada Rogoza — 2" },
  { src: g9.url, alt: "Zgrada Rogoza — 3" },
  { src: g10.url, alt: "Zgrada Rogoza — 4" },
  { src: g11.url, alt: "Zgrada Rogoza — 5" },
];

export const Route = createFileRoute("/galerija")({
  head: () => ({
    meta: [
      { title: "Galerija — zgrade pod upravljanjem HPC-SPG" },
      { name: "description", content: "Fotografije zgrada pod upravljanjem HPC-SPG — obnovljena pročelja, uređeni zajednički prostori i realizirani projekti." },
      { property: "og:title", content: "Galerija — HPC-SPG" },
      { property: "og:description", content: "Odabrane fotografije zgrada pod našim upravljanjem." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  useReveal();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="pt-[120px] lg:pt-[140px] pb-14 lg:pb-20 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <span className="reveal-up inline-block text-xs uppercase tracking-[0.22em] text-emerald font-medium">Galerija</span>
          <h1 className="reveal-up mt-3 text-4xl lg:text-5xl text-navy" style={{ transitionDelay: "80ms" }}>Zgrade pod našim upravljanjem</h1>
          <p className="reveal-up mt-5 text-lg text-muted-foreground max-w-3xl leading-relaxed" style={{ transitionDelay: "160ms" }}>
            Odabir fotografija zgrada pod upravljanjem HPC-SPG — obnovljena pročelja, uređeni zajednički prostori i realizirani projekti.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="stagger grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
            {images.map((img) => (
              <button
                key={img.src}
                onClick={() => setLightbox(img)}
                className="stagger-item group aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted"
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-[60] bg-navy/90 backdrop-blur-sm grid place-items-center p-6" onClick={() => setLightbox(null)}>
          <button className="absolute top-5 right-5 text-white h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/20" onClick={() => setLightbox(null)} aria-label="Zatvori"><X className="h-5 w-5" /></button>
          <figure className="max-w-6xl w-full">
            <img src={lightbox.src} alt={lightbox.alt} className="w-full h-auto rounded-lg" />
            <figcaption className="mt-3 text-center text-sm text-white/80">{lightbox.alt}</figcaption>
          </figure>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
