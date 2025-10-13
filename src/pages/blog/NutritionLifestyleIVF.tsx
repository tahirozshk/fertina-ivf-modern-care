import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const NutritionLifestyleIVF = () => {
  const [language, setLanguage] = useState("tr");

  const content = {
    tr: {
      title: "Beslenme ve Yaşam Tarzının Tüp Bebek Başarısını Artırmadaki Rolü: Uzmanların Önerileri",
      body: `Tüp bebek (IVF), hamile kalma zorluğu yaşayan bekar bireyler ve çiftler için giderek daha popüler bir alternatif haline geliyor. Artan araştırmalar, tıbbi prosedürler ve teknolojik ilerlemeler hala bu tedavilerin başarısında önemli faktörler olmasına rağmen, bir kişinin genel diyetinin ve yaşam tarzının tüp bebek (IVF) sonuçları üzerinde önemli bir etkisi olabileceğini göstermektedir.

Bu blog yazısında, tüp bebek işleminin başarı olasılığını artırmak için diyetinizi ve yaşam tarzınızı nasıl iyileştirebileceğinize dair uzmanlarımızın ana noktalarını ve önerilerini ele alacağız.

Doğurganlığı Destekleyen Bir Diyetin Önemi
Sağlıklı, besin açısından zengin bir diyet, üreme sağlığı için önemlidir ve tüp bebek başarısını büyük ölçüde etkiler. Uzmanlarımız, aşağıdaki diyet önerilerine odaklanmanızı önermektedir:

Doğal ve İşlenmemiş Gıdalar: Taze sebze ve meyveler, tam tahıllar, yağsız etler ve sağlıklı yağlar gibi besleyici, az işlenmiş gıdalara öncelik verin. Bu besin açısından zengin seçenekler, sağlıklı yumurta ve sperm kalitesi, embriyo gelişimi ve implantasyon için gerekli yapı taşlarını içerir.
Antioksidan Bakımından Zengin Gıdalar: C ve E vitaminleri, selenyum ve CoQ10 gibi antioksidanlar, doğurganlığa zarar verebilecek oksidatif stresi azaltmaya yardımcı olur. Böğürtlen, yapraklı yeşillikler, kuruyemişler ve yağlı balıklar iyi kaynaklardır.
Omega-3 Yağ Asitleri: Bu sağlıklı yağların sperm, yumurta ve embriyo kalitesini artırdığı kanıtlanmıştır. Ceviz, chia tohumu ve somon gibi sağlıklı yiyecekleri tercih edin.
Folik Asit: B9 vitamini olarak bilinen folik asit, sinir tüpü gelişimi için gereklidir ve embriyo implantasyonunda kritik bir rol oynar. Uzmanlar, tüp bebek tedavisi gören kadınların günde 400-800 mcg folik asit takviyesi almalarını önerir.
Sağlıklı Bir Kilo Koruyun: Aşırı zayıf veya kilolu kişilerde tüp bebek başarısızlığı daha olasıdır. Vücut Kitle İndeksi’nin (BMI) sağlıklı aralıkta tutulması, yumurtalık fonksiyonunu optimize eder ve başarılı embriyo implantasyonu olasılığını artırır.

Yaşam Tarzı Faktörlerinin Etkisi
Doktorlar, tüp bebek tedavilerinin başarılı olma olasılığını artırmak için, doğurganlığı destekleyen bir diyetin yanı sıra sağlıklı bir yaşam tarzı sürdürmenin de önemini vurgulamaktadır. İşte bazı temel öneriler:

Stresi Yönetin: Aşırı stres, sağlıklı üreme için gerekli karmaşık hormonal dengeyi bozabilir. Yoga, meditasyon, derin nefes alma gibi stres azaltıcı aktivitelere katılın veya bir ruh sağlığı uzmanından destek alın.
Sigara İçmeyi Bırakın ve Alkolü Sınırlayın: Sigara içmek ve aşırı alkol tüketimi, sperm ve yumurta kalitesi ile embriyo gelişimini olumsuz etkileyebilir. Tüp bebek sürecinde alkol tüketimini azaltmak ve sigarayı bırakmak önerilir.
Orta Düzeyde Egzersiz Yapın: Düzenli, orta yoğunlukta egzersiz genel sağlık ve doğurganlığı iyileştirebilir, ancak aşırı fiziksel aktivite zararlı olabilir. Haftanın çoğu günü 30 ila 60 dakika egzersiz yapmayı hedefleyin.
Yeterince Uyuyun: İyi bir gece uykusu, hormon dengesi ve genel sağlık için çok önemlidir. Gecede yedi ila dokuz saat uyumaya çalışın.
Çevresel Toksinlerden Kaçının: Çevresel kimyasallara, toksinlere ve kirliliğe maruz kalmak doğurganlığı etkileyebilir. Su filtreleme, plastiklerden kaçınma ve doğal temizlik ürünleri kullanma gibi adımlarla maruziyetinizi azaltın.

Sonuç
Her bireyin doğurganlık yolculuğunun farklı olduğunu ve belirli diyet ve yaşam tarzı önerilerinin kişisel koşullara göre değişebileceğini unutmamak önemlidir. Kişisel ihtiyaçlarınıza ve hedeflerinize uygun, size özel bir plan oluşturmak için üreme sağlığı konusunda uzmanlaşmış kayıtlı bir diyetisyen veya bir doğurganlık uzmanı ile konuşmak en iyi yoldur.

Bu bilimsel olarak desteklenen diyet ve yaşam tarzı uygulamalarını benimseyerek, tüp bebek sonucunu artırma şansınıza aktif olarak katkıda bulunabilirsiniz.`,
      banner: "/2..jpg",
    },
    en: {
      title: "Nutrition & Lifestyle to Improve IVF Success: Expert Tips",
      body: "This article is available in Turkish. Please switch language to TR.",
      banner: "/2..jpg",
    },
  } as const;

  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen">
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

export default NutritionLifestyleIVF;


