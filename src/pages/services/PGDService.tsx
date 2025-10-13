import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Dna, Shield } from "lucide-react";

const PGDService = () => {
  const [language, setLanguage] = useState("tr");

  const content = {
    tr: {
      title: "Preimplantasyon Genetik Tanı (PGD)",
      subtitle: "Sağlıklı bir gelecek için genetik güvence",
      intro:
        "Kromozom dizilimi yaşam boyu belirleyicidir. Genetik dizilimdeki hatalar embriyo gelişiminin durmasına veya ciddi bozukluklara yol açabilir. Erken düşüklerin %50-60'ı embriyodaki kromozomal anormalliklerden kaynaklanır; risk özellikle 35 yaş üzeri kadınlarda artar.",
      description:
        "Fertina IVF olarak, bebek sahibi olma yolculuğunuzda genetik açıdan sağlıklı bir çocuk için en gelişmiş yöntemleri sunuyoruz. Bu yöntemlerden biri Preimplantasyon Genetik Tanı (PGD)'dir.",
      whatTitle: "PGD Nedir?",
      whatDesc:
        "PGD, tüp bebek sırasında laboratuvarda oluşan embriyoların genetik açıdan incelenmesini sağlar. Genetik hastalık taşıyan embriyolar tespit edilir ve yalnızca sağlıklı olanlar rahme transfer edilir.",
      recommendedTitle: "PGD şu durumlarda önerilir:",
      recommended: [
        "Ailede kalıtsal bir hastalık varsa",
        "Anne veya baba genetik hastalık taşıyıcısıysa",
        "Tekrarlayan düşük öyküsü varsa",
        "Daha önce genetik hastalıklı bebek dünyaya geldiyse",
        "35 yaş ve üzeri anne adaylarında",
        "Cinsiyetle bağlantılı genetik hastalık riski olan ailelerde",
      ],
      howTitle: "PGD Nasıl Uygulanır?",
      steps: [
        "Tüp bebek tedavisiyle embriyolar elde edilir",
        "5. gün (blastokist) aşamasında embriyoların trofoektoderminden biyopsi alınır",
        "Biyopsi hücreleri genetik laboratuvarda analiz edilir",
        "13, 18, 21, X ve Y kromozomları başta olmak üzere sayısal/yapısal değerlendirme yapılır",
        "Patau, Edwards, Down, Turner, Klinefelter sendromları dışlanır",
        "Genetik olarak sağlıklı embriyolar seçilerek transfer edilir",
      ],
      advantagesTitle: "PGD’nin Avantajları",
      advantages: [
        "Genetik hastalık taşıma riskini azaltır",
        "Sağlıklı embriyo seçimini sağlar",
        "Düşük riskini azaltır",
        "Gebelik sürecine gönül rahatlığıyla başlamayı destekler",
      ],
      note:
        "Daha fazla bilgi almak veya uzmanlarımızla görüşmek için bize ulaşabilirsiniz. Fertina IVF, sağlıklı nesiller için yanınızda.",
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "Preimplantation Genetic Diagnosis (PGD)",
      subtitle: "Genetic assurance for a healthy future",
      intro:
        "Chromosomal composition is decisive for health. Errors in genetic makeup can halt embryo development or cause serious disorders. 50–60% of early miscarriages stem from chromosomal abnormalities; risk increases especially over age 35.",
      description:
        "At Fertina IVF, we offer advanced methods to help you have a genetically healthy child. One of these is PGD.",
      whatTitle: "What is PGD?",
      whatDesc:
        "PGD enables genetic analysis of embryos created during IVF. It identifies embryos carrying genetic disease and allows transfer of only healthy embryos.",
      recommendedTitle: "PGD is recommended when:",
      recommended: [
        "Family history of hereditary disease",
        "Either parent is a carrier",
        "Recurrent miscarriages",
        "Previous child with genetic disease",
        "Women aged 35+",
        "Risk of sex-linked genetic disease",
      ],
      howTitle: "How is PGD Performed?",
      steps: [
        "Embryos are obtained via IVF",
        "On day 5 (blastocyst), trophectoderm biopsy is taken",
        "Biopsied cells are analyzed in a genetics laboratory",
        "Chromosomes 13, 18, 21, X and Y are assessed for number/structure",
        "Excludes Patau, Edwards, Down, Turner and Klinefelter syndromes",
        "Genetically healthy embryos are selected and transferred",
      ],
      advantagesTitle: "Advantages",
      advantages: [
        "Reduces risk of genetic disease",
        "Enables selection of healthy embryos",
        "Reduces miscarriage risk",
        "Provides peace of mind entering pregnancy",
      ],
      note:
        "Contact us for details or to consult our specialists. Fertina IVF stands with you for healthy generations.",
      cta: "Book Appointment",
      contact: "Get Information",
    },
  } as const;

  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen">
      <Navigation language={language} setLanguage={setLanguage} />

      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">{t.title}</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{t.subtitle}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t.intro}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.description}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">{t.whatTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">{t.whatDesc}</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">{t.recommendedTitle}</h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {t.recommended.map((item, i) => (
                <Card key={i} className="p-4 flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                  <Dna className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">{t.howTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {t.steps.map((s, i) => (
                <Card key={i} className="p-6 hover:shadow-lg smooth-transition animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <Dna className="h-10 w-10 text-primary mb-4" />
                  <p className="text-muted-foreground leading-relaxed">{s}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">{t.advantagesTitle}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {t.advantages.map((adv, i) => (
                <Card key={i} className="p-4 flex items-center gap-3 bg-card animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{adv}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">{t.note}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"><Button size="lg">{t.cta}</Button></Link>
              <Link to="/contact"><Button size="lg" variant="outline">{t.contact}</Button></Link>
            </div>
          </div>
        </section>
      </div>

      <Footer language={language} />
      <WhatsAppButton />
    </div>
  );
};

export default PGDService;
