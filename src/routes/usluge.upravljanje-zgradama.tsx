import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";

export const Route = createFileRoute("/usluge/upravljanje-zgradama")({
  head: () => ({
    meta: [
      { title: "Upravljanje zgradama — HPC-SPG" },
      { name: "description", content: "Cjelovito upravljanje stambenim i poslovnim zgradama: financijski, tehnički, pravni poslovi te transparentno vođenje pričuve." },
      { property: "og:title", content: "Upravljanje zgradama — HPC-SPG" },
      { property: "og:description", content: "Više od 7.000 stambenih i poslovnih prostora pod upravom — cjelovita usluga upravljanja." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Usluge"
      title="Upravljanje zgradama"
      lead="Cjelovita usluga upravljanja stambenim i poslovnim zgradama — jedno kontakt mjesto za sve obveze suvlasnika."
      crumbs={[{ label: "Usluge" }, { label: "Upravljanje zgradama" }]}
    >
      <p>
        HPC-SPG upravlja s više od 7.000 stambenih i poslovnih prostora te garaža na širem području
        Zagreba, Zagrebačke županije i Jadrana. Naši djelatnici ekonomske, pravne i građevinske struke
        vode sve poslove upravljanja — od preuzimanja zgrade do svakodnevnog održavanja i godišnjeg
        izvještaja.
      </p>

      <h2>Financijski poslovi</h2>
      <ul>
        <li>Obračun i zaduženje suvlasnika za zajedničku pričuvu</li>
        <li>Uplatnice pošto, e-mailom i kroz web/mobilnu aplikaciju — s 2D barkodom</li>
        <li>Knjigovodstvo zgrade i plaćanje računa po nalogu predstavnika</li>
        <li>Redovni financijski izvještaji i godišnja rekapitulacija</li>
        <li>Kontrola i prinudna naplata dugovanja</li>
      </ul>

      <h2>Tehnički poslovi</h2>
      <ul>
        <li>Svaka zgrada ima svog referenta — voditelja zgrade</li>
        <li>Redoviti i izvanredni pregledi stanja objekta</li>
        <li>Godišnji i višegodišnji program upravljanja (GPU/VGPU)</li>
        <li>Organizacija manjih, većih i hitnih radova</li>
        <li><a href="/hitne-intervencije">24-satno dežurstvo za hitne intervencije</a></li>
      </ul>

      <h2>Pravni poslovi</h2>
      <ul>
        <li>Priprema Međuvlasničkog i Ugovora o upravljanju</li>
        <li>Vođenje evidencije suvlasnika i usklađivanje sa zemljišnim knjigama</li>
        <li>Pomoć u <a href="/usluge/upis-u-zemljisne-knjige">upisu zgrade i posebnih dijelova u zemljišne knjige</a></li>
        <li>Zastupanje suvlasnika u sudskim postupcima naplate</li>
      </ul>

      <h2>Digitalne usluge</h2>
      <p>
        Web i mobilna aplikacija omogućava pregled uplatnica, financijskih izvještaja i dokumenata zgrade
        te online prijavu kvara. Vidi <a href="/e-financijski-izvjestaji">e-financijski izvještaji</a> i{" "}
        <a href="/dokumenti-zgrade">dokumenti zgrade</a>.
      </p>

      <p>
        Za cjelovitu ponudu prilagođenu vašoj zgradi <a href="/zahtjev">zatražite prijedlog upravljanja</a> —
        u pravilu odgovaramo u roku od nekoliko radnih dana.
      </p>
    </ArticlePageShell>
  ),
});
