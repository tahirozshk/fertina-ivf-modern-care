import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/hooks/use-language";

const AIGeneticsIVF = () => {
  const { language, setLanguage } = useLanguage();
  const dir = language === "ar" ? "rtl" : "ltr";

  const content = {
    tr: {
      title: "IVF'nin Geleceği: AI ve Genetik Taramanın Üreme Tedavilerini Değiştirmesi",
      banner: "/5..jpg",
      body: `Üreme tedavileri, tıbbi bilimin hızla değişen alanında köklü ilerlemeler kaydetmiştir ve bu durum, kısırlık yaşayan çiftler için büyük bir umut taşımaktadır. Yapay zeka (AI) ve genetik tarama, bu alandaki en heyecan verici gelişmelerden ikisidir; bu teknolojiler, in vitro fertilizasyonu (IVF) daha hassas ve kişiselleştirilmiş bir prosedür haline getirmektedir. Bu blog yazısı, bu teknolojilerin üreme sağlığını nasıl dönüştürdüğünü, başarılı kavramayı artırarak ve üreme tedavilerini değiştirerek ayrıntılı bir şekilde incelemektedir.

IVF'yi Anlamak
Genetik tarama ve yapay zekanın entegrasyonuna girmeden önce standart IVF prosedürünü anlamak önemlidir. IVF bir dizi aşamadan oluşur:

Hormon Stimülatörleri: Yumurtalıkların daha fazla yumurta üretmesini sağlamak için kullanılır.
Yumurta Toplama: Yumurta olgunlaştıktan sonra, küçük bir cerrahi işlemle yumurtalıklardan çıkarılır.
Döllenme: Laboratuvar ortamında, sperm alınan yumurtalara intracytoplasmic sperm injection (ICSI) veya geleneksel inseminasyon yöntemleriyle enjekte edilir.
Embriyo Kültürü: Gelişen embriyolar, veya döllenmiş yumurtalar, birkaç gün boyunca gözlemlenir.
Embriyo Transferi: İmplantasyon umuduyla, bir veya daha fazla sağlıklı embriyo seçilip rahme yerleştirilir.

IVF'de AI'nin Rolü
Gelişmiş Tahmin Modelleri: AI, tahmin analitiği sunarak IVF doktorlarının prosedüre yaklaşımını değiştirmektedir. Sistemler; yaş, önceki döngüler, hormon seviyeleri, embriyo morfolojisi gibi değişkenlerden en uygun yolu öngörebilir.

AI ile IVF Tedavilerinin Faydaları
• Daha Uygun Embriyo Seçimi
• Tahmin Analitiği ile süreç optimizasyonu
• Kişiselleştirilmiş tedavi planları
• Geliştirilmiş veri yönetimi ve izleme
• Objektif değerlendirme ve daha az yanlılık
• Araştırma ve geliştirmeye katkı

Görüntü Analizi ve Embriyo Seçimi
Derin öğrenme tabanlı görüntü analizi; morfoloji, fragmentasyon ve bölünme dinamiklerini değerlendirerek en iyi embriyoları daha nesnel seçmeyi sağlar.

Kişiselleştirilmiş Tedavi Planları
AI, hormonal/metabolik/genetik verileri birleştirerek ilaç seçimi, doz ve zamanlamayı hastaya özgü optimize edebilir.

Genetik Taramadaki Gelişmeler
Preimplantasyon genetik testi (PGT) ile embriyolar, belirli genetik hastalıklar ve kromozomal anormallikler için transfer öncesi taranır; bu da bilinçli karar ve daha yüksek başarı sağlar.

Sonuç
AI ve genetik taramanın IVF'ye entegrasyonu; daha başarılı, kişiselleştirilmiş ve sade bir deneyim sunuyor. Teknolojiler geliştikçe daha çok aile için umut artacaktır.`,
    },
    en: {
      title: "The Future of IVF: AI and Genetic Screening Transforming Care",
      banner: "/5..jpg",
      body: "This article is available in Turkish. Please switch language to TR.",
    },
    ar: {
      title: "مستقبل التلقيح الصناعي: الذكاء الاصطناعي والفحص الجيني يحولان الرعاية",
      banner: "/5..jpg",
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

export default AIGeneticsIVF;


