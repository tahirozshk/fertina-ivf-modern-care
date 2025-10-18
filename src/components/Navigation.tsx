import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe, ChevronDown, Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import TR from "country-flag-icons/react/3x2/TR";
import US from "country-flag-icons/react/3x2/US";
import SA from "country-flag-icons/react/3x2/SA";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavigationProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const Navigation = ({ language, setLanguage }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const translations = {
    tr: {
      home: "Ana Sayfa",
      treatments: "Tedaviler",
      services: "Tıbbi Hizmetler",
      about: "Hakkımızda",
      team: "Ekibimiz",
      center: "Merkezimiz",
      blog: "Blog",
      contact: "İletişim",
      appointment: "Randevu Al",
    },
    en: {
      home: "Home",
      treatments: "Treatments",
      services: "Medical Services",
      about: "About Us",
      team: "Our Team",
      center: "Our Center",
      blog: "Blog",
      contact: "Contact",
      appointment: "Book Appointment",
    },
    ar: {
      home: "الصفحة الرئيسية",
      treatments: "العلاجات",
      services: "الخدمات الطبية",
      about: "معلومات عنا",
      team: "فريقنا",
      center: "مركزنا",
      blog: "المدونة",
      contact: "اتصل بنا",
      appointment: "احجز موعد",
    },
  };

  const t = translations[language as keyof typeof translations];

  const navLinks = [
    { href: "/", label: t.home },
    { href: "/treatments", label: t.treatments },
    { href: language === "tr" ? "/tibbi-hizmetler" : "/medical-services", label: t.services },
    { href: "/blog", label: t.blog },
    { href: "/contact", label: t.contact },
  ];

  const aboutLinks = [
    { href: "/about", label: t.about },
    { href: "/team", label: t.team },
    { href: "/center", label: t.center },
  ];

  const languageOptions = [
    { code: "tr", label: "Türkçe", FlagIcon: TR },
    { code: "en", label: "English", FlagIcon: US },
    { code: "ar", label: "العربية", FlagIcon: SA },
  ];

  return (
    <>
      {/* Top Bar - Contact & Social Links - Desktop Only */}
      <div className="hidden sm:block fixed top-0 left-0 right-0 z-50 text-white w-full" style={{backgroundColor: '#13121e'}}>
        <div className="container mx-auto px-8 max-w-full">
          <div className="flex items-center justify-between h-10 text-sm">
            {/* Left Side - Contact Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4">
              <a href="mailto:info@fertinaivf.com" className="flex items-center gap-1 hover:text-white/80 smooth-transition text-xs sm:text-sm">
                <Mail className="h-3 w-3" />
                info@fertinaivf.com
              </a>
              <a href="tel:+905338299829" className="flex items-center gap-1 hover:text-white/80 smooth-transition text-xs sm:text-sm">
                <Phone className="h-3 w-3" />
                +90 533 829 98 29
              </a>
            </div>

            {/* Right Side - Social Links */}
            <div className="flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-white/10 rounded-lg hover:bg-white/20 smooth-transition"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-white/10 rounded-lg hover:bg-white/20 smooth-transition"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-white/10 rounded-lg hover:bg-white/20 smooth-transition"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-white/10 rounded-lg hover:bg-white/20 smooth-transition"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-1.021-.083 6.411 6.411 0 0 0-6.41 6.41 6.411 6.411 0 0 0 6.41 6.412 6.411 6.411 0 0 0 6.412-6.412V9.057a8.16 8.16 0 0 0 4.6 1.39V7.786a4.813 4.813 0 0 1-1.387-.1z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-white/10 rounded-lg hover:bg-white/20 smooth-transition"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="fixed top-0 sm:top-10 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border w-full">
        <div className="container mx-auto px-8 max-w-full">
          <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/fertina_logo.png" alt="Fertina IVF" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-foreground hover:text-primary smooth-transition"
              >
                {link.label}
              </Link>
            ))}
            
            {/* About Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium text-foreground hover:text-primary smooth-transition gap-1">
                  {t.about}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {aboutLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link to={link.href} className="w-full">
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Language Switcher (desktop only) */}
            <div className="hidden lg:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  {language === "tr" ? (
                    <TR className="w-5 h-4" />
                  ) : language === "ar" ? (
                    <SA className="w-5 h-4" />
                  ) : (
                    <US className="w-5 h-4" />
                  )}
                  <span className="text-sm font-medium">
                    {language === "tr" ? "TR" : language === "ar" ? "AR" : "EN"}
                  </span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  {languageOptions.map((option) => {
                    const FlagIcon = option.FlagIcon;
                    return (
                      <DropdownMenuItem
                        key={option.code}
                        onClick={() => setLanguage(option.code)}
                        className={`cursor-pointer ${
                          language === option.code ? "bg-accent" : ""
                        }`}
                      >
                        <FlagIcon className="mr-2 w-5 h-4" />
                        {option.label}
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* CTA Button */}
            <Link to="/contact">
              <Button variant="default" className="hidden md:inline-flex" style={{backgroundColor: '#13121e', borderColor: '#13121e'}}>
                {t.appointment}
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground hover:bg-accent rounded-lg smooth-transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in max-h-[75vh] overflow-y-auto">
            {/* Mobile Contact Info */}
            <div className="px-4 py-3 bg-primary/5 rounded-lg mb-4">
              <div className="text-sm font-medium text-foreground mb-3">
                {language === "tr" ? "İletişim" : language === "ar" ? "اتصل بنا" : "Contact"}
              </div>
              <div className="space-y-2">
                <a href="mailto:info@fertinaivf.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary smooth-transition">
                  <Mail className="h-4 w-4" />
                  info@fertinaivf.com
                </a>
                <a href="tel:+905338299829" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary smooth-transition">
                  <Phone className="h-4 w-4" />
                  +90 533 829 98 29
                </a>
              </div>
            </div>

            {/* Mobile Social Media */}
            <div className="px-4 py-3 bg-primary/5 rounded-lg mb-4">
              <div className="text-sm font-medium text-foreground mb-3">
                {language === "tr" ? "Sosyal Medya" : language === "ar" ? "وسائل التواصل الاجتماعي" : "Social Media"}
              </div>
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
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-1.021-.083 6.411 6.411 0 0 0-6.41 6.41 6.411 6.411 0 0 0 6.41 6.412 6.411 6.411 0 0 0 6.412-6.412V9.057a8.16 8.16 0 0 0 4.6 1.39V7.786a4.813 4.813 0 0 1-1.387-.1z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 rounded-lg hover:bg-primary smooth-transition"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-lg smooth-transition"
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile About Section */}
              <div className="px-4 py-2">
                <div className="text-sm font-medium text-foreground mb-2">{t.about}</div>
                <div className="flex flex-col gap-1 ml-4">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 text-sm text-muted-foreground hover:bg-accent rounded-lg smooth-transition"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Language Section */}
              <div className="px-4 py-2">
                <div className="text-sm font-medium text-foreground mb-2">
                  {language === "tr" ? "Dil" : language === "ar" ? "اللغة" : "Language"}
                </div>
                <div className="flex gap-2 ml-4">
                  {languageOptions.map((option) => {
                    const FlagIcon = option.FlagIcon;
                    return (
                      <button
                        key={option.code}
                        onClick={() => {
                          setLanguage(option.code);
                          setIsOpen(false);
                        }}
                        className={`px-3 py-1 text-sm rounded-lg smooth-transition flex items-center gap-2 ${
                          language === option.code
                            ? "bg-primary text-primary-foreground"
                            : "bg-accent text-foreground hover:bg-accent/80"
                        }`}
                      >
                        <FlagIcon className="w-5 h-4" />
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <Link to="/contact" className="mx-4 mt-2">
                <Button variant="default" className="w-full" style={{backgroundColor: '#13121e', borderColor: '#13121e'}}>{t.appointment}</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navigation;
