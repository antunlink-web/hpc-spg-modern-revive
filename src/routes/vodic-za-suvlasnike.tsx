import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";

export const Route = createFileRoute("/vodic-za-suvlasnike")({
  head: () => ({
    meta: [
      { title: "Vodič za suvlasnike zgrada | HPC-SPG" },
      { name: "description", content: "Praktičan vodič za suvlasnike stambenih zgrada — prava, obveze, odlučivanje i suradnja s upraviteljem." },
      { property: "og:title", content: "Vodič za suvlasnike — HPC-SPG" },
      { property: "og:description", content: "Sve što suvlasnik treba znati o životu u zgradi." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Vodič"
      title="Vodič za suvlasnike zgrada"
      lead="Priručnik s odgovorima na najčešća pitanja suvlasnika stambenih i poslovnih zgrada."
      crumbs={[{ label: "Vodič za suvlasnike" }]}
    >
      <p>
        Kao vlasnik posebnog dijela zgrade (stana, poslovnog prostora ili garaže), vi ste ujedno i
        suvlasnik zajedničkih dijelova te zgrade. Prava i obveze koje iz toga proizlaze uređuju Zakon
        o vlasništvu i drugim stvarnim pravima te Zakon o upravljanju i održavanju zgrada (NN 152/2024).
      </p>

      <h2>Vaša ključna prava</h2>
      <ul>
        <li>Uvid u financijsko stanje zgrade i utrošak pričuve u svakom trenutku</li>
        <li>Sudjelovanje u odlučivanju o poslovima upravljanja i održavanja</li>
        <li>Kandidiranje i izbor za predstavnika suvlasnika</li>
        <li>Pravo prigovora na odluke koje krše zakon ili međuvlasnički ugovor</li>
      </ul>

      <h2>Vaše ključne obveze</h2>
      <ul>
        <li>Redovita mjesečna uplata zajedničke pričuve u punom iznosu</li>
        <li>Poštovanje kućnog reda i pravila korištenja zajedničkih dijelova</li>
        <li>Prijava kvarova na zajedničkim dijelovima predstavniku ili upravitelju</li>
        <li>Obavještavanje upravitelja o promjeni vlasništva, kontaktu ili korisniku prostora</li>
      </ul>

      <h2>Kako se donose odluke</h2>
      <p>
        Odluke o poslovima <strong>redovite uprave</strong> (redovito održavanje, izbor izvođača za manje
        radove, godišnji program) donose se natpolovičnom većinom suvlasnika računato po suvlasničkim
        dijelovima. Za poslove <strong>izvanredne uprave</strong> (veće investicije, dizanje kredita,
        promjena upravitelja, izmjena međuvlasničkog ugovora) potrebna je suglasnost svih suvlasnika ili
        kvalificirana većina propisana zakonom.
      </p>

      <h2>Uloga predstavnika suvlasnika</h2>
      <p>
        Predstavnika biraju suvlasnici većinom glasova. On zastupa suvlasnike pred upraviteljem i trećim
        osobama, daje naloge upravitelju u okviru donesenih odluka te sudjeluje u tehničkom nadzoru
        zgrade. Predstavnik nije samostalno ovlašten donositi odluke — on provodi volju suvlasnika.
      </p>

      <h2>Kad promijenite stan / prostor</h2>
      <ul>
        <li>Obavijestite upravitelja o promjeni vlasništva (dostavite kupoprodajni ugovor ili rješenje o nasljeđivanju)</li>
        <li>Prijavite promjene za komunalne usluge</li>
        <li>Provjerite jesu li podmirene sve obveze prema pričuvi do dana primopredaje</li>
      </ul>

      <p>
        Za sva pitanja obratite se voditelju vaše zgrade u HPC-SPG-u ili putem{" "}
        <a href="/newsite/kontakt">kontakt obrasca</a>. Pojmovnik pojmova iz Zakona pogledajte na{" "}
        <a href="/newsite/upravljanje/osnovni-pojmovi">Osnovni pojmovi upravljanja</a>.
      </p>
    </ArticlePageShell>
  ),
});
