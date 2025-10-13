import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ScanSearch, Dna, Shield } from "lucide-react";

const NGSService = () => {
  const [language, setLanguage] = useState("tr");

  const content = {
    tr: {
      title: "Yeni Nesil Dizileme (NGS)",
      subtitle: "Embriyolarda kromozom düzeyinde kapsamlı tarama",
      description:
        "NGS, embriyolarda kromozom düzeyinde detaylı tarama yapmamızı sağlayan gelişmiş bir genetik analiz yöntemidir. Bu test sayesinde DNA'yı oluşturan tüm 46 kromozomu sayısal ve yapısal olarak tarayarak sadece sağlıklı olanların seçilip transfer edilmesine olanak sağlar. Böylece embriyo transferinde başarı oranı yükselir.",
      advantagesTitle: "NGS’in Avantajları",
      advantages: [
        "Sağlıklı ve kromozomal olarak normal embriyo seçimi",
        "Başarı oranlarında artış",
        "Düşük riskinde azalma",
        "Gereksiz transferlerin önüne geçilmesi",
        "Genetik hastalıkların nesilden nesile aktarılmasının önlenmesi",
      ],
      typesTitle: "NGS (Yeni Nesil Dizileme) ile Kromozomal Sağlık Güvencesi",
      typesDesc:
        "Tüp bebek tedavilerinde başarıyı artırmak ve sağlıklı gebelikler elde etmek için gelişmiş genetik analiz yöntemlerine ihtiyaç duyulmaktadır. Fertina IVF olarak, embriyo seçiminde en ileri teknoloji olan NGS (Next Generation Sequencing) yöntemini uygulayarak, size ve ailenize en sağlıklı ve güvenilir başlangıcı sunuyoruz.",
      recommendedTitle: "NGS şu durumlarda önerilebilir:",
      recommended: [
        "Bilinen genetik rahatsızlıkları olan hastalar",
        "Gebelik kaybı veya tüp bebek başarısızlığı geçmişi olan hastalar",
        "Kromozomal hata riski daha yüksek olan hastalar",
      ],
      whoTitle: "Kimler İçin Uygundur?",
      who: [
        "38 yaş ve üzeri anne adayları",
        "Tekrarlayan düşük geçmişi olanlar",
        "Daha önce başarısız tüp bebek denemeleri yaşayan çiftler",
        "Genetik hastalık taşıyıcısı bireyler",
        "Cinsiyet hastalıklarının önlenmesini isteyen aileler",
      ],
      noteTitle: "Fertina IVF Farkı!",
      note:
        "Kıbrıs’ta yer alan modern kliniğimizde, NGS teknolojisini en güncel laboratuvar altyapısı ile sunuyoruz. Embriyo gelişimini titizlikle izliyor, en doğru zamanda en sağlıklı embriyoyu transfer ederek gebelik şansınızı en üst düzeye çıkarıyoruz.",
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "Next Generation Sequencing (NGS)",
      subtitle: "Comprehensive chromosomal screening in embryos",
      description:
        "NGS is an advanced genetic analysis method that allows detailed chromosomal screening in embryos. By numerically and structurally scanning all 46 chromosomes forming DNA, it enables selection and transfer of only healthy embryos, increasing transfer success rates.",
      advantagesTitle: "Advantages of NGS",
      advantages: [
        "Selection of chromosomally normal embryos",
        "Increased success rates",
        "Reduced miscarriage risk",
        "Avoids unnecessary transfers",
        "Prevents transmission of genetic diseases across generations",
      ],
      typesTitle: "Chromosomal Health Assurance with NGS",
      typesDesc:
        "To increase success in IVF and achieve healthy pregnancies, advanced genetic analysis methods are needed. At Fertina IVF, we apply NGS to provide you with the healthiest and most reliable start by selecting the best embryos.",
      recommendedTitle: "NGS may be recommended for:",
      recommended: [
        "Patients with known genetic disorders",
        "Patients with a history of pregnancy loss or IVF failure",
        "Patients at higher risk of chromosomal errors",
      ],
      whoTitle: "Who Is It For?",
      who: [
        "Women aged 38 and above",
        "Those with recurrent miscarriages",
        "Couples with previous failed IVF attempts",
        "Carriers of genetic diseases",
        "Families wanting to prevent sex-linked diseases",
      ],
      noteTitle: "Fertina IVF Difference",
      note:
        "In our modern clinic in Cyprus, we offer NGS technology with the most up-to-date laboratory infrastructure. We meticulously monitor embryo development and transfer the healthiest embryo at the right time to maximize your chance of pregnancy.",
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
              <div className="mt-6 inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                <ScanSearch className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">NGS</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">{t.description}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
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
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">{t.typesTitle}</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t.typesDesc}</p>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-6 text-foreground">{t.recommendedTitle}</h3>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
              {t.recommended.map((item, i) => (
                <Card key={i} className="p-4 flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                  <Dna className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">{t.whoTitle}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {t.who.map((w, i) => (
                <Card key={i} className="p-4 flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{w}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">{t.noteTitle}</h3>
              <p className="text-lg text-muted-foreground mb-8">{t.note}</p>
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

export default NGSService;
