import { HeroCarousel } from "@/components/home/HeroCarousel";
import { QuickNavPills } from "@/components/home/QuickNavPills";
import { TrustBar } from "@/components/home/TrustBar";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { AthleteSpotlight } from "@/components/home/AthleteSpotlight";
import { ScrollableReviews } from "@/components/home/ScrollableReviews";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <QuickNavPills />
      <TrustBar />
      <FeaturedProducts />
      <AthleteSpotlight />
      <ScrollableReviews />
      <FAQ />
      <FinalCTA />
    </>
  );
}
