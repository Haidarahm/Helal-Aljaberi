import { Briefcase, Building2, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";

export default function Pricing() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const iconMap = {
    0: Users,
    1: Building2,
    2: Briefcase,
  };

  const plans = t("pricing.plans", { returnObjects: true });

  return (
    <section className="bg-[color:var(--color-secondary)] text-[color:var(--color-accent)] py-16 px-6 md:px-20">
      <h1
        className={`text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[color:var(--color-primary)] mb-4 font-zain ${
          isRTL ? "text-right" : "text-center"
        }`}
      >
        {t("pricing.title")}
      </h1>
      <p
        className={`text-[color:var(--color-text-light)] max-w-2xl mx-auto mb-12 font-zain text-base xl:text-lg 2xl:text-xl ${
          isRTL ? "text-right" : "text-center"
        }`}
      >
        {t("pricing.description")}
      </p>

      <div className="space-y-10">
        {plans.map((plan, i) => {
          const Icon = iconMap[i] || Users;
          return (
            <div
              key={i}
              className="bg-[color:var(--color-secondary-light)] rounded-2xl shadow-lg p-8"
            >
              <div
                className={`flex items-center mb-6 ${
                  isRTL ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <Icon
                  className={`w-8 h-8 text-[color:var(--color-primary)] ${
                    isRTL ? "ml-3" : "mr-3"
                  }`}
                />
                <h2
                  className={`text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-[color:var(--color-primary)] font-zain ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {plan.category}
                </h2>
              </div>

              <div className="space-y-6">
                {plan.items.map((item, j) => (
                  <div
                    key={j}
                    className={`flex flex-col md:flex-row md:items-center md:justify-between border-b border-[color:var(--color-secondary)]/40 pb-4 ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    <div className="md:w-3/4">
                      <h3 className="text-lg xl:text-xl 2xl:text-2xl font-medium text-[color:var(--color-accent)] mb-1 font-zain">
                        {item.title}
                      </h3>
                      <p className="text-[color:var(--color-text-secondary)] text-sm xl:text-base 2xl:text-lg mb-2 font-zain">
                        {item.desc}
                      </p>
                    </div>

                    <div
                      className={`flex flex-col ${
                        isRTL ? "items-start" : "items-end"
                      } md:flex-row md:items-center gap-3 mt-3 md:mt-0`}
                    >
                      <span className="text-[color:var(--color-primary)] text-xl xl:text-2xl 2xl:text-3xl font-bold">
                        {item.price}
                      </span>
                      <button className="bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary-dark)] text-[color:var(--color-accent)] font-medium py-2 px-4 xl:py-3 xl:px-6 2xl:py-4 2xl:px-8 rounded-xl transition font-zain text-sm xl:text-base 2xl:text-lg">
                        {t("pricing.subscribe_button")}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
