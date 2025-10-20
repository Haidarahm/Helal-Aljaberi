import { createContext, useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem("language") || "ar"
  );

  useEffect(() => {
    // Set the language in i18n when component mounts
    i18n.changeLanguage(currentLanguage);
  }, [i18n, currentLanguage]);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "ar" ? "en" : "ar";
    setCurrentLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    i18n.changeLanguage(newLanguage);

    // Update document direction for RTL/LTR support
    // document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLanguage;

    // Refresh the page to ensure clean state
    window.location.reload();
  };

  const setLanguage = (language) => {
    if (language !== currentLanguage) {
      setCurrentLanguage(language);
      localStorage.setItem("language", language);
      i18n.changeLanguage(language);

      // Update document direction for RTL/LTR support
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = language;

      // Refresh the page to ensure clean state
      window.location.reload();
    }
  };

  const value = {
    currentLanguage,
    toggleLanguage,
    setLanguage,
    isRTL: currentLanguage === "ar",
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
