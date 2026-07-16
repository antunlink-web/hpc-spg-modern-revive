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

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontaktirajte nas | HPC-SPG" },
      {
        name: "description",
        content:
          "Pošaljite nam upit — HPC-SPG, Hrvatski poslovni centar – stambeno poslovno gospodarstvo d.o.o. Odgovaramo u najkraćem roku.",
      },
      { property: "og:title", content: "Kontaktirajte nas | HPC-SPG" },
      {
        property: "og:description",
        content: "Kontaktirajte HPC-SPG za sva pitanja o upravljanju zgradama.",
      },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
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
      await submitWeb3Form({ type: "contact", data, source: "kontakt" });
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
      breadcrumb="Kontakt"
      title="Kontaktirajte nas"
      intro="Pošaljite nam poruku — odgovaramo u najkraćem roku putem e-pošte ili telefona."
      sidebarNote="Za hitne intervencije obratite se predstavniku suvlasnika ili prijavite kvar putem aplikacije."
      nextSteps={["Zaprimanje vašeg upita", "Priprema odgovora ili poziv", "Nastavak komunikacije"]}
    >
      {submitted ? (
        <SuccessBlock
          message={SUCCESS_MESSAGES.contact}
          onReset={() => setSubmitted(false)}
        />
      ) : (
        <form onSubmit={onSubmit} className="reveal-up space-y-6" noValidate>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="k-ime" className={labelBase}>Ime i prezime <span className="text-emerald">*</span></label>
              <input id="k-ime" name="ime_prezime" required autoComplete="name" className={inputBase} placeholder="Ime i prezime" />
            </div>
            <div>
              <label htmlFor="k-email" className={labelBase}>E-pošta <span className="text-emerald">*</span></label>
              <input id="k-email" name="email" type="email" required autoComplete="email" className={inputBase} placeholder="ime@primjer.hr" />
            </div>
            <div>
              <label htmlFor="k-tel" className={labelBase}>Telefon</label>
              <input id="k-tel" name="telefon" type="tel" autoComplete="tel" className={inputBase} placeholder="+385 ..." />
            </div>
            <div>
              <label htmlFor="k-predmet" className={labelBase}>Predmet</label>
              <input id="k-predmet" name="predmet" className={inputBase} placeholder="Kratki naslov upita" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="k-poruka" className={labelBase}>Poruka <span className="text-emerald">*</span></label>
              <textarea id="k-poruka" name="poruka" rows={6} required minLength={10} className={`${inputBase} resize-y`} placeholder="Opišite vaš upit..." />
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
              {submitting ? "Slanje..." : "Pošalji poruku"}
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      )}
    </FormPageShell>
  );
}
