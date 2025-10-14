import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/hooks/use-language";

const Privacy = () => {
  const { language, setLanguage } = useLanguage();

  const content = {
    tr: {
      title: "Gizlilik Politikası",
      effectiveDate: "Yürürlük tarihi: 12.03.2024",
      lastUpdated: "Güncellenme tarihi: 12.03.2024",
      
      intro: `Bu Gizlilik Politikası, Fertina IVF tarafından https://fertinaivf.com/ adresinden erişilen hizmet ("Hizmet") kapsamında toplanan ve kullanılan bilgilerle ilgili politikaları açıklar. Ayrıca gizlilik haklarınızı ve bu hakların gizlilik yasaları çerçevesinde nasıl korunduğunu da belirtir.

Hizmetimizi kullanarak, bilgilerin bu Gizlilik Politikası'na uygun olarak toplanmasını ve kullanılmasını kabul etmiş olursunuz. Eğer bilgilerin bu politikaya uygun şekilde toplanmasını ve kullanılmasını kabul etmiyorsanız, lütfen Hizmetimize erişmeyin veya kullanmayın.

Bu Gizlilik Politikası, CookieScript Gizlilik Politikası Oluşturucu yardımıyla hazırlanmıştır.

Fertina IVF, bu Gizlilik Politikası'nı dilediği zaman değiştirme hakkını saklı tutar. Bu değişikliklerin önceden bildirim yapılmadan gerçekleşebileceğini lütfen unutmayın.

Güncellenmiş Gizlilik Politikası, https://fertinaivf.com/ adresinde yayınlanacaktır.`,

      personalInfo: {
        title: "Kişisel Bilgilerinizin Toplanması ve Kullanılması",
        collectedInfo: {
          title: "Topladığımız Bilgiler",
          content: "Hizmetimizi kullanırken, sizinle iletişim kurmak veya kimliğinizi belirlemek amacıyla kullanılabilecek kişisel bilgileri sağlamanız istenebilir. https://fertinaivf.com/ aşağıdaki bilgileri toplayabilir:"
        },
        howCollected: {
          title: "Bilgiler Nasıl Toplanır",
          content: "https://fertinaivf.com/ bilgilerinizi aşağıdaki şekillerde toplar veya alır:",
          points: [
            "Bir kayıt formu doldurduğunuzda ya da kişisel bilgilerinizi başka yollarla gönderdiğinizde.",
            "Bilgileriniz, hizmet sağlamak için artık gerekli olmadığında 30 gün süreyle saklanır. Yasal zorunluluklar gereği raporlama veya kayıt tutma amacıyla daha uzun süre saklanabilir.",
            "Kişisel olarak tanımlanamayan bilgiler süresiz olarak saklanabilir."
          ]
        },
        howUsed: {
          title: "Bilgileriniz Nasıl Kullanılır",
          content: "https://fertinaivf.com/ bilgilerinizi aşağıdaki amaçlarla kullanabilir:",
          points: [
            "Hizmetimizi sağlamak, sürdürmek ve kullanımını izlemek.",
            "Sizinle iletişim kurmak. Fertina IVF, gerektiğinde veya makul durumlarda size e-posta, telefon, SMS veya diğer elektronik yollarla işlevler, ürünler, hizmetler veya güvenlik güncellemeleri hakkında bilgi verebilir."
          ]
        },
        howShared: {
          title: "Bilgileriniz Nasıl Paylaşılır",
          content: "Fertina IVF, aşağıdaki durumlarda bilgilerinizi paylaşabilir:",
          points: [
            "Açık onayınızla: Fertina IVF, yalnızca sizin açık rızanız doğrultusunda bilgilerinizi paylaşır."
          ]
        }
      },

      thirdParty: {
        title: "Üçüncü Taraflarla Paylaşım",
        content: "Bilgilerinizin paylaşıldığı herhangi bir üçüncü taraf, bilgileri hangi amaçla kullanacağını açıkça belirtmek zorundadır. Bu taraflar, bilgilerinizi yalnızca belirtilen süre boyunca saklayabilir ve amaç dışı kullanamaz, satamaz veya işleyemez.",
        purposes: [
          "Analitik hizmetleri: Bilgileriniz, çevrimiçi trafiği izlemek ve analiz etmek amacıyla analitik araçlarla paylaşılabilir.",
          "Hedefli reklam kampanyalarının iyileştirilmesi: Fertina IVF, hedefli reklam çalışmalarını geliştirmek için üçüncü taraf hizmet sağlayıcılarla iş birliği yapabilir."
        ],
        consent: "Bu tür bilgileri sağlamayı tercih ederek, Fertina IVF'a bu bilgileri bu Gizlilik Politikası'na uygun şekilde kullanma, paylaşma ve depolama izni vermiş olursunuz."
      },

      disclosure: {
        title: "Bilgilerin Açıklanması",
        content: "Bilgileriniz aşağıdaki durumlarda açıklanabilir:",
        points: [
          "Yürürlükteki yasa, yönetmelik veya mahkeme kararlarına uymak amacıyla.",
          "Hizmetimizin üçüncü kişilerin haklarını ihlal ettiğine ilişkin iddialara yanıt vermek için.",
          "Sizinle yaptığımız anlaşmaları uygulamak amacıyla (bu Gizlilik Politikası dâhil)."
        ]
      },

      cookies: {
        title: "Çerezler (Cookies)",
        content: "Çerezler, ziyaret ettiğiniz web siteleri tarafından cihazınıza yerleştirilen küçük metin dosyalarıdır. Web siteleri, kullanıcıların verimli şekilde gezinmesini sağlamak ve belirli işlevleri gerçekleştirmek için çerezleri kullanır.",
        essential: "Web sitesinin düzgün çalışması için kesinlikle gerekli çerezlere izin verilir. Diğer tüm çerezlerin tarayıcıda etkinleştirilmeden önce onaylanması gerekir.",
        necessary: "Kesinlikle gerekli çerezler: Bu çerezler, kullanıcı girişi veya hesap yönetimi gibi temel site işlevselliğini sağlar. Bu çerezler olmadan site düzgün çalışmaz.",
        consent: "Çerez kullanımına ilişkin onayınızı aşağıda değiştirebilirsiniz."
      },

      security: {
        title: "Güvenlik",
        content: "Bilgilerinizin güvenliği bizim için önemlidir. https://fertinaivf.com/ bilgilerin kötüye kullanılmasını, kaybolmasını veya değiştirilmesini önlemek için çeşitli güvenlik önlemleri uygular. Ancak, bilgilerinizi tamamen koruyacağımızı garanti edemeyiz. Bu nedenle hizmetimize erişirken kendi sorumluluğunuzda hareket etmelisiniz.",
        disclaimer: "Fertina IVF, üçüncü taraflarca işletilen web sitelerinin performansından veya bu sitelerle olan etkileşimlerinizden sorumlu değildir. Bu web sitesinden ayrıldıktan sonra, ziyaret ettiğiniz diğer sitelerin gizlilik uygulamalarını incelemenizi öneririz."
      },

      contact: {
        title: "İletişim",
        content: "Herhangi bir sorunuz varsa, bizimle aşağıdaki yollarla iletişime geçebilirsiniz:",
        info: {
          name: "Fertina IVF",
          address: "Life Hastanesi, Gazi Mustafa Kemal Blv. 23, Daire 2, Gazimağusa 99450",
          email: "info@ivfcyprus.org",
          website: "https://fertinaivf.com/",
          phone: "+90 533 842 5060"
        }
      }
    },
    en: {
      title: "Privacy Policy",
      effectiveDate: "Effective Date: March 12, 2024",
      lastUpdated: "Last Updated: March 12, 2024",
      
      intro: `This Privacy Policy describes the policies regarding the collection and use of information in connection with the service ("Service") accessed from https://fertinaivf.com/ by Fertina IVF. It also specifies your privacy rights and how these rights are protected under privacy laws.

By using our Service, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree to the collection and use of information in accordance with this policy, please do not access or use our Service.

This Privacy Policy has been prepared with the help of CookieScript Privacy Policy Generator.

Fertina IVF reserves the right to modify this Privacy Policy at any time. Please note that these changes may occur without prior notice.

The updated Privacy Policy will be published at https://fertinaivf.com/.`,

      personalInfo: {
        title: "Collection and Use of Your Personal Information",
        collectedInfo: {
          title: "Information We Collect",
          content: "When using our Service, you may be asked to provide personal information that can be used to contact or identify you. https://fertinaivf.com/ may collect the following information:"
        },
        howCollected: {
          title: "How Information is Collected",
          content: "https://fertinaivf.com/ collects or receives your information in the following ways:",
          points: [
            "When you fill out a registration form or submit your personal information through other means.",
            "Your information is stored for 30 days after it is no longer necessary to provide the service. It may be stored longer for legal requirements, reporting, or record-keeping purposes.",
            "Personally non-identifiable information may be stored indefinitely."
          ]
        },
        howUsed: {
          title: "How Your Information is Used",
          content: "https://fertinaivf.com/ may use your information for the following purposes:",
          points: [
            "To provide, maintain, and monitor the use of our Service.",
            "To communicate with you. Fertina IVF may inform you about functions, products, services, or security updates via email, phone, SMS, or other electronic means when necessary or in reasonable circumstances."
          ]
        },
        howShared: {
          title: "How Your Information is Shared",
          content: "Fertina IVF may share your information in the following situations:",
          points: [
            "With your explicit consent: Fertina IVF shares your information only with your explicit consent."
          ]
        }
      },

      thirdParty: {
        title: "Third-Party Sharing",
        content: "Any third party with whom your information is shared must clearly state the purpose for which the information will be used. These parties may only store your information for the specified period and may not use, sell, or process it for purposes other than those stated.",
        purposes: [
          "Analytics services: Your information may be shared with analytics tools to track and analyze online traffic.",
          "Improvement of targeted advertising campaigns: Fertina IVF may collaborate with third-party service providers to develop targeted advertising efforts."
        ],
        consent: "By choosing to provide such information, you grant Fertina IVF permission to use, share, and store this information in accordance with this Privacy Policy."
      },

      disclosure: {
        title: "Information Disclosure",
        content: "Your information may be disclosed in the following situations:",
        points: [
          "To comply with applicable laws, regulations, or court orders.",
          "To respond to claims that our Service violates third-party rights.",
          "To enforce agreements we have with you (including this Privacy Policy)."
        ]
      },

      cookies: {
        title: "Cookies",
        content: "Cookies are small text files placed on your device by the websites you visit. Websites use cookies to enable efficient navigation and perform certain functions.",
        essential: "Permission is granted for cookies that are absolutely necessary for the website to function properly. All other cookies must be approved before being enabled in the browser.",
        necessary: "Absolutely necessary cookies: These cookies provide basic site functionality such as user login or account management. The site cannot function properly without these cookies.",
        consent: "You can change your consent regarding cookie use below."
      },

      security: {
        title: "Security",
        content: "The security of your information is important to us. https://fertinaivf.com/ implements various security measures to prevent misuse, loss, or alteration of information. However, we cannot guarantee that your information will be completely protected. Therefore, you should act on your own responsibility when accessing our Service.",
        disclaimer: "Fertina IVF is not responsible for the performance of websites operated by third parties or your interactions with these sites. After leaving this website, we recommend that you review the privacy practices of other sites you visit."
      },

      contact: {
        title: "Contact",
        content: "If you have any questions, you can contact us through the following ways:",
        info: {
          name: "Fertina IVF",
          address: "Life Hospital, Gazi Mustafa Kemal Blvd. 23, Suite 2, Gazimağusa 99450",
          email: "info@ivfcyprus.org",
          website: "https://fertinaivf.com/",
          phone: "+90 533 842 5060"
        }
      }
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen">
      <Navigation language={language} setLanguage={setLanguage} />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                {t.title}
              </h1>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>{t.effectiveDate}</p>
                <p>{t.lastUpdated}</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-muted/50 rounded-lg">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {t.intro}
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  {t.personalInfo.title}
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">
                      {t.personalInfo.collectedInfo.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {t.personalInfo.collectedInfo.content}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">
                      {t.personalInfo.howCollected.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {t.personalInfo.howCollected.content}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      {t.personalInfo.howCollected.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">
                      {t.personalInfo.howUsed.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {t.personalInfo.howUsed.content}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      {t.personalInfo.howUsed.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">
                      {t.personalInfo.howShared.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {t.personalInfo.howShared.content}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      {t.personalInfo.howShared.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  {t.thirdParty.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t.thirdParty.content}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
                  {t.thirdParty.purposes.map((purpose, index) => (
                    <li key={index}>{purpose}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground">
                  {t.thirdParty.consent}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  {t.disclosure.title}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {t.disclosure.content}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  {t.disclosure.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  {t.cookies.title}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {t.cookies.content}
                </p>
                <p className="text-muted-foreground mb-4">
                  {t.cookies.essential}
                </p>
                <p className="text-muted-foreground mb-4">
                  {t.cookies.necessary}
                </p>
                <p className="text-muted-foreground">
                  {t.cookies.consent}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  {t.security.title}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {t.security.content}
                </p>
                <p className="text-muted-foreground">
                  {t.security.disclaimer}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  {t.contact.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t.contact.content}
                </p>
                <div className="bg-muted/50 p-6 rounded-lg">
                  <div className="space-y-3">
                    <div>
                      <strong className="text-foreground">Ad:</strong>
                      <span className="ml-2 text-muted-foreground">{t.contact.info.name}</span>
                    </div>
                    <div>
                      <strong className="text-foreground">Adres:</strong>
                      <span className="ml-2 text-muted-foreground">{t.contact.info.address}</span>
                    </div>
                    <div>
                      <strong className="text-foreground">E-posta:</strong>
                      <a href={`mailto:${t.contact.info.email}`} className="ml-2 text-primary hover:underline">
                        {t.contact.info.email}
                      </a>
                    </div>
                    <div>
                      <strong className="text-foreground">Web sitesi:</strong>
                      <a href={t.contact.info.website} target="_blank" rel="noopener noreferrer" className="ml-2 text-primary hover:underline">
                        {t.contact.info.website}
                      </a>
                    </div>
                    <div>
                      <strong className="text-foreground">Telefon:</strong>
                      <a href={`tel:${t.contact.info.phone.replace(/\s/g, '')}`} className="ml-2 text-primary hover:underline">
                        {t.contact.info.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer language={language} />
      <WhatsAppButton />
    </div>
  );
};

export default Privacy;
