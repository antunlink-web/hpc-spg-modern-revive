import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send } from "lucide-react";
import {
  FormPageShell,
  inputBase,
  labelBase,
  Botcheck,
  ConsentCheckbox,
  SuccessBlock,
  ErrorBanner,
} from "@/components/site/FormPageShell";
import { useReveal } from "@/hooks/use-reveal";
import { submitWeb3Form, ERROR_MESSAGE, SUCCESS_MESSAGES } from "@/lib/web3forms";

export const Route = createFileRoute("/korisnicki-podaci")({
  head: () => ({
    meta: [
      { title: "Zahtjev za pristupne podatke | HPC-SPG" },
      {
        name: "description",
        content:
          "Zatražite pristupne podatke za web i mobilnu aplikaciju Upravitelj HPC-SPG — uvid u financijska izvješća, karticu suvlasnika, plaćanje pričuve i prijavu kvara.",
      },
      { property: "og:title", content: "Zahtjev za pristupne podatke | HPC-SPG" },
      {
        property: "og:description",
        content:
          "Pristupni podaci za web i mobilnu aplikaciju Upravitelj HPC-SPG.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: UserAccessPage,
});

const FUNKCIONALNOSTI = [
  "prijave kvarova (isključivo predstavniku suvlasnika)",
  "uvid u financijska izvješća za zgradu",
  "uvid u pojedinačne kartice suvlasnika – provjera stanja dugovanja/plaćanja za svoj prostor",
  "plaćanje pričuve (skidanje 2D barkoda za dugovanje i za plaćanje pričuve za buduće razdoblje)",
  "međusobna komunikacija između suvlasnika i predstavnika, te predstavnika s upraviteljem",
  "uvid u važnije dokumente za zgradu poput prijedloga GPU-a, odluka suvlasnika i sl.",
];

function UserAccessPage() {
  useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    const form = e.currentTarget;
    setError(null);
    setSubmitting(true);
    try {
      const fd = new FormData(form);
      const data: Record<string, string> = {};
      fd.forEach((v, k) => { data[k] = typeof v === "string" ? v : ""; });
      await submitWeb3Form({ type: "user_access", data, source: "korisnicki-podaci" });
      setSubmitted(true);
      form.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError(ERROR_MESSAGE);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <FormPageShell
      breadcrumb="Zahtjev za pristupne podatke"
      title="Zahtjev za pristupne podatke za web i mobilnu aplikaciju"
      intro="Ovdje zatražite pristupne podatke za pristup web i mobilnoj aplikaciji. Prijavnica u web aplikaciju sadrži kratke upute i link na mobilnu aplikaciju."
      sidebarNote="Za dodatna pitanja o pristupnim podacima nazovite nas ili pišite na info@hpc-spg.hr."
      nextSteps={["Provjera podataka o suvlasništvu", "Izrada korisničkih pristupnih podataka", "Dostava podataka na vašu e-poštu"]}
    >
      <div className="reveal-up mb-10 rounded-xl border border-border bg-surface p-6 lg:p-7">
        <p className="text-foreground/90 leading-relaxed">
          Web i mobilna aplikacija <strong>Upravitelj HPC-SPG</strong> imaju sljedeće funkcionalnosti:
        </p>
        <ul className="mt-4 space-y-2 list-disc pl-5 text-foreground/85 leading-relaxed">
          {FUNKCIONALNOSTI.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      {submitted ? (
        <SuccessBlock
          message={SUCCESS_MESSAGES.user_access}
          onReset={() => setSubmitted(false)}
        />
      ) : (
        <form onSubmit={onSubmit} className="reveal-up space-y-6" noValidate>
          <h2 className="text-xl font-semibold tracking-tight">Podaci o zgradi</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <label htmlFor="u-ime" className={labelBase}>Ime i prezime vlasnika prostora <span className="text-emerald">*</span></label>
              <input id="u-ime" name="ime_prezime_vlasnika" required autoComplete="name" className={inputBase} placeholder="Ime i prezime" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="u-adresa" className={labelBase}>Adresa zgrade u kojoj se prostor nalazi <span className="text-emerald">*</span></label>
              <input id="u-adresa" name="adresa_zgrade" required autoComplete="street-address" className={inputBase} placeholder="Ulica, kućni broj, mjesto" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="u-poziv" className={labelBase}>Točan poziv na broj s posljednje uplatnice <span className="text-emerald">*</span></label>
              <input id="u-poziv" name="poziv_na_broj" required className={inputBase} placeholder="Poziv na broj s posljednje uplatnice" />
              <p className="mt-1.5 text-xs text-muted-foreground">Poziv na broj je obavezan podatak kako bi se korisnik mogao identificirati u sustavu.</p>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="u-predstavnik" className={labelBase}>Ime i prezime predstavnika suvlasnika</label>
              <input id="u-predstavnik" name="predstavnik_suvlasnika" className={inputBase} placeholder="Ime i prezime predstavnika suvlasnika" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="u-email" className={labelBase}>Vaša adresa e-pošte <span className="text-emerald">*</span></label>
              <input id="u-email" name="email" type="email" required autoComplete="email" className={inputBase} placeholder="ime@primjer.hr" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="u-poruka" className={labelBase}>Napomena</label>
              <textarea id="u-poruka" name="napomena" rows={5} className={`${inputBase} resize-y`} placeholder="Napomena" />
            </div>
          </div>

          <div className="space-y-6 pt-2 border-t border-border">
            <Botcheck />
            <ConsentCheckbox />
            {error && <ErrorBanner message={error} />}
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-md bg-navy text-navy-foreground px-6 py-3.5 text-sm font-semibold hover:bg-navy-soft transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitting ? "Slanje..." : "Pošalji zahtjev"}
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      )}

      <p className="reveal-up mt-10 text-sm text-muted-foreground leading-relaxed">
        Mobilna aplikacija „Upravitelj HPC-SPG“ dostupna je na{" "}
        <a
          href="https://play.google.com/store/apps/details?id=com.ludegljive.hpcspg"
          target="_blank"
          rel="noreferrer"
          className="text-navy underline underline-offset-2 hover:text-emerald"
        >
          Google Play
        </a>{" "}
        za Android telefone, te na{" "}
        <a
          href="https://apps.apple.com/us/app/hpc-spg/id6740730949"
          target="_blank"
          rel="noreferrer"
          className="text-navy underline underline-offset-2 hover:text-emerald"
        >
          Apple store
        </a>{" "}
        za iPhone. Aplikacija je trenutno aktivirana za Hrvatsku, Austriju i Njemačku, te ukoliko se
        nalazite izvan tih zemalja, molimo da to navedete u napomeni ili nas kontaktirate.
      </p>
    </FormPageShell>
  );
}
