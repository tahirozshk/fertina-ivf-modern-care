import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Dna, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/hooks/use-language";

const SingleGeneAnalysisService = () => {
  const { language, setLanguage } = useLanguage();
  const dir = language === "ar" ? "rtl" : "ltr";
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation();
  const { ref: whenTitleRef, isVisible: whenTitleVisible } = useScrollAnimation();
  const { ref: whenGridRef, isVisible: whenGridVisible } = useScrollAnimation();
  const { ref: howTitleRef, isVisible: howTitleVisible } = useScrollAnimation();
  const { ref: howGridRef, isVisible: howGridVisible } = useScrollAnimation();
  const { ref: advTitleRef, isVisible: advTitleVisible } = useScrollAnimation();
  const { ref: advGridRef, isVisible: advGridVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const content = {
    tr: {
      title: "Tek Gen Hastalık Analizi",
      subtitle: "Genetik sağlığı koruyarak sağlıklı nesiller için…",
      intro:
        "Tek gen analizi, anne veya babada taşıyıcılığı bilinen kalıtsal hastalıkların embriyoya geçip geçmediğini belirlemek için yapılan ileri genetik test yöntemidir. Bu sayede sağlıklı embriyolar seçilerek tüp bebek tedavisinde transfer edilir.",
      whenTitle: "Hangi Durumlarda Yapılır?",
      conditions: [
        "Ailede tek genle geçen genetik hastalık öyküsü (kistik fibrozis, talasemi, SMA vb.)",
        "Anne veya babanın genetik testlerinde taşıyıcılık tespiti",
        "Daha önce genetik hastalıklı çocuk sahibi olma öyküsü",
        "Akraba evlilikleri",
        "Kalıtsal hastalık riskini önlemek isteyen çiftler",
      ],
      howTitle: "İşlem Nasıl Yapılır?",
      steps: [
        "Embriyolar laboratuvarda geliştirilir",
        "Embriyolardan birkaç hücre örneği alınır (biyopsi)",
        "Örnekler genetik laboratuvarda analiz edilir",
        "Hastalık taşımayan embriyolar seçilerek transfer edilir",
      ],
      advantagesTitle: "Avantajları",
      advantages: [
        "Kalıtsal hastalıkların nesillere aktarılmasını önler",
        "Sağlıklı gebelik şansını artırır",
        "Güvenli aile planlaması imkânı sağlar",
      ],
      note:
        "Fertina IVF olarak, uluslararası standartlarda genetik analiz yöntemleriyle embriyoları titizlikle inceliyor, sağlıklı nesiller için güvenilir çözümler sunuyoruz.",
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "Single Gene Analysis",
      subtitle: "Protecting genetic health for healthy generations…",
      intro:
        "Single gene analysis is an advanced genetic test to determine whether embryos inherit known hereditary diseases from a carrier parent. Thus, healthy embryos are selected for transfer in IVF.",
      whenTitle: "When is it performed?",
      conditions: [
        "Family history of monogenic disorders (cystic fibrosis, thalassemia, SMA, etc.)",
        "Carrier status identified in either parent",
        "Previous child with a genetic disorder",
        "Consanguineous marriages",
        "Couples wishing to prevent hereditary risks",
      ],
      howTitle: "How is it performed?",
      steps: [
        "Embryos are developed in the laboratory",
        "A few cells are biopsied from embryos",
        "Samples are analyzed in a genetics lab",
        "Disease-free embryos are selected for transfer",
      ],
      advantagesTitle: "Advantages",
      advantages: [
        "Prevents transmission of hereditary diseases",
        "Increases chance of a healthy pregnancy",
        "Enables safer family planning",
      ],
      note:
        "At Fertina IVF, we meticulously examine embryos with internationally standardized genetic methods and provide reliable solutions for healthy generations.",
      cta: "Book Appointment",
      contact: "Get Information",
    },
    ar: {
      title: "تحليل الجين الواحد",
      subtitle: "حماية الصحة الجينية لأجيال صحية...",
      intro: "تحليل الجين الواحد هو اختبار جيني متقدم لتحديد ما إذا كانت الأجنة ترث أمراضًا وراثية معروفة من أحد الوالدين الحاملين. وبالتالي، يتم اختيار الأجنة السليمة للنقل في التلقيح الصناعي.",
      description: "تحليل الجين الواحد هو طريقة اختبار جيني متخصصة للأمراض الوراثية أحادية الجين. يوصى به للأزواج الذين يحملون مرضًا وراثيًا معروفًا أو لديهم تاريخ عائلي.",
      whenTitle: "متى يتم إجراؤه؟",
      conditions: ["تاريخ عائلي من الاضطرابات أحادية الجين (التليف الكيسي، الثلاسيميا، SMA، إلخ)", "حالة الناقل المحددة في أحد الوالدين", "طفل سابق مصاب باضطراب وراثي", "زواج الأقارب", "الأزواج الذين يرغبون في منع المخاطر الوراثية"],
      when: ["التليف الكيسي", "فقر الدم المنجلي", "الثلاسيميا", "ضمور العضلات الدوشيني", "مرض هنتنغتون", "التليف العصبي", "متلازمة X الهش"],
      cases: ["التليف الكيسي", "فقر الدم المنجلي", "الثلاسيميا", "ضمور العضلات", "مرض هنتنغتون"],
      howTitle: "كيف يتم إجراؤه؟",
      steps: ["يتم تطوير الأجنة في المختبر", "يتم أخذ خزعة من بضع خلايا من الأجنة", "يتم تحليل العينات في مختبر الوراثة", "يتم اختيار الأجنة الخالية من الأمراض للنقل"],
      advantagesTitle: "المزايا",
      advantages: ["يمنع انتقال الأمراض الوراثية", "يزيد من فرصة الحمل الصحي", "يتيح تخطيط أسري أكثر أمانًا"],
      note: "في فيرتينا IVF، نفحص الأجنة بدقة بطرق جينية موحدة دوليًا ونقدم حلولًا موثوقة للأجيال الصحية.",
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
              <p className="text-lg text-muted-foreground leading-relaxed">{t.intro}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 ref={whenTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${whenTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.whenTitle}</h2>
            <div ref={whenGridRef} className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {t.conditions.map((c, i) => (
                <Card key={i} className={`p-4 flex items-start gap-3 transition-all duration-1000 ${whenGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: whenGridVisible ? `${i * 50}ms` : '0ms' }}>
                  <Dna className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{c}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 bg-background">
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

        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/10">
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

        <section className="py-12 sm:py-20 bg-background">
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

export default SingleGeneAnalysisService;
