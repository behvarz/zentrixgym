import { motion } from "framer-motion";
import { Activity, Gauge, ShieldCheck, Sparkles, UserRoundCheck, Zap } from "lucide-react";
import { useI18n } from "./i18n";

const benefits = [
  { icon: Activity, key: "box.b1" },
  { icon: Gauge, key: "box.b2" },
  { icon: ShieldCheck, key: "box.b3" },
  { icon: Sparkles, key: "box.b4" },
];

const offers = [
  { titleKey: "box.individual", oldPrice: 40000, price: 30000 },
  { titleKey: "box.group", oldPrice: 20000, price: 15000 },
];

const fmt = (n: number) => n.toLocaleString("de-DE");

export function Boxing() {
  const { t } = useI18n();

  return (
    <section id="boxing" className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.55 }}
            className="min-w-0"
          >
            <span className="text-xs uppercase tracking-[0.18em] sm:tracking-[0.3em] text-primary">
              {t("box.kicker")}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight break-words">
              {t("box.title1")} <span className="text-gradient">{t("box.title2")}</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed break-words">{t("box.desc")}</p>

            <div className="mt-7 inline-flex max-w-full items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Zap className="h-4 w-4 shrink-0" />
              <span className="break-words">{t("box.presale")}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.55 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {offers.map((offer) => (
              <article
                key={offer.titleKey}
                className="rounded-2xl border border-primary/35 bg-gradient-to-b from-primary/15 to-card p-6 min-w-0"
              >
                <h3 className="text-lg font-semibold break-words">{t(offer.titleKey)}</h3>
                <div className="mt-5 text-sm text-muted-foreground line-through">
                  {fmt(offer.oldPrice)} {t("mb.amd")}
                </div>
                <div className="mt-1 flex flex-wrap items-baseline gap-2">
                  <span className="text-3xl font-bold tracking-tight">{fmt(offer.price)}</span>
                  <span className="text-sm text-muted-foreground">{t("mb.amd")}</span>
                </div>
                <p className="mt-3 text-xs text-primary font-semibold">{t("box.discount")}</p>
              </article>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="glass rounded-2xl p-5 min-w-0"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <item.icon className="h-5 w-5" />
              </span>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground break-words">{t(item.key)}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 glass rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="flex items-start gap-3 min-w-0">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary shrink-0">
              <UserRoundCheck className="h-5 w-5" />
            </span>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">{t("box.trainer")}</p>
          </div>
          <a
            href="#contact"
            className="inline-flex w-full md:w-auto items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-glow px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            {t("box.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
