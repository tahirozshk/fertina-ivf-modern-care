import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Snowflake, Shield } from "lucide-react";

const EmbryoFreezingService = () => {
  const [language, setLanguage] = useState("tr");

  const content = {
    tr: {
      title: "Embriyo Dondurma",
      subtitle: "Geleceğe güvenle: yüksek kaliteli embriyoların saklanması",
      whatTitle: "Embriyo Dondurma Nedir?",
      whatDesc:
        "Döllenmiş yumurtaların (embriyoların) ileride kullanılmak üzere dondurulup saklanmasına embriyo dondurma denir. Bu teknik, embriyoların uzun süre güvenle saklanmasına ve istenen zamanda gebelik planlanmasına olanak tanır.",
      whyTitle: "Neden Düşünülür?",
      why: [
        "Doğurganlığın korunması (ör. kanser tedavisi, erken over yetmezliği riski)",
        "Ebeveynliği erteleme (kariyer, eğitim, kişisel nedenler)",
        "Çoğul gebelik riskini azaltma (artık embriyoların saklanması)",
        "Genetik test sonrası sağlıklı embriyoların seçimi",
      ],
      whoTitle: "Kimler İçin Uygundur?",
      who: [
        "İleri anne yaşı",
        "Düşük veya infertilite öyküsü olan hastalar",
        "Doğurganlığı etkileyebilecek tedaviler alacak kişiler",
        "Ailesini daha sonra kurmak isteyen bireyler",
      ],
      recTitle: "Embriyo Dondurma Şu Durumlarda da Önerilebilir",
      rec: [
        "Ağır erkek faktörü infertilite",
        "Standart IVF’de başarısız döllenme öyküsü",
        "Genetik hastalıklar",
      ],
      processTitle: "Süreç Nasıl İşler?",
      process: [
        "İlk görüşme ve değerlendirme",
        "Yumurtalık uyarımı ve takip",
        "Yumurta toplama (OPU)",
        "Döllenme (ICSI veya klasik yöntem)",
        "Embriyo gelişimi (laboratuvar kültürü)",
        "Vitrifikasyon ile hızlı dondurma ve depolama",
      ],
      factorsTitle: "Başarıyı Etkileyen Faktörler",
      factors: [
        "Dondurma aşamasındaki embriyo kalitesi",
        "Depolama ve ısı koşullarının sürekliliği",
      ],
      conclusion:
        "Embriyo dondurma, doğurganlığı korumada güçlü bir seçenektir. Süreç, avantajlar ve olası riskler hakkında bilgi almak için bizimle iletişime geçin.",
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "Embryo Freezing",
      subtitle: "Secure your future by banking high‑quality embryos",
      whatTitle: "What is Embryo Freezing?",
      whatDesc:
        "Embryo cryopreservation stores fertilized eggs (embryos) for later use, allowing patients to preserve fertility and plan pregnancy when ready.",
      whyTitle: "Why Consider Embryo Freezing?",
      why: [
        "Preserving fertility before treatments (e.g., cancer, POI risk)",
        "Delaying parenthood for career/education/personal reasons",
        "Preventing multiple pregnancy by freezing surplus embryos",
        "Enabling genetic testing and informed embryo selection",
      ],
      whoTitle: "Who is a Good Candidate?",
      who: [
        "Women of advanced maternal age",
        "History of infertility or miscarriage",
        "Patients with fertility‑impacting therapies",
        "Those wishing to postpone family building",
      ],
      recTitle: "Embryo Freezing may be recommended in cases of:",
      rec: [
        "Severe male factor infertility",
        "Previous failed fertilization with standard IVF",
        "Genetic disorders",
      ],
      processTitle: "The Embryo Freezing Process",
      process: [
        "Initial consultation and testing",
        "Ovulation induction and monitoring",
        "Egg retrieval (OPU)",
        "Fertilization (ICSI or conventional)",
        "Embryo development in culture",
        "Vitrification and storage",
      ],
      factorsTitle: "Factors Affecting Success",
      factors: [
        "Embryo quality at freezing stage",
        "Stringent storage conditions and temperature control",
      ],
      conclusion:
        "Embryo cryopreservation empowers individuals and couples to plan their future. Contact our team for a consultation and details.",
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

export default EmbryoFreezingService;
