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

  const toggleLanguage = async () => {
    const newLanguage = currentLanguage === "ar" ? "en" : "ar";
    setCurrentLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);

    // Wait for language change to complete
    await i18n.changeLanguage(newLanguage);

    // Update document direction for RTL/LTR support
  
    document.documentElement.lang = newLanguage;

    // Small delay to ensure translations are loaded before refresh
    setTimeout(() => {
      window.location.reload();
    }, 50);
  };

  const setLanguage = async (language) => {
    if (language !== currentLanguage) {
      setCurrentLanguage(language);
      localStorage.setItem("language", language);
      await i18n.changeLanguage(language);

      // Update document direction for RTL/LTR support
      document.documentElement.lang = language;

      // Small delay to ensure translations are loaded before refresh
      setTimeout(() => {
        window.location.reload();
      }, 50);
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
