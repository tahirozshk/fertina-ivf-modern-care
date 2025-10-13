import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CustomerCategoriesSection from "@/components/home/CustomerCategoriesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import IVFJourneySection from "@/components/home/IVFJourneySection";
import CyprusLocationSection from "@/components/home/CyprusLocationSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  const [language, setLanguage] = useState("tr");

  return (
    <div className="min-h-screen">
      <Navigation language={language} setLanguage={setLanguage} />
      
      {/* Add padding to account for fixed navigation */}
      <div className="pt-20 sm:pt-30">
        <HeroSection language={language} />
        <ServicesSection language={language} />
        <WhyChooseUs language={language} />
        <CustomerCategoriesSection language={language} />
        <IVFJourneySection language={language} />
        <TestimonialsSection language={language} />
        <CyprusLocationSection language={language} />
        <CTASection language={language} />
      </div>

      <Footer language={language} />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
