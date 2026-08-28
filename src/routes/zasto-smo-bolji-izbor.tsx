import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";
import { withBase } from "@/lib/paths";
import { getPublicPage } from "@/lib/cms/page-functions";
import { splitCmsLines } from "@/lib/cms/page-definitions";

export const Route = createFileRoute("/zasto-smo-bolji-izbor")({
  head: () => ({
    meta: [
      { title: "Zašto smo bolji izbor — HPC-SPG" },
      { name: "description", content: "Fleksibilnost, kvaliteta, etičnost, bonitet AAA, stručnost, transparentnost i 28 godina iskustva u upravljanju zgradama." },
      { property: "og:title", content: "Zašto smo bolji izbor — HPC-SPG" },
      { property: "og:description", content: "Razlozi zbog kojih suvlasnici biraju HPC-SPG kao svog upravitelja zgrade." },
    ],
  }),
  loader: () =>
    getPublicPage({
      data: {
        pageKey:
          "zasto-smo-bolji-izbor",
      },
    }),
  component: WhyPage,
});

function WhyPage() {
  const page = Route.useLoaderData();
  const content = page.content;

  return (
    <ArticlePageShell
      eyebrow="Zašto HPC-SPG"
      title={content.title}
      lead={content.lead}
      crumbs={[{ label: "Zašto smo bolji izbor" }]}
    >
      <h2>Fleksibilnost</h2>
      <ul>
        {splitCmsLines(content.flexibility).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Kvaliteta i kontinuitet</h2>
      <ul>
        {splitCmsLines(content.quality).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Etičnost</h2>
      <p>{content.ethics}</p>

      <h2>Bonitet</h2>
      <p>
        Kontinuirano smo nositelj <a href={withBase("/certifikat-bonitetne-izvrsnosti")}>AAA certifikata bonitetne
        izvrsnosti</a> koji je potvrda dugogodišnjeg sustavnog i kvalitetnog rada. Certifikat je jedan od
        najvažnijih europskih standarda kojima se definira kvaliteta poslovanja.
      </p>

      <h2>Stručnost</h2>
      <ul>
        {splitCmsLines(content.expertise).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Transparentnost i suvremenost</h2>
      <ul>
        {splitCmsLines(content.transparency).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Sigurnost</h2>
      <p>
        Vodimo računa o zaštiti osobnih podataka — cjelokupno poslovanje usklađeno je s GDPR regulativom o{" "}
        <a href={withBase("/zastita-osobnih-podataka")}>zaštiti osobnih podataka</a>.
      </p>

      <h2>Pristupačnost</h2>
      <ul>
        {splitCmsLines(content.accessibility).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Iskustvo</h2>
      <ul>
        {splitCmsLines(content.experience).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </ArticlePageShell>
  );
}
