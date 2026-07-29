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
      { title: "Zahtjev za korisničke podatke | HPC-SPG" },
      {
        name: "description",
        content:
          "Zatražite pristupne podatke za web i mobilnu aplikaciju HPC-SPG — uvid u pričuvu, e-uplatnice, dokumente i prijavu kvara.",
      },
      { property: "og:title", content: "Zahtjev za korisničke podatke | HPC-SPG" },
      {
        property: "og:description",
        content: "Pristupni podaci za web i mobilnu aplikaciju HPC-SPG.",
      },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: UserAccessPage,
});

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
      breadcrumb="Korisnički podaci"
      title="Zahtjev za korisničke podatke"
      intro="Za dodjelu korisničkog imena i lozinke za pristup web i mobilnoj aplikaciji HPC-SPG ispunite obrazac u nastavku. Pristupni podaci dostavljaju se isključivo evidentiranim suvlasnicima, a služe za uvid u stanje pričuve, e-uplatnice, financijske izvještaje, dokumente zgrade i prijavu kvara."
      sidebarNote="Aplikacija omogućuje uvid u pričuvu, e-uplatnice, financijske izvještaje, dokumente zgrade i prijavu kvarova. Za dodatna pitanja obratite se na korisnici@hpc-spg.hr."
      nextSteps={["Provjera podataka o suvlasništvu", "Izrada korisničkih pristupnih podataka", "Dostava podataka na vašu e-poštu"]}
    >
      {submitted ? (
        <SuccessBlock
          message={SUCCESS_MESSAGES.user_access}
          onReset={() => setSubmitted(false)}
        />
      ) : (
        <form onSubmit={onSubmit} className="reveal-up space-y-6" noValidate>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="u-ime" className={labelBase}>Ime i prezime vlasnika prostora <span className="text-emerald">*</span></label>
              <input id="u-ime" name="ime_prezime_vlasnika" required autoComplete="name" className={inputBase} placeholder="Ime i prezime" />
            </div>
            <div>
              <label htmlFor="u-email" className={labelBase}>Vaša adresa e-pošte <span className="text-emerald">*</span></label>
              <input id="u-email" name="email" type="email" required autoComplete="email" className={inputBase} placeholder="ime@primjer.hr" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="u-adresa" className={labelBase}>Adresa zgrade u kojoj se prostor nalazi <span className="text-emerald">*</span></label>
              <input id="u-adresa" name="adresa_zgrade" required autoComplete="street-address" className={inputBase} placeholder="Ulica, kućni broj, mjesto" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="u-poziv" className={labelBase}>Točan poziv na broj s posljednje uplatnice <span className="text-emerald">*</span></label>
              <input id="u-poziv" name="poziv_na_broj" required className={inputBase} placeholder="Npr. HR00 12345-678-90" />
              <p className="mt-1.5 text-xs text-muted-foreground">Za bržu identifikaciju suvlasništva unesite poziv na broj s posljednje primljene uplatnice pričuve.</p>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="u-predstavnik" className={labelBase}>Ime i prezime predstavnika suvlasnika</label>
              <input id="u-predstavnik" name="predstavnik_suvlasnika" className={inputBase} placeholder="Ime i prezime predstavnika suvlasnika" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="u-tel" className={labelBase}>Telefon</label>
              <input id="u-tel" name="telefon" type="tel" autoComplete="tel" className={inputBase} placeholder="+385 ..." />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="u-poruka" className={labelBase}>Napomena</label>
              <textarea id="u-poruka" name="poruka" rows={5} className={`${inputBase} resize-y`} placeholder="Dodatne informacije, ako su potrebne." />
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
    </FormPageShell>
  );
}
