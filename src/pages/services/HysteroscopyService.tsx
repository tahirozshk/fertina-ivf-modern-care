import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Activity, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/hooks/use-language";

const HysteroscopyService = () => {
  const { language, setLanguage } = useLanguage();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation();
  const { ref: whenTitleRef, isVisible: whenTitleVisible } = useScrollAnimation();
  const { ref: whenGridRef, isVisible: whenGridVisible } = useScrollAnimation();
  const { ref: howTitleRef, isVisible: howTitleVisible } = useScrollAnimation();
  const { ref: howGridRef, isVisible: howGridVisible } = useScrollAnimation();
  const { ref: advTitleRef, isVisible: advTitleVisible } = useScrollAnimation();
  const { ref: advGridRef, isVisible: advGridVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const content = {
    tr: {
      title: "Histeroskopi",
      subtitle: "Rahim içini yakından görmek, doğru tedaviye ulaşmak.",
      intro:
        "Histeroskopi, rahim içinin ince, ışıklı bir kamera sistemiyle görüntülenmesini sağlayan tanı ve tedavi yöntemidir. Vajinal yoldan, rahim ağzından girilerek rahim boşluğuna ulaşılır ve bu sayede rahim içindeki yapılar detaylı olarak değerlendirilir. Çoğunlukla öncesinde histerosalpingografi (rahim filmi) veya ultrasonografi ile anormallik tespit edilmiş ancak tanımlanamamıştır.",
      whenTitle: "Hangi Durumlarda Yapılır?",
      when: [
        "Tekrarlayan düşüklerde neden araştırması",
        "Kısırlık (infertilite) değerlendirmesi",
        "Rahim içi perde (septum) tespiti ve tedavisi",
        "Polip veya miyomların araştırılması ve çıkarılması",
        "Rahim içi yapışıklıkların (Asherman) tedavisi",
        "Anormal rahim kanamalarının incelenmesi",
      ],
      howTitle: "İşlem Nasıl Uygulanır?",
      steps: [
        "İnce bir kamera (histeroskop) ile rahim içi görüntülenir",
        "Gerektiğinde aynı seansta cerrahi müdahale yapılabilir",
        "Çoğu zaman kısa süren, güvenli bir işlemdir",
      ],
      advantagesTitle: "Avantajları",
      advantages: [
        "Rahim içini doğrudan görme imkânı",
        "Aynı seansta tanı ve tedavi",
        "Problem giderildiğinde gebelik şansında artış",
        "Kesi gerektirmez, hızlı iyileşme",
      ],
      note:
        "Fertina IVF olarak, modern histeroskopi yöntemleri ile rahim içini güvenle değerlendiriyor, gebeliğe engel olabilecek durumları tedavi ediyoruz.",
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "Hysteroscopy",
      subtitle: "See the uterus closely, reach the right treatment.",
      intro:
        "Hysteroscopy is a diagnostic and therapeutic method that visualizes the uterine cavity with a thin lighted camera. It reaches the cavity via the cervix and evaluates intrauterine structures in detail. It is often performed after HSG or ultrasound detects an abnormality that needs definition.",
      whenTitle: "When is it performed?",
      when: [
        "Investigation of recurrent miscarriages",
        "Infertility evaluation",
        "Diagnosis and treatment of uterine septum",
        "Polyp or fibroid assessment and removal",
        "Treatment of intrauterine adhesions (Asherman)",
        "Assessment of abnormal uterine bleeding",
      ],
      howTitle: "How is it performed?",
      steps: [
        "Uterine cavity is visualized with a thin hysteroscope",
        "Therapeutic intervention can be done in the same session if needed",
        "Usually short and safe procedure",
      ],
      advantagesTitle: "Advantages",
      advantages: [
        "Direct visualization of the uterine cavity",
        "Diagnosis and treatment in one session",
        "Improved pregnancy chance after correction",
        "No incision, quick recovery",
      ],
      note:
        "At Fertina IVF, we safely evaluate the uterine cavity with modern hysteroscopy and treat barriers to pregnancy.",
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

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 ref={whenTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${whenTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.whenTitle}</h2>
            <div ref={whenGridRef} className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {t.when.map((w, i) => (
                <Card key={i} className={`p-4 flex items-start gap-3 transition-all duration-1000 ${whenGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: whenGridVisible ? `${i * 50}ms` : '0ms' }}>
                  <Activity className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{w}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 ref={howTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${howTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.howTitle}</h2>
            <div ref={howGridRef} className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {t.steps.map((s, i) => (
                <Card key={i} className={`p-6 hover:shadow-lg smooth-transition transition-all duration-1000 ${howGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: howGridVisible ? `${i * 100}ms` : '0ms' }}>
                  <Activity className="h-10 w-10 text-primary mb-4" />
                  <p className="text-muted-foreground leading-relaxed">{s}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 ref={advTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${advTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.advantagesTitle}</h2>
            <div ref={advGridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {t.advantages.map((a, i) => (
                <Card key={i} className={`p-4 flex items-center gap-3 bg-card transition-all duration-1000 ${advGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: advGridVisible ? `${i * 50}ms` : '0ms' }}>
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{a}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div ref={ctaRef} className={`max-w-3xl mx-auto transition-all duration-1000 ${ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <p className="text-lg text-muted-foreground mb-8">{t.note}</p>
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

export default HysteroscopyService;
