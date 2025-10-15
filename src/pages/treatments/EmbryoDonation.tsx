import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, FlaskConical, Shield, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/hooks/use-language";
import { useCounterAnimation } from "@/hooks/use-counter-animation";

const EmbryoDonation = () => {
  const { language, setLanguage } = useLanguage();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { count: successCount, ref: successRef } = useCounterAnimation({ end: 85, duration: 2000 });
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation();
  const { ref: whatIsItRef, isVisible: whatIsItVisible } = useScrollAnimation();
  const { ref: candidatesTitleRef, isVisible: candidatesTitleVisible } = useScrollAnimation();
  const { ref: candidatesGridRef, isVisible: candidatesGridVisible } = useScrollAnimation();
  const { ref: processTitleRef, isVisible: processTitleVisible } = useScrollAnimation();
  const { ref: processGridRef, isVisible: processGridVisible } = useScrollAnimation();
  const { ref: criteriaTitleRef, isVisible: criteriaTitleVisible } = useScrollAnimation();
  const { ref: criteriaGridRef, isVisible: criteriaGridVisible } = useScrollAnimation();
  const { ref: advantagesTitleRef, isVisible: advantagesTitleVisible } = useScrollAnimation();
  const { ref: advantagesGridRef, isVisible: advantagesGridVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();
  
  const dir = language === "ar" ? "rtl" : "ltr";

  const content = {
    tr: {
      title: "Embriyo Donasyonu",
      subtitle: "Yüksek kaliteli embriyo donasyonu ile ailenizi tamamlayın",
      successRate: "%80-90 Başarı Oranı",
      heroTitle: "En umutsuz anlarda dahi çıkış yolunu Fertina'da arayın",
      heroSubtitle: "Embriyo Donasyonu ile Umuda Yolculuk",
      description: "Fertina IVF olarak, çocuk sahibi olma hayalini gerçekleştiremeyen çiftler için embriyo donasyonu tedavisini, etik, yasal ve bilimsel standartlara uygun şekilde sunuyoruz. Bu yöntem, hem yumurta hem de sperm hücresine ihtiyaç duyulan durumlarda tercih edilir ve yüksek başarı oranlarıyla umut verici bir seçenektir.",
      whatIsIt: "Embriyo Donasyonu Nedir?",
      whatIsItDesc: "Embriyo donasyonu, hem yumurta hem de sperm hücresinin bağışıyla oluşturulan embriyonun, çocuk sahibi olmak isteyen anne adayının rahmine transfer edilmesidir. Spermler Danimarka merkezli sperm bankalarından (Cryos ve European Sperm Bank) Kuzey Kıbrıs Türk Cumhuriyeti Sağlık Bakanlığı izniyle kliniğimize getirilmektedir. %80-90 gibi yüksek gebelik oranları elde ettiğimiz çok başarılı bir yöntemdir.",
      whoIsItFor: "Embriyo Donasyonu Kimler İçin Uygundur?",
      candidates: [
        "Yumurtalık rezervi tükenmiş ve partneri de sperm üretemeyen çiftler",
        "Daha önce defalarca başarısız IVF denemesi yaşamış çiftler",
        "Tek başına çocuk sahibi olmak isteyen ve hem sperm hem yumurtaya ihtiyaç duyan anne adayları",
        "Genetik geçişli hastalıkları önlemek isteyen çiftler",
        "Tekrarlayan başarısızlık yaşayan yumurta donasyonu hastaları",
      ],
      processTitle: "Donör Seçimi ve Süreç Nasıl İşler?",
      steps: [
        {
          step: "1. Aşama",
          title: "Donör Seçimi",
          description: "Fertina IVF'te kullanılan yumurta donörleri titiz bir değerlendirme sürecinden geçer. Spermler Danimarka merkezli sperm bankalarından (Cryos ve European Sperm Bank) Kuzey Kıbrıs Türk Cumhuriyeti Sağlık Bakanlığı izniyle kliniğimize getirilmektedir.",
        },
        {
          step: "2. Aşama",
          title: "Embriyo Oluşturulması",
          description: "Seçilen donörlerin yumurtası ve banka spermi laboratuvar ortamında döllenerek embriyo oluşturulur.",
        },
        {
          step: "3. Aşama",
          title: "Rahim Hazırlığı",
          description: "Anne adayının rahim duvarı yalnızca ağızdan kullanılan kolay uygulanabilir ilaç tedavisiyle transfer için hazırlanır.",
        },
        {
          step: "4. Aşama",
          title: "Embriyo Transferi",
          description: "5. güne ulaşan embriyolardan en kaliteli olanlar seçilir ve rahim içi boşluğa transfer edilir.",
        },
        {
          step: "5. Aşama",
          title: "Gebelik Takibi",
          description: "12 gün sonra gebelik sonucu kan tahliliyle öğrenilir ve süreç izlenir.",
        },
      ],
      donorCriteria: "Tüm Donörlerimiz:",
      criteria: [
        "20-30 yaş aralığında",
        "Tüm sağlık taramalarından geçmiş",
        "Genetik ve enfeksiyon testleri yapılmış",
        "Fiziksel özellikleri ve etnik köken bilgileri kayıt altında",
        "Sigara ve alkol kullanmayan bireyler",
      ],
      advantagesTitle: "Neden Kıbrıs ve Neden Fertina IVF?",
      advantagesDesc: "Kıbrıs, embriyo donasyonu konusunda yasal olarak daha esnek ve güvenli bir ortam sunar.",
      advantages: [
        "Geniş donör havuzumuzla kişiye özel eşleştirme imkânı",
        "Yüksek başarı oranı (%80-90)",
        "Etik kurallara ve gizliliğe tamamen uygun bir süreç",
        "Uzman ve deneyimli medikal kadro",
        "Danimarka merkezli lisanslı sperm bankaları",
        "Sağlık Bakanlığı onaylı süreç",
        "Kapsamlı donör taraması",
        "Psikolojik destek hizmeti",
      ],
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "Embryo Donation",
      subtitle: "Complete your family with high-quality embryo donation",
      successRate: "80-90% Success Rate",
      heroTitle: "Even in the most hopeless moments, seek the way out at Fertina",
      heroSubtitle: "Journey to Hope with Embryo Donation",
      description: "As Fertina IVF, we offer embryo donation treatment for couples who cannot realize their dream of having children, in accordance with ethical, legal and scientific standards. This method is preferred in cases where both egg and sperm cells are needed and is a promising option with high success rates.",
      whatIsIt: "What is Embryo Donation?",
      whatIsItDesc: "Embryo donation is the transfer of an embryo formed by the donation of both egg and sperm cells to the uterus of the prospective mother who wants to have a child. Sperm is brought to our clinic from Denmark-based sperm banks (Cryos and European Sperm Bank) with the permission of the Ministry of Health of the Turkish Republic of Northern Cyprus. It is a very successful method with high pregnancy rates of 80-90%.",
      whoIsItFor: "Who Is Embryo Donation Suitable For?",
      candidates: [
        "Couples whose ovarian reserve is depleted and whose partner cannot produce sperm",
        "Couples who have experienced many unsuccessful IVF attempts before",
        "Mother candidates who want to have a child alone and need both sperm and eggs",
        "Couples who want to prevent genetic diseases",
        "Egg donation patients experiencing repeated failures",
      ],
      processTitle: "How Does Donor Selection and Process Work?",
      steps: [
        {
          step: "Stage 1",
          title: "Donor Selection",
          description: "Egg donors used at Fertina IVF undergo a rigorous evaluation process. Sperm is brought to our clinic from Denmark-based sperm banks (Cryos and European Sperm Bank) with the permission of the Ministry of Health of the Turkish Republic of Northern Cyprus.",
        },
        {
          step: "Stage 2",
          title: "Embryo Formation",
          description: "Embryos are formed by fertilizing the eggs of selected donors and bank sperm in a laboratory environment.",
        },
        {
          step: "Stage 3",
          title: "Uterine Preparation",
          description: "The uterine wall of the mother candidate is prepared for transfer with easy-to-use oral medication therapy only.",
        },
        {
          step: "Stage 4",
          title: "Embryo Transfer",
          description: "The highest quality embryos that reach day 5 are selected and transferred to the uterine cavity.",
        },
        {
          step: "Stage 5",
          title: "Pregnancy Follow-up",
          description: "The pregnancy result is learned by blood test 12 days later and the process is monitored.",
        },
      ],
      donorCriteria: "All Our Donors:",
      criteria: [
        "Between 20-30 years old",
        "Passed all health screenings",
        "Genetic and infection tests performed",
        "Physical characteristics and ethnic origin information recorded",
        "Non-smoking and non-drinking individuals",
      ],
      advantagesTitle: "Why Cyprus and Why Fertina IVF?",
      advantagesDesc: "Cyprus offers a legally more flexible and secure environment for embryo donation.",
      advantages: [
        "Personalized matching opportunity with our wide donor pool",
        "High success rate (80-90%)",
        "A process fully compliant with ethical rules and confidentiality",
        "Expert and experienced medical staff",
        "Denmark-based licensed sperm banks",
        "Ministry of Health approved process",
        "Comprehensive donor screening",
        "Psychological support service",
      ],
      cta: "Book Appointment",
      contact: "Get Information",
    },
    ar: {
      title: "التبرع بالأجنة",
      subtitle: "أكمل عائلتك بالتبرع بالأجنة عالية الجودة",
      successRate: "80-90% معدل النجاح",
      heroTitle: "حتى في أكثر اللحظات يأسًا، ابحث عن المخرج في فيرتينا",
      heroSubtitle: "رحلة إلى الأمل مع التبرع بالأجنة",
      description: "كفيرتينا IVF، نقدم علاج التبرع بالأجنة للأزواج الذين لا يستطيعون تحقيق حلمهم بإنجاب أطفال، وفقًا للمعايير الأخلاقية والقانونية والعلمية. يُفضل هذا الأسلوب في الحالات التي تحتاج إلى كل من خلايا البويضات والحيوانات المنوية وهو خيار واعد بمعدلات نجاح عالية.",
      whatIsIt: "ما هو التبرع بالأجنة؟",
      whatIsItDesc: "التبرع بالأجنة هو نقل جنين تم تكوينه من خلال التبرع بكل من خلايا البويضات والحيوانات المنوية إلى رحم الأم المحتملة التي تريد إنجاب طفل. يتم جلب الحيوانات المنوية إلى عيادتنا من بنوك الحيوانات المنوية في الدنمارك (Cryos و European Sperm Bank) بإذن من وزارة الصحة في جمهورية شمال قبرص التركية. إنها طريقة ناجحة جدًا بمعدلات حمل عالية تتراوح بين 80-90٪.",
      whoIsItFor: "لمن يناسب التبرع بالأجنة؟",
      candidates: [
        "الأزواج الذين نفذ احتياطي المبيض لديهم ولا يستطيع الشريك إنتاج الحيوانات المنوية",
        "الأزواج الذين مروا بمحاولات فاشلة عديدة للتلقيح الصناعي من قبل",
        "المرشحات للأمومة اللاتي يرغبن في إنجاب طفل بمفردهن ويحتجن إلى كل من الحيوانات المنوية والبويضات",
        "الأزواج الذين يرغبون في منع الأمراض الوراثية",
        "مريضات التبرع بالبويضات اللاتي يعانين من فشل متكرر",
      ],
      processTitle: "كيف يعمل اختيار المتبرع والعملية؟",
      steps: [
        {
          step: "المرحلة 1",
          title: "اختيار المتبرع",
          description: "يخضع المتبرعون بالبويضات المستخدمون في فيرتينا IVF لعملية تقييم صارمة. يتم جلب الحيوانات المنوية إلى عيادتنا من بنوك الحيوانات المنوية في الدنمارك (Cryos و European Sperm Bank) بإذن من وزارة الصحة في جمهورية شمال قبرص التركية.",
        },
        {
          step: "المرحلة 2",
          title: "تكوين الأجنة",
          description: "يتم تكوين الأجنة عن طريق تخصيب بويضات المتبرعين المختارين والحيوانات المنوية من البنك في بيئة مختبرية.",
        },
        {
          step: "المرحلة 3",
          title: "تحضير الرحم",
          description: "يتم تحضير جدار الرحم للمرشحة للأمومة للنقل بعلاج دوائي سهل الاستخدام عن طريق الفم فقط.",
        },
        {
          step: "المرحلة 4",
          title: "نقل الأجنة",
          description: "يتم اختيار الأجنة عالية الجودة التي تصل إلى اليوم الخامس ونقلها إلى تجويف الرحم.",
        },
        {
          step: "المرحلة 5",
          title: "متابعة الحمل",
          description: "يتم معرفة نتيجة الحمل عن طريق فحص الدم بعد 12 يومًا ومراقبة العملية.",
        },
      ],
      donorCriteria: "جميع المتبرعين لدينا:",
      criteria: [
        "تتراوح أعمارهم بين 20-30 عامًا",
        "اجتازوا جميع الفحوصات الصحية",
        "تم إجراء اختبارات جينية ومعدية",
        "تم تسجيل الخصائص الجسدية ومعلومات الأصل العرقي",
        "أفراد غير مدخنين ولا يتناولون الكحول",
      ],
      advantagesTitle: "لماذا قبرص ولماذا فيرتينا IVF؟",
      advantagesDesc: "تقدم قبرص بيئة أكثر مرونة وأمانًا قانونيًا للتبرع بالأجنة.",
      advantages: [
        "فرصة مطابقة شخصية مع مجموعة المتبرعين الواسعة لدينا",
        "معدل نجاح عالٍ (80-90٪)",
        "عملية متوافقة تمامًا مع القواعد الأخلاقية والسرية",
        "طاقم طبي خبير وذو خبرة",
        "بنوك الحيوانات المنوية المرخصة في الدنمارك",
        "عملية معتمدة من وزارة الصحة",
        "فحص شامل للمتبرعين",
        "خدمة الدعم النفسي",
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
        <section className="relative py-12 sm:py-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div ref={heroRef} className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <p className="text-lg md:text-xl text-muted-foreground mb-4 italic">
                  {t.heroTitle}
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                  {t.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  {t.subtitle}
                </p>
                
                <div ref={successRef} className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg mb-8 inline-flex">
                  <FlaskConical className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">
                    {language === "tr" ? "Başarı Oranı: " : "Success Rate: "}%{successCount}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact"><Button size="lg">{t.cta}</Button></Link>
                <Link to="/contact"><Button size="lg" variant="outline">{t.contact}</Button></Link>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div ref={descRef} className={`max-w-4xl mx-auto transition-all duration-1000 ${descVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t.description}
              </p>
            </div>
          </div>
        </section>

        {/* What Is It */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div ref={whatIsItRef} className={`max-w-4xl mx-auto transition-all duration-1000 ${whatIsItVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">
                {t.whatIsIt}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.whatIsItDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Who Is It For */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 ref={candidatesTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${candidatesTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {t.whoIsItFor}
            </h2>
            <div ref={candidatesGridRef} className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
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
        <section className="py-12 sm:py-20 bg-muted/30">
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

        {/* Donor Criteria */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 ref={criteriaTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${criteriaTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {t.donorCriteria}
            </h2>
            <div ref={criteriaGridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {t.criteria.map((criterion, index) => (
                <Card key={index} className={`p-4 flex items-start gap-3 transition-all duration-1000 ${criteriaGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: criteriaGridVisible ? `${index * 50}ms` : '0ms' }}>
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{criterion}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <h2 ref={advantagesTitleRef} className={`text-3xl md:text-4xl font-bold mb-4 text-center text-foreground transition-all duration-1000 ${advantagesTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {t.advantagesTitle}
            </h2>
            <p className={`text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto transition-all duration-1000 ${advantagesTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {t.advantagesDesc}
            </p>
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
        <section className="py-12 sm:py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div ref={ctaRef} className={`max-w-3xl mx-auto transition-all duration-1000 ${ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {language === "tr" 
                  ? "Embriyo Donasyonu ile Hayalinize Bir Adım Daha Yaklaşın" 
                  : language === "ar"
                  ? "اقترب خطوة واحدة من حلمك مع التبرع بالأجنة"
                  : "Get One Step Closer to Your Dream with Embryo Donation"}
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                {language === "tr"
                  ? "Anne ya da baba olmak için farklı yöntemler uygulanabilir. Önemli olan, bu süreçte yalnız olmadığınızı bilmenizdir."
                  : language === "ar"
                  ? "يمكن تطبيق طرق مختلفة لتصبح أمًا أو أبًا. المهم هو أن تعرف أنك لست وحدك في هذه العملية."
                  : "Different methods can be applied to become a mother or father. What matters is knowing that you are not alone in this process."}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                {language === "tr"
                  ? "Fertina IVF olarak sizin için en uygun tedavi sürecini planlıyor, hem tıbbi hem de psikolojik olarak yanınızda oluyoruz."
                  : language === "ar"
                  ? "كفيرتينا IVF، نخطط لعملية العلاج الأنسب لك ونكون معك من الناحية الطبية والنفسية."
                  : "As Fertina IVF, we plan the most suitable treatment process for you and are with you both medically and psychologically."}
              </p>
              <p className="text-xl font-semibold text-primary mb-8">
                {language === "tr"
                  ? "Fertina IVF – Bilimin Gücüyle Aile Olmanın Mutluluğu"
                  : language === "ar"
                  ? "فيرتينا IVF – فرحة أن تصبح عائلة بقوة العلم"
                  : "Fertina IVF – The Joy of Becoming a Family with the Power of Science"}
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

export default EmbryoDonation;

