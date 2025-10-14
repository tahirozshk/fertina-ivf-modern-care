import { Card } from "@/components/ui/card";
import { Award, Heart, Microscope, HeartHandshake } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface WhyChooseUsProps {
  language: string;
}

const WhyChooseUs = ({ language }: WhyChooseUsProps) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  
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
        <div ref={titleRef} className={`text-center mb-12 max-w-4xl mx-auto transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t.intro}
          </p>
        </div>

        {/* Content with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
          {/* Image */}
          <div ref={imageRef} className={`relative transition-all duration-1000 ${imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="rounded-3xl overflow-hidden shadow-2xl elevate">
              <img
                src="/neden.jpg"
                alt="Fertina IVF Team"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/20 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/30 rounded-2xl -z-10" />
          </div>

          {/* Reasons Grid - 2x2 */}
          <div ref={gridRef} className="grid sm:grid-cols-2 gap-6">
            {t.reasons.map((reason, index) => (
              <Card
                key={index}
                className={`p-6 hover:shadow-2xl smooth-transition border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm transition-all duration-1000 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: gridVisible ? `${index * 80}ms` : '0ms' }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0">
                      <reason.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground pt-2">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-16 text-center">
          <div className="inline-block px-8 py-4 rounded-full bg-primary/10 text-primary font-semibold elevate smooth-transition reveal-fade hover:scale-105">
            {language === "tr" ? "✨ Sizin İçin Buradayız ✨" : "✨ We're Here For You ✨"}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
