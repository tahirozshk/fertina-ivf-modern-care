import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";

interface HeroSectionProps {
  language: string;
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const content = {
    tr: {
      title: "Bilim ve Umudun Buluştuğu Yer",
      subtitle:
        "Modern teknoloji ve deneyimli kadromuzla ailenizi tamamlama yolculuğunuzda yanınızdayız.",
      cta1: "Randevu Al",
      cta2: "Daha Fazla Bilgi",
    },
    en: {
      title: "Where Science Meets Hope",
      subtitle:
        "With modern technology and our experienced team, we support you on your journey to complete your family.",
      cta1: "Book Appointment",
      cta2: "Learn More",
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fertina IVF Clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group">
              {t.cta1}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 smooth-transition" />
            </Button>
            <Button size="lg" variant="outline">
              {t.cta2}
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
