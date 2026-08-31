import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";
import bonitetAAA from "@/assets/bonitet-aaa-2026.png";

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
        href={bonitetAAA}
        target="_blank"
        rel="noreferrer"
        className="block rounded-xl border border-border bg-background p-6 lg:p-10 hover:border-navy/30 transition-colors"
      >
        <img
          src={bonitetAAA}
          alt="Certifikat bonitetne izvrsnosti HPC-SPG - 2026."
          className="mx-auto max-h-[560px] w-auto max-w-full object-contain"
        />
      </a>
    </ArticlePageShell>
  ),
});
