import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, Users, TrendingUp } from "lucide-react";
import ivfImage from "@/assets/treatments/ivf-treatment.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/hooks/use-language";
import { useCounterAnimation } from "@/hooks/use-counter-animation";

const IVFTreatment = () => {
  const { language, setLanguage } = useLanguage();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { count: successCount, ref: successRef } = useCounterAnimation({ end: 76, duration: 2000 });
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation();
  const { ref: candidatesTitleRef, isVisible: candidatesTitleVisible } = useScrollAnimation();
  const { ref: candidatesGridRef, isVisible: candidatesGridVisible } = useScrollAnimation();
  const { ref: processTitleRef, isVisible: processTitleVisible } = useScrollAnimation();
  const { ref: processGridRef, isVisible: processGridVisible } = useScrollAnimation();
  const { ref: advantagesTitleRef, isVisible: advantagesTitleVisible } = useScrollAnimation();
  const { ref: advantagesGridRef, isVisible: advantagesGridVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();
  
  // Determine text direction based on language
  const dir = language === "ar" ? "rtl" : "ltr";

  const content = {
    tr: {
      title: "IVF (ICSI) Tedavisi",
      subtitle: "Mikroenjeksiyon yöntemiyle yüksek başarı oranlı tüp bebek tedavisi",
      successRate: "%76 Başarı Oranı",
      duration: "14-21 Gün Süreç",
      description: "IVF (In Vitro Fertilization) veya ICSI (Intracytoplasmic Sperm Injection) tedavisi, yumurtanın laboratuvar ortamında sperm ile döllenmesi ve oluşan embriyonun rahim içine yerleştirilmesi işlemidir. Modern teknoloji ve deneyimli kadromuzla uluslararası standartlarda hizmet sunuyoruz.",
      whoIsItFor: "Kimlere Uygulanır?",
      candidates: [
        "Tüp tıkanıklığı olan çiftler",
        "Sperm sayısı veya kalitesi düşük olan erkekler",
        "Açıklanamayan kısırlık sorunları",
        "İleri yaş kadınlar (35 yaş üzeri)",
        "Endometriozis teşhisi konan hastalar",
        "Diğer tedavilerde başarısız olan çiftler",
      ],
      processTitle: "Tedavi Süreci",
      steps: [
        {
          step: "1. Aşama",
          title: "İlk Değerlendirme ve Testler",
          description: "Detaylı muayene, hormon testleri ve ultrason kontrolü ile tedavi planı oluşturulur.",
        },
        {
          step: "2. Aşama",
          title: "Yumurtalık Uyarımı",
          description: "8-12 gün süren ilaç tedavisi ile yumurtalıklar uyarılır ve yumurta gelişimi takip edilir.",
        },
        {
          step: "3. Aşama",
          title: "Yumurta Toplama",
          description: "Hafif anestezi altında 15-20 dakikalık işlemle yumurtalar toplanır.",
        },
        {
          step: "4. Aşama",
          title: "Döllenme (ICSI)",
          description: "Laboratuvarda seçilen kaliteli sperm, mikroenjeksiyon yöntemiyle yumurtaya enjekte edilir.",
        },
        {
          step: "5. Aşama",
          title: "Embriyo Gelişimi",
          description: "3-5 gün boyunca embriyolar laboratuvarda geliştirilir ve takip edilir.",
        },
        {
          step: "6. Aşama",
          title: "Embriyo Transferi",
          description: "En kaliteli embriyo/embriyolar rahim içine ağrısız bir şekilde yerleştirilir.",
        },
      ],
      advantagesTitle: "Fertina IVF Avantajları",
      advantages: [
        "En son nesil embriyo inkübatörleri",
        "Time-lapse görüntüleme teknolojisi",
        "Deneyimli embriyolog kadrosu",
        "Bireysel tedavi protokolleri",
        "7/24 hasta desteği",
        "Şeffaf fiyatlandırma",
      ],
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "IVF (ICSI) Treatment",
      subtitle: "High success rate IVF treatment with microinjection method",
      successRate: "76% Success Rate",
      duration: "14-21 Days Process",
      description: "IVF (In Vitro Fertilization) or ICSI (Intracytoplasmic Sperm Injection) treatment is the process of fertilizing an egg with sperm in a laboratory environment and placing the resulting embryo in the uterus. We offer international standard services with modern technology and our experienced team.",
      whoIsItFor: "Who Is It For?",
      candidates: [
        "Couples with blocked tubes",
        "Men with low sperm count or quality",
        "Unexplained infertility issues",
        "Advanced age women (over 35)",
        "Patients diagnosed with endometriosis",
        "Couples who have failed other treatments",
      ],
      processTitle: "Treatment Process",
      steps: [
        {
          step: "Stage 1",
          title: "Initial Evaluation and Tests",
          description: "Treatment plan is created with detailed examination, hormone tests and ultrasound control.",
        },
        {
          step: "Stage 2",
          title: "Ovarian Stimulation",
          description: "Ovaries are stimulated with 8-12 days of drug treatment and egg development is monitored.",
        },
        {
          step: "Stage 3",
          title: "Egg Collection",
          description: "Eggs are collected with a 15-20 minute procedure under light anesthesia.",
        },
        {
          step: "Stage 4",
          title: "Fertilization (ICSI)",
          description: "Selected quality sperm is injected into the egg by microinjection method in the laboratory.",
        },
        {
          step: "Stage 5",
          title: "Embryo Development",
          description: "Embryos are developed and monitored in the laboratory for 3-5 days.",
        },
        {
          step: "Stage 6",
          title: "Embryo Transfer",
          description: "The highest quality embryo(s) are placed painlessly into the uterus.",
        },
      ],
      advantagesTitle: "Fertina IVF Advantages",
      advantages: [
        "Latest generation embryo incubators",
        "Time-lapse imaging technology",
        "Experienced embryologist team",
        "Individual treatment protocols",
        "24/7 patient support",
        "Transparent pricing",
      ],
      cta: "Book Appointment",
      contact: "Get Information",
    },
    ar: {
      title: "علاج التلقيح الصناعي (ICSI)",
      subtitle: "علاج التلقيح الصناعي بمعدل نجاح عالٍ بطريقة الحقن المجهري",
      successRate: "76% معدل النجاح",
      duration: "عملية 14-21 يومًا",
      description: "علاج التلقيح الصناعي (IVF) أو الحقن المجهري (ICSI) هو عملية تخصيب البويضة بالحيوانات المنوية في بيئة مختبرية ووضع الجنين الناتج في الرحم. نقدم خدمات بمعايير دولية بتكنولوجيا حديثة وفريقنا ذو الخبرة.",
      whoIsItFor: "لمن هو مناسب؟",
      candidates: [
        "الأزواج الذين يعانون من انسداد الأنابيب",
        "الرجال ذوو عدد الحيوانات المنوية أو الجودة المنخفضة",
        "مشاكل العقم غير المبررة",
        "النساء في سن متقدمة (فوق 35)",
        "المرضى الذين تم تشخيص إصابتهم بالانتباذ البطاني الرحمي",
        "الأزواج الذين فشلت معهم العلاجات الأخرى",
      ],
      processTitle: "عملية العلاج",
      steps: [
        {
          step: "المرحلة 1",
          title: "التقييم الأولي والاختبارات",
          description: "يتم إنشاء خطة العلاج من خلال الفحص التفصيلي واختبارات الهرمونات ومراقبة الموجات فوق الصوتية.",
        },
        {
          step: "المرحلة 2",
          title: "تحفيز المبايض",
          description: "يتم تحفيز المبايض بعلاج دوائي لمدة 8-12 يومًا ومراقبة تطور البويضات.",
        },
        {
          step: "المرحلة 3",
          title: "جمع البويضات",
          description: "يتم جمع البويضات بإجراء لمدة 15-20 دقيقة تحت التخدير الخفيف.",
        },
        {
          step: "المرحلة 4",
          title: "التخصيب (ICSI)",
          description: "يتم حقن الحيوانات المنوية عالية الجودة المختارة في البويضة بطريقة الحقن المجهري في المختبر.",
        },
        {
          step: "المرحلة 5",
          title: "تطوير الأجنة",
          description: "يتم تطوير الأجنة ومراقبتها في المختبر لمدة 3-5 أيام.",
        },
        {
          step: "المرحلة 6",
          title: "نقل الأجنة",
          description: "يتم وضع الأجنة عالية الجودة في الرحم بدون ألم.",
        },
      ],
      advantagesTitle: "مزايا فيرتينا IVF",
      advantages: [
        "حاضنات أجنة من أحدث جيل",
        "تقنية التصوير بفاصل زمني",
        "فريق أخصائي أجنة ذو خبرة",
        "بروتوكولات علاج فردية",
        "دعم المرضى على مدار الساعة طوال أيام الأسبوع",
        "تسعير شفاف",
      ],
      cta: "احجز موعد",
      contact: "احصل على معلومات",
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen" dir={dir}>
      <Navigation language={language} setLanguage={setLanguage} />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div ref={heroRef} className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                  {t.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  {t.subtitle}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div ref={successRef} className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">
                      {language === "tr" ? "Başarı Oranı: " : "Success Rate: "}%{successCount}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-accent/50 px-4 py-2 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">{t.duration}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact"><Button size="lg">{t.cta}</Button></Link>
                  <Link to="/contact"><Button size="lg" variant="outline">{t.contact}</Button></Link>
                </div>
              </div>

              <div className={`relative transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <img
                  src={ivfImage}
                  alt="IVF Treatment"
                  className="rounded-3xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div ref={descRef} className={`max-w-4xl mx-auto transition-all duration-1000 ${descVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.description}
              </p>
            </div>
          </div>
        </section>

        {/* Who Is It For */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 ref={candidatesTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${candidatesTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {t.whoIsItFor}
            </h2>
            <div ref={candidatesGridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {t.candidates.map((candidate, index) => (
                <Card key={index} className={`p-4 flex items-start gap-3 transition-all duration-1000 ${candidatesGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: candidatesGridVisible ? `${index * 50}ms` : '0ms' }}>
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{candidate}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 ref={processTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${processTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {t.processTitle}
            </h2>
            <div ref={processGridRef} className="max-w-4xl mx-auto space-y-6">
              {t.steps.map((step, index) => (
                <Card
                  key={index}
                  className={`p-6 hover:shadow-lg smooth-transition transition-all duration-1000 ${processGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: processGridVisible ? `${index * 100}ms` : '0ms' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <div className="text-sm text-primary font-semibold mb-1">{step.step}</div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <h2 ref={advantagesTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${advantagesTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {t.advantagesTitle}
            </h2>
            <div ref={advantagesGridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {t.advantages.map((advantage, index) => (
                <Card key={index} className={`p-4 flex items-center gap-3 bg-card transition-all duration-1000 ${advantagesGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: advantagesGridVisible ? `${index * 50}ms` : '0ms' }}>
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{advantage}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div ref={ctaRef} className={`max-w-3xl mx-auto transition-all duration-1000 ${ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <Users className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {language === "tr" 
                  ? "Hayalinizdeki Bebeğe Giden Yolculuğa Başlayın" 
                  : language === "ar"
                  ? "ابدأ رحلتك نحو طفل أحلامك"
                  : "Start Your Journey to Your Dream Baby"}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {language === "tr"
                  ? "Ücretsiz ön görüşme için hemen bizimle iletişime geçin. Uzman ekibimiz size özel tedavi planı oluşturmak için hazır."
                  : language === "ar"
                  ? "اتصل بنا الآن للحصول على استشارة مجانية. فريق الخبراء لدينا جاهز لإنشاء خطة علاج شخصية لك."
                  : "Contact us now for a free consultation. Our expert team is ready to create a personalized treatment plan for you."}
              </p>
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

export default IVFTreatment;
