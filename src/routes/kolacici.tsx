import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";

export const Route = createFileRoute("/kolacici")({
  head: () => ({
    meta: [
      { title: "Politika kolačića | HPC-SPG" },
      { name: "description", content: "Informacije o kolačićima (cookies) koje koriste internetske stranice HPC-SPG-a." },
      { property: "og:title", content: "Politika kolačića — HPC-SPG" },
      { property: "og:description", content: "Kako koristimo kolačiće na hpc-spg internetskim stranicama." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Pravno"
      title="Politika kolačića"
      lead="Kako koristimo kolačiće (cookies) na našim internetskim stranicama."
      crumbs={[{ label: "Kolačići" }]}
    >
      <h2>Što su kolačići</h2>
      <p>
        Kolačići (engl. <em>cookies</em>) su male tekstualne datoteke koje internetska stranica sprema u
        vaš preglednik pri posjetu. Služe kako bi stranica ispravno radila, pamtila vaše postavke i
        omogućila anonimno mjerenje posjećenosti.
      </p>

      <h2>Koje kolačiće koristimo</h2>
      <ul>
        <li><strong>Nužni kolačići</strong> — omogućuju osnovnu funkcionalnost stranice (navigacija, obrasci).</li>
        <li><strong>Analitički kolačići</strong> — anonimno mjerenje posjeta radi unaprjeđenja sadržaja (npr. broj posjeta pojedinoj stranici).</li>
      </ul>
      <p>Ne koristimo marketinške niti oglašivačke kolačiće trećih strana.</p>

      <h2>Kako upravljati kolačićima</h2>
      <p>
        Kolačiće možete u svakom trenutku izbrisati ili blokirati putem postavki svog preglednika
        (Chrome, Firefox, Safari, Edge). Ograničavanje kolačića može utjecati na funkcionalnost pojedinih
        dijelova stranice.
      </p>

      <h2>Više informacija</h2>
      <p>
        Za pitanja u vezi s obradom osobnih podataka pogledajte{" "}
        <a href="/newsite/zastita-osobnih-podataka">Izjavu o zaštiti osobnih podataka</a> ili nas kontaktirajte
        na <a href="mailto:info@hpc-spg.hr">info@hpc-spg.hr</a>.
      </p>
    </ArticlePageShell>
  ),
});
