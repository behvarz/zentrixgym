import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "./i18n";

const yandexMapEmbedUrl =
  "https://yandex.com/map-widget/v1/?ll=44.514442%2C40.213037&mode=search&oid=230800862758&ol=biz&z=16";
const yandexMapUrl =
  "https://yandex.com/maps/org/zentrix/230800862758/?ll=44.514442%2C40.213037&z=16&utm_source=share";
const googleMapUrl =
  "https://www.google.com/maps/place/ZENTRIX+GYM/@40.2129724,44.5145669,21z/data=!4m6!3m5!1s0x406aa3003d19fccb:0xc25b8c70d5642fb0!8m2!3d40.2129528!4d44.5144984!16s%2Fg%2F11z0yznbm6";

export function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.18em] sm:tracking-[0.3em] text-primary">{t("ct.kicker")}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold break-words">
            {t("ct.title1")} <span className="text-gradient">{t("ct.title2")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground break-words">{t("ct.desc")}</p>
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
              src={yandexMapEmbedUrl}
              className="h-[420px] sm:h-[480px] w-full border-0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="px-4 py-4 border-t border-border/60 flex flex-wrap gap-3">
              <a
                href={yandexMapUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 min-w-[150px] rounded-lg border border-border px-3 py-2 text-xs font-medium hover:border-primary/60 hover:text-primary transition-colors text-center break-words"
              >
                {t("ct.openYandexMaps")}
              </a>
              <a
                href={googleMapUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 min-w-[150px] rounded-lg border border-border px-3 py-2 text-xs font-medium hover:border-primary/60 hover:text-primary transition-colors text-center break-words"
              >
                {t("ct.openGoogleMaps")}
              </a>
            </div>
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-primary/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <Item icon={MapPin} title={t("ct.address")} value={t("ct.addressV")} />
            <Item icon={Phone} title={t("ct.phone")} value="+374 44 20 11 00" href="tel:+37444201100" />
            <Item icon={Clock} title={t("ct.hours")} value={t("ct.hoursV")} />
            <a
              href="https://www.instagram.com/zentrixgym"
              target="_blank"
              rel="noreferrer"
              className="block glass rounded-2xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center justify-between gap-3 min-w-0">
                <div className="flex items-center gap-4 min-w-0">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shrink-0">
                    <Instagram className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{t("ct.ig")}</div>
                    <div className="text-base font-semibold break-words">@zentrixgym</div>
                  </div>
                </div>
                <span className="text-primary transition-transform group-hover:translate-x-1 shrink-0">→</span>
              </div>
            </a>

            <a
              href="tel:+37444201100"
              className="block text-center rounded-2xl bg-gradient-to-r from-primary to-primary-glow px-6 py-5 font-semibold text-primary-foreground neon-pulse break-words"
            >
              {t("ct.callCta")}
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
      className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-primary/50 transition-colors min-w-0"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary shrink-0">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
        <div className="text-base font-medium break-words">{value}</div>
      </div>
    </Comp>
  );
}
