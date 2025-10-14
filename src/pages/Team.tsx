import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/hooks/use-language";

const Team = () => {
  const { language, setLanguage } = useLanguage();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: directorImageRef, isVisible: directorImageVisible } = useScrollAnimation();
  const { ref: directorBioRef, isVisible: directorBioVisible } = useScrollAnimation();
  const { ref: membersTitleRef, isVisible: membersTitleVisible } = useScrollAnimation();
  const { ref: membersGridRef, isVisible: membersGridVisible } = useScrollAnimation();

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
        <section className="py-16 bg-background">
          <div ref={heroRef} className={`container mx-auto px-4 text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">{t.title}</h1>
            <p className="text-sm text-muted-foreground">{t.directorTitle}</p>
          </div>
        </section>

        <section className="py-10 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div ref={directorImageRef} className={`w-full h-60 md:h-80 rounded-xl overflow-hidden shadow mb-6 transition-all duration-1000 ${directorImageVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <img src="/team.jpg" alt="Director and Team" className="w-full h-full object-cover object-[50%_40%]" />
              </div>
              <div ref={directorBioRef} className={`space-y-4 transition-all duration-1000 ${directorBioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {t.bio.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        

        <section className="py-14 bg-background">
          <div className="container mx-auto px-4">
            <h2 ref={membersTitleRef} className={`text-3xl font-bold text-center mb-8 text-foreground transition-all duration-1000 ${membersTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t.membersTitle}</h2>
            <div ref={membersGridRef} className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {memberPlaceholders.map((m, i) => (
                <Card key={i} className={`overflow-hidden transition-all duration-1000 ${membersGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: membersGridVisible ? `${i * 100}ms` : '0ms' }}>
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
