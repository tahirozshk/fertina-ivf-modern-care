import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Baby, HeartPulse, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/hooks/use-language";

const DeliveryService = () => {
  const { language, setLanguage } = useLanguage();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation();
  const { ref: normTitleRef, isVisible: normTitleVisible } = useScrollAnimation();
  const { ref: normAdvRef, isVisible: normAdvVisible } = useScrollAnimation();
  const { ref: normWhenRef, isVisible: normWhenVisible } = useScrollAnimation();
  const { ref: csTitleRef, isVisible: csTitleVisible } = useScrollAnimation();
  const { ref: csAdvRef, isVisible: csAdvVisible } = useScrollAnimation();
  const { ref: csWhenRef, isVisible: csWhenVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const content = {
    tr: {
      title: "Normal Doğum ve Sezaryen Doğum",
      subtitle:
        "Anne ve bebeğin güvenliği için bireyselleştirilmiş doğum planı",
      intro:
        "Fertina IVF olarak, anne adaylarımızın doğum sürecini güvenle ve bilinçle geçirmelerine destek oluyoruz. Doğum, hayatın en özel anlarından biridir. Annenin ve bebeğin tıbbi durumuna bağlı olarak normal doğum ya da sezaryen ameliyatı ile gerçekleşebilir.",
      normalTitle: "Normal Doğum (Vajinal Doğum)",
      normalDesc: "Bebeğin annenin doğum kanalından doğal yollarla dünyaya gelmesi.",
      normalAdvantages: [
        "Anne daha hızlı iyileşir, günlük yaşama dönüş daha kısadır",
        "Hastanede kalış süresi genellikle daha kısadır",
        "Anne sütü daha erken gelir, bağlanma daha hızlı gelişir",
        "Bebek, doğum kanalından geçerken yararlı bakterilerle tanışır",
      ],
      normalWhenTitle: "Ne Zaman Tercih Edilir?",
      normalWhen: [
        "Anne ve bebeğin sağlık durumu uygunsa",
        "Bebeğin baş geliş pozisyonunda olması",
        "Plasentanın normal yerleşimli olması",
      ],
      csTitle: "Sezaryen Doğum",
      csDesc:
        "Karın ve rahim duvarına yapılan cerrahi kesi ile bebeğin dünyaya getirilmesidir. Modern tıpta anne ve bebek sağlığını korumak için hayat kurtarıcı bir yöntemdir.",
      csAdvantagesTitle: "Avantajları",
      csAdvantages: [
        "Doğum zamanı planlanabilir",
        "Anne doğum sancısı yaşamaz",
        "Riskli gebeliklerde güvenli bir seçenektir",
      ],
      csWhenTitle: "Ne Zaman Gerekir?",
      csWhen: [
        "Bebeğin ters ya da yan durması",
        "Bebeğin iri olması",
        "Fetal kalp atımlarında sorun görülmesi",
        "Plasentanın doğum yolunu kapatması veya erken ayrılması",
        "Anne adayında ciddi sağlık sorunları",
        "Önceki doğumun sezaryen olması",
      ],
      policyTitle: "Fertina IVF’te Doğum Yaklaşımımız",
      policy: [
        "Her anne ve bebeğin doğum süreci özeldir; bireysel değerlendirme yapılır",
        "Doğum şekli anne-bebek için en güvenli seçenek olacak şekilde planlanır",
        "Hem normal doğum hem de sezaryen için uzman ekip 7/24 hazırdır",
      ],
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "Vaginal Delivery and Cesarean Section",
      subtitle: "Personalized birth plan for maternal and fetal safety",
      intro:
        "At Fertina IVF, we support our mothers to experience a safe and informed birth. Depending on medical conditions, delivery can be vaginal or by cesarean section.",
      normalTitle: "Vaginal Delivery",
      normalDesc: "Baby is born naturally through the birth canal.",
      normalAdvantages: [
        "Faster maternal recovery and return to daily life",
        "Usually shorter hospital stay",
        "Earlier lactation and stronger early bonding",
        "Exposure to beneficial microbiota in the birth canal",
      ],
      normalWhenTitle: "When Preferred",
      normalWhen: [
        "Maternal and fetal conditions are suitable",
        "Cephalic presentation",
        "Normally positioned placenta",
      ],
      csTitle: "Cesarean Section",
      csDesc:
        "Baby is delivered via surgical incision in the abdominal and uterine walls. It can be life-saving to protect mother and baby.",
      csAdvantagesTitle: "Advantages",
      csAdvantages: [
        "Scheduling is possible",
        "No labor pain",
        "A safe option in high-risk pregnancies",
      ],
      csWhenTitle: "When Needed",
      csWhen: [
        "Breech or transverse presentation",
        "Fetal macrosomia",
        "Non-reassuring fetal heart tracing",
        "Placenta previa or abruption",
        "Serious maternal health issues",
        "Previous cesarean section",
      ],
      policyTitle: "Our Delivery Approach at Fertina IVF",
      policy: [
        "Each birth is unique; individualized assessment",
        "Mode of delivery planned for the safest outcome",
        "Expert team for both vaginal and cesarean birth",
      ],
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
            <div ref={heroRef} className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">{t.title}</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{t.subtitle}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div ref={descRef} className={`max-w-4xl mx-auto transition-all duration-1000 ${descVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.intro}</p>
            </div>
          </div>
        </section>

        {/* Vaginal Delivery */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 ref={normTitleRef} className={`text-3xl md:text-4xl font-bold mb-6 text-center text-foreground transition-all duration-1000 ${normTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.normalTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8 text-center">{t.normalDesc}</p>
            <div ref={normAdvRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {t.normalAdvantages.map((adv, i) => (
                <Card key={i} className={`p-4 flex items-center gap-3 bg-card transition-all duration-1000 ${normAdvVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: normAdvVisible ? `${i * 50}ms` : '0ms' }}>
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{adv}</span>
                </Card>
              ))}
            </div>
            <h3 className="text-2xl font-semibold mt-10 mb-4 text-center text-foreground">{t.normalWhenTitle}</h3>
            <div ref={normWhenRef} className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {t.normalWhen.map((w, i) => (
                <Card key={i} className={`p-4 flex items-start gap-3 transition-all duration-1000 ${normWhenVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: normWhenVisible ? `${i * 50}ms` : '0ms' }}>
                  <Baby className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{w}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cesarean */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 ref={csTitleRef} className={`text-3xl md:text-4xl font-bold mb-6 text-center text-foreground transition-all duration-1000 ${csTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.csTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8 text-center">{t.csDesc}</p>
            <h3 className="text-2xl font-semibold mb-4 text-center text-foreground">{t.csAdvantagesTitle}</h3>
            <div ref={csAdvRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {t.csAdvantages.map((adv, i) => (
                <Card key={i} className={`p-4 flex items-center gap-3 bg-card transition-all duration-1000 ${csAdvVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: csAdvVisible ? `${i * 50}ms` : '0ms' }}>
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{adv}</span>
                </Card>
              ))}
            </div>
            <h3 className="text-2xl font-semibold mt-10 mb-4 text-center text-foreground">{t.csWhenTitle}</h3>
            <div ref={csWhenRef} className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {t.csWhen.map((w, i) => (
                <Card key={i} className={`p-4 flex items-start gap-3 transition-all duration-1000 ${csWhenVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: csWhenVisible ? `${i * 50}ms` : '0ms' }}>
                  <HeartPulse className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{w}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Policy */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <div ref={ctaRef} className={`transition-all duration-1000 ${ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-6 text-foreground">{t.policyTitle}</h3>
              <ul className="text-lg text-muted-foreground max-w-3xl mx-auto space-y-2">
                {t.policy.map((p, i) => (
                  <li key={i}>• {p}</li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
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

export default DeliveryService;
