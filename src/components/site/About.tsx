import { motion } from "framer-motion";
import g1 from "@/assets/g1.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import { Counter } from "./Counter";

export function About() {
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
          <span className="text-xs uppercase tracking-[0.3em] text-primary">About Zentrix</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
            Built for those who <span className="text-gradient">don't settle</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Zentrix Gym is designed for people who want strength, discipline, confidence and real
            transformation. We've combined modern equipment, a motivating atmosphere and a
            professional environment to create one of Yerevan's premier training spaces.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Whether you're starting your first program or chasing a personal record, the energy
            here moves with you.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            <Stat value={1500} suffix="+" label="Members" />
            <Stat value={25} suffix="+" label="Coaches" />
            <Stat value={16} label="Hours daily" />
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
