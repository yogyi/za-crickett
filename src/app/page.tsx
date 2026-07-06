import { HeroCarousel } from "@/components/home/HeroCarousel";
import { StatsMarquee } from "@/components/home/StatsMarquee";
import { QuickNavPills } from "@/components/home/QuickNavPills";
import { TrustBar } from "@/components/home/TrustBar";
import { BatShowcase3D } from "@/components/home/BatShowcase3D";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CricketToolkit } from "@/components/home/CricketToolkit";
import { SingaporePitchGuide } from "@/components/home/SingaporePitchGuide";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { AthleteSpotlight } from "@/components/home/AthleteSpotlight";
import { BundleSection } from "@/components/home/BundleSection";
import { ScrollableReviews } from "@/components/home/ScrollableReviews";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <StatsMarquee />
      <QuickNavPills />
      <TrustBar />
      <BatShowcase3D />
      <CategoryGrid />
      <FeaturedProducts />
      <HowItWorks />
      <CricketToolkit />
      <SingaporePitchGuide />
      <WhyChooseUs />
      <AthleteSpotlight />
      <BundleSection />
      <ScrollableReviews />
      <FAQ />
      <FinalCTA />
    </>
  );
}
