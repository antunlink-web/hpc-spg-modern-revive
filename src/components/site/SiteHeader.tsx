import { useState, useEffect } from "react";
import { Menu, X, Building2 } from "lucide-react";

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
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 text-navy">
          <span className="h-9 w-9 rounded-md bg-navy text-navy-foreground grid place-items-center">
            <Building2 className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <span className="font-serif text-xl tracking-tight">HPC-SPG</span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-foreground/75 hover:text-navy transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://hpc-spg.com/"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-navy hover:opacity-70 transition-opacity"
          >
            Prijava
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center rounded-md bg-navy text-navy-foreground px-4 py-2.5 text-sm font-medium hover:bg-navy-soft transition-colors"
          >
            Zatražite ponudu
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          aria-label="Otvori izbornik"
          className="lg:hidden h-10 w-10 grid place-items-center text-navy"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition ${
          open ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-navy/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[86%] max-w-sm bg-background shadow-card flex flex-col transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-border">
            <span className="font-serif text-xl text-navy">HPC-SPG</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Zatvori izbornik"
              className="h-10 w-10 grid place-items-center"
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
                className="px-3 py-3.5 rounded-md text-base text-foreground hover:bg-muted"
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
              className="block w-full text-center rounded-md border border-border px-4 py-3 text-sm font-medium text-navy"
            >
              Prijava u aplikaciju
            </a>
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="block w-full text-center rounded-md bg-navy text-navy-foreground px-4 py-3 text-sm font-medium"
            >
              Zatražite ponudu
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
