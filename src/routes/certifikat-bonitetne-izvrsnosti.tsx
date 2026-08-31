import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";
import bonitetAAA from "@/assets/bonitet-aaa-2026-official.png";

export const Route = createFileRoute("/certifikat-bonitetne-izvrsnosti")({
  head: () => ({
    meta: [
      { title: "Certifikat bonitetne izvrsnosti 2026 | HPC-SPG" },
      {
        name: "description",
        content: "Aktualni certifikat bonitetne izvrsnosti HPC-SPG-a za 2026. godinu.",
      },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Certifikati"
      title="Certifikat bonitetne izvrsnosti 2026"
      lead="Aktualni digitalni element certifikata bonitetne izvrsnosti za 2026. godinu."
      crumbs={[{ label: "Certifikat bonitetne izvrsnosti" }]}
    >
      <a
        href="/documents/HR1000000209575_DigitalCertificate_hr-HR.pdf"
        target="_blank"
        rel="noreferrer"
        className="block rounded-xl border border-border bg-background p-6 lg:p-10 hover:border-navy/30 transition-colors"
        aria-label="Otvori digitalni certifikat bonitetne izvrsnosti za 2026."
      >
        <img
          src={bonitetAAA}
          alt="Dun & Bradstreet Platinum AAA certifikat bonitetne izvrsnosti 2026."
          className="mx-auto w-full max-w-3xl object-contain"
        />
      </a>

      <p className="mt-4 text-sm text-muted-foreground">
        Klikom na banner otvara se službeni digitalni certifikat Dun & Bradstreet za 2026. godinu.
      </p>
    </ArticlePageShell>
  ),
});
