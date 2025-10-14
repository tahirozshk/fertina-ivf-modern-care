import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, DollarSign, Stethoscope, Globe, Users, Rainbow, UserCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/hooks/use-language";

const About = () => {
  const { language, setLanguage } = useLanguage();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { ref: featuresTitleRef, isVisible: featuresTitleVisible } = useScrollAnimation();
  const { ref: featuresGridRef, isVisible: featuresGridVisible } = useScrollAnimation();
  const { ref: ctasRef, isVisible: ctasVisible } = useScrollAnimation();
  
  // Determine text direction based on language
  const dir = language === "ar" ? "rtl" : "ltr";

  const content = {
    tr: {
      title: "Hakkımızda",
      hero: "Bebek sahibi olma hayalinizi birlikte gerçekleştirelim",
      subtitle: "Tüp Bebek Tedavisi Kıbrıs",
      paragraphs: [
        "Fertina, tüp bebek ve genetik alanında 16 yıllık deneyime sahip, başarısını ispat etmiş tecrübeli bir ekibin bir araya gelmesiyle kurulmuştur.",
        "Amacı sağlıklı gebelik elde etmek olan Fertina ekibi; hasta memnuniyeti odaklı çalışma anlayışıyla 24 saat erişilebilir hizmet sunar.",
        "Doktorumuz Op. Dr. Erman SEVER ve ekibi, doğum sonrası o büyük mutluluğa ortak olabilmek için çalışmaktadır.",
        "Kuruluşumuzdan bu yana bilimsel verileri yakından takip eden tıbbi ekibimiz ve güncel teknolojik alt yapımızla başarı odaklı tedavi hizmeti sunuyoruz.",
        "Kuzey Kıbrıs, IVF için Avrupa'dan en çok tercih edilen ülkelerden biridir. Bu itibarın sorumluluğunu ciddiyetle taşıyor, etik ve şeffaf yaklaşımı benimsiyoruz.",
        "Parolamız her zaman hasta memnuniyeti. Yüksek başarı oranımız ve tam donanımlı multidisipliner merkezimizle sizleri Gazi Mağusa'ya bekliyoruz. Gelin bu heyecanlı ve mutlu süreci birlikte yaşayalım.",
      ],
      features: [
        {
          icon: Heart,
          title: "Misyonumuz",
          desc: "Fertina'da misyonumuz, şefkat, hassasiyet ve dürüstlükle dünya standartlarında doğurganlık bakımı sağlamaktır. Her hastanın benzersiz ihtiyaçlarına göre uyarlanmış kişiselleştirilmiş bakımı en son tıbbi teknolojilerle birleştirerek, bireyleri ve çiftleri ebeveynlik yolculuklarında desteklemeye kararlıyız."
        },
        {
          icon: DollarSign,
          title: "Uygun Tedavi Maliyetleri",
          desc: "Kuzey Kıbrıs'ta tedavi maliyetleri Almanya, ABD ve İsrail gibi birçok ülkeye göre %20-50 daha düşüktür. Uygun fiyatlı tıbbi hizmetlerin yanı sıra, hastalar bütçe dostu otellerden lüks tesislere ve konforlu apartmanlara kadar geniş bir konaklama seçeneği arasından seçim yapabilir."
        },
        {
          icon: Stethoscope,
          title: "Son Teknoloji Ekipmanlar",
          desc: "Kuzey Kıbrıs'taki tanı ve tedaviler en son teknoloji ile gerçekleştirilir. Hem özel hem de kamu klinikleri, son nesil tıbbi ekipmanlara sürekli yatırım yaparak tesisleri Almanya veya Amerika Birleşik Devletleri'ndekilerle karşılaştırılabilir hale getirir."
        },
        {
          icon: Globe,
          title: "Basitleştirilmiş Vize Erişimi",
          desc: "Kuzey Kıbrıs, hastaların tedavi için hızlı ve kolay bir şekilde seyahat etmelerini sağlayan uygun bir varışta vize sistemi sunar. Bir diğer avantaj ise, birkaç yabancı dilde destek ve bakım sağlayabilen çok dilli tıbbi personeldir."
        },
        {
          icon: Users,
          title: "Yüksek Nitelikli Doktorlar",
          desc: "Kuzey Kıbrıs, son derece yetenekli tıp uzmanlarına ev sahipliği yapmaktadır. Doktorlarımız, en son teknolojileri ve tedavi yöntemlerini öğrenerek uzmanlıklarını sürekli olarak geliştiriyor ve hastalara en yüksek standartlarda bakım sağlıyor."
        },
        {
          icon: Rainbow,
          title: "LGBT Çiftler için Kapsayıcı Programlar",
          desc: "Birçok ülke eşcinsel çiftlerin taşıyıcı annelik hizmetlerine erişimini yasaklarken, Kuzey Kıbrıs'taki seçkin klinikler LGBT çiftlere ebeveynlik hayallerini gerçekleştirme fırsatı veren kapsayıcı programlar sağlar."
        },
        {
          icon: UserCheck,
          title: "Kişiselleştirilmiş Hasta Bakımı",
          desc: "İleri tedavilerin ötesinde, her hastanın bireysel ihtiyaçlarına odaklanıyoruz. İlk danışmanlığınızdan tedavi sonrası takibinize kadar, özel ekibimiz rahat ve stressiz bir yolculuk sağlamak için sürekli rehberlik, duygusal destek ve kişiselleştirilmiş bakım sağlar."
        }
      ],
      ctas: {
        team: { title: "Ekibimiz", desc: "Uzman kadromuzu tanıyın", link: "/team", image: "/team.jpg" },
        center: { title: "Merkezimiz", desc: "Altyapımızı ve ünitelerimizi keşfedin", link: "/center", image: "/center.jpg" },
      },
      contact: "İletişim",
    },
    en: {
      title: "About Us",
      hero: "Let's realize your dream of having a baby together",
      subtitle: "IVF Treatment Cyprus",
      paragraphs: [
        "Fertina was founded by an experienced team with 16 years in IVF and genetics.",
        "Our mission is healthy pregnancies. We provide 24/7 accessible, patient‑centric care.",
        "Our physician Op. Dr. Erman SEVER and team work to share the joy after birth.",
        "Since day one, we deliver success‑oriented treatments with evidence‑based medicine and modern technology.",
        "Northern Cyprus is a leading destination for IVF in Europe; we embrace this responsibility with ethical and transparent care.",
        "Patient satisfaction is our motto. We welcome you to Gazimağusa to experience this exciting journey together.",
      ],
      features: [
        {
          icon: Heart,
          title: "Our Mission",
          desc: "At Fertina, our mission is to provide world-class fertility care with compassion, precision, and integrity. We are dedicated to supporting individuals and couples on their journey to parenthood, combining the latest medical technologies with personalized care tailored to each patient's unique needs."
        },
        {
          icon: DollarSign,
          title: "Affordable Treatment Costs",
          desc: "The cost of treatment in Northern Cyprus is 20–50% lower than in many other countries, including Germany, the USA, and Israel. Along with affordable medical services, patients can choose from a wide range of accommodation options, from budget-friendly hotels to luxury resorts and comfortable apartments."
        },
        {
          icon: Stethoscope,
          title: "State-of-the-Art Equipment",
          desc: "Diagnostics and treatments in Northern Cyprus are performed with cutting-edge technology. Both private and public clinics consistently invest in the latest generation of medical equipment, making the facilities comparable to those in Germany or the United States."
        },
        {
          icon: Globe,
          title: "Simplified Visa Access",
          desc: "Northern Cyprus offers a convenient visa-on-arrival system, allowing patients to travel quickly and easily for treatment. Another advantage is the multilingual medical staff, who can provide support and care in several foreign languages."
        },
        {
          icon: Users,
          title: "Highly Qualified Doctors",
          desc: "Northern Cyprus is home to highly skilled medical professionals. Our doctors continually advance their expertise by mastering the latest technologies and treatment methods, ensuring patients receive the highest standard of care."
        },
        {
          icon: Rainbow,
          title: "Inclusive Programs for LGBT Couples",
          desc: "While many countries prohibit same-sex couples from accessing surrogacy services, select clinics in Northern Cyprus provide inclusive programs that give LGBT couples the opportunity to fulfill their dream of parenthood."
        },
        {
          icon: UserCheck,
          title: "Personalized Patient Care",
          desc: "Beyond advanced treatments, we focus on the individual needs of each patient. From your first consultation to your post-treatment follow-up, our dedicated team provides continuous guidance, emotional support, and personalized care to ensure a comfortable and stress-free journey."
        }
      ],
      ctas: {
        team: { title: "Our Team", desc: "Meet our experts", link: "/team", image: "/team.jpg" },
        center: { title: "Our Center", desc: "Explore our facilities", link: "/center", image: "/center.jpg" },
      },
      contact: "Contact",
    },
    ar: {
      title: "معلومات عنا",
      hero: "دعونا نحقق حلمك بإنجاب طفل معًا",
      subtitle: "علاج التلقيح الصناعي قبرص",
      paragraphs: [
        "تأسست فيرتينا من قبل فريق ذو خبرة 16 عامًا في التلقيح الصناعي والجينات.",
        "مهمتنا هي الحمل الصحي. نقدم رعاية يمكن الوصول إليها على مدار الساعة طوال أيام الأسبوع تتمحور حول المريض.",
        "طبيبنا د. إرمان سيفر وفريقه يعملون لمشاركة الفرحة بعد الولادة.",
        "منذ اليوم الأول، نقدم علاجات موجهة نحو النجاح مع الطب القائم على الأدلة والتكنولوجيا الحديثة.",
        "شمال قبرص هي وجهة رائدة للتلقيح الصناعي في أوروبا؛ نحن نتبنى هذه المسؤولية برعاية أخلاقية وشفافة.",
        "رضا المريض هو شعارنا. نرحب بكم في غازيماغوسا لتجربة هذه الرحلة المثيرة معًا.",
      ],
      features: [
        {
          icon: Heart,
          title: "مهمتنا",
          desc: "في فيرتينا، مهمتنا هي توفير رعاية خصوبة عالمية المستوى بالتعاطف والدقة والنزاهة. نحن ملتزمون بدعم الأفراد والأزواج في رحلتهم نحو الأبوة، من خلال الجمع بين أحدث التقنيات الطبية والرعاية الشخصية المصممة لتلبية احتياجات كل مريض الفريدة."
        },
        {
          icon: DollarSign,
          title: "تكاليف علاج معقولة",
          desc: "تكلفة العلاج في شمال قبرص أقل بنسبة 20-50٪ من العديد من البلدان الأخرى، بما في ذلك ألمانيا والولايات المتحدة وإسرائيل. إلى جانب الخدمات الطبية بأسعار معقولة، يمكن للمرضى الاختيار من بين مجموعة واسعة من خيارات الإقامة، من الفنادق الاقتصادية إلى المنتجعات الفاخرة والشقق المريحة."
        },
        {
          icon: Stethoscope,
          title: "معدات حديثة",
          desc: "يتم إجراء التشخيص والعلاج في شمال قبرص بأحدث التقنيات. تستثمر كل من العيادات الخاصة والعامة باستمرار في أحدث جيل من المعدات الطبية، مما يجعل المرافق قابلة للمقارنة بتلك الموجودة في ألمانيا أو الولايات المتحدة."
        },
        {
          icon: Globe,
          title: "وصول مبسط للتأشيرة",
          desc: "تقدم شمال قبرص نظام تأشيرة عند الوصول مريح، مما يسمح للمرضى بالسفر بسرعة وسهولة للعلاج. ميزة أخرى هي الطاقم الطبي متعدد اللغات الذي يمكنه تقديم الدعم والرعاية بعدة لغات أجنبية."
        },
        {
          icon: Users,
          title: "أطباء مؤهلون تأهيلاً عاليًا",
          desc: "شمال قبرص موطن لمتخصصين طبيين ذوي مهارات عالية. يقوم أطباؤنا بتطوير خبراتهم باستمرار من خلال إتقان أحدث التقنيات وطرق العلاج، مما يضمن حصول المرضى على أعلى معايير الرعاية."
        },
        {
          icon: Rainbow,
          title: "برامج شاملة للأزواج من مجتمع LGBT",
          desc: "بينما تحظر العديد من البلدان الأزواج من نفس الجنس من الوصول إلى خدمات الأمومة البديلة، توفر العيادات المختارة في شمال قبرص برامج شاملة تمنح أزواج LGBT الفرصة لتحقيق حلم الأبوة."
        },
        {
          icon: UserCheck,
          title: "رعاية شخصية للمرضى",
          desc: "بالإضافة إلى العلاجات المتقدمة، نركز على الاحتياجات الفردية لكل مريض. من استشارتك الأولى إلى متابعتك بعد العلاج، يوفر فريقنا المتفاني إرشادات مستمرة ودعمًا عاطفيًا ورعاية شخصية لضمان رحلة مريحة وخالية من الإجهاد."
        }
      ],
      ctas: {
        team: { title: "فريقنا", desc: "تعرف على خبرائنا", link: "/team", image: "/team.jpg" },
        center: { title: "مركزنا", desc: "استكشف مرافقنا", link: "/center", image: "/center.jpg" },
      },
      contact: "اتصل بنا",
    },
  } as const;

  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen" dir={dir}>
      <Navigation language={language} setLanguage={setLanguage} />

      <div className="pt-30">
        <section className="py-12 bg-background">
          <div ref={heroRef} className={`container mx-auto px-4 text-center mb-8 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{t.title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">{t.hero}</p>
          </div>
        </section>

        <section className="pb-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className={`p-6 rounded-2xl bg-primary/5 border border-primary/20 shadow-sm transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: statsVisible ? '0ms' : '0ms' }}>
                  <div className="text-3xl font-bold text-primary">16+</div>
                  <div className="text-sm text-muted-foreground">Yıl Deneyim</div>
                </div>
                <div className={`p-6 rounded-2xl bg-primary/5 border border-primary/20 shadow-sm transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: statsVisible ? '100ms' : '0ms' }}>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Erişilebilirlik</div>
                </div>
                <div className={`p-6 rounded-2xl bg-primary/5 border border-primary/20 shadow-sm transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: statsVisible ? '200ms' : '0ms' }}>
                  <div className="text-3xl font-bold text-primary">Yüksek</div>
                  <div className="text-sm text-muted-foreground">Başarı Oranı</div>
                </div>
                <div className={`p-6 rounded-2xl bg-primary/5 border border-primary/20 shadow-sm transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: statsVisible ? '300ms' : '0ms' }}>
                  <div className="text-3xl font-bold text-primary">ISO</div>
                  <div className="text-sm text-muted-foreground">Standart Yaklaşım</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div ref={contentRef} className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className={`md:col-span-2 p-6 transition-all duration-1000 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <div className="space-y-6">
                  {t.paragraphs.map((p, i) => (
                    <p key={i} className="text-lg text-muted-foreground leading-relaxed">{p}</p>
                  ))}
                </div>
              </Card>
              <Card className={`p-6 bg-primary/5 border-primary/20 transition-all duration-1000 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: contentVisible ? '200ms' : '0ms' }}>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{language === "tr" ? "Tedavi Yaklaşımımız" : language === "ar" ? "نهج الرعاية لدينا" : "Our Care Approach"}</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• {language === "tr" ? "Bilimsel ve şeffaf iletişim" : language === "ar" ? "تواصل قائم على الأدلة وشفاف" : "Evidence‑based and transparent"}</li>
                  <li>• {language === "tr" ? "Kişiye özel tedavi planı" : language === "ar" ? "تخطيط علاج شخصي" : "Personalized treatment planning"}</li>
                  <li>• {language === "tr" ? "Güncel teknoloji ve deneyimli ekip" : language === "ar" ? "تكنولوجيا حديثة وفريق خبير" : "Modern technology and expert team"}</li>
                  <li>• {language === "tr" ? "Etik kurallar ve gizlilik" : language === "ar" ? "الأخلاقيات والسرية" : "Ethics and confidentiality"}</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div ref={valuesRef} className="max-w-5xl mx-auto">
              <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center text-foreground transition-all duration-1000 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{language === "tr" ? "Değerlerimiz" : language === "ar" ? "قيمنا" : "Our Values"}</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className={`p-6 transition-all duration-1000 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: valuesVisible ? '0ms' : '0ms' }}><h3 className="text-xl font-semibold mb-2 text-foreground">{language === "tr" ? "Güven" : language === "ar" ? "الثقة" : "Trust"}</h3><p className="text-muted-foreground">{language === "tr" ? "Tüm süreçte şeffaf ve anlaşılır iletişim" : language === "ar" ? "تواصل شفاف وواضح طوال الوقت" : "Transparent and clear communication throughout"}</p></Card>
                <Card className={`p-6 transition-all duration-1000 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: valuesVisible ? '100ms' : '0ms' }}><h3 className="text-xl font-semibold mb-2 text-foreground">{language === "tr" ? "Mükemmellik" : language === "ar" ? "التميز" : "Excellence"}</h3><p className="text-muted-foreground">{language === "tr" ? "Kanıta dayalı tıp ve sürekli iyileştirme" : language === "ar" ? "الطب القائم على الأدلة والتحسين المستمر" : "Evidence‑based medicine and continuous improvement"}</p></Card>
                <Card className={`p-6 transition-all duration-1000 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: valuesVisible ? '200ms' : '0ms' }}><h3 className="text-xl font-semibold mb-2 text-foreground">{language === "tr" ? "Empati" : language === "ar" ? "التعاطف" : "Empathy"}</h3><p className="text-muted-foreground">{language === "tr" ? "Hastalarımızın yolculuğunu birlikte yaşıyoruz" : language === "ar" ? "نسير في الرحلة مع مرضانا" : "We walk the journey with our patients"}</p></Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 ref={featuresTitleRef} className={`text-3xl md:text-4xl font-bold mb-12 text-center text-foreground transition-all duration-1000 ${featuresTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {language === "tr" ? "Neden Kuzey Kıbrıs'ı Seçmelisiniz?" : language === "ar" ? "لماذا تختار شمال قبرص؟" : "Why Choose Northern Cyprus?"}
              </h2>
              <div ref={featuresGridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {t.features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className={`p-6 hover:shadow-lg transition-all duration-1000 ${featuresGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: featuresGridVisible ? `${index * 80}ms` : '0ms' }}>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div ref={ctasRef} className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[t.ctas.team, t.ctas.center].map((c, i) => (
                <Card key={i} className={`overflow-hidden group transition-all duration-1000 ${ctasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: ctasVisible ? `${i * 150}ms` : '0ms' }}>
                  {c.image ? (
                    <div className="relative h-64 w-full overflow-hidden">
                      <img src={c.image} alt={c.title} className="absolute inset-0 h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                      <span className="absolute bottom-3 left-3 inline-block px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold shadow">
                        {c.title}
                      </span>
                    </div>
                  ) : (
                    <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/30 group-hover:from-primary/30 group-hover:to-accent/40 smooth-transition" />
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-2">{c.title}</h3>
                    <p className="text-muted-foreground mb-4">{c.desc}</p>
                    <Link to={c.link}>
                      <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary w-full">
                        {language === "tr" ? "Detaylı İncele" : language === "ar" ? "عرض التفاصيل" : "View Details"}
                      </Button>
                    </Link>
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

export default About;
