import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Snowflake, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/hooks/use-language";
import eggFreezingImage from "/yumurta_dondurma.jpg";

const EggFreezingService = () => {
  const { language, setLanguage } = useLanguage();
  const dir = language === "ar" ? "rtl" : "ltr";
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: whatRef, isVisible: whatVisible } = useScrollAnimation();
  const { ref: whyTitleRef, isVisible: whyTitleVisible } = useScrollAnimation();
  const { ref: whyGridRef, isVisible: whyGridVisible } = useScrollAnimation();
  const { ref: whoTitleRef, isVisible: whoTitleVisible } = useScrollAnimation();
  const { ref: whoGridRef, isVisible: whoGridVisible } = useScrollAnimation();
  const { ref: procTitleRef, isVisible: procTitleVisible } = useScrollAnimation();
  const { ref: procGridRef, isVisible: procGridVisible } = useScrollAnimation();
  const { ref: factTitleRef, isVisible: factTitleVisible } = useScrollAnimation();
  const { ref: factGridRef, isVisible: factGridVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const content = {
    tr: {
      title: "Yumurta Dondurma",
      subtitle: "Doğurganlığı geleceğe güvenle taşıyın",
      whatTitle: "Yumurta Dondurma Nedir?",
      whatDesc:
        "Yumurta dondurma (oosit kriyoprezervasyonu), kadınların yumurtalarını toplayıp dondurarak ileride kullanmak üzere saklamasına olanak veren yardımcı üreme yöntemidir. Amaç, menopoza bağlı ya da hastalıklara bağlı risklerden bağımsız şekilde doğurganlığı korumaktır.",
      whyTitle: "Neden Düşünülür?",
      why: [
        "Ebeveynliği erteleme (eğitim, kariyer, kişisel nedenler)",
        "Tıbbi nedenlerle doğurganlığın korunması (ör. kanser tedavisi öncesi)",
        "Genetik tarama ile daha sağlıklı gebelik planı",
        "Doğurganlığın yaşa/hastalığa bağlı azalmasına karşı koruma",
      ],
      whoTitle: "Kimler İçin Uygundur?",
      who: [
        "Tercihen 35 yaş ve altı; 40 yaşına kadar avantaj sürer",
        "İyi over rezervi (yeterli oosit sayısı) olanlar",
      ],
      processTitle: "Süreç",
      process: [
        "İlk muayene ve tıbbi öykü değerlendirmesi",
        "Yumurtalık uyarımı ve yakın takip",
        "Yumurta toplama (transvajinal iğne ile, minimal invaziv)",
        "Vitrifikasyon tekniği ile hızlı dondurma",
        "-196°C’de güvenli depolama",
      ],
      factorsTitle: "Başarıyı Etkileyen Faktörler",
      factors: [
        "Yaş (dondurma anındaki oosit kalitesi)",
        "Over rezervi",
        "Laboratuvar teknik ve deneyimi (vitrifikasyon)",
      ],
      conclusion:
        "Yumurta dondurma, ileride anne olma şansını korumak isteyen kadınlar için güçlü bir seçenektir. Ücretsiz ön görüşme için bizimle iletişime geçin.",
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "Egg Freezing",
      subtitle: "Carry your fertility into the future with confidence",
      whatTitle: "What is Egg Freezing?",
      whatDesc:
        "Egg freezing (oocyte cryopreservation) retrieves, freezes and stores eggs for later IVF, protecting fertility independent of menopause or disease.",
      whyTitle: "Why Consider Egg Freezing?",
      why: [
        "Delaying parenthood (education, career, personal)",
        "Medical fertility preservation (e.g., before cancer therapy)",
        "With genetic screening for healthier pregnancy planning",
        "Maintaining fertility against age‑ or disease‑related decline",
      ],
      whoTitle: "Who is a Good Candidate?",
      who: [
        "Ideally ≤35 (benefit up to ~40)",
        "Adequate ovarian reserve",
      ],
      processTitle: "The Egg Freezing Process",
      process: [
        "Initial consultation and history",
        "Ovarian stimulation and monitoring",
        "Egg retrieval (transvaginal needle; minimally invasive)",
        "Vitrification (ultra‑rapid freezing)",
        "Storage at −196°C",
      ],
      factorsTitle: "Factors Affecting Success",
      factors: [
        "Age at freezing (oocyte quality)",
        "Ovarian reserve",
        "Lab techniques and expertise (vitrification)",
      ],
      conclusion:
        "Egg freezing is a valuable option to preserve fertility for later life. Contact us for a free consultation.",
      cta: "Book Appointment",
      contact: "Get Information",
    },
    ar: {
      title: "تجميد البويضات",
      subtitle: "احمل خصوبتك إلى المستقبل بثقة",
      whatTitle: "ما هو تجميد البويضات؟",
      whatDesc: "تجميد البويضات (تجميد البويضات بالتبريد) هو طريقة إنجاب مساعدة تسمح للنساء بجمع وتجميد بويضاتهن للاستخدام في المستقبل. الهدف هو الحفاظ على الخصوبة بشكل مستقل عن المخاطر المرتبطة بانقطاع الطمث أو الأمراض.",
      whyTitle: "لماذا يُنظر فيه؟",
      why: ["تأجيل الأبوة (التعليم، المهنة، الأسباب الشخصية)", "الحفاظ على الخصوبة لأسباب طبية (مثل قبل علاج السرطان)", "خطة حمل أكثر صحة مع الفحص الجيني", "الحماية من انخفاض الخصوبة المرتبط بالعمر / المرض"],
      whoTitle: "لمن هو مناسب؟",
      who: ["يفضل 35 سنة وأقل؛ تستمر الميزة حتى سن 40", "أولئك الذين لديهم احتياطي مبيض جيد (عدد كافٍ من البويضات)"],
      processTitle: "العملية",
      process: ["الفحص الأولي وتقييم التاريخ الطبي", "تحفيز المبيض والمتابعة الدقيقة", "جمع البويضات (بإبرة عبر المهبل، قليلة التوغل)", "التجميد السريع بتقنية التزجيج", "التخزين الآمن عند -196 درجة مئوية"],
      factorsTitle: "العوامل المؤثرة على النجاح",
      factors: ["العمر (جودة البويضات في وقت التجميد)", "احتياطي المبيض", "التقنية والخبرة المخبرية (التزجيج)"],
      conclusion: "تجميد البويضات هو خيار قوي للنساء اللواتي يرغبن في الحفاظ على فرصتهن في أن يصبحن أمهات في المستقبل. اتصل بنا للحصول على استشارة أولية مجانية.",
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div ref={heroRef} className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">{t.title}</h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">{t.subtitle}</p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact"><Button size="lg">{t.cta}</Button></Link>
                  <Link to="/contact"><Button size="lg" variant="outline">{t.contact}</Button></Link>
                </div>
              </div>

              <div className={`relative transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <img
                  src={eggFreezingImage}
                  alt="Yumurta Dondurma"
                  className="rounded-3xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div ref={whatRef} className={`max-w-4xl mx-auto transition-all duration-1000 ${whatVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">{t.whatTitle}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.whatDesc}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 ref={whyTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${whyTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.whyTitle}</h2>
            <div ref={whyGridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {t.why.map((w, i) => (
                <Card key={i} className={`p-4 flex items-start gap-3 transition-all duration-1000 ${whyGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: whyGridVisible ? `${i * 50}ms` : '0ms' }}>
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{w}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 ref={whoTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${whoTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.whoTitle}</h2>
            <div ref={whoGridRef} className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {t.who.map((w, i) => (
                <Card key={i} className={`p-4 flex items-start gap-3 transition-all duration-1000 ${whoGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: whoGridVisible ? `${i * 50}ms` : '0ms' }}>
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{w}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 ref={procTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${procTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.processTitle}</h2>
            <div ref={procGridRef} className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {t.process.map((p, i) => (
                <Card key={i} className={`p-6 hover:shadow-lg smooth-transition transition-all duration-1000 ${procGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: procGridVisible ? `${i * 100}ms` : '0ms' }}>
                  <Snowflake className="h-10 w-10 text-primary mb-4" />
                  <p className="text-muted-foreground leading-relaxed">{p}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 ref={factTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${factTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.factorsTitle}</h2>
            <div ref={factGridRef} className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {t.factors.map((f, i) => (
                <Card key={i} className={`p-4 flex items-start gap-3 transition-all duration-1000 ${factGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: factGridVisible ? `${i * 50}ms` : '0ms' }}>
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{f}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div ref={ctaRef} className={`max-w-3xl mx-auto transition-all duration-1000 ${ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <p className="text-lg text-muted-foreground mb-8">{t.conclusion}</p>
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

export default EggFreezingService;
