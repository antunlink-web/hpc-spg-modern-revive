export interface NewsPost {
  slug: string;
  title: string;
  date: string; // ISO YYYY-MM-DD
  displayDate: string; // Croatian format
  category: string;
  excerpt: string;
  /** Body as JSX-safe HTML string. Uses ArticlePageShell prose styling. */
  bodyHtml: string;
  cover?: string; // asset URL
  gallery?: { src: string; alt: string }[];
  documents?: { label: string; href: string }[];
  externalLinks?: { label: string; href: string }[];
  seoTitle?: string;
  metaDescription?: string;
  /** Original hpc-spg.hr slug used for redirect mapping. */
  legacySlugs?: string[];
}

// Ordered newest → oldest.
export const news: NewsPost[] = [
  {
    slug: "obavijest-suvlasnicima-o-novim-zakonskim-obvezama-vezanim-uz-ugradnju-uredaja-za",
    title: "Obavijest suvlasnicima o novim zakonskim obvezama vezanim uz ugradnju uređaja za razdiobu topline",
    date: "2026-07-09",
    displayDate: "9. srpnja 2026.",
    category: "Zakonske obveze",
    excerpt: "Novi Zakon o upravljanju i održavanju zgrada (NN 152/2024) uvodi obveze vezane uz ugradnju uređaja za razdiobu troškova toplinske energije u zgradama s centralnim grijanjem.",
    bodyHtml: `<p>Sukladno novom Zakonu o upravljanju i održavanju zgrada (NN 152/2024) i pratećim propisima o učinkovitom korištenju energije, uvedene su nove obveze za suvlasnike zgrada s centralnim toplinskim sustavima.</p>
<h2>Što se traži</h2>
<p>U zgradama s centralnim grijanjem obavezna je ugradnja uređaja za mjerenje i razdiobu troškova toplinske energije po posebnim dijelovima zgrade (stanovima i poslovnim prostorima).</p>
<h2>Rokovi</h2>
<p>Za više informacija o rokovima i obveznicima ugradnje obratite se svom upravitelju.</p>
<p>Detaljne informacije potražite na stranici <a href="/upravljanje/toplinski-sustav-nove-obveze">Toplinski sustav — nove obveze</a>.</p>`,
    seoTitle: "Nove zakonske obveze — uređaji za razdiobu topline | HPC-SPG",
    metaDescription: "Obavijest o novim obvezama za ugradnju uređaja za razdiobu toplinske energije po Zakonu o upravljanju i održavanju zgrada.",
  },
  {
    slug: "javni-poziv-ugradnja-dizala-u-postojece-visestambene-i-stambeno-poslovne-zgrade",
    title: "Javni poziv — ugradnja dizala u postojeće višestambene i stambeno-poslovne zgrade u 2026.",
    date: "2026-04-24",
    displayDate: "24. travnja 2026.",
    category: "Javni poziv",
    excerpt: "Grad Zagreb objavio je Javni poziv za podnošenje prijava za sufinanciranje ugradnje dizala u postojeće višestambene i stambeno-poslovne zgrade u 2026. godini.",
    bodyHtml: `<p>Grad Zagreb objavio je Javni poziv za sufinanciranje ugradnje dizala u postojeće višestambene i stambeno-poslovne zgrade u 2026. godini.</p>
<h2>Predmet sufinanciranja</h2>
<p>Sufinancira se ugradnja novog dizala u postojeće zgrade u kojima do sada nije bilo ugrađeno dizalo, kao i zamjena postojećih dizala kada se ista ne mogu popraviti.</p>
<h2>Prijava</h2>
<p>Prijave podnose predstavnici suvlasnika ili upravitelj zgrade u ime suvlasnika, sukladno uvjetima Javnog poziva. HPC-SPG kao ovlašteni upravitelj priprema svu potrebnu dokumentaciju za suvlasnike zgrada kojima upravljamo.</p>
<h2>Kontakt</h2>
<p>Za pripremu prijave obratite se svom voditelju zgrade ili putem <a href="/kontakt">kontakt obrasca</a>.</p>`,
    seoTitle: "Javni poziv 2026. — sufinanciranje ugradnje dizala | HPC-SPG",
    metaDescription: "Grad Zagreb sufinancira ugradnju dizala u postojeće višestambene zgrade u 2026. godini. HPC-SPG priprema prijave za suvlasnike.",
  },
  {
    slug: "javni-poziv-za-podnosenje-prijava-za-sufinanciranje-uredenja-procelja-za-postoje",
    title: "Javni poziv — sufinanciranje uređenja pročelja za postojeće višestambene i stambeno-poslovne zgrade",
    date: "2026-04-15",
    displayDate: "15. travnja 2026.",
    category: "Javni poziv",
    excerpt: "Grad Zagreb otvorio je Javni poziv za sufinanciranje uređenja pročelja postojećih višestambenih i stambeno-poslovnih zgrada u 2026. godini.",
    bodyHtml: `<p>Grad Zagreb objavio je Javni poziv za podnošenje prijava za sufinanciranje uređenja pročelja za postojeće višestambene i stambeno-poslovne zgrade u 2026. godini.</p>
<h2>Predmet sufinanciranja</h2>
<p>Sufinancira se sanacija i uređenje uličnih pročelja zgrada, uključujući fasadu, zabate, sokle, ograde balkona i pripadajuće limarske radove.</p>
<h2>Postupak prijave</h2>
<p>Prijave se podnose putem obrazaca Grada Zagreba. Za suvlasnike zgrada kojima upravljamo pripremamo tehničku, financijsku i pravnu dokumentaciju.</p>
<p>Za više informacija obratite se svom voditelju zgrade ili putem <a href="/kontakt">kontakt obrasca</a>.</p>`,
    seoTitle: "Javni poziv 2026. — sufinanciranje uređenja pročelja | HPC-SPG",
    metaDescription: "Grad Zagreb sufinancira uređenje pročelja postojećih višestambenih zgrada u 2026. HPC-SPG priprema prijave za suvlasnike.",
  },
  {
    slug: "fiskalizacija-izdavanje-racuna-za-stambene-zgrade-nakon-1-sijecnja-2026-g",
    title: "Fiskalizacija — izdavanje računa za stambene zgrade nakon 1. siječnja 2026.",
    date: "2025-12-30",
    displayDate: "30. prosinca 2025.",
    category: "Financije",
    excerpt: "Od 1. siječnja 2026. u primjeni su nova pravila fiskalizacije koja utječu na izdavanje računa za stambene zgrade.",
    bodyHtml: `<p>Od 1. siječnja 2026. godine u primjeni su nova pravila fiskalizacije koja utječu na izdavanje računa i uplatnica za pričuvu stambenih zgrada.</p>
<h2>Što se mijenja</h2>
<p>Nova pravila propisuju obvezu fiskaliziranja određenih vrsta uplata te dodatne zahtjeve za sadržaj računa i uplatnica.</p>
<h2>Utjecaj na suvlasnike</h2>
<p>Sve promjene provodi upravitelj zgrade u skladu s propisima. Suvlasnici i predstavnici suvlasnika ne poduzimaju dodatne radnje — sve uplatnice i računi bit će usklađeni s novim propisima.</p>`,
    seoTitle: "Fiskalizacija računa za stambene zgrade od 2026. | HPC-SPG",
    metaDescription: "Nova pravila fiskalizacije koja utječu na izdavanje računa i uplatnica za pričuvu stambenih zgrada od 1. siječnja 2026.",
  },
  {
    slug: "poziv-za-dostavu-ponuda-za-prinudnog-predstavnika-suvlasnika",
    title: "Poziv za dostavu ponuda za prinudnog predstavnika suvlasnika",
    date: "2025-03-27",
    displayDate: "27. ožujka 2025.",
    category: "Obavijest",
    excerpt: "Grad Zagreb objavio je Poziv za dostavu ponuda za prinudnog predstavnika suvlasnika za područje Grada Zagreba.",
    bodyHtml: `<p>Grad Zagreb objavio je Poziv za dostavu ponuda za prinudnog predstavnika suvlasnika za područje Grada Zagreba.</p>
<p>Poziv je objavljen sukladno Zakonu o upravljanju i održavanju zgrada te se odnosi na zgrade u kojima suvlasnici nisu izabrali ovlaštenog predstavnika suvlasnika.</p>
<p>HPC-SPG kao ovlašteni upravitelj sudjeluje u postupku sukladno uvjetima Poziva.</p>`,
    seoTitle: "Poziv za prinudnog predstavnika suvlasnika | HPC-SPG",
    metaDescription: "Grad Zagreb — Poziv za dostavu ponuda za prinudnog predstavnika suvlasnika.",
  },
  {
    slug: "izbor-ovlastenog-predstavnika-suvlasnika-zgrade-hitno",
    title: "Izbor ovlaštenog predstavnika suvlasnika zgrade — hitno",
    date: "2025-03-19",
    displayDate: "19. ožujka 2025.",
    category: "Obavijest",
    excerpt: "Prema novom Zakonu o upravljanju i održavanju zgrada suvlasnici su dužni izabrati ovlaštenog predstavnika suvlasnika.",
    bodyHtml: `<p>Prema novom Zakonu o upravljanju i održavanju zgrada (NN 152/2024) suvlasnici su dužni izabrati ovlaštenog predstavnika suvlasnika i o tome obavijestiti upravitelja zgrade.</p>
<h2>Postupak izbora</h2>
<p>Izbor predstavnika suvlasnika provodi se na sjednici suvlasnika ili pisanim putem, sukladno odredbama Zakona i Međuvlasničkog ugovora.</p>
<h2>Naša podrška</h2>
<p>HPC-SPG suvlasnicima pruža svu potrebnu podršku — pripremu obrazaca, pravno savjetovanje i evidenciju.</p>`,
    documents: [
      { label: "Dopis o izboru predstavnika (PDF)", href: "/documents/dopis-izbor-predstavnika.pdf" },
    ],
    seoTitle: "Izbor ovlaštenog predstavnika suvlasnika zgrade | HPC-SPG",
    metaDescription: "Suvlasnici su dužni izabrati ovlaštenog predstavnika suvlasnika prema novom Zakonu o upravljanju i održavanju zgrada.",
  },
  {
    slug: "obavijest-gradske-plinare-o-zamjeni-plinomjera",
    title: "Obavijest Gradske plinare o zamjeni plinomjera",
    date: "2025-01-17",
    displayDate: "17. siječnja 2025.",
    category: "Obavijest",
    excerpt: "Gradska plinara Zagreb provodi redovitu zamjenu plinomjera u stambenim zgradama.",
    bodyHtml: `<p>Gradska plinara Zagreb Opskrba provodi redovitu zamjenu plinomjera u stambenim zgradama sukladno Zakonu o mjeriteljstvu.</p>
<p>O terminu zamjene korisnici će biti obaviješteni pisanim putem ili obavijesti na oglasnoj ploči zgrade.</p>
<p>Za dodatna pitanja obratite se izravno Gradskoj plinari ili svom voditelju zgrade.</p>`,
    seoTitle: "Zamjena plinomjera — Gradska plinara Zagreb | HPC-SPG",
    metaDescription: "Gradska plinara provodi redovitu zamjenu plinomjera u stambenim zgradama.",
  },
  {
    slug: "novi-zakon-o-upravljanju-i-odrzavanju-zgrada",
    title: "Novi Zakon o upravljanju i održavanju zgrada",
    date: "2025-01-02",
    displayDate: "2. siječnja 2025.",
    category: "Zakon",
    excerpt: "U primjeni je novi Zakon o upravljanju i održavanju zgrada (NN 152/2024).",
    bodyHtml: `<p>Od 1. siječnja 2025. u primjeni je novi <strong>Zakon o upravljanju i održavanju zgrada</strong> (NN 152/2024) koji zamjenjuje dosadašnji zakonski okvir upravljanja stambenim i poslovnim zgradama u Republici Hrvatskoj.</p>
<h2>Ključne promjene</h2>
<ul>
<li>Nova pravila o pričuvi i minimalnoj visini pričuve</li>
<li>Detaljno uređene ovlasti i obveze predstavnika suvlasnika</li>
<li>Jasnija podjela zajedničkih dijelova i uređaja zgrade</li>
<li>Novi postupci donošenja odluka suvlasnika</li>
</ul>
<h2>Naši resursi</h2>
<p>Sve o novim pravilima pročitajte na:</p>
<ul>
<li><a href="/upravljanje/osnovni-pojmovi">Osnovni pojmovi upravljanja</a></li>
<li><a href="/upravljanje/regulativa">Regulativa upravljanja</a></li>
<li><a href="/upravljanje/minimalna-visina-pricuve">Minimalna visina pričuve</a></li>
</ul>`,
    documents: [
      { label: "Dopis predstavnicima — novi Zakon (PDF)", href: "/documents/dopis-predstavnicima-novi-zakon.pdf" },
      { label: "Popis zajedničkih dijelova i uređaja zgrade (PDF)", href: "/documents/popis-zajednickih-dijelova-i-uredaja.pdf" },
    ],
    seoTitle: "Novi Zakon o upravljanju i održavanju zgrada NN 152/2024 | HPC-SPG",
    metaDescription: "Od 1. siječnja 2025. u primjeni je novi Zakon o upravljanju i održavanju zgrada. Pregled ključnih promjena.",
  },
  {
    slug: "javni-poziv-grada-zagreba-za-provodenje-i-financiranje-mjera-ozelenjivanja-dvori",
    title: "Javni poziv Grada Zagreba za financiranje mjera ozelenjivanja dvorišta",
    date: "2024-11-06",
    displayDate: "6. studenoga 2024.",
    category: "Javni poziv",
    excerpt: "Grad Zagreb objavio je Javni poziv za provođenje i financiranje mjera ozelenjivanja dvorišta višestambenih zgrada.",
    bodyHtml: `<p>Grad Zagreb objavio je Javni poziv za provođenje i financiranje mjera ozelenjivanja dvorišta višestambenih zgrada.</p>
<p>Sufinanciraju se mjere ozelenjivanja unutarnjih dvorišta, sadnja stabala te postavljanje pripadajuće opreme.</p>
<p>Za pripremu prijave obratite se svom voditelju zgrade.</p>`,
    seoTitle: "Ozelenjivanje dvorišta — Javni poziv Grada Zagreba | HPC-SPG",
    metaDescription: "Grad Zagreb — Javni poziv za financiranje mjera ozelenjivanja dvorišta višestambenih zgrada.",
  },
  {
    slug: "hep-toplinarstvo-obavijest-stambenim-upraviteljima-o-pocetku-pripreme-za-ogrjevn",
    title: "HEP Toplinarstvo — obavijest o pripremi za ogrjevnu sezonu",
    date: "2024-08-21",
    displayDate: "21. kolovoza 2024.",
    category: "Obavijest",
    excerpt: "HEP Toplinarstvo obavještava stambene upravitelje o početku priprema za novu ogrjevnu sezonu.",
    bodyHtml: `<p>HEP Toplinarstvo obavještava stambene upravitelje o početku priprema za novu ogrjevnu sezonu.</p>
<p>Molimo predstavnike suvlasnika da omoguće pristup toplinskim podstanicama radi provođenja redovitih pregleda i servisa.</p>`,
    seoTitle: "HEP Toplinarstvo — priprema za ogrjevnu sezonu | HPC-SPG",
    metaDescription: "HEP Toplinarstvo obavještava stambene upravitelje o početku priprema za ogrjevnu sezonu.",
  },
  {
    slug: "zahtjev-za-pristupne-podatke",
    title: "Zahtjev za pristupne podatke za web i mobilnu aplikaciju",
    date: "2024-04-19",
    displayDate: "19. travnja 2024.",
    category: "Aplikacija",
    excerpt: "Suvlasnicima je omogućen pristup web i mobilnoj aplikaciji HPC-SPG s pregledom financija zgrade i dokumentima.",
    bodyHtml: `<p>Svim suvlasnicima zgrada kojima upravljamo omogućen je pristup web i mobilnoj aplikaciji HPC-SPG.</p>
<h2>Što aplikacija omogućuje</h2>
<ul>
<li>Uvid u stanje pričuve i mjesečne financijske izvještaje</li>
<li>Pristup dokumentima zgrade (ugovori, zapisnici, godišnji programi)</li>
<li>E-uplatnice na e-mail</li>
<li>Prijavu kvara i komunikaciju s upraviteljem</li>
</ul>
<h2>Kako do pristupa</h2>
<p>Pristupne podatke zatražite putem obrasca <a href="/korisnicki-podaci">Zahtjev za pristupne podatke</a>.</p>`,
    externalLinks: [
      { label: "Prijava u aplikaciju", href: "https://hpc-spg.com/" },
    ],
    seoTitle: "Pristupni podaci za web i mobilnu aplikaciju | HPC-SPG",
    metaDescription: "Zatražite pristupne podatke za web i mobilnu aplikaciju HPC-SPG — pregled pričuve, dokumenti i prijava kvara.",
  },
  {
    slug: "novi-poziv-za-energetsku-obnovu-visestambenih-zgrada",
    title: "Novi Poziv za energetsku obnovu višestambenih zgrada",
    date: "2024-03-29",
    displayDate: "29. ožujka 2024.",
    category: "Energetska obnova",
    excerpt: "Objavljen je novi Poziv za energetsku obnovu višestambenih zgrada financiran iz sredstava EU fondova.",
    bodyHtml: `<p>Objavljen je novi Poziv za energetsku obnovu višestambenih zgrada financiran iz sredstava Fonda za zaštitu okoliša i energetsku učinkovitost te EU fondova.</p>
<h2>Predmet sufinanciranja</h2>
<p>Sufinanciraju se mjere povećanja energetske učinkovitosti — toplinska izolacija ovojnice, zamjena stolarije, ugradnja obnovljivih izvora energije i drugo.</p>
<h2>Postupak</h2>
<p>Za suvlasnike zgrada kojima upravljamo pripremamo cjelokupnu dokumentaciju za prijavu — od energetskog pregleda do projektne dokumentacije.</p>
<p>Detalji o postupku na stranici <a href="/usluge/energetska-obnova">Projekti energetske obnove</a>.</p>`,
    seoTitle: "Poziv za energetsku obnovu višestambenih zgrada | HPC-SPG",
    metaDescription: "Novi Poziv za energetsku obnovu višestambenih zgrada — sufinanciranje iz EU fondova i Fonda za zaštitu okoliša.",
  },
  {
    slug: "javni-poziv-za-sufinanciranje-izrade-boksova-za-odlaganje-otpada",
    title: "Javni poziv za nadoknadu troškova izrade boksova za odlaganje otpada",
    date: "2024-01-11",
    displayDate: "11. siječnja 2024.",
    category: "Javni poziv",
    excerpt: "Grad Zagreb sufinancira izradu boksova za odlaganje komunalnog otpada uz višestambene zgrade.",
    bodyHtml: `<p>Grad Zagreb objavio je Javni poziv za nadoknadu troškova izrade boksova za odlaganje komunalnog otpada uz višestambene zgrade.</p>
<p>Cilj je urednija javna površina i sigurnije odlaganje otpada.</p>
<p>Prijavu podnosi predstavnik suvlasnika ili upravitelj zgrade. HPC-SPG priprema tehničku i financijsku dokumentaciju.</p>`,
    seoTitle: "Boksovi za odlaganje otpada — Javni poziv | HPC-SPG",
    metaDescription: "Grad Zagreb sufinancira izradu boksova za odlaganje komunalnog otpada uz višestambene zgrade.",
  },
  {
    slug: "poziv-za-podnosenje-zahtjeva-za-financiranje-sufinanciranje-zastite-vanjskih-dij",
    title: "Sufinanciranje zaštite vanjskih dijelova građevina od grafita",
    date: "2024-01-11",
    displayDate: "11. siječnja 2024.",
    category: "Sufinanciranje",
    excerpt: "Poziv za podnošenje zahtjeva za sufinanciranje zaštite vanjskih dijelova građevina od grafita.",
    bodyHtml: `<p>Poziv za podnošenje zahtjeva za financiranje / sufinanciranje zaštite vanjskih dijelova građevina od grafita.</p>
<p>Sufinanciraju se troškovi uklanjanja postojećih grafita i nanošenja premaza za zaštitu pročelja od budućih oštećenja.</p>
<p>Prijave pripremamo za suvlasnike zgrada kojima upravljamo.</p>`,
    seoTitle: "Zaštita pročelja od grafita — sufinanciranje | HPC-SPG",
    metaDescription: "Sufinanciranje zaštite vanjskih dijelova građevina od grafita — priprema prijava za suvlasnike.",
  },
  {
    slug: "uplatnice-za-pricuvu",
    title: "E-uplatnice — slanje uplatnica za pričuvu e-mailom",
    date: "2023-12-01",
    displayDate: "1. prosinca 2023.",
    category: "Aplikacija",
    excerpt: "Uvedena je usluga slanja mjesečnih uplatnica za pričuvu izravno na e-mail adrese suvlasnika.",
    bodyHtml: `<p>Suvlasnicima zgrada kojima upravljamo omogućeno je zaprimanje mjesečnih uplatnica za pričuvu izravno na e-mail adresu.</p>
<h2>Prednosti</h2>
<ul>
<li>Brz i pouzdan dolazak uplatnice</li>
<li>Manje papira i uštede za zgradu</li>
<li>Elektronički zapis za osobnu evidenciju</li>
</ul>
<h2>Kako se prijaviti</h2>
<p>Prijavu za e-uplatnice podnesite putem stranice <a href="/e-uplatnice">E-uplatnice</a>.</p>`,
    seoTitle: "E-uplatnice — pričuva na e-mail | HPC-SPG",
    metaDescription: "Zaprimajte mjesečne uplatnice za pričuvu izravno na e-mail. Prijava putem obrasca E-uplatnice.",
  },
  {
    slug: "pozitivni-primjeri-uspjesnih-predstavnika-suvlasnika",
    title: "Pozitivni primjeri uspješnih predstavnika suvlasnika",
    date: "2023-11-09",
    displayDate: "9. studenoga 2023.",
    category: "Iskustva",
    excerpt: "Iskustva predstavnika suvlasnika koji su svojom aktivnošću unaprijedili uvjete života u zgradama.",
    bodyHtml: `<p>U našoj praksi svjedočimo mnogim pozitivnim primjerima predstavnika suvlasnika koji su svojom aktivnošću, transparentnošću i suradnjom s upraviteljem značajno unaprijedili uvjete stanovanja u zgradama.</p>
<p>Zahvaljujemo svim aktivnim predstavnicima na povjerenju i konstruktivnom radu.</p>`,
    seoTitle: "Uspješni predstavnici suvlasnika — pozitivni primjeri | HPC-SPG",
    metaDescription: "Pozitivni primjeri uspješnih predstavnika suvlasnika iz naše svakodnevne prakse.",
  },
  {
    slug: "prilagodba-poslovanja-na-novu-eur-valutu-obavijest",
    title: "Prilagodba poslovanja na euro — obavijest suvlasnicima",
    date: "2022-12-15",
    displayDate: "15. prosinca 2022.",
    category: "Financije",
    excerpt: "Obavijest suvlasnicima o prilagodbi poslovanja HPC-SPG-a na euro kao službenu valutu.",
    bodyHtml: `<p>Od 1. siječnja 2023. euro je službena valuta Republike Hrvatske. HPC-SPG je svoje financijske sustave i uplatnice u potpunosti prilagodio novoj valuti sukladno Zakonu o uvođenju eura kao službene valute u RH.</p>
<h2>Što to znači za suvlasnike</h2>
<ul>
<li>Iznosi na uplatnicama za pričuvu iskazani su u eurima</li>
<li>U prijelaznom razdoblju iznosi su prikazani u kunama i eurima</li>
<li>Preračunavanje je izvršeno po fiksnom tečaju konverzije</li>
</ul>`,
    seoTitle: "Prilagodba poslovanja na euro | HPC-SPG",
    metaDescription: "Obavijest suvlasnicima o prilagodbi financijskog poslovanja HPC-SPG-a na euro.",
  },
  {
    slug: "zajmovi-i-krediti-za-obnovu-i-uredenje-zgrada",
    title: "Zajmovi i krediti za obnovu i uređenje zgrada",
    date: "2022-06-23",
    displayDate: "23. lipnja 2022.",
    category: "Financiranje",
    excerpt: "Pregled dostupnih zajmova i kredita za obnovu i uređenje stambenih zgrada.",
    bodyHtml: `<p>Za obnovu i uređenje stambenih zgrada dostupni su različiti izvori financiranja — zajmovi banaka, krediti Fonda za zaštitu okoliša i sredstva EU fondova.</p>
<p>Detaljne informacije o dostupnim programima financiranja pročitajte na stranici <a href="/upravljanje/zajmovi-i-krediti">Zajmovi i krediti</a> ili u okviru naše usluge <a href="/usluge/financiranje-uredenja">Financiranje uređenja</a>.</p>`,
    seoTitle: "Zajmovi i krediti za obnovu zgrada | HPC-SPG",
    metaDescription: "Pregled dostupnih zajmova i kredita za obnovu i uređenje stambenih zgrada.",
  },
  {
    slug: "javni-poziv-za-energetsku-obnovu-zgrada",
    title: "Javni poziv za energetsku obnovu zgrada",
    date: "2022-04-12",
    displayDate: "12. travnja 2022.",
    category: "Energetska obnova",
    excerpt: "Objavljen Javni poziv za sufinanciranje energetske obnove višestambenih zgrada.",
    bodyHtml: `<p>Objavljen je Javni poziv za sufinanciranje energetske obnove višestambenih zgrada iz sredstava Fonda za zaštitu okoliša i EU fondova.</p>
<p>Za suvlasnike zgrada kojima upravljamo pripremamo cjelokupnu dokumentaciju. Više o postupku na <a href="/usluge/energetska-obnova">stranici usluge</a>.</p>`,
    seoTitle: "Javni poziv — energetska obnova zgrada | HPC-SPG",
    metaDescription: "Javni poziv za sufinanciranje energetske obnove višestambenih zgrada iz Fonda za zaštitu okoliša.",
  },
  {
    slug: "sklonista",
    title: "Skloništa u stambenim zgradama",
    date: "2022-03-25",
    displayDate: "25. ožujka 2022.",
    category: "Sigurnost",
    excerpt: "Informacije o skloništima u stambenim zgradama, njihovom održavanju i uporabi.",
    bodyHtml: `<p>Skloništa u stambenim zgradama zajednički su dio zgrade i podliježu posebnim propisima o održavanju i korištenju.</p>
<h2>Održavanje</h2>
<p>Za redovito održavanje skloništa odgovorni su suvlasnici zgrade, a poslove provodi upravitelj u okviru godišnjeg programa održavanja.</p>
<h2>Korištenje</h2>
<p>Sklonište se u miru ne smije koristiti u svrhe koje bi otežale ili onemogućile njegovu primarnu funkciju u kriznim situacijama.</p>`,
    seoTitle: "Skloništa u stambenim zgradama | HPC-SPG",
    metaDescription: "Informacije o skloništima u stambenim zgradama — održavanje, korištenje i zakonski propisi.",
  },
  {
    slug: "potres-u-gradu-zagrebu",
    title: "Obnova od potresa u Gradu Zagrebu",
    date: "2020-04-21",
    displayDate: "21. travnja 2020.",
    category: "Obnova",
    excerpt: "Podrška HPC-SPG-a suvlasnicima zgrada oštećenih u potresu u Gradu Zagrebu 22. ožujka 2020.",
    bodyHtml: `<p>Potres koji je pogodio Grad Zagreb 22. ožujka 2020. godine oštetio je velik broj stambenih i stambeno-poslovnih zgrada. HPC-SPG suvlasnicima pruža cjelovitu podršku u postupku obnove.</p>
<h2>Uloga upravitelja u obnovi</h2>
<ul>
<li>Priprema dokumentacije za prijavu na obnovu</li>
<li>Komunikacija s ovlaštenim inženjerima i projektantima</li>
<li>Nadzor nad provedbom radova</li>
<li>Financijsko i tehničko izvještavanje suvlasnika</li>
</ul>
<p>Detaljne informacije o postupku obnove potražite na stranici <a href="/usluge/obnova-od-potresa">Obnova od potresa</a>.</p>`,
    documents: [
      { label: "Obnova zgrada oštećenih u potresu i uloga upravitelja (PDF)", href: "/documents/obnova-zgrada-i-uloga-upravitelja.pdf" },
      { label: "Vodič za aktivnosti nakon potresa 2020. (PDF)", href: "/documents/vodic-za-aktivnosti-nakon-potresa.pdf" },
    ],
    seoTitle: "Obnova od potresa — HPC-SPG podrška suvlasnicima",
    metaDescription: "Podrška HPC-SPG-a suvlasnicima zgrada oštećenih u potresu u Gradu Zagrebu 22. ožujka 2020.",
  },
  {
    slug: "vazna-obavijest",
    title: "COVID-19 — preporuke suvlasnicima zgrada",
    date: "2020-03-18",
    displayDate: "18. ožujka 2020.",
    category: "Obavijest",
    excerpt: "Preporuke suvlasnicima zgrada za očuvanje zdravlja tijekom epidemije bolesti COVID-19.",
    bodyHtml: `<p>U cilju očuvanja zdravlja svih suvlasnika i sprječavanja širenja bolesti COVID-19, HPC-SPG donosi preporuke za ponašanje u zajedničkim prostorima zgrada.</p>
<ul>
<li>Redovito prozračivanje zajedničkih prostorija</li>
<li>Pojačano čišćenje i dezinfekcija ručki, kvaka i tipkovnica dizala</li>
<li>Održavanje fizičke distance u zajedničkim prostorima</li>
</ul>
<p>Sve komunikacije s upraviteljem, ako je moguće, obavljajte elektroničkim putem.</p>`,
    seoTitle: "COVID-19 preporuke suvlasnicima | HPC-SPG",
    metaDescription: "Preporuke suvlasnicima zgrada za očuvanje zdravlja tijekom epidemije COVID-19.",
  },
  {
    slug: "novi-ured-mandrovica-3",
    title: "Novi ured na adresi Ulica Adama Mandrovića 3 u Zagrebu",
    date: "2023-01-15",
    displayDate: "Siječanj 2023.",
    category: "Društvo",
    excerpt: "HPC-SPG je preselio poslovanje na novu adresu — Ulica Adama Mandrovića 3, Zagreb.",
    bodyHtml: `<p>Obavještavamo suvlasnike i predstavnike suvlasnika da je HPC-SPG preselio svoje poslovanje na novu adresu:</p>
<p><strong>Ulica Adama Mandrovića 3<br />10000 Zagreb</strong></p>
<p>Radno vrijeme: ponedjeljak – petak, 08:00 – 16:00.</p>`,
    seoTitle: "Novi ured HPC-SPG — Ulica Adama Mandrovića 3, Zagreb",
    metaDescription: "HPC-SPG preselio poslovanje na novu adresu — Ulica Adama Mandrovića 3, 10000 Zagreb.",
  },
  {
    slug: "izrada-novih-kucnih-brojeva",
    title: "Izrada novih kućnih brojeva",
    date: "2023-05-10",
    displayDate: "Svibanj 2023.",
    category: "Obavijest",
    excerpt: "Informacije o postupku izrade i postavljanja novih kućnih brojeva na stambenim zgradama.",
    bodyHtml: `<p>Kućni brojevi trajno postavljeni na pročelju zgrade obveza su svakog vlasnika, odnosno u višestambenim zgradama zajednička obveza suvlasnika koju provodi upravitelj.</p>
<p>Za izradu novih ili zamjenu oštećenih kućnih brojeva obratite se svom voditelju zgrade ili putem <a href="/kontakt">kontakt obrasca</a>.</p>`,
    seoTitle: "Izrada novih kućnih brojeva | HPC-SPG",
    metaDescription: "Postupak izrade i postavljanja novih kućnih brojeva na stambenim zgradama.",
  },
  {
    slug: "dani-otvorenih-vrata",
    title: "Dani otvorenih vrata HPC-SPG",
    date: "2023-06-01",
    displayDate: "Lipanj 2023.",
    category: "Događanje",
    excerpt: "Dani otvorenih vrata za suvlasnike zgrada kojima upravljamo — prilika za neposredni razgovor s upraviteljem.",
    bodyHtml: `<p>HPC-SPG povremeno organizira Dane otvorenih vrata za suvlasnike i predstavnike suvlasnika zgrada kojima upravljamo.</p>
<h2>Cilj događaja</h2>
<ul>
<li>Neposredni razgovor s voditeljima zgrada</li>
<li>Prezentacija digitalne aplikacije</li>
<li>Odgovori na pitanja o pričuvi, održavanju i aktualnim javnim pozivima</li>
</ul>
<h2>Prijava</h2>
<p>O terminima i mjestu održavanja suvlasnici su obaviješteni putem oglasne ploče zgrade i e-maila. Za dodatne informacije obratite se putem <a href="/kontakt">kontakt obrasca</a>.</p>`,
    seoTitle: "Dani otvorenih vrata HPC-SPG",
    metaDescription: "Dani otvorenih vrata za suvlasnike zgrada kojima upravlja HPC-SPG.",
  },
];

export function findNewsBySlug(slug: string): NewsPost | undefined {
  return news.find((n) => n.slug === slug);
}
