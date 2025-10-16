import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Zap, TrendingUp, Microscope } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/hooks/use-language";
import { useCounterAnimation } from "@/hooks/use-counter-animation";
import cytoplasmImage from "/sitoplazma.jpg";

const CytoplasmTransfer = () => {
  const { language, setLanguage } = useLanguage();
  const dir = language === "ar" ? "rtl" : "ltr";
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { count: successCount, ref: successRef } = useCounterAnimation({ end: 78, duration: 2000 });
  const { ref: whatIsItRef, isVisible: whatIsItVisible } = useScrollAnimation();
  const { ref: candidatesTitleRef, isVisible: candidatesTitleVisible } = useScrollAnimation();
  const { ref: candidatesGridRef, isVisible: candidatesGridVisible } = useScrollAnimation();
  const { ref: processTitleRef, isVisible: processTitleVisible } = useScrollAnimation();
  const { ref: processGridRef, isVisible: processGridVisible } = useScrollAnimation();
  const { ref: benefitsTitleRef, isVisible: benefitsTitleVisible } = useScrollAnimation();
  const { ref: benefitsGridRef, isVisible: benefitsGridVisible } = useScrollAnimation();
  const { ref: goalRef, isVisible: goalVisible } = useScrollAnimation();
  const { ref: advantagesTitleRef, isVisible: advantagesTitleVisible } = useScrollAnimation();
  const { ref: advantagesGridRef, isVisible: advantagesGridVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const content = {
    tr: {
      title: "Sitoplazma Transferi",
      subtitle: "Yumurta kalitesini artırmak için sitoplazma aktarımı",
      successRate: "%78 Başarı Oranı",
      whatIsIt: "Sitoplazma Nakli Nedir?",
      description: "Sitoplazma nakli, yumurta kalitesini artırmaya yönelik geliştirilen özel bir yardımcı üreme yöntemidir. Bu işlemde, genç ve sağlıklı bir donörden alınan yumurta hücresinin sitoplazması (hücre içi sıvı), anne adayının kendi yumurtasına laboratuvarda dölleme işlemi gerçekleşmeden hemen önce enjekte edilir.",
      technicalInfo: "Ooplazma denilen bu hücre içi aspirat (sıvı) mitokondri, ribozom vb. yardımcı organelleri içerir. Özellikle mitokondri içerdiği mRNA sayesinde döllenme kapasitesini ve döllenen yumurtanın 5. güne ulaşabilme potansiyelini artırır.",
      whoIsItFor: "Kimler İçin Uygundur?",
      candidates: [
        "Yumurtalık rezervi azalmış hastalar",
        "Yumurta kalitesi düşük olan hastalar",
        "Daha önce başarısız tüp bebek denemesi yaşamış çiftler",
        "Yumurta rezervi iyi ancak tekrarlayan düşükleri olan hastalar",
        "İleri yaşta gebelik planlayan kadınlar",
      ],
      processTitle: "Nasıl Uygulanır?",
      steps: [
        {
          step: "1. Aşama",
          title: "Donör Yumurta Alımı",
          description: "Genç bir donörden yumurta alınır.",
        },
        {
          step: "2. Aşama",
          title: "Sitoplazma Ayrıştırma",
          description: "Donör yumurtasından mikroskop altında sitoplazma ayrıştırılır.",
        },
        {
          step: "3. Aşama",
          title: "Mikroenjeksiyon ile Aktarım",
          description: "Bu sıvı, anne adayının yumurtasına mikroenjeksiyon yöntemiyle aktarılır.",
        },
        {
          step: "4. Aşama",
          title: "ICSI ile Döllenme",
          description: "Ardından ICSI (mikroenjeksiyon) yöntemiyle döllenme sağlanır.",
        },
      ],
      goalTitle: "Hedef Nedir?",
      goalDescription: "Sitoplazma nakli ile, anne adayının yumurtasının döllenme potansiyeli artırılır. Aynı zamanda bu işlem neticesinde oluşan döllenmiş yumurtanın yani embriyonun da rahme tutunma potansiyeli daha yüksektir. Böylelikle gebelik oranı ve sağlıklı çocuk dünyaya getirme ihtimali artırılmış olur.",
      advantagesTitle: "Sitoplazma Transferinin Avantajları",
      advantages: [
        "Yumurta kalitesini artırır",
        "Döllenme potansiyelini yükseltir",
        "Embriyo gelişimini destekler",
        "5. güne ulaşma oranını artırır",
        "Rahme tutunma potansiyelini güçlendirir",
        "Gebelik oranını yükseltir",
        "Kendi yumurtanızla şans verir",
        "Mikroskobik hassas işlem",
      ],
      benefitsTitle: "Sitoplazma Transferi ile Neler Sağlanır?",
      benefits: [
        "Mitokondri desteği ile enerji artışı",
        "Ribozom desteği ile protein sentezi",
        "mRNA desteği ile hücresel aktivite",
        "Yardımcı organeller ile hücre gelişimi",
        "Döllenme kapasitesinde artış",
        "Embriyo kalitesinde iyileşme",
      ],
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "Cytoplasm Transfer",
      subtitle: "Cytoplasm transfer to improve egg quality",
      successRate: "78% Success Rate",
      whatIsIt: "What is Cytoplasm Transfer?",
      description: "Cytoplasm transfer is a special assisted reproduction method developed to increase egg quality. In this procedure, the cytoplasm (intracellular fluid) of an egg cell taken from a young and healthy donor is injected into the mother candidate's own egg in the laboratory just before the fertilization process.",
      technicalInfo: "This intracellular aspirate (fluid) called ooplasm contains mitochondria, ribosomes and other helper organelles. Especially thanks to the mRNA contained in mitochondria, it increases the fertilization capacity and the potential of the fertilized egg to reach day 5.",
      whoIsItFor: "Who Is It Suitable For?",
      candidates: [
        "Patients with diminished ovarian reserve",
        "Patients with low egg quality",
        "Couples who have experienced unsuccessful IVF attempts before",
        "Patients with good egg reserve but recurrent miscarriages",
        "Women planning pregnancy at advanced age",
      ],
      processTitle: "How Is It Applied?",
      steps: [
        {
          step: "Stage 1",
          title: "Donor Egg Collection",
          description: "An egg is taken from a young donor.",
        },
        {
          step: "Stage 2",
          title: "Cytoplasm Separation",
          description: "Cytoplasm is separated from the donor egg under a microscope.",
        },
        {
          step: "Stage 3",
          title: "Transfer by Microinjection",
          description: "This fluid is transferred to the mother candidate's egg by microinjection method.",
        },
        {
          step: "Stage 4",
          title: "Fertilization with ICSI",
          description: "Then fertilization is provided by ICSI (microinjection) method.",
        },
      ],
      goalTitle: "What is the Goal?",
      goalDescription: "With cytoplasm transfer, the fertilization potential of the mother candidate's egg is increased. At the same time, the fertilized egg, i.e. the embryo, resulting from this process has a higher potential to implant in the uterus. Thus, the pregnancy rate and the chance of giving birth to a healthy child are increased.",
      advantagesTitle: "Advantages of Cytoplasm Transfer",
      advantages: [
        "Increases egg quality",
        "Enhances fertilization potential",
        "Supports embryo development",
        "Increases day 5 reach rate",
        "Strengthens implantation potential",
        "Increases pregnancy rate",
        "Gives a chance with your own eggs",
        "Microscopic precise procedure",
      ],
      benefitsTitle: "What is Achieved with Cytoplasm Transfer?",
      benefits: [
        "Energy increase with mitochondrial support",
        "Protein synthesis with ribosome support",
        "Cellular activity with mRNA support",
        "Cell development with helper organelles",
        "Increase in fertilization capacity",
        "Improvement in embryo quality",
      ],
      cta: "Book Appointment",
      contact: "Get Information",
    },
    ar: {
      title: "نقل السيتوبلازم",
      subtitle: "نقل السيتوبلازم لتحسين جودة البويضات",
      successRate: "78% معدل النجاح",
      whatIsIt: "ما هو نقل السيتوبلازم؟",
      description: "نقل السيتوبلازم هو طريقة إنجاب مساعدة خاصة تم تطويرها لزيادة جودة البويضات.",
      technicalInfo: "يحتوي هذا السائل على الميتوكوندريا والريبوسومات والعضيات المساعدة الأخرى.",
      whoIsItFor: "لمن هو مناسب؟",
      candidates: ["المرضى الذين لديهم احتياطي مبيض منخفض", "المرضى ذوو جودة البويضات المنخفضة", "الأزواج الذين فشلت تجاربهم السابقة", "المرضى ذوو الاحتياطي الجيد لكن الإجهاض المتكرر", "النساء اللاتي يخططن للحمل في سن متقدمة"],
      processTitle: "كيف يتم التطبيق؟",
      steps: [{step: "المرحلة 1", title: "جمع بويضة المتبرع", description: "يتم أخذ بويضة من متبرع شاب."}, {step: "المرحلة 2", title: "فصل السيتوبلازم", description: "يتم فصل السيتوبلازم."}, {step: "المرحلة 3", title: "النقل بالحقن المجهري", description: "يتم نقل السائل."}, {step: "المرحلة 4", title: "التخصيب بـ ICSI", description: "يتم التخصيب."}],
      goalTitle: "ما هو الهدف؟",
      goalDescription: "مع نقل السيتوبلازم، يتم زيادة إمكانات تخصيب بويضة المرشحة للأمومة.",
      advantagesTitle: "مزايا نقل السيتوبلازم",
      advantages: ["يزيد جودة البويضات", "يرفع إمكانات التخصيب", "يدعم تطور الأجنة", "يزيد معدل الوصول لليوم الخامس", "يقوي إمكانات الزرع", "يرفع معدل الحمل", "يعطي فرصة ببويضاتك الخاصة", "إجراء دقيق"],
      benefitsTitle: "ما يتم تحقيقه بنقل السيتوبلازم؟",
      benefits: ["دعم الميتوكوندريا", "دعم الريبوسوم", "دعم mRNA", "العضيات المساعدة", "زيادة في قدرة التخصيب", "تحسين في جودة الأجنة"],
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
                  <Zap className="h-5 w-5 text-primary" />
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
                  src={cytoplasmImage}
                  alt="Cytoplasm Transfer"
                  className="rounded-3xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What Is It */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div ref={whatIsItRef} className={`max-w-4xl mx-auto transition-all duration-1000 ${whatIsItVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">
                {t.whatIsIt}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t.description}
              </p>
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="flex items-start gap-4">
                  <Microscope className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground leading-relaxed">
                    {t.technicalInfo}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Who Is It For */}
        <section className="py-16 bg-muted/30">
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
        <section className="py-12 sm:py-20 bg-background">
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

        {/* Benefits */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 ref={benefitsTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${benefitsTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {t.benefitsTitle}
            </h2>
            <div ref={benefitsGridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {t.benefits.map((benefit, index) => (
                <Card key={index} className={`p-4 flex items-start gap-3 transition-all duration-1000 ${benefitsGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: benefitsGridVisible ? `${index * 50}ms` : '0ms' }}>
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Goal Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div ref={goalRef} className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${goalVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <TrendingUp className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {t.goalTitle}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.goalDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 bg-background">
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
        <section className="py-12 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <div ref={ctaRef} className={`max-w-3xl mx-auto transition-all duration-1000 ${ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <Zap className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {language === "tr" 
                  ? "Yumurta Kalitenizi Artırın, Şansınızı Yükseltin" 
                  : "Improve Your Egg Quality, Increase Your Chances"}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {language === "tr"
                  ? "Sitoplazma transferi ile kendi yumurtalarınızın kalitesini artırarak gebelik şansınızı yükseltebilirsiniz. Fertina IVF'nin deneyimli ekibi ve modern laboratuvar altyapısıyla yanınızdayız."
                  : "You can increase your chances of pregnancy by improving the quality of your own eggs with cytoplasm transfer. We are with you with Fertina IVF's experienced team and modern laboratory infrastructure."}
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

export default CytoplasmTransfer;

