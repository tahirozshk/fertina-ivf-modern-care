import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import consultationImage from "@/assets/couple-consultation.jpg";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface CTASectionProps {
  language: string;
}

const CTASection = ({ language }: CTASectionProps) => {
  const { ref, isVisible } = useScrollAnimation();
  
  const content = {
    tr: {
      title: "Hayalinizdeki Aileye Giden Yolculuğa Başlayın",
      subtitle: "Ücretsiz ön görüşme için hemen bizimle iletişime geçin",
      cta1: "Randevu Al",
      cta2: "Hemen Ara",
    },
    en: {
      title: "Start Your Journey to Your Dream Family",
      subtitle: "Contact us now for a free initial consultation",
      cta1: "Book Appointment",
      cta2: "Call Now",
    },
    ar: {
      title: "ابدأ رحلتك نحو عائلتك المثالية",
      subtitle: "اتصل بنا الآن للحصول على استشارة أولية مجانية",
      cta1: "احجز موعد",
      cta2: "اتصل الآن",
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary/10 via-secondary/20 to-accent/30 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-foreground leading-relaxed">
                {t.subtitle}
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gap-2 w-full sm:w-auto">
                  <Calendar className="h-5 w-5" />
                  {t.cta1}
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                  <Phone className="h-5 w-5" />
                  {t.cta2}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="hidden lg:block relative h-full min-h-[400px]">
              <img
                src="/homepage.jpg"
                alt="Consultation"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
