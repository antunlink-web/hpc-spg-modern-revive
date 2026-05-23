## HPC-SPG Premium Redesign Plan

A clean, institutional, Scandinavian-business homepage for **Hrvatski poslovni centar – stambeno poslovno gospodarstvo d.o.o.**, built in Croatian, using only the real services, news, and tools found on hpc-spg.hr.

### Real content sourced from hpc-spg.hr

**Company:** Hrvatski poslovni centar – stambeno poslovno gospodarstvo d.o.o. — upravljanje stambenim i poslovnim zgradama u Zagrebu.
**Office:** Ulica Adama Mandrovića 3, Zagreb (nova adresa).
**Login portal:** hpc-spg.com (Prijava za web i mobilnu aplikaciju).

**Digitalne usluge (real):**
- Web i mobilna aplikacija (uvid u financije zgrade, dokumenti, komunikacija s predstavnikom i upraviteljem)
- E-uplatnice za pričuvu (e-mailom)
- E-financijski izvještaji (mjesečni izvještaj zgrade)
- Online zahtjevi i prijavnice

**Ključne usluge / teme (real):**
- Ponuda za upravljanje zgradom (Zahtjev za prijedlog)
- Obnova zgrada od potresa
- Energetska obnova zgrada
- Upis u zemljišne knjige
- Uplatnice za pričuvu
- Vodič za suvlasnike zgrada
- Financiranje uređenja objekata (zajmovi)
- Anketa za suvlasnike
- Korisni linkovi i kontakti
- Zaštita osobnih podataka

**Aktualne vijesti / javni pozivi (real):**
- Novi Zakon o upravljanju i održavanju zgrada (u primjeni od 01.01.2025.)
- Javni poziv za sufinanciranje uređenja pročelja 2026.
- Javni poziv za sufinanciranje ugradnje dizala 2026.
- Sufinanciranje zaštite građevina od grafita
- Nova adresa ureda – Ulica Adama Mandrovića 3

**Postotci učinka (real, sa stranice):** Ostvareni projekti održavanja 90%, Odgovori na upite 99%, Naplata pričuve 95%, Ažurnost poslovnih suradnika 90%, Ponude za upravljanje 100%, Ugovorene zgrade 98%, Godišnji pregled zgrade 99%, Godišnji programi upravljanja 99%, Osiguranje zajedničkih dijelova 100%.

No statistic, year, certification, employee count, or testimonial will be invented. Where testimonials would normally go, the section will instead surface the real Anketa za suvlasnike and Vodič za suvlasnike — both authentic.

---

### Homepage structure

1. **Sticky header** — logo, dropdown nav (Usluge, Digitalne usluge, O nama, Vijesti, Kontakt), search icon, secondary link "Prijava" → hpc-spg.com, primary CTA "Zatražite ponudu". Mobile: slide-out drawer with accordion sections, large tap targets, prominent CTA + Prijava.
2. **Hero** — full-width residential building photograph, dark-blue overlay, headline "Profesionalno upravljanje zgradama", subheadline o iskustvu, transparentnosti i digitalnoj komunikaciji u Zagrebu i okolici. Dva CTA: "Zatražite ponudu", "Kontaktirajte nas". Ispod hero — diskretna traka s 3 stvarna pokazatelja iz tablice učinka (Naplata pričuve 95%, Odgovori na upite 99%, Osiguranje zajedničkih dijelova 100%).
3. **Glavne usluge** — kartice s ikonom + kratkim opisom + "Saznaj više": Upravljanje zgradama, Održavanje i godišnji pregled, Obnova od potresa, Energetska obnova, Upis u zemljišne knjige, Financiranje uređenja objekata.
4. **Zašto odabrati HPC-SPG** — premium feature grid: Kvaliteta ispred kvantitete, Transparentno financijsko izvještavanje, Brzi odgovori na upite, Stručan tim i pravna sigurnost, Organizirano godišnje planiranje, Osiguranje zajedničkih dijelova. Svaki bullet podržan stvarnim postotkom učinka gdje primjenjivo.
5. **Digitalne usluge** — istaknuta sekcija s mock-up prikazom aplikacije i tri kartice: Web i mobilna aplikacija, E-uplatnice za pričuvu, E-financijski izvještaji. CTA "Prijava" → hpc-spg.com, sekundarni "Zatraži pristupne podatke".
6. **Kako surađujemo** — 4-koračni proces: Zahtjev za ponudu → Prijedlog upravljanja → Ugovor i preuzimanje → Kontinuirano upravljanje i izvještavanje. Vertikalna timeline na mobilnom.
7. **Aktualno / Vijesti** — modern card grid s 4 stvarne objave (Novi Zakon 2025., Pročelja 2026., Dizala 2026., Zaštita od grafita). Slika, naslov, kratki excerpt, datum, hover lift.
8. **Resursi za suvlasnike** (zamjena za fake testimoniale) — Vodič za suvlasnike, Anketa za suvlasnike, Korisni linkovi i kontakti, Zaštita osobnih podataka. Sve stvarni linkovi.
9. **CTA sekcija** — dark-blue band: "Spremni za promjenu upravitelja?" + CTA "Zatražite ponudu" i telefonski/e-mail link (preuzima se sa stvarne Kontakt stranice — bez izmišljanja brojeva; ako podatak nije dostupan, prikazujemo samo CTA i adresu ureda).
10. **Footer (dark)** — logo + kratki opis, adresa Ulica Adama Mandrovića 3, Zagreb, quick links (Usluge, Digitalne usluge, Vijesti, Kontakt, Prijava), Pravno (Zaštita osobnih podataka, Cookies), embedded Google Map placeholder za adresu, copyright.

### Visual & technical direction

- Tokens u `src/styles.css` (oklch): bijela pozadina, vrlo svijetlo siva sekundarna (#F5F6F8 ekv.), elegantna tamno-plava primarna (deep navy ~#0E2A47 ekv.), suptilna toplo-siva tekstualna hijerarhija. Border-radius umjereno (8–12px). Mekane sjene.
- Tipografija: par "instrument-serif-work-sans" ili "libre-baskerville-ibm-plex" — institucionalni, čitljiv, premium. Veliki naslovi, široki line-height.
- Velika negativna prazna polja, generous section padding, 12-col grid desktop, single column mobile-first.
- Suptilna scroll-reveal (fade/translate 8px) na sekcijama, bez parallaxa. Bez crypto/futuristic efekata. Bez glassmorphism osim eventualno na hero stat-traci.
- Hero image i sekcijske slike: generirati premium fotografije modernih zagrebačkih stambenih zgrada (premium quality model).
- Lucide ikone (Building2, ShieldCheck, FileText, Smartphone, Receipt, BarChart3, Wrench, Zap, BookOpen, MapPin, Phone, Mail).
- Lovable branding / favicon: ukloniti, postaviti neutralan favicon (jednostavni HPC monogram) i osigurati da nigdje nema spomena Lovable.
- Pristupačnost: AA kontrast na navy/white, focus rings, semantički heading order, alt tekstovi na hrvatskom.
- Performanse: lazy-load slike, responsive `<img>` srcset, minimalan JS.

### Technical notes

- TanStack Start file-based routing. Homepage zamjenjuje placeholder u `src/routes/index.tsx`. Dodatne rute (`/usluge`, `/digitalne-usluge`, `/vijesti`, `/kontakt`, `/o-nama`) — u ovom koraku se ne implementiraju kao zasebne stranice, već se navigacija veže na sidrene sekcije homepagea + Linkovi (`<Link to="/">` sa hash) uz napomenu da se zasebne rute mogu dodati kasnije po želji.
- Hrvatski jezik kroz cijeli UI, `<html lang="hr">` u `__root.tsx`, SEO meta (title "HPC-SPG — Profesionalno upravljanje zgradama u Zagrebu", description izvučen iz stvarnog poslovanja).
- Komponente razbijene u `src/components/site/` (Header, Hero, TrustBar, Services, WhyUs, DigitalServices, Process, News, Resources, CTA, Footer).
- Slike generirane preko imagegen u `src/assets/`.
- Ažurirati `__root.tsx` meta tagove i `lang="hr"`; ukloniti default favicon.

### Out of scope (ovog koraka)

- Funkcionalna pretraga, backend forme, CMS za vijesti, login flow (linkamo na postojeći hpc-spg.com).
- Dodatne pune podstranice (mogu se dodati kasnije).

Spreman za implementaciju kad potvrdite.