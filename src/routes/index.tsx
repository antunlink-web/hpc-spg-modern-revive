import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import {
  ArrowRight,
  Building2,
  Wrench,
  ShieldCheck,
  Zap,
  FileText,
  Banknote,
  Receipt,
  BarChart3,
  BookOpen,
  Scale,
  Coins,
  Gauge,
  Thermometer,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";
import heroBuilding from "@/assets/hero-building-new.jpg";
import sectionBuildings from "@/assets/section-buildings.jpg";
import newsFacade from "@/assets/news-facade.jpg";
import newsElevator from "@/assets/news-elevator.jpg";
import newsGraffiti from "@/assets/news-graffiti.jpg";
import newsLaw from "@/assets/news-law.jpg";
import bonitetAAA from "@/assets/bonitet-aaa-2026.png";
import { withBase } from "@/lib/paths";
import { scrollToHash } from "@/lib/scroll";
import { getHomepageNews } from "@/lib/cms/news-functions";
import { getPublicPage } from "@/lib/cms/page-functions";
import { splitCmsLines } from "@/lib/cms/page-definitions";



const OFFER_URL = "/zahtjev";
const CONTACT_URL = "/kontakt";
const OFFER_PAGE_URL = "/ponuda";
const APP_URL = "https://hpc-spg.com/";

export const Route = createFileRoute("/")({
  loader: async () => ({
    cmsNews: await getHomepageNews(),
    cmsPage: await getPublicPage({
      data: {
        pageKey: "pocetna",
      },
    }),
  }),

  head: () => ({
    meta: [
      { title: "HPC-SPG — Hrvatski poslovni centar · Upravljanje zgradama u Zagrebu" },
      {
        name: "description",
        content:
          "Hrvatski poslovni centar – stambeno poslovno gospodarstvo d.o.o. Profesionalno upravljanje stambenim i poslovnim zgradama u Gradu Zagrebu i Zagrebačkoj županiji.",
      },
      { property: "og:title", content: "HPC-SPG — Upravljanje zgradama u Zagrebu" },
      {
        property: "og:description",
        content:
          "Transparentno financijsko izvještavanje, stručno održavanje i digitalni uvid za predstavnike i suvlasnike.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Building2, title: "Upravljanje zgradama", desc: "Cjelovito upravljanje stambenim i poslovnim objektima uz transparentno financijsko izvještavanje.", href: "/usluge/upravljanje-zgradama" },
  { icon: Wrench, title: "Obračun pričuve i izrada godišnjih programa", desc: "Redovan obračun pričuve, izrada godišnjih programa održavanja i praćenje njihove provedbe.", href: "/usluge/upravljanje-zgradama" },
  { icon: ShieldCheck, title: "Obnova od potresa", desc: "Stručna podrška u postupku obnove zgrada oštećenih u potresu.", href: "/usluge/obnova-od-potresa" },
  { icon: Zap, title: "Energetska obnova", desc: "Pomoć u pripremi i provedbi projekata energetske obnove zgrada.", href: "/usluge/energetska-obnova" },
  { icon: FileText, title: "Upis u zemljišne knjige", desc: "Vođenje postupka upisa zgrade i posebnih dijelova u zemljišne knjige.", href: "/usluge/upis-u-zemljisne-knjige" },
  { icon: Banknote, title: "Financiranje uređenja", desc: "Zajmovi za cjelovito uređenje stambenih i poslovnih objekata te obnovu.", href: "/usluge/financiranje-uredenja" },
];

const whyUs = [
  { title: "Dugogodišnje iskustvo", desc: "Godine iskustva u upravljanju zgradama na području Grada Zagreba i Zagrebačke županije." },
  { title: "Transparentno poslovanje", desc: "Jasno financijsko izvještavanje i uvid u stanje pričuve u svakom trenutku." },
  { title: "Web i mobilna aplikacija", desc: "Uvid u financije zgrade, uplatnice i dokumente putem web i mobilne aplikacije." },
  { title: "Organizirano održavanje", desc: "Redovito održavanje zajedničkih dijelova zgrade i godišnji tehnički pregled objekta." },
  { title: "Podrška suvlasnicima", desc: "Brza komunikacija s predstavnikom suvlasnika i pravna podrška u svakoj fazi." },
  { title: "Bonitet AAA", desc: "Bonitetna izvrsnost — priznanje financijske stabilnosti i pouzdanosti društva." },
];

const ponudaHighlights = [
  { icon: Receipt, title: "E-uplatnice za pričuvu", desc: "Mjesečne uplatnice za pričuvu dostavljene izravno na vašu e-mail adresu.", href: "/e-uplatnice" },
  { icon: BarChart3, title: "Financijski izvještaji", desc: "Uvid u mjesečni financijski izvještaj zgrade i stanje pričuve u svakom trenutku.", href: "/korisnicki-podaci" },
  { icon: FileText, title: "Dokumenti zgrade", desc: "Ugovori, zapisnici, godišnji programi i ostali dokumenti vaše zgrade na jednom mjestu.", href: "/dokumenti-zgrade" },
];


const process = [
  { n: "01", title: "Zahtjev za ponudu", desc: "Ispunite kratki obrazac s podacima o objektu.", href: "/zahtjev" },
  { n: "02", title: "Prijedlog upravljanja", desc: "Pripremamo cjelovitu, prilagođenu ponudu za vašu zgradu.", href: "/usluge/upravljanje-zgradama" },
  { n: "03", title: "Ugovor i preuzimanje", desc: "Sklapanje ugovora i tehničko-financijsko preuzimanje objekta.", href: "/usluge/upravljanje-zgradama" },
  { n: "04", title: "Kontinuirano upravljanje", desc: "Redovito izvještavanje, održavanje i digitalna komunikacija.", href: "/usluge/upravljanje-zgradama" },
];

const legacyNewsImages: Record<string, string> = {
  "novi-zakon-o-upravljanju-i-odrzavanju-zgrada": newsLaw,
  "javni-poziv-za-podnosenje-prijava-za-sufinanciranje-uredenja-procelja-za-postoje": newsFacade,
  "javni-poziv-ugradnja-dizala-u-postojece-visestambene-i-stambeno-poslovne-zgrade": newsElevator,
  "poziv-za-podnosenje-zahtjeva-za-financiranje-sufinanciranje-zastite-vanjskih-dij": newsGraffiti,
};

const upravljanje = [
  { icon: BookOpen, title: "Osnovni pojmovi upravljanja", desc: "Pojmovnik i objašnjenja ključnih izraza vezanih uz upravljanje zgradom.", href: "/upravljanje/osnovni-pojmovi" },
  { icon: Scale, title: "Regulativa upravljanja", desc: "Pregled propisa i zakonskog okvira upravljanja zgradama u RH.", href: "/upravljanje/regulativa" },
  { icon: Coins, title: "Zajmovi i krediti", desc: "Mogućnosti financiranja obnove i uređenja stambenih objekata.", href: "/upravljanje/zajmovi-i-krediti" },
  { icon: Gauge, title: "Minimalna visina pričuve", desc: "Informacije o zakonski propisanoj minimalnoj visini pričuve.", href: "/upravljanje/minimalna-visina-pricuve" },
  { icon: Thermometer, title: "Toplinski sustav — nove obveze", desc: "Obveze vezane uz uređaje za razdiobu troškova toplinske energije.", href: "/upravljanje/toplinski-sustav-nove-obveze" },
  { icon: FileText, title: "Vodič za suvlasnike", desc: "Priručnik o pravima i obvezama suvlasnika stambenih zgrada.", href: "/vodic-za-suvlasnike" },
];


function HomePage() {
  useReveal();

  const {
    cmsNews,
    cmsPage,
  } = Route.useLoaderData();

  const pageContent = cmsPage.content;

  const homepageNews = cmsNews.map((post) => ({
    img:
      post.coverImage ||
      legacyNewsImages[post.slug] ||
      sectionBuildings,
    tag: post.category,
    date: post.displayDate,
    title: post.title,
    excerpt: post.excerpt,
    href: `/novosti/${post.slug}`,
  }));

  // Scroll to a homepage section when arriving with a hash (from an internal
  // page, a direct refresh, or browser back/forward).
  useEffect(() => {
    if (window.location.hash) scrollToHash(window.location.hash);
    const onHashChange = () => {
      if (window.location.hash) scrollToHash(window.location.hash);
    };
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("popstate", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("popstate", onHashChange);
    };
  }, []);

  return (

    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative isolate min-h-[92svh] flex items-end overflow-hidden">
        <img
          src={heroBuilding}
          alt="Moderne stambeno-poslovne zgrade — HPC-SPG upravljanje"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover hero-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/45 to-navy/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/55 via-navy/15 to-transparent" />


        <div className="relative max-w-7xl mx-auto px-5 lg:px-10 pt-32 pb-14 lg:pt-40 lg:pb-20 w-full">
          <div className="max-w-3xl">
            <span className="hero-anim hero-delay-1 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.26em] text-white/75">
              <span className="h-px w-10 bg-emerald-soft/80" />
              {pageContent.heroEyebrow}
            </span>
            <h1 className="mt-7 text-white text-[2.25rem] leading-[1.08] sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05] font-semibold tracking-tight">
              <span className="block hero-anim hero-delay-2">{pageContent.heroTitle1}</span>
              <span className="block hero-anim hero-delay-3">{pageContent.heroTitle2}</span>
            </h1>
            <p className="hero-anim hero-delay-4 mt-6 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
              {pageContent.heroLead}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href={OFFER_URL} className="hero-anim hero-delay-5 inline-flex items-center gap-2 rounded-md bg-emerald text-white px-6 py-3.5 text-sm font-semibold shadow-lg shadow-black/20 hover:bg-emerald-soft hover:-translate-y-0.5 transition-all duration-300">
                Zatražite ponudu <ArrowRight className="h-4 w-4" />
              </a>
              <a href={CONTACT_URL} className="hero-anim hero-delay-5 inline-flex items-center rounded-md bg-white text-navy px-6 py-3.5 text-sm font-medium hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-300" style={{ animationDelay: "780ms" }}>
                Kontaktirajte nas
              </a>
              <a href={APP_URL} target="_blank" rel="noreferrer" className="hero-anim inline-flex items-center rounded-md border border-white/35 bg-white/5 backdrop-blur-sm text-white px-6 py-3.5 text-sm font-medium hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300" style={{ animationDelay: "860ms" }}>
                Prijava korisnika
              </a>
            </div>
          </div>

          <div className="stagger mt-14 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/15 rounded-lg overflow-hidden border border-white/10">
            {[
              { l: "Transparentno financijsko izvještavanje" },
              { l: "Obračun pričuve i izrada godišnjih programa" },
              { l: "Web i mobilna aplikacija za suvlasnike" },
              { l: "Stručna podrška obnovi i održavanju" },
            ].map((s) => (
              <div key={s.l} className="stagger-item bg-navy/60 backdrop-blur-md px-5 py-6 sm:px-6 sm:py-7">
                <CheckCircle2 className="h-5 w-5 text-emerald-soft" strokeWidth={1.75} />
                <div className="mt-3 text-sm text-white/95 leading-snug">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O NAMA */}
      <section id="o-nama" className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="reveal-up lg:col-span-6">
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">O nama</span>
              <h2 className="mt-4 text-4xl lg:text-5xl text-navy">
                {pageContent.aboutTitle}
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {pageContent.aboutText1}
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {pageContent.aboutText2}
              </p>
              <div className="mt-8">
                <a
                  href={withBase("/o-nama")}
                  className="inline-flex items-center gap-2 rounded-md bg-navy text-navy-foreground px-5 py-3 text-sm font-semibold hover:bg-navy-soft hover:-translate-y-0.5 transition-all duration-300"
                >
                  Više o nama <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="stagger lg:col-span-6 grid sm:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border">
              {[
                { title: "Vodič za suvlasnike zgrada", desc: "Prva specijalizirana knjiga o upravljanju i kulturi stanovanja.", href: "/vodic-za-suvlasnike" },
                { title: "Seminari i savjetovanja", desc: "Pet seminara o upravljanju i održavanju zgrada (1998. – 2005.).", href: "/seminari" },
                { title: "Certifikat bonitetne izvrsnosti", desc: "Kontinuirani nositelj AAA certifikata bonitetne izvrsnosti.", href: "/certifikat-bonitetne-izvrsnosti" },
                { title: "Korisni linkovi i kontakti", desc: "Pregled institucija i kontakata korisnih suvlasnicima.", href: "/korisni-linkovi-i-kontakti" },
              ].map((c) => (
                <a
                  key={c.title}
                  href={withBase(c.href)}
                  className="stagger-item group bg-background p-6 lg:p-8 hover:bg-surface transition-colors card-lift"
                >
                  <h3 className="text-lg text-navy font-sans font-semibold leading-snug">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-emerald">
                    Otvori <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* WHY US */}
      <section id="zasto-smo-bolji" className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="reveal-left lg:col-span-5">
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Zašto HPC-SPG</span>
              <h2 className="mt-4 text-4xl lg:text-5xl text-navy">{pageContent.whyTitle}</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {pageContent.whyText}
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                {splitCmsLines(pageContent.whyBullets).map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-foreground/85">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald" />
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href={withBase("/zasto-smo-bolji-izbor")}
                  className="inline-flex items-center gap-2 rounded-md bg-navy text-navy-foreground px-5 py-3 text-sm font-semibold hover:bg-navy-soft hover:-translate-y-0.5 transition-all duration-300"
                >
                  Zašto smo bolji izbor? <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* AAA Bonitet badge */}
              <div className="reveal-fade mt-10 inline-flex items-center gap-4 rounded-xl border border-border bg-background p-4 pr-6 shadow-sm" style={{ transitionDelay: "200ms" }}>
                <img src={bonitetAAA} alt="Bonitet AAA — Platinum certifikat kreditne sposobnosti" className="h-24 w-auto" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Bonitetna izvrsnost</p>
                  <p className="mt-1 text-sm font-semibold text-navy">Certifikat AAA — Platinum</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">Priznanje financijske stabilnosti i pouzdanosti društva.</p>
                </div>
              </div>
            </div>

            <div className="stagger lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
              {whyUs.map((w) => (
                <div key={w.title} className="stagger-item bg-background p-6 lg:p-8 card-lift">
                  <CheckCircle2 className="h-6 w-6 text-emerald icon-hover" strokeWidth={1.75} />
                  <h3 className="mt-5 text-lg text-navy font-sans font-semibold leading-snug">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* SERVICES */}
      <section id="ponuda" className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="fade-up grid lg:grid-cols-12 gap-12 lg:gap-20 items-end mb-14 lg:mb-20">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Naše usluge</span>
              <h2 className="mt-4 text-4xl lg:text-5xl text-navy">{pageContent.servicesTitle}</h2>
            </div>
            <p className="lg:col-span-5 text-muted-foreground leading-relaxed">
              {pageContent.servicesText}
            </p>
          </div>

          <div className="stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {services.map((s) => (
              <article key={s.title} className="stagger-item group bg-background p-8 lg:p-10 transition-all hover:bg-surface card-lift">
                <span className="inline-grid h-14 w-14 place-items-center rounded-lg bg-navy/5 ring-1 ring-navy/10 group-hover:bg-emerald/10 group-hover:ring-emerald/20 transition-colors icon-hover">
                  <s.icon className="h-7 w-7 text-navy group-hover:text-emerald transition-colors" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 text-2xl text-navy font-semibold">{s.title}</h3>
                <p className="mt-3 text-[15px] text-foreground/70 leading-relaxed">{s.desc}</p>
                <a href={s.href} className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald hover:text-navy transition-colors">
                  Saznaj više
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            ))}
          </div>

          <div className="reveal-up mt-10">
            <a
              href={withBase(OFFER_PAGE_URL)}
              className="inline-flex items-center gap-2 rounded-md bg-navy text-navy-foreground px-5 py-3 text-sm font-semibold hover:bg-navy-soft hover:-translate-y-0.5 transition-all duration-300"
            >
              Cjelovita ponuda poslova upravljanja <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="stagger mt-14 grid sm:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {ponudaHighlights.map((d) => (
              <a
                key={d.title}
                href={withBase(d.href)}
                className="stagger-item group bg-background p-7 lg:p-8 hover:bg-surface transition-colors card-lift"
              >
                <span className="inline-grid h-12 w-12 place-items-center rounded-lg bg-navy/5 ring-1 ring-navy/10 group-hover:bg-emerald/10 group-hover:ring-emerald/20 transition-colors icon-hover">
                  <d.icon className="h-6 w-6 text-navy group-hover:text-emerald transition-colors" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-lg text-navy font-sans font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-emerald">
                  Otvori <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>





      {/* UPRAVLJANJE — resources on managing a building */}
      <section id="upravljanje" className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-14">
            <div className="reveal-up lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Upravljanje</span>
              <h2 className="mt-4 text-4xl lg:text-5xl text-navy">{pageContent.managementTitle}</h2>
            </div>
            <p className="reveal-up lg:col-span-5 text-muted-foreground leading-relaxed" style={{ transitionDelay: "150ms" }}>
              {pageContent.managementText}
            </p>
          </div>

          <div className="stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {upravljanje.map((r) => (
              <a key={r.title} href={r.href} className="stagger-item bg-background p-7 lg:p-8 hover:bg-surface transition-colors group card-lift">
                <span className="inline-grid h-12 w-12 place-items-center rounded-lg bg-navy/5 ring-1 ring-navy/10 group-hover:bg-emerald/10 group-hover:ring-emerald/20 transition-colors icon-hover">
                  <r.icon className="h-6 w-6 text-navy group-hover:text-emerald transition-colors" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-lg text-navy font-sans font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-emerald">
                  Otvori <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="reveal-up max-w-2xl">
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Kako surađujemo</span>
            <h2 className="mt-4 text-4xl lg:text-5xl text-navy">{pageContent.processTitle}</h2>
          </div>

          <div className="stagger mt-14 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative">
            <div className="hidden lg:block absolute top-5 left-[12%] right-[12%] h-px bg-border" />
            {process.map((p) => (
              <a key={p.n} href={p.href} className="stagger-item relative group">
                <div className="h-10 w-10 rounded-full bg-navy text-navy-foreground font-serif text-sm grid place-items-center relative z-10 group-hover:bg-emerald group-hover:scale-110 transition-all duration-300">
                  {p.n}
                </div>
                <h3 className="mt-6 text-xl text-navy font-sans font-medium group-hover:text-emerald transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="novosti" className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="reveal-up flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Aktualno</span>
              <h2 className="mt-4 text-4xl lg:text-5xl text-navy">{pageContent.newsTitle}</h2>
            </div>
            <a href={withBase("/novosti")} className="text-sm font-medium text-navy inline-flex items-center gap-1.5 nav-underline">
              Sve novosti <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="stagger grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {homepageNews.map((n) => (
              <a key={n.title} href={n.href} className="stagger-item group bg-background rounded-xl overflow-hidden border border-border card-lift hover:border-navy/20">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={n.img} alt={n.title} width={896} height={640} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-5 lg:p-6">
                  <div className="flex items-center gap-2.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                    <span className="text-navy font-medium">{n.tag}</span>
                    <span className="h-px w-4 bg-border" />
                    <span>{n.date}</span>
                  </div>
                  <h3 className="mt-3 text-lg text-navy font-sans font-medium leading-snug">{n.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">{n.excerpt}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="relative py-24 lg:py-32 overflow-hidden">
        <img src={sectionBuildings} alt="" width={1280} height={896} loading="lazy" className="absolute inset-0 h-[115%] w-full object-cover hero-kenburns" />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative max-w-5xl mx-auto px-5 lg:px-10 text-center">
          <span className="reveal-up inline-block text-xs uppercase tracking-[0.22em] text-white/70">Kontakt</span>
          <h2 className="reveal-up mt-5 text-white text-4xl lg:text-6xl" style={{ transitionDelay: "120ms" }}>{pageContent.ctaTitle}</h2>
          <p className="reveal-up mt-6 text-white/80 max-w-2xl mx-auto leading-relaxed" style={{ transitionDelay: "240ms" }}>
            {pageContent.ctaText}
          </p>
          <div className="reveal-up mt-10 flex flex-wrap items-center justify-center gap-3" style={{ transitionDelay: "360ms" }}>
            <a href={OFFER_URL} className="inline-flex items-center gap-2 rounded-md bg-emerald text-white px-6 py-4 text-sm font-semibold hover:bg-emerald-soft hover:-translate-y-0.5 transition-all duration-300">
              Zatražite ponudu <ArrowRight className="h-4 w-4" />
            </a>
            <a href={CONTACT_URL} className="inline-flex items-center rounded-md bg-white text-navy px-6 py-4 text-sm font-medium hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-300">
              Kontaktirajte nas
            </a>
            <a href={APP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-white/25 text-white px-6 py-4 text-sm font-medium hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300">
              Prijava korisnika
            </a>
          </div>

          <div className="stagger mt-16 grid sm:grid-cols-3 gap-px bg-white/15 rounded-xl overflow-hidden text-left">
            <div className="stagger-item bg-navy/70 backdrop-blur-sm p-6">
              <MapPin className="h-5 w-5 text-white/70" strokeWidth={1.5} />
              <p className="mt-3 text-xs uppercase tracking-wider text-white/60">Ured</p>
              <p className="mt-1 text-white text-sm">Ulica Adama Mandrovića 3<br/>10000 Zagreb</p>
            </div>
            <div className="stagger-item bg-navy/70 backdrop-blur-sm p-6">
              <Phone className="h-5 w-5 text-white/70" strokeWidth={1.5} />
              <p className="mt-3 text-xs uppercase tracking-wider text-white/60">Telefon</p>
              <a href="tel:+38512430303" className="mt-1 block text-white text-sm hover:underline">01/24 30 303</a>
              <a href="tel:+38512430306" className="block text-white text-sm hover:underline">01/24 30 306</a>
            </div>
            <div className="stagger-item bg-navy/70 backdrop-blur-sm p-6">
              <Mail className="h-5 w-5 text-white/70" strokeWidth={1.5} />
              <p className="mt-3 text-xs uppercase tracking-wider text-white/60">E-pošta</p>
              <a href="mailto:info@hpc-spg.hr" className="mt-1 block text-white text-sm hover:underline">info@hpc-spg.hr</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
