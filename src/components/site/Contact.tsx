import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Contact</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Visit us in <span className="text-gradient">Yerevan</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Drop in for a tour, meet the team and feel the energy yourself.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl overflow-hidden relative"
          >
            <iframe
              title="Zentrix Gym map"
              src="https://www.google.com/maps?q=Griboyedov+23/4,+Yerevan,+Armenia&output=embed"
              className="w-full h-[480px] grayscale contrast-125 opacity-90"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-primary/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <Item icon={MapPin} title="Address" value="Griboyedov 23/4, Yerevan, Armenia" />
            <Item icon={Phone} title="Phone" value="+374 44 20 11 00" href="tel:+37444201100" />
            <Item icon={Clock} title="Working Hours" value="Every day · 07:00 – 23:00" />
            <a
              href="https://www.instagram.com/zentrixgym"
              target="_blank"
              rel="noreferrer"
              className="block glass rounded-2xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                    <Instagram className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Instagram</div>
                    <div className="text-base font-semibold">@zentrixgym</div>
                  </div>
                </div>
                <span className="text-primary transition-transform group-hover:translate-x-1">→</span>
              </div>
            </a>

            <a
              href="tel:+37444201100"
              className="block text-center rounded-2xl bg-gradient-to-r from-primary to-primary-glow px-6 py-5 font-semibold text-primary-foreground neon-pulse"
            >
              Call Now to Book a Tour
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Item({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  href?: string;
}) {
  const Comp: any = href ? "a" : "div";
  return (
    <Comp
      href={href}
      className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-primary/50 transition-colors"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
        <div className="text-base font-medium">{value}</div>
      </div>
    </Comp>
  );
}
