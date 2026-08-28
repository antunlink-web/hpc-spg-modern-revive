export type CmsPageFieldType =
  | "text"
  | "textarea"
  | "lines";

export type CmsPageField = {
  key: string;
  label: string;
  type: CmsPageFieldType;
  description?: string;
};

export type CmsPageDefinition = {
  key: string;
  label: string;
  publicPath: string;
  fields: CmsPageField[];
  defaults: Record<string, string>;
};

export const cmsPageDefinitions: CmsPageDefinition[] = [
  {
    key: "pocetna",
    label: "Početna",
    publicPath: "/",
    fields: [
      {
        key: "heroEyebrow",
        label: "Hero - nadnaslov",
        type: "text",
      },
      {
        key: "heroTitle1",
        label: "Hero - prvi red naslova",
        type: "text",
      },
      {
        key: "heroTitle2",
        label: "Hero - drugi red naslova",
        type: "text",
      },
      {
        key: "heroLead",
        label: "Hero - uvodni tekst",
        type: "textarea",
      },
      {
        key: "aboutTitle",
        label: "O nama - naslov",
        type: "text",
      },
      {
        key: "aboutText1",
        label: "O nama - prvi odlomak",
        type: "textarea",
      },
      {
        key: "aboutText2",
        label: "O nama - drugi odlomak",
        type: "textarea",
      },
      {
        key: "whyTitle",
        label: "Zašto HPC-SPG - naslov",
        type: "text",
      },
      {
        key: "whyText",
        label: "Zašto HPC-SPG - uvodni tekst",
        type: "textarea",
      },
      {
        key: "whyBullets",
        label: "Zašto HPC-SPG - glavne prednosti",
        type: "lines",
        description:
          "Svaku stavku unesite u novi red.",
      },
      {
        key: "servicesTitle",
        label: "Naše usluge - naslov",
        type: "text",
      },
      {
        key: "servicesText",
        label: "Naše usluge - uvodni tekst",
        type: "textarea",
      },
      {
        key: "managementTitle",
        label: "Upravljanje - naslov",
        type: "text",
      },
      {
        key: "managementText",
        label: "Upravljanje - uvodni tekst",
        type: "textarea",
      },
      {
        key: "processTitle",
        label: "Kako surađujemo - naslov",
        type: "text",
      },
      {
        key: "newsTitle",
        label: "Novosti - naslov",
        type: "text",
      },
      {
        key: "ctaTitle",
        label: "Završni poziv - naslov",
        type: "text",
      },
      {
        key: "ctaText",
        label: "Završni poziv - tekst",
        type: "textarea",
      },
    ],
    defaults: {
      heroEyebrow:
        "Hrvatski poslovni centar - SPG d.o.o. · Zagreb",
      heroTitle1:
        "Profesionalno upravljanje",
      heroTitle2:
        "stambenim i poslovnim zgradama.",
      heroLead:
        "Transparentno financijsko izvještavanje, stručno održavanje i digitalni uvid za predstavnike i suvlasnike.",
      aboutTitle:
        "Hrvatski poslovni centar – SPG d.o.o.",
      aboutText1:
        "Registrirana i specijalizirana tvrtka za upravljanje i održavanje stambenih i poslovnih objekata. Kao jedan od najvećih privatnih upravitelja u Zagrebu i okolici upravljamo s više od 7.000 stambenih i poslovnih prostora te garaža.",
      aboutText2:
        "Tvrtka ima stalno zaposlene djelatnike ekonomske, pravne i građevinske struke, a radove i nadzor povjeravamo samo provjerenim suradnicima i kooperantima.",
      whyTitle:
        "Kvaliteta ispred kvantitete.",
      whyText:
        "Naš je cilj zgradama kojima upravljamo dati kvalitetnu podršku i uslugu - s posvećenošću detalju, pravnom sigurnošću i odgovornim upravljanjem pričuvom.",
      whyBullets:
        "Transparentno financijsko izvještavanje\nStručan tim i pravna sigurnost\nBrza i jasna komunikacija sa suvlasnicima\nOrganizirano godišnje planiranje i izvještavanje",
      servicesTitle:
        "Cjelovita podrška za vašu zgradu.",
      servicesText:
        "Pružamo cjelovit set usluga upravljanja, održavanja i obnove - od svakodnevnih tehničkih poslova do velikih projekata energetske obnove i obnove od potresa.",
      managementTitle:
        "Sve o upravljanju zgradom.",
      managementText:
        "Vodiči, pojmovnik, regulativa i informacije o financiranju - sve što suvlasnik treba znati o upravljanju vlastitom zgradom.",
      processTitle:
        "Jednostavan put do novog upravitelja.",
      newsTitle:
        "Vijesti i javni pozivi.",
      ctaTitle:
        "Spremni za upravitelja kojem se može vjerovati?",
      ctaText:
        "Ispunite Zahtjev za izradu prijedloga za upravljanje zgradom - pripremamo cjelovitu ponudu prilagođenu vašem objektu.",
    },
  },
  {
    key: "o-nama",
    label: "O nama",
    publicPath: "/o-nama",
    fields: [
      {
        key: "title",
        label: "Naslov",
        type: "text",
      },
      {
        key: "lead",
        label: "Uvod ispod naslova",
        type: "textarea",
      },
      {
        key: "intro1",
        label: "Prvi uvodni odlomak",
        type: "textarea",
      },
      {
        key: "intro2",
        label: "Drugi uvodni odlomak",
        type: "textarea",
      },
    ],
    defaults: {
      title:
        "Hrvatski poslovni centar – stambeno poslovno gospodarstvo d.o.o.",
      lead:
        "Registrirana i specijalizirana tvrtka za upravljanje i održavanje stambenih i poslovnih objekata.",
      intro1:
        "HPC-SPG d.o.o. registrirana je i specijalizirana tvrtka za upravljanje i održavanje nekretnina. Kao jedan od najvećih privatnih upravitelja u Zagrebu i okolici i jedna od prvih tvrtki registriranih za djelatnost upravljanja nekretninama, od prvog dana primjene Zakona o vlasništvu i drugim stvarnim pravima kroz višegodišnje iskustvo upravljamo s više od 7.000 stambenih i poslovnih prostora te garaža na lokacijama u Zagrebu, Sesvetama, Samoboru, Svetoj Nedelji, Bregani, Zaprešiću, Dugom Selu, Ivanić Gradu, Malom Lošinju, Poreču i Murteru.",
      intro2:
        "Tvrtka ima stalno zaposlene djelatnike – ekonomske, pravne i građevinske struke, kao i stručnjake svih ostalih popratnih aktivnosti. Izvođenje radova i popravaka na zgradi te nadzor nad radovima povjeravamo i ugovaramo samo s najkvalitetnijim suradnicima i kooperantima.",
    },
  },
  {
    key: "zasto-smo-bolji-izbor",
    label: "Zašto smo bolji izbor?",
    publicPath: "/zasto-smo-bolji-izbor",
    fields: [
      {
        key: "title",
        label: "Naslov",
        type: "text",
      },
      {
        key: "lead",
        label: "Uvod ispod naslova",
        type: "textarea",
      },
      {
        key: "flexibility",
        label: "Fleksibilnost",
        type: "lines",
        description:
          "Svaku stavku unesite u novi red.",
      },
      {
        key: "quality",
        label: "Kvaliteta i kontinuitet",
        type: "lines",
        description:
          "Svaku stavku unesite u novi red.",
      },
      {
        key: "ethics",
        label: "Etičnost",
        type: "textarea",
      },
      {
        key: "expertise",
        label: "Stručnost",
        type: "lines",
        description:
          "Svaku stavku unesite u novi red.",
      },
      {
        key: "transparency",
        label: "Transparentnost i suvremenost",
        type: "lines",
        description:
          "Svaku stavku unesite u novi red.",
      },
      {
        key: "accessibility",
        label: "Pristupačnost",
        type: "lines",
        description:
          "Svaku stavku unesite u novi red.",
      },
      {
        key: "experience",
        label: "Iskustvo",
        type: "lines",
        description:
          "Svaku stavku unesite u novi red.",
      },
    ],
    defaults: {
      title: "Zašto smo bolji izbor?",
      lead:
        "Fleksibilnost, kvaliteta, etičnost, sigurnost i 28 godina iskustva – razlozi zbog kojih nam suvlasnici vjeruju.",
      flexibility:
        "Mogućnost izbora različitih opcija poslovanja\nPrilagođavanje svih aspekata upravljanja i poslovanja željama i potrebama suvlasnika",
      quality:
        "Cilj nam je zgradama kojima upravljamo dati kvalitetnu podršku i uslugu\nImplementirani sustav upravljanja kvalitetom (ISO 9001)\nPrioritet tvrtke je imati zadovoljne korisnike usluga\nSustavno pronalazimo nove načine da razina naše usluge bude u skladu s načelima kontinuiranog poboljšanja i poslovne izvrsnosti",
      ethics:
        "Potpisnik smo i koautor Kodeksa poslovanja i ponašanja upravitelja nekretninama kojim su regulirana sva pitanja etičnosti i odgovornosti u obavljanju posla upravitelja.",
      expertise:
        "Zapošljavamo samo najstručnije osoblje\nDjelatnici građevinske, ekonomske i pravne struke s višegodišnjim iskustvom\nKroz sve faze upravljanja – od prvog kontakta, ugovaranja i primopredaje do realizacije – promptno odgovaramo na sve zahtjeve suvlasnika",
      transparency:
        "Sustavno pratimo najnoviju regulativu i trendove moderniziranog poslovanja\nFinancijski izvještaji dostupni su svim suvlasnicima putem web i mobilne aplikacije, e-maila i pošte\nMogućnost dostave uplatnica za pričuvu na e-mail te preuzimanje 2D barkoda za plaćanje kroz aplikaciju",
      accessibility:
        "Ured u poslovnom središtu blizu Kvaternikovog trga – dostupno javnim gradskim prijevozom\nMogućnost korištenja javnih garaža (Kvaternikov trg i Gorica)",
      experience:
        "Nekretninama upravljamo 28 godina, od samog početka primjene Zakona o vlasništvu\nBogato znanje i iskustvo u svim područjima upravljanja i održavanja\nZa svaki problem imamo rješenje",
    },
  },
  {
    key: "ponuda",
    label: "Ponuda",
    publicPath: "/ponuda",
    fields: [
      {
        key: "title",
        label: "Naslov",
        type: "text",
      },
      {
        key: "lead",
        label: "Uvod ispod naslova",
        type: "textarea",
      },
      {
        key: "highlights",
        label: "Glavne prednosti",
        type: "lines",
        description:
          "Svaku stavku unesite u novi red.",
      },
    ],
    defaults: {
      title:
        "Poslovi upravljanja i održavanja zgrada",
      lead:
        "Naknada upravitelju može biti ugovorena u fiksnom iznosu ili u postotku od pričuve – ovisno o željama suvlasnika i visini pričuve.",
      highlights:
        "Bez skrivenih troškova i naknada\nTransparentno vođenje sredstava zajedničke pričuve na računu posebne namjene, odvojenom od poslovanja tvrtke upravitelja i zaštićenom od ovrhe\nFinancijski izvještaji u svakom trenutku dostupni svim suvlasnicima – pošta, e-mail i web/mobilna aplikacija\nUplatnice s otisnutim 2D barkodom i mogućnošću slanja e-mailom\nUčinkovit sustav kontrole i naplate dugovanja za pričuvu\nPravno, tehničko i financijsko praćenje svih aktivnosti upravljanja",
    },
  },
  {
    key: "upravljanje",
    label: "Upravljanje",
    publicPath: "/upravljanje",
    fields: [
      {
        key: "title",
        label: "Naslov",
        type: "text",
      },
      {
        key: "lead",
        label: "Uvod ispod naslova",
        type: "textarea",
      },
    ],
    defaults: {
      title:
        "Vodič i regulativa upravljanja zgradama",
      lead:
        "Osnovni pojmovi, zakonodavni okvir i praktični savjeti za suvlasnike i predstavnike suvlasnika.",
    },
  },
  {
    key: "usluge",
    label: "Usluge",
    publicPath: "/usluge",
    fields: [
      {
        key: "title",
        label: "Naslov",
        type: "text",
      },
      {
        key: "lead",
        label: "Uvod ispod naslova",
        type: "textarea",
      },
    ],
    defaults: {
      title: "Naše usluge",
      lead:
        "Cjelovita ponuda usluga za predstavnike i suvlasnike – od svakodnevnog upravljanja do obnove i financiranja većih zahvata.",
    },
  },
];

export function getCmsPageDefinition(
  pageKey: string,
) {
  return cmsPageDefinitions.find(
    (page) => page.key === pageKey,
  );
}

export function splitCmsLines(
  value: unknown,
) {
  return String(value || "")
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}
