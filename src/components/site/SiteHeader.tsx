import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoOfficial from "@/assets/logo-official.jpg";
import { withBase } from "@/lib/paths";
import { scrollToSection } from "@/lib/scroll";

type NavItem = {
  label: string;
  href: string;
};

/**
 * Simplified top navigation — only the main homepage sections.
 * Main items are homepage anchors; detailed pages open from the cards,
 * buttons and links inside each homepage section.
 */
const nav: NavItem[] = [
  { label: "Početna", href: "/" },
  { label: "O nama", href: "/o-nama" },
  { label: "Zašto smo bolji izbor?", href: "/zasto-smo-bolji-izbor" },
  { label: "Ponuda", href: "/#ponuda" },
  { label: "Upravljanje", href: "/#upravljanje" },
  { label: "Novosti", href: "/novosti" },
  { label: "Kontakt", href: "/kontakt" },
];

/** Build an href that respects the active base, including homepage anchors. */
function navHref(href: string): string {
  if (href.startsWith("/#")) return `${withBase("/")}${href.slice(1)}`;
  return withBase(href);
}

/** Section id for anchor items, or null for normal page links. */
function anchorId(href: string): string | null {
  return href.startsWith("/#") ? href.slice(2) : null;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  /**
   * On the homepage: smooth-scroll in place and keep the hash in the URL.
   * On an internal page: let the browser follow the link to `/#section`,
   * where the homepage scrolls to the target on mount.
   */
  const onNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const id = anchorId(href);
    if (!id) return;
    const onHome =
      window.location.pathname.replace(/\/$/, "") ===
      withBase("/").replace(/\/$/, "");
    if (!onHome) return;
    if (!document.getElementById(id)) return;
    e.preventDefault();
    window.history.pushState(null, "", `#${id}`);
    scrollToSection(id);
  };

  const linkBase =
    "text-[14px] font-medium tracking-tight transition-colors whitespace-nowrap";
  const linkColor = "text-foreground/85 hover:text-navy";


  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto pl-6 pr-5 lg:pl-10 lg:pr-10 h-[104px] lg:h-[128px] flex items-center justify-between gap-6">
        {/* Same official logo on desktop and mobile */}
        <a
          href={withBase("/")}
          className="flex items-center min-w-0"
          aria-label="HPC-SPG — Hrvatski poslovni centar"
        >
          <img
            src={logoOfficial}
            alt="Hrvatski poslovni centar – stambeno poslovno gospodarstvo d.o.o."
            className="h-[74px] sm:h-[83px] lg:h-[99px] w-auto shrink-0 transition-all"
          />
        </a>


        <nav className="hidden xl:flex items-center gap-6">
          {nav.map((n) => (
            <a
              key={n.href}
              href={navHref(n.href)}
              onClick={(e) => onNavClick(e, n.href)}
              className={`${linkBase} ${linkColor} inline-flex items-center py-3 nav-underline`}
            >
              {n.label}
            </a>

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
          <div className="flex items-center justify-between px-5 h-[104px] border-b border-border shrink-0">
            <img src={logoOfficial} alt="HPC-SPG" className="h-[74px] w-auto" />

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
              <a
                key={n.href}
                href={navHref(n.href)}
                onClick={(e) => {
                  setOpen(false);
                  onNavClick(e, n.href);
                }}
                className="px-3 py-3.5 rounded-md text-base font-medium text-foreground hover:bg-muted"
              >
                {n.label}
              </a>

            ))}
          </nav>
          <div className="p-5 border-t border-border space-y-3 shrink-0">
            <a
              href="https://hpc-spg.com/"
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center rounded-md border border-border px-4 py-3 text-sm font-semibold text-navy"
            >
              Prijava korisnika
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
