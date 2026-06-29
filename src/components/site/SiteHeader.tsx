import { useState, useEffect } from "react";
import { Menu, X, Building2, Phone } from "lucide-react";

const nav = [
  { label: "Usluge", href: "#usluge" },
  { label: "Digitalne usluge", href: "#digitalno" },
  { label: "Zašto HPC-SPG", href: "#zasto" },
  { label: "Vijesti", href: "#vijesti" },
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

  const linkBase = "text-[15px] font-medium tracking-tight transition-colors";
  const linkColor = scrolled
    ? "text-foreground/80 hover:text-navy"
    : "text-white/90 hover:text-white";
  const logoText = scrolled ? "text-navy" : "text-white";
  const logoBadge = scrolled
    ? "bg-navy text-navy-foreground"
    : "bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-navy/40 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-[72px] lg:h-[88px] flex items-center justify-between">
        <a href="#" className={`flex items-center gap-3 ${logoText}`}>
          <span className={`h-11 w-11 rounded-md grid place-items-center transition-colors ${logoBadge}`}>
            <Building2 className="h-6 w-6" strokeWidth={1.75} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold tracking-tight">HPC-SPG</span>
            <span className={`mt-1 text-[10px] uppercase tracking-[0.22em] ${scrolled ? "text-muted-foreground" : "text-white/65"}`}>
              Upravljanje zgradama
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className={`${linkBase} ${linkColor}`}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://hpc-spg.com/"
            target="_blank"
            rel="noreferrer"
            className={`${linkBase} ${linkColor}`}
          >
            Prijava
          </a>
          <a
            href="https://hpc-spg.hr/?page_id=12769"
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
          <div className="flex items-center justify-between px-5 h-[72px] border-b border-border">
            <div className="flex items-center gap-2.5">
              <span className="h-9 w-9 rounded-md bg-navy text-navy-foreground grid place-items-center">
                <Building2 className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="font-display text-lg font-bold text-navy">HPC-SPG</span>
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
              href="https://hpc-spg.hr/?page_id=12769"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="block w-full text-center rounded-md bg-navy text-navy-foreground px-4 py-3 text-sm font-semibold"
            >
              Zatražite ponudu
            </a>
            <a
              href="tel:+38516184800"
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
