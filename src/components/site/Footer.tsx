import { Instagram } from "lucide-react";
import { useI18n } from "./i18n";
import logo from "@/assets/logo.png";

export function Footer() {
  const { t } = useI18n();
  const links: [string, string][] = [
    [t("nav.memberships"), "#memberships"],
    [t("nav.about"), "#about"],
    [t("nav.facilities"), "#facilities"],
    [t("nav.gallery"), "#gallery"],
    [t("nav.contact"), "#contact"],
  ];
  return (
    <footer className="relative border-t border-border mt-12">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Zentrix Gym logo" className="h-10 w-auto rounded-md object-contain" />
            <span className="font-display text-lg font-semibold">
              ZENTRIX<span className="text-primary">.</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">{t("ft.tagline")}</p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">{t("ft.explore")}</div>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map(([l, h]) => (
              <li key={l}>
                <a href={h} className="hover:text-primary transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">{t("ft.visit")}</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>{t("ct.addressV")}</li>
            <li>+374 44 20 11 00</li>
            <li>{t("ct.hoursV")}</li>
          </ul>
          <a
            href="https://www.instagram.com/zentrixgym"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
          >
            <Instagram className="h-4 w-4" /> @zentrixgym
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Zentrix Gym. {t("ft.rights")}</div>
          <a
            href="https://orscale.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            {t("ft.poweredBy")}
          </a>
        </div>
      </div>
    </footer>
  );
}


