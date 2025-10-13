import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, HeartPulse, Stethoscope, Baby } from "lucide-react";

const PregnancyFollowUpService = () => {
  const [language, setLanguage] = useState("tr");

  const content = {
    tr: {
      title: "Gebelik Takibi",
      subtitle: "Anne ve bebek için güvenli, planlı ve modern takip",
      intro:
        "Gebelik, anne ve bebek için özenle takip edilmesi gereken çok özel bir süreçtir. Düzenli kontroller, bebeğin sağlıklı gelişimini ve annenin gebelik boyunca güvenliğini sağlamanın en önemli yoludur.",
      firstTrimester: {
        title: "1. Trimester (0–12. Haftalar)",
        items: [
          "İlk Muayene (6–8. hafta): Gebeliğin ultrason ile kesin tanısı yapılır, kalp atışları görülür",
          "Kan ve İdrar Testleri: Kan grubu, enfeksiyon taramaları, tiroid testleri",
          "Tarama Testleri: 11–14. haftalarda ense kalınlığı ve ikili test ile genetik risk değerlendirmesi",
          "Yaşam Tarzı: Folik asit, vitamin desteği ve beslenme önerileri",
        ],
      },
      secondTrimester: {
        title: "2. Trimester (13–24. Haftalar)",
        items: [
          "Aylık Kontroller: Ultrason ile gelişim izlemi",
          "Üçlü/Dörtlü Test (16–20. hafta): Genetik risk taraması",
          "Ayrıntılı Ultrason (20–22. hafta): Organ, kalp, beyin ve omurga değerlendirmesi",
          "Şeker Yükleme (24–28. hafta): Gestasyonel diyabet taraması",
          "Anne Sağlığı: Kan basıncı, kilo ve erken doğum risklerinin değerlendirilmesi",
        ],
      },
      thirdTrimester: {
        title: "3. Trimester (25–40. Haftalar)",
        items: [
          "28. haftadan sonra 2 haftada bir kontrol; kilo, sıvı ve plasenta değerlendirmesi",
          "NST: 32. haftadan sonra fetal kalp atımı ve hareketlerin takibi",
          "Kan Tahlilleri: Kan sayımı ve demir düzeyi",
          "Doğum Planlaması: Normal doğum veya sezaryen değerlendirmesi",
          "37. haftadan sonra haftalık kontroller ve doğuma hazırlık",
        ],
      },
      benefitsTitle: "Gebelik Takibinin Faydaları",
      benefits: [
        "Bebekte olası sorunların erken fark edilmesi",
        "Anne sağlığının yakından izlenmesi ve risklerin önceden tespiti",
        "Sağlıklı ve güvenli bir doğum sürecinin planlanması",
      ],
      screeningTitle: "Gebelikte Tarama Testleri",
      screeningIntro:
        "Gebelik boyunca yapılan tarama testleri, bebeğin sağlığı hakkında erken dönemde bilgi edinmeyi sağlar ve doğumsal anomalilerin erken teşhisinde önemlidir.",
      nipd: {
        title: "NIPD",
        desc:
          "En güvenilir tarama testidir. 10. haftadan itibaren uygulanabilir. Anne kanından bebeğin DNA’sı ayrıştırılarak analiz edilir. Trizomi 13, 18, 21; 45 X0 (Turner), 47 XXY (Klinefelter), kistik fibrozis ve hemofililer taranır. Güvenilirliği %99’dur.",
      },
      duo: {
        title: "İkili Test (11–14. Hafta)",
        desc:
          "Anne kanındaki hormon değerleri ve ultrasonla ölçülen ense kalınlığı birlikte değerlendirilir. Down sendromu (Trizomi 21) ve diğer kromozomal anomalilerin riskini belirler.",
      },
      quad: {
        title: "Dörtlü Test (16–19. Hafta)",
        desc:
          "Anne kanındaki AFP, HCG ve Estriol düzeylerinin ölçümü ile Down/Edwards risk değerlendirmesi ve nöral tüp defekti taraması yapılır.",
      },
      usDetail: {
        title: "Detaylı Ultrasound",
        desc:
          "Gebeliğin 18–22. haftaları arasında; merkezi sinir sistemi ve dolaşım sistemi başta olmak üzere tüm organ ve ekstremitelerin değerlendirildiği, 45–60 dakika süren 4 boyutlu inceleme. Güvenilirliği ~%80’dir.",
      },
      whyTitle: "Tarama Testleri Neden Önemli?",
      why: [
        "Bebeğin sağlığı hakkında erken bilgi sağlar",
        "Riskli durumların erken teşhisini mümkün kılar",
        "Gerekli olduğunda ileri tetkik ve tedavi planlamasına imkan verir",
      ],
      closing:
        "Fertina IVF’te gebelik takibiniz, deneyimli uzmanlarımız eşliğinde, en güncel tıbbi yöntemlerle yapılır. Hem sizin hem de bebeğinizin sağlığı için gebeliğinizin her aşamasında yanınızdayız.",
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "Pregnancy Follow-up",
      subtitle: "Safe, planned and modern follow-up for mother and baby",
      intro:
        "Pregnancy is a very special process that should be carefully monitored. Regular check-ups are the best way to ensure the baby’s healthy development and the mother’s safety throughout pregnancy.",
      firstTrimester: {
        title: "1st Trimester (0–12 weeks)",
        items: [
          "First Visit (6–8 weeks): Pregnancy is confirmed by ultrasound; heartbeat is seen",
          "Blood and Urine Tests: Blood group, infection screening, thyroid tests",
          "Screening Tests: NT measurement and combined test (11–14 weeks)",
          "Lifestyle: Folic acid, vitamins and nutrition guidance",
        ],
      },
      secondTrimester: {
        title: "2nd Trimester (13–24 weeks)",
        items: [
          "Monthly check-ups and growth tracking",
          "Triple/Quad test (16–20 weeks)",
          "Detailed Anomaly Scan (20–22 weeks)",
          "Glucose screening (24–28 weeks)",
          "Maternal health evaluation and preterm risk",
        ],
      },
      thirdTrimester: {
        title: "3rd Trimester (25–40 weeks)",
        items: [
          "Biweekly then weekly visits; fetal growth, fluid and placenta assessment",
          "NST monitoring after 32 weeks",
          "Blood counts and iron levels",
          "Birth planning (vaginal vs cesarean)",
          "Weekly visits after 37 weeks until delivery",
        ],
      },
      benefitsTitle: "Benefits",
      benefits: [
        "Early detection of potential issues in the baby",
        "Close monitoring of maternal health and risks",
        "Planning a safe delivery process",
      ],
      screeningTitle: "Screening Tests in Pregnancy",
      screeningIntro:
        "Screening tests provide early information about the baby’s health and are critical in early diagnosis of congenital anomalies.",
      nipd: { title: "NIPD", desc: "Most reliable screening; after 10 weeks; analyzes fetal DNA from maternal blood; ~99% reliability." },
      duo: { title: "Combined Test (11–14 weeks)", desc: "Serum markers plus nuchal translucency for trisomy risk evaluation." },
      quad: { title: "Quad Test (16–19 weeks)", desc: "AFP, HCG, Estriol measurements for trisomy and neural tube defect risk." },
      usDetail: { title: "Detailed Ultrasound", desc: "Comprehensive 4D scan at 18–22 weeks; ~45–60 min; ~80% reliability." },
      whyTitle: "Why Are Screening Tests Important?",
      why: [
        "Provides early insight into baby’s health",
        "Enables early diagnosis of high-risk situations",
        "Allows timely advanced testing and treatment planning",
      ],
      closing:
        "At Fertina IVF, pregnancy follow-up is performed with up-to-date medical methods by our experienced specialists. We are with you at every stage for the health of both you and your baby.",
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

        {[t.firstTrimester, t.secondTrimester, t.thirdTrimester].map((phase, idx) => (
          <section key={idx} className={idx % 2 === 0 ? "py-16 bg-muted/30" : "py-16 bg-background"}>
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">{phase.title}</h2>
              <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                {phase.items.map((it: string, i: number) => (
                  <Card key={i} className="p-4 flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{it}</span>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">{t.benefitsTitle}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {t.benefits.map((b, i) => (
                <Card key={i} className="p-4 flex items-center gap-3 bg-card animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                  <Baby className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{b}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">{t.screeningTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">{t.screeningIntro}</p>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[t.nipd, t.duo, t.quad, t.usDetail].map((s, i) => (
                <Card key={i} className="p-6 hover:shadow-lg smooth-transition animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <Stethoscope className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <HeartPulse className="h-16 w-16 text-primary mx-auto mb-6" />
              <p className="text-lg text-muted-foreground mb-8">{t.closing}</p>
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

export default PregnancyFollowUpService;
