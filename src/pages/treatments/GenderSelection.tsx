import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Dna, Shield, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const GenderSelection = () => {
  const [language, setLanguage] = useState("tr");
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation();
  const { ref: whatIsItRef, isVisible: whatIsItVisible } = useScrollAnimation();
  const { ref: benefitsTitleRef, isVisible: benefitsTitleVisible } = useScrollAnimation();
  const { ref: benefitsGridRef, isVisible: benefitsGridVisible } = useScrollAnimation();
  const { ref: candidatesTitleRef, isVisible: candidatesTitleVisible } = useScrollAnimation();
  const { ref: candidatesGridRef, isVisible: candidatesGridVisible } = useScrollAnimation();
  const { ref: processTitleRef, isVisible: processTitleVisible } = useScrollAnimation();
  const { ref: processGridRef, isVisible: processGridVisible } = useScrollAnimation();
  const { ref: legalRef, isVisible: legalVisible } = useScrollAnimation();
  const { ref: advantagesTitleRef, isVisible: advantagesTitleVisible } = useScrollAnimation();
  const { ref: advantagesGridRef, isVisible: advantagesGridVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const content = {
    tr: {
      title: "Cinsiyet Belirleme",
      subtitle: "PGD teknolojisi ile yasal ve etik çerçevede cinsiyet seçimi",
      successRate: "%99 Doğruluk Oranı",
      heroTitle: "Ailenizi Planlarken Tercih Sizin Olsun",
      description: "Fertina IVF olarak, aile planlamasında ebeveynlerin isteklerine saygı duyuyor, yasal sınırlar çerçevesinde cinsiyet seçimine olanak tanıyan gelişmiş tüp bebek teknolojilerini sunuyoruz. Cinsiyet belirleme, özellikle dengeli bir aile yapısı kurmak isteyen veya kalıtsal cinsiyete bağlı hastalıkların önüne geçmek isteyen çiftler için geliştirilmiş bir yöntemdir.",
      whatIsIt: "Cinsiyet Belirleme Nedir?",
      whatIsItDesc: "Cinsiyet belirleme, embriyo transferi öncesinde yapılan genetik taramalar (PGD - Preimplantation Genetic Diagnosis) ile embriyoların cinsiyetinin tespit edilip, istenilen cinsiyete sahip embriyonun seçilmesi işlemidir. Bu analiz neticesinde 13, 18, 21, X ve Y kromozomlarına bağlı sayısal ve yapısal anormallikler taranarak transfer edilecek embriyonun kromozomal sağlığı ve de cinsiyeti tespit edilmiş olur.",
      benefitsTitle: "PGD ile Neler Tespit Edilir?",
      benefits: [
        "Patau Sendromu (13. kromozom)",
        "Edwards Sendromu (18. kromozom)",
        "Down Sendromu - Mongolluk (21. kromozom)",
        "Turner Sendromu (X kromozomu)",
        "Klinefelter Sendromu (Y kromozomu)",
        "Embriyonun cinsiyeti",
      ],
      advantagesDesc: "Transfer öncesi embryonun sağlığından emin olunduğu için embriyonun rahme tutunma ihtimali artar ve gebelik süresince 2'li test, NIPD gibi genetik testlerin yapılmasına gerek kalmaz.",
      processDesc: "Bu işlem, döllenmiş yumurtaların yani embriyoların 5. güne ulaşabilenlerinin kabuğundan (trofoektoderm) transfer günü sabahı biopsi alınmasıyla başlar. Alınan biopsiler genetik laboratuvara gönderilir ve sonuç 3-4 saat içinde gelir. Sonuca göre bilgilendirme yapılır ve karara göre transfer gerçekleştirilir.",
      whoIsItFor: "Kimler Cinsiyet Belirleme Talep Edebilir?",
      candidates: [
        "Daha önce aynı cinsiyetten birden fazla çocuğu olan aileler",
        "Ailede cinsiyete bağlı geçiş gösteren genetik hastalık riski taşıyanlar",
        "Dengeli bir aile yapısı isteyen çiftler",
        "Uluslararası hastalar (ülke yasalarına bağlı olarak)",
      ],
      processTitle: "Tedavi Süreci Nasıl İşler?",
      steps: [
        {
          step: "1. Aşama",
          title: "Ön Görüşme ve Tıbbi Değerlendirme",
          description: "Aday çiftin tıbbi öyküsü alınır, gerekli testler planlanır.",
        },
        {
          step: "2. Aşama",
          title: "Yumurtalıkların Uyarılması ve Yumurta Toplama",
          description: "Anne adayına uygulanan günlük ağrısız cilt altı tedaviyle yumurtalıklar uyarılır, ardından yumurtalar toplanır.",
        },
        {
          step: "3. Aşama",
          title: "Döllenme ve Embriyo Gelişimi",
          description: "Yumurtalar spermle döllenir, oluşturulan döllenmiş yumurtalar (embriyolar) laboratuvarda geliştirilir.",
        },
        {
          step: "4. Aşama",
          title: "PGD ile Genetik Test ve Cinsiyet Belirleme",
          description: "5. gün embriyolarına biyopsi yapılır, cinsiyet bilgisi genetik olarak tespit edilir. Sonuç 3-4 saat içinde gelir.",
        },
        {
          step: "5. Aşama",
          title: "Embriyo Transferi",
          description: "İstenilen cinsiyetteki sağlıklı embriyo, anne adayının rahim içi boşluğuna transfer edilir.",
        },
      ],
      legalTitle: "Yasal ve Etik Uygulama",
      legalDescription: "Kıbrıs'ta cinsiyet seçimi, etik kurallar çerçevesinde gerçekleştirilebilmektedir. Fertina IVF, bu süreçte hastalarının gizliliğini en üst seviyede korur ve her aşamada bilgilendirme sağlar.",
      advantagesTitle: "Fertina IVF'de Cinsiyet Belirleme Avantajları",
      advantages: [
        "%99 doğruluk oranı",
        "Genetik hastalıkların tespiti",
        "Yüksek gebelik başarısı",
        "Yasal ve etik uygulama",
        "Gizlilik garantisi",
        "Modern PGD teknolojisi",
        "Deneyimli genetik uzmanları",
        "3-4 saat içinde sonuç",
      ],
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "Gender Selection",
      subtitle: "Gender selection within legal and ethical framework using PGD technology",
      successRate: "99% Accuracy Rate",
      heroTitle: "The Choice is Yours When Planning Your Family",
      description: "As Fertina IVF, we respect the wishes of parents in family planning and offer advanced IVF technologies that allow gender selection within legal boundaries. Gender selection is a method developed especially for couples who want to establish a balanced family structure or prevent hereditary sex-linked diseases.",
      whatIsIt: "What is Gender Selection?",
      whatIsItDesc: "Gender selection is the process of detecting the gender of embryos and selecting the embryo with the desired gender through genetic screening (PGD - Preimplantation Genetic Diagnosis) performed before embryo transfer. As a result of this analysis, numerical and structural abnormalities related to chromosomes 13, 18, 21, X and Y are screened and the chromosomal health and gender of the embryo to be transferred is determined.",
      benefitsTitle: "What is Detected with PGD?",
      benefits: [
        "Patau Syndrome (chromosome 13)",
        "Edwards Syndrome (chromosome 18)",
        "Down Syndrome (chromosome 21)",
        "Turner Syndrome (X chromosome)",
        "Klinefelter Syndrome (Y chromosome)",
        "Gender of the embryo",
      ],
      advantagesDesc: "Since the health of the embryo is ensured before transfer, the embryo's chance of implanting in the uterus increases and there is no need for genetic tests such as double test and NIPD during pregnancy.",
      processDesc: "This process begins with a biopsy taken from the shell (trophectoderm) of fertilized eggs, i.e. embryos that reach day 5, on the morning of transfer day. The biopsies taken are sent to the genetic laboratory and the result comes within 3-4 hours. Information is provided according to the result and the transfer is performed according to the decision.",
      whoIsItFor: "Who Can Request Gender Selection?",
      candidates: [
        "Families who already have multiple children of the same gender",
        "Those who carry the risk of sex-linked genetic diseases in the family",
        "Couples who want a balanced family structure",
        "International patients (depending on country laws)",
      ],
      processTitle: "How Does The Treatment Process Work?",
      steps: [
        {
          step: "Stage 1",
          title: "Pre-Consultation and Medical Evaluation",
          description: "The medical history of the candidate couple is taken and necessary tests are planned.",
        },
        {
          step: "Stage 2",
          title: "Ovarian Stimulation and Egg Collection",
          description: "Ovaries are stimulated with daily painless subcutaneous treatment applied to the mother candidate, then eggs are collected.",
        },
        {
          step: "Stage 3",
          title: "Fertilization and Embryo Development",
          description: "Eggs are fertilized with sperm, formed fertilized eggs (embryos) are developed in the laboratory.",
        },
        {
          step: "Stage 4",
          title: "Genetic Testing and Gender Determination with PGD",
          description: "Day 5 embryos are biopsied, gender information is genetically determined. Results come within 3-4 hours.",
        },
        {
          step: "Stage 5",
          title: "Embryo Transfer",
          description: "The healthy embryo of the desired gender is transferred to the uterine cavity of the mother candidate.",
        },
      ],
      legalTitle: "Legal and Ethical Practice",
      legalDescription: "Gender selection can be performed within the framework of ethical rules in Cyprus. Fertina IVF protects the confidentiality of its patients at the highest level in this process and provides information at every stage.",
      advantagesTitle: "Gender Selection Advantages at Fertina IVF",
      advantages: [
        "99% accuracy rate",
        "Detection of genetic diseases",
        "High pregnancy success",
        "Legal and ethical practice",
        "Confidentiality guarantee",
        "Modern PGD technology",
        "Experienced genetic specialists",
        "Results within 3-4 hours",
      ],
      cta: "Book Appointment",
      contact: "Get Information",
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen">
      <Navigation language={language} setLanguage={setLanguage} />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div ref={heroRef} className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <p className="text-lg md:text-xl text-primary mb-4 font-semibold">
                  {t.heroTitle}
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                  {t.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  {t.subtitle}
                </p>
                
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg mb-8 inline-flex">
                  <Dna className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">{t.successRate}</span>
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
              <p className="text-lg text-muted-foreground leading-relaxed">
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
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t.whatIsItDesc}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t.advantagesDesc}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.processDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Benefits - What is Detected */}
        <section className="py-16 bg-background">
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
        <section className="py-20 bg-background">
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

        {/* Legal Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div ref={legalRef} className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${legalVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {t.legalTitle}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.legalDescription}
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
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <div ref={ctaRef} className={`max-w-3xl mx-auto transition-all duration-1000 ${ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <Users className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {language === "tr" 
                  ? "Fertina IVF ile Güvenli ve Planlı Aile Gelişimi" 
                  : "Safe and Planned Family Development with Fertina IVF"}
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                {language === "tr"
                  ? "Modern tıbbın sunduğu olanakları etik ve saygılı bir yaklaşımla sunuyoruz."
                  : "We offer the opportunities provided by modern medicine with an ethical and respectful approach."}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                {language === "tr"
                  ? "Cinsiyet belirleme, yalnızca bir tercih değil, bazen genetik hastalıkların önlenmesi için de bir gerekliliktir. Biz, her iki durumda da yanınızdayız."
                  : "Gender selection is not just a choice, but sometimes a necessity to prevent genetic diseases. We are with you in both cases."}
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

export default GenderSelection;

