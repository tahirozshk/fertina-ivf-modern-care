import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe, ChevronDown, Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import TR from "country-flag-icons/react/3x2/TR";
import US from "country-flag-icons/react/3x2/US";
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
  ];

  return (
    <>
      {/* Top Bar - Contact & Social Links - Desktop Only */}
      <div className="hidden sm:block fixed top-0 left-0 right-0 z-50 bg-primary text-white">
        <div className="container mx-auto px-4">
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
                href="https://wa.me/905338299829"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-white/10 rounded-lg hover:bg-white/20 smooth-transition"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
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
      <nav className="fixed top-0 sm:top-10 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
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
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  {language === "tr" ? (
                    <TR className="w-5 h-4" />
                  ) : (
                    <US className="w-5 h-4" />
                  )}
                  <span className="text-sm font-medium">
                    {language === "tr" ? "TR" : "EN"}
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

            {/* CTA Button */}
            <Link to="/contact">
              <Button variant="default" className="hidden md:inline-flex">
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
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            {/* Mobile Contact Info */}
            <div className="px-4 py-3 bg-primary/5 rounded-lg mb-4">
              <div className="text-sm font-medium text-foreground mb-3">
                {language === "tr" ? "İletişim" : "Contact"}
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
                {language === "tr" ? "Sosyal Medya" : "Social Media"}
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
                  href="https://wa.me/905338299829"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 rounded-lg hover:bg-primary smooth-transition"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
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
                  {language === "tr" ? "Dil" : "Language"}
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
                <Button variant="default" className="w-full">{t.appointment}</Button>
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
