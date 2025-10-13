import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Shield, HeartPulse } from "lucide-react";

const CervicalCerclageService = () => {
  const [language, setLanguage] = useState("tr");

  const content = {
    tr: {
      title: "Servikal Serklaj (Rahim Ağzı Dikişi)",
      subtitle: "Erken doğum ve düşük riskini azaltmaya yönelik koruyucu işlem",
      description:
        "Servikal serklaj, rahim ağzı yetmezliği (servikal yetmezlik) olan kadınlarda uygulanan koruyucu bir işlemdir. Rahim ağzının gebelik süresince kapalı kalmasını sağlayarak, erken doğum veya düşük riskini azaltmayı amaçlar.",
      whatTitle: "Servikal Yetmezlik Nedir?",
      whatDesc:
        "Rahim ağzı normalde gebelik boyunca kapalı durur ve doğum yaklaşınca açılmaya başlar. Ancak bazı kadınlarda rahim ağzı gebeliğin erken dönemlerinde kendiliğinden açılabilir ve bu durum tekrarlayan düşükler veya erken doğumlara yol açabilir.",
      whoTitle: "Servikal Serklaj Kimlere Uygulanır?",
      candidates: [
        "Daha önce tekrarlayan 2. trimester düşükleri yaşayan kadınlara",
        "Rahim ağzı yetmezliği tanısı konanlara",
        "Ultrasonda servikal uzunluğu kısa olan gebelere",
        "Önceki gebeliklerde erken doğum öyküsü olanlara",
      ],
      howTitle: "İşlem Nasıl Yapılır?",
      steps: [
        "Genellikle gebeliğin 12–14. haftaları arasında uygulanır",
        "Spinal ya da genel anestezi altında yapılır",
        "Rahim ağzına özel materyalle dikiş atılarak kapalı tutulur",
        "Doğuma yakın (genellikle 37. haftada) dikiş alınır",
      ],
      afterTitle: "İşlem Sonrası Süreç",
      after: [
        "Kısa süreli gözlem",
        "Dinlenme ve hekim kontrollerine uyum",
        "Hafif kasık ağrısı ve lekelenme normal olabilir",
      ],
      goalTitle: "Servikal Serklajın Amacı",
      goalDesc:
        "Gebeliğin daha güvenli ilerlemesi, bebeğin anne karnında yeterli süre kalması ve sağlıklı doğum hedeflenir. Fertina IVF’te modern yöntemler titizlikle uygulanır; deneyimli ekibimizle yanınızdayız.",
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "Cervical Cerclage",
      subtitle: "Protective procedure to reduce risk of miscarriage and preterm birth",
      description:
        "Cervical cerclage is a preventive procedure for women with cervical insufficiency. By keeping the cervix closed during pregnancy, it aims to reduce the risk of miscarriage and preterm birth.",
      whatTitle: "What is Cervical Insufficiency?",
      whatDesc:
        "The cervix is normally closed throughout pregnancy and begins to open as birth approaches. In some women, the cervix may open early, leading to recurrent miscarriages or preterm births.",
      whoTitle: "Who is Cervical Cerclage For?",
      candidates: [
        "Women with recurrent 2nd trimester losses",
        "Diagnosed cervical insufficiency",
        "Short cervical length detected on ultrasound",
        "History of preterm birth in previous pregnancies",
      ],
      howTitle: "How is the Procedure Performed?",
      steps: [
        "Usually performed at 12–14 weeks",
        "Under spinal or general anesthesia",
        "A special stitch is placed around the cervix to keep it closed",
        "The stitch is removed near term (around 37 weeks)",
      ],
      afterTitle: "Post-procedure",
      after: [
        "Short observation period",
        "Rest and compliance with scheduled check-ups",
        "Mild cramps and spotting may occur",
      ],
      goalTitle: "Purpose of Cervical Cerclage",
      goalDesc:
        "To allow pregnancy to progress safely so the baby remains in the uterus long enough for a healthy birth. At Fertina IVF, we carefully apply modern methods and stand by you with our experienced team.",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">{t.whoTitle}</h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {t.candidates.map((c, i) => (
                <Card key={i} className="p-4 flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{c}</span>
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
                  <HeartPulse className="h-10 w-10 text-primary mb-4" />
                  <p className="text-muted-foreground leading-relaxed">{s}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">{t.afterTitle}</h2>
            <ul className="text-lg text-muted-foreground max-w-3xl mx-auto space-y-2">
              {t.after.map((a, i) => (
                <li key={i}>• {a}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">{t.goalTitle}</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">{t.goalDesc}</p>
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

export default CervicalCerclageService;
