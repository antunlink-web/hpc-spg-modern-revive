import { MapPin, Mail, Globe, Clock, Phone, ShieldCheck, Building2 } from "lucide-react";
import bonitetAAA from "@/assets/bonitet-aaa.png.asset.json";

export function SiteFooter() {
  return (
    <footer id="kontakt" className="bg-navy text-navy-foreground">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16 lg:py-20 grid gap-14 lg:gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h3 className="text-lg font-semibold text-white/95 leading-tight max-w-xs">
            Hrvatski poslovni centar – stambeno poslovno gospodarstvo d.o.o.
          </h3>
          <p className="mt-5 text-sm text-white/75 max-w-sm leading-relaxed">
            Transparentno financijsko izvještavanje, stručno održavanje i digitalni uvid za predstavnike i suvlasnike.
          </p>

          <div className="mt-7 space-y-3 text-sm text-white/90">
            <p className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-white/60" />
              <span>
                Ulica Adama Mandrovića 3<br />
                10000 Zagreb, Hrvatska
              </span>
            </p>
            <p className="flex items-start gap-3">
              <Clock className="h-4 w-4 mt-0.5 shrink-0 text-white/60" />
              <span>
                Radno vrijeme: Pon – Pet, 08:00 – 16:00
              </span>
            </p>
            <p className="flex items-start gap-3">
              <Globe className="h-4 w-4 mt-0.5 shrink-0 text-white/60" />
              <a href="https://hpc-spg.hr/" className="hover:text-white">hpc-spg.hr</a>
            </p>
            <p className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-white/60" />
              <a href="/zahtjev" target="_blank" rel="noreferrer" className="hover:text-white">
                Zahtjev za ponudu
              </a>
            </p>
          </div>
        </div>


        <div className="lg:col-span-2">
          <h4 className="text-xs uppercase tracking-[0.18em] text-white/55">Usluge</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li><a href="https://hpc-spg.hr/upravljanje-zgradama/" target="_blank" rel="noreferrer" className="hover:text-white">Upravljanje zgradama</a></li>
            <li><a href="https://hpc-spg.hr/?page_id=12900" target="_blank" rel="noreferrer" className="hover:text-white">Obnova od potresa</a></li>
            <li><a href="https://hpc-spg.hr/?page_id=13606" target="_blank" rel="noreferrer" className="hover:text-white">Energetska obnova</a></li>
            <li><a href="https://hpc-spg.hr/?page_id=12875" target="_blank" rel="noreferrer" className="hover:text-white">Zemljišne knjige</a></li>
            <li><a href="https://hpc-spg.hr/?page_id=12945" target="_blank" rel="noreferrer" className="hover:text-white">Financiranje uređenja</a></li>
            <li><a href="https://hpc-spg.hr/zajmovi-i-krediti/" target="_blank" rel="noreferrer" className="hover:text-white">Zajmovi i krediti</a></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xs uppercase tracking-[0.18em] text-white/55">Suvlasnici</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li><a href="https://hpc-spg.com/" target="_blank" rel="noreferrer" className="hover:text-white">Prijava u aplikaciju</a></li>
            <li><a href="https://hpc-spg.hr/zahtjev-za-pristupne-podatke/" target="_blank" rel="noreferrer" className="hover:text-white">Pristupni podaci</a></li>
            <li><a href="https://hpc-spg.hr/zahtjev-za-dostavu-uplatnica-za-pricuvu-e-mailom/" target="_blank" rel="noreferrer" className="hover:text-white">E-uplatnice</a></li>
            <li><a href="https://hpc-spg.hr/osnovni-pojmovi-upravljanja/" target="_blank" rel="noreferrer" className="hover:text-white">Osnovni pojmovi</a></li>
            <li><a href="https://hpc-spg.hr/regulativa-upravljanja/" target="_blank" rel="noreferrer" className="hover:text-white">Regulativa</a></li>
            <li><a href="https://hpc-spg.hr/obavijesti/novosti/" target="_blank" rel="noreferrer" className="hover:text-white">Novosti</a></li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-xs uppercase tracking-[0.18em] text-white/55">Hitne intervencije</h4>
          <div className="mt-5 rounded-lg border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-white/80 leading-relaxed">
              U slučaju kvara na zajedničkim dijelovima zgrade, obratite se
              predstavniku suvlasnika ili putem aplikacije prijavite kvar.
            </p>
            <a
              href="https://hpc-spg.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" /> Prijava kvara putem aplikacije
            </a>
          </div>

          <div className="mt-6 rounded-lg bg-white/95 p-5 flex items-center gap-5">
            <img src={bonitetAAA.url} alt="Bonitet AAA — Platinum certifikat kreditne sposobnosti" className="h-28 w-auto" />
            <div className="text-navy">
              <div className="text-[11px] uppercase tracking-[0.18em] text-navy/60">Bonitetna izvrsnost</div>
              <div className="mt-1 text-sm font-semibold">Certifikat AAA — Platinum</div>
              <div className="mt-1 text-xs text-navy/70">Priznanje financijske stabilnosti i pouzdanosti društva.</div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-md border border-white/10 bg-white/5 p-4">
              <ShieldCheck className="h-5 w-5 text-white/70" strokeWidth={1.6} />
              <div className="mt-2 text-[11px] uppercase tracking-wider text-white/55">Registrirani</div>
              <div className="text-sm text-white">Upravitelj zgrada</div>
            </div>
            <div className="rounded-md border border-white/10 bg-white/5 p-4">
              <Building2 className="h-5 w-5 text-white/70" strokeWidth={1.6} />
              <div className="mt-2 text-[11px] uppercase tracking-wider text-white/55">Sjedište</div>
              <div className="text-sm text-white">Zagreb, Hrvatska</div>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/55">
          <p>© {new Date().getFullYear()} Hrvatski poslovni centar – stambeno poslovno gospodarstvo d.o.o. Sva prava pridržana.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a
              href="https://hpc-spg.hr/wp-content/uploads/2019/04/web1-Izjava-o-za%C5%A1titi-osobnih-podataka-internet-stranica-klijenti-i-dobavlja%C4%8Di-HPC-SPG-1.pdf"
              target="_blank" rel="noreferrer"
              className="hover:text-white"
            >
              Zaštita osobnih podataka
            </a>
            <a href="#" className="hover:text-white">Kolačići</a>
            <a href="https://hpc-spg.hr/" target="_blank" rel="noreferrer" className="hover:text-white">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
