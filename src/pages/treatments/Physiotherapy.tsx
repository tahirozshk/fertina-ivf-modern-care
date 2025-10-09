import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Waves, Heart, Activity, Star } from "lucide-react";

const Physiotherapy = () => {
  const [language, setLanguage] = useState("tr");

  const content = {
    tr: {
      title: "Tüp Bebek ve Fizyoterapi",
      subtitle: "Özel fizyoterapi programları ile tedavi sürecini destekliyoruz",
      heroTitle: "Fertina'ya Özel Yenilikçi Tedavi Yöntemi",
      description: "Rahim duvarı problemlerine bağlı gebelik elde edemeyen hastalarda özel bir cihaz ve teknikle uzman fizyoterapi doktorumuz rehberliğinde embriyo transferi öncesi uyguladığımız seanslarla rahim duvarını transfere hazır hale getiriyoruz. Fertina'ya özel bu tedaviyle gebelik elde edemeyen, defalarca başarısız tüp bebek denemeleri olan hastalarda yüksek başarı oranıyla gebelik elde ediyoruz.",
      howItWorks: "Nasıl Çalışır?",
      howItWorksDesc: "Bu özel yöntem rahme olan kan akışını hızlandırarak rahim duvarındaki oksijenlenmeyi ve embriyonun rahme tutunmasında hayati önemi olan biyokimyasal maddelerin rahim duvarına ulaşmasını sağlar. Nihayetinde daha önce defalarca tüp bebek denemesi olmasına rağmen sonuca ulaşamayan bir çok hastada sağlıklı gebelikler elde ediyoruz.",
      whoIsItFor: "Hangi Hasta Grubuna Uygulanır?",
      candidates: [
        "Küretaj sonrası rahim duvarı hasarlanmış hastalar",
        "Histeroskopi veya diğer jinekolojik ameliyatlar neticesinde rahim duvarı hasarlanmış hastalar",
        "Adenomyozis rahatsızlığına bağlı rahim duvarı düzensiz veya ince olan hastalar",
        "Yapısal olarak rahim duvarı ilaçlara cevap vermeyen hastalar",
        "Tekrarlayan tüp bebek başarısızlığı olan hastalar",
        "Gebelik elde etmesine rağmen tekrarlayan düşük yaşayan hastalar",
      ],
      benefitsTitle: "Fizyoterapi ile Neler Sağlanır?",
      benefits: [
        "Rahme olan kan akışını hızlandırır",
        "Rahim duvarındaki oksijenlenmeyi artırır",
        "Biyokimyasal maddelerin rahim duvarına ulaşmasını sağlar",
        "Embriyonun rahme tutunmasını destekler",
        "Rahim duvarını transfer için hazırlar",
        "Tekrarlayan başarısızlıklarda çözüm sunar",
      ],
      advantagesTitle: "Fertina IVF Fizyoterapi Programı Avantajları",
      advantages: [
        "Fertina'ya özel yenilikçi yöntem",
        "Uzman fizyoterapi doktoru rehberliği",
        "Özel cihaz ve teknikler",
        "Embriyo transferi öncesi hazırlık",
        "Tekrarlayan başarısızlıklarda yüksek başarı",
        "Multidisipliner yaklaşım",
        "Güvenli ve etkili uygulama",
        "Kişiye özel tedavi planı",
      ],
      specialNote: "Fertina IVF'te multidisipliner yaklaşımımızla, tüp bebek tedavisine fizyoterapi desteğini entegre ediyor, çok özel ve farklı bir tedavi seçeneğini güvenle hastalarımıza sunuyoruz.",
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "IVF and Physiotherapy",
      subtitle: "We support the treatment process with special physiotherapy programs",
      heroTitle: "Innovative Treatment Method Special to Fertina",
      description: "For patients who cannot achieve pregnancy due to uterine wall problems, we prepare the uterine wall for transfer with sessions we apply before embryo transfer under the guidance of our specialist physiotherapy doctor with a special device and technique. With this treatment special to Fertina, we achieve pregnancy with high success rates in patients who could not achieve pregnancy and had many unsuccessful IVF attempts.",
      howItWorks: "How Does It Work?",
      howItWorksDesc: "This special method accelerates blood flow to the uterus, providing oxygenation in the uterine wall and allowing biochemical substances that are vital for the embryo's implantation in the uterus to reach the uterine wall. Ultimately, we achieve healthy pregnancies in many patients who could not achieve results despite many previous IVF attempts.",
      whoIsItFor: "Which Patient Group Is It Applied To?",
      candidates: [
        "Patients with damaged uterine wall after curettage",
        "Patients with damaged uterine wall as a result of hysteroscopy or other gynecological surgeries",
        "Patients with irregular or thin uterine wall due to adenomyosis",
        "Patients whose uterine wall does not respond to medications structurally",
        "Patients with recurrent IVF failures",
        "Patients experiencing recurrent miscarriages despite achieving pregnancy",
      ],
      benefitsTitle: "What Is Achieved with Physiotherapy?",
      benefits: [
        "Accelerates blood flow to the uterus",
        "Increases oxygenation in the uterine wall",
        "Ensures biochemical substances reach the uterine wall",
        "Supports embryo implantation in the uterus",
        "Prepares the uterine wall for transfer",
        "Offers solutions for recurrent failures",
      ],
      advantagesTitle: "Fertina IVF Physiotherapy Program Advantages",
      advantages: [
        "Innovative method special to Fertina",
        "Specialist physiotherapy doctor guidance",
        "Special devices and techniques",
        "Pre-embryo transfer preparation",
        "High success in recurrent failures",
        "Multidisciplinary approach",
        "Safe and effective application",
        "Personalized treatment plan",
      ],
      specialNote: "At Fertina IVF, with our multidisciplinary approach, we integrate physiotherapy support into IVF treatment and safely offer a very special and different treatment option to our patients.",
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
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star className="h-6 w-6 text-primary" />
                  <p className="text-lg md:text-xl text-primary font-semibold">
                    {t.heroTitle}
                  </p>
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                  {t.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  {t.subtitle}
                </p>

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

        {/* How It Works */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">
                {t.howItWorks}
              </h2>
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="flex items-start gap-4">
                  <Activity className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground leading-relaxed">
                    {t.howItWorksDesc}
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

        {/* Benefits */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              {t.benefitsTitle}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {t.benefits.map((benefit, index) => (
                <Card key={index} className="p-4 flex items-start gap-3 bg-card animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              {t.advantagesTitle}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {t.advantages.map((advantage, index) => (
                <Card key={index} className="p-4 flex items-center gap-3 bg-card animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm">{advantage}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Special Note Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
                <div className="text-center">
                  <Waves className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-lg text-foreground leading-relaxed font-semibold">
                    {t.specialNote}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {language === "tr" 
                  ? "Tekrarlayan Başarısızlıklara Çözüm" 
                  : "Solution for Recurrent Failures"}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {language === "tr"
                  ? "Daha önce tüp bebek tedavilerinde başarısız olan hastalarımız için geliştirdiğimiz bu özel fizyoterapi programı ile yeni bir umut sunuyoruz. Fertina IVF'nin deneyimi ve yenilikçi yaklaşımıyla yanınızdayız."
                  : "We offer new hope with this special physiotherapy program we have developed for our patients who have been unsuccessful in IVF treatments before. We are with you with the experience and innovative approach of Fertina IVF."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">{t.cta}</Button>
                <Button size="lg" variant="outline">{t.contact}</Button>
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

export default Physiotherapy;

