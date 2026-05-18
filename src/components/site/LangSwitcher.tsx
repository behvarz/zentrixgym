import { useI18n, type Lang } from "./i18n";
import { useState } from "react";
import { Globe } from "lucide-react";

const langs: { code: Lang; label: string }[] = [
  { code: "hy", label: "Հայ" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "fa", label: "فارسی" },
];

export function LangSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const current = langs.find((l) => l.code === lang)!;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className={`inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-colors hover:border-primary/60 hover:bg-black/60 ${
          compact ? "" : ""
        }`}
        aria-label="Language"
      >
        <Globe className="h-3.5 w-3.5 text-primary" />
        <span className="max-w-[72px] truncate leading-none">{current.label}</span>
      </button>
      {open && (
        <div className="absolute right-0 z-50 mt-2 min-w-[132px] rounded-xl border border-white/20 bg-black/65 p-1 text-white backdrop-blur-xl shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
          {langs.map((l) => (
            <button
              key={l.code}
              onMouseDown={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={`w-full rounded-lg px-3 py-2 text-start text-xs font-medium transition-colors hover:bg-primary/20 ${
                l.code === lang ? "bg-primary/20 text-primary-foreground" : "text-white"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
