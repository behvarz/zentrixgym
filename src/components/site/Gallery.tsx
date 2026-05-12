import { motion } from "framer-motion";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

const imgs = [
  { src: g3, span: "row-span-2" },
  { src: g2, span: "" },
  { src: g4, span: "" },
  { src: g1, span: "row-span-2" },
  { src: g6, span: "" },
  { src: g5, span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Gallery</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Step inside <span className="text-gradient">Zentrix</span>
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

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4">
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
