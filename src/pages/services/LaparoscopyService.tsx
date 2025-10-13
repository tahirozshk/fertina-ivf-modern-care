import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Microscope, Stethoscope, Shield } from "lucide-react";

const LaparoscopyService = () => {
  const [language, setLanguage] = useState("tr");

  const content = {
    tr: {
      title: "Laparoskopi",
      subtitle: "Tanı ve tedavide modern, minimal invaziv cerrahi.",
      description:
        "Laparoskopi, karın boşluğunun 0.5 cm’lik küçük deliklerden girilerek kamera ve özel cerrahi aletlerle incelenmesini sağlayan cerrahi yöntemdir. Kadın hastalıkları ve infertilite (kısırlık) alanında hem tanı hem tedavi amaçlı sıklıkla uygulanır.",
      whenTitle: "Hangi Durumlarda Yapılır?",
      indications: [
        "Kısırlık nedenlerinin araştırılmasında",
        "Tüplerin açıklığının kontrolünde",
        "Endometriozis tanı ve tedavisinde",
        "Yumurtalık kistlerinin çıkarılmasında",
        "Myom tedavisinde",
        "Dış gebelik (ektopik gebelik) tedavisinde",
        "Karın içi yapışıklıkların giderilmesinde",
        "Rahim filmi (HSG) veya ultrasound ile şüpheli lezyon görüldüğünde",
      ],
      howTitle: "İşlem Nasıl Uygulanır?",
      steps: [
        {
          title: "Kamera Yerleştirme",
          description:
            "Göbek çevresinden küçük bir delik (0.5 cm) açılarak karın boşluğuna kamera (laparoskop) yerleştirilir.",
        },
        {
          title: "Görüş Alanı Oluşturma",
          description: "Karın içine karbondioksit verilerek organların net görülmesi sağlanır.",
        },
        {
          title: "Tanı ve Tedavi",
          description:
            "Tanısal amaçlı sadece görüntüleme yapılabileceği gibi, cerrahi müdahale de aynı seansta gerçekleştirilebilir.",
        },
      ],
      advantagesTitle: "Avantajları",
      advantages: [
        "Küçük delikler sayesinde hızlı iyileşme süreci",
        "Daha az ağrı ve daha kısa hastanede kalış",
        "Hem tanı hem tedavi imkânı",
        "Doğurganlığı artırıcı tedavi şansı",
      ],
      whoEnTitle: "Laparoscopy may be recommended in cases of:",
      whoEn: [
        "Akut jinekolojik acil durumları olan hastalar",
        "Tedavi gerektiren tanılı rahatsızlıkları olan hastalar",
        "Açıklanamayan kısırlık veya kronik pelvik ağrısı olan hastalar",
      ],
      noteTitle: "Fertina IVF Güvencesi",
      note:
        "Fertina IVF olarak, en güncel laparoskopi teknikleriyle kısırlığa yol açabilecek sorunları hem tanıyor hem de tedavi ediyoruz. Daha hızlı iyileşme süreci ve modern cerrahi imkânlarıyla yanınızdayız.",
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "Laparoscopy",
      subtitle: "Modern, minimally invasive surgery for diagnosis and treatment.",
      description:
        "Laparoscopy is a surgical method that allows the abdominal cavity to be examined with a camera and special instruments through 0.5 cm small incisions. In gynecology and infertility, it is frequently used for both diagnosis and treatment.",
      whenTitle: "When is it performed?",
      indications: [
        "Investigating causes of infertility",
        "Checking tubal patency",
        "Diagnosis and treatment of endometriosis",
        "Removal of ovarian cysts",
        "Myoma treatment",
        "Treatment of ectopic pregnancy",
        "Removal of intra-abdominal adhesions",
        "When suspicious lesions are seen on HSG or ultrasound",
      ],
      howTitle: "How is the procedure performed?",
      steps: [
        { title: "Camera Placement", description: "A small incision (0.5 cm) is made near the navel and a laparoscope is inserted." },
        { title: "Creating View", description: "Carbon dioxide is given into the abdomen to visualize organs clearly." },
        { title: "Diagnosis and Treatment", description: "Diagnostic viewing or therapeutic intervention can be performed in the same session." },
      ],
      advantagesTitle: "Advantages",
      advantages: [
        "Faster recovery through small incisions",
        "Less pain and shorter hospital stay",
        "Opportunity for both diagnosis and treatment",
        "Chance to improve fertility",
      ],
      whoEnTitle: "Laparoscopy may be recommended in cases of:",
      whoEn: [
        "Patients with acute gynecologic emergencies",
        "Patients with diagnosed conditions requiring treatment",
        "Unexplained infertility or chronic pelvic pain",
      ],
      noteTitle: "Fertina IVF Assurance",
      note:
        "At Fertina IVF, we diagnose and treat issues that may cause infertility with the most up-to-date laparoscopy techniques. We are with you with a faster recovery process and modern surgical facilities.",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">{t.whenTitle}</h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {t.indications.map((item, i) => (
                <Card key={i} className="p-4 flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">{t.howTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {t.steps.map((step, i) => (
                <Card key={i} className="p-6 hover:shadow-lg smooth-transition animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <Microscope className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
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
            <div className="max-w-3xl mx-auto">
              <Stethoscope className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">{t.whoEnTitle}</h3>
              <ul className="text-lg text-muted-foreground mb-8 space-y-2">
                {t.whoEn.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact"><Button size="lg">{t.cta}</Button></Link>
                <Link to="/contact"><Button size="lg" variant="outline">{t.contact}</Button></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">{t.noteTitle}</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t.note}</p>
          </div>
        </section>
      </div>

      <Footer language={language} />
      <WhatsAppButton />
    </div>
  );
};

export default LaparoscopyService;
