import { motion } from "framer-motion";
import { useI18n } from "./i18n";

type PriceRow = {
  labelKey: string;
  price: number;
};

type PricingCard = {
  timeKey?: string;
  rows: PriceRow[];
};

type PricingGroup = {
  titleKey: string;
  cards: PricingCard[];
};

const sessionGroup: PricingGroup = {
  titleKey: "mb.section.sessions",
  cards: [
    {
      timeKey: "mb.time.day",
      rows: [
        { labelKey: "plan.8", price: 12000 },
        { labelKey: "plan.12", price: 14000 },
        { labelKey: "plan.15", price: 16000 },
      ],
    },
    {
      timeKey: "mb.time.full",
      rows: [
        { labelKey: "plan.8", price: 14000 },
        { labelKey: "plan.12", price: 16000 },
        { labelKey: "plan.15", price: 18000 },
      ],
    },
  ],
};

const unlimitedGroup: PricingGroup = {
  titleKey: "mb.section.unlimited",
  cards: [
    {
      timeKey: "mb.time.day",
      rows: [
        { labelKey: "plan.1m", price: 23000 },
        { labelKey: "plan.3m", price: 50000 },
        { labelKey: "plan.6m", price: 100000 },
        { labelKey: "plan.1y", price: 170000 },
      ],
    },
    {
      timeKey: "mb.time.full",
      rows: [
        { labelKey: "plan.1m", price: 25000 },
        { labelKey: "plan.3m", price: 55000 },
        { labelKey: "plan.6m", price: 110000 },
        { labelKey: "plan.1y", price: 200000 },
      ],
    },
  ],
};

const dailyGroup: PricingGroup = {
  titleKey: "mb.section.daily",
  cards: [
    {
      timeKey: "mb.time.day",
      rows: [{ labelKey: "mb.row.daily", price: 2000 }],
    },
    {
      timeKey: "mb.time.full",
      rows: [{ labelKey: "mb.row.daily", price: 3000 }],
    },
  ],
};

const trainerGroup: PricingGroup = {
  titleKey: "mb.section.trainer",
  cards: [
    {
      rows: [
        { labelKey: "plan.8", price: 35000 },
        { labelKey: "plan.12", price: 40000 },
        { labelKey: "plan.15", price: 45000 },
        { labelKey: "mb.row.dailyFull", price: 6000 },
        { labelKey: "mb.row.dailyUntil16", price: 5000 },
      ],
    },
  ],
};

const fmt = (n: number) => n.toLocaleString("de-DE");

export function Memberships() {
  const { t } = useI18n();
  const groups = [sessionGroup, unlimitedGroup, dailyGroup, trainerGroup];

  return (
    <section id="memberships" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.18em] sm:tracking-[0.3em] text-primary">{t("mb.kicker")}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold break-words">
            {t("mb.title1")} <span className="text-gradient">{t("mb.title2")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground break-words">{t("mb.desc")}</p>
        </div>

        <div className="mt-16 space-y-12">
          {groups.map((group, groupIndex) => (
            <div key={group.titleKey}>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-wide">{t(group.titleKey)}</h3>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                {group.cards.map((card, cardIndex) => (
                  <motion.article
                    key={`${group.titleKey}-${card.timeKey ?? "single"}-${cardIndex}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.45, delay: groupIndex * 0.04 + cardIndex * 0.04 }}
                    className="glass rounded-2xl p-6 hover:border-primary/40 transition-colors"
                  >
                    {card.timeKey && (
                      <div className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {t(card.timeKey)}
                      </div>
                    )}
                    <ul className="mt-4 space-y-3">
                      {card.rows.map((row) => (
                        <li key={`${row.labelKey}-${row.price}`} className="flex items-center justify-between gap-4">
                          <span className="text-sm sm:text-base text-muted-foreground break-words">{t(row.labelKey)}</span>
                          <span className="text-base sm:text-lg font-bold whitespace-nowrap">
                            {fmt(row.price)} {t("mb.amd")}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
