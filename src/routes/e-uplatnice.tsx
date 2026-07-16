import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";

export const Route = createFileRoute("/e-uplatnice")({
  head: () => ({
    meta: [
      { title: "E-uplatnice — slanje uplatnica e-mailom | HPC-SPG" },
      { name: "description", content: "Zatražite dostavu mjesečnih uplatnica za pričuvu na e-mail adresu — s otisnutim 2D barkodom za jednostavno plaćanje." },
      { property: "og:title", content: "E-uplatnice — HPC-SPG" },
      { property: "og:description", content: "Manje papira, brže plaćanje — uplatnice u vaš inbox svakog mjeseca." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Digitalne usluge"
      title="E-uplatnice — uplatnice za pričuvu e-mailom"
      lead="Umjesto papirnate uplatnice — mjesečno primite uplatnicu s 2D barkodom u svoj inbox."
      crumbs={[{ label: "E-uplatnice" }]}
      ctaTitle="Prijava za e-uplatnice"
      ctaText="Ispunite kratki obrazac s podacima za identifikaciju."
      ctaHref="/korisnicki-podaci"
      ctaLabel="Zatražite pristup"
    >
      <p>
        Za suvlasnike koji preferiraju digitalnu komunikaciju, HPC-SPG omogućava mjesečno slanje
        uplatnica za zajedničku pričuvu na e-mail adresu. Uplatnica sadrži <strong>2D barkod</strong>
        koji omogućava plaćanje u nekoliko sekundi kroz mobilno bankarstvo — bez ručnog unosa poziva na
        broj, iznosa i primatelja.
      </p>

      <h2>Prednosti</h2>
      <ul>
        <li>Manje papira i ekološki održivije poslovanje</li>
        <li>Brže plaćanje — samo skenirate 2D barkod u aplikaciji svoje banke</li>
        <li>Uplatnice uvijek dostupne u vašem inboxu — bez brige o gubitku papira</li>
        <li>Automatska dostava svakog mjeseca — nema kašnjenja preko sporije pošte</li>
      </ul>

      <h2>Kako se prijaviti</h2>
      <p>
        Ispunite obrazac za dostavu pristupnih podataka. U roku od nekoliko radnih dana provjeravamo
        podatke i aktiviramo e-uplatnice na naznačenoj adresi. Aktivacija je besplatna.
      </p>

      <p>
        Uz e-uplatnice, kroz web i mobilnu aplikaciju možete pratiti i{" "}
        <a href="/e-financijski-izvjestaji">financijske izvještaje zgrade</a> te{" "}
        <a href="/dokumenti-zgrade">dokumente zgrade</a>.
      </p>
    </ArticlePageShell>
  ),
});
