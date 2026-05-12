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

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Zentrix Gym — Premium Fitness in Yerevan" },
      {
        name: "description",
        content:
          "Zentrix Gym in Yerevan: premium equipment, modern interior and motivating atmosphere. Memberships from 14,000 AMD. Open daily 07:00–23:00.",
      },
      { property: "og:title", content: "Zentrix Gym — Premium Fitness in Yerevan" },
      {
        property: "og:description",
        content: "Modern fitness experience in Yerevan with premium equipment and a motivating atmosphere.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
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
  );
}
