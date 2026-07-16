import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";

export const Route = createFileRoute("/upravljanje/zajmovi-i-krediti")({
  head: () => ({
    meta: [
      { title: "Zajmovi i krediti za obnovu i uređenje zgrada | HPC-SPG" },
      { name: "description", content: "Zajmovi upravitelja, kratkoročne pozajmice i dugoročni bankovni krediti za obnovu, energetsku obnovu i uređenje višestambenih zgrada." },
      { property: "og:title", content: "Zajmovi i krediti — HPC-SPG" },
      { property: "og:description", content: "Financiranje uređenja i obnove zgrada bez upisa hipoteke — pod najpovoljnijim uvjetima." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Upravljanje"
      title="Zajmovi i krediti za obnovu i uređenje zgrada"
      lead="Rješenja za financiranje većih zahvata — od zamjene krova i uređenja pročelja do energetske obnove i obnove nakon potresa."
      crumbs={[{ label: "Upravljanje", href: "/upravljanje" }, { label: "Zajmovi i krediti" }]}
    >
      <p>
        Kad prikupljena sredstva zajedničke pričuve nisu dovoljna za veći zahvat, suvlasnicima nudimo
        nekoliko modela financiranja koji ne opterećuju osobnu imovinu.
      </p>

      <h2>Kratkoročna pozajmica upravitelja</h2>
      <p>
        HPC-SPG može odobriti kratkoročnu pozajmicu iz vlastitih sredstava kada zgrada treba brzu
        intervenciju (hitni popravak, sitni radovi, priprema dokumentacije). Otplata se vrši iz redovitih
        uplata pričuve — bez upisa hipoteke i bez zadužnica suvlasnika.
      </p>

      <h2>Dugoročni bankovni krediti</h2>
      <p>
        Za veće investicije (uređenje pročelja, zamjena krova, obnova instalacija, ugradnja dizala,
        energetska obnova) posredujemo pri dogovaranju dugoročnog kredita više poslovnih banaka. Jedini
        instrument osiguranja je izjava suvlasnika o povećanju pričuve tijekom razdoblja otplate —
        <strong>nema upisa hipoteke ni zadužnica pojedinih suvlasnika</strong>.
      </p>

      <h2>Krediti za obnovu nakon potresa</h2>
      <p>
        Uz sufinanciranje iz državnih programa, suvlasnicima omogućavamo dodatno financiranje
        konstruktivne i cjelovite obnove nakon potresa 2020. — s najpovoljnijim uvjetima na tržištu.
        Više na stranici <a href="/newsite/usluge/obnova-od-potresa">Obnova od potresa</a>.
      </p>

      <h2>Kako pokrenuti postupak</h2>
      <ol>
        <li>Predstavnik suvlasnika obraća se voditelju zgrade s opisom potrebnog zahvata.</li>
        <li>HPC-SPG priprema procjenu troška, opcije financiranja i simulaciju povećanja pričuve.</li>
        <li>Suvlasnici odlučuju o modelu financiranja (natpolovična većina po suvlasničkim dijelovima).</li>
        <li>Sklapa se ugovor o zajmu / kreditu i pokreću radovi.</li>
      </ol>

      <p>
        Za konkretnu ponudu obratite se putem <a href="/newsite/kontakt">kontakt obrasca</a> ili zatražite{" "}
        <a href="/newsite/zahtjev">prijedlog upravljanja</a>.
      </p>
    </ArticlePageShell>
  ),
});
