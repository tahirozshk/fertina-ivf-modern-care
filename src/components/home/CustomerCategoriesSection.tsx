import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, Rainbow, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface CustomerCategoriesSectionProps {
  language: string;
}

const CustomerCategoriesSection = ({ language }: CustomerCategoriesSectionProps) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  
  const content = {
    tr: {
      title: "Her aile tipine özel tedavi seçenekleri sunuyoruz",
      subtitle: "",
      categories: [
        {
          icon: Users,
          title: "Çiftler",
          image: "/couples.jpg",
          treatments: [
            { name: "IVF", link: "/treatments/ivf-icsi" },
            { name: "Cinsiyet Seçimi ile IVF", link: "/treatments/gender-selection" },
            { name: "Yumurta Donasyonu ile IVF", link: "/treatments/egg-donation" },
            { name: "Sperm Donasyonu ile IVF", link: "/treatments/sperm-donation" },
            { name: "Embriyo Donasyonu ile IVF", link: "/treatments/embryo-donation" },
            { name: "Tandem IVF", link: "/treatments/tandem-treatment" },
            { name: "Taşıyıcı Annelik", link: "/treatments/surrogacy" }
          ]
        },
        {
          icon: User,
          title: "Bekar Anneler",
          image: "/single_mom.jpg",
          treatments: [
            { name: "Sperm Donasyonu ile IVF", link: "/treatments/sperm-donation" },
            { name: "Embriyo Donasyonu ile IVF", link: "/treatments/embryo-donation" },
            { name: "Doğurganlık Korunması (Yumurta Dondurma)", link: "/tibbi-hizmetler/yumurta-dondurma" }
          ]
        },
        {
          icon: Rainbow,
          title: "LGBT",
          image: "/LQBT_flag.jpg",
          treatments: [
            { name: "Kadın Çiftler - ROPA IVF", link: "/contact" },
            { name: "ROPA IVF + Cinsiyet Seçimi", link: "/treatments/gender-selection" },
            { name: "Erkek Çiftler - Taşıyıcı Annelik", link: "/treatments/surrogacy" },
            { name: "Yumurta Donasyonu ile IVF", link: "/treatments/egg-donation" }
          ]
        },
        {
          icon: Heart,
          title: "Bekar Erkekler",
          image: "/single_men.jpg",
          treatments: [
            { name: "Sperm Dondurma", link: "/tibbi-hizmetler/sperm-dondurma" },
            { name: "Yumurta Donasyonu ile IVF", link: "/treatments/egg-donation" }
          ]
        }
      ]
    },
    en: {
      title: "Customer Categories",
      subtitle: "We offer treatment options tailored to every family type",
      categories: [
        {
          icon: Users,
          title: "Couples",
          image: "/couples.jpg",
          treatments: [
            { name: "IVF", link: "/treatments/ivf-icsi" },
            { name: "IVF with Gender Selection", link: "/treatments/gender-selection" },
            { name: "IVF with Egg Donation", link: "/treatments/egg-donation" },
            { name: "IVF with Sperm Donation", link: "/treatments/sperm-donation" },
            { name: "IVF with Embryo Donation", link: "/treatments/embryo-donation" },
            { name: "Tandem IVF", link: "/treatments/tandem-treatment" },
            { name: "Surrogacy", link: "/treatments/surrogacy" }
          ]
        },
        {
          icon: User,
          title: "Single Mothers",
          image: "/single_mom.jpg",
          treatments: [
            { name: "IVF with Sperm Donation", link: "/treatments/sperm-donation" },
            { name: "IVF with Embryo Donation", link: "/treatments/embryo-donation" },
            { name: "Fertility Preservation (Egg Freezing)", link: "/medical-services/egg-freezing" }
          ]
        },
        {
          icon: Rainbow,
          title: "LGBT",
          image: "/LQBT_flag.jpg",
          treatments: [
            { name: "Female Couples - ROPA IVF", link: "/contact" },
            { name: "ROPA IVF + Gender Selection", link: "/contact" },
            { name: "Male Couples - Surrogacy", link: "/treatments/surrogacy" },
            { name: "IVF with Egg Donation", link: "/treatments/egg-donation" }
          ]
        },
        {
          icon: Heart,
          title: "Single Men",
          image: "/single_men.jpg",
          treatments: [
            { name: "Sperm Freezing", link: "/medical-services/sperm-freezing" },
            { name: "IVF with Egg Donation", link: "/treatments/egg-donation" }
          ]
        }
      ]
    },
    ar: {
      title: "فئات العملاء",
      subtitle: "نقدم خيارات علاجية مصممة لكل نوع من أنواع الأسر",
      categories: [
        {
          icon: Users,
          title: "الأزواج",
          image: "/couples.jpg",
          treatments: [
            { name: "التلقيح الصناعي", link: "/treatments/ivf-icsi" },
            { name: "التلقيح الصناعي مع اختيار الجنس", link: "/treatments/gender-selection" },
            { name: "التلقيح الصناعي مع التبرع بالبويضات", link: "/treatments/egg-donation" },
            { name: "التلقيح الصناعي مع التبرع بالحيوانات المنوية", link: "/treatments/sperm-donation" },
            { name: "التلقيح الصناعي مع التبرع بالأجنة", link: "/treatments/embryo-donation" },
            { name: "التلقيح الصناعي المزدوج", link: "/treatments/tandem-treatment" },
            { name: "الأمومة البديلة", link: "/treatments/surrogacy" }
          ]
        },
        {
          icon: User,
          title: "الأمهات العازبات",
          image: "/single_mom.jpg",
          treatments: [
            { name: "التلقيح الصناعي مع التبرع بالحيوانات المنوية", link: "/treatments/sperm-donation" },
            { name: "التلقيح الصناعي مع التبرع بالأجنة", link: "/treatments/embryo-donation" },
            { name: "الحفاظ على الخصوبة (تجميد البويضات)", link: "/medical-services/egg-freezing" }
          ]
        },
        {
          icon: Rainbow,
          title: "LGBT",
          image: "/LQBT_flag.jpg",
          treatments: [
            { name: "الأزواج الإناث - ROPA IVF", link: "/contact" },
            { name: "ROPA IVF + اختيار الجنس", link: "/contact" },
            { name: "الأزواج الذكور - الأمومة البديلة", link: "/treatments/surrogacy" },
            { name: "التلقيح الصناعي مع التبرع بالبويضات", link: "/treatments/egg-donation" }
          ]
        },
        {
          icon: Heart,
          title: "الرجال العزاب",
          image: "/single_men.jpg",
          treatments: [
            { name: "تجميد الحيوانات المنوية", link: "/medical-services/sperm-freezing" },
            { name: "التلقيح الصناعي مع التبرع بالبويضات", link: "/treatments/egg-donation" }
          ]
        }
      ]
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section className="py-12 sm:py-24 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={titleRef} className={`text-center mb-8 sm:mb-16 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Categories Grid - Clean Design with Orange Dividers */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.categories.map((category, index) => (
            <div
              key={index}
              className={`smooth-transition relative transition-all duration-1000 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: gridVisible ? `${index * 100}ms` : '0ms' }}
            >

              {/* Image */}
              <div className="mb-4 elevate rounded-2xl overflow-hidden relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-4 smooth-transition group-hover:text-primary">
                {category.title}
              </h3>

              {/* Treatments List */}
              <div className="space-y-2">
                {category.treatments.map((treatment, treatmentIndex) => (
                  <Link
                    key={treatmentIndex}
                    to={treatment.link}
                    className="block text-sm text-muted-foreground hover:text-primary smooth-transition"
                  >
                    {treatment.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-16 text-center">
          <div className="inline-block px-8 py-4 rounded-full bg-primary/10 text-primary font-semibold elevate smooth-transition reveal-fade hover:scale-105">
            {language === "tr" ? "💝 Her Aileye Özel Çözümler 💝" : language === "ar" ? "💝 حلول لكل عائلة 💝" : "💝 Solutions for Every Family 💝"}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerCategoriesSection;
