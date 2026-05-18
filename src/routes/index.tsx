import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Memberships } from "@/components/site/Memberships";
import { About } from "@/components/site/About";
import { Facilities } from "@/components/site/Facilities";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { LanguageProvider } from "@/components/site/i18n";
import logo from "@/assets/logo.png";

const siteUrl = (import.meta.env.VITE_SITE_URL || "https://zentrixgym.vercel.app").replace(/\/$/, "");
const pageUrl = `${siteUrl}/`;
const ogImageUrl = logo.startsWith("http") ? logo : `${siteUrl}${logo}`;
const pageTitle = "Zentrix Gym | Պրեմիում ֆիթնես Երևանում";
const pageDescription =
  "Zentrix Gym՝ պրեմիում ֆիթնես ակումբ Երևանում։ Հասցե՝ Գրիբոյեդով 23/4, Երևան։";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "hy_AM" },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: ogImageUrl },
      { property: "og:image:alt", content: "Zentrix Gym լոգո" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
      { name: "twitter:image", content: ogImageUrl },
    ],
  }),
});

function Index() {
  return (
    <LanguageProvider>
      <main className="relative">
        <Nav />
        <Hero />
        <Memberships />
        <About />
        <Facilities />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
