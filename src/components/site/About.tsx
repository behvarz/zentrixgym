import { motion } from "framer-motion";
import g1 from "@/assets/g1.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import { Counter } from "./Counter";
import { useI18n } from "./i18n";

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-primary/20 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary">{t("ab.kicker")}</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
            {t("ab.title1")} <span className="text-gradient">{t("ab.title2")}</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">{t("ab.p1")}</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">{t("ab.p2")}</p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            <Stat value={1500} suffix="+" label={t("ab.stat1")} />
            <Stat value={25} suffix="+" label={t("ab.stat2")} />
            <Stat value={16} label={t("ab.stat3")} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative grid grid-cols-2 gap-4 h-[500px]"
        >
          <div className="space-y-4">
            <img src={g4} alt="" loading="lazy" className="rounded-2xl object-cover h-[60%] w-full glow-border" />
            <img src={g1} alt="" loading="lazy" className="rounded-2xl object-cover h-[36%] w-full" />
          </div>
          <div className="pt-12">
            <img src={g5} alt="" loading="lazy" className="rounded-2xl object-cover h-full w-full float" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-bold text-gradient">
        <Counter to={value} />
        {suffix}
      </div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{label}</div>
    </div>
  );
}
