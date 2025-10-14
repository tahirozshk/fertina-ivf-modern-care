import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/hooks/use-language";

const MentalHealthIVF = () => {
  const { language, setLanguage } = useLanguage();
  const dir = language === "ar" ? "rtl" : "ltr";

  const content = {
    tr: {
      title: "Fertilite Tedavileri Sırasında Mental Sağlığı Koruma İpuçları",
      banner: "/4..jpg",
      body: `Aile kurmak veya büyütmek için in vitro fertilizasyon (IVF) önemli ve dönüştürücü bir deneyimdir. Ancak bu süreç oldukça yorucu olabilir ve kişinin mental sağlığını ciddi bir duygusal dalgalanmaya sokabilir. Bir IVF kliniği olarak, hastalarımıza fiziksel desteğin yanı sıra bu zorlu dönemde mental ve duygusal destek sağlamak için ne kadar kritik olduğunun farkındayız.

IVF Yolculuğu
IVF yolculuğuna başlamak, duygular ve belirsizliklerle dolu bir süreçtir; ancak heyecan verici ve ilgi çekici de olabilir. Hastalar, hormon iğneleri ve ilaç uygulamalarından embriyo transferinin beklentisine ve gebelik test sonuçlarının zorlayıcı bekleyişine kadar sürecin çeşitli aşamalarında heyecan, kaygı ve hatta korku karışımı duygular yaşayabilirler.

IVF, fiziksel ve hormonal değişiklikleri içerdiği için psikolojik etkiler özellikle yoğun olabilir. Hormon dalgalanmaları, fiziksel rahatsızlık ve tedaviye devam etme iradesi, stres, kaygı ve depresyonu artırabilir.

Ayrıca, IVF prosedürleri maliyetli olabilir ve sigorta tarafından tam olarak karşılanmayabilir, bu da prosedürün finansal yükü nedeniyle ek stres ve kaygı yaratabilir. Bu finansal zorluklar, umutsuzluk ve olumsuzluk duygularını artırarak duygusal yükü artırabilir.

IVF Sırasında Mental Sağlığı Koruma
IVF sürecinde mental sağlığı önceliklendirmek, bu sürecin getirdiği duygusal zorlukları kabul etmekle başlar. Bir IVF kliniği olarak, müşterilerimize bu duygusal dalgalanmayı aşmaları için gerekli araçları ve desteği sağlama taahhüdündeyiz.

Uzman Yardımı Alın: In vitro fertilizasyon sürecinden geçen hastalar, bir terapist veya danışman gibi bir mental sağlık uzmanıyla konuşmaktan büyük ölçüde fayda sağlayabilirler. Bu uzmanlar, duyguları işlemek, başa çıkma mekanizmaları oluşturmak ve tedavi sırasında ortaya çıkabilecek stres ve kaygıyı yönetme konusunda rehberlik alacakları özel ve güvenli bir ortam sunabilir.
Destek Sistemi Oluşturun: Aile, arkadaşlar ve IVF sürecini anlayan diğer insanlardan oluşan sağlam bir destek sistemi oluşturmak oldukça faydalıdır. Hastalar, duygularını ve deneyimlerini paylaşarak kendilerini daha az yalnız hissedebilir ve karşılaşacakları zorluklarla başa çıkmaya daha hazırlıklı hale gelebilirler.
Kendinize İyi Bakın: IVF sürecinde, hastalar streslerini kontrol edebilir ve dengede kalmak için mindfulness, egzersiz ve gevşeme yöntemleri gibi öz bakım uygulamalarını kullanabilirler. Hastaların genel sağlıklarına öncelik vermeleri, kendilerine zaman ayırmaları ve keyifli ve rahatlatıcı etkinliklere katılmaları önemlidir.
Bilgi Edinin: Tedavi planınızdaki adımlar hakkında bilgi edinmek, daha fazla kontrol hissi sağlar. Fertilite uzmanınıza sorularınızı sormaktan çekinmeyin! Bakım ekibinizle işbirliği içinde çalışıyorsunuz! Beklentilerinizle ilgili daha iyi bir fikir edinmek için güvenilir bilgi kaynakları arayın.
IVF Kliniğinizle Açık İletişim Kurun: IVF bakım ekibinizle açık ve dürüst iletişim sürdürmek esastır. Duygusal deneyimlerinizi, endişelerinizi ve ihtiyaçlarınızı ekibe iletin, böylece fiziksel ve mental sağlık ihtiyaçlarınızı dikkate alan kapsamlı bir bakım planı oluşturmak için sizinle birlikte çalışabilirler.

Sonuç
IVF’nin psikolojik yönlerinin, tıbbi yönleri kadar önemli olduğunu hatırlayın. Mental sağlıklarına öncelik veren hastalar, duygusal dalgalanmayı daha iyi yönetebilir ve ihtiyaç duydukları desteği alarak aile kurma hedeflerine ulaşma şanslarını artırabilirler.

IVF kliniğimiz, hastalarımıza başarılı bir IVF prosedürü sağlamak için gerekli araçları, desteği ve ilgiyi sunmaya kendini adamıştır. Birlikte, duygusal zorlukların üstesinden gelmenizde size destek olabilir ve ebeveynlik hedeflerinize bir adım daha yaklaşmanızı sağlayabiliriz.`,
    },
    en: {
      title: "Protecting Mental Health During Fertility Treatments",
      banner: "/4..jpg",
      body: "This article is available in Turkish. Please switch language to TR.",
    },
    ar: {
      title: "نصائح حماية الصحة النفسية أثناء علاجات الخصوبة",
      banner: "/4..jpg",
      body: "هذه المقالة متاحة باللغة التركية. يرجى التبديل إلى اللغة التركية.",
    },
  } as const;

  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen" dir={dir}>
      <Navigation language={language} setLanguage={setLanguage} />

      <div className="pt-20">
        <section className="relative py-32 md:py-48 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${t.banner})` }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-0 text-white">{t.title}</h1>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <article className="prose prose-neutral prose-lg max-w-4xl mx-auto dark:prose-invert space-y-6">
              {t.body.split("\n\n").map((para, i) => (
                <p key={i} className="leading-relaxed">{para}</p>
              ))}
            </article>
          </div>
        </section>
      </div>

      <Footer language={language} />
      <WhatsAppButton />
    </div>
  );
};

export default MentalHealthIVF;


