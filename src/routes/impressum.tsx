import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";
import { withBase } from "@/lib/paths";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | HPC-SPG" },
      { name: "description", content: "Registarski i porezni podaci društva Hrvatski poslovni centar – stambeno poslovno gospodarstvo d.o.o." },
      { property: "og:title", content: "Impressum — HPC-SPG" },
      { property: "og:description", content: "Osnovni podaci društva HPC-SPG d.o.o." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Impressum"
      title="Impressum"
      lead="Osnovni podaci o društvu i izdavaču internetskih stranica."
      crumbs={[{ label: "Impressum" }]}
    >
      <h2>Naziv društva</h2>
      <p>Hrvatski poslovni centar – stambeno poslovno gospodarstvo d.o.o.<br />(skraćeno: HPC-SPG d.o.o.)</p>

      <h2>Sjedište</h2>
      <p>Ulica Adama Mandrovića 3<br />10000 Zagreb, Republika Hrvatska</p>

      <h2>Kontakt</h2>
      <p>
        Telefon: +385 1 243 03 06 · +385 1 243 03 03 · +385 1 243 03 02<br />
        Fax: +385 1 243 03 07<br />
        E-mail: <a href="mailto:info@hpc-spg.hr">info@hpc-spg.hr</a>
      </p>

      <h2>Djelatnost</h2>
      <p>Upravljanje i održavanje stambenih i poslovnih zgrada.</p>

      <h2>Izdavač internetskih stranica</h2>
      <p>HPC-SPG d.o.o., Ulica Adama Mandrovića 3, 10000 Zagreb.</p>

      <h2>Nadzorna tijela</h2>
      <p>
        Djelatnost upravljanja zgradama uređena je Zakonom o upravljanju i održavanju zgrada (NN 152/2024).
        Nadzor nad primjenom zakona provodi Ministarstvo prostornog uređenja, graditeljstva i državne
        imovine.
      </p>

      <p className="text-sm text-muted-foreground">
        Za detaljne podatke o zaštiti osobnih podataka pogledajte{" "}
        <a href={withBase("/zastita-osobnih-podataka")}>Izjavu o zaštiti osobnih podataka</a>, a o korištenju kolačića{" "}
        <a href={withBase("/kolacici")}>Politiku kolačića</a>.
      </p>
    </ArticlePageShell>
  ),
});
