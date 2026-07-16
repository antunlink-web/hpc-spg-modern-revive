import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";

export const Route = createFileRoute("/upravljanje/minimalna-visina-pricuve")({
  head: () => ({
    meta: [
      { title: "Minimalna visina zajedničke pričuve | HPC-SPG" },
      { name: "description", content: "Informacije o zakonski propisanoj minimalnoj visini zajedničke pričuve po Zakonu o upravljanju i održavanju zgrada." },
      { property: "og:title", content: "Minimalna visina pričuve — HPC-SPG" },
      { property: "og:description", content: "Kako se određuje minimalna visina pričuve i tko je odgovoran za njezinu uplatu." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Upravljanje"
      title="Minimalna visina zajedničke pričuve"
      lead="Zakonski propisana najniža razina uplate pričuve za redovito održavanje zajedničkih dijelova zgrade."
      crumbs={[{ label: "Upravljanje", href: "/upravljanje" }, { label: "Minimalna visina pričuve" }]}
    >
      <p>
        Zajednička pričuva ključan je izvor sredstava za redovito održavanje zgrade — od servisa dizala i
        gromobrana, preko čišćenja i osvjetljenja zajedničkih prostora, do popravaka krova, pročelja i
        instalacija. Minimalna visina pričuve propisana je zakonom kako bi se osigurao osnovni standard
        održavanja.
      </p>

      <h2>Kako se određuje</h2>
      <p>
        Minimalna visina pričuve utvrđuje se u iznosu po četvornom metru korisne površine posebnog
        dijela zgrade (stana, poslovnog prostora ili garaže). Suvlasnici mogu odlukom većine (računato po
        suvlasničkim dijelovima) ugovoriti i višu razinu pričuve od minimalne, što se preporučuje kod
        starijih zgrada i zgrada s dizalima.
      </p>

      <h2>Obveza uplate</h2>
      <p>
        Pričuvu uplaćuje svaki suvlasnik mjesečno na račun posebne namjene zgrade, razmjerno svom
        suvlasničkom dijelu. Neplaćanje pričuve zakonski je osnov za prinudnu naplatu (ovrhu) putem
        javnog bilježnika ili suda.
      </p>

      <h2>Namjena sredstava</h2>
      <ul>
        <li>Redovito održavanje zajedničkih dijelova i uređaja zgrade</li>
        <li>Servis i popravci dizala, gromobrana, plinskih i električnih instalacija</li>
        <li>Osvjetljenje, čišćenje i higijena zajedničkih prostora</li>
        <li>Osiguranje zajedničkih dijelova zgrade</li>
        <li>Naknada upravitelju i predstavniku suvlasnika</li>
        <li>Izvanredni i nužni popravci prema Zakonu</li>
      </ul>

      <p>
        Za točan iznos pričuve na vašoj zgradi obratite se svom voditelju u HPC-SPG-u ili putem{" "}
        <a href="/kontakt">kontakt obrasca</a>.
      </p>
    </ArticlePageShell>
  ),
});
