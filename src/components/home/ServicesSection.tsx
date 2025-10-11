import { Card } from "@/components/ui/card";
import { Baby, Heart, Dna, Users, Microscope, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

interface ServicesSectionProps {
  language: string;
}

const ServicesSection = ({ language }: ServicesSectionProps) => {
  const content = {
    tr: {
      title: "Tedavi ve Tıbbi Hizmetlerimiz",
      subtitle: "Uluslararası standartlarda, bireysel ihtiyaçlara özel çözümler",
      services: [
        {
          icon: Baby,
          title: "IVF (ICSI) Tedavisi",
          description: "Modern embriyo transfer teknikleri ile yüksek başarı oranları",
          href: "/treatments/ivf-icsi",
        },
        {
          icon: Heart,
          title: "Yumurta Donasyonu",
          description: "Titizlikle seçilmiş donörler ile güvenilir süreç",
          href: "/treatments/yumurta-donasyonu",
        },
        {
          icon: Dna,
          title: "Genetik Testler (PGD/NGS)",
          description: "Gelişmiş genetik tarama ile sağlıklı embriyo seçimi",
          href: "/tibbi-hizmetler/genetik",
        },
        {
          icon: Users,
          title: "Cinsiyet Seçimi",
          description: "Yasal ve etik çerçevede aile dengeleme",
          href: "/treatments/cinsiyet-secimi",
        },
        {
          icon: Microscope,
          title: "Embriyo Dondurma",
          description: "İleri teknoloji ile güvenli embriyo saklama",
          href: "/tibbi-hizmetler/embriyo-dondurma",
        },
        {
          icon: Stethoscope,
          title: "Sperm Donasyonu",
          description: "Detaylı sağlık kontrolünden geçmiş donörler",
          href: "/treatments/sperm-donasyonu",
        },
      ],
    },
    en: {
      title: "Our Treatments & Services",
      subtitle: "International standards with personalized solutions",
      services: [
        {
          icon: Baby,
          title: "IVF (ICSI) Treatment",
          description: "High success rates with modern embryo transfer techniques",
          href: "/treatments/ivf-icsi",
        },
        {
          icon: Heart,
          title: "Egg Donation",
          description: "Reliable process with carefully selected donors",
          href: "/treatments/egg-donation",
        },
        {
          icon: Dna,
          title: "Genetic Testing (PGD/NGS)",
          description: "Healthy embryo selection with advanced genetic screening",
          href: "/medical-services/genetics",
        },
        {
          icon: Users,
          title: "Gender Selection",
          description: "Family balancing within legal and ethical framework",
          href: "/treatments/gender-selection",
        },
        {
          icon: Microscope,
          title: "Embryo Freezing",
          description: "Safe embryo storage with advanced technology",
          href: "/medical-services/embryo-freezing",
        },
        {
          icon: Stethoscope,
          title: "Sperm Donation",
          description: "Donors with comprehensive health screening",
          href: "/treatments/sperm-donation",
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="p-6 h-full hover:shadow-lg smooth-transition hover:-translate-y-1 bg-card">
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 smooth-transition">
                    <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground smooth-transition" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary smooth-transition">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
