import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight, Eye, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

type Post = {
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  link?: string;
  category: string;
  readTime: string;
  views: number;
  likes: number;
};

const Blog = () => {
  const [language, setLanguage] = useState("tr");
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  const content = {
    tr: {
      title: "Blog",
      subtitle: "IVF ve üreme sağlığı üzerine güncel yazılar ve uzman görüşleri",
      readMore: "Devamını Oku",
      posts: [
        { title: "IVF ve PCOS: Tedavideki Gelişmeler", excerpt: "Polikistik over sendromunda güncel yaklaşım ve başarıyı artıran yöntemler...", date: "2025-01-15", image: "/1..jpg", category: "Tedavi", readTime: "5 dk", views: 1250, likes: 89, link: "/blog/ivf-ve-pcos" },
        { title: "Beslenme ve Yaşam Tarzının IVF Başarısına Etkisi", excerpt: "Uzmanların önerdiği beslenme ve yaşam tarzı ipuçları...", date: "2025-01-10", image: "/2..jpg", category: "Beslenme", readTime: "7 dk", views: 2100, likes: 156, link: "/blog/beslenme-yasam-tarzi-ivf" },
        { title: "Kişiye Özel Tıp ve IVF", excerpt: "Bireyselleştirilmiş tedavi protokolleriyle sonuçlar nasıl iyileşiyor?", date: "2025-01-05", image: "/3..jpg", category: "Teknoloji", readTime: "6 dk", views: 980, likes: 67, link: "/blog/kisiye-ozel-tip-ivf" },
        { title: "Tedavi Sürecinde Ruh Sağlığı", excerpt: "Zorlayıcı dönemlerde psikolojik dayanıklılığı artırma yolları...", date: "2024-12-28", image: "/4..jpg", category: "Ruh Sağlığı", readTime: "8 dk", views: 1750, likes: 134, link: "/blog/mental-saglik-ivf" },
        { title: "IVF’in Geleceği: Yapay Zeka ve Genetik", excerpt: "Yeni teknolojiler IVF’i nasıl dönüştürüyor?", date: "2024-12-20", image: "/5..jpg", category: "Teknoloji", readTime: "9 dk", views: 3200, likes: 245, link: "/blog/ai-ve-genetik-ivf" },
        { title: "Yaşın Sperm Kalitesi Üzerine Etkisi", excerpt: "Sperm yaşlanması ve korunma protokolleri...", date: "2024-12-10", image: "/6..jpg", category: "Tedavi", readTime: "4 dk", views: 890, likes: 78, link: "/blog/sperm-yaslanma-genclestirme" },
      ] as Post[],
    },
    en: {
      title: "Blog",
      subtitle: "Insights on IVF and reproductive medicine",
      readMore: "Read More",
      posts: [
        { title: "IVF and PCOS: Advances in Treatment", excerpt: "Updated approaches improving outcomes in PCOS...", date: "2025-01-15", image: "/1..jpg", category: "Treatment", readTime: "5 min", views: 1250, likes: 89, link: "/blog/ivf-ve-pcos" },
        { title: "Nutrition & Lifestyle in IVF", excerpt: "Expert tips to support your journey...", date: "2025-01-10", image: "/2..jpg", category: "Nutrition", readTime: "7 min", views: 2100, likes: 156, link: "/blog/beslenme-yasam-tarzi-ivf" },
        { title: "Personalized Medicine in IVF", excerpt: "How tailored protocols improve results...", date: "2025-01-05", image: "/3..jpg", category: "Technology", readTime: "6 min", views: 980, likes: 67 },
        { title: "Mental Health During Treatment", excerpt: "Resilience and wellbeing throughout the process...", date: "2024-12-28", image: "/4..jpg", category: "Mental Health", readTime: "8 min", views: 1750, likes: 134, link: "/blog/mental-saglik-ivf" },
        { title: "The Future of IVF: AI & Genetics", excerpt: "Technologies revolutionizing IVF...", date: "2024-12-20", image: "/5..jpg", category: "Technology", readTime: "9 min", views: 3200, likes: 245, link: "/blog/ai-ve-genetik-ivf" },
        { title: "Effect of Aging on Sperm", excerpt: "Anti‑aging strategies for sperm cells...", date: "2024-12-10", image: "/6..jpg", category: "Treatment", readTime: "4 min", views: 890, likes: 78, link: "/blog/sperm-yaslanma-genclestirme" },
      ] as Post[],
    },
  } as const;

  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen">
      <Navigation language={language} setLanguage={setLanguage} />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 md:py-48 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/blog_banner.jpg)' }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div ref={heroRef} className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">{t.title}</h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">{t.subtitle}</p>
            </div>
          </div>
        </section>


        {/* Blog Posts Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.posts.map((post, index) => (
                <Card key={index} className={`group overflow-hidden hover:shadow-2xl smooth-transition border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm transition-all duration-1000 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      style={{ transitionDelay: gridVisible ? `${index * 100}ms` : '0ms' }}>
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 smooth-transition" 
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString(language === "tr" ? "tr-TR" : "en-US")}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary smooth-transition line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {post.views.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {post.likes}
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    {post.link ? (
                      <Link to={post.link}>
                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary smooth-transition">
                          {t.readMore}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 smooth-transition" />
                        </Button>
                      </Link>
                    ) : (
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary smooth-transition">
                        {t.readMore}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 smooth-transition" />
                      </Button>
                    )}
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
