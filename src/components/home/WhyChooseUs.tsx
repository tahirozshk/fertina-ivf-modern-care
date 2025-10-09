import { Card } from "@/components/ui/card";
import { Award, Users2, Building2, TrendingUp } from "lucide-react";
import labImage from "@/assets/laboratory.jpg";

interface WhyChooseUsProps {
  language: string;
}

const WhyChooseUs = ({ language }: WhyChooseUsProps) => {
  const content = {
    tr: {
      title: "Neden Fertina IVF?",
      subtitle: "Güven, deneyim ve başarının bir araya geldiği yer",
      reasons: [
        {
          icon: Award,
          title: "Yüksek Başarı Oranları",
          stat: "%76",
          description: "IVF tedavilerinde uluslararası ortalamanın üzerinde başarı",
        },
        {
          icon: Users2,
          title: "Deneyimli Kadro",
          stat: "15+ Yıl",
          description: "Alanında uzman doktor ve embriyolog ekibi",
        },
        {
          icon: Building2,
          title: "Modern Laboratuvar",
          stat: "Class A",
          description: "Son teknoloji ekipman ve steril ortam",
        },
        {
          icon: TrendingUp,
          title: "Donasyon Başarısı",
          stat: "%89",
          description: "Yumurta donasyon programında yüksek başarı oranı",
        },
      ],
    },
    en: {
      title: "Why Choose Fertina IVF?",
      subtitle: "Where trust, experience and success come together",
      reasons: [
        {
          icon: Award,
          title: "High Success Rates",
          stat: "76%",
          description: "Above international average success in IVF treatments",
        },
        {
          icon: Users2,
          title: "Experienced Team",
          stat: "15+ Years",
          description: "Expert doctors and embryologists in their field",
        },
        {
          icon: Building2,
          title: "Modern Laboratory",
          stat: "Class A",
          description: "State-of-the-art equipment and sterile environment",
        },
        {
          icon: TrendingUp,
          title: "Donation Success",
          stat: "89%",
          description: "High success rate in egg donation program",
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={labImage}
                alt="Modern Laboratory"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/20 rounded-3xl -z-10" />
          </div>

          {/* Reasons */}
          <div className="grid sm:grid-cols-2 gap-6">
            {t.reasons.map((reason, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg smooth-transition animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <reason.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {reason.stat}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
