import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Dna, Shield } from "lucide-react";

const SingleGeneAnalysisService = () => {
  const [language, setLanguage] = useState("tr");

  const content = {
    tr: {
      title: "Tek Gen Hastalık Analizi",
      subtitle: "Genetik sağlığı koruyarak sağlıklı nesiller için…",
      intro:
        "Tek gen analizi, anne veya babada taşıyıcılığı bilinen kalıtsal hastalıkların embriyoya geçip geçmediğini belirlemek için yapılan ileri genetik test yöntemidir. Bu sayede sağlıklı embriyolar seçilerek tüp bebek tedavisinde transfer edilir.",
      whenTitle: "Hangi Durumlarda Yapılır?",
      conditions: [
        "Ailede tek genle geçen genetik hastalık öyküsü (kistik fibrozis, talasemi, SMA vb.)",
        "Anne veya babanın genetik testlerinde taşıyıcılık tespiti",
        "Daha önce genetik hastalıklı çocuk sahibi olma öyküsü",
        "Akraba evlilikleri",
        "Kalıtsal hastalık riskini önlemek isteyen çiftler",
      ],
      howTitle: "İşlem Nasıl Yapılır?",
      steps: [
        "Embriyolar laboratuvarda geliştirilir",
        "Embriyolardan birkaç hücre örneği alınır (biyopsi)",
        "Örnekler genetik laboratuvarda analiz edilir",
        "Hastalık taşımayan embriyolar seçilerek transfer edilir",
      ],
      advantagesTitle: "Avantajları",
      advantages: [
        "Kalıtsal hastalıkların nesillere aktarılmasını önler",
        "Sağlıklı gebelik şansını artırır",
        "Güvenli aile planlaması imkânı sağlar",
      ],
      note:
        "Fertina IVF olarak, uluslararası standartlarda genetik analiz yöntemleriyle embriyoları titizlikle inceliyor, sağlıklı nesiller için güvenilir çözümler sunuyoruz.",
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "Single Gene Analysis",
      subtitle: "Protecting genetic health for healthy generations…",
      intro:
        "Single gene analysis is an advanced genetic test to determine whether embryos inherit known hereditary diseases from a carrier parent. Thus, healthy embryos are selected for transfer in IVF.",
      whenTitle: "When is it performed?",
      conditions: [
        "Family history of monogenic disorders (cystic fibrosis, thalassemia, SMA, etc.)",
        "Carrier status identified in either parent",
        "Previous child with a genetic disorder",
        "Consanguineous marriages",
        "Couples wishing to prevent hereditary risks",
      ],
      howTitle: "How is it performed?",
      steps: [
        "Embryos are developed in the laboratory",
        "A few cells are biopsied from embryos",
        "Samples are analyzed in a genetics lab",
        "Disease-free embryos are selected for transfer",
      ],
      advantagesTitle: "Advantages",
      advantages: [
        "Prevents transmission of hereditary diseases",
        "Increases chance of a healthy pregnancy",
        "Enables safer family planning",
      ],
      note:
        "At Fertina IVF, we meticulously examine embryos with internationally standardized genetic methods and provide reliable solutions for healthy generations.",
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
              <p className="text-lg text-muted-foreground leading-relaxed">{t.intro}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">{t.whenTitle}</h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {t.conditions.map((c, i) => (
                <Card key={i} className="p-4 flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                  <Dna className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{c}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
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

        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/10">
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

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">{t.note}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">{t.cta}</Button>
              <Button size="lg" variant="outline">{t.contact}</Button>
            </div>
          </div>
        </section>
      </div>

      <Footer language={language} />
      <WhatsAppButton />
    </div>
  );
};

export default SingleGeneAnalysisService;
