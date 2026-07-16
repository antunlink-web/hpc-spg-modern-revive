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

export const Route = createFileRoute("/anketa")({
  head: () => ({
    meta: [
      { title: "Anketa za suvlasnike zgrada | HPC-SPG" },
      {
        name: "description",
        content:
          "Kratka anketa za suvlasnike stambenih zgrada — pomaže nam unaprijediti usluge upravljanja i digitalne alate HPC-SPG.",
      },
      { property: "og:title", content: "Anketa za suvlasnike zgrada | HPC-SPG" },
      {
        property: "og:description",
        content: "Podijelite mišljenje o upravljanju vašom zgradom.",
      },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: SurveyPage,
});

const ratings = ["1", "2", "3", "4", "5"];

function SurveyPage() {
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
      await submitWeb3Form({ type: "survey", data, source: "anketa-suvlasnici" });
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
      breadcrumb="Anketa"
      title="Anketa za suvlasnike zgrada"
      intro="Kratka anketa (do 3 minute) — vaši odgovori pomažu nam unaprijediti usluge upravljanja i digitalne alate."
      sidebarNote="Odgovori se obrađuju anonimno u statističke svrhe. Kontakt podatke unosite samo ako želite povratni odgovor."
      nextSteps={["Zaprimanje ankete", "Objedinjena analiza odgovora", "Uvođenje unaprjeđenja"]}
    >
      {submitted ? (
        <SuccessBlock
          message={SUCCESS_MESSAGES.survey}
          onReset={() => setSubmitted(false)}
        />
      ) : (
        <form onSubmit={onSubmit} className="reveal-up space-y-8" noValidate>
          <fieldset className="space-y-5">
            <legend className="text-lg font-semibold tracking-tight">O vašoj zgradi</legend>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label htmlFor="a-adresa" className={labelBase}>Adresa zgrade</label>
                <input id="a-adresa" name="adresa_zgrade" className={inputBase} placeholder="Ulica, kućni broj, mjesto" />
              </div>
              <div>
                <label htmlFor="a-uloga" className={labelBase}>Vaša uloga <span className="text-emerald">*</span></label>
                <select id="a-uloga" name="uloga" required className={inputBase}>
                  <option value="">Odaberite...</option>
                  <option>Predstavnik suvlasnika</option>
                  <option>Suvlasnik</option>
                  <option>Najmoprimac</option>
                  <option>Ostalo</option>
                </select>
              </div>
              <div>
                <label htmlFor="a-upravitelj" className={labelBase}>Trenutni upravitelj</label>
                <input id="a-upravitelj" name="trenutni_upravitelj" className={inputBase} placeholder="Naziv upravitelja" />
              </div>
            </div>
          </fieldset>

          <fieldset className="space-y-5">
            <legend className="text-lg font-semibold tracking-tight">Zadovoljstvo uslugom (1 = najmanje, 5 = najviše)</legend>

            {[
              { name: "ocjena_komunikacija", label: "Komunikacija s upraviteljem" },
              { name: "ocjena_odrzavanje", label: "Održavanje zajedničkih dijelova" },
              { name: "ocjena_financije", label: "Transparentnost financijskog izvještavanja" },
              { name: "ocjena_digitalno", label: "Digitalni alati (aplikacija, e-uplatnice)" },
            ].map((q) => (
              <div key={q.name} className="rounded-md border border-border p-4">
                <div className="text-sm font-medium text-foreground/90">{q.label}</div>
                <div className="mt-3 flex flex-wrap gap-3">
                  {ratings.map((r) => (
                    <label key={r} className="inline-flex items-center gap-2 text-sm">
                      <input type="radio" name={q.name} value={r} className="accent-[oklch(0.44_0.05_245)]" />
                      {r}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </fieldset>

          <fieldset className="space-y-5">
            <legend className="text-lg font-semibold tracking-tight">Komentari</legend>
            <div>
              <label htmlFor="a-prijedlozi" className={labelBase}>Prijedlozi za poboljšanje</label>
              <textarea id="a-prijedlozi" name="prijedlozi" rows={5} className={`${inputBase} resize-y`} placeholder="Podijelite svoje prijedloge..." />
            </div>
          </fieldset>

          <fieldset className="space-y-5">
            <legend className="text-lg font-semibold tracking-tight">Kontakt (neobvezno)</legend>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="a-ime" className={labelBase}>Ime i prezime</label>
                <input id="a-ime" name="ime_prezime" autoComplete="name" className={inputBase} placeholder="Ime i prezime" />
              </div>
              <div>
                <label htmlFor="a-email" className={labelBase}>E-pošta</label>
                <input id="a-email" name="email" type="email" autoComplete="email" className={inputBase} placeholder="ime@primjer.hr" />
              </div>
            </div>
          </fieldset>

          <div className="space-y-6 pt-2 border-t border-border">
            <Botcheck />
            <ConsentCheckbox />
            {error && <ErrorBanner message={error} />}
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-md bg-navy text-navy-foreground px-6 py-3.5 text-sm font-semibold hover:bg-navy-soft transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitting ? "Slanje..." : "Pošalji anketu"}
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      )}
    </FormPageShell>
  );
}
