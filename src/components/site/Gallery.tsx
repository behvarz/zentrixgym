import { motion } from "framer-motion";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import { useI18n } from "./i18n";

const imgs = [
  { src: g3, span: "row-span-2" },
  { src: g2, span: "" },
  { src: g4, span: "" },
  { src: g1, span: "row-span-2" },
  { src: g6, span: "" },
  { src: g5, span: "" },
];

export function Gallery() {
  const { t } = useI18n();
  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <span className="text-xs uppercase tracking-[0.18em] sm:tracking-[0.3em] text-primary">{t("gl.kicker")}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold break-words">
              {t("gl.title1")} <span className="text-gradient">{t("gl.title2")}</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/zentrixgym"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            @zentrixgym →
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[160px] sm:auto-rows-[180px] gap-4">
          {imgs.map((im, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-2xl group ${im.span}`}
            >
              <img
                src={im.src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 group-hover:ring-primary/40 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
