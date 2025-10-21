import { Modal } from "antd";
import { Briefcase, Building2, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";
import TelrPaymentModal from "./TelrPaymentModal";

export default function PricingModal({ isOpen, onClose }) {
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
    <>
      <Modal
        title={
          <div className="text-center py-4">
           
            <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[color:var(--color-primary)] mb-3 font-zain">
              {t("pricing.title")}
            </h1>
            <p className="text-[color:var(--color-text-light)] text-base xl:text-lg 2xl:text-xl font-zain max-w-2xl mx-auto leading-relaxed">
              {t("pricing.description")}
            </p>
          </div>
        }
        open={isOpen}
        onCancel={onClose}
        footer={null}
        width="90%"
        style={{ maxWidth: "1200px" }}
        className="pricing-modal"
        styles={{
          body: {
            backgroundColor: "var(--color-secondary)",
            color: "var(--color-accent)",
            padding: "24px",
          },
          header: {
            backgroundColor: "var(--color-secondary)",
            borderBottom: "1px solid var(--color-secondary-light)",
          },
        }}
      >
        <div className="space-y-8">
          {plans.map((plan, i) => {
            const Icon = iconMap[i] || Users;
            return (
              <div key={i} className="space-y-6">
                {/* Category Header */}
                <div
                  className={`flex items-center justify-center mb-8 ${
                    isRTL ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div className="flex items-center category-badge px-6 py-3 rounded-full">
                    <Icon
                      className={`w-6 h-6 text-[color:var(--color-primary)] ${
                        isRTL ? "ml-3" : "mr-3"
                      }`}
                    />
                    <h2 className="text-xl xl:text-2xl 2xl:text-3xl font-bold text-[color:var(--color-primary)] font-zain">
                      {plan.category}
                    </h2>
                  </div>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {plan.items.map((item, j) => (
                    <div
                      key={j}
                      className="group pricing-card rounded-2xl shadow-lg overflow-hidden"
                    >
                      {/* Card Header */}
                      <div className="p-6 pb-4">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 bg-[color:var(--color-primary)]/10 rounded-xl flex items-center justify-center group-hover:bg-[color:var(--color-primary)]/20 transition-colors duration-300">
                            <Icon className="w-6 h-6 text-[color:var(--color-primary)]" />
                          </div>
                          <div className="text-right">
                            <span className="text-2xl xl:text-3xl font-bold text-[color:var(--color-primary)] font-zain">
                              {item.price}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-lg xl:text-xl font-semibold text-[color:var(--color-accent)] mb-3 font-zain leading-tight">
                          {item.title}
                        </h3>

                        <p className={`text-[color:var(--color-text-secondary)] text-sm xl:text-base font-zain leading-relaxed ${
                          isRTL ? "text-right" : "text-left"
                        }`}>
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
            );
          })}
        </div>
      </Modal>

      {/* Telr Payment Modal */}
      <TelrPaymentModal
        service={selectedService}
        isOpen={isPaymentModalOpen}
        onSuccess={handlePaymentSuccess}
        onCancel={handlePaymentCancel}
      />
    </>
  );
}
