import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";
import { withBase } from "@/lib/paths";

export const Route = createFileRoute("/zasto-smo-bolji-izbor")({
  head: () => ({
    meta: [
      { title: "Zašto smo bolji izbor — HPC-SPG" },
      { name: "description", content: "Fleksibilnost, kvaliteta, etičnost, bonitet AAA, stručnost, transparentnost i 28 godina iskustva u upravljanju zgradama." },
      { property: "og:title", content: "Zašto smo bolji izbor — HPC-SPG" },
      { property: "og:description", content: "Razlozi zbog kojih suvlasnici biraju HPC-SPG kao svog upravitelja zgrade." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Zašto HPC-SPG"
      title="Zašto smo bolji izbor?"
      lead="Fleksibilnost, kvaliteta, etičnost, sigurnost i 28 godina iskustva — razlozi zbog kojih nam suvlasnici vjeruju."
      crumbs={[{ label: "Zašto smo bolji izbor" }]}
    >
      <h2>Fleksibilnost</h2>
      <ul>
        <li>Mogućnost izbora različitih opcija poslovanja</li>
        <li>Prilagođavanje svih aspekata upravljanja i poslovanja željama i potrebama suvlasnika</li>
      </ul>

      <h2>Kvaliteta i kontinuitet</h2>
      <ul>
        <li>Cilj nam je zgradama kojima upravljamo dati kvalitetnu podršku i uslugu</li>
        <li>Implementirani sustav upravljanja kvalitetom (ISO 9001)</li>
        <li>Prioritet tvrtke je imati zadovoljne korisnike usluga</li>
        <li>Sustavno pronalazimo nove načine da razina naše usluge bude u skladu s načelima kontinuiranog poboljšanja i poslovne izvrsnosti</li>
      </ul>

      <h2>Etičnost</h2>
      <p>
        Potpisnik smo i koautor Kodeksa poslovanja i ponašanja upravitelja nekretninama kojim su regulirana
        sva pitanja etičnosti i odgovornosti u obavljanju posla upravitelja.
      </p>

      <h2>Bonitet</h2>
      <p>
        Kontinuirano smo nositelj <a href={withBase("/certifikat-bonitetne-izvrsnosti")}>AAA certifikata bonitetne
        izvrsnosti</a> koji je potvrda dugogodišnjeg sustavnog i kvalitetnog rada. Certifikat je jedan od
        najvažnijih europskih standarda kojima se definira kvaliteta poslovanja.
      </p>

      <h2>Stručnost</h2>
      <ul>
        <li>Zapošljavamo samo najstručnije osoblje</li>
        <li>Djelatnici građevinske, ekonomske i pravne struke s višegodišnjim iskustvom</li>
        <li>Kroz sve faze upravljanja — od prvog kontakta, ugovaranja i primopredaje do realizacije —
          promptno odgovaramo na sve zahtjeve suvlasnika</li>
      </ul>

      <h2>Transparentnost i suvremenost</h2>
      <ul>
        <li>Sustavno pratimo najnoviju regulativu i trendove moderniziranog poslovanja</li>
        <li>Financijski izvještaji dostupni su svim suvlasnicima putem web i mobilne aplikacije, e-maila i pošte</li>
        <li>Mogućnost dostave uplatnica za pričuvu na e-mail te preuzimanje 2D barkoda za plaćanje kroz aplikaciju</li>
      </ul>

      <h2>Sigurnost</h2>
      <p>
        Vodimo računa o zaštiti osobnih podataka — cjelokupno poslovanje usklađeno je s GDPR regulativom o{" "}
        <a href={withBase("/zastita-osobnih-podataka")}>zaštiti osobnih podataka</a>.
      </p>

      <h2>Pristupačnost</h2>
      <ul>
        <li>Ured u poslovnom središtu blizu Kvaternikovog trga — dostupno javnim gradskim prijevozom</li>
        <li>Mogućnost korištenja javnih garaža (Kvaternikov trg i Gorica)</li>
      </ul>

      <h2>Iskustvo</h2>
      <ul>
        <li>Nekretninama upravljamo <strong>28 godina</strong>, od samog početka primjene Zakona o vlasništvu</li>
        <li>Bogato znanje i iskustvo u svim područjima upravljanja i održavanja</li>
        <li>Za svaki problem imamo rješenje</li>
      </ul>
    </ArticlePageShell>
  ),
});
