import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface TestimonialsSectionProps {
  language: string;
}

const TestimonialsSection = ({ language }: TestimonialsSectionProps) => {
  const content = {
    tr: {
      title: "Hasta Yorumları",
      subtitle: "Mutlu ailelerimizin deneyimleri",
      testimonials: [
        {
          name: "Ayşe & Mehmet K.",
          location: "İstanbul, Türkiye",
          text: "3 yıllık zorlu sürecin ardından Fertina IVF'de hayalimize kavuştuk. Profesyonel yaklaşım, detaylı bilgilendirme ve samimi ilgi için teşekkür ederiz.",
          rating: 5,
        },
        {
          name: "Sarah & John M.",
          location: "London, UK",
          text: "The team at Fertina IVF made our journey so much easier. From the first consultation to the successful treatment, everything was handled with care and expertise.",
          rating: 5,
        },
        {
          name: "Elif & Can Y.",
          location: "Ankara, Türkiye",
          text: "Yumurta donasyonu programı sayesinde bebeğimize kavuştuk. Kıbrıs'a gelmek en doğru karardı. Ekibin deneyimi ve teknolojik altyapı muhteşemdi.",
          rating: 5,
        },
      ],
    },
    en: {
      title: "Patient Testimonials",
      subtitle: "Experiences from our happy families",
      testimonials: [
        {
          name: "Ayşe & Mehmet K.",
          location: "Istanbul, Turkey",
          text: "After 3 challenging years, we achieved our dream at Fertina IVF. Thank you for the professional approach, detailed information and sincere attention.",
          rating: 5,
        },
        {
          name: "Sarah & John M.",
          location: "London, UK",
          text: "The team at Fertina IVF made our journey so much easier. From the first consultation to the successful treatment, everything was handled with care and expertise.",
          rating: 5,
        },
        {
          name: "Elif & Can Y.",
          location: "Ankara, Turkey",
          text: "We met our baby thanks to the egg donation program. Coming to Cyprus was the right decision. The team's experience and technological infrastructure were amazing.",
          rating: 5,
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg smooth-transition animate-slide-up bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
