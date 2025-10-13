import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Baby, Heart, Dna, Users, FlaskConical, Activity, UserPlus, Zap, Waves } from "lucide-react";

const Treatments = () => {
  const [language, setLanguage] = useState("tr");

  const content = {
    tr: {
      title: "Tedavilerimiz",
      subtitle: "Her bireyin ihtiyacına özel, uluslararası standartlarda IVF tedavi seçenekleri",
      cta: "Detaylı Bilgi",
      treatments: [
        {
          icon: Baby,
          title: "IVF (ICSI) Tedavisi",
          shortDesc: "Mikroenjeksiyon yöntemiyle yüksek başarı oranlı tüp bebek tedavisi",
          successRate: "%76",
          slug: "ivf-icsi",
          image: "/ivf.png",
        },
        {
          icon: Heart,
          title: "Yumurta Donasyonu",
          shortDesc: "Titizlikle seçilmiş donörlerle güvenilir yumurta donasyon programı",
          successRate: "%89",
          slug: "yumurta-donasyonu",
        },
        {
          icon: UserPlus,
          title: "Sperm Donasyonu",
          shortDesc: "Detaylı sağlık kontrolünden geçmiş donörlerle sperm donasyonu",
          successRate: "%82",
          slug: "sperm-donasyonu",
        },
        {
          icon: FlaskConical,
          title: "Embriyo Donasyonu",
          shortDesc: "Yüksek kaliteli embriyo donasyonu ile ailenizi tamamlayın",
          successRate: "%85",
          slug: "embriyo-donasyonu",
        },
        {
          icon: Dna,
          title: "Cinsiyet Seçimi",
          shortDesc: "PGD teknolojisi ile yasal ve etik çerçevede cinsiyet seçimi",
          successRate: "%99",
          slug: "cinsiyet-secimi",
        },
        {
          icon: Users,
          title: "Tandem Tedavi Uygulaması",
          shortDesc: "Kendi yumurtanız ve donör yumurta ile eşzamanlı tedavi",
          successRate: "%84",
          slug: "tandem-tedavi",
        },
        {
          icon: Activity,
          title: "Taşıyıcı Annelik",
          shortDesc: "Yasal güvence altında profesyonel taşıyıcı annelik programı",
          successRate: "%88",
          slug: "tasiyici-annelik",
        },
        {
          icon: Zap,
          title: "Sitoplazma Transferi",
          shortDesc: "Yumurta kalitesini artırmak için sitoplazma aktarımı",
          successRate: "%78",
          slug: "sitoplazma-transferi",
        },
        {
          icon: Waves,
          title: "Tüp Bebek ve Fizyoterapi",
          shortDesc: "Tedavi sürecini destekleyen özel fizyoterapi programları",
          successRate: "-",
          slug: "fizyoterapi",
        },
      ],
    },
    en: {
      title: "Our Treatments",
      subtitle: "Personalized IVF treatment options at international standards for every individual's needs",
      cta: "Learn More",
      treatments: [
        {
          icon: Baby,
          title: "IVF (ICSI) Treatment",
          shortDesc: "High success rate IVF treatment with microinjection method",
          successRate: "76%",
          slug: "ivf-icsi",
          image: "/ivf.png",
        },
        {
          icon: Heart,
          title: "Egg Donation",
          shortDesc: "Reliable egg donation program with carefully selected donors",
          successRate: "89%",
          slug: "egg-donation",
        },
        {
          icon: UserPlus,
          title: "Sperm Donation",
          shortDesc: "Sperm donation with donors who have undergone detailed health checks",
          successRate: "82%",
          slug: "sperm-donation",
        },
        {
          icon: FlaskConical,
          title: "Embryo Donation",
          shortDesc: "Complete your family with high-quality embryo donation",
          successRate: "85%",
          slug: "embryo-donation",
        },
        {
          icon: Dna,
          title: "Gender Selection",
          shortDesc: "Gender selection within legal and ethical framework using PGD technology",
          successRate: "99%",
          slug: "gender-selection",
        },
        {
          icon: Users,
          title: "Tandem Treatment",
          shortDesc: "Simultaneous treatment with your own eggs and donor eggs",
          successRate: "84%",
          slug: "tandem-treatment",
        },
        {
          icon: Activity,
          title: "Surrogacy",
          shortDesc: "Professional surrogacy program under legal protection",
          successRate: "88%",
          slug: "surrogacy",
        },
        {
          icon: Zap,
          title: "Cytoplasm Transfer",
          shortDesc: "Cytoplasm transfer to improve egg quality",
          successRate: "78%",
          slug: "cytoplasm-transfer",
        },
        {
          icon: Waves,
          title: "IVF and Physiotherapy",
          shortDesc: "Special physiotherapy programs supporting the treatment process",
          successRate: "-",
          slug: "physiotherapy",
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen">
      <Navigation language={language} setLanguage={setLanguage} />
      
      <div className="pt-30">
        {/* Hero Section */}
        <section className="relative py-48 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/tedaviler_banner.jpg)' }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                {t.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                {t.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Treatments Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.treatments.map((treatment, index) => {
                const imageMap = [
                  'ivf.webp',           // IVF (ICSI) Tedavisi
                  'egg.avif',           // Yumurta Donasyonu
                  'sperm.jpg',          // Sperm Donasyonu
                  'embryo.jpg',         // Embriyo Donasyonu
                  'gender.webp',        // Cinsiyet Seçimi
                  'tandem.webp',        // Tandem Tedavi Uygulaması
                  'surrogacy.jpg',      // Taşıyıcı Annelik
                  'sitoplazma.jpg',     // Sitoplazma Transferi
                  'fizyo.jpg'           // Tüp Bebek ve Fizyoterapi
                ];
                const imgSrc = treatment.image ? treatment.image : `/${imageMap[index]}`;
                return (
                  <Card
                    key={index}
                    className="group overflow-hidden hover:shadow-xl smooth-transition hover:-translate-y-2 animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Background Image */}
                    <div className="relative h-64 w-full overflow-hidden">
                      <img 
                        src={imgSrc} 
                        alt={treatment.title}
                        className="absolute inset-0 h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Success Rate */}
                      {treatment.successRate !== "-" && (
                        <div className="absolute top-4 right-4 text-right">
                          <div className="text-xs text-white/80 mb-1">
                            {language === "tr" ? "Başarı" : "Success"}
                          </div>
                          <div className="text-2xl font-bold text-white">
                            {treatment.successRate}
                          </div>
                        </div>
                      )}

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary-foreground smooth-transition">
                          {treatment.title}
                        </h3>
                        <p className="text-white/90 leading-relaxed mb-4 text-sm">
                          {treatment.shortDesc}
                        </p>

                        {/* CTA Link */}
                        <Link to={`/treatments/${treatment.slug}`}>
                          <Button 
                            variant="outline" 
                            className="w-full bg-white/10 border-white/20 text-white hover:bg-primary hover:text-primary-foreground hover:border-primary backdrop-blur-sm"
                          >
                            {t.cta}
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 smooth-transition" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/20 to-accent/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {language === "tr" 
                ? "Hangi tedavinin size uygun olduğundan emin değil misiniz?" 
                : "Not sure which treatment is right for you?"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {language === "tr"
                ? "Uzman ekibimiz size özel tedavi planı oluşturmak için hazır. Ücretsiz ön görüşme için hemen iletişime geçin."
                : "Our expert team is ready to create a personalized treatment plan for you. Contact us now for a free consultation."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg">
                  {language === "tr" ? "Ücretsiz Danışmanlık" : "Free Consultation"}
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  {language === "tr" ? "Bizimle İletişime Geçin" : "Contact Us"}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer language={language} />
      <WhatsAppButton />
    </div>
  );
};

export default Treatments;
