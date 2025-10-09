import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/fertina-logo.png";

interface NavigationProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const Navigation = ({ language, setLanguage }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
    { href: "/services", label: t.services },
    { href: "/about", label: t.about },
    { href: "/team", label: t.team },
    { href: "/center", label: t.center },
    { href: "/blog", label: t.blog },
    { href: "/contact", label: t.contact },
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
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
              className="gap-2"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">
                {language === "tr" ? "EN" : "TR"}
              </span>
            </Button>

            {/* CTA Button */}
            <Button variant="default" className="hidden md:inline-flex">
              {t.appointment}
            </Button>

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
              <Button variant="default" className="mx-4 mt-2">
                {t.appointment}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
