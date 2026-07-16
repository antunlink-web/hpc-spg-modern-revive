import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";

export const Route = createFileRoute("/seminari")({
  head: () => ({
    meta: [
      { title: "Seminari o upravljanju zgradama | HPC-SPG" },
      { name: "description", content: "Pregled seminara i savjetovanja o upravljanju i održavanju zgrada koje je HPC-SPG organizirao za suvlasnike, predstavnike i upravitelje." },
      { property: "og:title", content: "Seminari — HPC-SPG" },
      { property: "og:description", content: "Edukacija sudionika u sustavu upravljanja zgradama." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Edukacija"
      title="Seminari i savjetovanja"
      lead="Kroz godine smo organizirali niz seminara o upravljanju i održavanju zgrada za suvlasnike, predstavnike, tijela državne uprave i upravitelje."
      crumbs={[{ label: "Seminari" }]}
    >
      <p>
        HPC-SPG je od 1998. do 2005. bio organizator pet velikih savjetovanja o upravljanju i održavanju
        zgrada te kulturi stanovanja. Cilj je bio educirati sve sudionike u procesu — od suvlasnika i
        predstavnika, preko tijela državne i lokalne uprave, do samih upravitelja — o njihovim pravima,
        obvezama i mogućnostima suradnje.
      </p>

      <h2>Teme koje su obrađivane</h2>
      <ul>
        <li>Zakonodavni okvir upravljanja i održavanja zgrada</li>
        <li>Uloga i ovlasti predstavnika suvlasnika</li>
        <li>Financijsko poslovanje zgrade i vođenje pričuve</li>
        <li>Održavanje instalacija i tehničkih sustava (dizala, plin, elektro, protupožarna zaštita)</li>
        <li>Postupak upisa u zemljišne knjige (etažiranje)</li>
        <li>Financiranje većih zahvata i pristup kreditima</li>
        <li>Kultura stanovanja u zajednici i rješavanje sporova</li>
      </ul>

      <h2>Sudionici</h2>
      <p>
        Savjetovanja su okupljala predstavnike suvlasnika, upravitelje iz cijele Hrvatske, predstavnike
        Grada Zagreba i Ministarstva, komunalnih poduzeća te stručnjake iz područja graditeljstva,
        prava i financija. Materijali sa seminara dostupni su na upit.
      </p>

      <p>
        Za informacije o budućim edukativnim aktivnostima pratite <a href="/novosti">Novosti</a> ili nas
        kontaktirajte putem <a href="/kontakt">kontakt obrasca</a>.
      </p>
    </ArticlePageShell>
  ),
});
