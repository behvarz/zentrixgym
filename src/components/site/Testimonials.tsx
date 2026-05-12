import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Areg Sargsyan", role: "Member · 2 years", text: "Best gym in Yerevan by far. Equipment is top class and the atmosphere just pushes you to lift heavier every session." },
  { name: "Mariam Hakobyan", role: "Member · 1 year", text: "Modern, clean and motivating. The trainers actually care and the cardio zone is unreal — I never miss a morning here." },
  { name: "Davit Petrosyan", role: "Member · 3 years", text: "Zentrix changed how I train. Strength area is professional grade and the energy is unmatched in the city." },
  { name: "Anush Grigoryan", role: "Member · 8 months", text: "I love the design and the vibe. It feels premium without being intimidating — perfect place to start." },
  { name: "Narek Avetisyan", role: "Member · 1.5 years", text: "Open from early morning to late night, exactly what I needed. Coaches are sharp and programs are solid." },
  { name: "Lilit Khachatryan", role: "Member · 6 months", text: "The locker area, the lighting, the music — every detail is thought through. Worth every dram." },
];

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Members</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            What people <span className="text-gradient">say</span>
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
              className="glass rounded-2xl p-6 hover:border-primary/40 transition-colors"
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-sm font-semibold text-primary-foreground">
                  {r.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <div>
                  <div className="text-sm font-medium">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
