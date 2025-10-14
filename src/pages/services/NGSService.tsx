import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ScanSearch, Dna, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/hooks/use-language";

const NGSService = () => {
  const { language, setLanguage } = useLanguage();
  const dir = language === "ar" ? "rtl" : "ltr";
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation();
  const { ref: advTitleRef, isVisible: advTitleVisible } = useScrollAnimation();
  const { ref: advGridRef, isVisible: advGridVisible } = useScrollAnimation();
  const { ref: typesTitleRef, isVisible: typesTitleVisible } = useScrollAnimation();
  const { ref: typesDescRef, isVisible: typesDescVisible } = useScrollAnimation();
  const { ref: recGridRef, isVisible: recGridVisible } = useScrollAnimation();
  const { ref: whoTitleRef, isVisible: whoTitleVisible } = useScrollAnimation();
  const { ref: whoGridRef, isVisible: whoGridVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const content = {
    tr: {
      title: "Yeni Nesil Dizileme (NGS)",
      subtitle: "Embriyolarda kromozom düzeyinde kapsamlı tarama",
      description:
        "NGS, embriyolarda kromozom düzeyinde detaylı tarama yapmamızı sağlayan gelişmiş bir genetik analiz yöntemidir. Bu test sayesinde DNA'yı oluşturan tüm 46 kromozomu sayısal ve yapısal olarak tarayarak sadece sağlıklı olanların seçilip transfer edilmesine olanak sağlar. Böylece embriyo transferinde başarı oranı yükselir.",
      advantagesTitle: "NGS’in Avantajları",
      advantages: [
        "Sağlıklı ve kromozomal olarak normal embriyo seçimi",
        "Başarı oranlarında artış",
        "Düşük riskinde azalma",
        "Gereksiz transferlerin önüne geçilmesi",
        "Genetik hastalıkların nesilden nesile aktarılmasının önlenmesi",
      ],
      typesTitle: "NGS (Yeni Nesil Dizileme) ile Kromozomal Sağlık Güvencesi",
      typesDesc:
        "Tüp bebek tedavilerinde başarıyı artırmak ve sağlıklı gebelikler elde etmek için gelişmiş genetik analiz yöntemlerine ihtiyaç duyulmaktadır. Fertina IVF olarak, embriyo seçiminde en ileri teknoloji olan NGS (Next Generation Sequencing) yöntemini uygulayarak, size ve ailenize en sağlıklı ve güvenilir başlangıcı sunuyoruz.",
      recommendedTitle: "NGS şu durumlarda önerilebilir:",
      recommended: [
        "Bilinen genetik rahatsızlıkları olan hastalar",
        "Gebelik kaybı veya tüp bebek başarısızlığı geçmişi olan hastalar",
        "Kromozomal hata riski daha yüksek olan hastalar",
      ],
      whoTitle: "Kimler İçin Uygundur?",
      who: [
        "38 yaş ve üzeri anne adayları",
        "Tekrarlayan düşük geçmişi olanlar",
        "Daha önce başarısız tüp bebek denemeleri yaşayan çiftler",
        "Genetik hastalık taşıyıcısı bireyler",
        "Cinsiyet hastalıklarının önlenmesini isteyen aileler",
      ],
      noteTitle: "Fertina IVF Farkı!",
      note:
        "Kıbrıs’ta yer alan modern kliniğimizde, NGS teknolojisini en güncel laboratuvar altyapısı ile sunuyoruz. Embriyo gelişimini titizlikle izliyor, en doğru zamanda en sağlıklı embriyoyu transfer ederek gebelik şansınızı en üst düzeye çıkarıyoruz.",
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "Next Generation Sequencing (NGS)",
      subtitle: "Comprehensive chromosomal screening in embryos",
      description:
        "NGS is an advanced genetic analysis method that allows detailed chromosomal screening in embryos. By numerically and structurally scanning all 46 chromosomes forming DNA, it enables selection and transfer of only healthy embryos, increasing transfer success rates.",
      advantagesTitle: "Advantages of NGS",
      advantages: [
        "Selection of chromosomally normal embryos",
        "Increased success rates",
        "Reduced miscarriage risk",
        "Avoids unnecessary transfers",
        "Prevents transmission of genetic diseases across generations",
      ],
      typesTitle: "Chromosomal Health Assurance with NGS",
      typesDesc:
        "To increase success in IVF and achieve healthy pregnancies, advanced genetic analysis methods are needed. At Fertina IVF, we apply NGS to provide you with the healthiest and most reliable start by selecting the best embryos.",
      recommendedTitle: "NGS may be recommended for:",
      recommended: [
        "Patients with known genetic disorders",
        "Patients with a history of pregnancy loss or IVF failure",
        "Patients at higher risk of chromosomal errors",
      ],
      whoTitle: "Who Is It For?",
      who: [
        "Women aged 38 and above",
        "Those with recurrent miscarriages",
        "Couples with previous failed IVF attempts",
        "Carriers of genetic diseases",
        "Families wanting to prevent sex-linked diseases",
      ],
      noteTitle: "Fertina IVF Difference",
      note:
        "In our modern clinic in Cyprus, we offer NGS technology with the most up-to-date laboratory infrastructure. We meticulously monitor embryo development and transfer the healthiest embryo at the right time to maximize your chance of pregnancy.",
      cta: "Book Appointment",
      contact: "Get Information",
    },
    ar: {
      title: "التسلسل الجيني من الجيل التالي (NGS)",
      subtitle: "فحص كروموسومي شامل في الأجنة",
      description: "NGS هو طريقة تحليل جيني متقدمة تسمح بفحص كروموسومي مفصل في الأجنة. من خلال فحص جميع الكروموسومات الـ 46 المكونة للحمض النووي عدديًا وهيكليًا، فإنه يتيح اختيار ونقل الأجنة السليمة فقط، مما يزيد من معدلات نجاح النقل.",
      advantagesTitle: "مزايا NGS",
      advantages: ["اختيار الأجنة السليمة كروموسوميًا", "زيادة معدلات النجاح", "تقليل مخاطر الإجهاض", "تجنب عمليات النقل غير الضرورية", "منع انتقال الأمراض الوراثية عبر الأجيال"],
      typesTitle: "ضمان الصحة الكروموسومية مع NGS",
      typesDesc: "لزيادة النجاح في التلقيح الصناعي وتحقيق حمل صحي، هناك حاجة إلى طرق تحليل جيني متقدمة. في فيرتينا IVF، نطبق NGS لنوفر لك البداية الأكثر صحة وموثوقية من خلال اختيار أفضل الأجنة.",
      recommendedTitle: "قد يوصى بـ NGS في الحالات التالية:",
      recommended: ["المرضى الذين يعانون من اضطرابات جينية معروفة", "المرضى الذين لديهم تاريخ من فقدان الحمل أو فشل التلقيح الصناعي", "المرضى الأكثر عرضة لخطر الأخطاء الكروموسومية"],
      whoTitle: "لمن هو مناسب؟",
      who: ["النساء 38 سنة فما فوق", "الذين يعانون من الإجهاض المتكرر", "الأزواج الذين فشلت محاولات التلقيح الصناعي السابقة لديهم", "حاملو الأمراض الوراثية", "العائلات التي ترغب في منع الأمراض المرتبطة بالجنس"],
      noteTitle: "فرق فيرتينا IVF",
      note: "في عيادتنا الحديثة في قبرص، نقدم تقنية NGS مع أحدث البنية التحتية المخبرية. نحن نراقب بدقة تطور الأجنة وننقل الجنين الأكثر صحة في الوقت المناسب لتعظيم فرصة الحمل لديك.",
      cta: "احجز موعد",
      contact: "احصل على معلومات",
    },
  } as const;

  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen" dir={dir}>
      <Navigation language={language} setLanguage={setLanguage} />

      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
          <div className="container mx-auto px-4">
            <div ref={heroRef} className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">{t.title}</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{t.subtitle}</p>
              <div className="mt-6 inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                <ScanSearch className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">NGS</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div ref={descRef} className={`max-w-4xl mx-auto transition-all duration-1000 ${descVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.description}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
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

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 ref={typesTitleRef} className={`text-3xl md:text-4xl font-bold mb-6 text-center text-foreground transition-all duration-1000 ${typesTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.typesTitle}</h2>
            <div ref={typesDescRef} className={`max-w-4xl mx-auto transition-all duration-1000 ${typesDescVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t.typesDesc}</p>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-6 text-foreground">{t.recommendedTitle}</h3>
            <div ref={recGridRef} className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
              {t.recommended.map((item, i) => (
                <Card key={i} className={`p-4 flex items-start gap-3 transition-all duration-1000 ${recGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: recGridVisible ? `${i * 50}ms` : '0ms' }}>
                  <Dna className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 ref={whoTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${whoTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.whoTitle}</h2>
            <div ref={whoGridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {t.who.map((w, i) => (
                <Card key={i} className={`p-4 flex items-start gap-3 transition-all duration-1000 ${whoGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: whoGridVisible ? `${i * 50}ms` : '0ms' }}>
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{w}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div ref={ctaRef} className={`max-w-3xl mx-auto transition-all duration-1000 ${ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">{t.noteTitle}</h3>
              <p className="text-lg text-muted-foreground mb-8">{t.note}</p>
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

export default NGSService;
