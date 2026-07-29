import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal.png";
import logoEmblem from "@/assets/logo-emblem.png";
import { withBase } from "@/lib/paths";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

/** Mirrors the menu structure of hpc-spg.hr, mapped to internal demo routes. */
const nav: NavItem[] = [
  { label: "O nama", href: "/o-nama" },
  { label: "Zašto smo bolji izbor?", href: "/zasto-smo-bolji-izbor" },
  {
    label: "Ponuda",
    href: "/ponuda",
    children: [
      { label: "Upravljanje zgradama", href: "/usluge/upravljanje-zgradama" },
      { label: "Projekti energetske obnove", href: "/usluge/energetska-obnova" },
      { label: "Obnova zgrada od potresa", href: "/usluge/obnova-od-potresa" },
      { label: "Upis zgrade u zemljišne knjige", href: "/usluge/upis-u-zemljisne-knjige" },
      { label: "Financiranje uređenja", href: "/usluge/financiranje-uredenja" },
      { label: "Zahtjev za izradu prijedloga upravljanja zgradom", href: "/zahtjev" },
    ],
  },
  {
    label: "Upravljanje",
    href: "/upravljanje",
    children: [
      { label: "Osnovni pojmovi upravljanja sukladno Zakonu", href: "/upravljanje/osnovni-pojmovi" },
      { label: "Zajmovi i krediti za obnovu i uređenje zgrada", href: "/upravljanje/zajmovi-i-krediti" },
      { label: "Minimalna visina pričuve", href: "/upravljanje/minimalna-visina-pricuve" },
      { label: "Regulativa", href: "/upravljanje/regulativa" },
      { label: "Toplinski sustav – nove obveze", href: "/upravljanje/toplinski-sustav-nove-obveze" },
    ],
  },
  {
    label: "Digitalne usluge",
    href: "/e-financijski-izvjestaji",
    children: [
      { label: "E-financijski izvještaji", href: "/e-financijski-izvjestaji" },
      { label: "E-uplatnice", href: "/e-uplatnice" },
      { label: "Zahtjev za korisničke podatke", href: "/korisnicki-podaci" },
      { label: "Izrada dinamične web stranice", href: "/izrada-dinamicne-web-stranice" },
      { label: "Zahtjev za izradu stranica", href: "/zahtjev-za-izradu-stranica" },
      { label: "Dokumenti zgrade", href: "/dokumenti-zgrade" },
    ],
  },
  { label: "Galerija", href: "/galerija" },
  {
    label: "Novosti",
    href: "/novosti",
    children: [{ label: "Arhiva", href: "/novosti/arhiva" }],
  },
  {
    label: "Kontakt",
    href: "/kontakt",
    children: [
      { label: "Hitne intervencije", href: "/hitne-intervencije" },
      { label: "Korisni linkovi i kontakti", href: "/korisni-linkovi-i-kontakti" },
      { label: "Vodič za suvlasnike", href: "/vodic-za-suvlasnike" },
      { label: "Anketa za suvlasnike", href: "/anketa" },
    ],
  },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const linkBase =
    "text-[14px] font-medium tracking-tight transition-colors whitespace-nowrap";
  const linkColor = "text-foreground/85 hover:text-navy";

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto pl-6 pr-5 lg:pl-10 lg:pr-10 h-[80px] lg:h-[100px] flex items-center justify-between gap-6">
        {/* Desktop: horizontal logo with wordmark */}
        <a href={withBase("/")} className="hidden sm:flex items-center min-w-0" aria-label="HPC-SPG — Hrvatski poslovni centar">
          <img
            src={logoHorizontal}
            alt="Hrvatski poslovni centar – stambeno poslovno gospodarstvo d.o.o."
            className="h-14 lg:h-16 w-auto shrink-0 transition-all"
          />
        </a>
        {/* Mobile: emblem only */}
        <a href={withBase("/")} className="sm:hidden flex items-center" aria-label="HPC-SPG">
          <img src={logoEmblem} alt="HPC-SPG" className="h-12 w-auto transition-all" />
        </a>

        <nav className="hidden xl:flex items-center gap-5">
          {nav.map((n) => (
            <div key={n.href} className="relative group">
              <a
                href={withBase(n.href)}
                className={`${linkBase} ${linkColor} inline-flex items-center gap-1 py-3 nav-underline`}
              >
                {n.label}
                {n.children && <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180" />}
              </a>
              {n.children && (
                <div className="absolute left-0 top-full pt-1 opacity-0 invisible translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible">
                  <ul className="min-w-[300px] rounded-lg border border-border bg-background shadow-card py-2">
                    {n.children.map((c) => (
                      <li key={c.href}>
                        <a
                          href={withBase(c.href)}
                          className="block px-4 py-2.5 text-[14px] leading-snug text-foreground/85 hover:bg-surface hover:text-navy transition-colors"
                        >
                          {c.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-4 shrink-0">
          <a
            href="https://hpc-spg.com/"
            target="_blank"
            rel="noreferrer"
            className={`${linkBase} ${linkColor}`}
          >
            Prijava
          </a>
          <a
            href={withBase("/zahtjev")}
            className="inline-flex items-center rounded-md px-5 py-3 text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5 bg-navy text-navy-foreground hover:bg-navy-soft"
          >
            Zatražite ponudu
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          aria-label="Otvori izbornik"
          className="xl:hidden h-11 w-11 grid place-items-center rounded-md transition-colors text-navy hover:bg-muted"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-50 xl:hidden transition ${open ? "visible" : "invisible"}`}>
        <div
          className={`absolute inset-0 bg-navy/60 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <aside
          style={{ backgroundColor: "var(--background)" }}
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm bg-background shadow-card flex flex-col isolate transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 h-[80px] border-b border-border shrink-0">
            <img src={logoHorizontal} alt="HPC-SPG" className="h-11 w-auto" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Zatvori izbornik"
              className="h-10 w-10 grid place-items-center text-navy"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-1">
            {nav.map((n) => (
              <div key={n.href}>
                <div className="flex items-center">
                  <a
                    href={withBase(n.href)}
                    onClick={() => setOpen(false)}
                    className="flex-1 px-3 py-3.5 rounded-md text-base font-medium text-foreground hover:bg-muted"
                  >
                    {n.label}
                  </a>
                  {n.children && (
                    <button
                      type="button"
                      aria-label={`Prikaži podizbornik: ${n.label}`}
                      aria-expanded={expanded === n.href}
                      onClick={() => setExpanded(expanded === n.href ? null : n.href)}
                      className="h-10 w-10 grid place-items-center text-navy rounded-md hover:bg-muted"
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${expanded === n.href ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>
                {n.children && expanded === n.href && (
                  <ul className="ml-3 mb-2 border-l border-border pl-3">
                    {n.children.map((c) => (
                      <li key={c.href}>
                        <a
                          href={withBase(c.href)}
                          onClick={() => setOpen(false)}
                          className="block px-3 py-2.5 text-sm leading-snug text-muted-foreground hover:text-navy"
                        >
                          {c.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
          <div className="p-5 border-t border-border space-y-3 shrink-0">
            <a
              href="https://hpc-spg.com/"
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center rounded-md border border-border px-4 py-3 text-sm font-semibold text-navy"
            >
              Prijava u aplikaciju
            </a>
            <a
              href={withBase("/zahtjev")}
              onClick={() => setOpen(false)}
              className="block w-full text-center rounded-md bg-navy text-navy-foreground px-4 py-3 text-sm font-semibold"
            >
              Zatražite ponudu
            </a>
            <a
              href={withBase("/kontakt")}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-2"
            >
              <Phone className="h-4 w-4" /> Kontaktirajte nas
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
