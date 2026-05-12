import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#memberships", label: "Memberships" },
  { href: "#about", label: "About" },
  { href: "#facilities", label: "Facilities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-bold shadow-[var(--shadow-glow)]">
            Z
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            ZENTRIX<span className="text-primary">.</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#memberships"
          className="hidden md:inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-shadow"
        >
          Join Now
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
        >
          <span className="block h-px w-5 bg-foreground relative before:content-[''] before:absolute before:-top-1.5 before:left-0 before:h-px before:w-5 before:bg-foreground after:content-[''] after:absolute after:top-1.5 after:left-0 after:h-px after:w-5 after:bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="md:hidden glass mt-3 mx-6 rounded-xl p-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm">
              {l.label}
            </a>
          ))}
          <a
            href="#memberships"
            onClick={() => setOpen(false)}
            className="rounded-full bg-primary px-4 py-2 text-sm text-center text-primary-foreground"
          >
            Join Now
          </a>
        </div>
      )}
    </motion.header>
  );
}
