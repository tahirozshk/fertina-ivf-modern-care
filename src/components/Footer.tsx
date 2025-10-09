import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/fertina-logo.png";

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
      addressText: "Kıbrıs, Lefkoşa",
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
      addressText: "Nicosia, Cyprus",
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
            <img src={logo} alt="Fertina IVF" className="h-16 w-auto brightness-0 invert" />
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
                <Link to="/treatments/ivf" className="hover:text-primary smooth-transition">
                  IVF (ICSI)
                </Link>
              </li>
              <li>
                <Link to="/treatments/egg-donation" className="hover:text-primary smooth-transition">
                  {language === "tr" ? "Yumurta Donasyonu" : "Egg Donation"}
                </Link>
              </li>
              <li>
                <Link to="/treatments/gender-selection" className="hover:text-primary smooth-transition">
                  {language === "tr" ? "Cinsiyet Seçimi" : "Gender Selection"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">{t.services}</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link to="/services/genetic-testing" className="hover:text-primary smooth-transition">
                  {language === "tr" ? "Genetik Testler" : "Genetic Testing"}
                </Link>
              </li>
              <li>
                <Link to="/services/embryo-freezing" className="hover:text-primary smooth-transition">
                  {language === "tr" ? "Embriyo Dondurma" : "Embryo Freezing"}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary smooth-transition">
                  {t.about}
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
                <a href="tel:+90000000000" className="hover:text-primary smooth-transition">
                  +90 000 000 00 00
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
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <p>© 2025 Fertina IVF. {t.copyright}</p>
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
