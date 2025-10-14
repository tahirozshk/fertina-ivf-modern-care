import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Stethoscope, ClipboardList, HeartPulse } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/hooks/use-language";

const InitialFertilityTestsService = () => {
  const { language, setLanguage } = useLanguage();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation();
  const { ref: commonTitleRef, isVisible: commonTitleVisible } = useScrollAnimation();
  const { ref: commonGridRef, isVisible: commonGridVisible } = useScrollAnimation();
  const { ref: recTitleRef, isVisible: recTitleVisible } = useScrollAnimation();
  const { ref: recGridRef, isVisible: recGridVisible } = useScrollAnimation();
  const { ref: prepRef, isVisible: prepVisible } = useScrollAnimation();
  const { ref: underRef, isVisible: underVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const content = {
    tr: {
      title: "İlk Doğurganlık Testleri",
      subtitle: "Doğru tanı ile kişiye özel tedavi planı",
      importanceTitle: "Neden Önemli?",
      importanceDesc:
        "IVF sürecinde erken dönemde yapılan doğurganlık testleri büyük önem taşır. Her iki partnerin üreme sağlığı hakkında bilgi sağlayarak en doğru tedavi planının hazırlanmasına yardımcı olur.",
      expectTitle: "Test Sürecinde Ne Beklenir?",
      expectDesc:
        "Çoğunlukla invazif olmayan veya minimal invazif yöntemler tercih edilir. Amaç, üreme sistemine dair mümkün olduğunca fazla bilgi toplayıp gebeliğe engel olabilecek faktörleri tespit etmektir.",
      commonTitle: "Sık Yapılan Testler",
      femaleU40Title: "Kadın (< 40 yaş)",
      femaleU40: [
        "Hemogram, CMV IgM, Anti‑HIV, HBsAg, Anti‑HCV, Rubella IgG, VDRL, Vitamin D3, Kan Grubu",
        "FSH, AMH, LH, E2, PRL, FT4/FT3, TSH",
        "Karaciğer fonksiyonları (AST/ALT)",
        "HSG (Histerosalpingografi)",
      ],
      femaleO45Title: "Kadın (≥ 45 yaş)",
      femaleO45: [
        "Hemogram, CMV IgM, Anti‑HIV, HBsAg, Anti‑HCV, Rubella IgG, Vitamin D3, Kan Grubu",
        "AST/ALT, PT/INR",
        "Tiroid (FT4, TSH)",
        "Açlık kan şekeri, Üre, Kreatinin",
        "Lipit profili (HDL)",
        "HbA1c, Mamografi, HSG, Ekokardiyografi",
      ],
      maleTitle: "Erkek",
      male: [
        "Hemogram, Anti‑HIV, HBsAg, Anti‑HCV, VDRL, Kan Grubu",
        "Semen Analizi",
      ],
      recommendTitle: "Ne Zaman Önerilir?",
      recommend: [
        "Klinik araştıran ve güvenilir rehber arayan adaylar",
        "Yaş/PCOS gibi bariyerlerden şüphelenen ve tanı isteyen bireyler",
        "Aylarca denemeye rağmen sonuç alamayan proaktif çiftler",
      ],
      prepareTitle: "Teste Hazırlık",
      prepare: [
        "Testlerin zamanlaması ovülasyon ve siklus fazı ile uyumlu olmalıdır",
        "Uzmanımız, doğru zamanlama ve süreç hakkında eğitim verecektir",
      ],
      lifestyleTitle: "Yaşam Tarzı Faktörleri",
      lifestyleDesc:
        "Beslenme, egzersiz, stres ve çevresel toksinler doğurganlığı etkileyebilir. Uygun değişiklikler için öneriler sunarız.",
      understandingTitle: "Sonuçları Anlamak",
      understandingDesc:
        "IUI veya ilaç tedavileri yeterli değilse IVF/ICSI planlanabilir. İleri yaş, erkek faktörü veya genetik risklerde ilk basamak olarak da tercih edilebilir.",
      discussTitle: "Doktorunuzla Tedavi Seçenekleri",
      discussDesc:
        "Değerlendirme sonrası ilaçlardan cerrahiye ve IVF gibi yardımcı üreme yöntemlerine uzanan kişisel bir plan hazırlanır.",
      conclusion:
        "Doğurganlık testleri, IVF yolculuğunun ilk adımıdır. Kliniğimizde şefkatli, güncel ve şeffaf yaklaşımımızla ücretsiz ön değerlendirme paketimizi sunuyoruz.",
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "Initial Fertility Tests",
      subtitle: "Accurate diagnosis for a personalized treatment plan",
      importanceTitle: "Why Initial Fertility Tests Are Important",
      importanceDesc:
        "Early testing provides valuable insight into both partners’ reproductive health, enabling an informed treatment plan with the highest chance of success.",
      expectTitle: "What to Expect During Testing",
      expectDesc:
        "Non‑invasive or minimally invasive procedures are preferred to gather comprehensive information and identify barriers to pregnancy.",
      commonTitle: "Common Fertility Tests",
      femaleU40Title: "Women Under 40",
      femaleU40: [
        "Hemogram, CMV IgM, Anti‑HIV, HBsAg, Anti‑HCV, Rubella IgG, VDRL, Vitamin D3, Blood Type",
        "FSH, AMH, LH, E2, PRL, FT4/FT3, TSH",
        "Liver function (AST/ALT)",
        "HSG (Hysterosalpingogram)",
      ],
      femaleO45Title: "Women ≥ 45",
      femaleO45: [
        "Hemogram, CMV IgM, Anti‑HIV, HBsAg, Anti‑HCV, Rubella IgG, Vitamin D3, Blood Type",
        "AST/ALT, PT/INR",
        "Thyroid (FT4, TSH)",
        "Fasting glucose, Urea, Creatinine",
        "Lipid profile (HDL)",
        "HbA1c, Mammography, HSG, Echocardiography",
      ],
      maleTitle: "Men",
      male: [
        "Hemogram, Anti‑HIV, HBsAg, Anti‑HCV, VDRL, Blood Type",
        "Semen Analysis",
      ],
      recommendTitle: "Initial Fertility Tests may be recommended in cases of:",
      recommend: [
        "Early‑stage patients comparing clinics seeking a trustworthy guide",
        "Individuals aware of potential barriers (age, PCOS) needing a formal diagnosis",
        "Proactive couples after months of trying without success",
      ],
      prepareTitle: "Preparing for Fertility Tests",
      prepare: [
        "Timing should align with ovulation and cycle phase",
        "Guidance will be provided for correct timing and process",
      ],
      lifestyleTitle: "Lifestyle Factors Affecting Fertility",
      lifestyleDesc:
        "Diet, exercise, stress and environmental toxins may impact fertility. We advise lifestyle changes to improve outcomes.",
      understandingTitle: "Understanding the Results",
      understandingDesc:
        "If IUI or medications are insufficient, IVF/ICSI is recommended; often first‑line for advanced age, male factor or genetic risks.",
      discussTitle: "Discussing Treatment Options",
      discussDesc:
        "After assessment we plan a tailored pathway including medications, procedures and assisted reproduction like IVF.",
      conclusion:
        "Fertility tests are the first steps in IVF. We proudly offer a FREE Fertility Assessment within our all‑inclusive packages.",
      cta: "Book Appointment",
      contact: "Get Information",
    },
  } as const;

  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen">
      <Navigation language={language} setLanguage={setLanguage} />

      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
          <div className="container mx-auto px-4">
            <div ref={heroRef} className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">{t.title}</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{t.subtitle}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div ref={descRef} className={`max-w-4xl mx-auto space-y-8 transition-all duration-1000 ${descVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-foreground">{t.importanceTitle}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.importanceDesc}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-foreground">{t.expectTitle}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.expectDesc}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 ref={commonTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${commonTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.commonTitle}</h2>
            <div ref={commonGridRef} className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card className={`p-6 transition-all duration-1000 ${commonGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: commonGridVisible ? '0ms' : '0ms' }}>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{t.femaleU40Title}</h3>
                <ul className="text-muted-foreground space-y-2 list-disc pl-5">
                  {t.femaleU40.map((x, i) => (<li key={i}>{x}</li>))}
                </ul>
              </Card>
              <Card className={`p-6 transition-all duration-1000 ${commonGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: commonGridVisible ? '100ms' : '0ms' }}>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{t.femaleO45Title}</h3>
                <ul className="text-muted-foreground space-y-2 list-disc pl-5">
                  {t.femaleO45.map((x, i) => (<li key={i}>{x}</li>))}
                </ul>
              </Card>
              <Card className={`p-6 transition-all duration-1000 ${commonGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: commonGridVisible ? '200ms' : '0ms' }}>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{t.maleTitle}</h3>
                <ul className="text-muted-foreground space-y-2 list-disc pl-5">
                  {t.male.map((x, i) => (<li key={i}>{x}</li>))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 ref={recTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${recTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.recommendTitle}</h2>
            <div ref={recGridRef} className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {t.recommend.map((r, i) => (
                <Card key={i} className={`p-4 flex items-start gap-3 transition-all duration-1000 ${recGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: recGridVisible ? `${i * 50}ms` : '0ms' }}>
                  <ClipboardList className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{r}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div ref={prepRef} className={`transition-all duration-1000 ${prepVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">{t.prepareTitle}</h2>
              <ul className="text-lg text-muted-foreground max-w-4xl mx-auto space-y-2 list-disc pl-5">
                {t.prepare.map((p, i) => (<li key={i}>{p}</li>))}
              </ul>
              <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-center text-foreground">{t.lifestyleTitle}</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">{t.lifestyleDesc}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div ref={underRef} className={`transition-all duration-1000 ${underVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">{t.understandingTitle}</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-6">{t.understandingDesc}</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">{t.discussTitle}</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">{t.discussDesc}</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <div ref={ctaRef} className={`transition-all duration-1000 ${ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <HeartPulse className="h-16 w-16 text-primary mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">{t.conclusion}</p>
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

export default InitialFertilityTestsService;
