import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, UserPlus, Shield, Globe } from "lucide-react";

const SpermDonation = () => {
  const [language, setLanguage] = useState("tr");

  const content = {
    tr: {
      title: "Sperm Donasyonu",
      subtitle: "Detaylı sağlık kontrolünden geçmiş donörlerle sperm donasyonu",
      successRate: "%80+ Başarı Oranı",
      description: "Sperm donasyonu, erkeğin sperminin yumurtayı dölleme için yeterli ve gerekli özelliklere sahip olmaması durumunda kliniğimizde bir tedavi seçeneği olarak hastalarımıza önerilmektedir. Kuzey Kıbrıs Türk Cumhuriyeti'nde Üremeye Yardımcı Tedaviler Tüzüğüne göre sperm donasyonu uygulanabilir bir tedavidir. Spermin yumurtayı dölleyememe sebebi spermin sayısal, yapısal ve hareketlilik bozuklukları olabilir.",
      whoIsItFor: "Kimler İçin Uygundur?",
      candidates: [
        "Azoospermi: Menide hiç sperm hücresi bulunamaması",
        "Düşük sperm sayısı (Oligospermi)",
        "Sperm hareketlilik bozukluğu (Astenospermi)",
        "Sperm şekil bozukluğu (Teratospermi)",
        "Genetik hastalık taşıyıcısı olan erkekler",
        "Daha önce başarısız mikrotese denemeleri olan hastalar",
        "Tek başına çocuk sahibi olmak isteyen kadınlar",
        "Radyoterapi/kemoterapi sonrası sperm üretimi durmuş bireyler",
      ],
      causesTitle: "Sperm Bulunmamasının Sebepleri",
      causes: [
        "Yapısal sperm üretim bozukluğu",
        "Spermi meniye aktaran kanallarda tıkanıklık olması",
        "Ameliyat, kemoterapi veya radyoterapi gibi dış etkenlere bağlı sperm üretiminin durması",
        "Kanser tanısı ve cerrahisi",
        "Genetik hastalık taşıyıcılığı nedeniyle çocukların bir hastalık ile doğma olasılığı",
      ],
      processTitle: "Tedavi Süreci Nasıl İlerler?",
      steps: [
        {
          step: "1. Aşama",
          title: "İlk Değerlendirme ve Testler",
          description: "Kadının yumurtalık rezervi ve rahim yapısı değerlendirilir. Erkek hastada FSH, LH, testosteron, kromozom tayini, Y delesyonu gibi kan tahlilleri yapılır. Uygun tedavi planı oluşturulur.",
        },
        {
          step: "2. Aşama",
          title: "Donör Seçimi ve Sperm Temini",
          description: "Donör talep formu doldurulur (boy, kilo, saç rengi, ten rengi, göz rengi, kan grubu, etnik köken). Spermler Danimarka merkezli lisanslı sperm bankalarından (Cryos, European Sperm Bank) getirilir.",
        },
        {
          step: "3. Aşama",
          title: "Yumurta Geliştirme ve Toplama",
          description: "Anne adayına hormon tedavisi uygulanarak yumurtalıklar uyarılır. Takibi yapılan yumurtalar istenilen olgunluğa ulaşınca anestezi eşliğinde toplanır.",
        },
        {
          step: "4. Aşama",
          title: "Laboratuvar Aşaması",
          description: "Danimarka merkezli sperm bankalarından seçilip getirilen sperm ile anne adayından toplanan yumurtalar döllenir ve embriyolar oluşturulur.",
        },
        {
          step: "5. Aşama",
          title: "Embriyo Transferi",
          description: "Gelişimini tamamlayan embriyolardan en kaliteli olanlar seçilerek anne adayının rahim duvarına transfer edilir.",
        },
        {
          step: "6. Aşama",
          title: "Gebelik Takibi",
          description: "Transferden 12 gün sonra kan testi ile gebelik kontrol edilir. Süreç boyunca hasta danışmanlığı sağlanır.",
        },
      ],
      advantagesTitle: "Kıbrıs'ta Sperm Donasyonu Avantajları",
      advantages: [
        "Yasal altyapı ve güvenli uygulama",
        "Evlilik şartı aranmıyor",
        "Danimarka merkezli lisanslı sperm bankaları (Cryos, European Sperm Bank)",
        "Detaylı donör bilgileri (fiziksel özellikler, eğitim durumu)",
        "Gizlilik ve etik uygulama garantisi",
        "%80+ başarı oranı",
        "Deneyimli kadro ve hasta danışmanlığı",
        "Uluslararası standartlarda hizmet",
      ],
      legalTitle: "Kıbrıs'ta Sperm Donasyonu Yasal ve Güvenli",
      legalDescription: "Kuzey Kıbrıs, sperm donasyonu konusunda yasal altyapısı olan, uygulamalara izin veren ve bu alanda deneyimli, itibarlı bir ülkedir. Fertina IVF olarak hastalarımıza gizlilik, etik uygulama ve güven temelinde hizmet sunmaktayız. Sperm donasyonu tedavisiyle kliniğimizde gebelik elde etme oranımız %80'in üzerindedir.",
      cta: "Randevu Alın",
      contact: "Bilgi Alın",
    },
    en: {
      title: "Sperm Donation",
      subtitle: "Sperm donation with donors who have undergone detailed health checks",
      successRate: "80%+ Success Rate",
      description: "Sperm donation is recommended to our patients as a treatment option in our clinic when the male's sperm does not have sufficient and necessary characteristics to fertilize the egg. According to the Assisted Reproductive Treatment Regulation in the Turkish Republic of Northern Cyprus, sperm donation is an applicable treatment. The reason why sperm cannot fertilize the egg may be numerical, structural and motility disorders of sperm.",
      whoIsItFor: "Who Is It For?",
      candidates: [
        "Azoospermia: No sperm cells found in semen",
        "Low sperm count (Oligospermia)",
        "Sperm motility disorder (Asthenospermia)",
        "Sperm shape disorder (Teratospermia)",
        "Men who are carriers of genetic diseases",
        "Patients with previous unsuccessful microtese attempts",
        "Single women who want to have children",
        "Individuals whose sperm production has stopped after radiotherapy/chemotherapy",
      ],
      causesTitle: "Causes of No Sperm Found",
      causes: [
        "Structural sperm production disorder",
        "Blockage in the channels that transfer sperm to semen",
        "Cessation of sperm production due to external factors such as surgery, chemotherapy or radiotherapy",
        "Cancer diagnosis and surgery",
        "Possibility of children being born with a disease due to genetic disease carrier",
      ],
      processTitle: "How Does The Treatment Process Progress?",
      steps: [
        {
          step: "Stage 1",
          title: "Initial Evaluation and Tests",
          description: "The woman's ovarian reserve and uterine structure are evaluated. Blood tests such as FSH, LH, testosterone, chromosome typing, Y deletion are performed on the male patient. An appropriate treatment plan is created.",
        },
        {
          step: "Stage 2",
          title: "Donor Selection and Sperm Procurement",
          description: "Donor request form is filled out (height, weight, hair color, skin color, eye color, blood type, ethnic origin). Sperm is obtained from Denmark-based licensed sperm banks (Cryos, European Sperm Bank).",
        },
        {
          step: "Stage 3",
          title: "Egg Development and Collection",
          description: "Ovaries are stimulated by applying hormone therapy to the mother candidate. When the monitored eggs reach the desired maturity, they are collected under anesthesia.",
        },
        {
          step: "Stage 4",
          title: "Laboratory Stage",
          description: "Eggs collected from the mother candidate are fertilized with sperm selected and brought from Denmark-based sperm banks and embryos are formed.",
        },
        {
          step: "Stage 5",
          title: "Embryo Transfer",
          description: "The highest quality embryos that have completed their development are selected and transferred to the uterine wall of the mother candidate.",
        },
        {
          step: "Stage 6",
          title: "Pregnancy Follow-up",
          description: "Pregnancy is checked by blood test 12 days after transfer. Patient counseling is provided throughout the process.",
        },
      ],
      advantagesTitle: "Sperm Donation Advantages in Cyprus",
      advantages: [
        "Legal infrastructure and safe practice",
        "No marriage requirement",
        "Denmark-based licensed sperm banks (Cryos, European Sperm Bank)",
        "Detailed donor information (physical characteristics, education status)",
        "Confidentiality and ethical practice guarantee",
        "80%+ success rate",
        "Experienced staff and patient counseling",
        "International standard service",
      ],
      legalTitle: "Sperm Donation in Cyprus is Legal and Safe",
      legalDescription: "Northern Cyprus is a country with a legal infrastructure regarding sperm donation, which allows applications and is experienced and reputable in this field. As Fertina IVF, we provide services to our patients on the basis of confidentiality, ethical practice and trust. Our pregnancy rate with sperm donation treatment in our clinic is over 80%.",
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                  {t.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  {t.subtitle}
                </p>
                
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg mb-8 inline-flex">
                  <UserPlus className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">{t.successRate}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact"><Button size="lg">{t.cta}</Button></Link>
                  <Link to="/contact"><Button size="lg" variant="outline">{t.contact}</Button></Link>
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

        {/* Who Is It For */}
        <section className="py-16 bg-muted/30">
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

        {/* Causes */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              {t.causesTitle}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {t.causes.map((cause, index) => (
                <Card key={index} className="p-4 flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{cause}</span>
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

        {/* Legal Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Globe className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {t.legalTitle}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.legalDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 bg-background">
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

        {/* Bottom CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {language === "tr" 
                  ? "Fertina IVF ile Umut Bilimle Buluşuyor!" 
                  : "Hope Meets Science with Fertina IVF!"}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {language === "tr"
                  ? "Sperm donasyonu, tıbbi nedenlerle baba olamayan erkekler ve anne olma hayali kuran kadınlar için etkili ve güvenilir bir seçenektir. Bilgi almak ve ilk adımı atmak için bizimle iletişime geçin."
                  : "Sperm donation is an effective and reliable option for men who cannot become fathers for medical reasons and women who dream of becoming mothers. Contact us to get information and take the first step."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">{t.cta}</Button>
                <Button size="lg" variant="outline">{t.contact}</Button>
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

export default SpermDonation;

