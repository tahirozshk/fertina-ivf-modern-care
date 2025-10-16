import { Card } from "@/components/ui/card";
import { MapPin, Sun, Waves, Castle, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface CyprusLocationSectionProps {
  language: string;
}

const CyprusLocationSection = ({ language }: CyprusLocationSectionProps) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  
  const content = {
    tr: {
      title: "Kuzey Kıbrıs'ın Eşsiz Konumu ve Güzellikleri",
      subtitle: "Kuzey Kıbrıs, tarihi dokusu, doğal güzellikleri ve sakin yaşam tarzıyla adeta bir huzur adasıdır.",
      paragraph2: "Kuzey Kıbrıs sadece doğal güzellikleriyle değil, aynı zamanda tarihi zenginlikleriyle de büyüleyicidir. Girne Kalesi, Salamis Harabeleri, Bellapais Manastırı ve Mağusa surları gibi tarihi yapılar, adanın köklü geçmişini gözler önüne sermektedir.",
      paragraph3: "Fertina IVF, bu eşsiz coğrafyada, modern tıp olanaklarını huzurlu bir ortamla birleştirerek sizlere ayrıcalıklı bir deneyim sunmayı hedeflemektedir. Tedavi süreciniz boyunca adanın güzelliklerini keşfederken, kendinizi aynı zamanda bir tatilin içinde bulabilirsiniz.",
      paragraph4: "Kuzey Kıbrıs, kolay ulaşımı, güvenli ortamı, samimi insanları ve doğal güzellikleriyle yalnızca tedavi için değil, aynı zamanda ruhunuzu dinlendireceğiniz özel bir destinasyondur.",
      features: [
        {
          icon: Sun,
          title: "Güneşli İklim",
          description: "Yılın 300+ günü güneşli hava"
        },
        {
          icon: Waves,
          title: "Masum Kumsallar",
          description: "Altın sarısı kumsallar ve masmavi deniz"
        },
        {
          icon: Castle,
          title: "Tarihi Zenginlik",
          description: "Girne Kalesi, Salamis Harabeleri"
        },
        {
          icon: Heart,
          title: "Huzurlu Ortam",
          description: "Sakin yaşam tarzı ve güvenli çevre"
        }
      ]
    },
    en: {
      title: "Northern Cyprus's Unique Location and Beauty",
      subtitle: "Northern Cyprus is like an island of tranquility with its historical texture, natural beauty and peaceful lifestyle.",
      paragraph2: "Northern Cyprus is fascinating not only with its natural beauty, but also with its historical richness. Historical structures such as Kyrenia Castle, Salamis Ruins, Bellapais Monastery and Famagusta walls reveal the island's deep-rooted past.",
      paragraph3: "Fertina IVF aims to offer you a privileged experience by combining modern medical facilities with a peaceful environment in this unique geography. While discovering the beauties of the island during your treatment process, you can also find yourself in a vacation.",
      paragraph4: "Northern Cyprus is a special destination not only for treatment but also for resting your soul with its easy accessibility, safe environment, warm people and natural beauty.",
      features: [
        {
          icon: Sun,
          title: "Sunny Climate",
          description: "300+ sunny days a year"
        },
        {
          icon: Waves,
          title: "Pristine Beaches",
          description: "Golden sandy beaches and crystal blue sea"
        },
        {
          icon: Castle,
          title: "Historical Richness",
          description: "Kyrenia Castle, Salamis Ruins"
        },
        {
          icon: Heart,
          title: "Peaceful Environment",
          description: "Calm lifestyle and safe environment"
        }
      ]
    },
    ar: {
      title: "الموقع الفريد وجمال شمال قبرص",
      subtitle: "شمال قبرص هي جزيرة الهدوء بنسيجها التاريخي وجمالها الطبيعي وأسلوب حياتها السلمي.",
      paragraph2: "شمال قبرص ساحرة ليس فقط بجمالها الطبيعي، ولكن أيضًا بثرائها التاريخي. تكشف الهياكل التاريخية مثل قلعة كيرينيا وأطلال سلاميس ودير بيلابيس وأسوار فاماغوستا عن الماضي العميق للجزيرة.",
      paragraph3: "تهدف فيرتينا IVF إلى تقديم تجربة مميزة لك من خلال الجمع بين المرافق الطبية الحديثة مع بيئة هادئة في هذه الجغرافيا الفريدة. أثناء اكتشاف جمال الجزيرة خلال عملية العلاج، يمكنك أيضًا أن تجد نفسك في إجازة.",
      paragraph4: "شمال قبرص وجهة خاصة ليس فقط للعلاج ولكن أيضًا لراحة روحك مع سهولة الوصول إليها والبيئة الآمنة والناس الدافئة والجمال الطبيعي.",
      features: [
        {
          icon: Sun,
          title: "مناخ مشمس",
          description: "أكثر من 300 يوم مشمس في السنة"
        },
        {
          icon: Waves,
          title: "شواطئ نقية",
          description: "شواطئ رملية ذهبية وبحر أزرق كريستالي"
        },
        {
          icon: Castle,
          title: "ثراء تاريخي",
          description: "قلعة كيرينيا، أطلال سلاميس"
        },
        {
          icon: Heart,
          title: "بيئة هادئة",
          description: "أسلوب حياة هادئ وبيئة آمنة"
        }
      ]
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section className="py-12 sm:py-24 bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={titleRef} className={`text-center mb-8 sm:mb-16 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col items-center justify-center">
            <MapPin className="h-8 w-8 text-primary mb-6" />
            <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-foreground max-w-4xl mx-auto leading-relaxed">
              {t.subtitle}
            </h2>
          </div>
        </div>

        {/* Content Grid */}
        <div ref={contentRef} className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Main Content */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-1000 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 smooth-transition">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                {t.subtitle}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                {t.paragraph2}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                {t.paragraph3}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t.paragraph4}
              </p>
            </Card>
          </div>

          {/* Image Section */}
          <div className={`space-y-6 transition-all duration-1000 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl elevate relative">
                <img
                  src="/north_ cyprus.jpg"
                  alt="Northern Cyprus"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
            </div>
            
            <div className="text-center space-y-4 reveal-up">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full elevate">
                <Sun className="h-5 w-5 text-primary" />
                <span className="font-semibold text-primary">
                  {language === "tr" ? "300+ Güneşli Gün" : language === "ar" ? "300+ يوم مشمس" : "300+ Sunny Days"}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-accent/20 rounded-xl elevate reveal-left">
                  <Castle className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">
                    {language === "tr" ? "Tarihi Yapılar" : language === "ar" ? "المواقع التاريخية" : "Historical Sites"}
                  </p>
                </div>
                <div className="text-center p-4 bg-accent/20 rounded-xl elevate reveal-right">
                  <Waves className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">
                    {language === "tr" ? "Masum Kumsallar" : language === "ar" ? "شواطئ نقية" : "Pristine Beaches"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-10 sm:mt-16 text-center">
          <div className="inline-block px-8 py-4 rounded-full bg-primary/10 text-primary font-semibold">
            {language === "tr" ? "🏝️ Cennet Adası Kuzey Kıbrıs 🏝️" : language === "ar" ? "🏝️ جزيرة الجنة شمال قبرص 🏝️" : "🏝️ Paradise Island Northern Cyprus 🏝️"}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyprusLocationSection;
