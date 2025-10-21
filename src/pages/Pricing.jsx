import { Briefcase, Building2, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";
import TelrPaymentModal from "../components/TelrPaymentModal";

export default function Pricing() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const [selectedService, setSelectedService] = useState(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const iconMap = {
    0: Users,
    1: Building2,
    2: Briefcase,
  };

  const plans = t("pricing.plans", { returnObjects: true });

  const handleSubscribe = (service) => {
    // Convert service data to match backend format
    const serviceData = {
      id: service.id || `${service.title.toLowerCase().replace(/\s+/g, "_")}`,
      title: service.title,
      price: parseFloat(service.price.replace(/[^\d]/g, "")), // Extract number from price string
      currency: "AED",
      description: service.desc,
    };

    setSelectedService(serviceData);
    setIsPaymentModalOpen(true);
  };

  const handlePaymentSuccess = (paymentData) => {
    console.log("Payment successful:", paymentData);
    setIsPaymentModalOpen(false);
    setSelectedService(null);

    // Show success message
    alert("Payment successful! You will receive a confirmation email shortly.");
  };

  const handlePaymentCancel = () => {
    setIsPaymentModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="pricing-section bg-[color:var(--color-secondary)] text-[color:var(--color-accent)]">
      {/* Main Header Section */}
      <section className="py-20 px-6 md:px-20">
        <div
          className={`max-w-4xl mx-auto text-center
          }`}
        >
         
          <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[color:var(--color-primary)] mb-6 font-zain">
            {t("pricing.title")}
          </h1>
          <p
            className={`text-[color:var(--color-text-light)] font-zain text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-center`}
          >
            {t("pricing.description")}
          </p>
        </div>
      </section>

      {/* Pricing Categories Sections */}
      {plans.map((plan, i) => {
        const Icon = iconMap[i] || Users;
        const isLastSection = i === plans.length - 1;

        return (
          <section
            key={i}
            className={`py-16 px-6 md:px-20 ${
              !isLastSection
                ? "border-b border-[color:var(--color-secondary-light)]/20"
                : ""
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <div
                className={`inline-flex items-center justify-center mb-6 ${
                  isRTL ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div
                  className={`flex items-center category-badge px-8 py-4 rounded-full ${
                    isRTL ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 text-[color:var(--color-primary)] ${
                      isRTL ? "ml-4" : "mr-4"
                    }`}
                  />
                  <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold text-[color:var(--color-primary)] font-zain">
                    {plan.category}
                  </h2>
                </div>
              </div>

              {/* Section Description */}
              <p
                className={`text-[color:var(--color-text-light)] font-zain text-base xl:text-lg max-w-2xl mx-auto text-center
                }`}
              >
                {i === 0 &&
                  "Perfect for small institutes and organizations looking for flexible training solutions"}
                {i === 1 &&
                  "Comprehensive programs designed for medium-sized companies"}
                {i === 2 && "Premium training packages for large corporations"}
              </p>
            </div>

            {/* Pricing Cards Grid */}
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {plan.items.map((item, j) => (
                  <div
                    key={j}
                    className="group pricing-card rounded-2xl shadow-lg overflow-hidden"
                  >
                    {/* Card Header */}
                    <div className="p-6 pb-4">
                      <div
                        className={`flex items-start justify-between mb-4 ${
                          isRTL ? "flex-row-reverse" : "flex-row"
                        }`}
                      >
                        <div className="w-12 h-12 bg-[color:var(--color-primary)]/10 rounded-xl flex items-center justify-center group-hover:bg-[color:var(--color-primary)]/20 transition-colors duration-300">
                          <Icon className="w-6 h-6 text-[color:var(--color-primary)]" />
                        </div>
                        <div
                          className={`${isRTL ? "text-left" : "text-right"}`}
                        >
                          <span className="text-2xl xl:text-3xl font-bold text-[color:var(--color-primary)] font-zain">
                            {item.price}
                          </span>
                        </div>
                      </div>

                      <h3
                        className={`text-lg xl:text-xl font-semibold text-[color:var(--color-accent)] mb-3 font-zain leading-tight ${
                          isRTL ? "text-right" : "text-left"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`text-[color:var(--color-text-secondary)] text-sm xl:text-base font-zain leading-relaxed ${
                          isRTL ? "text-right" : "text-left"
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>

                    {/* Card Footer */}
                    <div className="px-6 pb-6">
                      <button
                        onClick={() => handleSubscribe(item)}
                        className="w-full pricing-button text-[color:var(--color-accent)] font-semibold py-3 px-6 rounded-xl transition-all duration-300 font-zain text-sm xl:text-base transform hover:scale-105 hover:shadow-lg"
                      >
                        {t("pricing.subscribe_button")}
                      </button>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Footer Section */}
      <section className="py-16 px-6 md:px-20 border-t border-[color:var(--color-secondary-light)]/20">
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-2xl xl:text-3xl font-bold text-[color:var(--color-primary)] mb-4 font-zain">
            Ready to Get Started?
          </h3>
          <p className="text-[color:var(--color-text-light)] font-zain text-base xl:text-lg mb-8">
            Choose the perfect training package for your organization and start
            your journey towards success.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 ${
              isRTL
                ? "justify-center items-center"
                : "justify-center items-center"
            }`}
          >
            <div
              className={`flex items-center text-[color:var(--color-text-light)] font-zain ${
                isRTL ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <span
                className={`w-2 h-2 bg-[color:var(--color-primary)] rounded-full ${
                  isRTL ? "ml-3" : "mr-3"
                }`}
              ></span>
              Flexible scheduling
            </div>
            <div
              className={`flex items-center text-[color:var(--color-text-light)] font-zain ${
                isRTL ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <span
                className={`w-2 h-2 bg-[color:var(--color-primary)] rounded-full ${
                  isRTL ? "ml-3" : "mr-3"
                }`}
              ></span>
              Expert trainers
            </div>
            <div
              className={`flex items-center text-[color:var(--color-text-light)] font-zain ${
                isRTL ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <span
                className={`w-2 h-2 bg-[color:var(--color-primary)] rounded-full ${
                  isRTL ? "ml-3" : "mr-3"
                }`}
              ></span>
              Customized content
            </div>
          </div>
        </div>
      </section>

      {/* Telr Payment Modal */}
      <TelrPaymentModal
        service={selectedService}
        isOpen={isPaymentModalOpen}
        onSuccess={handlePaymentSuccess}
        onCancel={handlePaymentCancel}
      />
    </div>
  );
}
