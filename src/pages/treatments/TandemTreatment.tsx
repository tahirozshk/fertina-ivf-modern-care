import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Users, TrendingUp, Shield } from "lucide-react";

const TandemTreatment = () => {
  const [language, setLanguage] = useState("tr");

  const content = {
    tr: {
      title: "Tandem Tedavisi",
      subtitle: "Kendi yumurtanız ve donör yumurta ile eşzamanlı tedavi",
      successRate: "%84 Başarı Oranı",
      heroTitle: "Kendi Yumurtanızla Şansınızı Denerken Donör Desteğiyle Güvencede Olun!",
      description: "Tandem tedavisi, özellikle azalmış yumurtalık rezervine sahip kadınlar için geliştirilmiş, hem kendi yumurtalarınız hem de donör yumurtalarıyla aynı döngüde embriyo oluşturmayı mümkün kılan özel bir tüp bebek yöntemidir. Fertina IVF olarak bu yöntemi, başarı şansını artırmak isteyen hastalarımıza etkin bir seçenek olarak sunuyoruz.",
      whatIsIt: "Tandem Tedavisi Nedir?",
      whatIsItDesc: "Tandem tedavisinde, kadının kendi yumurtalıkları uyarılarak yumurta toplanırken, aynı tedavi sürecinde donör yumurtaları da elde edilir. Her iki yumurta grubundan ayrı ayrı döllenme sağlanır ve oluşan embriyoların gelişimi izlenir. Transfer günü geldiğinde, en kaliteli embriyolar arasından seçim yapılır.",
      keyBenefit: "Bu yöntem sayesinde hasta, kendi yumurtasından sağlıklı embriyo elde edemese bile donör embriyolarıyla gebelik şansını korur.",
      whoIsItFor: "Kimler İçin Uygundur?",
      candidates: [
        "İleri yaşta olan ve yumurta kalitesi düşük kadınlar",
        "Azalmış yumurtalık rezervi (AMH düşüklüğü)",
        "Önceki tüp bebek denemelerinde yetersiz embriyo gelişimi yaşayan hastalar",
        "Kendi yumurtasıyla şansını denemek isteyen ancak donör alternatifi de olsun diyen hastalar",
      ],
      processTitle: "Tedavi Süreci Nasıl İşler?",
      steps: [
        {
          step: "1. Aşama",
          title: "Değerlendirme ve Planlama",
          description: "Kadının yumurtalık kapasitesi ve genel sağlık durumu değerlendirilir. Donör seçimi yapılır.",
        },
        {
          step: "2. Aşama",
          title: "Eşzamanlı Yumurta Toplama",
          description: "Hasta ve donör senkronize edilir. Aynı döngüde her iki kişiden de yumurta toplanır.",
        },
        {
          step: "3. Aşama",
          title: "Döllenme ve Embriyo Gelişimi",
          description: "Hem hastanın hem de donörün yumurtaları döllenerek embriyolar oluşturulur. Her grup ayrı ayrı izlenir.",
        },
        {
          step: "4. Aşama",
          title: "Embriyo Seçimi ve Transfer",
          description: "En kaliteli embriyolar arasından seçim yapılarak transfer gerçekleştirilir. Tercih hastaya aittir (kendi yumurtası, donör yumurtası veya her ikisi).",
        },
        {
          step: "5. Aşama",
          title: "Gebelik Takibi",
          description: "Transfer sonrası 12. günde kan tahlili ile gebelik testi yapılır ve süreç takip edilir.",
        },
      ],
      advantagesTitle: "Tandem Tedavisinin Avantajları",
      advantages: [
        "Kendi yumurtanızı kullanma şansını korursunuz",
        "Aynı döngüde donör desteğiyle yedekli ilerlenir",
        "Zaman kaybı yaşanmaz",
        "Başarı oranını artırır (%84)",
        "Son karar transfer günü verilir",
        "Seçenek sizindir - esnek planlama",
        "Kıbrıs'ta yasal olarak sunulan yenilikçi yöntem",
        "Tek döngüde çift şans",
      ],
      idealFor: "Tandem döngü, özellikle yumurta rezervi sınırda kendi yumurtasıyla az da olsa şansı olan, aynı zamanda da donasyonun başarı gücünü anlayıp benimseyen hastalar için ideal bir çözümdür.",
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "Tandem Treatment",
      subtitle: "Simultaneous treatment with your own eggs and donor eggs",
      successRate: "84% Success Rate",
      heroTitle: "Try Your Chances with Your Own Eggs While Being Secure with Donor Support!",
      description: "Tandem treatment is a special IVF method developed especially for women with diminished ovarian reserve, which makes it possible to create embryos with both your own eggs and donor eggs in the same cycle. As Fertina IVF, we offer this method as an effective option to our patients who want to increase their chances of success.",
      whatIsIt: "What is Tandem Treatment?",
      whatIsItDesc: "In tandem treatment, eggs are collected by stimulating the woman's own ovaries, while donor eggs are also obtained during the same treatment process. Fertilization is provided separately from both egg groups and the development of the resulting embryos is monitored. When the transfer day arrives, selection is made among the highest quality embryos.",
      keyBenefit: "Thanks to this method, even if the patient cannot obtain a healthy embryo from her own egg, she preserves the chance of pregnancy with donor embryos.",
      whoIsItFor: "Who Is It Suitable For?",
      candidates: [
        "Women of advanced age with low egg quality",
        "Diminished ovarian reserve (low AMH)",
        "Patients who experienced insufficient embryo development in previous IVF attempts",
        "Patients who want to try with their own eggs but also want a donor alternative",
      ],
      processTitle: "How Does The Treatment Process Work?",
      steps: [
        {
          step: "Stage 1",
          title: "Evaluation and Planning",
          description: "The woman's ovarian capacity and general health status are evaluated. Donor selection is made.",
        },
        {
          step: "Stage 2",
          title: "Simultaneous Egg Collection",
          description: "Patient and donor are synchronized. Eggs are collected from both individuals in the same cycle.",
        },
        {
          step: "Stage 3",
          title: "Fertilization and Embryo Development",
          description: "Eggs from both the patient and the donor are fertilized to form embryos. Each group is monitored separately.",
        },
        {
          step: "Stage 4",
          title: "Embryo Selection and Transfer",
          description: "Transfer is performed by selecting from the highest quality embryos. The choice belongs to the patient (own egg, donor egg or both).",
        },
        {
          step: "Stage 5",
          title: "Pregnancy Follow-up",
          description: "A pregnancy test is performed by blood test on the 12th day after transfer and the process is monitored.",
        },
      ],
      advantagesTitle: "Advantages of Tandem Treatment",
      advantages: [
        "You preserve the chance to use your own eggs",
        "Proceed with backup with donor support in the same cycle",
        "No time loss",
        "Increases success rate (84%)",
        "Final decision is made on transfer day",
        "Choice is yours - flexible planning",
        "Innovative method legally offered in Cyprus",
        "Double chance in a single cycle",
      ],
      idealFor: "Tandem cycle is an ideal solution especially for patients whose egg reserve is borderline and have some chance with their own eggs, while also understanding and embracing the success power of donation.",
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
                  <Users className="h-5 w-5 text-primary" />
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
                  <TrendingUp className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg font-semibold text-foreground leading-relaxed">
                    {t.keyBenefit}
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

        {/* Ideal For Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <div className="text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t.idealFor}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <Users className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {language === "tr" 
                  ? "Fertina IVF ile Güçlü Bir Alternatif" 
                  : "A Powerful Alternative with Fertina IVF"}
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                {language === "tr"
                  ? "Fertina IVF olarak, en doğru zamanda en uygun yöntemi planlamak için yanınızdayız."
                  : "As Fertina IVF, we are with you to plan the most appropriate method at the right time."}
              </p>
              <p className="text-xl font-semibold text-primary mb-4">
                {language === "tr"
                  ? "Kendi yumurtanızla bir şans daha… Donörle desteklenen güçlü bir alternatif."
                  : "One more chance with your own eggs... A powerful alternative supported by donor."}
              </p>
              <p className="text-xl font-bold text-foreground mb-8">
                {language === "tr"
                  ? "Fertina IVF – Bilim, Seçenek ve Umut Bir Arada"
                  : "Fertina IVF – Science, Options and Hope Together"}
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

export default TandemTreatment;

