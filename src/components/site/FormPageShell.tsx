import { Link } from "@tanstack/react-router";
import { ChevronRight, ShieldCheck, Clock, CheckCircle2, Mail, Phone } from "lucide-react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

interface Props {
  breadcrumb: string;
  title: string;
  intro: string;
  children: React.ReactNode;
  sidebarNote?: string;
  nextSteps?: string[];
}

export function FormPageShell({
  breadcrumb,
  title,
  intro,
  children,
  sidebarNote,
  nextSteps,
}: Props) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative pt-[120px] lg:pt-[140px] pb-14 lg:pb-20 bg-gradient-to-b from-surface to-background border-b border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <nav
            aria-label="Breadcrumbs"
            className="reveal-up flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            <Link to="/newsite/" className="hover:text-navy transition-colors">
              Početna
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-navy">{breadcrumb}</span>
          </nav>
          <h1
            className="reveal-up mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight"
            style={{ transitionDelay: "120ms" }}
          >
            {title}
          </h1>
          <p
            className="reveal-up mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            style={{ transitionDelay: "220ms" }}
          >
            {intro}
          </p>
          <div
            className="reveal-up mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground"
            style={{ transitionDelay: "320ms" }}
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald" /> Podaci se obrađuju povjerljivo
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-emerald" /> Odgovor u najkraćem roku
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald" /> Bez obveze
            </span>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-8">{children}</div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="reveal-up rounded-xl border border-border bg-surface p-6 lg:p-7">
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Trebate pomoć?
              </h3>
              {sidebarNote && (
                <p className="mt-4 text-foreground/90 leading-relaxed">{sidebarNote}</p>
              )}
              <div className="mt-6 space-y-3 text-sm">
                <a
                  href="tel:+38516184111"
                  className="flex items-center gap-3 text-foreground hover:text-navy transition-colors"
                >
                  <Phone className="h-4 w-4 text-emerald" /> 01 / 6184-111
                </a>
                <a
                  href="mailto:info@hpc-spg.hr"
                  className="flex items-center gap-3 text-foreground hover:text-navy transition-colors"
                >
                  <Mail className="h-4 w-4 text-emerald" /> info@hpc-spg.hr
                </a>
              </div>
            </div>

            {nextSteps && nextSteps.length > 0 && (
              <div className="reveal-up rounded-xl border border-border p-6 lg:p-7">
                <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  Što slijedi
                </h3>
                <ol className="mt-5 space-y-4">
                  {nextSteps.map((s, i) => (
                    <li key={s} className="flex gap-3 text-sm">
                      <span className="h-6 w-6 shrink-0 rounded-full bg-navy text-navy-foreground text-xs font-semibold grid place-items-center">
                        {i + 1}
                      </span>
                      <span className="text-foreground/85 leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

/* --------------- shared form primitives (match /zahtjev styling) --------------- */

export const inputBase =
  "w-full rounded-md border border-border bg-background px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/15";
export const labelBase =
  "block text-[13px] font-medium text-foreground/85 mb-1.5 tracking-tight";

export function Botcheck() {
  return (
    <input
      type="checkbox"
      name="botcheck"
      tabIndex={-1}
      autoComplete="off"
      style={{ display: "none" }}
      aria-hidden="true"
    />
  );
}

export function ConsentCheckbox() {
  return (
    <label className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
      <input
        type="checkbox"
        name="consent"
        value="da"
        required
        className="mt-1 h-4 w-4 accent-[oklch(0.44_0.05_245)]"
      />
      <span>
        Slažem se da se uneseni podaci koriste isključivo radi odgovora na moj upit, u skladu s{" "}
        <a
          href="/newsite/documents/zastita-osobnih-podataka.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-navy underline underline-offset-2 hover:text-emerald"
        >
          Izjavom o privatnosti
        </a>
        .
      </span>
    </label>
  );
}

export function SuccessBlock({
  message,
  onReset,
}: {
  message: string;
  onReset?: () => void;
}) {
  return (
    <div className="rounded-xl border border-emerald/25 bg-emerald/5 p-8 lg:p-10">
      <div className="flex items-start gap-4">
        <div className="h-11 w-11 shrink-0 rounded-full bg-emerald/15 grid place-items-center">
          <CheckCircle2 className="h-6 w-6 text-emerald" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Hvala</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">{message}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/newsite/"
              className="inline-flex items-center rounded-md bg-navy text-navy-foreground px-5 py-3 text-sm font-semibold hover:bg-navy-soft transition-all hover:-translate-y-0.5"
            >
              Natrag na početnu
            </Link>
            {onReset && (
              <button
                onClick={onReset}
                className="inline-flex items-center rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-surface transition-all"
              >
                Pošalji novi
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ErrorBanner({ message }: { message: string }) {
  return (
    <div
      role="alert"
      className="rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800"
    >
      {message}
    </div>
  );
}
