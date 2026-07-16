import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";

export const Route = createFileRoute("/usluge/upis-u-zemljisne-knjige")({
  head: () => ({
    meta: [
      { title: "Upis zgrade u zemljišne knjige | HPC-SPG" },
      { name: "description", content: "Postupak upisa zgrade i posebnih dijelova (etažiranje) u zemljišne knjige — priprema dokumentacije i vođenje postupka pred sudom." },
      { property: "og:title", content: "Upis u zemljišne knjige — HPC-SPG" },
      { property: "og:description", content: "Etažiranje i uknjižba vlasništva stanova, poslovnih prostora i garaža." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Usluge"
      title="Upis zgrade u zemljišne knjige"
      lead="Etažiranje i uknjižba stanova, poslovnih prostora i garaža — bez brige za suvlasnike."
      crumbs={[{ label: "Usluge" }, { label: "Upis u zemljišne knjige" }]}
    >
      <p>
        Upis zgrade i posebnih dijelova (stanova, poslovnih prostora, garaža) u zemljišne knjige je
        preduvjet za nesmetano raspolaganje nekretninom — kupoprodaju, dizanje hipotekarnog kredita,
        nasljeđivanje i sudske postupke. HPC-SPG vodi cjelokupni postupak u ime suvlasnika.
      </p>

      <h2>Što uključuje postupak</h2>
      <ul>
        <li>Analiza postojeće dokumentacije zgrade</li>
        <li>Naručivanje elaborata etažiranja od ovlaštenog geodeta i arhitekta</li>
        <li>Prikupljanje potrebnih suglasnosti suvlasnika</li>
        <li>Podnošenje prijedloga za uknjižbu nadležnom općinskom sudu — zemljišnoknjižnom odjelu</li>
        <li>Praćenje postupka i otklanjanje eventualnih nedostataka</li>
        <li>Preuzimanje izvatka iz zemljišne knjige nakon uspješne uknjižbe</li>
      </ul>

      <h2>Zašto je važno</h2>
      <ul>
        <li>Pravna sigurnost vlasništva — jasno definirana prava svakog suvlasnika</li>
        <li>Preduvjet za sudsku prinudnu naplatu neplaćene pričuve</li>
        <li>Preduvjet za dizanje kredita s hipotekom</li>
        <li>Preduvjet za sve zahvate koji traže građevinsku dozvolu</li>
      </ul>

      <p>
        Za pokretanje postupka upisa u zemljišne knjige vaše zgrade obratite se putem{" "}
        <a href="/kontakt">kontakt obrasca</a>.
      </p>
    </ArticlePageShell>
  ),
});
