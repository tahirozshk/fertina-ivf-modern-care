import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Zap, TrendingUp, Microscope } from "lucide-react";

const CytoplasmTransfer = () => {
  const [language, setLanguage] = useState("tr");

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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                  {t.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  {t.subtitle}
                </p>
                
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg mb-8 inline-flex">
                  <Zap className="h-5 w-5 text-primary" />
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

        {/* What Is It */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
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
        <section className="py-20 bg-background">
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

        {/* Benefits */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              {t.benefitsTitle}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {t.benefits.map((benefit, index) => (
                <Card key={index} className="p-4 flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
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
            <div className="max-w-4xl mx-auto text-center">
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

        {/* Bottom CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
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

