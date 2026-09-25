import { Hero } from "@/components/Hero";
import { ProductSection } from "@/components/ProductSection";
import { Accessories } from "@/components/Accessories";
import { About } from "@/components/About";
import { Location } from "@/components/Location";
import { Instagram } from "@/components/Instagram";
import { Contact } from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Hero />
      <ProductSection />
      <Accessories />
      <About />
      <Location />
      <Instagram />
      <Contact />
    </>
  );
}
