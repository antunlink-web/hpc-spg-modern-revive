import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/ponuda")({
  head: () => ({
    meta: [
      { title: "Ponuda — HPC-SPG upravljanje zgradama" },
      { name: "description", content: "Sveobuhvatna ponuda upravljanja zgradama: financijski, tehnički i pravni poslovi, transparentno vođenje pričuve i digitalne usluge." },
      { property: "og:title", content: "Ponuda — HPC-SPG" },
      { property: "og:description", content: "Sveobuhvatna rješenja za upravljanje i održavanje stambenih i poslovnih zgrada." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Ponuda"
      title="Poslovi upravljanja i održavanja zgrada"
      lead="Naknada upravitelju može biti ugovorena u fiksnom iznosu ili u postotku od pričuve — ovisno o željama suvlasnika i visini pričuve."
      crumbs={[{ label: "Ponuda" }]}
      aside={
        <div className="rounded-xl border border-border bg-background p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Preuzmi</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="/newsite/documents/ponuda-za-upravljanje-zgradama.pdf" target="_blank" rel="noreferrer" className="text-emerald hover:underline inline-flex items-center gap-2"><FileText className="h-4 w-4" /> Ponuda za upravljanje zgradama</a></li>
            <li><a href="/newsite/documents/ponuda-novoizgradeni-objekti.pdf" target="_blank" rel="noreferrer" className="text-emerald hover:underline inline-flex items-center gap-2"><FileText className="h-4 w-4" /> Novoizgrađeni objekti pod garancijom</a></li>
            <li><a href="/newsite/documents/odluka-mvu-sklapanje-ugovora.pdf" target="_blank" rel="noreferrer" className="text-emerald hover:underline inline-flex items-center gap-2"><FileText className="h-4 w-4" /> Odluka MVU — Ps-1</a></li>
            <li><a href="/newsite/documents/popis-zajednickih-dijelova-i-uredaja.pdf" target="_blank" rel="noreferrer" className="text-emerald hover:underline inline-flex items-center gap-2"><FileText className="h-4 w-4" /> Popis zajedničkih dijelova zgrade</a></li>
          </ul>
        </div>
      }
    >
      <ul>
        <li>Bez skrivenih troškova i naknada</li>
        <li>Transparentno vođenje sredstava zajedničke pričuve na računu posebne namjene, odvojenom od poslovanja tvrtke upravitelja i zaštićenom od ovrhe</li>
        <li>Financijski izvještaji u svakom trenutku dostupni svim suvlasnicima — pošta, e-mail i web/mobilna aplikacija</li>
        <li>Uplatnice s otisnutim 2D barkodom i mogućnošću slanja e-mailom</li>
        <li>Učinkovit sustav kontrole i naplate dugovanja za pričuvu</li>
        <li>Pravno, tehničko i financijsko praćenje svih aktivnosti upravljanja</li>
      </ul>

      <h2>1. Financijski poslovi</h2>
      <ul>
        <li>Obračun i zaduženje suvlasnika za plaćanje zajedničke pričuve</li>
        <li>Distribucija uplatnica — dostavom i na e-mail te kroz web i mobilnu aplikaciju</li>
        <li>Izrada i slanje faktura za pričuvu pravnim osobama</li>
        <li>Transparentno i cjelovito knjigovodstveno vođenje zgrade — knjiženje uplata suvlasnika i plaćanje računa dobavljača isključivo po nalogu predstavnika suvlasnika</li>
        <li>Prilagođena analitička financijska izvješća i rekapitulacije poslovanja zgrade</li>
        <li>Plaćanje svih zajedničkih troškova zgrade iz zajedničke pričuve</li>
        <li>Obračun svih vrsta ugovora — o djelu (JOPPD obrazac), o zakupu i drugih primitaka i izdataka zgrade</li>
      </ul>

      <h2>2. Zajmovi i platni promet</h2>
      <ul>
        <li>Zajmovi za sve poslove upravljanja i održavanja zgrade</li>
        <li>Dugoročni krediti više poslovnih banaka — jedino osiguranje je redovno uplaćivanje pričuve</li>
        <li>Krediti za obnovu nakon potresa s najpovoljnijim uvjetima na tržištu</li>
        <li>Kratkoročne pozajmice bez upisa hipoteke ili zadužnica suvlasnika</li>
        <li>Mogućnost oročavanja sredstava zajedničke pričuve</li>
        <li>Plaćanje pričuve bez naknade putem trajnog naloga, mobilnog i internet bankarstva</li>
        <li>Poseban žiro-račun za zajedničku pričuvu, zaštićen od ovrhe po računima upravitelja</li>
      </ul>

      <h2>3. Tehnički poslovi</h2>
      <ul>
        <li>Svaka zgrada ima svog referenta koji vodi brigu o zgradi</li>
        <li>Stručna tehnička pomoć u održavanju, popravcima i poboljšanju nekretnine</li>
        <li>Povremeni i godišnji pregledi stanja zgrade</li>
        <li>Izrada popisa zajedničkih dijelova zgrade</li>
        <li>Izrada godišnjeg i višegodišnjeg programa upravljanja (GPU/VGPU)</li>
        <li>Organiziranje manjih i većih, hitnih i nužnih radova</li>
        <li><a href="/newsite/hitne-intervencije">24-satno dežurstvo za hitne intervencije</a></li>
        <li>Prikupljanje ponuda za poslove i izbor izvođača od strane suvlasnika</li>
        <li><a href="/newsite/usluge/energetska-obnova">Energetska obnova zgrada</a> — energetski certifikat, projektna dokumentacija i prijava na natječaje</li>
        <li>Preuzimanje novoizgrađenih zgrada na upravljanje izravno od investitora</li>
        <li>Poseban program upravljanja i održavanja poslovnih zgrada i trgovačkih centara</li>
        <li>Najpovoljnije osiguranje zajedničkih dijelova s najboljim pokrićem na tržištu</li>
      </ul>

      <h2>4. Pravni poslovi</h2>
      <ul>
        <li>Pomoć pri sklapanju Međuvlasničkog ugovora i Ugovora o upravljanju</li>
        <li>Primopredaja zgrade od bivšeg upravitelja</li>
        <li>Izrada svih odluka potrebnih za poslove upravljanja i održavanja</li>
        <li>Vođenje evidencije suvlasnika usklađeno sa zemljišnim knjigama i Registrima</li>
        <li>Pokretanje i vođenje <a href="/newsite/usluge/upis-u-zemljisne-knjige">upisa zgrade i posebnih dijelova u zemljišne knjige</a></li>
        <li>Učinkovit sustav prinudne naplate dugovanja i zastupanje u sudskim postupcima</li>
        <li>Sastavljanje svih vrsta ugovora — o djelu, o zakupu i drugih</li>
        <li>Zastupanje suvlasnika u postupcima prema trećim osobama (investitor, izvođači)</li>
        <li>Pravni savjeti vezani za djelokrug rada upravitelja</li>
      </ul>
    </ArticlePageShell>
  ),
});
