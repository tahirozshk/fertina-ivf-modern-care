import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FlaskConical, Dna, Microscope, Baby, Syringe, Beaker, Activity, TestTube2, Stethoscope, HeartPulse, ScanSearch } from "lucide-react";

const MedicalServices = () => {
  const [language, setLanguage] = useState("tr");

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
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">{t.title}</h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">{t.subtitle}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">{t.servicesTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.services.map((item, index) => (
                <Card key={index} className="group p-6 hover:shadow-xl smooth-transition hover:-translate-y-2 animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
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
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">{t.geneticTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.geneticTests.map((item, index) => (
                <Card key={index} className="group p-6 hover:shadow-xl smooth-transition hover:-translate-y-2 animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 smooth-transition">
                        <item.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground smooth-transition" />
                      </div>
                      {item.successRate && item.successRate !== "-" && (
                        <div className="text-right">
                          <div className="text-xs text-muted-foreground mb-1">
                            {language === "tr" ? "Başarı" : "Accuracy"}
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
                      <Link to={language === "tr" ? `/tibbi-hizmetler/${item.slug}` : `/medical-services/${item.slug}`}>
                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                          {t.cta}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 smooth-transition" />
                        </Button>
                      </Link>
                    </div>
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

export default MedicalServices;
