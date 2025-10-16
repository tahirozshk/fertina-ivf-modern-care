import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Shield, HeartPulse } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/hooks/use-language";
import cervicalImage from "/servilkal.jpg";

const CervicalCerclageService = () => {
  const { language, setLanguage } = useLanguage();
  const dir = language === "ar" ? "rtl" : "ltr";
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation();
  const { ref: whatRef, isVisible: whatVisible } = useScrollAnimation();
  const { ref: whoTitleRef, isVisible: whoTitleVisible } = useScrollAnimation();
  const { ref: whoGridRef, isVisible: whoGridVisible } = useScrollAnimation();
  const { ref: howTitleRef, isVisible: howTitleVisible } = useScrollAnimation();
  const { ref: howGridRef, isVisible: howGridVisible } = useScrollAnimation();
  const { ref: afterRef, isVisible: afterVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const content = {
    tr: {
      title: "Servikal Serklaj (Rahim Ağzı Dikişi)",
      subtitle: "Erken doğum ve düşük riskini azaltmaya yönelik koruyucu işlem",
      description:
        "Servikal serklaj, rahim ağzı yetmezliği (servikal yetmezlik) olan kadınlarda uygulanan koruyucu bir işlemdir. Rahim ağzının gebelik süresince kapalı kalmasını sağlayarak, erken doğum veya düşük riskini azaltmayı amaçlar.",
      whatTitle: "Servikal Yetmezlik Nedir?",
      whatDesc:
        "Rahim ağzı normalde gebelik boyunca kapalı durur ve doğum yaklaşınca açılmaya başlar. Ancak bazı kadınlarda rahim ağzı gebeliğin erken dönemlerinde kendiliğinden açılabilir ve bu durum tekrarlayan düşükler veya erken doğumlara yol açabilir.",
      whoTitle: "Servikal Serklaj Kimlere Uygulanır?",
      candidates: [
        "Daha önce tekrarlayan 2. trimester düşükleri yaşayan kadınlara",
        "Rahim ağzı yetmezliği tanısı konanlara",
        "Ultrasonda servikal uzunluğu kısa olan gebelere",
        "Önceki gebeliklerde erken doğum öyküsü olanlara",
      ],
      howTitle: "İşlem Nasıl Yapılır?",
      steps: [
        "Genellikle gebeliğin 12–14. haftaları arasında uygulanır",
        "Spinal ya da genel anestezi altında yapılır",
        "Rahim ağzına özel materyalle dikiş atılarak kapalı tutulur",
        "Doğuma yakın (genellikle 37. haftada) dikiş alınır",
      ],
      afterTitle: "İşlem Sonrası Süreç",
      after: [
        "Kısa süreli gözlem",
        "Dinlenme ve hekim kontrollerine uyum",
        "Hafif kasık ağrısı ve lekelenme normal olabilir",
      ],
      goalTitle: "Servikal Serklajın Amacı",
      goalDesc:
        "Gebeliğin daha güvenli ilerlemesi, bebeğin anne karnında yeterli süre kalması ve sağlıklı doğum hedeflenir. Fertina IVF’te modern yöntemler titizlikle uygulanır; deneyimli ekibimizle yanınızdayız.",
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "Cervical Cerclage",
      subtitle: "Protective procedure to reduce risk of miscarriage and preterm birth",
      description:
        "Cervical cerclage is a preventive procedure for women with cervical insufficiency. By keeping the cervix closed during pregnancy, it aims to reduce the risk of miscarriage and preterm birth.",
      whatTitle: "What is Cervical Insufficiency?",
      whatDesc:
        "The cervix is normally closed throughout pregnancy and begins to open as birth approaches. In some women, the cervix may open early, leading to recurrent miscarriages or preterm births.",
      whoTitle: "Who is Cervical Cerclage For?",
      candidates: [
        "Women with recurrent 2nd trimester losses",
        "Diagnosed cervical insufficiency",
        "Short cervical length detected on ultrasound",
        "History of preterm birth in previous pregnancies",
      ],
      howTitle: "How is the Procedure Performed?",
      steps: [
        "Usually performed at 12–14 weeks",
        "Under spinal or general anesthesia",
        "A special stitch is placed around the cervix to keep it closed",
        "The stitch is removed near term (around 37 weeks)",
      ],
      afterTitle: "Post-procedure",
      after: [
        "Short observation period",
        "Rest and compliance with scheduled check-ups",
        "Mild cramps and spotting may occur",
      ],
      goalTitle: "Purpose of Cervical Cerclage",
      goalDesc:
        "To allow pregnancy to progress safely so the baby remains in the uterus long enough for a healthy birth. At Fertina IVF, we carefully apply modern methods and stand by you with our experienced team.",
      cta: "Book Appointment",
      contact: "Get Information",
    },
    ar: {
      title: "ربط عنق الرحم (غرزة عنق الرحم)",
      subtitle: "إجراء وقائي لتقليل مخاطر الإجهاض والولادة المبكرة",
      description: "ربط عنق الرحم هو إجراء وقائي للنساء المصابات بقصور عنق الرحم. من خلال إبقاء عنق الرحم مغلقًا أثناء الحمل، فإنه يهدف إلى تقليل مخاطر الإجهاض والولادة المبكرة.",
      whatTitle: "ما هو قصور عنق الرحم؟",
      whatDesc: "عنق الرحم يكون مغلقًا عادة طوال فترة الحمل ويبدأ في الفتح مع اقتراب الولادة. في بعض النساء، قد ينفتح عنق الرحم مبكرًا، مما يؤدي إلى الإجهاض المتكرر أو الولادة المبكرة.",
      whoTitle: "لمن هو ربط عنق الرحم؟",
      who: ["النساء ذوات قصور عنق الرحم", "تاريخ من فقدان الحمل في الثلث الثاني", "عنق رحم قصير (أقل من 25 مم)", "ولادة مبكرة سابقة"],
      candidates: [
        "النساء اللاتي يعانين من حالات إجهاض متكررة في الثلث الثاني",
        "تشخيص قصور عنق الرحم",
        "طول عنق الرحم القصير المكتشف بالموجات فوق الصوتية",
        "تاريخ الولادة المبكرة في حالات الحمل السابقة"
      ],
      whenTitle: "متى يتم تطبيقه؟",
      whenDesc: "يتم إجراؤه عادة بين 12-14 أسبوعًا من الحمل، قبل أن يبدأ عنق الرحم في التمدد. يتم إزالة الغرزة حوالي الأسبوع 37 أو قبل الولادة.",
      howTitle: "كيف يتم إجراء العملية؟",
      steps: [
        "عادة ما يتم إجراؤه في 12-14 أسبوعًا",
        "تحت التخدير النخاعي أو العام",
        "يتم وضع غرزة خاصة حول عنق الرحم لإبقائه مغلقًا",
        "تتم إزالة الغرزة بالقرب من الولادة (حوالي 37 أسبوعًا)"
      ],
      afterTitle: "بعد الإجراء",
      after: [
        "فترة مراقبة قصيرة",
        "الراحة والامتثال للفحوصات المجدولة",
        "قد تحدث تقلصات خفيفة ونزيف طفيف"
      ],
      goalTitle: "الغرض من ربط عنق الرحم",
      goalDesc: "للسماح للحمل بالتقدم بأمان حتى يبقى الطفل في الرحم لفترة كافية لولادة صحية. في فيرتينا IVF، نطبق بعناية الطرق الحديثة ونقف معك مع فريقنا ذي الخبرة.",
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
                  src={cervicalImage}
                  alt="Servikal Serklaj"
                  className="rounded-3xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
                />
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
            <div ref={whatRef} className={`transition-all duration-1000 ${whatVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">{t.whatTitle}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">{t.whatDesc}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 ref={whoTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${whoTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.whoTitle}</h2>
            <div ref={whoGridRef} className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {t.candidates.map((c, i) => (
                <Card key={i} className={`p-4 flex items-start gap-3 transition-all duration-1000 ${whoGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: whoGridVisible ? `${i * 50}ms` : '0ms' }}>
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{c}</span>
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
                  <HeartPulse className="h-10 w-10 text-primary mb-4" />
                  <p className="text-muted-foreground leading-relaxed">{s}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div ref={afterRef} className={`transition-all duration-1000 ${afterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">{t.afterTitle}</h2>
              <ul className="text-lg text-muted-foreground max-w-3xl mx-auto space-y-2">
                {t.after.map((a, i) => (
                  <li key={i}>• {a}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <div ref={ctaRef} className={`transition-all duration-1000 ${ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">{t.goalTitle}</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">{t.goalDesc}</p>
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

export default CervicalCerclageService;
