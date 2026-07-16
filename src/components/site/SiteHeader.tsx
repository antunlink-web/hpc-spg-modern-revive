import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal.png.asset.json";
import logoEmblem from "@/assets/logo-emblem.png.asset.json";

const nav = [
  { label: "Usluge", href: "/#usluge" },
  { label: "Zašto HPC-SPG", href: "/#zasto" },
  { label: "Digitalne usluge", href: "/#digitalno" },
  { label: "Upravljanje", href: "/#upravljanje" },
  { label: "Novosti", href: "/#vijesti" },
  { label: "Kontakt", href: "/kontakt" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const linkBase = "text-[15px] font-medium tracking-tight transition-colors whitespace-nowrap nav-underline";
  const linkColor = "text-foreground/85 hover:text-navy";

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-background/97 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto pl-6 pr-5 lg:pl-10 lg:pr-10 h-[80px] lg:h-[100px] flex items-center justify-between gap-6">
        {/* Desktop: horizontal logo with wordmark */}
        <a href="/" className="hidden sm:flex items-center min-w-0" aria-label="HPC-SPG — Hrvatski poslovni centar">
          <img
            src={logoHorizontal.url}
            alt="Hrvatski poslovni centar – stambeno poslovno gospodarstvo d.o.o."
            className="h-14 lg:h-16 w-auto shrink-0 transition-all"
          />
        </a>
        {/* Mobile: emblem only */}
        <a href="/" className="sm:hidden flex items-center" aria-label="HPC-SPG">
          <img
            src={logoEmblem.url}
            alt="HPC-SPG"
            className="h-12 w-auto transition-all"
          />
        </a>

        <nav className="hidden xl:flex items-center gap-6">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className={`${linkBase} ${linkColor}`}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <a
            href="https://hpc-spg.com/"
            target="_blank"
            rel="noreferrer"
            className={`${linkBase} ${linkColor}`}
          >
            Prijava
          </a>
          <a
            href="/zahtjev"
            className="inline-flex items-center rounded-md px-5 py-3 text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5 bg-navy text-navy-foreground hover:bg-navy-soft"
          >
            Zatražite ponudu
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          aria-label="Otvori izbornik"
          className="lg:hidden h-11 w-11 grid place-items-center rounded-md transition-colors text-navy hover:bg-muted"
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
          <div className="flex items-center justify-between px-5 h-[80px] border-b border-border">
            <img src={logoHorizontal.url} alt="HPC-SPG" className="h-11 w-auto" />
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
              href="/zahtjev"
              onClick={() => setOpen(false)}
              className="block w-full text-center rounded-md bg-navy text-navy-foreground px-4 py-3 text-sm font-semibold"
            >
              Zatražite ponudu
            </a>
            <a
              href="/kontakt"
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
