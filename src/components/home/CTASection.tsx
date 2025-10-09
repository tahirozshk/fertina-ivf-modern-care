import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import consultationImage from "@/assets/couple-consultation.jpg";

interface CTASectionProps {
  language: string;
}

const CTASection = ({ language }: CTASectionProps) => {
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
  };

  const t = content[language as keyof typeof content];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary/10 via-secondary/20 to-accent/30">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground animate-fade-in">
                {t.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
                {t.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
                <a href="/contact">
                  <Button size="lg" className="gap-2 w-full sm:w-auto">
                  <Calendar className="h-5 w-5" />
                  {t.cta1}
                  </Button>
                </a>
                <a href="/contact">
                  <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                  <Phone className="h-5 w-5" />
                  {t.cta2}
                  </Button>
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="hidden lg:block relative h-full min-h-[400px]">
              <img
                src={consultationImage}
                alt="Consultation"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
