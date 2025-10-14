import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/hooks/use-language";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();
  const dir = language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const content = {
    tr: {
      title: "404",
      message: "Üzgünüz! Sayfa bulunamadı",
      link: "Ana Sayfaya Dön"
    },
    en: {
      title: "404",
      message: "Oops! Page not found",
      link: "Return to Home"
    },
    ar: {
      title: "404",
      message: "عذرًا! الصفحة غير موجودة",
      link: "العودة إلى الصفحة الرئيسية"
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100" dir={dir}>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{t.title}</h1>
        <p className="mb-4 text-xl text-gray-600">{t.message}</p>
        <Link to="/" className="text-blue-500 underline hover:text-blue-700">
          {t.link}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
