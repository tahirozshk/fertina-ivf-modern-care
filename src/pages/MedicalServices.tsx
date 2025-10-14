import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FlaskConical, Dna, Microscope, Baby, Syringe, Beaker, Activity, TestTube2, Stethoscope, HeartPulse, ScanSearch } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/hooks/use-language";

const MedicalServices = () => {
  const { language, setLanguage } = useLanguage();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: servicesTitleRef, isVisible: servicesTitleVisible } = useScrollAnimation();
  const { ref: servicesGridRef, isVisible: servicesGridVisible } = useScrollAnimation();
  const { ref: geneticTitleRef, isVisible: geneticTitleVisible } = useScrollAnimation();
  const { ref: geneticGridRef, isVisible: geneticGridVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const content = {
    tr: {
      title: "Tıbbi Hizmetler",
      subtitle: "Kliniğimizde sunduğumuz tıbbi hizmetler ve genetik testler",
      cta: "Detaylı Bilgi",
      servicesTitle: "Tıbbi Hizmetler",
      geneticTitle: "Genetik Testler",
      services: [
        { icon: TestTube2, title: "Sperm Elde Etme ve TESE", shortDesc: "Cerrahi yöntemlerle testisten sperm elde edilmesi", successRate: "%70", slug: "sperm-elde-etme" },
        { icon: Dna, title: "Genetik", shortDesc: "Kısırlıkla ilişkili genetik değerlendirme ve danışmanlık", successRate: "%99", slug: "genetik" },
        { icon: Syringe, title: "İlk Doğurganlık Testleri", shortDesc: "Hormon, ultrason ve semen analizi ile başlangıç taraması", successRate: "%95", slug: "ilk-dogurganlik-testleri" },
        { icon: Microscope, title: "Laparoskopi", shortDesc: "Tanısal ve tedavi amaçlı kapalı cerrahi", successRate: "%92", slug: "laparoskopi" },
        { icon: ScanSearch, title: "Yeni Nesil Dizileme", shortDesc: "Genetik risklerin NGS ile ileri analizi", successRate: "%99", slug: "yeni-nesil-dizileme" },
        { icon: Beaker, title: "Embriyo Dondurma", shortDesc: "Gelecek sikluslar için yüksek kaliteli embriyo saklama", successRate: "%95", slug: "embriyo-dondurma" },
        { icon: FlaskConical, title: "Yumurta Dondurma", shortDesc: "Gelecekteki annelik için oosit vitrifikasyonu", successRate: "%90", slug: "yumurta-dondurma" },
        { icon: Baby, title: "Sperm Dondurma", shortDesc: "Tedavi öncesi sperm örneği saklama", successRate: "%90", slug: "sperm-dondurma" },
        { icon: Activity, title: "Histeroskopi", shortDesc: "Rahim içi yapısal problemlerin tanı ve tedavisi", successRate: "%90", slug: "histeroskopi" },
        { icon: HeartPulse, title: "Gebelik Takibi", shortDesc: "Gebelik sürecinde düzenli değerlendirme ve danışmanlık", successRate: "%98", slug: "gebelik-takibi" },
        { icon: Stethoscope, title: "Doğum", shortDesc: "Anne ve bebek güvenliğini önceleyen doğum yönetimi", successRate: "%99", slug: "dogum" },
        { icon: Microscope, title: "Servikal Serklaj", shortDesc: "Servikal yetmezlikte gebeliği koruyucu dikiş", successRate: "%85", slug: "servikal-serklaj" },
      ],
      geneticTests: [
        { icon: ScanSearch, title: "Yeni Nesil Dizileme", shortDesc: "Binlerce genin aynı anda analizi", successRate: "%99", slug: "yeni-nesil-dizileme" },
        { icon: Dna, title: "PGD", shortDesc: "Embriyo transferi öncesi genetik tarama", successRate: "%99", slug: "pgd" },
        { icon: ScanSearch, title: "Tek Gen Hastalık Analizi", shortDesc: "Ailevi tek gen hastalıklarının incelemesi", successRate: "%98", slug: "tek-gen-analizi" },
        { icon: Dna, title: "Tüm Ekzom Dizilemesi", shortDesc: "Protein kodlayan bölgelerin tam analizi", successRate: "%98", slug: "tum-ekzom-dizilemesi" },
      ],
    },
    en: {
      title: "Medical Services",
      subtitle: "Medical services and genetic tests we offer in our clinic",
      cta: "Learn More",
      servicesTitle: "Medical Services",
      geneticTitle: "Genetic Tests",
      services: [
        { icon: TestTube2, title: "Sperm Retrieval and TESE", shortDesc: "Sperm obtained surgically from testis", successRate: "70%", slug: "sperm-retrieval" },
        { icon: Dna, title: "Genetics", shortDesc: "Genetic evaluation and counseling", successRate: "99%", slug: "genetics" },
        { icon: Syringe, title: "Initial Fertility Tests", shortDesc: "Baseline hormone, ultrasound and semen analysis", successRate: "95%", slug: "initial-fertility-tests" },
        { icon: Microscope, title: "Laparoscopy", shortDesc: "Diagnostic and therapeutic minimally invasive surgery", successRate: "92%", slug: "laparoscopy" },
        { icon: ScanSearch, title: "Next Generation Sequencing", shortDesc: "Advanced analysis of genetic risks", successRate: "99%", slug: "next-generation-sequencing" },
        { icon: Beaker, title: "Embryo Freezing", shortDesc: "Cryostorage of high-quality embryos", successRate: "95%", slug: "embryo-freezing" },
        { icon: FlaskConical, title: "Egg Freezing", shortDesc: "Oocyte vitrification for future motherhood", successRate: "90%", slug: "egg-freezing" },
        { icon: Baby, title: "Sperm Freezing", shortDesc: "Preserving samples before treatment", successRate: "90%", slug: "sperm-freezing" },
        { icon: Activity, title: "Hysteroscopy", shortDesc: "Diagnosis and treatment of intrauterine issues", successRate: "90%", slug: "hysteroscopy" },
        { icon: HeartPulse, title: "Pregnancy Follow-up", shortDesc: "Regular assessment and counseling during pregnancy", successRate: "98%", slug: "pregnancy-follow-up" },
        { icon: Stethoscope, title: "Delivery", shortDesc: "Delivery management prioritizing safety", successRate: "99%", slug: "delivery" },
        { icon: Microscope, title: "Cervical Cerclage", shortDesc: "Cervical stitch to protect pregnancy", successRate: "85%", slug: "cervical-cerclage" },
      ],
      geneticTests: [
        { icon: ScanSearch, title: "Next Generation Sequencing", shortDesc: "Simultaneous analysis of thousands of genes", successRate: "99%", slug: "next-generation-sequencing" },
        { icon: Dna, title: "PGD", shortDesc: "Genetic screening before embryo transfer", successRate: "99%", slug: "pgd" },
        { icon: ScanSearch, title: "Single Gene Analysis", shortDesc: "Investigation of familial monogenic diseases", successRate: "98%", slug: "single-gene-analysis" },
        { icon: Dna, title: "Whole Exome Sequencing", shortDesc: "Full analysis of coding regions", successRate: "98%", slug: "whole-exome-sequencing" },
      ],
    },
  } as const;

  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen">
      <Navigation language={language} setLanguage={setLanguage} />

      <div className="pt-20">
        <section className="relative py-48 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/tibbi-hizmetler_banner.jpg)' }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div ref={heroRef} className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">{t.title}</h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">{t.subtitle}</p>
            </div>
          </div>
        </section>


        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 ref={servicesTitleRef} className={`text-3xl md:text-4xl font-bold mb-8 text-foreground transition-all duration-1000 ${servicesTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.servicesTitle}</h2>
            <div ref={servicesGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.services.map((item, index) => {
                const imageMap = [
                  'sperm_alma.jpg',        // Sperm Elde Etme ve TESE
                  'genetic_dna.jpg',       // Genetik
                  'dogurganlik.jpg',       // İlk Doğurganlık Testleri
                  'laparoskopi.png',       // Laparoskopi
                  'yeni_nesil.webp',       // Yeni Nesil Dizileme
                  'embryo_dondurma.jpg',   // Embriyo Dondurma
                  'yumurta_dondurma.jpg',  // Yumurta Dondurma
                  'sperm_dondurma.jpg',    // Sperm Dondurma
                  'histeroskopi.jpg',      // Histeroskopi
                  'dogum_takip.jpg',          // Gebelik Takibi
                  'preg.jpg',          // Doğum
                  'servilkal.jpg'           // Servikal Serklaj
                ];
                
                const hasImage = imageMap[index] !== null;
                
                if (hasImage) {
                  return (
                    <Card key={index} className={`group overflow-hidden hover:shadow-xl smooth-transition hover:-translate-y-2 transition-all duration-1000 ${servicesGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: servicesGridVisible ? `${index * 50}ms` : '0ms' }}>
                      <div className="relative h-64 w-full overflow-hidden">
                        <img 
                          src={`/${imageMap[index]}`} 
                          alt={item.title}
                          className="absolute inset-0 h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        
                        {item.successRate && item.successRate !== "-" && (
                          <div className="absolute top-4 right-4 text-right">
                            <div className="text-xs text-white/80 mb-1">
                              {language === "tr" ? "Başarı" : "Success"}
                            </div>
                            <div className="text-2xl font-bold text-white">{item.successRate}</div>
                          </div>
                        )}

                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary-foreground smooth-transition">
                            {item.title}
                          </h3>
                          {item.shortDesc && (
                            <p className="text-white/90 leading-relaxed mb-4 text-sm">
                              {item.shortDesc}
                            </p>
                          )}
                          <Link to={language === "tr" ? `/tibbi-hizmetler/${item.slug}` : `/medical-services/${item.slug
                            .replace("sperm-elde-etme","sperm-retrieval")
                            .replace("yeni-nesil-dizileme","next-generation-sequencing")
                            .replace("laparoskopi","laparoscopy")
                            .replace("gebelik-takibi","pregnancy-follow-up")
                            .replace("dogum","delivery")
                            .replace("servikal-serklaj","cervical-cerclage")}` }>
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
                } else {
                  return (
                    <Card key={index} className={`group p-6 hover:shadow-xl smooth-transition hover:-translate-y-2 transition-all duration-1000 ${servicesGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: servicesGridVisible ? `${index * 50}ms` : '0ms' }}>
                      <div className="flex flex-col h-full">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 smooth-transition">
                            <item.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground smooth-transition" />
                          </div>
                          {item.successRate && item.successRate !== "-" && (
                            <div className="text-right">
                              <div className="text-xs text-muted-foreground mb-1">
                                {language === "tr" ? "Başarı" : "Success"}
                              </div>
                              <div className="text-2xl font-bold text-primary">{item.successRate}</div>
                            </div>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary smooth-transition">{item.title}</h3>
                        {item.shortDesc && (
                          <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{item.shortDesc}</p>
                        )}
                        <div className="mt-auto">
                          <Link to={language === "tr" ? `/tibbi-hizmetler/${item.slug}` : `/medical-services/${item.slug
                            .replace("sperm-elde-etme","sperm-retrieval")
                            .replace("yeni-nesil-dizileme","next-generation-sequencing")
                            .replace("laparoskopi","laparoscopy")
                            .replace("gebelik-takibi","pregnancy-follow-up")
                            .replace("dogum","delivery")
                            .replace("servikal-serklaj","cervical-cerclage")}` }>
                            <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                              {t.cta}
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 smooth-transition" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  );
                }
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 ref={geneticTitleRef} className={`text-3xl md:text-4xl font-bold mb-8 text-foreground transition-all duration-1000 ${geneticTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.geneticTitle}</h2>
            <div ref={geneticGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.geneticTests.map((item, index) => {
                const geneticImageMap = [
                  'yeni_nesil.webp',       // Yeni Nesil Dizileme
                  'pgd.jpg',               // PGD
                  'single_gene.jpg',       // Tek Gen Hastalık Analizi
                  'exosome.jpg'            // Tüm Ekzom Dizilemesi
                ];
                
                return (
                  <Card key={index} className={`group overflow-hidden hover:shadow-xl smooth-transition hover:-translate-y-2 transition-all duration-1000 ${geneticGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: geneticGridVisible ? `${index * 50}ms` : '0ms' }}>
                    <div className="relative h-64 w-full overflow-hidden">
                      <img 
                        src={`/${geneticImageMap[index]}`} 
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {item.successRate && item.successRate !== "-" && (
                        <div className="absolute top-4 right-4 text-right">
                          <div className="text-xs text-white/80 mb-1">
                            {language === "tr" ? "Başarı" : "Accuracy"}
                          </div>
                          <div className="text-2xl font-bold text-white">{item.successRate}</div>
                        </div>
                      )}

                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary-foreground smooth-transition">
                          {item.title}
                        </h3>
                        {item.shortDesc && (
                          <p className="text-white/90 leading-relaxed mb-4 text-sm">
                            {item.shortDesc}
                          </p>
                        )}
                        <Link to={language === "tr" ? `/tibbi-hizmetler/${item.slug}` : `/medical-services/${item.slug}`}>
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
      </div>

      {/* Bottom CTA (same as Treatments) */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/20 to-accent/30">
        <div ref={ctaRef} className={`container mx-auto px-4 text-center transition-all duration-1000 ${ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
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

      <Footer language={language} />
      <WhatsAppButton />
    </div>
  );
};

export default MedicalServices;
