import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  const [language, setLanguage] = useState("tr");

  return (
    <div className="min-h-screen">
      <Navigation language={language} setLanguage={setLanguage} />
      
      {/* Add padding to account for fixed navigation */}
      <div className="pt-20">
        <HeroSection language={language} />
        <ServicesSection language={language} />
        <WhyChooseUs language={language} />
        <TestimonialsSection language={language} />
        <CTASection language={language} />
      </div>

      <Footer language={language} />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
