import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";

export const Contact = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section className="w-full bg-[color:var(--color-secondary)] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={`text-3xl md:text-4xl font-bold text-[color:var(--color-primary-light)] mb-4 font-zain ${
            isRTL ? "text-right" : "text-center"
          }`}
        >
          {t("contact.title")}
        </h2>
        <p
          className={`text-lg text-[color:var(--color-accent-muted)] mb-8 font-zain ${
            isRTL ? "text-right" : "text-center"
          }`}
        >
          {t("contact.description")}
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-[color:var(--color-secondary-light)] rounded-xl p-6">
            <h3
              className={`text-lg font-semibold text-[color:var(--color-primary)] mb-2 font-zain ${
                isRTL ? "text-right" : "text-center"
              }`}
            >
              {t("contact.email")}
            </h3>
            <p
              className={`text-[color:var(--color-accent)] font-zain ${
                isRTL ? "text-right" : "text-center"
              }`}
            >
              He779@hotmail.com
            </p>
          </div>

          <div className="bg-[color:var(--color-secondary-light)] rounded-xl p-6">
            <h3
              className={`text-lg font-semibold text-[color:var(--color-primary)] mb-2 font-zain ${
                isRTL ? "text-right" : "text-center"
              }`}
            >
              {t("contact.phone")}
            </h3>
            <p
              className={`text-[color:var(--color-accent)] font-zain ${
                isRTL ? "text-right" : "text-center"
              }`}
            >
              +971 509 590 444
            </p>
          </div>

          <div className="bg-[color:var(--color-secondary-light)] rounded-xl p-6">
            <h3
              className={`text-lg font-semibold text-[color:var(--color-primary)] mb-2 font-zain ${
                isRTL ? "text-right" : "text-center"
              }`}
            >
              {t("contact.location")}
            </h3>
            <p
              className={`text-[color:var(--color-accent)] font-zain ${
                isRTL ? "text-right" : "text-center"
              }`}
            >
              Muscat, Oman
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
