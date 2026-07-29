export interface NewsPost {
  slug: string;
  title: string;
  date: string; // ISO YYYY-MM-DD
  displayDate: string; // Croatian format
  category: string;
  /** "novosti" or "arhiva" — mirrors the WordPress category split. */
  section: "novosti" | "arhiva";
  excerpt: string;
  /** Original WordPress article body, converted to prose HTML. */
  bodyHtml: string;
  cover?: string;
  gallery?: { src: string; alt: string }[];
  documents?: { label: string; href: string }[];
  externalLinks?: { label: string; href: string }[];
  seoTitle?: string;
  metaDescription?: string;
  /** Original hpc-spg.hr slug, kept for redirect mapping. */
  legacySlugs?: string[];
}

// Content copied verbatim from https://hpc-spg.hr/ (source of truth).
// Ordered newest -> oldest.
export const news: NewsPost[] = [
  {
    slug: "upozorenje-gradske-plinare-korisnicima-plina-toplinski-val",
    title: "Upozorenje Gradske plinare korisnicima plina – toplinski val",
    date: "2026-07-29",
    displayDate: "29. srpnja 2026.",
    category: "Obavijest",
    section: "novosti",
    excerpt: "UPOZORENJE KORISNICIMA PLINA",
    bodyHtml: `<p><a href="/documents/upozorenje-korisnicima-plina.pdf">UPOZORENJE KORISNICIMA PLINA</a></p>`,
    documents: [
      { label: "UPOZORENJE KORISNICIMA PLINA", href: "/documents/upozorenje-korisnicima-plina.pdf" },
    ],
    metaDescription: "UPOZORENJE KORISNICIMA PLINA",
    legacySlugs: ["upozorenje-gradske-plinare-korisnicima-plina-toplinski-val"],
  },
  {
    slug: "obavijest-suvlasnicima-o-novim-zakonskim-obvezama-vezanim-uz-ugradnju-uredaja-za",
    title: "Obavijest suvlasnicima o novim zakonskim obvezama vezanim uz ugradnju uređaja za lokalnu razdiobu toplinske energije i posljedicama neispunjavanja propisanih obveza",
    date: "2026-07-09",
    displayDate: "9. srpnja 2026.",
    category: "Zakonske obveze",
    section: "novosti",
    excerpt: "Nova zakonska obveza za zgrade priključene na centralni toplinski sustav – što suvlasnici trebaju znati? Izmjenama Zakona o tržištu toplinske energije te donošenjem novog Pravilnika o načinu raspodjele i obračunu troškova za…",
    bodyHtml: `<h3>Nova zakonska obveza za zgrade priključene na centralni toplinski sustav – što suvlasnici trebaju znati?</h3>
<p>Izmjenama <strong>Zakona o tržištu toplinske energije</strong> te donošenjem novog <strong>Pravilnika o načinu raspodjele i obračunu troškova za isporučenu toplinsku energiju</strong> uvedene su nove obveze za vlasnike stanova i poslovnih prostora u zgradama koje su priključene na centralni toplinski sustav.</p>
<h3>Rok za ugradnju razdjelnika ili kalorimetara</h3>
<p>Prema važećim propisima, uređaji za lokalnu razdiobu toplinske energije (razdjelnici topline) ili zasebna mjerila toplinske energije (kalorimetri), kada su za to ispunjeni tehnički uvjeti, moraju biti ugrađeni <strong>najkasnije do 1. siječnja 2027. godine</strong>.</p>
<h3>Što se mijenja od 1. rujna 2026.?</h3>
<p>Od <strong>1. rujna 2026. godine</strong> počinje primjena novog modela raspodjele i obračuna troškova toplinske energije.</p>
<p>Pravilnikom je, između ostaloga, propisana i <strong>naknada za poticanje učinkovitosti grijanja</strong> u iznosu od <strong>0,50 EUR po m² grijane površine mjesečno</strong>, koja se primjenjuje u slučajevima propisanim važećim propisima.</p>
<h3>Mogu li suvlasnici odlučiti da se razdjelnici neće ugraditi?</h3>
<p>Ne.</p>
<p>Suvlasnici mogu odlučivati o upravljanju i održavanju zajedničke nekretnine, ali <strong>ne mogu donijeti odluku kojom bi se isključila ili izbjegla primjena obveznih zakonskih odredbi</strong>.</p>
<p>Drugim riječima, odluke zajednice suvlasnika moraju biti usklađene s važećim zakonima i podzakonskim propisima Republike Hrvatske.</p>
<h3>Jesu li nedostatak sredstava ili neobnovljena fasada razlog za odgodu?</h3>
<p>Važeći propisi <strong>ne propisuju izuzeće</strong> od obveze ugradnje uređaja zbog:</p>
<ul>
<li>neobnovljene fasade ili energetske obnove zgrade,</li>
<li>nedostatka sredstava u zajedničkoj pričuvi,</li>
<li>zajedničke toplinske stanice s drugim ulazom ili zgradom,</li>
<li>nemogućnosti postizanja dogovora među suvlasnicima.</li>
</ul>
<p>Navedene okolnosti mogu utjecati na organizaciju i način provedbe projekta, ali ne predstavljaju zakonsku osnovu za izbjegavanje propisanih obveza.</p>
<h3>Što upravitelj može učiniti?</h3>
<p>Upravitelj ima obvezu pravodobno informirati suvlasnike o zakonskim obvezama te organizirati aktivnosti potrebne za njihovo ispunjenje. To uključuje:</p>
<ul>
<li>provjeru tehničkih uvjeta za ugradnju uređaja,</li>
<li>pribavljanje ponuda ovlaštenih izvođača,</li>
<li>suradnju s isporučiteljem toplinske energije,</li>
<li>pripremu potrebnih odluka suvlasnika,</li>
<li>razmatranje mogućih modela financiranja, uključujući korištenje sredstava zajedničke pričuve ili kreditnog financiranja zajednice suvlasnika.</li>
</ul>
<h3>Zašto je važno reagirati na vrijeme?</h3>
<p>Pravodobnim planiranjem i donošenjem potrebnih odluka zajednica suvlasnika može izbjeći dodatna financijska opterećenja te organizirati provedbu radova na način koji će biti tehnički, organizacijski i financijski najpovoljniji.</p>
<p>Pozivamo predstavnike suvlasnika i sve suvlasnike da se na vrijeme informiraju o svojim obvezama te da u suradnji s upraviteljem pokrenu potrebne aktivnosti kako bi zgrada ispunila zahtjeve propisane važećim zakonodavstvom.</p>
<p><em>Napomena: Ovaj tekst ima informativni karakter i temelji se na važećem Zakonu o tržištu toplinske energije te Pravilniku o načinu raspodjele i obračunu troškova za isporučenu toplinsku energiju. Primjena pojedinih odredbi ovisi o tehničkim značajkama svake pojedine zgrade i sustava grijanja.</em></p>`,
    metaDescription: "Nova zakonska obveza za zgrade priključene na centralni toplinski sustav – što suvlasnici trebaju znati? Izmjenama Zakona o tržištu toplinske energije te donošenjem novog Pravilnik",
    legacySlugs: ["obavijest-suvlasnicima-o-novim-zakonskim-obvezama-vezanim-uz-ugradnju-uredaja-za-lokalnu-razdiobu-toplinske-energije-i-posljedicama-neispunjavanja-propisanih-obveza"],
  },
  {
    slug: "javni-poziv-ugradnja-dizala-u-postojece-visestambene-i-stambeno-poslovne-zgrade",
    title: "Javni poziv – ugradnja dizala u postojeće višestambene i stambeno-poslovne zgrade u 2026.g.",
    date: "2026-04-24",
    displayDate: "24. travnja 2026.",
    category: "Javni poziv",
    section: "novosti",
    excerpt: "Ministarstvo prostornog uređenja, graditeljstva i državne imovne objavilo je Javni poziv za podnošenje prijava za sufinanciranje ugradnje dizala i uređaja za olakšan pristup za slabo pokretne osobe u postojeće višestambene i…",
    bodyHtml: `<p>Ministarstvo prostornog uređenja, graditeljstva i državne imovne objavilo je <a href="https://mpgi.gov.hr/javni-poziv-19748/19748" target="_blank" rel="noreferrer">Javni poziv za podnošenje prijava za sufinanciranje ugradnje dizala i uređaja za olakšan pristup za slabo pokretne osobe u postojeće višestambene i stambeno-poslovne zgrade u 2026. godini</a></p>
<p>Prijave se podnose od 15. travnja 2026. do 31. kolovoza 2026.</p>
<p>Pravo na sufinanciranje ostvaruje se u odnosu na višestambene i stambeno-poslovne zgrade koje kumulativno zadovoljavaju sljedeće uvjete:</p>
<ul>
<li>suvlasnici fizičke osobe u vlasništvu imaju više od 50 % suvlasničkih dijelova zgrade upisanih u zemljišne knjige odnosno suvlasnici fizičke osobe u vlasništvu imaju više od 50 % ukupne vrijednosne površine zgrade u zgradama za koje nisu određeni suvlasnički dijelovi</li>
<li>imaju najmanje tri kata ili u kojima stanuje suvlasnik odnosno član kućanstva suvlasnika koji je osoba s invaliditetom s najmanje 80-postotnim tjelesnim oštećenjem na donjim ekstremitetima ili osoba III. ili IV. stupnja funkcionalnog oštećenja koje se odnosi na tjelesno oštećenje</li>
<li>izrađen je glavni projekt ugradnje dizala ili uređaja za olakšan pristup za slabo pokretne osobe sukladno propisima o gradnji (u daljnjem tekstu: glavni projekt)</li>
<li>natpolovičnom većinom suvlasnika donesena je odluka o ugradnji dizala ili uređaja za olakšan pristup za slabo pokretne osobe</li>
<li>u zgradi je formiranu zajednicu suvlasnika sukladno odredbama Zakona</li>
<li>imaju osigurana financijska sredstva prema udjelu zajednice suvlasnika u ukupnim troškovima ugradnje dizala ili za olakšan pristup za slabo pokretne osobe pravo na sufinanciranje može ostvariti isključivo zgrada koja ima formiranu zajednicu ili više zajednica suvlasnika</li>
</ul>
<p>Prijavitelji su obvezni dostaviti sljedeću dokumentaciju:</p>
<ul>
<li>izvadak iz Registra zajednice suvlasnika za Korisnika sredstava</li>
<li>izvadak iz Registra upravitelja zgrade za upravitelja</li>
<li>punomoć za zastupanje u slučajevima kada prijavu za sufinanciranje podnosi opunomoćenik u ime zajednice suvlasnika</li>
<li>odluka suvlasnika o ugradnji dizala ili uređaja za olakšan pristup za slabo pokretne osobe donesena natpolovičnom većinom suvlasnika<br />
glavni projekt sukladno propisima o gradnji i propisima kojima je uređeno područje zaštite i očuvanja kulturnih dobara te druga tehnička dokumentacija</li>
<li>izjavu upravitelja zgrade ili financijske institucije iz koje proizlazi da zajednica suvlasnika raspolaže jednom trećinom financijskih sredstava za izvođenje radova ugradnje dizala ili uređaja za olakšan pristup za slabo pokretne osobe, odnosno da raspolaže financijskim sredstvima do ostatka cjelokupne vrijednosti radova</li>
<li>izjava upravitelja zgrade iz koje proizlazi da projekt ugradnje dizala ili uređaja za olakšan pristup za slabo pokretne osobe nije sufinanciran javnim sredstvima iz drugih izvora</li>
<li>fotodokumentacija trenutnog stanja zgrade</li>
<li>dokaz da se radi o postojećoj građevini (npr. uporabna dozvola, rješenje o izvedenom stanju, potvrda nadležnog ureda da je zgrada izgrađena prije 1968. godine)</li>
<li>račun za pruženu uslugu izrade glavnog projekta<br />
troškovnike, odnosno ponude za izvođenje radova i za pružanje usluge stručnog nadzora</li>
<li>račun za pruženu uslugu pripreme dokumentacije, vođenja postupka, koordinacije te obrade dokumentacije potrebne za podizanje kredita u banci od strane upravitelja zgrade.</li>
</ul>
<p>Prijavi za sufinanciranje, ovisno o svakom pojedinom slučaju, prilaže se i sljedeća dokumentacija:</p>
<ul>
<li>potvrda da je član kućanstva/stanar osoba upisana u Registar o osobama s invaliditetom koji vodi Hrvatski zavod za javno zdravstvo i uvjerenje o prebivalištu</li>
<li>prethodna konzervatorska lokacijska obavijest izdana od nadležnog područnog konzervatorskog ureda ili službe Ministarstva kulture i medija, kojom se utvrđuje kategorija vrijednosti zgrade u kulturno-povijesnoj cjelini ili potvrđuje status pojedinačno zaštićenog kulturnog dobra<br />
u slučaju da ugradnja dizala ili uređaja za olakšan pristup za slabo pokretne osobe, sukladno propisima o gradnji, nije moguća bez zahvata koji podrazumijevaju ishođenje građevinske dozvole, uz prijavu se prilaže i pravomoćna građevinska dozvola. U slučajevima u kojima je to dopušteno, umjesto građevinske dozvole prilaže se potvrda glavnog projekta sukladno propisima o jednostavnim i drugim građevinama i radovima</li>
<li>suglasnost nadležnog područnog konzervatorskog ureda ili službe na projekt za izvođenje radova ugradnje dizala ili uređaja za olakšan pristup za slabo pokretne osobe ako se radi o zgradi koja je pojedinačno zaštićeno kulturno dobro ili se nalazi unutar kulturno-povijesne cjeline ili potvrda glavnog projekta kada je to propisano posebnim propisima iz područja zaštite kulturne baštine</li>
<li>potvrdu liječnika ili drugu dokumentaciju te uvjerenje o prebivalištu u slučaju da u zgradi živi trudnica</li>
<li>uvjerenja o prebivalištu za stanare mlađe od sedam godina ili starije od 65 godina.</li>
</ul>`,
    metaDescription: "Ministarstvo prostornog uređenja, graditeljstva i državne imovne objavilo je Javni poziv za podnošenje prijava za sufinanciranje ugradnje dizala i uređaja za olakšan pristup za sla",
    legacySlugs: ["javni-poziv-ugradnja-dizala-u-postojece-visestambene-i-stambeno-poslovne-zgrade-u-2026-g"],
  },
  {
    slug: "javni-poziv-za-podnosenje-prijava-za-sufinanciranje-uredenja-procelja-za-postoje",
    title: "Javni poziv – uređenje pročelja za postojeće višestambene i stambeno-poslovne zgrade u 2026. godini",
    date: "2026-04-15",
    displayDate: "15. travnja 2026.",
    category: "Javni poziv",
    section: "novosti",
    excerpt: "15. travnja 2026. počinju prijave na Javni poziv za podnošenje prijava za sufinanciranje uređenja pročelja za postojeće višestambene i stambeno-poslovne zgrade u 2026. godini Prijave traju do 31. kolovoza 2026.g. Pravo na…",
    bodyHtml: `<p>15. travnja 2026. počinju prijave na <a href="https://mpgi.gov.hr/javni-poziv-19749/19749" target="_blank" rel="noreferrer">Javni poziv za podnošenje prijava za sufinanciranje uređenja pročelja za postojeće višestambene i stambeno-poslovne zgrade u 2026. godini</a></p>
<p>Prijave traju do 31. kolovoza 2026.g.</p>
<p><strong>Pravo na sufinanciranje uređenja pročelja ostvaruje se u odnosu na višestambene i stambeno-poslovne zgrade koje kumulativno zadovoljavaju sljedeće uvjete:</strong></p>
<ul>
<li>zgrada je pojedinačno zaštićeno kulturno dobro ili se nalazi unutar kulturno-povijesnih cjelina</li>
<li>izrađen je glavni projekt uređenja pročelja sukladno propisima o gradnji i propisima kojima je uređeno područje zaštite i očuvanja kulturnih dobara</li>
<li>uređenje pročelja se ne sufinancira se po nekoj drugoj osnovi</li>
<li>natpolovičnom većinom suvlasnika donesena je odluka o uređenju pročelja pri čemu je u zgradama unutar kojih su formirane dvije ili više zajednica suvlasnika uvjet da svaka zajednica suvlasnika natpolovičnom većinom donose odluku o uređenju pročelja</li>
<li>pravo na sufinanciranje može ostvariti isključivo zgrada koja ima formiranu zajednicu ili više zajednica suvlasnika</li>
<li>zajednica ili zajednice suvlasnika koje se prijavljuju imaju osigurana financijska sredstva prema udjelu u ukupnim troškovima uređenja pročelja</li>
<li>jedinica lokalne samouprave u kojoj se zgrada ima osigurana sredstva za Program uređenja pročelja za postojeće zgrade (popis jedinica lokalne samouprave koje sudjeluju u Programu se nalazi na mrežnim stranicama Ministarstva).</li>
</ul>
<p>Zgrada koju se prijavljuje na sufinanciranje mora biti prijavljena kao cjelina, sa svim pripadajućim adresama.</p>
<p><strong>Prijavitelji su obvezni dostaviti sljedeću dokumentaciju:</strong></p>
<ol>
<li>izvadak iz Registra zajednice suvlasnika za Korisnika sredstava</li>
<li>izvadak iz Registra upravitelja zgrade za upravitelja</li>
<li>punomoć za zastupanje u slučajevima kada prijavu za sufinanciranje podnosi opunomoćenik u ime zajednice suvlasnika</li>
<li>odluka suvlasnika o uređenju pročelja donesena natpolovičnom većinom suvlasnika</li>
<li>glavni projekt uređenja pročelja sukladno propisima o gradnji i propisima kojima je uređeno područje zaštite i očuvanja kulturnih dobara te druga tehnička dokumentacija (u daljnjem tekstu: glavni projekt)</li>
<li>izjava projektanta o stupnju složenosti radova (vrlo složeno, srednje složeno, manje složeno, nije složeno)</li>
<li>izjava upravitelja zgrade ili financijske institucije iz koje proizlazi da zajednica suvlasnika raspolaže jednom trećinom financijskih sredstava za izvođenje radova uređenja pročelja, odnosno da raspolaže financijskim sredstvima do ostatka cjelokupne vrijednosti radova, odnosno potvrdu financijske institucije o kreditnoj sposobnosti ili pismo namjere banke</li>
<li>izjava upravitelja zgrade iz koje proizlazi da projekt uređenja pročelja nije sufinanciran javnim sredstvima iz drugih izvora</li>
<li>fotodokumentacija trenutnog stanja pročelja zgrade</li>
<li>prethodna konzervatorska lokacijska obavijest izdana od nadležnog područnog konzervatorskog ureda ili službe Ministarstva kulture i medija, kojom se utvrđuje kategorija vrijednosti zgrade u kulturno-povijesnoj cjelini ili potvrđuje status pojedinačno zaštićenog kulturnog dobra</li>
<li>dokaz da se radi o postojećoj građevini (npr. uporabna dozvola, rješenje o izvedenom stanju ili potvrda nadležnog tijela da je zgrada izgrađena prije 15. veljače 1968., zemljišnoknjižni izvadak iz kojeg je vidljivo da se radi o postojećoj građevini)</li>
<li>suglasnost nadležnog područnog konzervatorskog ureda ili službe na projekt za izvođenje radova uređenja pročelja</li>
<li>suglasnost nadležnog upravnog tijela jedinice lokalne samouprave iz koje je vidljivo da su planirani radovi u skladu s odlukama o komunalnom redu</li>
<li>račun za pruženu uslugu izrade glavnog projekta te troškovnici, odnosno ponude za izvođenje radova i za pružanje usluge nadzora.</li>
</ol>`,
    metaDescription: "15. travnja 2026. počinju prijave na Javni poziv za podnošenje prijava za sufinanciranje uređenja pročelja za postojeće višestambene i stambeno-poslovne zgrade u 2026. godini Prija",
    legacySlugs: ["javni-poziv-za-podnosenje-prijava-za-sufinanciranje-uredenja-procelja-za-postojece-visestambene-i-stambeno-poslovne-zgrade-u-2026-godini"],
  },
  {
    slug: "fiskalizacija-izdavanje-racuna-za-stambene-zgrade-nakon-1-sijecnja-2026-g",
    title: "Fiskalizacija – izdavanje računa za stambene zgrade nakon 1. siječnja 2026.g.",
    date: "2025-12-30",
    displayDate: "30. prosinca 2025.",
    category: "Zakonske obveze",
    section: "novosti",
    excerpt: "Obavještavamo sve dobavljače za zgrade da sukladno odredbama Zakona o fiskalizaciji (NN 89/25 ) koji stupa na snagu 1. siječnja 2026. godine, Zgrade, odnosno zajednice suvlasnika, u okviru djelatnosti upravljanja i održavanja…",
    bodyHtml: `Obavještavamo sve dobavljače za zgrade da sukladno odredbama Zakona o fiskalizaciji (NN <a href="https://narodne-novine.nn.hr/clanci/sluzbeni/2025_06_89_1233.html" target="_blank" rel="noreferrer">89/25</a>) koji stupa na snagu 1. siječnja 2026. godine, Zgrade, odnosno zajednice suvlasnika, u okviru djelatnosti upravljanja i održavanja zgrada nisu porezni obveznici PDV-a niti poreza na dobit, slijedom čega nisu obveznici fiskalizacije, te u okviru toga propisa nisu obvezne izdavati niti zaprimati eRačune.
Sukladno tome, račune za sve poslove izvršene na Zgradama u okviru djelatnosti upravljanja i održavanja zgrada (koji se podmiruju na teret sredstava zajedničke pričuve) je potrebno i dalje ispostavljati kao i do sada, te slati na e-mail adresu:
<a href="mailto:e-racuni.zgrade@hpc-spg.hr">e-racuni.zgrade@hpc-spg.hr</a>
ili u papirnatom obliku na našu adresu Adama Mandrovića 3, Zagreb.
Račun je potrebno nasloviti/ispostaviti na Zgradu s dodijeljenim OIB-om (ukoliko ga zgrada već ima), odnosno na zajednicu suvlasnika zastupanu po upravitelju, nikako na upravitelja s njegovim OIB-om.
Sve fiskalizirane račune za Zgrade poslane u sustav putem OIB-a upravitelja, sukladno odredbama Zakona o fiskalizaciji, morat ćemo odbijati.`,
    metaDescription: "Obavještavamo sve dobavljače za zgrade da sukladno odredbama Zakona o fiskalizaciji (NN 89/25 ) koji stupa na snagu 1. siječnja 2026. godine, Zgrade, odnosno zajednice suvlasnika, ",
    legacySlugs: ["fiskalizacija-izdavanje-racuna-za-stambene-zgrade-nakon-1-sijecnja-2026-g"],
  },
  {
    slug: "poziv-za-dostavu-ponuda-za-prinudnog-predstavnika-suvlasnika",
    title: "Poziv za dostavu ponuda za prinudnog predstavnika suvlasnika za područje gradova Dugo Selo, Karlovac i Zaprešić",
    date: "2025-03-27",
    displayDate: "27. ožujka 2025.",
    category: "Javni poziv",
    section: "novosti",
    excerpt: "Hrvatski poslovni centar – stambeno poslovno gospodarstvo d.o.o. Zagreb, Ulica Adama Mandrovića 3 ovim putem u ime i za račun suvlasnika stambenih zgrada kojima upravlja, sukladno članku 42. Zakona o upravljanju i održavanju…",
    bodyHtml: `<p>Hrvatski poslovni centar – stambeno poslovno gospodarstvo d.o.o.<br />
Zagreb, Ulica Adama Mandrovića 3</p>
<p>ovim putem u ime i za račun suvlasnika stambenih zgrada kojima upravlja, sukladno članku 42. Zakona o upravljanju i održavanju zgrada (NN 152/24) raspisuje</p>
<h3>POZIV ZA DOSTAVU PONUDA ZA OBAVLJANJE POSLOVA PRINUDNOG PREDSTAVNIKA SUVLASNIKA</h3>
<p>Poziv se, u skladu s člankom 42. st. 8. Zakona o upravljanju i održavanju zgrada, raspisuje za stambene zgrade koje nemaju izabranog predstavnika suvlasnika na području jedinica lokalne samouprave gradova Zaprešić i Dugo Selo, prema kojem će upravitelj imenovati prinudnog predstavnika suvlasnika do obavijesti suvlasnika o izboru predstavnika.</p>
<p>Ponuditelji, fizičke osobe, sukladno čl. 42. st. 9. Zakona moraju zadovoljiti sljedeće uvjete:<br />
&#8211; biti poslovno sposobna fizička osoba,<br />
&#8211; imati prebivalište u jedinici lokalne samouprave u kojoj se zgrada nalazi (Dugo Selo, Karlovac ili Zaprešić),<br />
&#8211; imati visoku stručnu spremu iz područja društvenih ili tehničkih znanosti,<br />
&#8211; uz uvjet da se protiv te osobe ne vodi kazneni postupak.</p>
<p>Ponuditelji uz prijavu na poziv i životopis trebaju dostaviti sljedeću dokumentaciju:<br />
1. Dokaz o stručnoj spremi (VSS iz područja društvenih ili tehničkih znanosti)<br />
2. Dokaz o prebivalištu<br />
3. Uvjerenje da se protiv kandidata ne vodi kazneni postupak.</p>
<p>Ponude s kompletiranom dokumentacijom potrebno je dostaviti na adresu e-pošte<br />
<a href="mailto:posao@hpc-spg.hr">posao@hpc-spg.hr</a></p>`,
    metaDescription: "Hrvatski poslovni centar – stambeno poslovno gospodarstvo d.o.o. Zagreb, Ulica Adama Mandrovića 3 ovim putem u ime i za račun suvlasnika stambenih zgrada kojima upravlja, sukladno ",
    legacySlugs: ["poziv-za-dostavu-ponuda-za-prinudnog-predstavnika-suvlasnika"],
  },
  {
    slug: "izbor-ovlastenog-predstavnika-suvlasnika-zgrade-hitno",
    title: "Izbor ovlaštenog predstavnika suvlasnika zgrade",
    date: "2025-03-19",
    displayDate: "19. ožujka 2025.",
    category: "Obavijest",
    section: "novosti",
    excerpt: "Izbor ovlaštenog predstavnika suvlasnika zgrade sukladno čl. 42. Zakona o upravljanju i održavanju zgrada U svojstvu upravitelja zgrade, pozivamo suvlasnike zgrada kojima upravljamo, a koje nemaju izabranog predstavnika…",
    bodyHtml: `<h4>Izbor ovlaštenog predstavnika suvlasnika zgrade sukladno čl. 42. Zakona o upravljanju i održavanju zgrada</h4>
<p>U svojstvu upravitelja zgrade, pozivamo suvlasnike zgrada kojima upravljamo, a koje nemaju izabranog predstavnika suvlasnika, da sukladno članku 42. st. 7. Zakon o upravljanju i održavanju zgrada u roku od 60 dana izaberu novog ovlaštenog predstavnika suvlasnika koji ima ovlaštenje predstavljati suvlasnike u svezi s upravljanjem i održavanjem zgrade u okviru ovlasti propisane Zakonom o upravljanju i održavanju zgrada, zakonom kojim se uređuje vlasništvo i druga stvarna prava te međuvlasničkim ugovorom.</p>
<p>Predstavnik suvlasnika je poslovno sposobna fizička osoba koja je jedan od suvlasnika ili bračni ili izvanbračni drug ili životni partner ili neformalan životni partner ili srodnik u ravnoj liniji suvlasnika koji žive u istoj zgradi, izabran na način da odluku o njegovu izboru donesu suvlasnici natpolovičnom većinom.</p>
<p>Ako nije moguće izabrati predstavnika suvlasnika na način predviđen stavkom 1. ovoga članka, predstavnik suvlasnika može biti i treća poslovno sposobna fizička osoba koja ima prebivalište ili boravište u gradu ili općini na čijem se području zgrada nalazi. Odluka o izboru predstavnika suvlasnika iz stavka 2. ovoga članka donosi se dvotrećinskom većinom.</p>
<p>Međuvlasničkim ugovorom moguće je predvidjeti mjesečnu naknadu za rad i naknadu materijalnih troškova za predstavnika suvlasnika.</p>
<p>U protivnom, upravitelj zgrade ima mogućnost imenovati prinudnog predstavnika suvlasnika do obavijesti suvlasnika o izboru predstavnika suvlasnika.</p>
<ul>
<li>Prinudni predstavnik suvlasnika mora biti poslovno sposobna fizička osoba koja ima prebivalište u jedinici lokalne samouprave u kojoj se zgrada nalazi te mora imati visoku stručnu spremu iz područja društvenih ili tehničkih znanosti, uz uvjet da se protiv te osobe ne vodi kazneni postupak</li>
<li>Prinudni predstavnik suvlasnika ima sva prava i obveze predstavnika suvlasnika te ostvaruje pravo na novčanu naknadu za svoj rad.</li>
</ul>
<p>U većim je zgradama svakako poželjno da se uz izabranog predstavnika suvlasnika uspostavi i Vijeće suvlasnika koje pruža dodatnu podršku predstavniku i olakšava donošenje odluka i prikupljanje potrebnih suglasnosti što bi pojednostavilo i ubrzalo izvršavanje svih potrebnih poslova i aktivnosti na zgradi.</p>
<p><a href="/documents/dopis-izbor-predstavnika.pdf">Dopis izbor predstavnika</a></p>`,
    documents: [
      { label: "Dopis izbor predstavnika", href: "/documents/dopis-izbor-predstavnika.pdf" },
    ],
    metaDescription: "Izbor ovlaštenog predstavnika suvlasnika zgrade sukladno čl. 42. Zakona o upravljanju i održavanju zgrada U svojstvu upravitelja zgrade, pozivamo suvlasnike zgrada kojima upravljam",
    legacySlugs: ["izbor-ovlastenog-predstavnika-suvlasnika-zgrade-hitno"],
  },
  {
    slug: "obavijest-gradske-plinare-o-zamjeni-plinomjera",
    title: "Obavijest Gradske plinare o zamjeni plinomjera",
    date: "2025-01-17",
    displayDate: "17. siječnja 2025.",
    category: "Obavijest",
    section: "novosti",
    excerpt: "Poštovani, obavještavamo Vas da će se u 2025. godini zamjena plinomjera i ispitivanje plinskih instalacija u višestambenim objektima na distribucijskom području Gradske plinare Zagreb d.o.o. izvršavati sukladno planu iz privitka.…",
    bodyHtml: `<p>Poštovani,</p>
<p>obavještavamo Vas da će se u 2025. godini zamjena plinomjera i ispitivanje plinskih instalacija u višestambenim objektima na distribucijskom području Gradske plinare Zagreb d.o.o. izvršavati sukladno planu iz privitka.</p>
<p><a href="/documents/plan-zgrade-2025.xls">Plan &#8211; zgrade 2025</a></p>
<p>Plan je temeljen na zakonskim obvezama koje je svaki operator distribucijskog sustava plina u Republici Hrvatskoj dužan izvršavati prema Zakonu o zapaljivim tekućinama i plinovima (NN 108/95, 56/10 i 114/22) i Zakonu o mjeriteljstvu s pripadajućim podzakonskim aktima (NN 74/14, 111/18 i 114/22).</p>
<p>Molimo Vas da nam u suradnji s predstavnicima suvlasnika i samih suvlasnika objekata omogućite nesmetani pristup plinomjerima i plinskim instalacijama u svrhu provjere ispravnosti sukladno obvezama iz članka 41. stavak 1. točka 10. Zakona o upravljanju i održavanju zgrada (NN 152/2024).</p>
<p>Također, molimo Vas da na primjereni način obavijestite suvlasnike zgrada da su obvezni posjedovati nalaze o ispravnosti koji se odnosi na plinska trošila i zrako-dimovodni sustav nužnih za nastavak isporuke plina nakon zamjene plinomjera, a što je opisano u članku 9. Zakona o zapaljivim tekućinama i plinovima.</p>
<p><strong>S poštovanjem,</strong></p>
<p><strong></strong><strong></strong></p>
<p><strong>GRADSKA PLINARA ZAGREB D.O.O.</strong><strong></strong></p>
<p><strong>Radnička cesta 1, 10 000 Zagreb</strong></p>
<p>SLUŽBA TEHNIČKE PODRŠKE</p>`,
    metaDescription: "Poštovani, obavještavamo Vas da će se u 2025. godini zamjena plinomjera i ispitivanje plinskih instalacija u višestambenim objektima na distribucijskom području Gradske plinare Zag",
    legacySlugs: ["obavijest-gradske-plinare-o-zamjeni-plinomjera"],
  },
  {
    slug: "novi-zakon-o-upravljanju-i-odrzavanju-zgrada",
    title: "Novi Zakon o upravljanju i održavanju zgrada",
    date: "2025-01-02",
    displayDate: "2. siječnja 2025.",
    category: "Zakonske obveze",
    section: "novosti",
    excerpt: "Dana 1. siječnja 2025.g. stupio je na snagu novi Zakon o upravljanju i održavanju zgrada (NN 152/2024). U nastavku donosimo neke važnije odredbe koje se odnose na obračun pričuve, te prava i obveze suvlasnika. Predstavnik…",
    bodyHtml: `<p>Dana 1. siječnja 2025.g. stupio je na snagu novi Zakon o upravljanju i održavanju zgrada (NN 152/2024).</p>
<p>U nastavku donosimo neke važnije odredbe koje se odnose na obračun pričuve, te prava i obveze suvlasnika.</p>
<p><a href="/documents/dopis-predstavnicima-novi-zakon.pdf">Predstavnik suvlasnika</a><br />
<a href="/documents/prava-i-obveze-suvlasnika.pdf">Prava i obveze suvlasnika</a></p>`,
    documents: [
      { label: "Predstavnik suvlasnika", href: "/documents/dopis-predstavnicima-novi-zakon.pdf" },
      { label: "Prava i obveze suvlasnika", href: "/documents/prava-i-obveze-suvlasnika.pdf" },
    ],
    metaDescription: "Dana 1. siječnja 2025.g. stupio je na snagu novi Zakon o upravljanju i održavanju zgrada (NN 152/2024). U nastavku donosimo neke važnije odredbe koje se odnose na obračun pričuve, ",
    legacySlugs: ["novi-zakon-o-upravljanju-i-odrzavanju-zgrada"],
  },
  {
    slug: "javni-poziv-grada-zagreba-za-provodenje-i-financiranje-mjera-ozelenjivanja-dvori",
    title: "Javni poziv Grada Zagreba za provođenje i financiranje mjera ozelenjivanja dvorišta",
    date: "2024-11-06",
    displayDate: "6. studenoga 2024.",
    category: "Javni poziv",
    section: "novosti",
    excerpt: "Obavještavamo sve zainteresirane suvlasnike da je Grad Zagreb objavio Javni poziv za provođenje i financiranje mjera ozelenjivanja dvorišta više informacija na sljedećem linku Grad Zagreb službene stranice Javni poziv je otvoren…",
    bodyHtml: `<p>Obavještavamo sve zainteresirane suvlasnike da je Grad Zagreb objavio Javni poziv za provođenje i financiranje mjera ozelenjivanja dvorišta</p>
<p>više informacija na sljedećem <a href="https://zagreb.hr/javni-poziv-za-provo%C4%91enje-i-financiranje-mjera-oze/202960" target="_blank" rel="noreferrer">linku</a></p>
<p><a href="https://zagreb.hr/javni-poziv-za-provo%C4%91enje-i-financiranje-mjera-oze/202960" target="_blank" rel="noreferrer">Grad Zagreb službene stranice</a></p>
<p><strong>Javni poziv je otvoren do 29. 11. 2024.</strong></p>
<p>Ukoliko ste zainteresirani za prijavu, molimo Vas da nam se obratite na e-mail info@hpc-spg.hr ili direktno referentu zgrade.</p>
<p><a href="https://actgreen.zagreb.hr/objavljen-javni-poziv-za-provodjenje-i-financiranje-mjera-ozelenjivanja-dvorista/134781" target="_blank" rel="noreferrer">Grad Zagreb &#8211; Aktiviranje zelenih dvorišta</a></p>`,
    metaDescription: "Obavještavamo sve zainteresirane suvlasnike da je Grad Zagreb objavio Javni poziv za provođenje i financiranje mjera ozelenjivanja dvorišta više informacija na sljedećem linku Grad",
    legacySlugs: ["javni-poziv-grada-zagreba-za-provodenje-i-financiranje-mjera-ozelenjivanja-dvorista"],
  },
  {
    slug: "hep-toplinarstvo-obavijest-stambenim-upraviteljima-o-pocetku-pripreme-za-ogrjevn",
    title: "HEP TOPLINARSTVO Obavijest stambenim upraviteljima o početku pripreme za ogrjevnu sezonu 2024/2025",
    date: "2024-08-21",
    displayDate: "21. kolovoza 2024.",
    category: "Obavijest",
    section: "novosti",
    excerpt: "HEP Toplinarstvo obavještava da priprema za ogrjevnu sezonu 2024/2025 započinje 02.09.2023., te stoga mole da se svi radovi na kućnim instalacijama završe u što kraćem roku kako bi mogli napuniti instalacije te ih pripremiti za…",
    bodyHtml: `<p>HEP Toplinarstvo obavještava da priprema za ogrjevnu sezonu 2024/2025 započinje 02.09.2023., te stoga mole da se svi radovi na kućnim instalacijama završe u što kraćem roku kako bi mogli napuniti instalacije te ih pripremiti za sezonu.</p>
<p>Nakon <strong>30.08.2024.</strong> više <strong>NE</strong> primaju zahtjeve za pražnjenje kućnih instalacija, a puniti će se prema  rasporedu koji će tjedno dostavljati kao i obavijesti na zgrade barem par dana prije.</p>
<p>Potvrdu o odgodama punjenja unutarnjih instalacija možete dostaviti na telefax: 01/6131-686, ili na mail  <a href="mailto:dezurstvotm@hep.hr">dezurstvotm@hep.hr</a></p>`,
    metaDescription: "HEP Toplinarstvo obavještava da priprema za ogrjevnu sezonu 2024/2025 započinje 02.09.2023., te stoga mole da se svi radovi na kućnim instalacijama završe u što kraćem roku kako bi",
    legacySlugs: ["hep-toplinarstvo-obavijest-stambenim-upraviteljima-o-pocetku-pripreme-za-ogrjevnu-sezonu-2024-2025"],
  },
  {
    slug: "zahtjev-za-pristupne-podatke",
    title: "Zahtjev za pristupne podatke za web i mobilnu aplikaciju",
    date: "2024-04-19",
    displayDate: "19. travnja 2024.",
    category: "Digitalne usluge",
    section: "novosti",
    excerpt: "Web i mobilna aplikacija Upravitelj HPC-SPG imaju sljedeće funkcionalnosti: prijave kvarova (isključivo predstavniku suvlasnika) uvid u financijska izvješća za zgradu uvid u pojedinačne kartice suvlasnika – provjera stanja…",
    bodyHtml: `<p>Web i mobilna aplikacija <strong>Upravitelj HPC-SPG</strong> imaju sljedeće funkcionalnosti:</p>
<ul>
<li>prijave kvarova (isključivo predstavniku suvlasnika)</li>
<li>uvid u financijska izvješća za zgradu</li>
<li>uvid u pojedinačne kartice suvlasnika &#8211; provjera stanja dugovanja/plaćanja za svoj prostor</li>
<li>plaćanje pričuve (skidanje 2D barkoda za dugovanje i za plaćanje pričuve za buduće razdoblje)</li>
<li>međusobna komunikacija između suvlasnika i predstavnika, te predstavnika s upraviteljem</li>
<li>uvid u važnije dokumente za zgradu poput prijedloga GPU-a, odluka suvlasnika i sl.</li>
</ul>
<p>Prijavnica u <a href="https://hpc-spg.com/" target="_blank" rel="noreferrer">web aplikaciju</a> sadrži kratke upute i link na mobilnu aplikaciju.</p>
<p>Ovdje zatražite pristupne podatke za pristup web i mobilnoj aplikaciji.</p>
<h3>Zahtjev za pristupne podatke za web i mobilnu aplikaciju</h3>
<ul><li><h3>Podaci o zgradi</h3></li><li>Ime i prezime vlasnika prostora* </li><li>Adresa zgrade u kojoj se prostor nalazi* </li><li>Točan poziv na broj s posljednje uplatnice* Poziv na broj je obavezan podatak kako bi se korisnik mogao identificirati u sustavu</li><li>Ime i prezime predstavnika suvlasnika </li><li>Vaša adresa e-pošte*
</li><li>Napomena </li><li></li></ul>
<p>Mobilna aplikacija &#8220;Upravitelj HPC-SPG&#8221; dostupna je na <a href="https://play.google.com/store/apps/details?id=com.ludegljive.hpcspg" target="_blank" rel="noreferrer">Google Play</a> za Android telefone, te na <a href="https://apps.apple.com/us/app/hpc-spg/id6740730949" target="_blank" rel="noreferrer">Apple store</a> za iPhone. Aplikacija je trenutno aktivirana za Hrvatsku, Austriju i Njemačku, te ukoliko se nalazite izvan tih zemalja, molimo da to navedete u napomeni ili nas kontaktirate.</p>`,
    metaDescription: "Web i mobilna aplikacija Upravitelj HPC-SPG imaju sljedeće funkcionalnosti: prijave kvarova (isključivo predstavniku suvlasnika) uvid u financijska izvješća za zgradu uvid u pojedi",
    legacySlugs: ["zahtjev-za-pristupne-podatke"],
  },
  {
    slug: "novi-poziv-za-energetsku-obnovu-visestambenih-zgrada",
    title: "Novi Poziv za energetsku obnovu višestambenih zgrada",
    date: "2024-03-29",
    displayDate: "29. ožujka 2024.",
    category: "Energetska obnova",
    section: "novosti",
    excerpt: "Obavještavamo sve zainteresirane suvlasnike zgrada kojima upravljamo da je 29.03.2024. objavljen novi Poziv Ministarstva prostornog uređenja, graditeljstva i državne imovine za energetsku obnovu višestambenih zgrada. Rok za…",
    bodyHtml: `<p>Obavještavamo sve zainteresirane suvlasnike zgrada kojima upravljamo da je 29.03.2024. objavljen novi Poziv Ministarstva prostornog uređenja, graditeljstva i državne imovine za energetsku obnovu višestambenih zgrada. Rok za podnošenje projektnih prijava je 03.06.2024.</p>
<p>Svrha ovog poziva<br />
Cilj Poziva je provođenje integralne energetske obnove, dubinske obnove i sveobuhvatne obnove višestambenih zgrada koja će rezultirati uštedom godišnje potrebne toplinske energije za grijanje (QH,nd) (kWh/god) od najmanje 50% u odnosu na stanje prije obnove na razini svakog projektnog prijedloga. Iznimno, zgrade upisane u Registar kulturnih dobara RH (kao pojedinačno zaštićeno nepokretno kulturno dobro ili kao dio kulturno-povijesne cjeline), koje ne mogu ostvariti gore spomenuti uvjet, trebaju ostvariti uštede primarne energije (Eprim) na godišnjoj razini od najmanje 30% u odnosu na stanje prije obnove, također na razini svakog pojedinog projektnog prijedloga.</p>
<p>Provedbom ovih mjera se, uz ispunjavanje zahtjeva važećih propisa, pored energetske uštede osigurava i smanjenje emisije CO2, što će doprinijeti dekarbonizaciji zgrada.</p>
<p>Na razini investicije C7.2. I1 Proširena mjera: Energetska obnova zgrada Dodatka Nacionalnom planu oporavka i otpornosti 2021.-2026. potrebno je ostvariti uštede primarne energije (Eprim) na godišnjoj razini od najmanje 30%, čemu ovaj Poziv također doprinosi.</p>
<p>Predmet ovog poziva<br />
Pozivom će se sufinancirati izrada projektne dokumentacije i energetska obnova postojećih višestambenih zgrada neoštećenih u potresima te onih koje su bile oštećene u potresima 22. ožujka te 28. i 29. prosinca 2020. godine na području Grada Zagreba, Krapinsko-zagorske županije, Zagrebačke županije, Sisačko-moslavačke županije i Karlovačke županije, no u međuvremenu su već provele hitne sanacije, odnosno nekonstrukcijsku ili konstrukcijsku obnovu.</p>
<p>Pozivom se podupiru mjere energetske učinkovitosti, korištenje obnovljivih izvora energije, mjere povećanja potresne otpornosti zgrade, sigurnosti u slučaju požara, osiguranja zdravih unutarnjih klimatskih uvjeta, osiguranja pristupačnosti osobama s invaliditetom i smanjene pokretljivosti, ugradnje elemenata zelene infrastrukture, održive urbane mobilnosti i elektromobilnosti.</p>
<p>Pozivom se predviđa nekoliko kategorija obnove sukladno Programu energetske obnove višestambenih zgrada za razdoblje do 2030. godine i Programu energetske obnove zgrada koje imaju status kulturnog dobra za razdoblje do 2030. godine :</p>
<p>· Integralna energetska obnova,</p>
<p>· Dubinska obnova,</p>
<p>· Sveobuhvatna obnova &#8211; koja obuhvaća minimalno integralnu energetsku ili dubinsku obnovu te jednu ili više mjera za smanjenje rizika povezanih s djelovanjem potresa kojima će se povećati potresna otpornost zgrade za najmanje 10% iznad postojeće.</p>
<p>Sveobuhvatna obnova se može sufinancirati za višestambene zgrade neoštećene u potresima te višestambene zgrade koje su bile kategorije uporabljivosti U1 ili U2 za koje je Analizom postojećeg stanja zgrade utvrđeno da nemaju oštećenja uzrokovanih potresima. Višestambenim zgradama koje su bile oštećene u potresima te su provele konstrukcijsku obnovu ne može biti sufinancirana sveobuhvatna obnova.</p>
<p>Ukupna bespovratna sredstva: 94.235.322,37 €</p>
<p>Minimalni iznos bespovratnih sredstava: 55.000,00 €</p>
<p>Maksimalni iznos bespovratnih sredstava: 6.500.000,00 €</p>
<p>Više na povezinici <a href="https://fondovieu.gov.hr/pozivi/109" target="_blank" rel="noreferrer">Detalji poziva &#8220;Energetska obnova višestambenih zgrada&#8221; &#8211; oznaka &#8220;NPOO.C7.2.I1.01&#8221; &#8211; NPOO (Nacionalni plan oporavka i otpornosti) &#8211; fondovieu.gov.hr</a></p>
<h3>Ukoliko ste zainteresirani za prijavu na predmetni Poziv obratite se svom referentu zgrade ili na e-mail: info@hpc-spg.hr</h3>`,
    metaDescription: "Obavještavamo sve zainteresirane suvlasnike zgrada kojima upravljamo da je 29.03.2024. objavljen novi Poziv Ministarstva prostornog uređenja, graditeljstva i državne imovine za ene",
    legacySlugs: ["novi-poziv-za-energetsku-obnovu-visestambenih-zgrada"],
  },
  {
    slug: "javni-poziv-za-sufinanciranje-izrade-boksova-za-odlaganje-otpada",
    title: "Javni poziv za nadoknadu troškova izrade boksova za odlaganje otpada – produljen rok",
    date: "2024-01-11",
    displayDate: "11. siječnja 2024.",
    category: "Javni poziv",
    section: "novosti",
    excerpt: "Rok za predaju zahtjeva je produljen do 31.12.2025. Službene stranice Grada Zagreba Obavještavamo suvlasnike i predstavnike suvlasnika zgrada u Gradu Zagrebu kojima upravljamo, da je objavljen Javni poziv za dostavu dokumentacije…",
    bodyHtml: `<p>Rok za predaju zahtjeva je produljen do 31.12.2025.<br />
<a href="https://www.zagreb.hr/javni-poziv-za-dostavu-dokumentacije-kojom-se-doka/194394" target="_blank" rel="noreferrer">Službene stranice Grada Zagreba</a></p>
<p>Obavještavamo suvlasnike i predstavnike suvlasnika zgrada u Gradu Zagrebu kojima upravljamo, da je objavljen Javni poziv za dostavu dokumentacije kojom se dokazuje ispunjavanje uvjeta za nadoknadu troškova suvlasnicima višestambenih zgrada nastalih zbog prilagodbe novom modelu sakupljanja komunalnog otpada.</p>
<p>Naime, gradskom <a href="https://www1.zagreb.hr/sluzbeni-glasnik/index.html#/app/akt?id=e0902fb8-4414-4ddc-afc7-598f41ba14d3" target="_blank" rel="noreferrer">Odlukom o načinu pružanja javne usluge sakupljanja komunalnog otpada na području Grada Zagreba (Službeni glasnik Grada Zagreba 7/22, 19/22 i 33/22) </a>propisana je obveza da se spremnici za otpad moraju nalaziti na lokaciji obračunskog mjesta korisnika usluge u za to predviđenim zaključanim smetlarnicima i podrumima, haustorima, ograđenim dvorištima, tipiziranim boksovima, smješteni unutar katastarske čestice nekretnine ili smješteni na bilo koji drugi odgovarajući način kojim se onemogućuje pristup spremnicima od strane trećih osoba. Predmetnom odlukom propisane su i novčane kazne za korisnike usluge koji ne ispunjavaju svoje obveze ili ih neuredno ispune i to <strong>ako spremnike ne drži u za to predviđenim zaključanim smetlarnicima i podrumima, haustorima, ograđenim dvorištima, unutar katastarske čestice nekretnine, tipiziranim boksovima gdje za to postoji mogućnost ili smještene na bilo koji drugi odgovarajući način kojim se onemogućuje pristup spremnicima od strane trećih osoba, ako nakon obavljene primopredaje spremnike ne vrati na njihovo mjesto te ako se bez odobrenja davatelja usluge spremnici nalaze na javnoj površini,</strong> u iznosu koji je razmjeran troškovima uklanjanja posljedica člankom 14. opisanog postupanja, a najviše u iznosu od 500,00 kuna (66,36 EUR) za korisnike usluge iz kategorije korisnika kućanstvo, odnosno najviše u iznosu od 1000,00 kuna (132,72 EUR) za korisnike usluge iz kategorije korisnika koji nije kućanstvo.</p>
<p>Pravo na nadoknadu troškova imaju suvlasnici višestambenih zgrada na području Grada Zagreba koji su nakon 8. ožujka 2022. imali ili će u 2024. g. imati troškove vezane uz izgradnju boksa, zatvaranje postojećeg boksa ili zatvaranje vrata smetlarnika, te ugradnju master cilindara/ključa ili šifrarnika na boks ili na smetlarnik i prilagodbu vrata za šifrarnik.</p>
<p>Zahtjevi se mogu podnijeti do 31. prosinca 2024.</p>
<p><a href="https://www.zagreb.hr/UserDocsImages/arhiva/gospodarstvo/Aktualno/Javni%20poziv%20za%20dostavu%20dokumentacije%20za%20nadoknadu%20tro%C5%A1kova%20prilagodbe%20novom%20modelu%20sakupljanja%20komunalnog%20otpada/Jav%20poziv%20dostava%20dok%20nadokn.docx" target="_blank" rel="noreferrer">Javni poziv za dostavu dokumentacije kojom se dokazuje ispunjavanje uvjeta za nadoknadu troškova suvlasnicima višestambenih zgrada nastalih zbog prilagodbe novom modelu sakupljanja komunalnog otpada</a></p>
<p><a href="https://www.zagreb.hr/userdocsimages/arhiva/gospodarstvo/aktualno/javni%20poziv%20za%20dostavu%20dokumentacije%20za%20nadoknadu%20tro%C5%A1kova%20prilagodbe%20novom%20modelu%20sakupljanja%20komunalnog%20otpada/Zahtj%20nadok%20tros%20suvl%20otp1.docx" target="_blank" rel="noreferrer">Zahtjev za nadoknadu troškova suvlasnicima višestambenih zgrada nastalih zbog prilagodbe novom modelu sakupljanja komunalnog otpada propisanog odlukom o načinu pružanja javne usluge sakupljanja komunalnog otpada na području Grada Zagreba </a></p>
<p><a href="https://www.zagreb.hr/UserDocsImages/arhiva/gospodarstvo/Aktualno/Javni%20poziv%20za%20dostavu%20dokumentacije%20za%20nadoknadu%20tro%C5%A1kova%20prilagodbe%20novom%20modelu%20sakupljanja%20komunalnog%20otpada/Uputa%20prav%20ispitan.docx" target="_blank" rel="noreferrer">Uputa o pravima ispitanika</a></p>
<h3>Ukoliko želite da kao upravitelj  prijavimo Vašu zgradu za nadoknadu troškova nastalih zbog prilagodbe novom modelu sakupljanja komunalnog otpada, obratite se svom referentu zgrade ili na e-mail <a href="mailto:info@hpc-spg.hr">info@hpc-spg.hr</a></h3>`,
    metaDescription: "Rok za predaju zahtjeva je produljen do 31.12.2025. Službene stranice Grada Zagreba Obavještavamo suvlasnike i predstavnike suvlasnika zgrada u Gradu Zagrebu kojima upravljamo, da ",
    legacySlugs: ["javni-poziv-za-sufinanciranje-izrade-boksova-za-odlaganje-otpada"],
  },
  {
    slug: "poziv-za-podnosenje-zahtjeva-za-financiranje-sufinanciranje-zastite-vanjskih-dij",
    title: "Poziv za podnošenje zahtjeva za financiranje/sufinanciranje zaštite vanjskih dijelova građevina od grafita",
    date: "2024-01-11",
    displayDate: "11. siječnja 2024.",
    category: "Javni poziv",
    section: "novosti",
    excerpt: "Obavještavamo vlasnike građevina, predstavnike suvlasnika zgrada kojima upravljamo na području Grada Zagreba da je objavljena Odluka o zaštiti građevina od grafita (Službeni glasnik Grada Zagreba 20/23) sukladno kojoj: a) Grad…",
    bodyHtml: `<p>Obavještavamo vlasnike građevina, predstavnike suvlasnika zgrada kojima upravljamo na području Grada Zagreba da je objavljena Odluka o zaštiti građevina od grafita (Službeni glasnik Grada Zagreba 20/23) sukladno kojoj:</p>
<p>a) Grad Zagreb financira u 100 %-tnom iznosu:<br />
&#8211; uklanjanje grafita i<br />
&#8211; nanošenje zaštitnog antigrafitnog premaza na svim vanjskim dijelovima građevine.<br />
Grad Zagreb za navedene radove odabire izvođača radova prema posebnim propisima o javnoj nabavi.</p>
<p>b) Grad Zagreb sufinancira:<br />
&#8211; u 80 %-tnom iznosu nabavu kamera i tehničkog uređaja za videonadzor uličnog pročelja, a najviše do 750,00 eura s PDV-om po građevini<br />
&#8211; u 60 %-tnom iznosu nabavu kamera i tehničkog uređaja za videonadzor ostalih pročelja, a najviše do 200,00 eura s PDV-om po svakom pročelju.<br />
Sufinanciranje ne uključuje troškove nabave potrošnog materijala svih potrebnih radova izvođenja instalacije uređaja.<br />
Kamere i tehnički uređaj za videonadzor nabavlja o svom trošku podnositelj zahtjeva, a Grad Zagreb će podnositelju zahtjeva izvršiti povrat sredstava sukladno odredbama Odluke o zaštiti građevina od grafita.</p>
<p>Zahtjev mogu podnijeti:<br />
&#8211; vlasnici građevina,<br />
&#8211; predstavnici suvlasnika,<br />
&#8211; upravitelji zgrade ako prema posebnom propisu zgrada mora imati upravitelja zgrade.</p>
<p>Podnošenje zahtjeva i popis dokumentacije koju je potrebno priložiti uz zahtjev: Zahtjev se podnosi putem online aplikacije objavljene na web stranicama Grada Zagreba ili osobno u pisarnici Gradskog ureda za obnovu, izgradnju, prostorno uređenje, graditeljstvo i komunalne poslove, Sektor za građenje i sanaciju oštećenih objekata društvenih djelatnosti i stambenih objekata, Odjel za radove na zaštiti i očuvanju kulturnih dobara, Avenija Marina Držića 4, Zagreb.<br />
Zahtjev sadrži:<br />
&#8211; podatke o vlasniku / predstavniku suvlasnika građevine (ime i prezime, odnosno naziv i sjedište pravne osobe, OIB, za pravnu osobu i MB, adresa, telefon, mobitel, e-mail, broj računa IBAN)<br />
&#8211; podatke o upravitelju zgrade (naziv i adresu upravitelja zgrade, izvadak iz sudskog ili obrtnog registra, ime i prezime osobe ovlaštene za zastupanje upravitelja zgrade, telefon, mobitel, e-mail)<br />
&#8211; adresu građevine<br />
&#8211; naznaku mjere zaštite od grafita: uklanjanje grafita i/ili nanošenje zaštitnog antigrafitnog premaza i/ili postavljanje videonadzora<br />
&#8211; opis postojećeg stanja vanjskog dijela građevine s fotografijom<br />
&#8211; dokaz o pravu vlasništva građevine u originalu ili ovjerenoj preslici odnosno presliku međuvlasničkog ugovora<br />
&#8211; ovjerenu izjavu vlasnika / suvlasnika da neće od Grada Zagreba potraživati naknadu štete ako do štete dođe prilikom izvođenja radova zbog nedostataka na građevini koji nisu mogli biti poznati izvođaču radova i Gradskom uredu za obnovu, izgradnju, prostorno uređenje, graditeljstvo i komunalne poslove (u daljnjem tekstu: nadležno tijelo)<br />
&#8211; za postavljanje videonadzora tehničku dokumentaciju izrađenu od ovlaštene osobe sukladno posebnim propisima o privatnoj zaštiti, posebnim propisima o tajnosti podataka i posebnim propisima o uvjetima i načinu provedbe tehničke zaštite, u originalu, prema minimalno tehničkim specifikacijama propisanim Odlukom o zaštiti građevina od grafita.</p>
<p><a href="https://www.zagreb.hr/zastita-objekata-od-grafita/109685" target="_blank" rel="noreferrer">Zaštita građevina od grafita</a></p>
<p><a href="https://www.zagreb.hr/UserDocsImages/www.zagreb.hr/poziv-za-podnosenje-zahtjeva-za-financiranje-sufin/190875" target="_blank" rel="noreferrer">Poziv za podnošenje zahtjeva</a></p>
<h3>Ukoliko želite da kao upravitelj predamo zahtjev za zaštitu od grafita za Vašu zgradu, obratite se svom referentu zgrade ili na e-mail <a href="mailto:info@hpc-spg.hr">info@hpc-spg.hr</a></h3>`,
    metaDescription: "Obavještavamo vlasnike građevina, predstavnike suvlasnika zgrada kojima upravljamo na području Grada Zagreba da je objavljena Odluka o zaštiti građevina od grafita (Službeni glasni",
    legacySlugs: ["poziv-za-podnosenje-zahtjeva-za-financiranje-sufinanciranje-zastite-vanjskih-dijelova-gradevina-od-grafita"],
  },
  {
    slug: "uplatnice-za-pricuvu",
    title: "E-uplatnice – slanje uplatnica za pričuvu e-mailom",
    date: "2023-12-01",
    displayDate: "1. prosinca 2023.",
    category: "Digitalne usluge",
    section: "novosti",
    excerpt: "Uplatnice za pričuvu odnosno 2D barkod za cjelokupno dugovanje kao i za buduća plaćanja od sada se mogu skinuti u web i mobilnoj aplikaciji ZATRAŽI PRISTUP APLIKACIJI Uplatnice za pričuvu možete primati i e-mailom. U svrhu točne…",
    bodyHtml: `<h3>Uplatnice za pričuvu odnosno 2D barkod za cjelokupno dugovanje kao i za buduća plaćanja od sada se mogu skinuti u web i mobilnoj aplikaciji</h3>
<p><a href="/novosti/zahtjev-za-pristupne-podatke"><strong>ZATRAŽI PRISTUP APLIKACIJI</strong></a></p>
<p>Uplatnice za pričuvu možete primati i e-mailom. U svrhu točne identifikacije i zaštite podataka potrebno je ispuniti <a href="/e-uplatnice">Zahtjev za slanje uplatnica za pričuvu e-mailom</a>.</p>
<p>Uplatnica se dostavlja putem e-maila u pdf formatu i identična je onoj na papiru, te sadrži 2D barkod za lakše plaćanje putem mobilnog bankarstva. S obzirom da većina aplikacija mobilnih bankarstava podržava i učitavanje 2D barkoda iz galerije Vašeg uređaja, kod se može spremiti u galeriju tzv. <em>screenshotom</em> odnosno slikanjem ekrana uređaja, te na jednostavan način učitati prilikom plaćanja. Stoga uplatnicu nije potrebno printati.</p>
<p>Podnošenjem zahtjeva, uplatnice će stizati isključivo na e-mail adresu koju ste naveli za svako buduće razdoblje sve do eventualnog opoziva, stoga zahtjev nije potrebno podnositi za svako razdoblje posebno, već samo jedanput.</p>
<p>Slanje uplatnica e-mailom osim što je u skladu s <a href="https://ec.europa.eu/info/strategy/priorities-2019-2024/europe-fit-digital-age/shaping-europe-digital-future_hr" target="_blank" rel="noreferrer">digitalnom strategijom EU</a>, idealno je rješenje za vlasnike stanova koji ne žive na adresi zgrade, iznajmljuju ih ili u njima samo povremeno borave, kao i za one koji zbog praktičnosti i organizacije arhivu plaćanja računa vode u elektronskom obliku. Posebno je korisno za vlasnike stanova koji imaju  podstanare, budući da se poslana uplatnica lako mailom prosljeđuje onome tko je plaća, a pritom se ne gubi kontrola primitka uplatnice.</p>
<p>Prednosti koje ćete ostvariti primanjem uplatnica e-mailom:</p>
<ul>
<li>
<blockquote>
<p>primanje uplatnica e-mailom potpuno je besplatno</p>
</blockquote>
</li>
<li>
<blockquote>
<p>primanje uplatnica omogućeno je bilo gdje, potreban je samo uređaj s pristupom internetu</p>
</blockquote>
</li>
<li>
<blockquote>
<p>eventualni gubitak računa sveden je na najmanju moguću mjeru budući da je jednom poslana uplatnica uvijek dostupna na Vašem e-mailu</p>
</blockquote>
</li>
<li>
<blockquote>
<p>smanjenjem potrošnje papira pridonosite očuvanju okoliša.</p>
</blockquote>
</li>
</ul>`,
    metaDescription: "Uplatnice za pričuvu odnosno 2D barkod za cjelokupno dugovanje kao i za buduća plaćanja od sada se mogu skinuti u web i mobilnoj aplikaciji ZATRAŽI PRISTUP APLIKACIJI Uplatnice za ",
    legacySlugs: ["uplatnice-za-pricuvu"],
  },
  {
    slug: "pozitivni-primjeri-uspjesnih-predstavnika-suvlasnika",
    title: "Pozitivni primjeri uspješnih predstavnika suvlasnika",
    date: "2023-11-09",
    displayDate: "9. studenoga 2023.",
    category: "Iz prakse",
    section: "novosti",
    excerpt: "Komentari i mišljenja – USPJEŠNA ZGRADA – ‘Suvlasnici se o zgradi i okolišu trebaju brinuti kao da je privatno vlasništvo’ – Zgradonačelnik.hr (zgradonacelnik.hr) izvor: zgradonacelnik.hr Zajednički prostori u zgradi Zvonimira…",
    bodyHtml: `<h2><a href="https://www.zgradonacelnik.hr/komentari-i-misljenja/uspjesna-zgrada-suvlasnici-se-o-zgradi-i-okolisu-trebaju-brinuti-kao-da-je-privatno-vlasnistvo/1379/" target="_blank" rel="noreferrer">Komentari i mišljenja &#8211; USPJEŠNA ZGRADA &#8211; &#8216;Suvlasnici se o zgradi i okolišu trebaju brinuti kao da je privatno vlasništvo&#8217; &#8211; Zgradonačelnik.hr (zgradonacelnik.hr)</a></h2>
<h3><strong>izvor: zgradonacelnik.hr</strong></h3>
<h4>Zajednički prostori u zgradi Zvonimira Rogoza 3</h4>`,
    metaDescription: "Komentari i mišljenja – USPJEŠNA ZGRADA – ‘Suvlasnici se o zgradi i okolišu trebaju brinuti kao da je privatno vlasništvo’ – Zgradonačelnik.hr (zgradonacelnik.hr) izvor: zgradonace",
    legacySlugs: ["pozitivni-primjeri-uspjesnih-predstavnika-suvlasnika"],
  },
  {
    slug: "prilagodba-poslovanja-na-novu-eur-valutu-obavijest",
    title: "Prilagodba poslovanja na novu EUR valutu",
    date: "2022-12-15",
    displayDate: "15. prosinca 2022.",
    category: "Obavijest",
    section: "novosti",
    excerpt: "Poštovani korisnici, Želimo Vam skrenuti pozornost na sve ključne promjene koje će se, sukladno zakonodavnom okviru – Zakon o uvođenju eura kao službene valute u Republici Hrvatskoj (NN 57/2022), Zakon o porezu na dodanu…",
    bodyHtml: `<p>Poštovani korisnici,</p>
<p>Želimo Vam skrenuti pozornost na sve ključne promjene koje će se, sukladno zakonodavnom okviru &#8211; Zakon o uvođenju eura kao službene valute u Republici Hrvatskoj (NN 57/2022), Zakon o porezu na dodanu vrijednost (NN 73/13, 99/13, 148/13, 153/13, 143/14, 115/16, 106/18, 121/19, 138/20, 39/22, 113/22) i druge propise, od 1. siječnja 2023., kada euro postaje službena valuta u Republici Hrvatskoj, primjenjivati i na naš poslovni odnos:</p>
<ul>
<li>Od 01.01.2023. važeće ugovore nije potrebno mijenjati odnosno sklapati nove.</li>
<li>Novi ugovori koji se sklapaju od 01.01.2023. sklapat će se u valuti EUR.</li>
<li>Otvorene stavke &#8211; dugovanja u kunama na dan 31.12.2022. se 01.01.2023. automatski preračunavaju u euro i od tog se datuma plaćaju u EUR valuti.</li>
<li>Nakon 01.01.2023. sva Vaša plaćanja zajedničke pričuve izvršavajte u EUR valuti primjenjujući fiksni tečaj konverzije i pravila zaokruživanja iz Zakona o uvođenju EUR-a kao službene valute u RH &#8211; na posljednjim uplatnicama koje ste dobili u kunama u svrsi doznake upisan je točan iznos u EUR valuti koji je potrebno platiti nakon 01.01.2023.</li>
<li>Računi i ponude na temelju kojih se izvršavaju plaćanja moraju biti iskazani u službenoj valuti. U razdoblju do 31.12.2022. knjigovodstvena isprava iskazuje se u kuni, a u razdoblju od 01.01.2023. iskazuje se u EUR valuti, kao jedinoj službenoj valuti od 01.01.2023. godine.</li>
<li>Svi brojevi poslovnih računa odnosno žiro-računa zajedničke pričuve zgrada ostat će isti, odnosno bit ćete u mogućnosti nastaviti izvršavati plaćanja na iste brojeve žiro-računa računa zajedničke pričuve kao i do sada.</li>
<li>Sve uplatnice koje su građani dobili unaprijed i na kojima je iznos plaćanja u kunama, a plaćate ih nakon uvođenja eura, banka je dužna izvršiti plaćanje u euru u iznosu koji odgovara iznosu kuna navedenom na nalogu za plaćanje. Banka će postupati na ovaj način do 1.7.2023. godine</li>
<li>Financijska agencija će nakon 1. siječnja pa do 30. lipnja 2023. godine zaprimati naloge ispostavljene u valuti kuna te će ih provoditi u eurima, uz primjenu konverzijskog tečaja. Također, za vrijeme dvojnog optjecaja, odnosno u prva dva tjedna siječnja 2023. godine, građani svoje naloge mogu plaćati u kunama, bez obzira na to jesu li isti ispostavljeni u kunama ili eurima.</li>
</ul>
<p><strong>Zbog prilagodbe cjelokupnog poslovanja na novu valutu koja će biti implementirana tijekom prvog tjedna siječnja, moguća su mala kašnjenja u plaćanjima prvenstveno zbog prilagodbe bankarskog sektora, te dostavi uplatnica za pričuvu za prvi kvartal, no isto se nikako neće smatrati dugovanjem, te u tom smislu molimo za Vaše strpljenje i razumijevanje.</strong></p>`,
    metaDescription: "Poštovani korisnici, Želimo Vam skrenuti pozornost na sve ključne promjene koje će se, sukladno zakonodavnom okviru – Zakon o uvođenju eura kao službene valute u Republici Hrvatsko",
    legacySlugs: ["prilagodba-poslovanja-na-novu-eur-valutu-obavijest"],
  },
  {
    slug: "zajmovi-i-krediti-za-obnovu-i-uredenje-zgrada",
    title: "Zajmovi i krediti za obnovu i uređenje zgrada",
    date: "2022-06-23",
    displayDate: "23. lipnja 2022.",
    category: "Financiranje",
    section: "novosti",
    excerpt: "Najpovoljniji zajmovi i krediti poslovnih banaka za obnovu i uređenje zgrada. Kredite je moguće ugovoriti u OTP banci d.d. ili Privrednoj banci Zagreb uz kamatnu stopu Kamata već od 3,70% fiksno za prve 3 godine otplate kredita…",
    bodyHtml: `<p>Najpovoljniji zajmovi i krediti poslovnih banaka za obnovu i uređenje zgrada. Kredite je moguće ugovoriti u OTP banci d.d. ili Privrednoj banci Zagreb uz kamatnu stopu</p>
<blockquote>
<h3>Kamata već od 3,70% fiksno za prve 3 godine otplate kredita</h3>
</blockquote>
<p>Više na <a href="/upravljanje/zajmovi-i-krediti">poveznici</a></p>
<p><a href="https://www.otpbanka.hr/sites/default/files/dokumenti/opci-uvjeti/Opci%20uvjeti%20odobravanja%20kredita%20suvlasnicima%20stambenih%20zgrada_0.pdf" target="_blank" rel="noreferrer">Opći uvjeti odobravanja kredita suvlasnicima stambenih zgrada OTP</a></p>
<p><a href="https://www.pbz.hr/dam/jcr:c3557102-7343-49eb-adc3-a9be7a3f9531/PBZ_Upravitelji_letak100x210mm_%20novi%20Model.pdf" target="_blank" rel="noreferrer">Posebna ponuda za suvlasnike stambenih zgrada PBZ</a></p>`,
    metaDescription: "Najpovoljniji zajmovi i krediti poslovnih banaka za obnovu i uređenje zgrada. Kredite je moguće ugovoriti u OTP banci d.d. ili Privrednoj banci Zagreb uz kamatnu stopu Kamata već o",
    legacySlugs: ["zajmovi-i-krediti-za-obnovu-i-uredenje-zgrada"],
  },
  {
    slug: "javni-poziv-za-energetsku-obnovu-zgrada",
    title: "Javni poziv za energetsku obnovu zgrada",
    date: "2022-04-12",
    displayDate: "12. travnja 2022.",
    category: "Energetska obnova",
    section: "novosti",
    excerpt: "Objavljen je Javni poziv za energetsku obnovu višestambenih zgrada . Na vrijeme saznajte sve potrebne informacije, donesite odluke i izradite dokumentaciju za prijavu!",
    bodyHtml: `<p>Objavljen je <a href="/usluge/energetska-obnova">Javni poziv za energetsku obnovu višestambenih zgrada</a>. Na vrijeme saznajte sve potrebne informacije, donesite odluke i izradite dokumentaciju za prijavu!</p>`,
    metaDescription: "Objavljen je Javni poziv za energetsku obnovu višestambenih zgrada . Na vrijeme saznajte sve potrebne informacije, donesite odluke i izradite dokumentaciju za prijavu!",
    legacySlugs: ["javni-poziv-za-energetsku-obnovu-zgrada"],
  },
  {
    slug: "sklonista",
    title: "Skloništa",
    date: "2022-03-25",
    displayDate: "25. ožujka 2022.",
    category: "Arhiva",
    section: "arhiva",
    excerpt: "Prenosimo preporuku Grada Zagreba o pregledu skloništa i preventivnim aktivnostima za dovođenje u funkciju. Zakonom o izmjenama i dopunama Zakona o unutarnjim poslovima (NN 161/98) bilo je regulirano tko je i iz kojih sredstava…",
    bodyHtml: `<p>Prenosimo preporuku Grada Zagreba o pregledu skloništa i preventivnim aktivnostima za dovođenje u funkciju.</p>
<p><a href="https://narodne-novine.nn.hr/clanci/sluzbeni/1998_12_161_1984.html" target="_blank" rel="noreferrer">Zakonom o izmjenama i dopunama Zakona o unutarnjim poslovima</a> (NN 161/98) bilo je regulirano tko je i iz kojih sredstava bio obvezan održavati skloništa. Donošenjem ovoga propisa <strong>održavanje skloništa</strong> iz nadležnosti MUP-a <strong>prešlo je u nadležnost općina, gradova i Grada Zagreba, odnosno vlasnika.</strong></p>
<p>Od 2015.g. izmjenama <a href="https://narodne-novine.nn.hr/clanci/sluzbeni/2015_07_82_1567.html" target="_blank" rel="noreferrer">Zakona o sustavu civilne zaštite </a> (NN 82/2015) ukinuti su svi pravilnici koji su regulirali upravljanje skloništima, te su prestali važiti:</p>
<ul>
<li>Pravilnik o određivanju gradova i naseljenih mjesta u kojima se moraju graditi skloništa i drugi objekti za zaštitu (»Narodne novine«, br. 2/91.)</li>
<li>Pravilnik o tehničkim normativima za skloništa (»Narodne novine«, br. 53/91.)</li>
<li>Pravilnik o održavanju skloništa i drugih zaštitnih objekata u miru (»Narodne novine«, br. 45/84.)</li>
<li>Pravilnik o uvjetima pod kojima se u miru skloništa mogu davati u zakup (»Narodne novine«, br. 98/01.).</li>
</ul>
<p>Od tada se ujedno više ne provode niti redovni inspekcijski nadzori skloništa kojima je cilj bio upravo adekvatno i redovito održavanje skloništa u ispravnom i uporabljivom stanju. Člankom 96. Zakona o civilnoj zaštiti regulirano je da <em>danom stupanja na snagu ovoga Zakona jedinice lokalne samouprave preuzimaju poslove upravljanja i održavanja javnih skloništa na svojem području.</em></p>
<p>Pod pretpostavkom da skloništa služe za zaštitu i spašavanje ljudi, materijalnih i drugih dobara od opasnosti ratnih razaranja te posljedica civilizacijskih katastrofa, izgrađena su kao samostalne građevine ili kao dio građevinskog objekta, opremljena su te stavljena stanarima i građanstvu na raspolaganje, opće su dobro stanara i građanstva od interesa Republike Hrvatske, povećavaju standard življenja i istima treba posvećivati dužnu pažnju, prema odredbama Zakona o vlasništvu i drugim stvarnim pravima (ZVDSP) skloništem bi trebali <strong>upravljati</strong> suvlasnici zgrade kao zajedničkim dijelom zgrade po općim pravilima o upravljanju suvlasničkom stvari. Suvlasnici bi s obzirom na to trebali biti <em>nositelji prava upravljanja i uporabe skloništa.<br />
</em></p>
<p>Upravitelj zgrade je prema odredbama ZVDSP-a nalogoprimac suvlasnika, stoga kada ne postoji izričita zakonska obveza za poduzimanje određenog posla, iste poslove ovlašten je poduzimati isključivo po izričitom nalogu, odnosno valjanim odlukama suvlasnika.</p>`,
    metaDescription: "Prenosimo preporuku Grada Zagreba o pregledu skloništa i preventivnim aktivnostima za dovođenje u funkciju. Zakonom o izmjenama i dopunama Zakona o unutarnjim poslovima (NN 161/98)",
    legacySlugs: ["sklonista"],
  },
  {
    slug: "potres-u-gradu-zagrebu",
    title: "Obnova od potresa",
    date: "2020-04-21",
    displayDate: "21. travnja 2020.",
    category: "Arhiva",
    section: "arhiva",
    excerpt: "Zakon o obnovi zgrada oštećenih potresom u Zagrebu, Krapinsko-zagorskoj i Zagrebačkoj županiji Zakon o obnovi zgrada oštećenih potresom na području Grada Zagreba, Krapinsko-zagorske županije, Zagrebačke županije,…",
    bodyHtml: `<h3></h3>
<h4>Zakon o obnovi zgrada oštećenih potresom u Zagrebu, Krapinsko-zagorskoj i Zagrebačkoj županiji</h4>
<ul>
<li>Zakon o obnovi zgrada oštećenih potresom na području Grada Zagreba, Krapinsko-zagorske županije, Zagrebačke županije, Sisačko-moslavačke županije i Karlovačke županije (&#8220;Narodne novine&#8221; broj <a href="https://narodne-novine.nn.hr/clanci/sluzbeni/2020_09_102_1915.html" target="_blank" rel="noreferrer">102/20</a>, <a href="https://narodne-novine.nn.hr/clanci/sluzbeni/2021_02_10_191.html" target="_blank" rel="noreferrer">10/21</a>, <a href="https://narodne-novine.nn.hr/clanci/sluzbeni/2021_10_117_2004.html" target="_blank" rel="noreferrer">117/21</a>)</li>
<li>Program mjera obnove zgrada oštećenih potresom na području Grada Zagreba, Krapinsko-zagorske županije, Zagrebačke županije, Sisačko-moslavačke županije i Karlovačke županije (&#8220;Narodne novine&#8221; broj <a href="https://narodne-novine.nn.hr/clanci/sluzbeni/2021_12_137_2259.html" target="_blank" rel="noreferrer">137/21</a>)</li>
</ul>
<p><a href="/usluge/obnova-od-potresa">VIŠE INFORMACIJA&#8230;</a></p>


<h4>Vodič za aktivnosti nakon potresa MGIPU</h4>
<p>Ministarstvo graditeljstva i prostornoga uređenja objavilo je „<a href="/documents/vodic-za-aktivnosti-nakon-potresa-2020.pdf"><strong>Vodič za aktivnosti nakon potresa</strong></a>“ koji donosi pregled svih dosadašnjih aktivnosti Ministarstva vezanih za sanaciju oštećenih zgrada u potresu.</p>
<p>Uz Vodič za građane Ministarstvo je pripremilo i preporuke za primjenu Pravilnika o registru šteta od prirodnih nepogoda za procjenu štete na građevinama. U preporukama je dano stručno mišljenje o načinu izvršenja postupka, propisanim procedurama i odabranoj metodologiji te tko i kako procjenjuje štetu na oštećenoj imovini koja se dogodila u potresu.</p>
<p>Donesene su i izmjene i dopune Tehničkog propisa za građevinske konstrukcije koje su stupile na snagu 2. srpnja 2020. godine. Cilj izmjene i dopune Tehničkog propisa je jasnije definirati postupak popravka i pojačanja konstrukcijskih i/ili nekonstrukcijskih elemenata s razinom obnove koja je primjerena opasnosti područja i potresnom riziku zgrade, a vezano za potresnu oštetljivost zgrade i njezinu namjenu.</p>
<p>Za pomoć građanima Ministarstvo graditeljstva je oformilo poseban tim stručnjaka u Ministarstvu koji se bave isključivo rješavanjem problema vezanih za obnovu od potresa te je otvorena i posebna telefonska linja za građane 01/3782-117 na koju se mogu obratiti svakim radnim danom u vremenu od 9 do 14 sati.</p>
<h3><strong>ARHIVA</strong></h3>
<blockquote>
<h4><a href="https://mgipu.gov.hr/vijesti/upute-za-vlasnike-kuca-i-upravitelje-zgrada-sanacija-dimnjaka/10772?fbclid=IwAR1He-XIKX3hX2Wq6uS1wdVqaqgY3JWzzay2Pjj6Eg2ktt-dFZQkYobxxdw" target="_blank" rel="noreferrer">Uputstva vlasnicima zgrada i upraviteljima za sanaciju dimnjaka</a></h4>
<h4><a href="http://www.plinara-zagreb.hr/novosti/postupak-pustanja-plina-u-objekte-koji-su-iskljuceni-zbog-potresa/1327?fbclid=IwAR1QiS0WeGt1LrXRX9ilMrQM7pj03scikzCD-ghJR6DN8kJ7xN-0fAMCLjM" target="_blank" rel="noreferrer">Postupak puštanja plina u zgrade oštećene potresom</a></h4>
</blockquote>
<h4></h4>
<h4>Postupanje nakon potresa</h4>
<p>Sva oštećenja zgrada potrebno je najprije prijaviti Gradu Zagrebu radi brzog pregleda građevine. Grad Zagreb uveo je besplatnu telefonsku liniju 0800 8802 i 0800 8805 za građane izravno pogođene potresom. Ukoliko nakon potresa sumnjate u ispravnost plinskih instalacija možete se javiti na besplatni broj 0800 400 400. U slučaju poteškoća s opskrbom vodom, građani se mogu javiti na broj 01/6163 999. Građani mogu nazvati broj za Hitne intervencije 01/6585 147.</p>
<p>Kroz besplatne brojeve 0800 8802 i 0800 8805 osigurana je i sva druga potrebna asistencija građanima koji su pretrpjeli potresom uzrokovane štete.</p>
<p><a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.zagreb.hr%2Fbesplatni-telefoni-0800-8802-i-0800-8805-za-gradja%2F156548%3Ffbclid%3DIwAR1MmayyJsX5-QvadLVQskUR92fjIf7hNccnQHEvZxQDyoWJYTrJA8Bt-4c&h=AT3La5H8b3okxMJXexiUBKDvkBYm9ZCgVnWwe-LX8xV5q4LkxMDqL9plwq5I1UUTcKt-zx38fdcmSG3uWAGPdZcZh04cjVoHmno4XQwJK-CM6od-xkKkUlD1xqnaZtaIFoMN_chm8ReeXPaqwKPyp-AgAo9P0IkkC9ZWiFgJdAKD3H-LG5WW6hLo2e-7Lct0Jn-_mcpFBPql0ty73HZlkgbIjMHhu5O9bNCH4lBx8SKwhekXkZ1ZhZ9h6B73sW6gUdqWdb62n1HTYAj0KuqKy0Kx6quw-8KpJzKtFh4YNhxNBKjlmYZTO94ExikT1bfsumUYvaGnm35MgGxiHl2BY1zJratjJegQAyb_dP0pzx2SAzMFCQqbIJTN2JBaqZOQt4JahSrSAazhVYFECetGjhypeeMDf1l9OxzQ1LG1eXN-tNWjarcS92E29AHcvLcSc3Trp_s2DxozDnRKH-YBGlWU78EdUqcBhBHsuLCtawep42xa9_-I5BSxqrF4OPxzBauMw6iN9L5Tc0PEOC3Ibev5i4neq7AAUFbOmFIhnmALe0Z_wFLVR8dEeaJKQ-o93i-utolCF9f4i-Mn_0kxD8XxGFGGc4MtYKyCL36YWay9H6Oc2mWk-Ptp07_PHjUhegpKGQ" target="_blank" rel="noreferrer">https://www.zagreb.hr/besplatni-telefoni-0800-8802-i…/156548</a></p>
<h4>Prijava za pregled građevina nakon potresa</h4>
<p>Ured za upravljanje u hitnim situacijama Grada Zagreba izradio je aplikaciju „Prijava za pregled građevina nakon potresa“. Molimo građane da na poveznici <a href="https://arcg.is/1vafny0?fbclid=IwAR3xxnbALVXGCdaHxEGy_MMk3iyVafAzc-QZf5orlsxPj4G3O5fiU3IgrNI" target="_blank" rel="noreferrer">https://arcg.is/1vafny0</a> popune aplikaciju. Na ovaj način ćete pomoći i ubrzati procjenu štete.</p>
<p><a href="https://www.zagreb.hr/en/prijava-za-pregled-gradjevina-nakon-potresa/156550?fbclid=IwAR0rcI-DJGWJag--HCZYMf-mina_IRcJyt29cZGtxRvPVh-jRm8hipef49w" target="_blank" rel="noreferrer">Prijava za pregled građevina nakon potresa</a></p>
<h4>Prijava šteta na objektima po objavljenom javnom pozivu Grada Zagreba</h4>
<p>Gradonačelnik Grada Zagreba je 23. ožujka 2020. proglasio prirodnu nepogodu uzrokovanu potresom na području grada Zagreba.<br />
Detaljnije upute vezane za proceduru prijave šteta objavljene su na web-stranici Grada Zagreba.</p>
<p>Kratke upute o postupanju vezano za prijavu štete</p>
<p><strong>Svi oštećenici, fizičke i pravne osobe na čijoj je imovini utvrđena šteta mogu prijaviti štetu na imovinu.</strong></p>
<p><strong>Rok prijave je do proglašenja kraja pandemije.</strong><br class="" /><br class="" /><strong>Sve potrebne informacije oko popunjavanja obrazaca mogu se dobiti na besplatni broj telefona 0800 88 03 </strong>i na putem meila<strong>: </strong><a href="mailto:prijavastetepotres@zagreb.hr"><strong>prijavastetepotres@zagreb.hr</strong></a><br class="" /><strong>Uputu za popunjavanje</strong> <strong>Obrasca</strong> objavljene su i na <a href="http://www.zagreb.hr/" target="_blank" rel="noreferrer">www.zagreb.hr</a> na linku potres, a isti će se moći preuzeti u pisarnici.<br class="" /> <br class="" /><strong>Tko ispunjava obrazac</strong></p>
<p><strong>Predstavnici suvlasnika</strong> <strong>u stambenim zgradama</strong> podnose prijavu za zajedničke prostorije ( šupe, kotlovnice, lift, krovište, stubište, dimnjaci, fasade i ostalo što spada u zajedničke prostorije). Ukoliko zgrada <strong>nema predstavnika suvlasnika prijavu podnosi prinudni upravitelj zgrade</strong> na temelju dostavljenih podataka od suvlasnika.</p>
<p>Zaključak o proglašenju prirodne nepogode ➡️ <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.zagreb.hr%2Fzakljucak-o-proglasenju-prirodne-nepogode%2F156586%3Ffbclid%3DIwAR1hpkR9-RTkPanTLsRESRDrMlnt1IM1QnfCjHcAfbwLi5PwExdzw2IHxtQ&h=AT1foHARzFuQLjmQ12PEKsi09hbSXfRMAPspHGtbFscPLGhxTYopgRkf26Kat8Gf32J2c7ZQfgX6Ef9y4ezmrp-_Nzf9fIL_n6quGd6e4eHrT-e_BaXdGi80z1uHRwshQ7ZKlcF0WaofY6Z2CaWumPMqwKEy3EazV3cus0M0ZNH-FDHOyaEFa_NODTHyd6UklxOaSUcZY8XxbMicq-ZMITzLLGISaqWMI2rado4QpO9s10dOxhhb_70jF_q_mJAvTDJkbpHmsdCQAf9q92Qe4hOnz_uTfFnBqmI0rAOKGmkBzpNf_cYvosR_ksmH0OzwarSueLO0KiXKtw_wgBXIbFL8eobF-mS4XXg06qMh-jAZzTOq_MhDj6ibe16LflqJ4iaugCDkYP-ZFwPdNE3yjVTd5huJrsSuuBlP7k-8lQ0gTgJiWcoqnMe_i0dikoIuRdhxgoaA7kIx3uCoM9Sq1y13tR2JI16qx2ZRKAD_rCUkA8hf36azOkS6OLhH92Lv_5Gm_vvLRo1ySpIUT1EjyoWHyoJyWsj_q0zqkAI3RAnlKES37qnvbl0kMgj6WDipsrcL1840byjtMzHh2wXm_7yjyRIMP5pnlkCTMo18ag0SbMpA8t_kQrg-XuzqrKYc4xSjX8omnw6GKfa5h9QGb3Pe2ppb3p3I383qKJTHGCFggKAG79HNrdon43rTRzEPFu4vEDOVMRVSjueEiEqj-pDJnL7AZD8-bmKTQQOeUP7sOG_HN_BlDSCC5kXgbtdKatV681_PP85sYI8G7JDH7_JP6J23_45oCOfoyFMim0bFcTFPE5uXdxhbuFjKuZYoCbOmOfIRV4jCXl_yijWyz7aB_hE" target="_blank" rel="noreferrer">https://www.zagreb.hr/zakljucak-o-proglasenju-prirod…/156586</a><br />
Javni poziv za prijavu štete na imovini ➡️ <a href="https://www.zagreb.hr/javni-poziv-za-prijavu-stete-na-imovini/156593?fbclid=IwAR3yK5yfvEay0nuzx8HeOwU0Wsnynt8Zd2pPoGEQ10IfgR7bw9RZ9rRkgvI" target="_blank" rel="noreferrer">https://www.zagreb.hr/javni-poziv-za-prijavu-stete-n…/156593</a><br />
Obrazac za prijavu štete ➡️ <a href="https://survey123.arcgis.com/share/7bdaffd5c9a94e71afc59ce1e26ff78a?fbclid=IwAR2gs_P2Bf4nQuV-63jtCE7QQwP9oTWkNRehKXb3XVFnq46RK003brndMao" target="_blank" rel="noreferrer">https://survey123.arcgis.com/…/7bdaffd5c9a94e71afc59ce1e26f…</a></p>
<p>Više na <a href="https://www.zagreb.hr/potres-u-zagrebu-2232019/156584?fbclid=IwAR25SL7FsoUz3S9xH3bjh51Y9RmO3Ct7ZnJHOqBNM7fBXgfWgtIjbAa_OOY" target="_blank" rel="noreferrer">https://www.zagreb.hr/potres-u-zagrebu-2232019/156584</a></p>`,
    documents: [
      { label: "Vodič za aktivnosti nakon potresa", href: "/documents/vodic-za-aktivnosti-nakon-potresa-2020.pdf" },
    ],
    metaDescription: "Zakon o obnovi zgrada oštećenih potresom u Zagrebu, Krapinsko-zagorskoj i Zagrebačkoj županiji Zakon o obnovi zgrada oštećenih potresom na području Grada Zagreba, Krapinsko-zagorsk",
    legacySlugs: ["potres-u-gradu-zagrebu"],
  },
  {
    slug: "vazna-obavijest",
    title: "COVID-19 Preporuke suvlasnicima zgrada",
    date: "2020-03-18",
    displayDate: "18. ožujka 2020.",
    category: "Arhiva",
    section: "arhiva",
    excerpt: "OBAVIJEST Primanje stranaka Zbog epidemioloških mjera, stranke primamo samo uz prethodnu najavu. U skladu s aktualnom epidemiološkom situacijom, kontrolirano održavamo sastanke i primamo stranke pridržavajući se sljedećih…",
    bodyHtml: `<h3>OBAVIJEST Primanje stranaka</h3>
<h2>Zbog epidemioloških mjera, stranke primamo samo uz prethodnu najavu.</h2>
<p>U skladu s aktualnom epidemiološkom situacijom, kontrolirano održavamo sastanke i primamo stranke pridržavajući se sljedećih preporuka:</p>
<ul>
<li>
<blockquote><p>
<strong>ulazak u prostorije ureda moguć je isključivo uz prethodnu najavu</strong> -&gt; točno vrijeme, uz točan dogovor s kojom osobom i koji je razlog sastanka
</p></blockquote>
</li>
<li>
<blockquote><p>
<strong>ulazak mora biti kontroliran</strong> -&gt; po jedna stranka u isto vrijeme
</p></blockquote>
</li>
<li>
<blockquote><p>
<strong>uz održavanje razmaka</strong> -&gt; od min. 2 m, odnosno sjedenje na razmaku od min. 2 m
</p></blockquote>
</li>
<li>
<blockquote><p>
<strong>uz opravdan razlog</strong> -&gt; da se radi o stvarnoj potrebi za dolazak ukoliko se nešto ne može riješiti putem e-maila i/ili telefona (pogotovo se to odnosi na donošenje pismena koja se mogu poslati e-mailom, poštom ili ostaviti u sandučiću kao i do sad)
</p></blockquote>
</li>
<li>
<blockquote><p>
<strong>uz obavezno nošenje zaštitne maske</strong>
</p></blockquote>
</li>
</ul>
<p>I dalje je preporuka:</p>
<ul>
<li>
<blockquote><p>
ići na teren i sastanke održavati na zgradama, na otvorenom, a u uredu samo pod prethodno navedenim uvjetima i uz obvezno nošenje zaštitne maske
</p></blockquote>
</li>
<li>
<blockquote><p>
ukoliko se nešto treba preuzeti osobno, preuzimati na vratima bez nepotrebnih ulazaka osoba
</p></blockquote>
</li>
</ul>
<p>Odgovorno poduzimamo sve potrebe mjere u skladu s preporukama nadležnih svjetskih i nacionalnih tijela te pratimo sve izdane smjernice prevencije i epidemiološke situacije COVID-19 virusa.</p>
<p>Zahvaljujemo na razumijevanju!</p>
<blockquote><p>
<a href="https://www.hzjz.hr/wp-content/uploads/2020/03/Upute-stambene-zgrade-25-11-2020.pdf" target="_blank" rel="noreferrer"><strong>Preporuke za stambene zgrade s više stambenih jedinica tijekom epidemije koronavirusa</strong></a>
</p></blockquote>
<blockquote><p>
<a href="/documents/dezinfekcija-mjere-zastite.pdf"><strong>Tko i kada provodi dezinfekciju kao mjeru zaštite pučanstva od zaraznih bolesti</strong></a>
</p></blockquote>
<blockquote><p>
<a href="https://www.hzjz.hr/wp-content/uploads/2020/03/Upute-za-predstavnike-stanara1.pdf" target="_blank" rel="noreferrer"><strong>Upute HZJZ za predstavnike suvlasnika &#8211; dezinfekcija zgrada</strong></a>
</p></blockquote>
<blockquote><p>
<a href="https://www.hgk.hr/documents/upute-za-siguran-nacin-obilaska-starijih-osoba5e7226efc7336.pdf?fbclid=IwAR3eQV5xDV1W5GVBn24V6Ko2nCGU2p44gzNExF1kRLr9pl2yUW4QBeDVPT4" target="_blank" rel="noreferrer"><strong>Upute za siguran način obilaska starijih i nemoćnih osoba</strong></a>
</p></blockquote>`,
    metaDescription: "OBAVIJEST Primanje stranaka Zbog epidemioloških mjera, stranke primamo samo uz prethodnu najavu. U skladu s aktualnom epidemiološkom situacijom, kontrolirano održavamo sastanke i p",
    legacySlugs: ["vazna-obavijest"],
  },
  {
    slug: "dani-otvorenih-vrata",
    title: "Dani otvorenih vrata",
    date: "2015-07-30",
    displayDate: "30. srpnja 2015.",
    category: "Arhiva",
    section: "arhiva",
    excerpt: "Održani prvi „DANI OTVORENIH VRATA UPRAVITELJA ZGRADA HRVATSKOG POSLOVNOG CENTRA – STAMBENO POSLOVNOG GOSPODARSTVA d.o.o.“ Od petka 16. do nedjelje 18. studenoga 2012.g., u poslovnici upravitelja HPC-SPG d.o.o. u Vlaškoj 125,…",
    bodyHtml: `Održani prvi „DANI OTVORENIH VRATA UPRAVITELJA ZGRADA HRVATSKOG POSLOVNOG CENTRA – STAMBENO POSLOVNOG GOSPODARSTVA d.o.o.“<p>Od petka 16. do nedjelje 18. studenoga 2012.g., u poslovnici upravitelja HPC-SPG d.o.o. u Vlaškoj 125, Zagreb održani su prvi “Dani otvorenih vrata upravitelja Hrvatski poslovni centar – stambeno poslovno gospodarstvo”.</p>
<p>Po prvi put suvlasnici zgrada imali su priliku saznati sve podatke o upravljanju i održavanju njihove zgrade na jednom mjestu jer su u akciji, uz upravitelja zgrada, sudjelovali i njihov glavni partner i suradnik Uniqa osiguranje d.d., te dva odvjetnička tima.</p>
<p>Temeljni razlog organiziranja „Dana otvorenih vrata upravitelja zgrada HPC-SPG d.o.o.“ bio je prvenstveno svim korisnicima – suvlasnicima zgrada približili tu materiju i u izravnom kontaktu sa zainteresiranim suvlasnicima odgovoriti na njihova pitanja, razriješiti im probleme i nejasnoće s kojima se susreću u upravljanju i održavanju njihovih zgrada, budući da i nakon 16 godina od uvođenja sustava upravljanja i održavanja višestambenih (i poslovnih) zgrada sukladno odredbama Zakona o vlasništvu i drugim stvarnim pravima, još uvijek postoji nerazumijevanje, nesnalaženje, kao i neznanje kod suvlasnika zgrada o važnosti i potrebi održavanja i upravljanja zgradama u interesu samih korisnika – suvlasnika zgrada. Zakonom propisane odredbe o toj problematici nisu u potpunosti zaživjele i s razumijevanjem prihvaćene od samih suvlasnika višestambenih zgrada.Posjetiteljima je besplatno podijeljeno oko pet stotina „poklon paketa“ koji je između ostalog sadržavao i besplatni primjerak „Vodiča za suvlasnike zgrada – Priručnik o stanovanju“ – prvu knjigu u nas namijenjenu upravo suvlasnicima višestambenih zgrada kojom je obrađeno cjelokupno područje upravljanja i održavanja zgrada.</p>
<p>Otvorenju prvih „Dana otvorenih vrata upravitelja zgrada HPC-SPG d.o.o.“ u petak 16. studenog 2012.g. u 16,00 sati u poslovnici upravitelja HPC-SPG d.o.o. u Vlaškoj 125, Zagreb u prizemlju nazočilo je nešto manje posjetitelja s obzirom na događanja toga dana – oslobođenje generala, no uslijedilo je i više telefonskih poziva kojima su se suvlasnici informirali je li moguće doći i slijedećih dana. „Dane otvorenih vrata upravitelja HPC-SPG d.o.o.“ otovorio je gospodin Rudolf Rom iz Hrvatske gospodarske komore. Upravo iz toga razloga upravitelj zgrada ostavlja svoja vrata i dalje „odškrinuta“ kako bi veliki broj zainteresiranih posjetitelja koji nisu bili u prilici i mogućnosti doći za vrijeme održavanja ove hvalevrijedne akcije, dobio svoj poklon paket.</p>


<p>Suvlasnici će i dalje moći doći po svoj poklon paket na adresi HPC-SPG d.o.o u Vlaškoj 125 u  poslovnici na 1. katu radnim danom od 8 do 16 sati.</p>
<p>Posljednjeg dana manifestacije, izvučeni su i dobitnici nagradne igre Uniqa osiguranja d.d. u kojoj je glavna nagrada bila jednogodišnje osiguranje kućanstva, a mogli su sudjelovati svi zainteresirani posjetitelji.</p>
<p>Prvi dani otvorenih vrata upravitelja HPC-SPG d.o.o. velikim interesom suvlasnika pokazali su se opravdanima budući da su suvlasnici imali niz nerazriješenih dilema i pitanja vezanih za to područje, ponajviše za vrlo aktualno etažiranje i upis u zemljišnje knjige, naplatu pričuve od dužnika, smjenu predstavnika i upravitelja, međuljudske odnose, primjereno i dopunsko osiguranje zgrade i posebnih dijelova… Upravo zbog toga velikog interesa, upravitelj zgrada Hrvatski poslovni centar – stambeno poslovno gospodarstvo i dalje će provoditi akciju budući da je prema očekivanjima pobudila veliki interes suvlasnika.</p>
<p>Suvlasnici će i dalje moći doći po svoj poklon paket na adresi HPC-SPG d.o.o u Vlaškoj 125 u  poslovnici na 1. katu radnim danom od 8 do 16 sati.</p>
<p>Posljednjeg dana manifestacije, izvučeni su i dobitnici nagradne igre Uniqa osiguranja d.d. u kojoj je glavna nagrada bila jednogodišnje osiguranje kućanstva, a mogli su sudjelovati svi zainteresirani posjetitelji.</p>
<p>Prvi dani otvorenih vrata upravitelja HPC-SPG d.o.o. velikim interesom suvlasnika pokazali su se opravdanima budući da su suvlasnici imali niz nerazriješenih dilema i pitanja vezanih za to područje, ponajviše za vrlo aktualno etažiranje i upis u zemljišnje knjige, naplatu pričuve od dužnika, smjenu predstavnika i upravitelja, međuljudske odnose, primjereno i dopunsko osiguranje zgrade i posebnih dijelova… Upravo zbog toga velikog interesa, upravitelj zgrada Hrvatski poslovni centar – stambeno poslovno gospodarstvo i dalje će provoditi akciju budući da je prema očekivanjima pobudila veliki interes suvlasnika.</p>`,
    metaDescription: "Održani prvi „DANI OTVORENIH VRATA UPRAVITELJA ZGRADA HRVATSKOG POSLOVNOG CENTRA – STAMBENO POSLOVNOG GOSPODARSTVA d.o.o.“ Od petka 16. do nedjelje 18. studenoga 2012.g., u poslovn",
    legacySlugs: ["dani-otvorenih-vrata"],
  },
  {
    slug: "seminari",
    title: "Seminari",
    date: "2015-07-30",
    displayDate: "30. srpnja 2015.",
    category: "Arhiva",
    section: "arhiva",
    excerpt: "“Upravljanje i održavanje stambenih zgrada” Trakošćan, 22.-24. listopada 1998.g. Na prvom održanom seminaru takve vrste u Republici Hrvatskoj kojim smo pokušali upraviteljima zgrada i suvlasnicima približiti ovu problematiku i…",
    bodyHtml: `<p><strong>“Upravljanje i održavanje stambenih zgrada”</strong></p>
<p>Trakošćan, 22.-24. listopada 1998.g.</p>
<p>Na prvom održanom seminaru takve vrste u Republici Hrvatskoj kojim smo pokušali upraviteljima zgrada i suvlasnicima približiti ovu problematiku i educirati ih o svim aspektima upravljanja, obrađene su sljedeće teme: Definiranje suvlasničkih dijelova u stambenoj zgradi – posebni, sporedni i zajednički dijelovi stambene zgrade, te zajednički dijelovi dviju i više zgrada, Godišnji program održavanja i upravljanja stambenom zgradom, Određivanje vlasništva na određenim posebnim i zajedničkim dijelovima zgrade, Provedba vlasništva posebnog dijela i suvlasništva nad zajedničkim dijelovima zgrade, Kućni red, Primjena propisa i mjere zaštite od požara u stambenim i poslovnim zgradama, Stanje zaštite od požara i održavanje vatrogasnih aparata i dr.</p>

<p><strong>“Upravljanje i održavanje stambenih zgrada II”</strong></p>
<p>Trakošćan, 26. i 27. listopada 2000.g.</p>
<p>Na drugom po redu seminaru organiziranom prvenstveno za upravitelje zgrada, te predstavnike suvlasnika obrađene su teme: Osobitosti upravljanja zgradama u primjeni Zakona o vlasništvu i drugim stvarnim pravima s osvrtom na prinudnu upravu i pravni položaj skloništa, Prava i obveze građevinske inspekcije u poduzimanju mjera na uklanjanju nedostataka na zgradi, Upravljanje i održavanje stambeno-poslovnih zgrada u gradu Rijeci, Održavanje i tehnička kontrola dizala, Kućni dimnjaci, Distribuiranje financijskih informacija – izvješća suvlasnicima zgrada putem interneta i automatiziranih servisa, Izvanredni poslovi – dozvole i suglasnosti za njihovo obavljanje, Obvezna pričuva, Pretvorba društvenog vlasništva i dr.</p>

<p>“<strong>Održavanje, obnova i namjena građevina u zaštićenim povijesnim cjelinama”</strong></p>
<p>Opatija, 15. i 16. svibnja 2003.g.</p>
<p>Seminar je organiziran u suradnji s Ministarstvom kulture RH, Ministarstvom zaštite okoliša i prostornog uređenja RH, Hrvatskom udrugom upravitelja zgrada, te Gradskim zavodom za zaštitu spomenika kulture i prirode Grada Zagreba.</p>
<p>Obrađene su teme zaštite i očuvanja graditeljske baštine – pravni i ekonomski aspekti, zaštita, raznovrsnost u posjedovanju i očuvanju graditeljskog nasljeđa, održavanje i rekonstrukcija građevina graditeljske baštine, stvarna prava na kulturnim dobrima, provođenje mjera zaštite i očuvanja građevina graditeljske baštine putem upravitelja nekretnina i dr.</p>
<h2>Svi suvlasnici novougovorenih zgrada besplatno, na poklon dobivaju primjerak</h2><h4>prve knjige o upravljanju i održavanju zgrada i kulturi stanovanja koja sadrži sve najvažnije informacije o stanovanju u višestambenim zgradama</h4><p><strong>POSEBNA PROMOTIVNA AKCIJA!</strong></p>
<a href="/novosti/vodic-za-suvlasnike-zgrada"><em></em> Naruči priručnik</a>

<p><strong>“Spomenička renta i očuvanje kulturne baštine”</strong></p>
<p>Stubičke Toplice, 23. i 24. listopada 2003.g.</p>
<p>Seminar je održan u suradnji s Ministarstvom kulture RH, uz suradnju stručnjaka Porezne uprave Ministarstva financija i Ministarstva pravosuđa, uprave i lokalne samouprave.</p>
<p>Cijeneći potrebu da se na dosljedan i stručan način novodonešene zakonske odredbe provedu u praksi uz puno uvažavanje lokalnih potreba i mogućnosti, prikazane su mogućnosti i način provedbe članka 112. do 114b. Zakona o zaštiti i očuvanju kulturnih dobara.</p>

<p><strong>“Upravljanje i održavanje stambenih zgrada V – sudska praksa 9 godina poslije”</strong></p>
<p>Tuheljske toplice „Terme Tuhelj“,  20. i 21. listopada 2005.g.</p>
<p>Seminar je održan uz potporu Ministarstva pravosuđa i Ministarstva kulture Republike Hrvatske.</p>
<p>Sudska praksa u provođenju i primjeni Zakona o vlasništvu i drugim stvarnim pravima od velikog je interesa i koristi kako za upravitelje zgrada, suvlasnike i njihove predstavnike, odvjetnike, pravnike, djelatnike lokalne uprave i samouprave, tako i za djelatnike pravosuđa, u razmjeni iskustava i usklađivanju svojih stajališta u sudskoj praksi.</p>

<p><strong>“Vodiča za suvlasnike zgrada – Priručnik o stanovanju”</strong></p>
<p>Sadržajno smo obuhvatili najvažnije obavijesti o upravljanju i održavanju zgrada, posebnosti zaštite, obnove, očuvanja i održavanja graditeljstke baštine; djelatnosti najvažnijih komunalnih tvrtki i javnih poduzeća (Vodoopskrba i odvodnja, HEP-Toplinarstvo i HEP Distribucija DP Elektra Zagreb); o sudskoj praksi – izvanparnični postupci (ovrha radi naplate pričuve), upisu u zemljišne knjige; praktični prilozi – izvodi iz zakona, uredbi, odluka i pravilnika, te oglasni dio u kojem smo predstavili proizvode i usluge tvrtki, obrtnika i drugih poslovnih subjekata čija je djelatnost namijenjena čovjeku – obitelji – vlasniku stana i stambeno-poslovnoj zgradi.</p>`,
    metaDescription: "“Upravljanje i održavanje stambenih zgrada” Trakošćan, 22.-24. listopada 1998.g. Na prvom održanom seminaru takve vrste u Republici Hrvatskoj kojim smo pokušali upraviteljima zgrad",
    legacySlugs: ["seminari"],
  },
  {
    slug: "vodic-za-suvlasnike-zgrada",
    title: "Vodič za suvlasnike zgrada",
    date: "2015-07-30",
    displayDate: "30. srpnja 2015.",
    category: "Arhiva",
    section: "arhiva",
    excerpt: "Upravljanje, održavanje i kultura stanovanja Knjiga koja je pred Vama pripremljena je i tiskana po prvi put u nas. Potreba za izdavanjem Vodiča za suvlasnike zgrada, rezultat je dugogodišnjeg iskustva u upravljanju i održavanju…",
    bodyHtml: `<h2>Upravljanje, održavanje i kultura stanovanja</h2>
<p>Knjiga koja je pred Vama pripremljena je i tiskana po prvi put u nas. Potreba za izdavanjem Vodiča za suvlasnike zgrada, rezultat je dugogodišnjeg iskustva u upravljanju i održavanju zgrada, ali i organiziranju seminara – savjetovanja iz područja koja reguliraju tu problematiku. Novi sustav upravljanja i održavanja zgrada uveden je Zakonom o vlasništvu i drugim stvarnim pravima, a primjenjuje se od 1. siječnja 1997. godine, gotovo 8 godina. Zakonom je određeno PRAVO I DUŽNOST suvlasnika nekretnine da sudjeluju u njenom upravljanju, a sva sredstva koja u tu svrhu izdvoje, koriste se za uređivanje i održavanje SVOJE ZGRADE. Od početka primjene Zakona, više ne postoji sustav solidarnosti u održavanju stambenih zgrada. Tijekom tog razdoblja došli smo do saznanja o velikom nesnalaženju, neinformiranosti, neznanju i pomanjkanju razine svijesti suvlasnika o tome što upravljanje i održavanje zgrada u njihovu vlasništvu uopće podrazumijeva. Cilj Vodiča je, uz edukaciju, i otklanjanje konfliktnih situacija i nepotrebnih komunikacija između suvlasnika i upravitelja zgrada, izvođača radova, komunalnih tvrtki, državnih institucija, kao i poticanje dobrih susjedskih odnosa u zgradi i širem susjedstvu</p>
Urediništvo<ul>
<li>mr.sc. Jadran Antolović, državni tajnik Ministarstva kulture RH</li>
<li>Jadranko Husarić, dipl.ing.građ., pomoćnik direktora Vodoopskrbe i odvodnje d.o.o., Zagreb</li>
<li>Zlatimir Kaštelanac, dipl.ing.stroj., načelnik Inspektorata unutarnjih poslova, MUP RH</li>
<li>Davor Mrduljaš, dipl.iur., državni tajnik Ministarstva zaštite okoliša, prostornog uređenja i graditeljstva RH</li>
<li>IZVRŠNA UREDNICA: Petra Hrčić Palatinuš, izvršna direktorica HPC-SPG d.o.o.</li>
<li>GLAVNI I ODGOVORNI UREDNIK: Ivica Palatinuš, direktor HPC-SPG d.o.o.</li>
</ul>
Suradnici – autori priloga u Vodiču:<ul>
<li>Gordana Carević, dipl.iur., Ministarstvo kulture RH, Uprava za normativne i upravno-pravne poslove,</li>
<li>Željko Fugger, dipl.ing., predsjednik Hrvatske udruge upravitelja zgrada,</li>
<li>Slavica Garac, dipl.iur., predsjednica Izvanparničnog odjela Općinskog suda u Zagrebu,</li>
<li>Neven Holjević, dipl.ing., nadzornik za unutarnje poslove Inspekcije za zaštitu od požara i vatrogastvo MUP RH</li>
<li>Petra Hrčić Palatinuš, izvršna direktorica HPC-SPG d.o.o.</li>
<li>Jadranko Husarić, dipl.ing.građ., pomoćnik direktora Vodoopskrbe i odvodnje d.o.o., Zagreb</li>
<li>Željko Jakobović, ing.</li>
<li>dr.sc. Fedor Kritovac</li>
<li>Anton Kržan, dipl.ing., predsjednik Tehničkog odbora Državnog zavoda za normizaciju i mjeriteljstvo DZNM/TO 178 Dizala, pokretne stube i pokretne trake za osobe</li>
<li>Berislav Maršanić</li>
<li>Ljerka Morović Pavić, dipl.iur., savjetnica na Upravnom sudu RH</li>
<li>Davor Mrduljaš, dipl.iur., državni tajnik Ministarstva zaštite okoliša, prostornog uređenja i graditeljstva RH</li>
<li>Ivica Palatinuš, direktor HPC-SPG d.o.o.</li>
<li>Boris Pavlić, dipl.iur., direktor Pogona posebne toplane, HEP Toplinarstvo d.o.o.</li>
<li>Irena Radeka, dipl.ing., HEP Distribucija d.o.o.</li>
<li>Nives Radišić, dipl.iur., sutkinja Općinskog suda u Zagrebu</li>
<li>Vladimir Shek, prof., HEP Distribucija d.o.o.</li>
<li>Petar Stracenski, prof.dipl.ing.građ., direktor “VJEŠTAK” d.o.o.</li>
</ul>
<p>Fotografija na naslovnoj stranici: Domagoj Palatinuš</p>
<p>Kompjutorska priprema: Krešimir Bauer Sokol</p>
<p>Tisak: Frigelj offset</p>
<p>Zagreb,2004.</p>
Sadržaj<p>1. PREDGOVOR</p>
<p>2. Ljerka Morović Pavić:</p>
<ul>
<li>Uvod</li>
<li>Kratki podsjetnik za suvlasnike zgrada</li>
<li>Neka pitanja o upravljanju stambenom zgradom</li>
</ul>
<p>3. Ivica Palatinuš: Godišnji program upravljanja i održavanja zgrada</p>
<p>4. Davor Mrduljaš: Upravljanje i održavanje zgrada i propisi o gradnji</p>
<p>5. Berislav Maršanić: Sanacija ravnog i blagog kosog krova nadogradnjom stambene etaže</p>
<p>6. Petra Hrčić Palatinuš: Program obnove pročelja zgrada</p>
<p>7. Anton Kržan: Održavanje i tehnička kontrola dizala</p>
<p>8. Fedor Kritovac:</p>
<p>a) Uporabnost zgrade i čestice</p>
<p>b) Zadaće i funkcije kućnog i komunalnog reda</p>
<p>c) Poticanje i ostvarivanje dobrosusjedskih odnosa</p>
<p>9. Neven Holjević: Protupožarni sustavi i instalacije</p>
<p>10. Željko Jakobović:</p>
<p>a) Koncesije u dimnjačarskoj službi</p>
<p>b) Kontrola plinskih ložišta u stanovima</p>
<p>c) Nalaz o dimovodnom uređaju</p>
<p>11. Željko Fugger: Ugljični monoksid – podmukli ubojica</p>
<p>12. Tekst iz publikacije: Zaštita od požara</p>
<p>13. Gordana Carević: Prava i obveze vlasnika kulturnog dobra</p>
<p>14. Slavica Garac: Izvanparnični postupci</p>
<p>15. Nives Radišić: Vlasništvo posebnog dijela nekretnine – upis u zemljišne knjige</p>
<p>16. Petar Stracenski: Osnovni podaci o etažiranju</p>
<p>17. Uniqa osiguranje: Osiguranje zgrada</p>
<p>18. HEP Toplinarstvo d.o.o.</p>
<p>19. HEP Distribucija d.o.o., DP Elektra Zagreb</p>
<p>20. Vodoopskrba i odvodnja d.o.o., Zagreb</p>
Propisi i oglasi<ul>
<li>Izvod iz Zakona o vlasništvu i drugim stvarnim pravima,</li>
<li>Izvod iz Zakona o obveznim odnosima – Pravila o nalogu,</li>
<li>Uredba o održavanju zgrada,</li>
<li>Izvod iz Zakona o gradnji,</li>
<li>Pravilnik o određivanju zahvata u prostoru za koje se ne izdaje lokacijska dozvola,</li>
<li>Izvod iz Zakona o zaštiti od požara,</li>
<li>Pravilnik o programu i načinu osposobljavanja pučanstva za provedbu preventivnih mjera zaštite od požara, gašenje požara i spašavanje ljudi i imovine ugroženih požarom,</li>
<li>Odluka o dimnjačarskoj službi,</li>
<li>Odluka o izmjenama i dopunama odluke o dimnjačarskoj službi,</li>
<li>Pravilnik o uvjetima za fizičke i pravne osobe radi dobivanja dopuštenja za obavljanje poslova na zaštiti i očuvanju kulturnih dobara,</li>
<li>Odluka o odvodnji otpadnih voda,</li>
<li>Odluka o izmjeni odluke o odvodnji otpadnih voda,</li>
<li>Odluka o priključivanju na komunalnu infrastrukturu,</li>
<li>Odluka o izmjeni i dopuni Odluke o priključivanju na komunalnu infrastrukturu,</li>
<li>Odluka o izmjenama i dopunama Odluke o priključivanju na komunalnu infrastrukturu,</li>
<li>Odluka o načinu obračuna i plaćanja komunalne usluge opskrbe vodom i odvodnje i pročišćivanja otpadnih voda.</li>
</ul>`,
    metaDescription: "Upravljanje, održavanje i kultura stanovanja Knjiga koja je pred Vama pripremljena je i tiskana po prvi put u nas. Potreba za izdavanjem Vodiča za suvlasnike zgrada, rezultat je du",
    legacySlugs: ["vodic-za-suvlasnike-zgrada"],
  },
];

export function findNewsBySlug(slug: string): NewsPost | undefined {
  return (
    news.find((n) => n.slug === slug) ??
    news.find((n) => n.legacySlugs?.includes(slug))
  );
}

export const currentNews = news.filter((n) => n.section === "novosti");
export const archiveNews = news.filter((n) => n.section === "arhiva");
