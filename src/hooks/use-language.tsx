import { useState, useEffect } from "react";

const LANGUAGE_KEY = "fertina-language";

export const useLanguage = () => {
  const [language, setLanguageState] = useState(() => {
    // Initialize from localStorage or default to "tr"
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(LANGUAGE_KEY);
      return saved || "tr";
    }
    return "tr";
  });

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem(LANGUAGE_KEY, lang);
    }
  };

  return { language, setLanguage };
};

