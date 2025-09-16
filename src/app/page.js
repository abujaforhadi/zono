import CardCircle from "@/components/CardCircle";
import CardLeftToRight from "@/components/CardLeftToRight";
import CardWithCarousel from "@/components/CardWithCarosol";
import Hero from "@/components/Hero";
import HeroScroll from "@/components/HeroScroll";
import ScrollZoom from "@/components/ScrollZoom";

export default function Home() {
  return (
    <>
      <Hero />
      <CardCircle />
      <CardLeftToRight />
      <HeroScroll />
      <ScrollZoom />
      <CardWithCarousel />

     
    </>
  );
}
