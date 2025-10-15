import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Dna, Microscope, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/hooks/use-language";

const GeneticsService = () => {
  const { language, setLanguage } = useLanguage();
  const dir = language === "ar" ? "rtl" : "ltr";
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation();
  const { ref: whenTitleRef, isVisible: whenTitleVisible } = useScrollAnimation();
  const { ref: whenGridRef, isVisible: whenGridVisible } = useScrollAnimation();
  const { ref: whyRef, isVisible: whyVisible } = useScrollAnimation();
  const { ref: benTitleRef, isVisible: benTitleVisible } = useScrollAnimation();
  const { ref: benGridRef, isVisible: benGridVisible } = useScrollAnimation();
  const { ref: offTitleRef, isVisible: offTitleVisible } = useScrollAnimation();
  const { ref: offGridRef, isVisible: offGridVisible } = useScrollAnimation();
  const { ref: techGridRef, isVisible: techGridVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const content = {
    tr: {
      title: "Genetik Testler",
      subtitle: "IVF’de sağlıklı embriyo seçimi için gelişmiş genetik tarama",
      whatTitle: "Genetik Test Nedir?",
      whatDesc:
        "Genetik test, bir kişinin DNA’sını inceleyerek olağan dışı genleri veya kalıtsal hastalıkları araştırma yöntemidir. IVF’de oluşturulan embriyolardan alınan hücrelerin incelenmesi, embriyonun genetik yapısını anlamaya yardımcı olur.",
      whenTitle: "IVF Tedavisinde Hangi Durumlarda Önerilir?",
      when: [
        "Tekrarlayan düşükler",
        "Anomalili bebek öyküsü",
        "Birden fazla başarısız IVF denemesi",
        "Düşük sperm kalitesi",
        "35 yaş üzeri kadınlar",
      ],
      createDiffTitle: "Genetik Test ile Fark Yaratın",
      createDiffDesc:
        "Tekrarlayan IVF başarısızlıkları, genetik hastalıklar veya düşük öyküsü olan hastalar için PGD/PGT, NGS ve diğer kromozomal-genetik testleri, hastanın tıbbi geçmişine göre planlıyoruz. Bu testler, genetik olarak sağlıklı embriyoların seçilmesini sağlar ve başarı şansını artırır.",
      whyTitle: "IVF’de Klinik Genetik Neden Önemli?",
      whyDesc:
        "Klinik genetik, çocuklara geçebilecek genetik sorunların belirlenmesine yardımcı olur. Embriyoların implantasyon öncesi genetik açıdan sağlıklı olanlarının seçilmesi, sağlıklı gebelik ve canlı doğum olasılığını artırır.",
      benefitsTitle: "IVF’de Genetik Testin Faydaları",
      benefits: [
        "Kalıtsal/genetik hastalıkların erken tespiti",
        "Sağlıklı embriyo seçimi ve kromozomal denge değerlendirmesi",
        "Başarı oranlarında artış (PGT-A ile canlı doğum oranlarında %10–20 artış)",
        "Ebeveynler için iç huzuru ve güven",
      ],
      offeredTitle: "Sunulan Genetik Testler",
      offered: [
        "PGT-A: 5–6. günde blastokistlerde kromozomal anormallik taraması",
        "PGT-M: Belirli gen mutasyonlarının/kalıtsal hastalıkların analizi",
        "PGT-SR: Kromozom yapısal yeniden düzenlenmelerinin taraması",
      ],
      moreCta: "Bilgi Alın",
      techTitle: "Yüksek Teknoloji İnkübatörler",
      techDesc:
        "Döllenmiş embriyoların gelişimi için inkübatörler kritik öneme sahiptir. Özel IVF inkübatörleriyle fiziksel parametreleri sürekli izler, daha yüksek gebelik oranları elde ederiz.",
      fishTitle: "FISH (Fluorescent In Situ Hybridization)",
      fishDesc:
        "FISH; belirli DNA dizilerine bağlanan floresan problarla yapılan genetik analiz yöntemidir. Kromozom haritalama, genetik hastalık tanısı ve karma karışımlar içinde özgül dizilerin saptanmasında kullanılır.",
      hlaTitle: "Embriyo HLA Tiplemesi",
      hlaDesc:
        "IVF’de embriyonun HLA tipini belirlemeye yönelik yöntemdir. Uygun kemik iliği/kök hücre donörü bulunmasına yardımcı olabilir. Polar cisim biyopsisi veya blastomer/blasokist biyopsisi ile yapılabilir.",
      cghTitle: "CGH (Karşılaştırmalı Genomik Hibridizasyon)",
      cghDesc:
        "CGH ile kromozomlardaki nicel ve nitel bozukluklar eşzamanlı incelenir. Blastokist evresinde alınan örnekler genetik laboratuvarda analiz edilir; normal kromozom setine sahip embriyolar seçilerek transfer edilir.",
      niptTitle: "NIPT24 (Illumina Veriseq NIPT V2)",
      niptDesc:
        "Anne kanından fetal DNA parçalarının NGS ile incelendiği invazif olmayan prenatal testtir. 10. haftadan itibaren kromozomal anomaliler için tarama yapar.",
      chooseTitle: "Doğru Testi Nasıl Seçeriz?",
      chooseDesc:
        "Genetik riskleriniz, kişisel/aile öykünüz ve tercihlerinize göre uzmanlarımızla birlikte en uygun testleri planlarız.",
      closing:
        "Genetik tarama; sağlıklı gebelik ve güvenli doğum için karar sürecini güçlendirir. Ücretsiz ön görüşme için bizimle iletişime geçin.",
      cta: "Randevu Alın",
      contact: "Bizimle İletişime Geçin",
    },
    en: {
      title: "Genetic Testing",
      subtitle: "Advanced genetic screening for healthy embryo selection in IVF",
      whatTitle: "What is Genetic Testing?",
      whatDesc:
        "Genetic testing examines DNA to check for unusual genes or inherited conditions. In IVF, analyzing cells from embryos helps understand their genetic makeup.",
      whenTitle: "When is Screening Recommended in IVF?",
      when: [
        "Recurrent miscarriages",
        "History of a child with anomalies",
        "Several unsuccessful IVF treatments",
        "Low sperm quality",
        "Women over 35",
      ],
      createDiffTitle: "Create The Difference with Genetic Testing",
      createDiffDesc:
        "For recurrent failures, genetic diseases or miscarriages, we offer PGD/PGT, NGS and other tests tailored to history, enabling transfer of selected healthy embryos and improving outcomes.",
      whyTitle: "Why is Clinical Genetics Important for IVF?",
      whyDesc:
        "It helps identify genetic problems a child may inherit and select embryos free of abnormalities before implantation, increasing success and health.",
      benefitsTitle: "Benefits of Genetic Testing in IVF",
      benefits: [
        "Identifying genetic disorders (e.g., Huntington’s, sickle cell, CF)",
        "Selecting healthy embryos via chromosomal stability screening",
        "Increasing success rates (PGT‑A may add 10–20% live birth)",
        "Peace of mind for families",
      ],
      offeredTitle: "Genetic Testing Offered",
      offered: [
        "PGT‑A: blastocyst chromosomal screening (day 5–6)",
        "PGT‑M: monogenic mutation testing (cleavage or blastocyst)",
        "PGT‑SR: structural rearrangement analysis (day 5–6)",
      ],
      moreCta: "Get Info",
      techTitle: "High‑Technology Incubators",
      techDesc:
        "Specialized IVF incubators with full monitoring support better embryo development and higher pregnancy rates.",
      fishTitle: "FISH (Fluorescence in Situ Hybridization)",
      fishDesc:
        "Fluorescent probes bind target DNA sequences for mapping, diagnosis and detection within complex samples.",
      hlaTitle: "Embryo HLA Typing",
      hlaDesc:
        "Determines embryo HLA type via polar body or blastomere/blastocyst biopsy; may help find compatible donors.",
      cghTitle: "CGH (Comparative Genomic Hybridization)",
      cghDesc:
        "Examines quantitative/qualitative chromosomal abnormalities; blastocyst-stage sampling, lab analysis, selection of normal embryos.",
      niptTitle: "NIPT24 (Illumina Veriseq NIPT V2)",
      niptDesc:
        "Non‑invasive prenatal test analyzing fetal DNA fragments in maternal blood using NGS from week 10.",
      chooseTitle: "Choosing the Right Test",
      chooseDesc:
        "We tailor tests to genetic risk, medical history and preferences with counselors and fertility specialists.",
      closing:
        "Genetic screening strengthens decisions for healthy pregnancy and safe delivery. Book a free consultation to learn more.",
      cta: "Book Appointment",
      contact: "Contact Us",
    },
    ar: {
      title: "الاختبار الجيني",
      subtitle: "الفحص الجيني المتقدم لاختيار الأجنة السليمة في التلقيح الصناعي",
      whatTitle: "ما هو الاختبار الجيني؟",
      whatDesc: "يفحص الاختبار الجيني الحمض النووي للتحقق من الجينات غير العادية أو الحالات الموروثة. في التلقيح الصناعي، يساعد تحليل الخلايا من الأجنة في فهم تكوينها الجيني.",
      whenTitle: "متى يوصى بالفحص في التلقيح الصناعي؟",
      when: ["الإجهاض المتكرر", "تاريخ طفل مع تشوهات", "عدة علاجات تلقيح صناعي غير ناجحة", "انخفاض جودة الحيوانات المنوية", "النساء فوق 35"],
      cases: ["تاريخ عائلي للاضطرابات الوراثية", "العمر المتقدم", "فشل التلقيح الصناعي المتكرر", "الإجهاض المتكرر", "قبل التلقيح الصناعي"],
      createDiffTitle: "إحداث الفرق مع الاختبار الجيني",
      createDiffDesc: "للفشل المتكرر أو الأمراض الجينية أو الإجهاض، نقدم PGD/PGT وNGS واختبارات أخرى مصممة خصيصًا للتاريخ، مما يتيح نقل الأجنة السليمة المختارة وتحسين النتائج.",
      whyTitle: "لماذا علم الوراثة السريرية مهم للتلقيح الصناعي؟",
      whyDesc: "يساعد في تحديد المشاكل الجينية التي قد يرثها الطفل ويختار الأجنة الخالية من التشوهات قبل الزرع، مما يزيد من النجاح والصحة.",
      why: "لماذا الاختبار الجيني؟",
      benefitsTitle: "فوائد الاختبار الجيني في التلقيح الصناعي",
      benefits: ["تحديد الاضطرابات الجينية (مثل هنتنغتون، المنجلي، CF)", "اختيار الأجنة السليمة عبر فحص الاستقرار الكروموسومي", "زيادة معدلات النجاح (قد يضيف PGT-A 10-20٪ ولادة حية)", "راحة البال للعائلات"],
      offeredTitle: "الاختبارات الجينية المقدمة",
      offered: ["PGT-A: فحص الكروموسومات الكيسة الأريمية (يوم 5-6)", "PGT-M: اختبار طفرة أحادية الجين (الانقسام أو الكيسة الأريمية)", "PGT-SR: تحليل إعادة الترتيب الهيكلي (يوم 5-6)"],
      moreCta: "احصل على معلومات",
      techTitle: "حاضنات عالية التكنولوجيا",
      techDesc: "تدعم حاضنات التلقيح الصناعي المتخصصة مع المراقبة الكاملة تطور الأجنة بشكل أفضل ومعدلات حمل أعلى.",
      fishTitle: "FISH (التهجين الموضعي الفلوري)",
      fishDesc: "تربط المجسات الفلورية تسلسلات الحمض النووي المستهدفة لرسم الخرائط والتشخيص والكشف داخل العينات المعقدة.",
      hlaTitle: "تصنيف HLA للأجنة",
      hlaDesc: "يحدد نوع HLA للجنين عبر خزعة الجسم القطبي أو الكيسة الأريمية؛ قد يساعد في العثور على متبرعين متوافقين.",
      cghTitle: "CGH (التهجين الجينومي المقارن)",
      cghDesc: "يفحص التشوهات الكروموسومية الكمية/النوعية؛ أخذ عينات من مرحلة الكيسة الأريمية، تحليل مخبري، اختيار الأجنة الطبيعية.",
      niptTitle: "NIPT24 (Illumina Veriseq NIPT V2)",
      niptDesc: "اختبار ما قبل الولادة غير الجراحي يحلل أجزاء الحمض النووي الجنيني في دم الأم باستخدام NGS من الأسبوع 10.",
      chooseTitle: "اختيار الاختبار المناسب",
      chooseDesc: "نصمم الاختبارات حسب المخاطر الجينية والتاريخ الطبي والتفضيلات مع المستشارين ومتخصصي الخصوبة.",
      closing: "يعزز الفحص الجيني القرارات للحمل الصحي والولادة الآمنة. احجز استشارة مجانية لمعرفة المزيد.",
      servicesTitle: "خدماتنا الجينية",
      services: ["PGD", "NGS", "فحص الناقل", "استشارة جينية", "تحليل الجين الواحد"],
      cta: "احجز موعد",
      contact: "اتصل بنا",
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
            <div ref={descRef} className={`max-w-4xl mx-auto space-y-8 transition-all duration-1000 ${descVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-foreground">{t.whatTitle}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.whatDesc}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-foreground">{t.createDiffTitle}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.createDiffDesc}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 ref={whenTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${whenTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.whenTitle}</h2>
            <div ref={whenGridRef} className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {t.when.map((w, i) => (
                <Card key={i} className={`p-4 flex items-start gap-3 transition-all duration-1000 ${whenGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: whenGridVisible ? `${i * 50}ms` : '0ms' }}>
                  <Microscope className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{w}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div ref={whyRef} className={`transition-all duration-1000 ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">{t.whyTitle}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">{t.whyDesc}</p>
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
            <h2 ref={offTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${offTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.offeredTitle}</h2>
            <div ref={offGridRef} className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {t.offered.map((o, i) => (
                <Card key={i} className={`p-6 hover:shadow-lg smooth-transition transition-all duration-1000 ${offGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: offGridVisible ? `${i * 100}ms` : '0ms' }}>
                  <Dna className="h-10 w-10 text-primary mb-4" />
                  <p className="text-muted-foreground leading-relaxed">{o}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div ref={techGridRef} className={`grid md:grid-cols-2 gap-6 max-w-5xl mx-auto transition-all duration-1000 ${techGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Card className="p-6"><h3 className="text-xl font-semibold mb-2 text-foreground">{t.techTitle}</h3><p className="text-muted-foreground">{t.techDesc}</p></Card>
              <Card className="p-6"><h3 className="text-xl font-semibold mb-2 text-foreground">{t.fishTitle}</h3><p className="text-muted-foreground">{t.fishDesc}</p></Card>
              <Card className="p-6"><h3 className="text-xl font-semibold mb-2 text-foreground">{t.hlaTitle}</h3><p className="text-muted-foreground">{t.hlaDesc}</p></Card>
              <Card className="p-6"><h3 className="text-xl font-semibold mb-2 text-foreground">{t.cghTitle}</h3><p className="text-muted-foreground">{t.cghDesc}</p></Card>
              <Card className="p-6"><h3 className="text-xl font-semibold mb-2 text-foreground">{t.niptTitle}</h3><p className="text-muted-foreground">{t.niptDesc}</p></Card>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div ref={ctaRef} className={`max-w-3xl mx-auto transition-all duration-1000 ${ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <p className="text-lg text-muted-foreground mb-8">{t.chooseDesc}</p>
              <p className="text-lg text-muted-foreground mb-8">{t.closing}</p>
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

export default GeneticsService;
