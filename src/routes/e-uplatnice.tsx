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

export const Route = createFileRoute("/e-uplatnice")({
  head: () => ({
    meta: [
      { title: "Zahtjev za dostavu uplatnica e-mailom | HPC-SPG" },
      { name: "description", content: "Zatražite dostavu mjesečnih uplatnica za pričuvu na e-mail adresu — s otisnutim 2D barkodom za jednostavno plaćanje putem mobilnog bankarstva." },
      { property: "og:title", content: "E-uplatnice — HPC-SPG" },
      { property: "og:description", content: "Manje papira, brže plaćanje — uplatnice u vaš inbox svakog mjeseca." },
    ],
  }),
  component: EUplatnicePage,
});

function EUplatnicePage() {
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
      await submitWeb3Form({ type: "e_uplatnice", data, source: "e-uplatnice" });
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
      breadcrumb="E-uplatnice"
      title="Zahtjev za dostavu uplatnica e-mailom"
      intro="Umjesto papirnate uplatnice, mjesečno primite uplatnicu za pričuvu s 2D barkodom u svoj inbox. Plaćanje traje nekoliko sekundi — skeniranjem barkoda u aplikaciji vaše banke, bez ručnog unosa podataka. Ispunite obrazac s podacima za identifikaciju; nakon provjere aktiviramo uslugu."
      sidebarNote="Aktivacija je besplatna. Uslugu možete u svakom trenutku otkazati pisanim zahtjevom na korisnici@hpc-spg.hr."
      nextSteps={[
        "Zaprimanje i provjera podataka o suvlasništvu",
        "Aktivacija dostave uplatnica na navedeni e-mail",
        "Prva e-uplatnica pri sljedećem mjesečnom obračunu",
      ]}
    >
      {submitted ? (
        <SuccessBlock
          message={SUCCESS_MESSAGES.e_uplatnice}
          onReset={() => setSubmitted(false)}
        />
      ) : (
        <form onSubmit={onSubmit} className="reveal-up space-y-6" noValidate>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="e-ime" className={labelBase}>Ime i prezime vlasnika prostora <span className="text-emerald">*</span></label>
              <input id="e-ime" name="ime_prezime_vlasnika" required autoComplete="name" className={inputBase} placeholder="Ime i prezime" />
            </div>
            <div>
              <label htmlFor="e-email" className={labelBase}>Adresa e-pošte na koju se traži dostava uplatnica <span className="text-emerald">*</span></label>
              <input id="e-email" name="email" type="email" required autoComplete="email" className={inputBase} placeholder="ime@primjer.hr" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="e-adresa" className={labelBase}>Adresa zgrade u kojoj se prostor nalazi <span className="text-emerald">*</span></label>
              <input id="e-adresa" name="adresa_zgrade" required autoComplete="street-address" className={inputBase} placeholder="Ulica, kućni broj, mjesto" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="e-poziv" className={labelBase}>Točan poziv na broj s posljednje uplatnice <span className="text-emerald">*</span></label>
              <input id="e-poziv" name="poziv_na_broj" required className={inputBase} placeholder="Npr. HR00 12345-678-90" />
              <p className="mt-1.5 text-xs text-muted-foreground">Poziv na broj pomaže nam brže identificirati vaše suvlasništvo.</p>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="e-razdoblje" className={labelBase}>Upišite mjesec i godinu za koji tražite dostavu uplatnice <span className="text-emerald">*</span></label>
              <input id="e-razdoblje" name="mjesec_godina" required className={inputBase} placeholder="Npr. 01/2026" />
            </div>
            <div>
              <label htmlFor="e-tel" className={labelBase}>Telefon</label>
              <input id="e-tel" name="telefon" type="tel" autoComplete="tel" className={inputBase} placeholder="+385 ..." />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="e-poruka" className={labelBase}>Napomena</label>
              <textarea id="e-poruka" name="poruka" rows={5} className={`${inputBase} resize-y`} placeholder="Dodatne informacije, ako su potrebne." />
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
