import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";

const TelrPaymentModal = ({ service, isOpen, onSuccess, onCancel }) => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const [isProcessing, setIsProcessing] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    try {
      // Create Telr order
      const response = await fetch(
        "http://localhost:5000/api/create-telr-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            serviceId: service.id,
            customerInfo,
          }),
        }
      );

      const data = await response.json();

      if (data.success && data.orderUrl) {
        // Redirect to Telr payment page
        window.location.href = data.orderUrl;
      } else {
        throw new Error(data.error || "Failed to create payment order");
      }
    } catch (error) {
      console.error("Error creating Telr order:", error);
      alert(
        "An error occurred while creating your payment order. Please try again."
      );
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-8 max-w-lg w-full max-h-[95vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className={`mb-8 ${isRTL ? "text-right" : "text-left"}`}>
          <h2 className="text-3xl font-bold text-gray-900 font-zain mb-3">
            {t("payment.title", "Complete Your Payment")}
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
            <h3 className="font-bold text-gray-900 font-zain text-lg mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 font-zain text-sm mb-4 leading-relaxed">
              {service.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-blue-600 font-zain">
                {service.price.toLocaleString()} {service.currency}
              </span>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold font-zain">
                Telr Secure
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Customer Information */}
          <div className="space-y-4">
            <h4
              className={`text-lg font-bold text-gray-900 font-zain border-b border-gray-200 pb-2 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t("payment.customer_info", "Customer Information")}
            </h4>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label
                  className={`block text-sm font-semibold text-gray-700 font-zain mb-2 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {t("payment.full_name", "Full Name")} *
                </label>
                <input
                  type="text"
                  placeholder={t("payment.full_name", "Enter your full name")}
                  value={customerInfo.name}
                  onChange={(e) =>
                    setCustomerInfo((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  required
                  className={`w-full p-4 border-2 border-gray-200 rounded-xl font-zain text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                  dir={isRTL ? "rtl" : "ltr"}
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-semibold text-gray-700 font-zain mb-2 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {t("payment.email", "Email Address")} *
                </label>
                <input
                  type="email"
                  placeholder={t("payment.email", "Enter your email address")}
                  value={customerInfo.email}
                  onChange={(e) =>
                    setCustomerInfo((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl font-zain text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  dir="ltr"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-semibold text-gray-700 font-zain mb-2 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {t("payment.phone", "Phone Number")} *
                </label>
                <input
                  type="tel"
                  placeholder={t("payment.phone", "Enter your phone number")}
                  value={customerInfo.phone}
                  onChange={(e) =>
                    setCustomerInfo((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                  required
                  className={`w-full p-4 border-2 border-gray-200 rounded-xl font-zain text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                  dir={isRTL ? "rtl" : "ltr"}
                />
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="space-y-4">
            <h4
              className={`text-lg font-bold text-gray-900 font-zain border-b border-gray-200 pb-2 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t("payment.payment_info", "Payment Information")}
            </h4>

            <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800 font-zain mb-2">
                    Telr Payment Gateway
                  </div>
                  <p className="text-gray-600 font-zain text-sm">
                    You will be redirected to Telr's secure payment page
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-3 rounded-lg">
                  <div className="text-lg font-semibold text-gray-800 font-zain">
                    15+
                  </div>
                  <div className="text-xs text-gray-600 font-zain">
                    Payment Methods
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <div className="text-lg font-semibold text-gray-800 font-zain">
                    99.99%
                  </div>
                  <div className="text-xs text-gray-600 font-zain">
                    Availability
                  </div>
                </div>
              </div>
            </div>

            <p
              className={`text-xs text-gray-600 font-zain ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              🔒 Your payment information is secure and encrypted by Telr
            </p>
          </div>

          {/* Buttons */}
          <div
            className={`flex gap-4 pt-6 ${
              isRTL ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-zain font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              {t("payment.cancel", "Cancel")}
            </button>
            <button
              type="submit"
              disabled={isProcessing}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-zain font-semibold hover:from-green-700 hover:to-green-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-200 shadow-lg hover:shadow-xl"
            >
              {isProcessing ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  {t("payment.processing", "Processing...")}
                </div>
              ) : (
                t(
                  "payment.pay_now",
                  `Pay ${service.price.toLocaleString()} ${service.currency}`
                )
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TelrPaymentModal;
