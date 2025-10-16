import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Snowflake, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/hooks/use-language";
import spermFreezingImage from "/sperm_dondurma.jpg";

const SpermFreezingService = () => {
  const { language, setLanguage } = useLanguage();
  const dir = language === "ar" ? "rtl" : "ltr";
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: whatRef, isVisible: whatVisible } = useScrollAnimation();
  const { ref: whyTitleRef, isVisible: whyTitleVisible } = useScrollAnimation();
  const { ref: whyGridRef, isVisible: whyGridVisible } = useScrollAnimation();
  const { ref: whoTitleRef, isVisible: whoTitleVisible } = useScrollAnimation();
  const { ref: whoGridRef, isVisible: whoGridVisible } = useScrollAnimation();
  const { ref: recTitleRef, isVisible: recTitleVisible } = useScrollAnimation();
  const { ref: recGridRef, isVisible: recGridVisible } = useScrollAnimation();
  const { ref: procTitleRef, isVisible: procTitleVisible } = useScrollAnimation();
  const { ref: procGridRef, isVisible: procGridVisible } = useScrollAnimation();
  const { ref: benTitleRef, isVisible: benTitleVisible } = useScrollAnimation();
  const { ref: benGridRef, isVisible: benGridVisible } = useScrollAnimation();
  const { ref: factTitleRef, isVisible: factTitleVisible } = useScrollAnimation();
  const { ref: factGridRef, isVisible: factGridVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const content = {
    tr: {
      title: "Sperm Dondurma",
      subtitle: "Geleceğe yönelik doğurganlık koruması",
      whatTitle: "Sperm Dondurma Nedir?",
      whatDesc:
        "Sperm dondurma (kriyoprezervasyon), sperm hücrelerinin ileri tarihte kullanım için sıvı azotla çok düşük ısıda saklanması yöntemidir. Bu sayede yıllarca kalite kaybı olmadan korunabilir.",
      whyTitle: "Neden Düşünülür?",
      why: [
        "Doğurganlığın korunması (tedavi öncesi ör. kanser)",
        "Ebeveynliği erteleme (kişisel/mesleki nedenler)",
        "Genetik tarama ile aile planlaması",
        "Esneklik: çiftlerden biri erken gelip örnek bırakabilir",
      ],
      whoTitle: "Kimler İçin Uygundur?",
      who: [
        "Üreme çağındaki erkekler ve doğurganlığını korumak isteyenler",
        "Doğurganlığı etkileyebilecek tedaviler alacak bireyler",
        "Ebeveynliği ertelemek isteyenler",
        "Kanser hastaları veya doğurganlığı etkilenebilecek kişiler",
      ],
      recTitle: "Sperm Dondurma Şu Durumlarda da Önerilebilir",
      rec: [
        "Ağır erkek faktörü infertilite",
        "Standart IVF’de başarısız döllenme",
        "Genetik hastalıklar",
      ],
      processTitle: "Süreç",
      process: [
        "İlk görüşme ve uygunluk değerlendirmesi",
        "Sperm örneğinin steril odada verilmesi",
        "Örneğin işlenmesi ve gereksiz bileşenlerden arındırılması",
        "Kontrollü koşullarda -196°C’de dondurma",
        "Uzun süreli depolama ve izleme",
      ],
      benefitsTitle: "Faydalar",
      benefits: [
        "Doğurganlığın korunması",
        "Ebeveynliği erteleme esnekliği",
        "Kanser tedavisi öncesi güvence",
        "Genetik testlerle bilinçli planlama",
      ],
      factorsTitle: "Başarıyı Etkileyen Faktörler",
      factors: [
        "Örneğin kalitesi (sayı, hareket, morfoloji)",
        "Depolama koşulları ve ısı sürekliliği",
      ],
      conclusion:
        "Sperm kriyoprezervasyonu, doğurganlığın korunması ve planlı ebeveynlik için değerli bir seçenektir. Ücretsiz ön görüşme için bizimle iletişime geçin.",
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "Sperm Freezing",
      subtitle: "Forward‑looking fertility preservation",
      whatTitle: "What is Sperm Freezing?",
      whatDesc:
        "Sperm cryopreservation preserves sperm in liquid nitrogen at very low temperatures for future use—often for years—without loss of quality.",
      whyTitle: "Why Consider Sperm Freezing?",
      why: [
        "Preserving fertility before treatments",
        "Delaying parenthood (personal/professional reasons)",
        "Genetic testing to inform family planning",
        "Flexibility when partners travel at different times",
      ],
      whoTitle: "Who is a Good Candidate?",
      who: [
        "Men of reproductive age wishing to maintain fertility",
        "Patients undergoing fertility‑impacting therapies",
        "Individuals postponing parenthood",
        "Male cancer patients or others at risk of infertility",
      ],
      recTitle: "Sperm Freezing may be recommended in cases of:",
      rec: [
        "Severe male factor infertility",
        "Previous failed fertilization with standard IVF",
        "Genetic disorders",
      ],
      processTitle: "The Sperm Freezing Process",
      process: [
        "Initial consultation and suitability assessment",
        "Sperm collection in a private sterile room",
        "Processing and preparation of the sample",
        "Cryogenic freezing at ~‑196°C",
        "Long‑term storage under controlled conditions",
      ],
      benefitsTitle: "Benefits",
      benefits: [
        "Preserving fertility",
        "Flexibility to delay parenthood",
        "Assurance before cancer therapy",
        "Combined with genetic testing for planning",
      ],
      factorsTitle: "Factors Affecting Success",
      factors: [
        "Sample quality (count, motility, morphology)",
        "Strict temperature and storage conditions",
      ],
      conclusion:
        "Sperm cryopreservation supports fertility preservation and proactive planning. Contact our team for a free consultation.",
      cta: "Book Appointment",
      contact: "Get Information",
    },
    ar: {
      title: "تجميد الحيوانات المنوية",
      subtitle: "الحفاظ على الخصوبة للمستقبل",
      whatTitle: "ما هو تجميد الحيوانات المنوية؟",
      whatDesc: "تجميد الحيوانات المنوية (التجميد بالتبريد) هو طريقة لتخزين خلايا الحيوانات المنوية في درجات حرارة منخفضة جدًا مع النيتروجين السائل للاستخدام في المستقبل. بهذه الطريقة، يمكن الحفاظ عليها لسنوات دون فقدان الجودة.",
      whyTitle: "لماذا يُنظر فيه؟",
      why: ["الحفاظ على الخصوبة (قبل العلاج مثل السرطان)", "تأجيل الأبوة (الأسباب الشخصية / المهنية)", "تخطيط الأسرة مع الفحص الجيني", "المرونة: يمكن لأحد الشريكين القدوم مبكرًا وترك العينة"],
      whoTitle: "لمن هو مناسب؟",
      who: ["الرجال في سن الإنجاب والذين يرغبون في الحفاظ على خصوبتهم", "الأفراد الذين سيتلقون علاجات قد تؤثر على الخصوبة", "أولئك الذين يرغبون في تأجيل الأبوة", "مرضى السرطان أو الأشخاص الذين قد تتأثر خصوبتهم"],
      recTitle: "قد يوصى بتجميد الحيوانات المنوية في حالات:",
      rec: ["عقم العامل الذكري الشديد", "فشل التخصيب مع التلقيح الصناعي القياسي", "الأمراض الوراثية"],
      processTitle: "العملية",
      process: ["الاستشارة الأولية وتقييم الملاءمة", "إعطاء عينة الحيوانات المنوية في غرفة معقمة", "معالجة العينة وتنقيتها من المكونات غير الضرورية", "التجميد في ظروف خاضعة للرقابة عند -196 درجة مئوية", "التخزين والمراقبة طويلة الأجل"],
      benefitsTitle: "الفوائد",
      benefits: ["الحفاظ على الخصوبة", "مرونة في تأجيل الأبوة", "التأمين قبل علاج السرطان", "التخطيط الواعي مع الاختبارات الجينية"],
      factorsTitle: "العوامل المؤثرة على النجاح",
      factors: ["جودة العينة (العدد، الحركة، التشكل)", "ظروف التخزين واستمرارية درجة الحرارة"],
      conclusion: "تجميد الحيوانات المنوية بالتبريد هو خيار قيم للحفاظ على الخصوبة والأبوة المخططة. اتصل بنا للحصول على استشارة أولية مجانية.",
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
                  src={spermFreezingImage}
                  alt="Sperm Dondurma"
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
            <h2 ref={recTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${recTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.recTitle}</h2>
            <div ref={recGridRef} className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {t.rec.map((r, i) => (
                <Card key={i} className={`p-4 flex items-start gap-3 transition-all duration-1000 ${recGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: recGridVisible ? `${i * 50}ms` : '0ms' }}>
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{r}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
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

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 ref={benTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${benTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.benefitsTitle}</h2>
            <div ref={benGridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {t.benefits.map((b, i) => (
                <Card key={i} className={`p-4 flex items-center gap-3 bg-card transition-all duration-1000 ${benGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: benGridVisible ? `${i * 50}ms` : '0ms' }}>
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{b}</span>
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

export default SpermFreezingService;
