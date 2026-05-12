import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useI18n } from "./i18n";

type Plan = {
  nameKey: string;
  price: number;
  oldPrice?: number;
  periodKey: string;
  perkKeys: string[];
  popular?: boolean;
};

const plans: Plan[] = [
  { nameKey: "plan.8", price: 14000, oldPrice: 16000, periodKey: "period.package", perkKeys: ["perk.full", "perk.locker", "perk.flex"] },
  { nameKey: "plan.12", price: 16000, oldPrice: 18000, periodKey: "period.package", perkKeys: ["perk.full", "perk.locker", "perk.flex"] },
  { nameKey: "plan.15", price: 18000, oldPrice: 20000, periodKey: "period.package", perkKeys: ["perk.full", "perk.locker", "perk.flex"] },
  { nameKey: "plan.1m", price: 25000, oldPrice: 30000, periodKey: "period.month", perkKeys: ["perk.unlimited", "perk.zones", "perk.priority"], popular: true },
  { nameKey: "plan.3m", price: 55000, oldPrice: 75000, periodKey: "period.3months", perkKeys: ["perk.unlimited", "perk.zones", "perk.save27"] },
  { nameKey: "plan.6m", price: 99000, oldPrice: 150000, periodKey: "period.6months", perkKeys: ["perk.unlimited", "perk.zones", "perk.save34"] },
  { nameKey: "plan.1y", price: 199000, oldPrice: 300000, periodKey: "period.year", perkKeys: ["perk.unlimited", "perk.zones", "perk.best"] },
];

const fmt = (n: number) => n.toLocaleString("en-US");

export function Memberships() {
  const { t } = useI18n();
  return (
    <section id="memberships" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">{t("mb.kicker")}</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            {t("mb.title1")} <span className="text-gradient">{t("mb.title2")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">{t("mb.desc")}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {plans.map((p, i) => (
            <motion.article
              key={p.nameKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                p.popular
                  ? "bg-gradient-to-b from-primary/15 to-card border border-primary/40 glow-border"
                  : "glass hover:border-primary/40"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-primary to-primary-glow px-3 py-1 text-[10px] uppercase tracking-widest text-primary-foreground">
                  {t("mb.popular")}
                </span>
              )}
              <h3 className="text-lg font-semibold">{t(p.nameKey)}</h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight">{fmt(p.price)}</span>
                <span className="text-sm text-muted-foreground">{t("mb.amd")}</span>
              </div>
              {p.oldPrice && (
                <div className="mt-1 text-xs text-muted-foreground/70 line-through">
                  {fmt(p.oldPrice)} {t("mb.amd")}
                </div>
              )}
              <div className="mt-1 text-xs text-muted-foreground">
                {t("mb.per")} {t(p.periodKey)}
              </div>

              <ul className="mt-6 space-y-2.5">
                {p.perkKeys.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{t(perk)}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-7 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all ${
                  p.popular
                    ? "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground"
                    : "border border-border hover:border-primary/60 hover:bg-primary/10"
                }`}
              >
                {t("mb.cta")}
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
