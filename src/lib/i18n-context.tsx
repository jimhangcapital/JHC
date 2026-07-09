import React, { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { translations, type Language } from "./i18n";

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.zh;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem("jimhang-lang");
    return saved === "zh" || saved === "en" ? saved : "zh";
  });

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("jimhang-lang", newLang);
    document.documentElement.lang = newLang === "zh" ? "zh-CN" : "en";
  }, []);

  const t = translations[lang];

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};
