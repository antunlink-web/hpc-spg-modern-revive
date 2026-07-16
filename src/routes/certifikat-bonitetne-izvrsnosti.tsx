import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";
import bonitetAAA from "@/assets/bonitet-aaa.png.asset.json";

export const Route = createFileRoute("/certifikat-bonitetne-izvrsnosti")({
  head: () => ({
    meta: [
      { title: "Certifikat bonitetne izvrsnosti AAA | HPC-SPG" },
      { name: "description", content: "HPC-SPG je nositelj AAA — Platinum certifikata bonitetne izvrsnosti, jednog od najviših europskih standarda kvalitete poslovanja." },
      { property: "og:title", content: "AAA Certifikat bonitetne izvrsnosti — HPC-SPG" },
      { property: "og:description", content: "Priznanje financijske stabilnosti, pouzdanosti i kvalitete poslovanja HPC-SPG-a." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Certifikati"
      title="Certifikat bonitetne izvrsnosti AAA — Platinum"
      lead="Kontinuirano priznanje financijske stabilnosti, pouzdanosti i kvalitete poslovanja."
      crumbs={[{ label: "Certifikat AAA" }]}
      aside={
        <div className="rounded-xl border border-border bg-background p-6 text-center">
          <img src={bonitetAAA.url} alt="Bonitet AAA — Platinum certifikat" className="mx-auto h-40 w-auto" />
          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">Bonitetna izvrsnost</p>
          <p className="mt-1 text-sm font-semibold text-navy">AAA — Platinum</p>
        </div>
      }
    >
      <p>
        HPC-SPG kontinuirano je nositelj <strong>AAA — Platinum certifikata bonitetne izvrsnosti</strong>,
        jednog od najviših europskih standarda kojima se definira kvaliteta poslovanja poduzeća. Certifikat
        dodjeljuje neovisna bonitetna kuća na temelju analize financijskih izvještaja i pokazatelja
        poslovanja u posljednjih nekoliko godina.
      </p>

      <h2>Što certifikat znači za suvlasnike</h2>
      <ul>
        <li>Financijska stabilnost upravitelja — sigurnost sredstava zajedničke pričuve</li>
        <li>Kontinuitet poslovanja i sposobnost dugoročnih ulaganja</li>
        <li>Priznata razina rizika koja je znatno ispod prosjeka industrije</li>
        <li>Kredibilitet u pregovorima s bankama, izvođačima i institucijama</li>
      </ul>

      <h2>Kako se dodjeljuje</h2>
      <p>
        Ocjenjuju se profitabilnost, likvidnost, zaduženost, aktivnost i rast, uz analizu urednosti u
        podmirivanju obveza (uključujući javne institucije i dobavljače). Certifikat se obnavlja godišnje
        te ga zadržavaju samo poduzeća koja u kontinuitetu ispunjavaju najviše standarde.
      </p>

      <p>
        HPC-SPG je nositelj AAA certifikata <strong>od 2017. godine</strong>, čime se svrstavamo u
        najbolju kategoriju europskih poduzeća po financijskoj stabilnosti i pouzdanosti.
      </p>
    </ArticlePageShell>
  ),
});
