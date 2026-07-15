import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Building2,
  User,
  CheckCircle2,
  ChevronRight,
  Send,
  ShieldCheck,
  Clock,
  Mail,
  Phone,
} from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute(
  "/zahtjev-za-izradu-prijedloga-upravljanja-zgradom",
)({
  head: () => ({
    meta: [
      {
        title:
          "Zahtjev za izradu prijedloga upravljanja zgradom | HPC-SPG",
      },
      {
        name: "description",
        content:
          "Ispunite zahtjev za izradu prijedloga upravljanja stambenom ili poslovnom zgradom. HPC-SPG — Hrvatski poslovni centar, stambeno poslovno gospodarstvo d.o.o.",
      },
      {
        property: "og:title",
        content:
          "Zahtjev za izradu prijedloga upravljanja zgradom | HPC-SPG",
      },
      {
        property: "og:description",
        content:
          "Zatražite prilagođenu ponudu upravljanja vašom zgradom. Odgovor pripremamo u najkraćem roku.",
      },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: RequestPage,
});

const inputBase =
  "w-full rounded-md border border-border bg-background px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/15";
const labelBase =
  "block text-[13px] font-medium text-foreground/85 mb-1.5 tracking-tight";

type StatusOption =
  | "ugovorni"
  | "prinudni"
  | "novosagradjeni"
  | "bez_upravitelja";

function RequestPage() {
  useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<StatusOption | "">("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // No backend wired; simulate delivery. Client can connect to email later.
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Page header */}
      <section className="relative pt-[120px] lg:pt-[140px] pb-14 lg:pb-20 bg-gradient-to-b from-surface to-background border-b border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <nav
            aria-label="Breadcrumbs"
            className="reveal-up flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            <Link to="/" className="hover:text-navy transition-colors">
              Početna
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-navy">Zahtjev za ponudu</span>
          </nav>
          <h1
            className="reveal-up mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight"
            style={{ transitionDelay: "120ms" }}
          >
            Zahtjev za izradu prijedloga upravljanja zgradom
          </h1>
          <p
            className="reveal-up mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            style={{ transitionDelay: "220ms" }}
          >
            Ispunite kratki obrazac s podacima o zgradi i predstavniku
            suvlasnika. Na temelju vaših podataka pripremamo prilagođeni
            prijedlog upravljanja i javljamo vam se u najkraćem roku.
          </p>

          <div
            className="reveal-up mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground"
            style={{ transitionDelay: "320ms" }}
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald" /> Podaci se
              obrađuju povjerljivo
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-emerald" /> Odgovor u pravilu
              unutar 3 radna dana
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald" /> Ponuda bez
              obveze
            </span>
          </div>
        </div>
      </section>

      {/* Form / success */}
      <section className="py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-8">
            {submitted ? (
              <div className="reveal-up rounded-xl border border-emerald/25 bg-emerald/5 p-8 lg:p-10">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 shrink-0 rounded-full bg-emerald/15 grid place-items-center">
                    <CheckCircle2 className="h-6 w-6 text-emerald" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Hvala na zahtjevu
                    </h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      Vaš zahtjev je zaprimljen. Naš tim će pregledati
                      dostavljene podatke i pripremiti prilagođeni
                      prijedlog upravljanja za vašu zgradu. Javljamo vam
                      se u najkraćem roku putem e-maila ili telefona.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        to="/"
                        className="inline-flex items-center rounded-md bg-navy text-navy-foreground px-5 py-3 text-sm font-semibold hover:bg-navy-soft transition-all hover:-translate-y-0.5"
                      >
                        Natrag na početnu
                      </Link>
                      <a
                        href="https://hpc-spg.hr/kontakt/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-surface transition-all"
                      >
                        Kontaktirajte nas
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="reveal-up space-y-12"
                noValidate
              >
                {/* Building data */}
                <fieldset className="space-y-6">
                  <legend className="flex items-center gap-3 mb-2">
                    <span className="h-9 w-9 rounded-md bg-navy/10 text-navy grid place-items-center">
                      <Building2 className="h-5 w-5" />
                    </span>
                    <span className="text-lg font-semibold tracking-tight">
                      Podaci o zgradi
                    </span>
                  </legend>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="sm:col-span-2">
                      <label htmlFor="adresa" className={labelBase}>
                        Adresa zgrade <span className="text-emerald">*</span>
                      </label>
                      <input
                        id="adresa"
                        name="adresa"
                        required
                        autoComplete="street-address"
                        className={inputBase}
                        placeholder="Ulica i kućni broj"
                      />
                    </div>
                    <div>
                      <label htmlFor="posta" className={labelBase}>
                        Poštanski broj / Mjesto{" "}
                        <span className="text-emerald">*</span>
                      </label>
                      <input
                        id="posta"
                        name="posta"
                        required
                        autoComplete="postal-code"
                        className={inputBase}
                        placeholder="10000 Zagreb"
                      />
                    </div>
                    <div>
                      <label htmlFor="katastar" className={labelBase}>
                        Katastarska općina
                      </label>
                      <input
                        id="katastar"
                        name="katastar"
                        className={inputBase}
                        placeholder="Npr. Trnje"
                      />
                    </div>
                    <div>
                      <label htmlFor="kcbr" className={labelBase}>
                        Zgrada izgrađena na kč.br.
                      </label>
                      <input
                        id="kcbr"
                        name="kcbr"
                        className={inputBase}
                        placeholder="Katastarska čestica"
                      />
                    </div>
                    <div>
                      <label htmlFor="starost" className={labelBase}>
                        Starost zgrade
                      </label>
                      <input
                        id="starost"
                        name="starost"
                        className={inputBase}
                        placeholder="Godina izgradnje ili broj godina"
                      />
                    </div>
                    <div>
                      <label htmlFor="prostori" className={labelBase}>
                        Ukupni broj prostora{" "}
                        <span className="text-emerald">*</span>
                      </label>
                      <input
                        id="prostori"
                        name="prostori"
                        required
                        type="number"
                        min={1}
                        className={inputBase}
                        placeholder="Npr. 24"
                      />
                    </div>
                    <div>
                      <label htmlFor="povrsina" className={labelBase}>
                        Ukupna površina posebnih dijelova (m²){" "}
                        <span className="text-emerald">*</span>
                      </label>
                      <input
                        id="povrsina"
                        name="povrsina"
                        required
                        type="number"
                        min={1}
                        className={inputBase}
                        placeholder="Npr. 1850"
                      />
                    </div>
                  </div>

                  <div>
                    <span className={labelBase}>
                      Status upravljanja i održavanja{" "}
                      <span className="text-emerald">*</span>
                    </span>
                    <div className="grid sm:grid-cols-2 gap-3 mt-2">
                      {(
                        [
                          {
                            v: "ugovorni",
                            l: "Zgrada ima ugovornog upravitelja",
                          },
                          {
                            v: "prinudni",
                            l: "Zgrada je pod prinudnom upravom",
                          },
                          {
                            v: "novosagradjeni",
                            l: "Zgrada je novosagrađeni objekt",
                          },
                          {
                            v: "bez_upravitelja",
                            l: "Nema upravitelja niti je novosagrađena",
                          },
                        ] as { v: StatusOption; l: string }[]
                      ).map((opt) => {
                        const active = status === opt.v;
                        return (
                          <label
                            key={opt.v}
                            className={`flex items-start gap-3 rounded-md border px-4 py-3.5 cursor-pointer transition ${
                              active
                                ? "border-navy bg-navy/5"
                                : "border-border bg-background hover:border-navy/40"
                            }`}
                          >
                            <input
                              type="radio"
                              name="status"
                              value={opt.v}
                              required
                              checked={active}
                              onChange={() => setStatus(opt.v)}
                              className="mt-1 h-4 w-4 accent-[oklch(0.44_0.05_245)]"
                            />
                            <span className="text-sm text-foreground/90 leading-snug">
                              {opt.l}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </fieldset>

                {/* Representative data */}
                <fieldset className="space-y-6">
                  <legend className="flex items-center gap-3 mb-2">
                    <span className="h-9 w-9 rounded-md bg-emerald/10 text-emerald grid place-items-center">
                      <User className="h-5 w-5" />
                    </span>
                    <span className="text-lg font-semibold tracking-tight">
                      Podaci o predstavniku suvlasnika / kontakt osobi
                    </span>
                  </legend>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="kontakt" className={labelBase}>
                        Kontakt osoba{" "}
                        <span className="text-emerald">*</span>
                      </label>
                      <input
                        id="kontakt"
                        name="kontakt"
                        required
                        autoComplete="name"
                        className={inputBase}
                        placeholder="Ime i prezime"
                      />
                    </div>
                    <div>
                      <label htmlFor="predstavnik" className={labelBase}>
                        Predstavnik suvlasnika{" "}
                        <span className="text-emerald">*</span>
                      </label>
                      <input
                        id="predstavnik"
                        name="predstavnik"
                        required
                        className={inputBase}
                        placeholder="Ime i prezime"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="adresaStan" className={labelBase}>
                        Adresa stanovanja{" "}
                        <span className="text-emerald">*</span>
                      </label>
                      <input
                        id="adresaStan"
                        name="adresaStan"
                        required
                        autoComplete="street-address"
                        className={inputBase}
                        placeholder="Ulica, kućni broj, mjesto"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefon" className={labelBase}>
                        Telefon / Mobitel{" "}
                        <span className="text-emerald">*</span>
                      </label>
                      <input
                        id="telefon"
                        name="telefon"
                        type="tel"
                        required
                        autoComplete="tel"
                        className={inputBase}
                        placeholder="+385 ..."
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelBase}>
                        E-mail adresa{" "}
                        <span className="text-emerald">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className={inputBase}
                        placeholder="ime@primjer.hr"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="napomena" className={labelBase}>
                        Dodatna napomena
                      </label>
                      <textarea
                        id="napomena"
                        name="napomena"
                        rows={4}
                        className={`${inputBase} resize-y`}
                        placeholder="Sve dodatne informacije koje smatrate važnima."
                      />
                    </div>
                  </div>
                </fieldset>

                {/* Consent + submit */}
                <div className="space-y-6 pt-2 border-t border-border">
                  <label className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 accent-[oklch(0.44_0.05_245)]"
                    />
                    <span>
                      Suglasan/na sam s obradom osobnih podataka u svrhu
                      izrade prijedloga upravljanja zgradom, u skladu s{" "}
                      <a
                        href="https://hpc-spg.hr/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-navy underline underline-offset-2 hover:text-emerald"
                      >
                        Izjavom o privatnosti
                      </a>
                      .
                    </span>
                  </label>

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 rounded-md bg-navy text-navy-foreground px-6 py-3.5 text-sm font-semibold hover:bg-navy-soft transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {submitting ? "Šaljem…" : "Pošalji zahtjev"}
                      <Send className="h-4 w-4" />
                    </button>
                    <p className="text-xs text-muted-foreground">
                      Polja označena{" "}
                      <span className="text-emerald">*</span> su
                      obvezna.
                    </p>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="reveal-up rounded-xl border border-border bg-surface p-6 lg:p-7">
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Trebate pomoć?
              </h3>
              <p className="mt-4 text-foreground/90 leading-relaxed">
                Naš tim vam stoji na raspolaganju za dodatna pitanja i
                pojašnjenja prije podnošenja zahtjeva.
              </p>
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

            <div className="reveal-up rounded-xl border border-border p-6 lg:p-7">
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Što slijedi
              </h3>
              <ol className="mt-5 space-y-4">
                {[
                  "Zaprimanje i pregled dostavljenih podataka",
                  "Izrada prilagođenog prijedloga upravljanja",
                  "Dogovor termina i potpis ugovora",
                ].map((s, i) => (
                  <li key={s} className="flex gap-3 text-sm">
                    <span className="h-6 w-6 shrink-0 rounded-full bg-navy text-navy-foreground text-xs font-semibold grid place-items-center">
                      {i + 1}
                    </span>
                    <span className="text-foreground/85 leading-relaxed">
                      {s}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
