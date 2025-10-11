import { Card } from "@/components/ui/card";
import { Phone, Plane, CheckCircle } from "lucide-react";

interface IVFJourneySectionProps {
  language: string;
}

const IVFJourneySection = ({ language }: IVFJourneySectionProps) => {
  const content = {
    tr: {
      title: "IVF Yolculuğunuz",
      subtitle: "IVF yolculuğunuz baştan sona düşünceli bir şekilde planlanır, her detay özenle ele alınır",
      phases: [
        {
          title: "Yolculuğunuzdan Önce",
          icon: Phone,
          color: "bg-orange-500",
          steps: [
            "Ücretsiz danışmanlık için bizimle iletişime geçin",
            "Programlarımız hakkında bilgi alın ve kişiselleştirilmiş tedavi önerileri alın",
            "Geçmiş deneyimlerinizin tüm yönlerinin dikkatli değerlendirilmesi",
            "Tüm sorularınızın net cevaplarını alın",
            "Kıbrıs uçuşunuzu biz hallederiz, biletlerden giriş gereksinimlerine kadar"
          ]
        },
        {
          title: "Kıbrıs'ta",
          icon: Plane,
          color: "bg-orange-500",
          steps: [
            "Havaalanında karşılanacak ve seçtiğiniz konaklamaya transfer edileceksiniz",
            "Doktorunuzla buluşun ve ücretsiz ultrason muayenesi alın",
            "Doktorunuzun reçete ettiği tüm gerekli testleri tamamlayın",
            "Özel ihtiyaçlarınıza uygun en uygun tedavi planına başlayın",
            "Ekibimiz sizi Kıbrıs'taki en iyi aktiviteler konusunda yönlendirecek, yemek ve alışverişten gezilere kadar"
          ]
        },
        {
          title: "Tedavinizden Sonra",
          icon: CheckCircle,
          color: "bg-orange-500",
          steps: [
            "Dönüşünüzden sonra uzmanlarımızla iletişimde kalın, ilerlemenizi takip eder ve olumlu sonuçları destekleriz",
            "Son olarak, ebeveynliğin sevincini kutlayın",
            "Kalışınızın sonunda ücretsiz havaalanı transferinden yararlanın"
          ]
        }
      ]
    },
    en: {
      title: "Your IVF Journey",
      subtitle: "Your IVF journey is thoughtfully planned from start to finish, with every detail taken care of",
      phases: [
        {
          title: "Before Your Journey",
          icon: Phone,
          color: "bg-orange-500",
          steps: [
            "Contact us for a free consultation",
            "Learn about our programs and receive personalized treatment recommendations",
            "Careful consideration of all aspects of your previous experiences",
            "Get clear answers to all your questions",
            "We'll handle your Cyprus flight, from tickets to entry requirements"
          ]
        },
        {
          title: "In Cyprus",
          icon: Plane,
          color: "bg-orange-500",
          steps: [
            "You will be welcomed upon arrival at the airport and transferred to your chosen accommodation",
            "Meet with your doctor and receive a complimentary ultrasound examination",
            "Complete all necessary tests as prescribed by your physician",
            "Begin the most appropriate treatment plan tailored to your specific needs",
            "Our team will guide you through the best activities in Cyprus, from dining and shopping to sightseeing"
          ]
        },
        {
          title: "After Your Treatment",
          icon: CheckCircle,
          color: "bg-orange-500",
          steps: [
            "Stay in touch with our specialists after you return, as we monitor your progress and support positive outcomes",
            "Finally, celebrate the joy of parenthood",
            "Enjoy a complimentary airport transfer at the end of your stay"
          ]
        }
      ]
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section className="py-24 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Journey Phases */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {t.phases.map((phase, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-2xl smooth-transition animate-slide-up border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 rounded-full ${phase.color} flex items-center justify-center mx-auto mb-4`}>
                  <phase.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {phase.title}
                </h3>
              </div>

              <div className="space-y-4">
                {phase.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>


        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block px-8 py-4 rounded-full bg-primary/10 text-primary font-semibold">
            {language === "tr" ? "🚀 Yolculuğunuza Başlayın 🚀" : "🚀 Start Your Journey 🚀"}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IVFJourneySection;
