import { Card } from "@/components/ui/card";
import { Baby, Heart, Dna, Users, Microscope, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import SuccessRateBadge from "@/components/SuccessRateBadge";

interface ServicesSectionProps {
  language: string;
}

const ServicesSection = ({ language }: ServicesSectionProps) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  
  const content = {
    tr: {
      title: "Tedavi ve Tıbbi Hizmetlerimiz",
      subtitle: "Uluslararası standartlarda, bireysel ihtiyaçlara özel çözümler",
      cta: "Detaylı Bilgi",
      services: [
        {
          icon: Baby,
          title: "IVF (ICSI) Tedavisi",
          description: "Modern embriyo transfer teknikleri ile yüksek başarı oranları",
          href: "/treatments/ivf-icsi",
          image: "ivf.png",
          successRate: "%76",
        },
        {
          icon: Heart,
          title: "Yumurta Donasyonu",
          description: "Titizlikle seçilmiş donörler ile güvenilir süreç",
          href: "/treatments/yumurta-donasyonu",
          image: "egg.avif",
          successRate: "%89",
        },
        {
          icon: Dna,
          title: "Genetik Testler (PGD/NGS)",
          description: "Gelişmiş genetik tarama ile sağlıklı embriyo seçimi",
          href: "/tibbi-hizmetler/genetik",
          image: "genetic_dna.jpg",
          successRate: "%99",
        },
        {
          icon: Users,
          title: "Cinsiyet Seçimi",
          description: "Yasal ve etik çerçevede aile dengeleme",
          href: "/treatments/cinsiyet-secimi",
          image: "gender.webp",
          successRate: "%99",
        },
        {
          icon: Microscope,
          title: "Embriyo Dondurma",
          description: "İleri teknoloji ile güvenli embriyo saklama",
          href: "/tibbi-hizmetler/embriyo-dondurma",
          image: "embryo_dondurma.jpg",
          successRate: "%95",
        },
        {
          icon: Stethoscope,
          title: "Sperm Donasyonu",
          description: "Detaylı sağlık kontrolünden geçmiş donörler",
          href: "/treatments/sperm-donasyonu",
          image: "sperm.jpg",
          successRate: "%82",
        },
      ],
    },
    en: {
      title: "Our Treatments & Services",
      subtitle: "International standards with personalized solutions",
      cta: "Learn More",
      services: [
        {
          icon: Baby,
          title: "IVF (ICSI) Treatment",
          description: "High success rates with modern embryo transfer techniques",
          href: "/treatments/ivf-icsi",
          image: "ivf.png",
          successRate: "76%",
        },
        {
          icon: Heart,
          title: "Egg Donation",
          description: "Reliable process with carefully selected donors",
          href: "/treatments/egg-donation",
          image: "egg.avif",
          successRate: "89%",
        },
        {
          icon: Dna,
          title: "Genetic Testing (PGD/NGS)",
          description: "Healthy embryo selection with advanced genetic screening",
          href: "/medical-services/genetics",
          image: "genetic_dna.jpg",
          successRate: "99%",
        },
        {
          icon: Users,
          title: "Gender Selection",
          description: "Family balancing within legal and ethical framework",
          href: "/treatments/gender-selection",
          image: "gender.webp",
          successRate: "99%",
        },
        {
          icon: Microscope,
          title: "Embryo Freezing",
          description: "Safe embryo storage with advanced technology",
          href: "/medical-services/embryo-freezing",
          image: "embryo_dondurma.jpg",
          successRate: "95%",
        },
        {
          icon: Stethoscope,
          title: "Sperm Donation",
          description: "Donors with comprehensive health screening",
          href: "/treatments/sperm-donation",
          image: "sperm.jpg",
          successRate: "82%",
        },
      ],
    },
    ar: {
      title: "علاجاتنا وخدماتنا",
      subtitle: "معايير دولية مع حلول شخصية",
      cta: "معرفة المزيد",
      services: [
        {
          icon: Baby,
          title: "علاج التلقيح الصناعي (ICSI)",
          description: "معدلات نجاح عالية مع تقنيات نقل الأجنة الحديثة",
          href: "/treatments/ivf-icsi",
          image: "ivf.png",
          successRate: "76%",
        },
        {
          icon: Heart,
          title: "التبرع بالبويضات",
          description: "عملية موثوقة مع متبرعين مختارين بعناية",
          href: "/treatments/egg-donation",
          image: "egg.avif",
          successRate: "89%",
        },
        {
          icon: Dna,
          title: "الاختبارات الجينية (PGD/NGS)",
          description: "اختيار الأجنة الصحية مع فحص جيني متقدم",
          href: "/medical-services/genetics",
          image: "genetic_dna.jpg",
          successRate: "99%",
        },
        {
          icon: Users,
          title: "اختيار الجنس",
          description: "توازن الأسرة ضمن إطار قانوني وأخلاقي",
          href: "/treatments/gender-selection",
          image: "gender.webp",
          successRate: "99%",
        },
        {
          icon: Microscope,
          title: "تجميد الأجنة",
          description: "تخزين آمن للأجنة بتقنية متقدمة",
          href: "/medical-services/embryo-freezing",
          image: "embryo_dondurma.jpg",
          successRate: "95%",
        },
        {
          icon: Stethoscope,
          title: "التبرع بالحيوانات المنوية",
          description: "متبرعون مع فحص صحي شامل",
          href: "/treatments/sperm-donation",
          image: "sperm.jpg",
          successRate: "82%",
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className={`group transition-all duration-1000 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: gridVisible ? `${index * 100}ms` : '0ms' }}
            >
              <Card className="group overflow-hidden hover:shadow-xl smooth-transition hover:-translate-y-2 h-full elevate">
                {/* Background Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <img 
                    src={`/${service.image}`} 
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Success Rate */}
                  {service.successRate && (
                    <div className="absolute top-4 right-4">
                      <SuccessRateBadge 
                        successRate={service.successRate} 
                        language={language}
                        variant="light"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary-foreground smooth-transition">
                      {service.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
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
