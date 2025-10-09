import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Team = () => {
  const [language, setLanguage] = useState("tr");

  const content = {
    tr: {
      title: "Ekibimiz",
      directorTitle: "Medikal Direktör: Op. Dr. Erman Sever (Kadın Hastalıkları, Doğum ve Tüp Bebek Uzmanı)",
      bio: [
        "Medikal Direktörümüz Dr Erman Sever, 1981 yılında Sakarya’da doğdu. 1991 yılında Mustafa Kemal Paşa İlkokulu’ndan, 1999 yılında Sakarya Anadolu Lisesi’nden mezun oldu.",
        "Hacettepe Üniversitesi Tıp Fakültesi’nden 2005’te mezun oldu; 2006’da Kocaeli Üniversitesi’nde Kadın Hastalıkları ve Doğum asistanlığına başlayıp 2011’de uzman oldu.",
        "Laparoskopik ve histeroskopik cerrahiler, vajinal estetik ve ürojinekoloji alanlarında sertifikalı ve deneyimlidir.",
        "Sakarya Doğumevi ve Sakarya Üni. Eğitim Araştırma Hastanesi’nde görev yaptı; İstanbul Amerikan Hastanesi’nde IVF sertifikasyonunu tamamladı.",
        "2019’dan bu yana Kuzey Kıbrıs’ta görev yapmakta; 2021’de Kıbrıs Amerikan Tüp Bebek Merkezi Tıbbi Direktörü olmuştur.",
      ],
      galleryTitle: "Takım Fotoğrafları",
      membersTitle: "Uzman Kadro",
    },
    en: {
      title: "Our Team",
      directorTitle: "Medical Director: Op. Dr. Erman Sever (OB/GYN and IVF Specialist)",
      bio: [
        "Born in 1981, graduated from Hacettepe University Faculty of Medicine in 2005; OB/GYN specialist since 2011.",
        "Certified and experienced in laparoscopic/hysteroscopic surgeries, urogynecology and aesthetic gynecology.",
        "Worked in Sakarya; IVF certification at American Hospital İstanbul; since 2019 in Northern Cyprus; Medical Director since 2021.",
      ],
      galleryTitle: "Team Gallery",
      membersTitle: "Expert Staff",
    },
  } as const;

  const t = content[language as keyof typeof content];

  const slides = [
    { src: "/team.jpg", alt: "Team" },
  ];

  const memberPlaceholders = [
    { name: "Op. Dr. Erman Sever", title: language === "tr" ? "Kadın Hastalıkları & Doğum – Tüp Bebek Uzmanı" : "OB/GYN – IVF Specialist", image: "/erman-tr.jpg" },
    { name: "Ünsal Öztürk", title: language === "tr" ? "Kurucu / CEO" : "Founder / CEO", image: "/unsal-tr.jpg" },
    { name: "Anastasia Öztürk", title: language === "tr" ? "Uluslararası Hasta Koordinatörü" : "International Patient Coordinator", image: "/anastasia-tr.jpg" },
    { name: "Aldinç Işın", title: language === "tr" ? "Pazarlama Müdürü" : "Marketing Manager", image: "/aldinc-tr.jpg" },
    { name: "Suhayl Al Suwayydi", title: language === "tr" ? "Uluslararası Hasta Hizmetleri Müdürü" : "Intl. Patient Services Manager", image: "/suhayl-tr.jpg" },
    { name: "Arij Hamie", title: language === "tr" ? "Uluslararası Hasta Koordinatörü" : "International Patient Coordinator", image: "/arij-tr.jpg" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation language={language} setLanguage={setLanguage} />

      <div className="pt-20">
        <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">{t.title}</h1>
            <p className="text-sm text-muted-foreground">{t.directorTitle}</p>
          </div>
        </section>

        <section className="py-10 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="w-full h-60 md:h-80 rounded-xl overflow-hidden shadow mb-6">
                <img src="/team.jpg" alt="Director and Team" className="w-full h-full object-cover object-[50%_40%]" />
              </div>
              <div className="space-y-4">
                {t.bio.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        

        <section className="py-14 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">{t.membersTitle}</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {memberPlaceholders.map((m, i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="h-40 w-full overflow-hidden">
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="font-semibold text-foreground">{m.name}</div>
                    <div className="text-sm text-muted-foreground">{m.title}</div>
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

export default Team;
