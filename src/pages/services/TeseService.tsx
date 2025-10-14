import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, TestTube2, Microscope, Shield, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/hooks/use-language";

const TeseService = () => {
  const { language, setLanguage } = useLanguage();
  const dir = language === "ar" ? "rtl" : "ltr";
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation();
  const { ref: whoTitleRef, isVisible: whoTitleVisible } = useScrollAnimation();
  const { ref: whoGridRef, isVisible: whoGridVisible } = useScrollAnimation();
  const { ref: howTitleRef, isVisible: howTitleVisible } = useScrollAnimation();
  const { ref: howGridRef, isVisible: howGridVisible } = useScrollAnimation();
  const { ref: advTitleRef, isVisible: advTitleVisible } = useScrollAnimation();
  const { ref: advGridRef, isVisible: advGridVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const content = {
    tr: {
      title: "TESE (Testisten Sperm Elde Etme)",
      subtitle: "Sperm üretiminin zor olduğu durumlarda çözüm",
      description:
        "TESE, menide sperm bulunmayan (azospermi) erkeklerde, doğrudan testis dokusundan küçük parçalar alınarak sperm elde edilmesini sağlayan cerrahi yöntemdir. Bu işlem, mikroenjeksiyon (ICSI) yöntemiyle tüp bebek tedavisinde kullanılmak üzere uygulanır.",
      whoTitle: "Kimlere Uygulanır?",
      candidates: [
        "Menide hiç sperm bulunmayan (azospermi) erkeklerde",
        "Sperm kanallarında tıkanıklık olan kişilerde",
        "Daha önce sperm dondurulmamış ve tüp bebek için sperm bulunamayan hastalarda",
        "Genetik veya hormonal nedenlerle sperm üretimi düşük olan erkeklerde",
      ],
      howTitle: "Fertina'da TESE Nasıl Yapılır?",
      steps: [
        {
          title: "Anestezi",
          description: "Lokal veya genel anestezi altında uygulanır.",
        },
        {
          title: "Doku Alımı",
          description:
            "Testisten çok küçük bir kesi yapılarak veya kesi yapmadan özel bir iğne yardımıyla doku örneği alınır.",
        },
        {
          title: "Laboratuvar İncelemesi",
          description:
            "Laboratuvarda doku örneği incelenerek canlı sperm hücreleri ayrıştırılır.",
        },
        {
          title: "Kullanım / Dondurma",
          description:
            "Elde edilen spermler aynı anda tüp bebek tedavisinde kullanılabilir veya dondurularak saklanabilir.",
        },
      ],
      advantagesTitle: "Avantajları",
      advantages: [
        "Menide sperm bulunmayan erkeklere de baba olma şansı sunar",
        "Mikrocerrahi yöntemlerle başarı oranı yüksektir",
        "Elde edilen spermler tüp bebekte güvenle kullanılabilir",
      ],
      noteTitle: "Fertina IVF Güvencesi",
      note:
        "Fertina IVF olarak, TESE işlemini alanında uzman üroloji ve embriyoloji ekibimizle gerçekleştiriyor, baba olma şansını en ileri teknoloji ile destekliyoruz.",
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "TESE (Testicular Sperm Extraction)",
      subtitle: "Solution when sperm production is difficult",
      description:
        "TESE is a surgical procedure that allows sperm to be obtained by taking small pieces directly from the testicular tissue in men with no sperm in semen (azoospermia). It is performed to be used in IVF treatment with ICSI.",
      whoTitle: "Who Is It For?",
      candidates: [
        "Men with no sperm in semen (azoospermia)",
        "People with obstruction in sperm channels",
        "Patients for whom sperm cannot be found for IVF and no prior freezing",
        "Men with low sperm production due to genetic or hormonal reasons",
      ],
      howTitle: "How Is TESE Performed at Fertina?",
      steps: [
        { title: "Anesthesia", description: "Performed under local or general anesthesia." },
        { title: "Tissue Sampling", description: "A very small incision or a special needle is used to take tissue samples from the testis." },
        { title: "Laboratory Processing", description: "Live sperm cells are isolated by examining the tissue in the laboratory." },
        { title: "Use / Freezing", description: "Obtained sperms can be used immediately in IVF or frozen for storage." },
      ],
      advantagesTitle: "Advantages",
      advantages: [
        "Gives a chance of fatherhood even without sperm in semen",
        "High success with micro-surgical techniques",
        "Safely usable in IVF",
      ],
      noteTitle: "Fertina IVF Assurance",
      note:
        "At Fertina IVF, we perform the TESE procedure with our expert urology and embryology team and support the chance of fatherhood with cutting-edge technology.",
      cta: "Book Appointment",
      contact: "Get Information",
    },
    ar: {
      title: "TESE (استخراج الحيوانات المنوية من الخصية)",
      subtitle: "حل عندما يكون إنتاج الحيوانات المنوية صعبًا",
      description: "TESE هو إجراء جراحي يسمح بالحصول على الحيوانات المنوية عن طريق أخذ قطع صغيرة مباشرة من نسيج الخصية في الرجال الذين ليس لديهم حيوانات منوية في السائل المنوي (فقد النطاف). يتم إجراؤه ليتم استخدامه في علاج التلقيح الصناعي مع ICSI.",
      whoTitle: "لمن هو؟",
      candidates: [
        "الرجال الذين ليس لديهم حيوانات منوية في السائل المنوي (فقد النطاف)",
        "الأشخاص الذين يعانون من انسداد في قنوات الحيوانات المنوية",
        "المرضى الذين لا يمكن العثور على الحيوانات المنوية للتلقيح الصناعي ولم يتم التجميد مسبقًا",
        "الرجال ذوو إنتاج الحيوانات المنوية المنخفض بسبب أسباب وراثية أو هرمونية"
      ],
      howTitle: "كيف يتم إجراء TESE في فيرتينا؟",
      steps: [
        {
          title: "التخدير",
          description: "يتم إجراؤه تحت التخدير الموضعي أو العام."
        },
        {
          title: "أخذ عينة الأنسجة",
          description: "يتم استخدام شق صغير جدًا أو إبرة خاصة لأخذ عينات الأنسجة من الخصية."
        },
        {
          title: "المعالجة المخبرية",
          description: "يتم عزل خلايا الحيوانات المنوية الحية عن طريق فحص الأنسجة في المختبر."
        },
        {
          title: "الاستخدام / التجميد",
          description: "يمكن استخدام الحيوانات المنوية التي تم الحصول عليها على الفور في التلقيح الصناعي أو تجميدها للتخزين."
        }
      ],
      advantagesTitle: "المزايا",
      advantages: [
        "يعطي فرصة الأبوة حتى بدون حيوانات منوية في السائل المنوي",
        "نجاح عالٍ مع التقنيات الجراحية الدقيقة",
        "آمن للاستخدام في التلقيح الصناعي"
      ],
      noteTitle: "ضمان فيرتينا IVF",
      note: "في فيرتينا IVF، نقوم بإجراء TESE مع فريق المسالك البولية وعلم الأجنة الخبير لدينا وندعم فرصة الأبوة بأحدث التقنيات.",
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
                <TestTube2 className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">TESE</span>
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
            <h2 ref={whoTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${whoTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.whoTitle}</h2>
            <div ref={whoGridRef} className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {t.candidates.map((item, i) => (
                <Card key={i} className={`p-4 flex items-start gap-3 transition-all duration-1000 ${whoGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: whoGridVisible ? `${i * 50}ms` : '0ms' }}>
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 ref={howTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${howTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.howTitle}</h2>
            <div ref={howGridRef} className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {t.steps.map((step, i) => (
                <Card key={i} className={`p-6 hover:shadow-lg smooth-transition transition-all duration-1000 ${howGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: howGridVisible ? `${i * 100}ms` : '0ms' }}>
                  <Microscope className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
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

export default TeseService;
