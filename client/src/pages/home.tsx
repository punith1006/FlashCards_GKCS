import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProductsSection from "@/components/products-section";
import FeaturesSection from "@/components/features-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { LearnAboutKeto } from "@/components/learn-about-keto";
import { DigitalFutureTestimonialsSection } from "@/components/digital-future-testimonials-section";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navigation />
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <LearnAboutKeto/>
      {/* <DigitalFutureTestimonialsSection/> */}
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
