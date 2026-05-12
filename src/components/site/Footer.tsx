import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-12">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-bold">
              Z
            </span>
            <span className="font-display text-lg font-semibold">
              ZENTRIX<span className="text-primary">.</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Premium fitness experience in Yerevan. Built for strength, discipline and
            transformation.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["Memberships", "#memberships"],
              ["About", "#about"],
              ["Facilities", "#facilities"],
              ["Gallery", "#gallery"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={l}>
                <a href={h} className="hover:text-primary transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Visit</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Griboyedov 23/4, Yerevan</li>
            <li>+374 44 20 11 00</li>
            <li>Daily · 07:00 – 23:00</li>
          </ul>
          <a
            href="https://www.instagram.com/zentrixgym"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
          >
            <Instagram className="h-4 w-4" /> @zentrixgym
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Zentrix Gym. All rights reserved.</div>
          <div>Yerevan, Armenia</div>
        </div>
      </div>
    </footer>
  );
}
