import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Post = {
  title: string;
  excerpt: string;
  date: string;
  image?: string; // leave empty to let user add later
  link?: string;
};

const Blog = () => {
  const [language, setLanguage] = useState("tr");

  const content = {
    tr: {
      title: "Blog",
      subtitle: "IVF ve üreme sağlığı üzerine güncel yazılar ve uzman görüşleri",
      readMore: "Daha Fazla",
      posts: [
        { title: "IVF ve PCOS: Tedavideki Gelişmeler", excerpt: "Polikistik over sendromunda güncel yaklaşım ve başarıyı artıran yöntemler...", date: "2025-01-15", image: "/1..jpg" },
        { title: "Beslenme ve Yaşam Tarzının IVF Başarısına Etkisi", excerpt: "Uzmanların önerdiği beslenme ve yaşam tarzı ipuçları...", date: "2025-01-10", image: "/2..jpg" },
        { title: "Kişiye Özel Tıp ve IVF", excerpt: "Bireyselleştirilmiş tedavi protokolleriyle sonuçlar nasıl iyileşiyor?", date: "2025-01-05", image: "/3..jpg" },
        { title: "Tedavi Sürecinde Ruh Sağlığı", excerpt: "Zorlayıcı dönemlerde psikolojik dayanıklılığı artırma yolları...", date: "2024-12-28", image: "/4..jpg" },
        { title: "IVF’in Geleceği: Yapay Zeka ve Genetik", excerpt: "Yeni teknolojiler IVF’i nasıl dönüştürüyor?", date: "2024-12-20", image: "/5..jpg" },
        { title: "Yaşın Sperm Kalitesi Üzerine Etkisi", excerpt: "Sperm yaşlanması ve korunma protokolleri...", date: "2024-12-10", image: "/6..jpg" },
      ] as Post[],
    },
    en: {
      title: "Blog",
      subtitle: "Insights on IVF and reproductive medicine",
      readMore: "Read More",
      posts: [
        { title: "IVF and PCOS: Advances in Treatment", excerpt: "Updated approaches improving outcomes in PCOS...", date: "2025-01-15", image: "/1..jpg" },
        { title: "Nutrition & Lifestyle in IVF", excerpt: "Expert tips to support your journey...", date: "2025-01-10", image: "/2..jpg" },
        { title: "Personalized Medicine in IVF", excerpt: "How tailored protocols improve results...", date: "2025-01-05", image: "/3..jpg" },
        { title: "Mental Health During Treatment", excerpt: "Resilience and wellbeing throughout the process...", date: "2024-12-28", image: "/4..jpg" },
        { title: "The Future of IVF: AI & Genetics", excerpt: "Technologies revolutionizing IVF...", date: "2024-12-20", image: "/5..jpg" },
        { title: "Effect of Aging on Sperm", excerpt: "Anti‑aging strategies for sperm cells...", date: "2024-12-10", image: "/6..jpg" },
      ] as Post[],
    },
  } as const;

  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen">
      <Navigation language={language} setLanguage={setLanguage} />

      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">{t.title}</h1>
            <p className="text-lg text-muted-foreground">{t.subtitle}</p>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-8">
              {t.posts.map((post, i) => (
                <Card key={i} className="p-4 md:p-6">
                  <div className="flex gap-4">
                    <div className="w-36 h-24 md:w-56 md:h-36 rounded-lg overflow-hidden bg-accent/40 flex-shrink-0">
                      {post.image ? (
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">Image</div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-1">{new Date(post.date).toLocaleDateString(language === "tr" ? "tr-TR" : "en-US")}</div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-3">{post.excerpt}</p>
                      <Button variant="outline" size="sm">{t.readMore}</Button>
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

export default Blog;
