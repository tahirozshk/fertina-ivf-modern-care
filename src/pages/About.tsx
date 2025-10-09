import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  const [language, setLanguage] = useState("tr");

  const content = {
    tr: {
      title: "Hakkımızda",
      hero: "Bebek sahibi olma hayalinizi birlikte gerçekleştirelim",
      subtitle: "Tüp Bebek Tedavisi Kıbrıs",
      paragraphs: [
        "Fertina, tüp bebek ve genetik alanında 16 yıllık deneyime sahip, başarısını ispat etmiş tecrübeli bir ekibin bir araya gelmesiyle kurulmuştur.",
        "Amacı sağlıklı gebelik elde etmek olan Fertina ekibi; hasta memnuniyeti odaklı çalışma anlayışıyla 24 saat erişilebilir hizmet sunar.",
        "Doktorumuz Op. Dr. Erman SEVER ve ekibi, doğum sonrası o büyük mutluluğa ortak olabilmek için çalışmaktadır.",
        "Kuruluşumuzdan bu yana bilimsel verileri yakından takip eden tıbbi ekibimiz ve güncel teknolojik alt yapımızla başarı odaklı tedavi hizmeti sunuyoruz.",
        "Kuzey Kıbrıs, IVF için Avrupa’dan en çok tercih edilen ülkelerden biridir. Bu itibarın sorumluluğunu ciddiyetle taşıyor, etik ve şeffaf yaklaşımı benimsiyoruz.",
        "Parolamız her zaman hasta memnuniyeti. Yüksek başarı oranımız ve tam donanımlı multidisipliner merkezimizle sizleri Gazi Mağusa’ya bekliyoruz. Gelin bu heyecanlı ve mutlu süreci birlikte yaşayalım.",
      ],
      ctas: {
        team: { title: "Ekibimiz", desc: "Uzman kadromuzu tanıyın", link: "/team", image: "/team.jpg" },
        center: { title: "Merkezimiz", desc: "Altyapımızı ve ünitelerimizi keşfedin", link: "/center", image: "/center.jpg" },
      },
      contact: "İletişim",
    },
    en: {
      title: "About Us",
      hero: "Let’s realize your dream of having a baby together",
      subtitle: "IVF Treatment Cyprus",
      paragraphs: [
        "Fertina was founded by an experienced team with 16 years in IVF and genetics.",
        "Our mission is healthy pregnancies. We provide 24/7 accessible, patient‑centric care.",
        "Our physician Op. Dr. Erman SEVER and team work to share the joy after birth.",
        "Since day one, we deliver success‑oriented treatments with evidence‑based medicine and modern technology.",
        "Northern Cyprus is a leading destination for IVF in Europe; we embrace this responsibility with ethical and transparent care.",
        "Patient satisfaction is our motto. We welcome you to Gazimağusa to experience this exciting journey together.",
      ],
      ctas: {
        team: { title: "Our Team", desc: "Meet our experts", link: "/team", image: "/team.jpg" },
        center: { title: "Our Center", desc: "Explore our facilities", link: "/center", image: "/center.jpg" },
      },
      contact: "Contact",
    },
  } as const;

  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen">
      <Navigation language={language} setLanguage={setLanguage} />

      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">{t.subtitle}</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">{t.title}</h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">{t.hero}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="p-4 rounded-2xl bg-background shadow-sm">
                  <div className="text-3xl font-bold text-primary">16+</div>
                  <div className="text-sm text-muted-foreground">Yıl Deneyim</div>
                </div>
                <div className="p-4 rounded-2xl bg-background shadow-sm">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Erişilebilirlik</div>
                </div>
                <div className="p-4 rounded-2xl bg-background shadow-sm">
                  <div className="text-3xl font-bold text-primary">Yüksek</div>
                  <div className="text-sm text-muted-foreground">Başarı Oranı</div>
                </div>
                <div className="p-4 rounded-2xl bg-background shadow-sm">
                  <div className="text-3xl font-bold text-primary">ISO</div>
                  <div className="text-sm text-muted-foreground">Standart Yaklaşım</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="md:col-span-2 p-6">
                <div className="space-y-6">
                  {t.paragraphs.map((p, i) => (
                    <p key={i} className="text-lg text-muted-foreground leading-relaxed">{p}</p>
                  ))}
                </div>
              </Card>
              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{language === "tr" ? "Tedavi Yaklaşımımız" : "Our Care Approach"}</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• {language === "tr" ? "Bilimsel ve şeffaf iletişim" : "Evidence‑based and transparent"}</li>
                  <li>• {language === "tr" ? "Kişiye özel tedavi planı" : "Personalized treatment planning"}</li>
                  <li>• {language === "tr" ? "Güncel teknoloji ve deneyimli ekip" : "Modern technology and expert team"}</li>
                  <li>• {language === "tr" ? "Etik kurallar ve gizlilik" : "Ethics and confidentiality"}</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">{language === "tr" ? "Değerlerimiz" : "Our Values"}</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-6"><h3 className="text-xl font-semibold mb-2 text-foreground">{language === "tr" ? "Güven" : "Trust"}</h3><p className="text-muted-foreground">{language === "tr" ? "Tüm süreçte şeffaf ve anlaşılır iletişim" : "Transparent and clear communication throughout"}</p></Card>
                <Card className="p-6"><h3 className="text-xl font-semibold mb-2 text-foreground">{language === "tr" ? "Mükemmellik" : "Excellence"}</h3><p className="text-muted-foreground">{language === "tr" ? "Kanıta dayalı tıp ve sürekli iyileştirme" : "Evidence‑based medicine and continuous improvement"}</p></Card>
                <Card className="p-6"><h3 className="text-xl font-semibold mb-2 text-foreground">{language === "tr" ? "Empati" : "Empathy"}</h3><p className="text-muted-foreground">{language === "tr" ? "Hastalarımızın yolculuğunu birlikte yaşıyoruz" : "We walk the journey with our patients"}</p></Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[t.ctas.team, t.ctas.center].map((c, i) => (
                <Card key={i} className="overflow-hidden group animate-fade-in">
                  {c.image ? (
                    <div className="relative h-64 w-full overflow-hidden">
                      <img src={c.image} alt={c.title} className="absolute inset-0 h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                      <span className="absolute bottom-3 left-3 inline-block px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold shadow">
                        {c.title}
                      </span>
                    </div>
                  ) : (
                    <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/30 group-hover:from-primary/30 group-hover:to-accent/40 smooth-transition" />
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-2">{c.title}</h3>
                    <p className="text-muted-foreground mb-4">{c.desc}</p>
                    <Link to={c.link}>
                      <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary w-full">
                        {language === "tr" ? "Detaylı İncele" : "View Details"}
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer language={language} />
      <WhatsAppButton />
    </div>
  );
};

export default About;
