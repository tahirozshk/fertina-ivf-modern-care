import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Activity, Shield, Heart, Users } from "lucide-react";

const Surrogacy = () => {
  const [language, setLanguage] = useState("tr");

  const content = {
    tr: {
      title: "Taşıyıcı Annelik",
      subtitle: "Yasal güvence altında profesyonel taşıyıcı annelik programı",
      successRate: "%88 Başarı Oranı",
      heroTitle: "Sizin Talebiniz, Bizim Desteğimizle Bir Hayat Başlasın",
      description: "Fertina IVF olarak, tıbben gebelik taşıyamayan kadınlara veya farklı aile yapılarına sahip bireylere taşıyıcı anne yöntemiyle çocuk sahibi olma imkânı sunuyoruz. Bu yöntemle genetik olarak size ait bir embriyo, gönüllü ve sağlıklı gebeliği taşıyabilecek bir taşıyıcı annenin rahmine yerleştirilir ve doğuma kadar takip edilir.",
      whatIsIt: "Taşıyıcı Anne Nedir?",
      whatIsItDesc: "Taşıyıcı anne, başka bir çiftin veya bireyin embriyosunu kendi rahminde taşıyan, doğumdan sonra bebeği biyolojik aileye teslim eden kadındır.",
      importantNote: "Önemli Not: Kullanılan embriyo, alıcı çiftin kendi yumurtası ve spermi ile ya da donörlerden elde edilmiş olabilir. Taşıyıcı annenin genetik bir bağı yoktur.",
      whoIsItFor: "Bu Yöntem Özellikle Şu Durumlarda Uygulanır:",
      candidates: [
        "Rahmi olmayan kadınlar (doğuştan ya da cerrahi nedenlerle)",
        "Tekrarlayan gebelik kayıpları yaşayanlar",
        "Gebeliğin anne için hayati risk taşıdığı sağlık problemleri",
        "Uterin anomaliler",
        "Eşcinsel çiftler veya bekar erkekler",
      ],
      processTitle: "Süreç Nasıl İşler?",
      steps: [
        {
          step: "1. Aşama",
          title: "Başvuru ve Değerlendirme",
          description: "Aday çiftin tıbbi ve psikolojik değerlendirmeleri yapılır. Taşıyıcı anne adayları da titizlikle incelenir.",
        },
        {
          step: "2. Aşama",
          title: "Yasal Süreç ve Onaylar",
          description: "Tüm taraflar arasında etik ve yasal protokoller imzalanır. Taşıyıcı anne ile çift arasında gizlilik ve karşılıklı hakları koruyan sözleşmeler yapılır.",
        },
        {
          step: "3. Aşama",
          title: "Embriyo Oluşturma",
          description: "Ebeveyn adaylarının veya donörlerin yumurta ve sperm hücreleri kullanılarak embriyo oluşturulur.",
        },
        {
          step: "4. Aşama",
          title: "Embriyo Transferi",
          description: "Oluşturulan embriyo taşıyıcı annenin rahmine transfer edilir. Gebelik sürecinin başlaması sağlanır.",
        },
        {
          step: "5. Aşama",
          title: "Gebelik ve Takip",
          description: "Tüm gebelik süreci Fertina IVF uzmanları tarafından yakından izlenir.",
        },
        {
          step: "6. Aşama",
          title: "Doğum ve Yasal Teslim Süreci",
          description: "Doğum sonrası yasal süreçler tamamlanarak bebek ailesine teslim edilir.",
        },
      ],
      advantagesTitle: "Neden Fertina IVF?",
      advantages: [
        "Geniş ve güvenilir taşıyıcı anne havuzu",
        "Yüksek başarı oranına sahip laboratuvar altyapısı (%88)",
        "Tam gizlilik ve etik ilkelere bağlılık",
        "Uluslararası hasta kabulü ve koordinasyonu",
        "Deneyimli tıbbi ekip",
        "Yasal danışmanlık hizmeti",
        "Kapsamlı psikolojik destek",
        "Şeffaf süreç yönetimi",
      ],
      legalTitle: "Kıbrıs'ta Taşıyıcı Annelik",
      legalDescription: "Kıbrıs'ta taşıyıcı annelik bazı durumlarda yasal kısıtlamalara tabi olabilir. Bu nedenle süreç her hasta için bireysel olarak değerlendirilir ve yasal danışmanlık hizmetimizle birlikte ilerlenir. Fertina IVF olarak hem etik hem de yasal standartlara bağlı kalarak bu özel süreci güvenli bir şekilde yürütüyoruz.",
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "Surrogacy",
      subtitle: "Professional surrogacy program under legal protection",
      successRate: "88% Success Rate",
      heroTitle: "Let a Life Begin with Your Request and Our Support",
      description: "As Fertina IVF, we offer the opportunity to have children through surrogacy to women who cannot medically carry a pregnancy or individuals with different family structures. With this method, an embryo genetically belonging to you is placed in the uterus of a voluntary surrogate mother who can carry a healthy pregnancy and is followed until birth.",
      whatIsIt: "What is Surrogacy?",
      whatIsItDesc: "A surrogate mother is a woman who carries the embryo of another couple or individual in her uterus and delivers the baby to the biological family after birth.",
      importantNote: "Important Note: The embryo used may be obtained from the recipient couple's own egg and sperm or from donors. The surrogate mother has no genetic connection.",
      whoIsItFor: "This Method is Applied Especially in the Following Cases:",
      candidates: [
        "Women without a uterus (congenital or surgical reasons)",
        "Those experiencing repeated pregnancy losses",
        "Health problems where pregnancy poses a life-threatening risk to the mother",
        "Uterine anomalies",
        "Same-sex couples or single men",
      ],
      processTitle: "How Does The Process Work?",
      steps: [
        {
          step: "Stage 1",
          title: "Application and Evaluation",
          description: "Medical and psychological evaluations of the candidate couple are made. Surrogate mother candidates are also carefully examined.",
        },
        {
          step: "Stage 2",
          title: "Legal Process and Approvals",
          description: "Ethical and legal protocols are signed between all parties. Contracts protecting confidentiality and mutual rights are made between the surrogate mother and the couple.",
        },
        {
          step: "Stage 3",
          title: "Embryo Formation",
          description: "Embryos are formed using the egg and sperm cells of the prospective parents or donors.",
        },
        {
          step: "Stage 4",
          title: "Embryo Transfer",
          description: "The formed embryo is transferred to the surrogate mother's uterus. The pregnancy process is initiated.",
        },
        {
          step: "Stage 5",
          title: "Pregnancy and Follow-up",
          description: "The entire pregnancy process is closely monitored by Fertina IVF specialists.",
        },
        {
          step: "Stage 6",
          title: "Birth and Legal Delivery Process",
          description: "Legal processes are completed after birth and the baby is delivered to the family.",
        },
      ],
      advantagesTitle: "Why Fertina IVF?",
      advantages: [
        "Wide and reliable surrogate mother pool",
        "Laboratory infrastructure with high success rate (88%)",
        "Full confidentiality and commitment to ethical principles",
        "International patient admission and coordination",
        "Experienced medical team",
        "Legal consultancy service",
        "Comprehensive psychological support",
        "Transparent process management",
      ],
      legalTitle: "Surrogacy in Cyprus",
      legalDescription: "Surrogacy in Cyprus may be subject to legal restrictions in some cases. Therefore, the process is evaluated individually for each patient and proceeds with our legal consultancy service. As Fertina IVF, we conduct this special process safely by adhering to both ethical and legal standards.",
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
              <div className="animate-fade-in">
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
                  <Activity className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">{t.successRate}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">{t.cta}</Button>
                  <Button size="lg" variant="outline">{t.contact}</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.description}
              </p>
            </div>
          </div>
        </section>

        {/* What Is It */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">
                {t.whatIsIt}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t.whatIsItDesc}
              </p>
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg font-semibold text-foreground leading-relaxed">
                    {t.importantNote}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Who Is It For */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              {t.whoIsItFor}
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {t.candidates.map((candidate, index) => (
                <Card key={index} className="p-4 flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{candidate}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              {t.processTitle}
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {t.steps.map((step, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg smooth-transition animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
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

        {/* Advantages */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              {t.advantagesTitle}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {t.advantages.map((advantage, index) => (
                <Card key={index} className="p-4 flex items-center gap-3 bg-card animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{advantage}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
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

        {/* Bottom CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {language === "tr" 
                  ? "Anne-Baba Olmak İçin Tüm Seçenekleri Değerlendirin" 
                  : "Evaluate All Options to Become a Parent"}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {language === "tr"
                  ? "Taşıyıcı annelik, zorlu tıbbi geçmişe rağmen kendi çocuğunuzu kucağınıza alabilmeniz için umut verici bir seçenektir. Fertina IVF olarak, size en uygun çözümü planlıyor ve hayalinizdeki aile için ilk adımı birlikte atıyoruz."
                  : "Surrogacy is a promising option for you to hold your own child in your arms despite a difficult medical history. As Fertina IVF, we plan the most suitable solution for you and take the first step together for your dream family."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact"><Button size="lg">{t.cta}</Button></a>
                <a href="/contact"><Button size="lg" variant="outline">{t.contact}</Button></a>
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

export default Surrogacy;

