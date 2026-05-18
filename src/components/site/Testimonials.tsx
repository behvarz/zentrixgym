import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useI18n } from "./i18n";

const reviews = [
  { name: "Areg Sargsyan", years: "2", key: "tm.r1" },
  { name: "Mariam Hakobyan", years: "1", key: "tm.r2" },
  { name: "Davit Petrosyan", years: "3", key: "tm.r3" },
  { name: "Anush Grigoryan", years: "0.8", key: "tm.r4" },
  { name: "Narek Avetisyan", years: "1.5", key: "tm.r5" },
  { name: "Lilit Khachatryan", years: "0.6", key: "tm.r6" },
];

export function Testimonials() {
  const { t } = useI18n();
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.18em] sm:tracking-[0.3em] text-primary">{t("tm.kicker")}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold break-words">
            {t("tm.title1")} <span className="text-gradient">{t("tm.title2")}</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass rounded-2xl p-5 sm:p-6 hover:border-primary/40 transition-colors min-w-0"
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground break-words">"{t(r.key)}"</p>
              <div className="mt-6 flex items-center gap-3 min-w-0">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-sm font-semibold text-primary-foreground shrink-0">
                  {r.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-medium break-words">{r.name}</div>
                  <div className="text-xs text-muted-foreground break-words">{t("tm.role")} · {r.years}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
