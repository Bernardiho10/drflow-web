import CallToAction from "@/components/call-to-action";
import FAQsThree from "@/components/faqs-3";
import FeaturesSection4 from "@/components/features-10";
import FeaturesSection5 from "@/components/features-12";
import Features from "@/components/features-4";
import FeaturesSection from "@/components/features-5";
import FeaturesSection2 from "@/components/features-8";
import FeaturesSection3 from "@/components/features-9";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";
import PricingComparator from "@/components/pricing-comparator";
import StatsSection from "@/components/stats";
import TeamSection from "@/components/team";

export default function Home() {
  return (
    < >
      <HeroSection />
      <Features />
      <CallToAction />
      <FeaturesSection />
      <FeaturesSection2 />
      <FeaturesSection3 />
      <FeaturesSection4 />
      <FeaturesSection5 />
      <Pricing />
      <PricingComparator />
      <StatsSection />
      <TeamSection />
      <FAQsThree />
      <FooterSection />
    </>
  );
}
