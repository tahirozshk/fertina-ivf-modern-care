import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ScanSearch, Dna, Shield } from "lucide-react";

const WESService = () => {
  const [language, setLanguage] = useState("tr");

  const content = {
    tr: {
      title: "WES (Tüm Ekzom Dizilemesi)",
      subtitle: "Protein kodlayan bölgelerin kapsamlı analizi",
      intro:
        "WES (Whole Exome Sequencing), insan DNA’sındaki tüm protein kodlayan bölgelerin (ekzonların) detaylı olarak incelendiği bir genetik analiz yöntemidir. Genomun yalnızca %1-2’si ekzonlardan oluşsa da hastalıkların %85-90’ı bu bölgelerdeki mutasyonlardan kaynaklanır. Bu nedenle WES, genetik hastalıkların tanısında çok etkilidir.",
      useTitle: "Tüp Bebek Tedavisinde WES Testi Nerelerde Kullanılır?",
      uses: [
        "Tekrarlayan gebelik kayıpları: Ebeveynlerde genetik mutasyon varlığının araştırılması",
        "Tekrarlayan başarısız IVF denemeleri: Embriyo gelişimini etkileyebilecek bozuklukların tespiti",
        "Ailevi geçişli hastalıkların araştırılması: Anne/babadaki kalıtsal hastalığın çocuğa geçme riskinin belirlenmesi, nadir hastalık/metabolik bozukluklarda kullanım",
        "Taşıyıcılık taraması: Ebeveynlerin taşıdığı ancak klinik göstermeyen hastalıkların saptanması; sağlıklı embriyo seçimi",
      ],
      resultTitle: "WES Testi Sonuçları Ne Sağlar?",
      results: [
        "Kalıtsal hastalık riskini ortaya çıkarır",
        "PGT ile birlikte kullanıldığında sağlıklı embriyo transferine imkân verir",
        "Gelecekteki çocuklarda genetik hastalık taşıma ihtimalini gösterir",
      ],
      diffTitle: "WES ile PGT’nin Farkı",
      wes: "WES: Anne-baba veya bireyden kan örneği ile yapılır; genetik yapıyı ortaya çıkarır.",
      pgt: "PGT: IVF sırasında embriyolara uygulanır; yalnızca sağlıklı embriyoların transfer edilmesini sağlar.",
      noteTitle: "Fertina IVF Ayrıcalığı",
      note:
        "Fertina IVF olarak, modern genetik tarama yöntemleriyle sağlıklı gebelik şansını en üst düzeye çıkarıyoruz. WES ile hem sizin hem de gelecekteki çocuğunuzun sağlığını önemsiyoruz.",
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "WES (Whole Exome Sequencing)",
      subtitle: "Comprehensive analysis of protein-coding regions",
      intro:
        "WES examines all protein-coding regions (exons) of human DNA in detail. Although only 1–2% of the genome is exonic, 85–90% of diseases arise from mutations in these regions, making WES highly effective for diagnosis.",
      useTitle: "Where is WES Used in IVF?",
      uses: [
        "Recurrent pregnancy loss: investigating parental mutations",
        "Repeated IVF failures: detecting genetic defects affecting embryo development",
        "Familial disorders: determining transmission risk; useful in rare/metabolic diseases",
        "Carrier screening: identifying diseases parents carry to enable healthy embryo selection",
      ],
      resultTitle: "What Do WES Results Provide?",
      results: [
        "Reveals hereditary disease risk",
        "With PGT, enables transfer of healthy embryos",
        "Shows risk of genetic disease in future children",
      ],
      diffTitle: "Difference Between WES and PGT",
      wes: "WES: Performed on blood from parents/individual; reveals genetic makeup.",
      pgt: "PGT: Applied to embryos during IVF; ensures transfer of healthy embryos only.",
      noteTitle: "Fertina IVF Advantage",
      note:
        "With modern genetic screening, we maximize your chance of a healthy pregnancy. With WES, we care about the health of both you and your future child.",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">{t.useTitle}</h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {t.uses.map((u, i) => (
                <Card key={i} className="p-4 flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                  <ScanSearch className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{u}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">{t.resultTitle}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {t.results.map((r, i) => (
                <Card key={i} className="p-4 flex items-center gap-3 bg-card animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{r}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">{t.diffTitle}</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              <Card className="p-6"><h3 className="text-xl font-semibold mb-2 text-foreground">WES</h3><p className="text-muted-foreground">{t.wes}</p></Card>
              <Card className="p-6"><h3 className="text-xl font-semibold mb-2 text-foreground">PGT</h3><p className="text-muted-foreground">{t.pgt}</p></Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <p className="text-lg text-muted-foreground mb-8">{t.note}</p>
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

export default WESService;
