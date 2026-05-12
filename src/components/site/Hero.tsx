import { motion } from "framer-motion";
import hero from "@/assets/hero.jpg";
import { Dumbbell, Clock, Users, Sparkles } from "lucide-react";

const stats = [
  { icon: Dumbbell, label: "Premium Equipment" },
  { icon: Clock, label: "Open 07:00 – 23:00" },
  { icon: Users, label: "Personal Training" },
  { icon: Sparkles, label: "Modern Interior" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Zentrix Gym interior"
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
            Yerevan · Griboyedov 23/4
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">
            ENERGY <br />
            STARTS <span className="text-gradient">HERE</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground">
            Modern fitness experience in Yerevan with premium equipment and a motivating
            atmosphere built for those who chase strength, discipline and transformation.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#memberships"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-7 py-3.5 text-sm font-semibold text-primary-foreground neon-pulse"
            >
              Join Now
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#memberships"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold hover:border-primary/50 transition-colors"
            >
              View Memberships
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
