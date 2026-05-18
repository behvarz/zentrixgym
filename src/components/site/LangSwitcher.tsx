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
        className={`inline-flex items-center gap-2 rounded-full glass px-3 py-2 text-xs font-medium hover:border-primary/50 transition-colors ${
          compact ? "" : ""
        }`}
        aria-label="Language"
      >
        <Globe className="h-3.5 w-3.5 text-primary" />
        {current.label}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 min-w-[120px] glass rounded-xl p-1 z-50">
          {langs.map((l) => (
            <button
              key={l.code}
              onMouseDown={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-xs rounded-lg hover:bg-primary/15 transition-colors ${
                l.code === lang ? "text-primary" : ""
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
