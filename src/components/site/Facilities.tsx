import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, Flame, UserCog, Activity, LockKeyhole } from "lucide-react";

const items = [
  { icon: Dumbbell, title: "Premium Equipment", text: "Top-tier strength machines and free weights from the world's leading brands." },
  { icon: HeartPulse, title: "Cardio Zone", text: "Treadmills, bikes and rowers with screens and a panoramic dark-mood layout." },
  { icon: Flame, title: "Strength Training", text: "Power racks, platforms and dedicated zones for serious lifters." },
  { icon: UserCog, title: "Personal Coaching", text: "Certified trainers building programs around your goals and biomechanics." },
  { icon: Activity, title: "Functional Training", text: "Open turf, sleds, ropes and rigs for athletic, full-body conditioning." },
  { icon: LockKeyhole, title: "Locker Area", text: "Modern lockers, showers and changing rooms with a premium finish." },
];

export function Facilities() {
  return (
    <section id="facilities" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Facilities</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Everything you need to <span className="text-gradient">push further</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A complete training environment engineered around performance, recovery and the
            atmosphere that keeps you coming back.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
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
              <h3 className="relative mt-5 text-lg font-semibold">{it.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
              <div className="relative mt-6 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                Learn more <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
