import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

interface FooterProps {
  language: string;
}

const Footer = ({ language }: FooterProps) => {
  const translations = {
    tr: {
      about: "Hakkımızda",
      treatments: "Tedaviler",
      services: "Hizmetler",
      contact: "İletişim",
      address: "Adres",
      addressText: "Mağusa Yaşam Hastanesi, Kuzey Kıbrıs, Mağusa, Gazi Mustafa Kemal Bulvarı No:23",
      followUs: "Bizi Takip Edin",
      copyright: "Tüm hakları saklıdır.",
      privacy: "Gizlilik Politikası",
      terms: "Kullanım Koşulları",
    },
    en: {
      about: "About",
      treatments: "Treatments",
      services: "Services",
      contact: "Contact",
      address: "Address",
      addressText: "Mağusa Yaşam Hastanesi, Kuzey Kıbrıs, Mağusa, Gazi Mustafa Kemal Bulvarı No:23",
      followUs: "Follow Us",
      copyright: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
    },
  };

  const t = translations[language as keyof typeof translations];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img src="/fertina_logo.png" alt="Fertina IVF" className="h-16 w-auto brightness-0 invert" />
            <p className="text-sm text-background/80">
              {language === "tr"
                ? "Bilim ve umudun buluştuğu yerdeyiz. Modern teknoloji ile güvenilir IVF tedavileri."
                : "Where science meets hope. Reliable IVF treatments with modern technology."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t.treatments}</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link to="/treatments/ivf-icsi" className="hover:text-primary smooth-transition">
                  IVF (ICSI)
                </Link>
              </li>
              <li>
                <Link to="/treatments/egg-donation" className="hover:text-primary smooth-transition">
                  {language === "tr" ? "Yumurta Donasyonu" : "Egg Donation"}
                </Link>
              </li>
              <li>
                <Link to="/treatments/sperm-donation" className="hover:text-primary smooth-transition">
                  {language === "tr" ? "Sperm Donasyonu" : "Sperm Donation"}
                </Link>
              </li>
              <li>
                <Link to="/treatments/embryo-donation" className="hover:text-primary smooth-transition">
                  {language === "tr" ? "Embriyo Donasyonu" : "Embryo Donation"}
                </Link>
              </li>
              <li>
                <Link to="/treatments/gender-selection" className="hover:text-primary smooth-transition">
                  {language === "tr" ? "Cinsiyet Seçimi" : "Gender Selection"}
                </Link>
              </li>
              <li>
                <Link to="/treatments/surrogacy" className="hover:text-primary smooth-transition">
                  {language === "tr" ? "Taşıyıcı Annelik" : "Surrogacy"}
                </Link>
              </li>
              <li>
                <Link to="/treatments/tandem-treatment" className="hover:text-primary smooth-transition">
                  {language === "tr" ? "Tandem Tedavi" : "Tandem Treatment"}
                </Link>
              </li>
              <li>
                <Link to="/treatments/cytoplasm-transfer" className="hover:text-primary smooth-transition">
                  {language === "tr" ? "Sitoplazma Transferi" : "Cytoplasm Transfer"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">{t.services}</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link to={language === "tr" ? "/tibbi-hizmetler/genetik" : "/medical-services/genetics"} className="hover:text-primary smooth-transition">
                  {language === "tr" ? "Genetik Testler (PGD)" : "Genetic Testing (PGD)"}
                </Link>
              </li>
              <li>
                <Link to={language === "tr" ? "/tibbi-hizmetler/embriyo-dondurma" : "/medical-services/embryo-freezing"} className="hover:text-primary smooth-transition">
                  {language === "tr" ? "Embriyo Dondurma" : "Embryo Freezing"}
                </Link>
              </li>
              <li>
                <Link to={language === "tr" ? "/tibbi-hizmetler/yumurta-dondurma" : "/medical-services/egg-freezing"} className="hover:text-primary smooth-transition">
                  {language === "tr" ? "Yumurta Dondurma" : "Egg Freezing"}
                </Link>
              </li>
              <li>
                <Link to={language === "tr" ? "/tibbi-hizmetler/sperm-dondurma" : "/medical-services/sperm-freezing"} className="hover:text-primary smooth-transition">
                  {language === "tr" ? "Sperm Dondurma" : "Sperm Freezing"}
                </Link>
              </li>
              <li>
                <Link to={language === "tr" ? "/tibbi-hizmetler/yeni-nesil-dizileme" : "/medical-services/next-generation-sequencing"} className="hover:text-primary smooth-transition">NGS</Link>
              </li>
              <li>
                <Link to={language === "tr" ? "/tibbi-hizmetler/tum-ekzom-dizilemesi" : "/medical-services/whole-exome-sequencing"} className="hover:text-primary smooth-transition">WES</Link>
              </li>
              <li>
                <Link to={language === "tr" ? "/tibbi-hizmetler/sperm-elde-etme" : "/medical-services/sperm-retrieval"} className="hover:text-primary smooth-transition">TESE/Micro-TESE</Link>
              </li>
              <li>
                <Link to={language === "tr" ? "/tibbi-hizmetler/laparoskopi" : "/medical-services/laparoscopy"} className="hover:text-primary smooth-transition">
                  {language === "tr" ? "Laparoskopi" : "Laparoscopy"}
                </Link>
              </li>
              <li>
                <Link to={language === "tr" ? "/tibbi-hizmetler/histeroskopi" : "/medical-services/hysteroscopy"} className="hover:text-primary smooth-transition">
                  {language === "tr" ? "Histeroskopi" : "Hysteroscopy"}
                </Link>
              </li>
              <li>
                <Link to={language === "tr" ? "/tibbi-hizmetler/gebelik-takibi" : "/medical-services/pregnancy-follow-up"} className="hover:text-primary smooth-transition">
                  {language === "tr" ? "Gebelik Takibi" : "Pregnancy Follow-up"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t.contact}</h3>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>{t.addressText}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+905338299829" className="hover:text-primary smooth-transition">
                  +90 533 829 98 29
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+905338425060" className="hover:text-primary smooth-transition">
                  +90 533 842 50 60
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@fertinaivf.com" className="hover:text-primary smooth-transition">
                  info@fertinaivf.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <p className="font-semibold mb-3">{t.followUs}</p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 rounded-lg hover:bg-primary smooth-transition"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 rounded-lg hover:bg-primary smooth-transition"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 rounded-lg hover:bg-primary smooth-transition"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 rounded-lg hover:bg-primary smooth-transition"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-1.021-.083 6.411 6.411 0 0 0-6.41 6.41 6.411 6.411 0 0 0 6.41 6.412 6.411 6.411 0 0 0 6.412-6.412V9.057a8.16 8.16 0 0 0 4.6 1.39V7.786a4.813 4.813 0 0 1-1.387-.1z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 rounded-lg hover:bg-primary smooth-transition"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <p>© 2025 Fertina IVF. {t.copyright}</p>
              <span className="text-primary font-bold">OVUTrust Verified</span>
            </div>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary smooth-transition">
                {t.privacy}
              </Link>
              <Link to="/terms" className="hover:text-primary smooth-transition">
                {t.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
