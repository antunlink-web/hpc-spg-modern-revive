import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";

const groups = [
  {
    title: "Tijela državne i lokalne uprave",
    links: [
      { label: "Grad Zagreb", href: "https://www.zagreb.hr/" },
      { label: "Ministarstvo prostornog uređenja, graditeljstva i državne imovine", href: "https://mpgi.gov.hr/" },
      { label: "Ministarstvo pravosuđa i uprave — Zemljišne knjige", href: "https://mpu.gov.hr/" },
      { label: "Narodne novine", href: "https://narodne-novine.nn.hr/" },
      { label: "Državna geodetska uprava", href: "https://dgu.gov.hr/" },
    ],
  },
  {
    title: "Komunalne službe u Zagrebu",
    links: [
      { label: "Vodoopskrba i odvodnja", href: "https://www.vio.hr/" },
      { label: "HEP — Elektra Zagreb", href: "https://www.hep.hr/" },
      { label: "HEP Toplinarstvo", href: "https://www.hep.hr/toplinarstvo/" },
      { label: "Gradska plinara Zagreb — Opskrba", href: "https://www.plinara-zagreb.hr/" },
      { label: "Čistoća Zagreb", href: "https://www.cistoca.hr/" },
    ],
  },
  {
    title: "Programi i fondovi",
    links: [
      { label: "Fond za zaštitu okoliša i energetsku učinkovitost", href: "https://www.fzoeu.hr/" },
      { label: "Ministarstvo — obnova od potresa", href: "https://mpgi.gov.hr/obnova/8206" },
      { label: "APN — Agencija za pravni promet i posredovanje nekretninama", href: "https://apn.hr/" },
    ],
  },
  {
    title: "Strukovna udruženja",
    links: [
      { label: "Hrvatska udruga upravitelja zgrada", href: "https://huuz.hr/" },
      { label: "Hrvatska gospodarska komora — Udruženje upravitelja nekretninama", href: "https://www.hgk.hr/" },
    ],
  },
];

export const Route = createFileRoute("/korisni-linkovi-i-kontakti")({
  head: () => ({
    meta: [
      { title: "Korisni linkovi i kontakti | HPC-SPG" },
      { name: "description", content: "Zbirka korisnih poveznica za suvlasnike i predstavnike zgrada — komunalne službe, državna tijela, programi i fondovi." },
      { property: "og:title", content: "Korisni linkovi i kontakti — HPC-SPG" },
      { property: "og:description", content: "Sve na jednom mjestu — državna tijela, komunalne službe i programi obnove." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Resursi"
      title="Korisni linkovi i kontakti"
      lead="Poveznice na institucije, komunalne službe i programe koje suvlasnici najčešće trebaju."
      crumbs={[{ label: "Korisni linkovi" }]}
    >
      {groups.map((g) => (
        <div key={g.title}>
          <h2>{g.title}</h2>
          <ul>
            {g.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </ArticlePageShell>
  ),
});
