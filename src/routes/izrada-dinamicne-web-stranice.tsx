import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";

export const Route = createFileRoute("/izrada-dinamicne-web-stranice")({
  head: () => ({
    meta: [
      { title: "Izrada dinamične web stranice zgrade | HPC-SPG" },
      {
        name: "description",
        content:
          "Svakoj zgradi kojom upravljamo omogućavamo izradu vlastite dinamične, personalizirane web stranice — financijska izvješća, dokumenti, obavijesti i komunikacija suvlasnika na jednom mjestu.",
      },
      { property: "og:title", content: "Izrada dinamične web stranice zgrade — HPC-SPG" },
      {
        property: "og:description",
        content: "Dinamična web stranica zgrade: financijska izvješća, dokumenti, obavijesti i komunikacija suvlasnika.",
      },
    ],
  }),
  component: DynamicSitePage,
});

function DynamicSitePage() {
  return (
    <ArticlePageShell
      eyebrow="Digitalne usluge"
      title="Izrada dinamične web stranice zgrade"
      lead="Kako bismo Vam poslali individualnu ponudu ovisno o Vašim željama i zahtjevima, molimo ispunite Zahtjev."
      crumbs={[
        { label: "Digitalne usluge", href: "/e-financijski-izvjestaji" },
        { label: "Izrada dinamične web stranice" },
      ]}
      ctaTitle="Zatražite izradu web stranice zgrade"
      ctaText="Ispunite zahtjev i pripremit ćemo individualnu ponudu za vašu zgradu."
      ctaHref="/zahtjev-za-izradu-stranica"
      ctaLabel="Ispuni zahtjev"
    >
      <p className="not-prose mb-8">
        <Link
          to="/zahtjev-za-izradu-stranica"
          className="inline-flex items-center gap-2 rounded-md bg-navy text-navy-foreground px-6 py-3.5 text-sm font-semibold hover:bg-navy-soft transition-all hover:-translate-y-0.5"
        >
          Ispuni zahtjev <ArrowRight className="h-4 w-4" />
        </Link>
      </p>

      <p>
        Hrvatski poslovni centar – stambeno poslovno gospodarstvo d.o.o. prvi je upravitelj koji svojim
        korisnicima u okviru usluge upravljanja zgradom nudi i izradu{" "}
        <strong>dinamičnih web stranica za zgradu.</strong>
      </p>
      <p>
        Uz već postojeću mogućnost uvida u financijsko stanje zgrade korištenjem korisničkog imena i
        zaporke na našem web portalu, svakoj zgradi kojom upravljamo omogućavamo izradu svoje{" "}
        <strong>dinamične, personalizirane i individualne web stranice</strong>. Korisničko ime i
        zaporku može zatražiti predstavnik suvlasnika, a dostupni su svim suvlasnicima zgrade.
      </p>
      <p>
        Svrha dinamične web stranice zgrade je prvenstveno komunikacija s nama kao upraviteljem
        zgrade, ali ništa manje važno, i međusobna komunikacija suvlasnika, te suvlasnika sa svojim
        ovlaštenim predstavnikom, kao i obuhvaćanje svih važnih informacija na jednom mjestu i
        omogućavanje brzog pristupa svemu što je važno za upravljanje i održavanje zgrade kako bi se
        što prije i ažurnije moglo odgovoriti na sve zahtjeve i potrebe suvlasnika.
      </p>
      <p>
        Sva komunikacija i dokumenti na stranici zgrade vidljivi su isključivo suvlasnicima pojedine
        zgrade. O sadržaju stranice odlučuju sami suvlasnici, dok je upravitelj isključivo u ulozi
        administratora.
      </p>

      <h2>Logiranjem u web stranicu zgrade suvlasnicima je dostupan sljedeći sadržaj:</h2>
      <ul>
        <li>
          sva financijska izvješća zgrade – rekapitulacija poslovanja zgrade minimalno jednom
          mjesečno, račun o poslovanju zgrade za proteklu godinu, popis dužnika, analitike primitaka i
          izdataka zgrade…
        </li>
        <li>prijedlog i realizacijski GPU (Godišnji program upravljanja i održavanja zgrade)</li>
        <li>
          skenirani dokumenti – ponude, ugovori, plaćeni računi zgrade, ovjereni radni nalozi, sva
          dokumentacija na kojoj se temelji račun o poslovanju…
        </li>
        <li>fotodokumentacija – same zgrade, izvedenih radova…</li>
        <li>
          zapisnici sa sastanaka suvlasnika, o obavljenom periodičkom pregledu zgrade, sa sastanaka s
          upraviteljem…
        </li>
        <li>pozivi na sastanke suvlasnika</li>
        <li>razne obavijesti – o izvršenim radovima u zgradi, donešenim odlukama suvlasnika…</li>
        <li>međusobna komunikacija suvlasnika – brža i jednostavnija razmjena informacija</li>
        <li>prijava kvarova</li>
        <li>
          mogućnosti stvaranja anketnih upitnika među suvlasnicima radi olakšavanja donošenja
          većinskih odluka suvlasnika
        </li>
        <li>rasporedi čišćenja stubišta, snijega, košenja….</li>
        <li>
          kućni red i svi ostali dokumenti relevantni za upravljanje i održavanje zgrade, te općenito
          kulturu stanovanja
        </li>
        <li>svi ostali dokumenti koje suvlasnici žele imati na svojoj stranici</li>
        <li>zanimljivosti i novosti vezane za nekretnine</li>
        <li>forum suvlasnika</li>
      </ul>

      <h2>Osnovni besplatni paket za sve zainteresirane suvlasnike zgrada kojima upravljamo sadrži:</h2>
      <ul>
        <li>rekapitulaciju poslovanja zgrade minimalno jednom mjesečno</li>
        <li>račun o poslovanju u prethodnoj godini</li>
        <li>prijedlog Godišnjeg programa upravljanja za sljedeću godinu</li>
      </ul>

      <h2>
        Može se ugovoriti i sve ostale gore navedene pogodnosti za korisnike uz simboličnu mjesečnu
        naknadu ovisno o zahtjevima zgrade:
      </h2>
      <ul>
        <li>
          vlastita dinamična web stranica zgrade bez troškova izrade stranice, hostinga ili plaćanja
          domene, uz minimalnu mjesečnu naknadu
        </li>
        <li>24-satna usluga otklanjanja mogućih kvarova i administriranje</li>
        <li>sve informacije o zgradi na jednom mjestu</li>
      </ul>
    </ArticlePageShell>
  );
}
