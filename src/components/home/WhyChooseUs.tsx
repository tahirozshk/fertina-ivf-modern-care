import { Card } from "@/components/ui/card";
import { Award, Heart, Microscope, HeartHandshake } from "lucide-react";

interface WhyChooseUsProps {
  language: string;
}

const WhyChooseUs = ({ language }: WhyChooseUsProps) => {
  const content = {
    tr: {
      title: "Neden Fertina IVF?",
      intro: "Kliniğimizde sunulan kişiselleştirilmiş ebeveynlik yollarını keşfedin. Hizmetlerimiz, ilk doğurganlık değerlendirmeleri ve teşhislerden IVF ve ICSI gibi ileri düzey tedavilere kadar uzanır ve genetik testler ile kapsamlı donör programları gibi öncü seçenekleri içerir.",
      reasons: [
        {
          icon: Award,
          title: "Yüksek Başarı Oranları",
          description: "Olağanüstü başarı oranlarımız, dünya standartlarındaki doğurganlık uzmanlarımız ve usta embriyologlarımız arasındaki sinerjiğin doğrudan bir sonucudur.",
        },
        {
          icon: Heart,
          title: "Özel Tedavi",
          description: "Kişiselleştirilmiş tedavi planınız, tam concierge hizmetimizi içerir: Konaklama düzenlemelerinizi yapar ve tüm özel transferlerinizi ekstra ücret ödemeden sağlarız.",
        },
        {
          icon: Microscope,
          title: "En İyi Ekipman",
          description: "Son teknoloji kliniğimiz, hassasiyet için gelişmiş ultrason cihazlarından konforunuz için en son kurtarma sistemlerine kadar tüm ekipmanlarla kusursuz bakım sağlar.",
        },
        {
          icon: HeartHandshake,
          title: "Hasta Desteği",
          description: "İlk sorunuzdan son randevunuza kadar, size adanmış bir hasta koordinatörünüz olacak. Sorularınızı yanıtlamak ve kişisel yolculuğunuzun her adımında size rehberlik etmek için şefkatli, bire bir destek sağlıyoruz.",
        },
      ],
    },
    en: {
      title: "Why Choose Fertina IVF?",
      intro: "Discover the personalized pathways to parenthood offered at our clinic. Our services range from initial fertility assessments and diagnostics to advanced treatments like IVF and ICSI, and include pioneering options such as genetic testing and comprehensive donor programs.",
      reasons: [
        {
          icon: Award,
          title: "High Success Rates",
          description: "Our exceptional success rates are a direct result of the synergy between our world-class fertility specialists and master embryologists.",
        },
        {
          icon: Heart,
          title: "Bespoke Treatment",
          description: "Your customized treatment plan includes our complete concierge service: we arrange your accommodation and provide all private transfers at no extra cost.",
        },
        {
          icon: Microscope,
          title: "Top Equipment",
          description: "Our state-of-the-art clinic provides seamless care with all equipment on-site, from advanced ultrasound for precision to cutting-edge recovery systems for your comfort.",
        },
        {
          icon: HeartHandshake,
          title: "Patient Support",
          description: "From your first inquiry to your final appointment, you will have a dedicated patient coordinator. We provide compassionate, one-on-one support to answer your questions and guide you at every step of your personal journey.",
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t.intro}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {t.reasons.map((reason, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-2xl smooth-transition animate-slide-up border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground pt-2">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Decorative Element */}
        <div className="mt-16 text-center">
          <div className="inline-block px-8 py-4 rounded-full bg-primary/10 text-primary font-semibold">
            {language === "tr" ? "✨ Sizin İçin Buradayız ✨" : "✨ We're Here For You ✨"}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
