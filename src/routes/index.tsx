import { createFileRoute } from "@tanstack/react-router";
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
  Award,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";
import heroBuilding from "@/assets/hero-building-new.jpg.asset.json";
import sectionBuildings from "@/assets/section-buildings.jpg";
import appMockup from "@/assets/app-mockup.jpg";
import newsFacade from "@/assets/news-facade.jpg";
import newsElevator from "@/assets/news-elevator.jpg";
import newsGraffiti from "@/assets/news-graffiti.jpg";
import newsLaw from "@/assets/news-law.jpg";
import bonitetAAA from "@/assets/bonitet-aaa.png.asset.json";

const OFFER_URL = "https://hpc-spg.hr/zahtjev-za-izradu-prijedloga-upravljanja-zgradom/";
const CONTACT_URL = "https://hpc-spg.hr/kontakt/";
const APP_URL = "https://hpc-spg.com/";

export const Route = createFileRoute("/")({
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
  { icon: Building2, title: "Upravljanje zgradama", desc: "Cjelovito upravljanje stambenim i poslovnim objektima uz transparentno financijsko izvještavanje.", href: "https://hpc-spg.hr/upravljanje-zgradama/" },
  { icon: Wrench, title: "Obračun pričuve i izrada godišnjih programa", desc: "Redovan obračun pričuve, izrada godišnjih programa održavanja i praćenje njihove provedbe.", href: "https://hpc-spg.hr/upravljanje-zgradama/" },
  { icon: ShieldCheck, title: "Obnova od potresa", desc: "Stručna podrška u postupku obnove zgrada oštećenih u potresu.", href: "https://hpc-spg.hr/?page_id=12900" },
  { icon: Zap, title: "Energetska obnova", desc: "Pomoć u pripremi i provedbi projekata energetske obnove zgrada.", href: "https://hpc-spg.hr/?page_id=13606" },
  { icon: FileText, title: "Upis u zemljišne knjige", desc: "Vođenje postupka upisa zgrade i posebnih dijelova u zemljišne knjige.", href: "https://hpc-spg.hr/?page_id=12875" },
  { icon: Banknote, title: "Financiranje uređenja", desc: "Zajmovi za cjelovito uređenje stambenih i poslovnih objekata te obnovu.", href: "https://hpc-spg.hr/?page_id=12945" },
];

const whyUs = [
  { title: "Dugogodišnje iskustvo", desc: "Godine iskustva u upravljanju zgradama na području Grada Zagreba i Zagrebačke županije." },
  { title: "Transparentno poslovanje", desc: "Jasno financijsko izvještavanje i uvid u stanje pričuve u svakom trenutku." },
  { title: "Digitalne usluge", desc: "Web i mobilna aplikacija, e-uplatnice i e-financijski izvještaji za sve suvlasnike." },
  { title: "Organizirano održavanje", desc: "Redovito održavanje zajedničkih dijelova zgrade i godišnji tehnički pregled objekta." },
  { title: "Podrška suvlasnicima", desc: "Brza komunikacija s predstavnikom suvlasnika i pravna podrška u svakoj fazi." },
  { title: "Bonitet AAA", desc: "Bonitetna izvrsnost — priznanje financijske stabilnosti i pouzdanosti društva." },
];

const digital = [
  { icon: Receipt, title: "E-uplatnice za pričuvu", desc: "Mjesečne uplatnice za pričuvu dostavljene izravno na vašu e-mail adresu." },
  { icon: BarChart3, title: "Financijski izvještaji", desc: "Pristup mjesečnom financijskom izvještaju zgrade i stanju pričuve u svakom trenutku." },
  { icon: FileText, title: "Dokumenti zgrade", desc: "Ugovori, zapisnici, godišnji programi i ostali dokumenti vaše zgrade na jednom mjestu." },
  { icon: Wrench, title: "Prijava kvara", desc: "Brza prijava kvarova na zajedničkim dijelovima zgrade putem aplikacije." },
];

const process = [
  { n: "01", title: "Zahtjev za ponudu", desc: "Ispunite kratki obrazac s podacima o objektu.", href: "https://hpc-spg.hr/zahtjev-za-izradu-prijedloga-upravljanja-zgradom/" },
  { n: "02", title: "Prijedlog upravljanja", desc: "Pripremamo cjelovitu, prilagođenu ponudu za vašu zgradu.", href: "https://hpc-spg.hr/upravljanje-zgradama/" },
  { n: "03", title: "Ugovor i preuzimanje", desc: "Sklapanje ugovora i tehničko-financijsko preuzimanje objekta.", href: "https://hpc-spg.hr/upravljanje-zgradama/" },
  { n: "04", title: "Kontinuirano upravljanje", desc: "Redovito izvještavanje, održavanje i digitalna komunikacija.", href: "https://hpc-spg.hr/upravljanje-zgradama/" },
];

const news = [
  { img: newsLaw, tag: "Zakon", date: "01.01.2025.", title: "Novi Zakon o upravljanju i održavanju zgrada", excerpt: "U primjeni je novi zakonski okvir koji uređuje prava i obveze suvlasnika te postupke upravljanja.", href: "https://hpc-spg.hr/novi-zakon-o-upravljanju-i-odrzavanju-zgrada/" },
  { img: newsFacade, tag: "Javni poziv", date: "2026.", title: "Sufinanciranje uređenja pročelja", excerpt: "Otvoren je javni poziv za podnošenje prijava za sufinanciranje uređenja pročelja višestambenih zgrada.", href: "https://hpc-spg.hr/javni-poziv-za-podnosenje-prijava-za-sufinanciranje-uredenja-procelja-za-postojece-visestambene-i-stambeno-poslovne-zgrade-u-2026-godini/" },
  { img: newsElevator, tag: "Javni poziv", date: "2026.", title: "Sufinanciranje ugradnje dizala", excerpt: "Javni poziv za sufinanciranje ugradnje dizala u postojeće višestambene i stambeno-poslovne zgrade.", href: "https://hpc-spg.hr/javni-poziv-ugradnja-dizala-u-postojece-visestambene-i-stambeno-poslovne-zgrade-u-2026-g/" },
  { img: newsGraffiti, tag: "Sufinanciranje", date: "Aktualno", title: "Zaštita građevina od grafita", excerpt: "Poziv za podnošenje zahtjeva za sufinanciranje zaštite vanjskih dijelova građevina od grafita.", href: "https://hpc-spg.hr/poziv-za-podnosenje-zahtjeva-za-financiranje-sufinanciranje-zastite-vanjskih-dijelova-gradevina-od-grafita/" },
];

const upravljanje = [
  { icon: BookOpen, title: "Osnovni pojmovi upravljanja", desc: "Pojmovnik i objašnjenja ključnih izraza vezanih uz upravljanje zgradom.", href: "https://hpc-spg.hr/osnovni-pojmovi-upravljanja/" },
  { icon: Award, title: "Zašto smo bolji izbor", desc: "Razlozi zbog kojih suvlasnici biraju HPC-SPG kao svog upravitelja.", href: "https://hpc-spg.hr/zasto-smo-bolji-izbor/" },
  { icon: Coins, title: "Zajmovi i krediti", desc: "Mogućnosti financiranja obnove i uređenja stambenih objekata.", href: "https://hpc-spg.hr/zajmovi-i-krediti/" },
  { icon: Gauge, title: "Minimalna visina pričuve", desc: "Informacije o zakonski propisanoj minimalnoj visini pričuve.", href: "https://hpc-spg.hr/minimalna-visina-pricuve/" },
  { icon: Scale, title: "Regulativa upravljanja", desc: "Pregled propisa i zakonskog okvira upravljanja zgradama u RH.", href: "https://hpc-spg.hr/regulativa-upravljanja/" },
  { icon: FileText, title: "Vodič za suvlasnike", desc: "Priručnik o pravima i obvezama suvlasnika stambenih zgrada.", href: "https://hpc-spg.hr/?page_id=12961" },
];

function HomePage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative isolate min-h-[92svh] flex items-end overflow-hidden">
        <img
          src={heroBuilding.url}
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
              Hrvatski poslovni centar — SPG d.o.o. · Zagreb
            </span>
            <h1 className="mt-7 text-white text-[2.25rem] leading-[1.08] sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05] font-semibold tracking-tight">
              <span className="block hero-anim hero-delay-2">Profesionalno upravljanje</span>
              <span className="block hero-anim hero-delay-3">stambenim i poslovnim zgradama.</span>
            </h1>
            <p className="hero-anim hero-delay-4 mt-6 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
              Transparentno financijsko izvještavanje, stručno održavanje i digitalni
              uvid za predstavnike i suvlasnike.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href={OFFER_URL} target="_blank" rel="noreferrer" className="hero-anim hero-delay-5 inline-flex items-center gap-2 rounded-md bg-emerald text-white px-6 py-3.5 text-sm font-semibold shadow-lg shadow-black/20 hover:bg-emerald-soft hover:-translate-y-0.5 transition-all duration-300">
                Zatražite ponudu <ArrowRight className="h-4 w-4" />
              </a>
              <a href={CONTACT_URL} target="_blank" rel="noreferrer" className="hero-anim hero-delay-5 inline-flex items-center rounded-md bg-white text-navy px-6 py-3.5 text-sm font-medium hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-300" style={{ animationDelay: "780ms" }}>
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


      {/* SERVICES */}
      <section id="usluge" className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="fade-up grid lg:grid-cols-12 gap-12 lg:gap-20 items-end mb-14 lg:mb-20">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Naše usluge</span>
              <h2 className="mt-4 text-4xl lg:text-5xl text-navy">Cjelovita podrška za vašu zgradu.</h2>
            </div>
            <p className="lg:col-span-5 text-muted-foreground leading-relaxed">
              Pružamo cjelovit set usluga upravljanja, održavanja i obnove —
              od svakodnevnih tehničkih poslova do velikih projekata energetske
              obnove i obnove od potresa.
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
                <a href={s.href} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald hover:text-navy transition-colors">
                  Saznaj više
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="zasto" className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="reveal-left lg:col-span-5">
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Zašto HPC-SPG</span>
              <h2 className="mt-4 text-4xl lg:text-5xl text-navy">Kvaliteta ispred kvantitete.</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Naš je cilj zgradama kojima upravljamo dati kvalitetnu podršku i uslugu —
                s posvećenošću detalju, pravnom sigurnošću i odgovornim upravljanjem
                pričuvom.
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                {[
                  "Transparentno financijsko izvještavanje",
                  "Stručan tim i pravna sigurnost",
                  "Brza i jasna komunikacija sa suvlasnicima",
                  "Organizirano godišnje planiranje i izvještavanje",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-foreground/85">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald" />
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="https://hpc-spg.hr/zasto-smo-bolji-izbor/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-navy text-navy-foreground px-5 py-3 text-sm font-semibold hover:bg-navy-soft hover:-translate-y-0.5 transition-all duration-300"
                >
                  Zašto smo bolji izbor? <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* AAA Bonitet badge */}
              <div className="reveal-fade mt-10 inline-flex items-center gap-4 rounded-xl border border-border bg-background p-4 pr-6 shadow-sm" style={{ transitionDelay: "200ms" }}>
                <img src={bonitetAAA.url} alt="Bonitet AAA — Platinum certifikat kreditne sposobnosti" className="h-24 w-auto" />
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

      {/* DIGITAL */}
      <section id="digitalno" className="py-24 lg:py-32 bg-navy text-navy-foreground overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="reveal-left lg:col-span-6 order-2 lg:order-1">
              <span className="text-xs uppercase tracking-[0.22em] text-white/60">Digitalne usluge</span>
              <h2 className="mt-4 text-4xl lg:text-5xl text-white">Vaša zgrada — u vašem džepu.</h2>
              <p className="mt-6 text-white/80 leading-relaxed max-w-xl">
                Web i mobilna aplikacija HPC-SPG omogućuje vam uvid u financije zgrade,
                pristup važnijim dokumentima te izravnu komunikaciju s predstavnikom
                suvlasnika i upraviteljem — bilo kada, s bilo kojeg uređaja.
              </p>

              <div className="stagger mt-10 space-y-px bg-white/10 rounded-xl overflow-hidden">
                {digital.map((d) => (
                  <div key={d.title} className="stagger-item bg-navy p-6 lg:p-7 flex gap-5">
                    <span className="h-11 w-11 shrink-0 rounded-md bg-white/10 grid place-items-center">
                      <d.icon className="h-5 w-5 text-white" strokeWidth={1.6} />
                    </span>
                    <div>
                      <h3 className="text-lg text-white font-sans font-medium">{d.title}</h3>
                      <p className="mt-1 text-sm text-white/75 leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <a href={APP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-white text-navy px-5 py-3.5 text-sm font-medium hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-300">
                  Prijava u aplikaciju <ArrowRight className="h-4 w-4" />
                </a>
                <a href="https://hpc-spg.hr/zahtjev-za-pristupne-podatke/" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-white/25 text-white px-5 py-3.5 text-sm font-medium hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300">
                  Zatraži pristupne podatke
                </a>
              </div>
            </div>

            <div className="reveal-right lg:col-span-6 order-1 lg:order-2 relative">
              <div className="absolute -inset-6 bg-emerald/10 blur-3xl rounded-full pointer-events-none" aria-hidden />
              <div className="float-y relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-white/10 lg:scale-[1.06] origin-center">
                <img
                  src={appMockup}
                  alt="HPC-SPG mobilna aplikacija — pričuva, e-uplatnice, dokumenti i prijava kvara"
                  width={1280}
                  height={1280}
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* UPRAVLJANJE — resources on managing a building */}
      <section id="upravljanje" className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-14">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Upravljanje</span>
              <h2 className="mt-4 text-4xl lg:text-5xl text-navy">Sve o upravljanju zgradom.</h2>
            </div>
            <p className="lg:col-span-5 text-muted-foreground leading-relaxed">
              Vodiči, pojmovnik, regulativa i informacije o financiranju — sve
              što suvlasnik treba znati o upravljanju vlastitom zgradom.
            </p>
          </div>

          <div className="stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {upravljanje.map((r) => (
              <a key={r.title} href={r.href} target="_blank" rel="noreferrer" className="stagger-item bg-background p-7 lg:p-8 hover:bg-surface transition-colors group card-lift">
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
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Kako surađujemo</span>
            <h2 className="mt-4 text-4xl lg:text-5xl text-navy">Jednostavan put do novog upravitelja.</h2>
          </div>

          <div className="stagger mt-14 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative">
            <div className="hidden lg:block absolute top-5 left-[12%] right-[12%] h-px bg-border" />
            {process.map((p) => (
              <a key={p.n} href={p.href} target="_blank" rel="noreferrer" className="stagger-item relative group">
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
      <section id="vijesti" className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Aktualno</span>
              <h2 className="mt-4 text-4xl lg:text-5xl text-navy">Vijesti i javni pozivi.</h2>
            </div>
            <a href="https://hpc-spg.hr/obavijesti/novosti/" target="_blank" rel="noreferrer" className="text-sm font-medium text-navy inline-flex items-center gap-1.5">
              Sve novosti <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="stagger grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {news.map((n) => (
              <a key={n.title} href={n.href} target="_blank" rel="noreferrer" className="stagger-item group bg-background rounded-xl overflow-hidden border border-border card-lift hover:border-navy/20">
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
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <img src={sectionBuildings} alt="" width={1280} height={896} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative max-w-5xl mx-auto px-5 lg:px-10 text-center">
          <span className="text-xs uppercase tracking-[0.22em] text-white/70">Kontakt</span>
          <h2 className="mt-5 text-white text-4xl lg:text-6xl">Spremni za upravitelja kojem se može vjerovati?</h2>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Ispunite Zahtjev za izradu prijedloga za upravljanje zgradom — pripremamo
            cjelovitu ponudu prilagođenu vašem objektu.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href={OFFER_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-emerald text-white px-6 py-4 text-sm font-semibold hover:bg-emerald-soft transition-colors">
              Zatražite ponudu <ArrowRight className="h-4 w-4" />
            </a>
            <a href={CONTACT_URL} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md bg-white text-navy px-6 py-4 text-sm font-medium hover:bg-white/90 transition-colors">
              Kontaktirajte nas
            </a>
            <a href={APP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-white/25 text-white px-6 py-4 text-sm font-medium hover:bg-white/10 transition-colors">
              Prijava korisnika
            </a>
          </div>

          <div className="mt-16 grid sm:grid-cols-3 gap-px bg-white/15 rounded-xl overflow-hidden text-left">
            <div className="bg-navy/70 backdrop-blur-sm p-6">
              <MapPin className="h-5 w-5 text-white/70" strokeWidth={1.5} />
              <p className="mt-3 text-xs uppercase tracking-wider text-white/60">Ured</p>
              <p className="mt-1 text-white text-sm">Ulica Adama Mandrovića 3<br/>10000 Zagreb</p>
            </div>
            <div className="bg-navy/70 backdrop-blur-sm p-6">
              <Mail className="h-5 w-5 text-white/70" strokeWidth={1.5} />
              <p className="mt-3 text-xs uppercase tracking-wider text-white/60">Web</p>
              <a href="https://hpc-spg.hr" className="mt-1 block text-white text-sm hover:underline">hpc-spg.hr</a>
            </div>
            <div className="bg-navy/70 backdrop-blur-sm p-6">
              <Phone className="h-5 w-5 text-white/70" strokeWidth={1.5} />
              <p className="mt-3 text-xs uppercase tracking-wider text-white/60">Prijava</p>
              <a href={APP_URL} target="_blank" rel="noreferrer" className="mt-1 block text-white text-sm hover:underline">hpc-spg.com</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
