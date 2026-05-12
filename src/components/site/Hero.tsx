import { motion } from "framer-motion";
import hero from "@/assets/hero.jpg";
import { Dumbbell, Clock, Users, Sparkles } from "lucide-react";
import { useI18n } from "./i18n";

export function Hero() {
  const { t } = useI18n();
  const stats = [
    { icon: Dumbbell, label: t("stat.equipment") },
    { icon: Clock, label: t("stat.hours") },
    { icon: Users, label: t("stat.training") },
    { icon: Sparkles, label: t("stat.interior") },
  ];
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Zentrix Gym"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_30%,oklch(0.66_0.20_257/0.35),transparent_60%)]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24 min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary neon-pulse" />
            {t("hero.badge")}
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">
            {t("hero.title1")} <br />
            {t("hero.title2")} <span className="text-gradient">{t("hero.title3")}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground">
            {t("hero.subtitle")}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#memberships"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-7 py-3.5 text-sm font-semibold text-primary-foreground neon-pulse"
            >
              {t("hero.cta1")}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#memberships"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold hover:border-primary/50 transition-colors"
            >
              {t("hero.cta2")}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-xl p-5 flex items-center gap-3 hover:border-primary/40 transition-colors"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <s.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
