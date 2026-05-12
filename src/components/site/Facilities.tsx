import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, Flame, UserCog, Activity, LockKeyhole } from "lucide-react";
import { useI18n } from "./i18n";

export function Facilities() {
  const { t } = useI18n();
  const items = [
    { icon: Dumbbell, t: "fc.f1.t", d: "fc.f1.d" },
    { icon: HeartPulse, t: "fc.f2.t", d: "fc.f2.d" },
    { icon: Flame, t: "fc.f3.t", d: "fc.f3.d" },
    { icon: UserCog, t: "fc.f4.t", d: "fc.f4.d" },
    { icon: Activity, t: "fc.f5.t", d: "fc.f5.d" },
    { icon: LockKeyhole, t: "fc.f6.t", d: "fc.f6.d" },
  ];
  return (
    <section id="facilities" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">{t("fc.kicker")}</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              {t("fc.title1")} <span className="text-gradient">{t("fc.title2")}</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">{t("fc.desc")}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative glass rounded-2xl p-7 overflow-hidden hover:border-primary/50 transition-all"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary group-hover:shadow-[var(--shadow-glow)] transition-all">
                <it.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 text-lg font-semibold">{t(it.t)}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{t(it.d)}</p>
              <div className="relative mt-6 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                {t("fc.learn")} <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
