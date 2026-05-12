import { motion } from "framer-motion";
import { Check } from "lucide-react";

type Plan = {
  name: string;
  price: number;
  oldPrice?: number;
  period: string;
  perks: string[];
  popular?: boolean;
};

const plans: Plan[] = [
  { name: "8 Visits", price: 14000, oldPrice: 16000, period: "package", perks: ["Full gym access", "Locker use", "Flexible schedule"] },
  { name: "12 Visits", price: 16000, oldPrice: 18000, period: "package", perks: ["Full gym access", "Locker use", "Flexible schedule"] },
  { name: "15 Visits", price: 18000, oldPrice: 20000, period: "package", perks: ["Full gym access", "Locker use", "Flexible schedule"] },
  { name: "1 Month Unlimited", price: 25000, oldPrice: 30000, period: "month", perks: ["Unlimited visits", "All zones included", "Priority support"], popular: true },
  { name: "3 Months Unlimited", price: 55000, oldPrice: 75000, period: "3 months", perks: ["Unlimited visits", "All zones included", "Save 27%"] },
  { name: "6 Months Unlimited", price: 99000, oldPrice: 150000, period: "6 months", perks: ["Unlimited visits", "All zones included", "Save 34%"] },
  { name: "1 Year Unlimited", price: 199000, oldPrice: 300000, period: "year", perks: ["Unlimited visits", "All zones included", "Best value"] },
];

const fmt = (n: number) => n.toLocaleString("en-US");

export function Memberships() {
  return (
    <section id="memberships" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Memberships</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Choose your <span className="text-gradient">commitment</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Flexible visit packs and unlimited plans built around your goals. Cancel anytime, no
            hidden fees.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {plans.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                p.popular
                  ? "bg-gradient-to-b from-primary/15 to-card border border-primary/40 glow-border"
                  : "glass hover:border-primary/40"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-primary to-primary-glow px-3 py-1 text-[10px] uppercase tracking-widest text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight">{fmt(p.price)}</span>
                <span className="text-sm text-muted-foreground">AMD</span>
              </div>
              {p.oldPrice && (
                <div className="mt-1 text-xs text-muted-foreground/70 line-through">
                  {fmt(p.oldPrice)} AMD
                </div>
              )}
              <div className="mt-1 text-xs text-muted-foreground">per {p.period}</div>

              <ul className="mt-6 space-y-2.5">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{perk}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-7 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all ${
                  p.popular
                    ? "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground"
                    : "border border-border hover:border-primary/60 hover:bg-primary/10"
                }`}
              >
                Get Started
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
