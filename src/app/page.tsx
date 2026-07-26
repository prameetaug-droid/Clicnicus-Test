import BlurGradient from "@/components/BlurGradient";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroImage from "@/components/HeroImage";
import OurSolution from "@/components/OurSolution";
import Programs from "@/components/Programs";
import PurposeBuilt from "@/components/PurposeBuilt";
import StatsBar from "@/components/StatsBar";
import StatsSection from "@/components/StatsSection";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-page">
      <BlurGradient className="-left-[60px] bottom-[10%] h-[240px] w-[240px] opacity-30 md:h-[360px] md:w-[360px] md:opacity-40" />

      <Header />
      <Hero />
      <StatsBar />
      <HeroImage />
      <PurposeBuilt />
      <CtaBanner />
      <OurSolution />
      <StatsSection />
      <Programs />
      <Steps />
      <Testimonials />
      <Footer />
    </main>
  );
}
