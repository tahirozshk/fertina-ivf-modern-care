import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Heart, Shield, Users } from "lucide-react";
import eggDonationImage from "@/assets/treatments/egg-donation.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/hooks/use-language";
import { useCounterAnimation } from "@/hooks/use-counter-animation";

const EggDonation = () => {
  const { language, setLanguage } = useLanguage();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { count: successCount, ref: successRef } = useCounterAnimation({ end: 89, duration: 2000 });
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation();
  const { ref: candidatesTitleRef, isVisible: candidatesTitleVisible } = useScrollAnimation();
  const { ref: candidatesGridRef, isVisible: candidatesGridVisible } = useScrollAnimation();
  const { ref: processTitleRef, isVisible: processTitleVisible } = useScrollAnimation();
  const { ref: processGridRef, isVisible: processGridVisible } = useScrollAnimation();
  const { ref: advantagesTitleRef, isVisible: advantagesTitleVisible } = useScrollAnimation();
  const { ref: advantagesGridRef, isVisible: advantagesGridVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();
  
  const dir = language === "ar" ? "rtl" : "ltr";

  const content = {
    tr: {
      title: "Yumurta Donasyonu",
      subtitle: "Titizlikle seçilmiş donörlerle güvenilir yumurta donasyon programı",
      successRate: "%89 Başarı Oranı",
      description: "Yumurta donasyonu, kendi yumurtalarını kullanamayan çiftlerin sağlıklı bir donörden yumurta alarak anne olma şansını yakalamasını sağlar. Fertina IVF'de tüm donörlerimiz detaylı sağlık kontrolünden geçer ve yasal güvence altındadır.",
      whoIsItFor: "Kimlere Uygulanır?",
      candidates: [
        "Erken yumurtalık yetmezliği (POF) olan kadınlar",
        "İleri yaş (40 yaş üzeri) kadınlar",
        "Düşük over rezervi olan hastalar",
        "Genetik hastalık taşıyıcısı olan kadınlar",
        "Tekrarlayan IVF başarısızlıkları",
        "Kemoterapi veya radyoterapi görmüş hastalar",
      ],
      processTitle: "Donör Seçim Süreci",
      steps: [
        {
          title: "Detaylı Sağlık Kontrolü",
          description: "Tüm donörlerimiz kapsamlı genetik testler, bulaşıcı hastalık testleri ve psikolojik değerlendirmeden geçer.",
        },
        {
          title: "Fiziksel Eşleştirme",
          description: "Donör seçiminde; göz rengi, saç rengi, boy, kilo ve kan grubu gibi fiziksel özellikler dikkate alınır.",
        },
        {
          title: "Yasal Prosedür",
          description: "Tüm süreç yasal mevzuata uygun olarak yürütülür ve tarafların hakları korunur.",
        },
        {
          title: "Gizlilik Garantisi",
          description: "Donör ve alıcı arasında karşılıklı gizlilik ilkesi titizlikle uygulanır.",
        },
      ],
      advantagesTitle: "Fertina IVF Donör Programı Özellikleri",
      advantages: [
        "18-32 yaş arası sağlıklı donörler",
        "Detaylı genetik tarama (NGS, PGD)",
        "Psikolojik değerlendirme",
        "Fiziksel özellik eşleştirmesi",
        "Yasal güvence ve gizlilik",
        "Yüksek başarı oranı (%89)",
        "Deneyimli koordinatör desteği",
        "Şeffaf süreç yönetimi",
      ],
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "Egg Donation",
      subtitle: "Reliable egg donation program with carefully selected donors",
      successRate: "89% Success Rate",
      description: "Egg donation allows couples who cannot use their own eggs to have a chance of becoming parents by receiving eggs from a healthy donor. At Fertina IVF, all our donors undergo detailed health checks and are under legal protection.",
      whoIsItFor: "Who Is It For?",
      candidates: [
        "Women with premature ovarian failure (POF)",
        "Advanced age women (over 40)",
        "Patients with low ovarian reserve",
        "Women who are carriers of genetic diseases",
        "Repeated IVF failures",
        "Patients who have received chemotherapy or radiotherapy",
      ],
      processTitle: "Donor Selection Process",
      steps: [
        {
          title: "Detailed Health Check",
          description: "All our donors undergo comprehensive genetic tests, infectious disease tests and psychological evaluation.",
        },
        {
          title: "Physical Matching",
          description: "Physical characteristics such as eye color, hair color, height, weight and blood type are taken into account in donor selection.",
        },
        {
          title: "Legal Procedure",
          description: "The entire process is carried out in accordance with legal regulations and the rights of the parties are protected.",
        },
        {
          title: "Confidentiality Guarantee",
          description: "The principle of mutual confidentiality between donor and recipient is strictly applied.",
        },
      ],
      advantagesTitle: "Fertina IVF Donor Program Features",
      advantages: [
        "Healthy donors aged 18-32",
        "Detailed genetic screening (NGS, PGD)",
        "Psychological evaluation",
        "Physical feature matching",
        "Legal protection and confidentiality",
        "High success rate (89%)",
        "Experienced coordinator support",
        "Transparent process management",
      ],
      cta: "Book Appointment",
      contact: "Get Information",
    },
    ar: {
      title: "التبرع بالبويضات",
      subtitle: "برنامج موثوق للتبرع بالبويضات مع متبرعين مختارين بعناية",
      successRate: "89% معدل النجاح",
      description: "يتيح التبرع بالبويضات للأزواج الذين لا يستطيعون استخدام بويضاتهم الخاصة فرصة أن يصبحوا آباء من خلال تلقي بويضات من متبرع صحي. في فيرتينا IVF، يخضع جميع المتبرعين لدينا لفحوصات صحية مفصلة ويخضعون للحماية القانونية.",
      whoIsItFor: "لمن هو مناسب؟",
      candidates: [
        "النساء المصابات بفشل المبيض المبكر (POF)",
        "النساء في سن متقدمة (فوق 40)",
        "المرضى الذين يعانون من انخفاض احتياطي المبيض",
        "النساء الحاملات لأمراض وراثية",
        "حالات فشل التلقيح الصناعي المتكررة",
        "المرضى الذين تلقوا العلاج الكيميائي أو الإشعاعي",
      ],
      processTitle: "عملية اختيار المتبرع",
      steps: [
        {
          title: "فحص صحي مفصل",
          description: "يخضع جميع المتبرعين لدينا لاختبارات جينية شاملة واختبارات الأمراض المعدية والتقييم النفسي.",
        },
        {
          title: "المطابقة الجسدية",
          description: "يتم أخذ الخصائص الجسدية مثل لون العين ولون الشعر والطول والوزن وفصيلة الدم في الاعتبار في اختيار المتبرع.",
        },
        {
          title: "الإجراء القانوني",
          description: "يتم تنفيذ العملية بأكملها وفقًا للوائح القانونية ويتم حماية حقوق الأطراف.",
        },
        {
          title: "ضمان السرية",
          description: "يتم تطبيق مبدأ السرية المتبادلة بين المتبرع والمتلقي بصرامة.",
        },
      ],
      advantagesTitle: "ميزات برنامج المتبرعين في فيرتينا IVF",
      advantages: [
        "متبرعون أصحاء تتراوح أعمارهم بين 18-32 عامًا",
        "فحص جيني مفصل (NGS، PGD)",
        "التقييم النفسي",
        "مطابقة الميزات الجسدية",
        "الحماية القانونية والسرية",
        "معدل نجاح عالٍ (89%)",
        "دعم منسق ذو خبرة",
        "إدارة عملية شفافة",
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div ref={heroRef} className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                  {t.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  {t.subtitle}
                </p>
                
                <div ref={successRef} className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg mb-8 inline-flex">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">
                    {language === "tr" ? "Başarı Oranı: " : "Success Rate: "}%{successCount}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact"><Button size="lg">{t.cta}</Button></Link>
                  <Link to="/contact"><Button size="lg" variant="outline">{t.contact}</Button></Link>
                </div>
              </div>

              <div className={`relative transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <img
                  src={eggDonationImage}
                  alt="Egg Donation"
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

        {/* Donor Selection Process */}
        <section className="py-12 sm:py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 ref={processTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${processTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {t.processTitle}
            </h2>
            <div ref={processGridRef} className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {t.steps.map((step, index) => (
                <Card
                  key={index}
                  className={`p-6 hover:shadow-lg smooth-transition transition-all duration-1000 ${processGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: processGridVisible ? `${index * 100}ms` : '0ms' }}
                >
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
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
        <section className="py-12 sm:py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div ref={ctaRef} className={`max-w-3xl mx-auto transition-all duration-1000 ${ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <Users className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {language === "tr" 
                  ? "Anne Olma Hayalinizi Gerçekleştirin" 
                  : language === "ar"
                  ? "حقق حلمك بالأمومة"
                  : "Make Your Dream of Motherhood Come True"}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {language === "tr"
                  ? "Yumurta donasyonu programımız hakkında detaylı bilgi almak ve size uygun donör seçeneklerini değerlendirmek için bizimle iletişime geçin."
                  : language === "ar"
                  ? "اتصل بنا للحصول على معلومات مفصلة حول برنامج التبرع بالبويضات لدينا ولتقييم خيارات المتبرعين المناسبة لك."
                  : "Contact us for detailed information about our egg donation program and to evaluate suitable donor options for you."}
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

export default EggDonation;
