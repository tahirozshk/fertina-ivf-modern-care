import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Dna, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/hooks/use-language";

const PGDService = () => {
  const { language, setLanguage } = useLanguage();
  const dir = language === "ar" ? "rtl" : "ltr";
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation();
  const { ref: whatRef, isVisible: whatVisible } = useScrollAnimation();
  const { ref: recTitleRef, isVisible: recTitleVisible } = useScrollAnimation();
  const { ref: recGridRef, isVisible: recGridVisible } = useScrollAnimation();
  const { ref: howTitleRef, isVisible: howTitleVisible } = useScrollAnimation();
  const { ref: howGridRef, isVisible: howGridVisible } = useScrollAnimation();
  const { ref: advTitleRef, isVisible: advTitleVisible } = useScrollAnimation();
  const { ref: advGridRef, isVisible: advGridVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const content = {
    tr: {
      title: "Preimplantasyon Genetik Tanı (PGD)",
      subtitle: "Sağlıklı bir gelecek için genetik güvence",
      intro:
        "Kromozom dizilimi yaşam boyu belirleyicidir. Genetik dizilimdeki hatalar embriyo gelişiminin durmasına veya ciddi bozukluklara yol açabilir. Erken düşüklerin %50-60'ı embriyodaki kromozomal anormalliklerden kaynaklanır; risk özellikle 35 yaş üzeri kadınlarda artar.",
      description:
        "Fertina IVF olarak, bebek sahibi olma yolculuğunuzda genetik açıdan sağlıklı bir çocuk için en gelişmiş yöntemleri sunuyoruz. Bu yöntemlerden biri Preimplantasyon Genetik Tanı (PGD)'dir.",
      whatTitle: "PGD Nedir?",
      whatDesc:
        "PGD, tüp bebek sırasında laboratuvarda oluşan embriyoların genetik açıdan incelenmesini sağlar. Genetik hastalık taşıyan embriyolar tespit edilir ve yalnızca sağlıklı olanlar rahme transfer edilir.",
      recommendedTitle: "PGD şu durumlarda önerilir:",
      recommended: [
        "Ailede kalıtsal bir hastalık varsa",
        "Anne veya baba genetik hastalık taşıyıcısıysa",
        "Tekrarlayan düşük öyküsü varsa",
        "Daha önce genetik hastalıklı bebek dünyaya geldiyse",
        "35 yaş ve üzeri anne adaylarında",
        "Cinsiyetle bağlantılı genetik hastalık riski olan ailelerde",
      ],
      howTitle: "PGD Nasıl Uygulanır?",
      steps: [
        "Tüp bebek tedavisiyle embriyolar elde edilir",
        "5. gün (blastokist) aşamasında embriyoların trofoektoderminden biyopsi alınır",
        "Biyopsi hücreleri genetik laboratuvarda analiz edilir",
        "13, 18, 21, X ve Y kromozomları başta olmak üzere sayısal/yapısal değerlendirme yapılır",
        "Patau, Edwards, Down, Turner, Klinefelter sendromları dışlanır",
        "Genetik olarak sağlıklı embriyolar seçilerek transfer edilir",
      ],
      advantagesTitle: "PGD’nin Avantajları",
      advantages: [
        "Genetik hastalık taşıma riskini azaltır",
        "Sağlıklı embriyo seçimini sağlar",
        "Düşük riskini azaltır",
        "Gebelik sürecine gönül rahatlığıyla başlamayı destekler",
      ],
      note:
        "Daha fazla bilgi almak veya uzmanlarımızla görüşmek için bize ulaşabilirsiniz. Fertina IVF, sağlıklı nesiller için yanınızda.",
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "Preimplantation Genetic Diagnosis (PGD)",
      subtitle: "Genetic assurance for a healthy future",
      intro:
        "Chromosomal composition is decisive for health. Errors in genetic makeup can halt embryo development or cause serious disorders. 50–60% of early miscarriages stem from chromosomal abnormalities; risk increases especially over age 35.",
      description:
        "At Fertina IVF, we offer advanced methods to help you have a genetically healthy child. One of these is PGD.",
      whatTitle: "What is PGD?",
      whatDesc:
        "PGD enables genetic analysis of embryos created during IVF. It identifies embryos carrying genetic disease and allows transfer of only healthy embryos.",
      recommendedTitle: "PGD is recommended when:",
      recommended: [
        "Family history of hereditary disease",
        "Either parent is a carrier",
        "Recurrent miscarriages",
        "Previous child with genetic disease",
        "Women aged 35+",
        "Risk of sex-linked genetic disease",
      ],
      howTitle: "How is PGD Performed?",
      steps: [
        "Embryos are obtained via IVF",
        "On day 5 (blastocyst), trophectoderm biopsy is taken",
        "Biopsied cells are analyzed in a genetics laboratory",
        "Chromosomes 13, 18, 21, X and Y are assessed for number/structure",
        "Excludes Patau, Edwards, Down, Turner and Klinefelter syndromes",
        "Genetically healthy embryos are selected and transferred",
      ],
      advantagesTitle: "Advantages",
      advantages: [
        "Reduces risk of genetic disease",
        "Enables selection of healthy embryos",
        "Reduces miscarriage risk",
        "Provides peace of mind entering pregnancy",
      ],
      note:
        "Contact us for details or to consult our specialists. Fertina IVF stands with you for healthy generations.",
      cta: "Book Appointment",
      contact: "Get Information",
    },
    ar: {
      title: "التشخيص الجيني قبل الزرع (PGD)",
      subtitle: "ضمان جيني لمستقبل صحي",
      intro: "التركيب الكروموسومي حاسم للصحة. يمكن أن تؤدي الأخطاء في التكوين الجيني إلى توقف تطور الجنين أو التسبب في اضطرابات خطيرة. 50-60٪ من حالات الإجهاض المبكر تنبع من تشوهات كروموسومية؛ تزداد المخاطر خاصة فوق سن 35.",
      description: "في فيرتينا IVF، نقدم طرقًا متقدمة لمساعدتك في إنجاب طفل سليم وراثيًا. واحدة من هذه الطرق هي PGD.",
      whatTitle: "ما هو PGD؟",
      whatDesc: "يتيح PGD التحليل الجيني للأجنة التي تم إنشاؤها أثناء التلقيح الصناعي. يحدد الأجنة التي تحمل أمراضًا جينية ويسمح بنقل الأجنة السليمة فقط.",
      what: "ما هو PGD؟",
      recommendedTitle: "يوصى بـ PGD في الحالات التالية:",
      recommended: ["تاريخ عائلي من الأمراض الوراثية", "أحد الوالدين حامل", "الإجهاض المتكرر", "طفل سابق بمرض جيني", "النساء 35 سنة فما فوق", "خطر الأمراض الجينية المرتبطة بالجنس"],
      recTitle: "متى يوصى به؟",
      howTitle: "كيف يتم إجراء PGD؟",
      steps: ["يتم الحصول على الأجنة عن طريق التلقيح الصناعي", "في اليوم 5 (الكيسة الأريمية)، يتم أخذ خزعة الأديم الغاذي الخارجي", "يتم تحليل الخلايا المأخوذة بالخزعة في مختبر الوراثة", "يتم تقييم الكروموسومات 13، 18، 21، X و Y للعدد / الهيكل", "يستبعد متلازمات باتو وإدواردز وداون وتيرنر وكلاينفلتر", "يتم اختيار ونقل الأجنة السليمة وراثيًا"],
      advantagesTitle: "المزايا",
      advantages: ["يقلل من خطر الأمراض الجينية", "يتيح اختيار الأجنة السليمة", "يقلل من خطر الإجهاض", "يوفر راحة البال عند الدخول في الحمل"],
      detTitle: "ما الذي يتم الكشف عنه؟",
      detected: ["متلازمة داون", "متلازمة إدواردز", "متلازمة باتو", "اضطرابات الكروموسومات الجنسية", "الأمراض الوراثية الأحادية"],
      note: "اتصل بنا للحصول على التفاصيل أو للتشاور مع متخصصينا. فيرتينا IVF تقف معك من أجل أجيال صحية.",
      cta: "احجز موعد",
      contact: "احصل على معلومات",
    },
  } as const;

  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen" dir={dir}>
      <Navigation language={language} setLanguage={setLanguage} />

      <div className="pt-20">
        <section className="py-12 sm:py-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
          <div className="container mx-auto px-4">
            <div ref={heroRef} className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">{t.title}</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{t.subtitle}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div ref={descRef} className={`max-w-4xl mx-auto transition-all duration-1000 ${descVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t.intro}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.description}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div ref={whatRef} className={`transition-all duration-1000 ${whatVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">{t.whatTitle}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">{t.whatDesc}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 ref={recTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${recTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.recommendedTitle}</h2>
            <div ref={recGridRef} className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {t.recommended.map((item, i) => (
                <Card key={i} className={`p-4 flex items-start gap-3 transition-all duration-1000 ${recGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: recGridVisible ? `${i * 50}ms` : '0ms' }}>
                  <Dna className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 ref={howTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${howTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.howTitle}</h2>
            <div ref={howGridRef} className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {t.steps.map((s, i) => (
                <Card key={i} className={`p-6 hover:shadow-lg smooth-transition transition-all duration-1000 ${howGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: howGridVisible ? `${i * 100}ms` : '0ms' }}>
                  <Dna className="h-10 w-10 text-primary mb-4" />
                  <p className="text-muted-foreground leading-relaxed">{s}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 ref={advTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${advTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.advantagesTitle}</h2>
            <div ref={advGridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {t.advantages.map((adv, i) => (
                <Card key={i} className={`p-4 flex items-center gap-3 bg-card transition-all duration-1000 ${advGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: advGridVisible ? `${i * 50}ms` : '0ms' }}>
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{adv}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <div ref={ctaRef} className={`transition-all duration-1000 ${ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">{t.note}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact"><Button size="lg">{t.cta}</Button></Link>
                <Link to="/contact"><Button size="lg" variant="outline">{t.contact}</Button></Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer language={language} />
      <WhatsAppButton />
    </div>
  );
};

export default PGDService;
