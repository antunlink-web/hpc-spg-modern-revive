import { Building2, MapPin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16 lg:py-20 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2.5">
            <span className="h-9 w-9 rounded-md bg-white/10 grid place-items-center">
              <Building2 className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <span className="font-display text-lg font-bold">HPC-SPG</span>
          </div>
          <p className="mt-5 text-sm text-white/70 max-w-sm leading-relaxed">
            Hrvatski poslovni centar — stambeno poslovno gospodarstvo d.o.o.
            Profesionalno upravljanje stambenim i poslovnim zgradama u Zagrebu i
            okolici.
          </p>
          <div className="mt-6 space-y-2.5 text-sm text-white/80">
            <p className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              Ulica Adama Mandrovića 3, 10000 Zagreb
            </p>
            <p className="flex items-start gap-2.5">
              <Mail className="h-4 w-4 mt-0.5 shrink-0" />
              <a href="https://hpc-spg.hr/" className="hover:text-white">
                hpc-spg.hr
              </a>
            </p>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-xs uppercase tracking-[0.18em] text-white/50">
            Usluge
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li><a href="#usluge" className="hover:text-white">Upravljanje zgradama</a></li>
            <li><a href="#usluge" className="hover:text-white">Održavanje i godišnji pregled</a></li>
            <li><a href="#usluge" className="hover:text-white">Obnova od potresa</a></li>
            <li><a href="#usluge" className="hover:text-white">Energetska obnova</a></li>
            <li><a href="#usluge" className="hover:text-white">Upis u zemljišne knjige</a></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xs uppercase tracking-[0.18em] text-white/50">
            Suvlasnici
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li><a href="https://hpc-spg.com/" target="_blank" rel="noreferrer" className="hover:text-white">Prijava</a></li>
            <li><a href="https://hpc-spg.hr/zahtjev-za-pristupne-podatke/" target="_blank" rel="noreferrer" className="hover:text-white">Pristupni podaci</a></li>
            <li><a href="https://hpc-spg.hr/zahtjev-za-dostavu-uplatnica-za-pricuvu-e-mailom/" target="_blank" rel="noreferrer" className="hover:text-white">E-uplatnice</a></li>
            <li><a href="#vijesti" className="hover:text-white">Vijesti</a></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xs uppercase tracking-[0.18em] text-white/50">
            Pravno
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li>
              <a
                href="https://hpc-spg.hr/wp-content/uploads/2019/04/web1-Izjava-o-za%C5%A1titi-osobnih-podataka-internet-stranica-klijenti-i-dobavlja%C4%8Di-HPC-SPG-1.pdf"
                target="_blank" rel="noreferrer"
                className="hover:text-white"
              >
                Zaštita osobnih podataka
              </a>
            </li>
            <li><a href="#" className="hover:text-white">Kolačići</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} HPC-SPG d.o.o. Sva prava pridržana.</p>
          <p>Profesionalno upravljanje zgradama — Zagreb</p>
        </div>
      </div>
    </footer>
  );
}
