import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import TR from "country-flag-icons/react/3x2/TR";
import US from "country-flag-icons/react/3x2/US";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/fertina-logo.png";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Fertina IVF" className="h-12 w-auto" />
            <span className="text-xl font-bold text-foreground hidden sm:inline">
              Fertina IVF
            </span>
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
  );
};

export default Navigation;
