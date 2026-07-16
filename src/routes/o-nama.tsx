import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";
import { withBase } from "@/lib/paths";

export const Route = createFileRoute("/o-nama")({
  head: () => ({
    meta: [
      { title: "O nama — Hrvatski poslovni centar (HPC-SPG)" },
      { name: "description", content: "HPC-SPG d.o.o. — registrirana i specijalizirana tvrtka za upravljanje i održavanje stambenih i poslovnih zgrada s više od 7.000 prostora pod upravom." },
      { property: "og:title", content: "O nama — HPC-SPG" },
      { property: "og:description", content: "Jedan od najvećih privatnih upravitelja u Zagrebu i okolici — više od 7.000 stambenih i poslovnih prostora pod upravom." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="O nama"
      title="Hrvatski poslovni centar – stambeno poslovno gospodarstvo d.o.o."
      lead="Registrirana i specijalizirana tvrtka za upravljanje i održavanje stambenih i poslovnih objekata."
      crumbs={[{ label: "O nama" }]}
    >
      <p>
        <strong>HPC-SPG d.o.o.</strong> registrirana je i specijalizirana tvrtka za upravljanje i održavanje
        nekretnina. Kao jedan od najvećih privatnih upravitelja u Zagrebu i okolici i jedna od prvih tvrtki
        registriranih za djelatnost upravljanja nekretninama, od prvog dana primjene Zakona o vlasništvu
        i drugim stvarnim pravima kroz višegodišnje iskustvo <strong>upravljamo s više od 7.000
        stambenih i poslovnih prostora te garaža</strong> na lokacijama u Zagrebu, Sesvetama, Samoboru, Svetoj
        Nedelji, Bregani, Zaprešiću, Dugom Selu, Ivanić Gradu, Malom Lošinju, Poreču i Murteru.
      </p>
      <p>
        Tvrtka ima stalno zaposlene djelatnike — ekonomske, pravne i građevinske struke, kao i stručnjake
        svih ostalih popratnih aktivnosti. Izvođenje radova i popravaka na zgradi te nadzor nad radovima
        povjeravamo i ugovaramo samo s najkvalitetnijim suradnicima i kooperantima.
      </p>

      <h2>Najvažnije aktivnosti koje su obilježile naš rad</h2>

      <h3>1998. – 2005. — Organizator pet seminara o upravljanju zgradama</h3>
      <p>
        Organizirali smo <a href={withBase("/seminari")}>pet seminara – savjetovanja</a> o upravljanju i održavanju
        zgrada kako bismo sve sudionike u procesu — suvlasnike, predstavnike, tijela državne uprave i
        lokalne samouprave te upravitelje — educirali o njihovim pravima i obvezama.
      </p>

      <h3>2001. — Utemeljitelj Hrvatske udruge upravitelja zgrada</h3>
      <p>Jedan smo od utemeljitelja i osnivača, te član Hrvatske udruge upravitelja zgrada.</p>

      <h3>2004. — Izdanje Vodiča za suvlasnike zgrada</h3>
      <p>
        Izdali smo prvu specijaliziranu knjigu o upravljanju i održavanju zgrada i kulturi stanovanja —{" "}
        <a href={withBase("/vodic-za-suvlasnike")}>Vodič za suvlasnike zgrada — Priručnik o stanovanju</a>.
      </p>

      <h3>2004. — ISO 9001 sustav upravljanja kvalitetom</h3>
      <p>
        Prvi smo privatni upravitelj zgrada koji je poslovanje certificirao prema međunarodnoj normi
        ISO 9001:2000 i 9001:2008 (certifikat broj Q-627 od 31.05.2004.).
      </p>

      <h3>2010. — Član HGK Udruženja i potpisnik Kodeksa</h3>
      <p>
        Član smo Udruženja upravitelja nekretninama Hrvatske gospodarske komore te koautor i potpisnik
        Kodeksa poslovanja i ponašanja upravitelja nekretninama, od 16. ožujka 2010. upisan u Popis pod
        rednim brojem 331-09/02.
      </p>

      <h3>2017. – danas — AAA certifikat bonitetne izvrsnosti</h3>
      <p>
        Kontinuirano smo nositelj <a href={withBase("/certifikat-bonitetne-izvrsnosti")}>AAA certifikata bonitetne
        izvrsnosti</a>, jednog od najvažnijih europskih standarda kojima se definira kvaliteta poslovanja.
        Certificiranjem smo se svrstali uz sam bok najboljim europskim poduzećima.
      </p>
    </ArticlePageShell>
  ),
});
