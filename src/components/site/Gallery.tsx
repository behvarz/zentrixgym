import { motion } from "framer-motion";
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img6 from "@/assets/6.jpg";
import img9 from "@/assets/9.jpg";
import { useI18n } from "./i18n";

const imgs = [
  { src: img3, span: "row-span-2" },
  { src: img1, span: "" },
  { src: img4, span: "" },
  { src: img9, span: "row-span-2" },
  { src: img6, span: "" },
  { src: img2, span: "" },
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

        <div className="mt-12 space-y-4 sm:hidden">
          {imgs.map((im, i) => (
            <motion.div
              key={`mobile-${i}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="rounded-2xl border border-white/10 bg-black/30 p-2"
            >
              <img
                src={im.src}
                alt=""
                loading="lazy"
                className="h-auto max-h-[70vh] w-full object-contain rounded-xl"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 hidden sm:grid sm:grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4">
          {imgs.map((im, i) => (
            <motion.div
              key={`desktop-${i}`}
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
