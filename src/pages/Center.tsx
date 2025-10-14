import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Center = () => {
  const [language, setLanguage] = useState("tr");
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation();
  const { ref: sectionsRef, isVisible: sectionsVisible } = useScrollAnimation();
  const { ref: cyprusTitleRef, isVisible: cyprusTitleVisible } = useScrollAnimation();
  const { ref: cyprusContentRef, isVisible: cyprusContentVisible } = useScrollAnimation();
  const { ref: addressRef, isVisible: addressVisible } = useScrollAnimation();
  const { ref: visitRef, isVisible: visitVisible } = useScrollAnimation();

  const content = {
    tr: {
      title: "Merkezimiz",
      hero: "Fertina – Kıbrıs’ın lider tüp bebek merkezi",
      intro: [
        "Fertina gebelik elde etme yüzdesi her zaman en üst sırada olan Kıbrıs’ın lider tüp bebek merkezi’dir.",
        "Son teknoloji ekipmanlarla donatılmış merkezimiz, kişiye özel tedavi planlarıyla gebelik oranlarını %80’in üzerinde tutmayı başarmaktadır.",
      ],
      cyprus: {
        title: "Kuzey Kıbrıs’ın Eşsiz Konumu ve Güzellikleri",
        paragraphs: [
          "Akdeniz’in kalbinde yer alan Kuzey Kıbrıs; tarihi, doğal güzellikleri ve sakin yaşam tarzıyla dünyanın dört bir yanından ziyaretçileri kendine çeker. Altın kumsallar, masmavi deniz ve yılın büyük bölümünde güneşli hava adayı bir huzur noktasına dönüştürür.",
          "Girne Kalesi, Salamis Harabeleri, Bellapais Manastırı ve Mağusa surları gibi yapılar adanın köklü geçmişini yansıtır. Tedaviniz boyunca adanın güzelliklerini keşfederken aynı zamanda dingin bir tatil deneyimi yaşarsınız.",
          "Kuzey Kıbrıs; kolay ulaşım, güvenli ortam, samimi insanlar ve doğal güzellikleriyle yalnızca tedavi için değil, ruhunuzu dinlendirmek için de özel bir destinasyondur.",
        ],
        addressTitle: "Adresimiz",
        addressLines: [
          "Mağusa Yaşam Hastanesi, Kuzey Kıbrıs",
          "Mağusa, Gazi Mustafa Kemal Bulvarı No:23",
        ],
      },
      sections: [
        {
          title: "Embriyoloji Laboratuvarı",
          desc:
            "Yapay zeka destekli embriyoloji laboratuvarımız ve tecrübeli ekibimiz başarımızın mutfağıdır. Yüksek güvenlik önlemleriyle embriyolarınız yıllarca güvenle saklanır.",
        },
        {
          title: "Genetik Laboratuvarı",
          desc:
            "Embriyoların genetik durumu PGD, NGS ve tek gen analizi testleriyle değerlendirilir. Hastaya özel genetik danışmanlık verilir; sağlıklı embriyo transferi planlanır.",
        },
        {
          title: "TESE – %100 Hassasiyet",
          desc:
            "Ejakulatta sperm bulunmayan uygun hastalarda testisten sperm çıkarma işlemi ağrı ve kanama olmadan, aynı gün rutin hayata dönüşle gerçekleştirilir.",
        },
        {
          title: "Sitoplazma & Mitokondri Transferi",
          desc:
            "Kendi yumurtası ve genetiğiyle gebelik şansını artırmak isteyen ileri yaş/düşük rezerv hastalar için yüksek başarı sağlayan modern yaklaşım.",
        },
        {
          title: "Rahim Duvarı Fizyoterapisi",
          desc:
            "Rahim duvarı ince/hasarlı hastalarda uyguladığımız özel fizyoterapi programıyla gebelik şansı artırılmaktadır.",
        },
        {
          title: "Donör Havuzu & Sperm Bankaları",
          desc:
            "Özenle seçilmiş donör havuzumuzda bulaşıcı hastalık ve genetik taşıyıcılık taranır. Sperm bağışı kabul edilmez; lisanslı Danimarka sperm bankalarından seçilerek getirilir.",
        },
        {
          title: "Kişiye Özel Yolculuk",
          desc:
            "Başarımızın sırrı; hasta odaklı, disiplinli ve uyumlu ekip çalışmasıdır. Süreç yerel testlerle başlar, Kıbrıs’ta merkezimizde güvenle tamamlanır.",
        },
      ],
      visit: "Tedaviye başlamadan önce sizi merkezimizi görmeye davet ediyoruz. Gazimağusa’daki konumumuz en güzel sahillere 5 dakika mesafededir.",
    },
    en: {
      title: "Our Center",
      hero: "Fertina – Cyprus’ leading IVF center",
      intro: [
        "Embryology, genetics and patient‑centric care with high success.",
        "State‑of‑the‑art equipment and personalized protocols keep success rates above 80%.",
      ],
      cyprus: {
        title: "Northern Cyprus – Unique Location",
        paragraphs: [
          "In the heart of the Mediterranean, Northern Cyprus offers serene beaches, history and over 300 days of sunshine.",
          "Landmarks like Kyrenia Castle, Salamis and Bellapais reflect a rich past. Combine your treatment with a peaceful escape.",
          "Easy access, safety and warm hospitality make it a special destination beyond treatment.",
        ],
        addressTitle: "Address",
        addressLines: [
          "Magusa Yasam Hospital, Northern Cyprus",
          "Magusa, Gazi Mustafa Kemal Boulevard No:23",
        ],
      },
      sections: [
        { title: "Embryology Lab", desc: "AI‑supported lab, high security storage of embryos for years." },
        { title: "Genetics Lab", desc: "PGD/NGS/Single‑gene testing and tailored genetic counseling." },
        { title: "TESE", desc: "Painless, same‑day recovery sperm retrieval for suitable patients." },
        { title: "Cytoplasm & Mitochondria Transfer", desc: "Boosts success with patient’s own genetics even with low reserve." },
        { title: "Endometrial Physiotherapy", desc: "Special program for thin/damaged endometrium to improve outcomes." },
        { title: "Donor Pool & Sperm Banks", desc: "Curated donors; sperm from licensed Danish banks only." },
        { title: "Personalized Journey", desc: "Coordinated, disciplined team from local tests to Cyprus treatment." },
      ],
      visit: "We invite you to visit our center in Gazimagusa, just 5 minutes from the best beaches.",
    },
  } as const;

  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen">
      <Navigation language={language} setLanguage={setLanguage} />

      <div className="pt-20">
        <section className="py-20 bg-background">
          <div ref={heroRef} className={`container mx-auto px-4 text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">{t.title}</h1>
            <p className="text-lg text-muted-foreground">{t.hero}</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div ref={introRef} className={`max-w-4xl mx-auto space-y-4 transition-all duration-1000 ${introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {t.intro.map((p, i) => (
                <p key={i} className="text-lg text-muted-foreground leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div ref={sectionsRef} className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {t.sections.map((s, i) => (
                <Card key={i} className={`p-6 transition-all duration-1000 ${sectionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: sectionsVisible ? `${i * 80}ms` : '0ms' }}>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 ref={cyprusTitleRef} className={`text-3xl md:text-4xl font-bold mb-8 text-center text-foreground transition-all duration-1000 ${cyprusTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.cyprus.title}</h2>
              <div ref={cyprusContentRef} className={`space-y-4 transition-all duration-1000 ${cyprusContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {t.cyprus.paragraphs.map((p: string, i: number) => (
                  <p key={i} className="text-lg text-muted-foreground leading-relaxed">{p}</p>
                ))}
              </div>
              <div ref={addressRef} className={`mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/20 transition-all duration-1000 ${addressVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div className="text-xl font-semibold text-foreground">{t.cyprus.addressTitle}</div>
                </div>
                <div className="text-muted-foreground text-center">
                  {t.cyprus.addressLines.map((l: string, i: number) => (
                    <div key={i}>{l}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div ref={visitRef} className={`max-w-3xl mx-auto transition-all duration-1000 ${visitVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg text-muted-foreground">{t.visit}</p>
            </div>
          </div>
        </section>
      </div>

      <Footer language={language} />
      <WhatsAppButton />
    </div>
  );
};

export default Center;
