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

export const Route = createFileRoute("/zahtjev-za-izradu-stranica")({
  head: () => ({
    meta: [
      { title: "Zahtjev za izradu web stranice zgrade | HPC-SPG" },
      {
        name: "description",
        content:
          "Ispunite zahtjev za izradu dinamične web stranice vaše zgrade i odaberite sadržaje koje želite — financijska izvješća, dokumenti, obavijesti, prijava kvarova i više.",
      },
      { property: "og:title", content: "Zahtjev za izradu web stranice zgrade — HPC-SPG" },
      {
        property: "og:description",
        content: "Individualna ponuda za dinamičnu web stranicu vaše zgrade.",
      },
    ],
  }),
  component: WebsiteRequestPage,
});

const CONTENT_OPTIONS = [
  "skenirani dokumenti – ponude, ugovori, plaćeni računi zgrade, ovjereni radni nalozi, sva dokumentacija na kojoj se temelji račun o poslovanju...",
  "financijska izvješća zgrade",
  "GPU (Godišnji program upravljanja i održavanja zgrade)",
  "fotodokumentacija",
  "zapisnici",
  "pozivi na sastanke suvlasnika",
  "razne obavijesti",
  "prijava kvarova",
  "anketni upitnici",
  "rasporedi čišćenja stubišta, snijega, košenja....",
  "kućni red",
  "ostali dokumenti",
  "zanimljivosti i novosti vezane za nekretnine",
  "forum suvlasnika",
];

function WebsiteRequestPage() {
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
      const sadrzaj: string[] = [];
      fd.forEach((v, k) => {
        if (typeof v !== "string") return;
        if (k === "sadrzaj") sadrzaj.push(v);
        else data[k] = v;
      });
      data.sadrzaj = sadrzaj.join("; ");
      await submitWeb3Form({ type: "web_stranica", data, source: "zahtjev-za-izradu-stranica" });
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
      breadcrumb="Zahtjev za izradu stranica"
      title="Zahtjev za izradu web stranice zgrade"
      intro="Kako bismo Vam poslali individualnu ponudu ovisno o Vašim željama i zahtjevima, molimo ispunite ovaj Zahtjev."
      sidebarNote="Za dodatna pitanja o dinamičnoj web stranici zgrade slobodno nas kontaktirajte telefonom ili e-poštom."
      nextSteps={[
        "Zaprimanje zahtjeva i provjera podataka o zgradi",
        "Priprema individualne ponude prema odabranim sadržajima",
        "Dogovor o izradi i pokretanju web stranice zgrade",
      ]}
    >
      {submitted ? (
        <SuccessBlock message={SUCCESS_MESSAGES.web_stranica} onReset={() => setSubmitted(false)} />
      ) : (
        <form onSubmit={onSubmit} className="reveal-up space-y-6" noValidate>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <label htmlFor="w-adresa" className={labelBase}>
                Adresa zgrade <span className="text-emerald">*</span>
              </label>
              <input id="w-adresa" name="adresa_zgrade" required autoComplete="street-address" className={inputBase} placeholder="Ulica, kućni broj, mjesto" />
            </div>
            <div>
              <label htmlFor="w-predstavnik" className={labelBase}>
                Predstavnik suvlasnika <span className="text-emerald">*</span>
              </label>
              <input id="w-predstavnik" name="predstavnik_suvlasnika" required autoComplete="name" className={inputBase} placeholder="Ime i prezime" />
            </div>
            <div>
              <label htmlFor="w-tel" className={labelBase}>
                Broj telefona <span className="text-emerald">*</span>
              </label>
              <input id="w-tel" name="telefon" type="tel" required autoComplete="tel" className={inputBase} placeholder="+385 ..." />
            </div>
            <div>
              <label htmlFor="w-email" className={labelBase}>
                E-mail adresa <span className="text-emerald">*</span>
              </label>
              <input id="w-email" name="email" type="email" required autoComplete="email" className={inputBase} placeholder="ime@primjer.hr" />
            </div>
            <div>
              <label htmlFor="w-korisnici" className={labelBase}>Broj korisnika</label>
              <input id="w-korisnici" name="broj_korisnika" className={inputBase} placeholder="Npr. 24" />
            </div>
          </div>

          <fieldset className="pt-2 border-t border-border">
            <legend className={`${labelBase} pt-6`}>Zainteresirani smo da web stranica zgrade sadrži</legend>
            <div className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {CONTENT_OPTIONS.map((opt) => (
                <label key={opt} className="flex items-start gap-3 text-sm text-foreground/85 leading-relaxed">
                  <input
                    type="checkbox"
                    name="sadrzaj"
                    value={opt}
                    className="mt-1 h-4 w-4 shrink-0 accent-[oklch(0.44_0.05_245)]"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="w-drugo" className={labelBase}>nešto drugo</label>
            <textarea id="w-drugo" name="nesto_drugo" rows={5} className={`${inputBase} resize-y`} placeholder="Opišite dodatne sadržaje koje želite na stranici zgrade." />
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
    </FormPageShell>
  );
}
