import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";

export const Route = createFileRoute("/hitne-intervencije")({
  head: () => ({
    meta: [
      { title: "Hitne intervencije | HPC-SPG" },
      { name: "description", content: "24-satno dežurstvo za hitne intervencije na zajedničkim dijelovima zgrade — prijava putem predstavnika suvlasnika ili aplikacije." },
      { property: "og:title", content: "Hitne intervencije — HPC-SPG" },
      { property: "og:description", content: "Kako prijaviti hitni kvar na zajedničkim dijelovima zgrade." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Podrška"
      title="Hitne intervencije"
      lead="Način prijave i tijek postupka pri hitnim kvarovima na zajedničkim dijelovima zgrade."
      crumbs={[{ label: "Hitne intervencije" }]}
    >
      <p>
        Za HPC-SPG kao upravitelja, hitna intervencija je popravak kvara na zajedničkim dijelovima
        zgrade koji ugrožava sigurnost osoba, imovine ili funkcioniranje osnovnih instalacija — poput
        pucanja vodovodne cijevi, kvara na dizalu s ljudima unutra, prekida napajanja u zajedničkom
        prostoru, kvara plinske instalacije, ili sličnog.
      </p>

      <h2>Kako prijaviti</h2>
      <ol>
        <li><strong>Radnim danom (08:00 – 16:00)</strong>: obratite se predstavniku suvlasnika koji intervenciju prijavljuje voditelju vaše zgrade u HPC-SPG-u.</li>
        <li><strong>Izvan radnog vremena, noću i vikendom</strong>: predstavnik suvlasnika kontaktira dežurni servis (broj se dostavlja predstavniku prilikom preuzimanja zgrade).</li>
        <li><strong>Putem web/mobilne aplikacije</strong>: prijava kvara dostupna je 24/7 svim suvlasnicima s pristupnim podacima.</li>
      </ol>

      <h2>Što nije hitna intervencija</h2>
      <p>
        Manji kvarovi koji ne ugrožavaju sigurnost i mogu čekati (npr. prekid rada dizala bez ljudi
        unutra, oštećenje pločice u haustoru, curenje u zajedničkom podrumu bez neposredne opasnosti)
        rješavaju se u redovnom radnom vremenu putem redovnih prijava kvara.
      </p>

      <h2>Odgovornost troška</h2>
      <p>
        Troškovi hitnih intervencija na zajedničkim dijelovima pokrivaju se iz zajedničke pričuve.
        Ako se pokaže da je kvar prouzročen nepažnjom pojedinog suvlasnika ili trećeg,
        upravitelj potraživanje prosljeđuje odgovornoj strani.
      </p>

      <p>
        Kontakti su dostupni na stranici <a href="/kontakt">Kontakt</a> — za pristupne podatke aplikacije
        pogledajte <a href="/korisnicki-podaci">Pristupni podaci</a>.
      </p>
    </ArticlePageShell>
  ),
});
