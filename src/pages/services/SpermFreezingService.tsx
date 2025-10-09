import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Snowflake, Shield } from "lucide-react";

const SpermFreezingService = () => {
  const [language, setLanguage] = useState("tr");

  const content = {
    tr: {
      title: "Sperm Dondurma",
      subtitle: "Geleceğe yönelik doğurganlık koruması",
      whatTitle: "Sperm Dondurma Nedir?",
      whatDesc:
        "Sperm dondurma (kriyoprezervasyon), sperm hücrelerinin ileri tarihte kullanım için sıvı azotla çok düşük ısıda saklanması yöntemidir. Bu sayede yıllarca kalite kaybı olmadan korunabilir.",
      whyTitle: "Neden Düşünülür?",
      why: [
        "Doğurganlığın korunması (tedavi öncesi ör. kanser)",
        "Ebeveynliği erteleme (kişisel/mesleki nedenler)",
        "Genetik tarama ile aile planlaması",
        "Esneklik: çiftlerden biri erken gelip örnek bırakabilir",
      ],
      whoTitle: "Kimler İçin Uygundur?",
      who: [
        "Üreme çağındaki erkekler ve doğurganlığını korumak isteyenler",
        "Doğurganlığı etkileyebilecek tedaviler alacak bireyler",
        "Ebeveynliği ertelemek isteyenler",
        "Kanser hastaları veya doğurganlığı etkilenebilecek kişiler",
      ],
      recTitle: "Sperm Dondurma Şu Durumlarda da Önerilebilir",
      rec: [
        "Ağır erkek faktörü infertilite",
        "Standart IVF’de başarısız döllenme",
        "Genetik hastalıklar",
      ],
      processTitle: "Süreç",
      process: [
        "İlk görüşme ve uygunluk değerlendirmesi",
        "Sperm örneğinin steril odada verilmesi",
        "Örneğin işlenmesi ve gereksiz bileşenlerden arındırılması",
        "Kontrollü koşullarda -196°C’de dondurma",
        "Uzun süreli depolama ve izleme",
      ],
      benefitsTitle: "Faydalar",
      benefits: [
        "Doğurganlığın korunması",
        "Ebeveynliği erteleme esnekliği",
        "Kanser tedavisi öncesi güvence",
        "Genetik testlerle bilinçli planlama",
      ],
      factorsTitle: "Başarıyı Etkileyen Faktörler",
      factors: [
        "Örneğin kalitesi (sayı, hareket, morfoloji)",
        "Depolama koşulları ve ısı sürekliliği",
      ],
      conclusion:
        "Sperm kriyoprezervasyonu, doğurganlığın korunması ve planlı ebeveynlik için değerli bir seçenektir. Ücretsiz ön görüşme için bizimle iletişime geçin.",
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "Sperm Freezing",
      subtitle: "Forward‑looking fertility preservation",
      whatTitle: "What is Sperm Freezing?",
      whatDesc:
        "Sperm cryopreservation preserves sperm in liquid nitrogen at very low temperatures for future use—often for years—without loss of quality.",
      whyTitle: "Why Consider Sperm Freezing?",
      why: [
        "Preserving fertility before treatments",
        "Delaying parenthood (personal/professional reasons)",
        "Genetic testing to inform family planning",
        "Flexibility when partners travel at different times",
      ],
      whoTitle: "Who is a Good Candidate?",
      who: [
        "Men of reproductive age wishing to maintain fertility",
        "Patients undergoing fertility‑impacting therapies",
        "Individuals postponing parenthood",
        "Male cancer patients or others at risk of infertility",
      ],
      recTitle: "Sperm Freezing may be recommended in cases of:",
      rec: [
        "Severe male factor infertility",
        "Previous failed fertilization with standard IVF",
        "Genetic disorders",
      ],
      processTitle: "The Sperm Freezing Process",
      process: [
        "Initial consultation and suitability assessment",
        "Sperm collection in a private sterile room",
        "Processing and preparation of the sample",
        "Cryogenic freezing at ~‑196°C",
        "Long‑term storage under controlled conditions",
      ],
      benefitsTitle: "Benefits",
      benefits: [
        "Preserving fertility",
        "Flexibility to delay parenthood",
        "Assurance before cancer therapy",
        "Combined with genetic testing for planning",
      ],
      factorsTitle: "Factors Affecting Success",
      factors: [
        "Sample quality (count, motility, morphology)",
        "Strict temperature and storage conditions",
      ],
      conclusion:
        "Sperm cryopreservation supports fertility preservation and proactive planning. Contact our team for a free consultation.",
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">{t.whatTitle}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.whatDesc}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">{t.whyTitle}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {t.why.map((w, i) => (
                <Card key={i} className="p-4 flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{w}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">{t.whoTitle}</h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {t.who.map((w, i) => (
                <Card key={i} className="p-4 flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{w}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">{t.recTitle}</h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {t.rec.map((r, i) => (
                <Card key={i} className="p-4 flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{r}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">{t.processTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {t.process.map((p, i) => (
                <Card key={i} className="p-6 hover:shadow-lg smooth-transition animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <Snowflake className="h-10 w-10 text-primary mb-4" />
                  <p className="text-muted-foreground leading-relaxed">{p}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">{t.benefitsTitle}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {t.benefits.map((b, i) => (
                <Card key={i} className="p-4 flex items-center gap-3 bg-card animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{b}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">{t.factorsTitle}</h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {t.factors.map((f, i) => (
                <Card key={i} className="p-4 flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{f}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <p className="text-lg text-muted-foreground mb-8">{t.conclusion}</p>
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

export default SpermFreezingService;
