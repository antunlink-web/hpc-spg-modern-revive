import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import hpcLogo from "@/assets/hpc-logo.png.asset.json";

const nav = [
  { label: "Usluge", href: "#usluge" },
  { label: "Zašto HPC-SPG", href: "#zasto" },
  { label: "Digitalne usluge", href: "#digitalno" },
  { label: "Upravljanje", href: "#upravljanje" },
  { label: "Novosti", href: "#vijesti" },
  { label: "Kontakt", href: "#kontakt" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase = "text-[14px] font-medium tracking-tight transition-colors";
  const linkColor = scrolled
    ? "text-foreground/80 hover:text-navy"
    : "text-white/90 hover:text-white";
  const nameColor = scrolled ? "text-navy" : "text-white";
  const subColor = scrolled ? "text-muted-foreground" : "text-white/70";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-navy/40 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-[76px] lg:h-[92px] flex items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-3.5 min-w-0">
          <img
            src={hpcLogo.url}
            alt="HPC-SPG — Hrvatski poslovni centar"
            className={`h-12 lg:h-14 w-auto shrink-0 transition-all ${
              scrolled ? "" : "drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
            }`}
          />
          <span className={`hidden sm:flex flex-col leading-tight min-w-0 ${nameColor}`}>
            <span className="font-display text-[13px] lg:text-[14px] font-semibold tracking-tight truncate">
              Hrvatski poslovni centar
            </span>
            <span className={`text-[10px] uppercase tracking-[0.18em] mt-0.5 truncate ${subColor}`}>
              Stambeno poslovno gospodarstvo d.o.o.
            </span>
          </span>
        </a>

        <nav className="hidden xl:flex items-center gap-7">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className={`${linkBase} ${linkColor}`}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href="https://hpc-spg.com/"
            target="_blank"
            rel="noreferrer"
            className={`${linkBase} ${linkColor}`}
          >
            Prijava
          </a>
          <a
            href="https://hpc-spg.hr/zahtjev-za-izradu-prijedloga-upravljanja-zgradom/"
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center rounded-md px-5 py-2.5 text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5 ${
              scrolled
                ? "bg-navy text-navy-foreground hover:bg-navy-soft"
                : "bg-white text-navy hover:bg-white/95"
            }`}
          >
            Zatražite ponudu
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          aria-label="Otvori izbornik"
          className={`lg:hidden h-11 w-11 grid place-items-center rounded-md transition-colors ${
            scrolled ? "text-navy hover:bg-muted" : "text-white bg-white/10 hover:bg-white/20"
          }`}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-50 lg:hidden transition ${open ? "visible" : "invisible"}`}>
        <div
          className={`absolute inset-0 bg-navy/60 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm bg-background shadow-card flex flex-col transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 h-[76px] border-b border-border">
            <div className="flex items-center gap-2.5">
              <img src={hpcLogo.url} alt="HPC-SPG" className="h-10 w-auto" />
              <span className="font-display text-sm font-semibold text-navy leading-tight">
                Hrvatski poslovni<br />centar
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Zatvori izbornik"
              className="h-10 w-10 grid place-items-center text-navy"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 px-5 py-6 flex flex-col gap-1">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3.5 rounded-md text-base font-medium text-foreground hover:bg-muted"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="p-5 border-t border-border space-y-3">
            <a
              href="https://hpc-spg.com/"
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center rounded-md border border-border px-4 py-3 text-sm font-semibold text-navy"
            >
              Prijava u aplikaciju
            </a>
            <a
              href="https://hpc-spg.hr/zahtjev-za-izradu-prijedloga-upravljanja-zgradom/"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="block w-full text-center rounded-md bg-navy text-navy-foreground px-4 py-3 text-sm font-semibold"
            >
              Zatražite ponudu
            </a>
            <a
              href="https://hpc-spg.hr/kontakt/"
              target="_blank"
              rel="noreferrer"
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
