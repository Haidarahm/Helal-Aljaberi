import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";

export default function PaymentCancel() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section className="w-full bg-[color:var(--color-secondary)] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          {/* Cancel Header */}
          <div
            className={`text-center mb-8 ${isRTL ? "text-right" : "text-left"}`}
          >
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-10 h-10 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-yellow-600 font-zain mb-4">
              {t("payment.cancel.title", "Payment Cancelled")}
            </h1>
            <p className="text-xl text-gray-700 font-zain">
              {t(
                "payment.cancel.message",
                "You have cancelled the payment process. No charges have been made to your account."
              )}
            </p>
          </div>

          {/* Information */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3
              className={`text-lg font-semibold text-gray-800 font-zain mb-4 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t("payment.cancel.info_title", "What happened?")}
            </h3>
            <p
              className={`text-gray-700 font-zain leading-relaxed ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t(
                "payment.cancel.info_message",
                "You chose to cancel the payment process. This could happen if you clicked the cancel button, closed the payment window, or decided not to proceed with the payment. Your training session has not been booked yet."
              )}
            </p>
          </div>

          {/* Help Section */}
          <div className="bg-blue-50 rounded-2xl p-6 mb-8">
            <h3
              className={`text-lg font-semibold text-blue-800 font-zain mb-4 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t("payment.cancel.help_title", "Need Help?")}
            </h3>
            <ul
              className={`space-y-2 text-blue-700 font-zain ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              <li>
                •{" "}
                {t(
                  "payment.cancel.help1",
                  "If you want to complete your booking, you can try again"
                )}
              </li>
              <li>
                •{" "}
                {t(
                  "payment.cancel.help2",
                  "Contact us directly if you're having payment issues"
                )}
              </li>
              <li>
                •{" "}
                {t(
                  "payment.cancel.help3",
                  "We offer alternative payment methods if needed"
                )}
              </li>
              <li>
                •{" "}
                {t(
                  "payment.cancel.help4",
                  "Our team is here to assist you with your training needs"
                )}
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="bg-green-50 rounded-2xl p-6 mb-8">
            <h3
              className={`text-lg font-semibold text-green-800 font-zain mb-4 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t("payment.cancel.contact_title", "Contact Information")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-green-600 font-zain">
                  {t("payment.cancel.email", "Email")}:
                </span>
                <p className="font-semibold text-green-800 font-zain">
                  haidarahmad421@gmail.com
                </p>
              </div>
              <div>
                <span className="text-sm text-green-600 font-zain">
                  {t("payment.cancel.phone", "Phone")}:
                </span>
                <p className="font-semibold text-green-800 font-zain">
                  +971 509 590 444
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className={`flex gap-4 ${isRTL ? "flex-row-reverse" : "flex-row"}`}
          >
            <Link
              to="/"
              className="flex-1 px-6 py-4 bg-[color:var(--color-primary)] text-white rounded-xl font-zain font-semibold text-center hover:bg-[color:var(--color-primary-dark)] transition-colors"
            >
              {t("payment.back_home", "Back to Home")}
            </Link>
            <Link
              to="/pricing"
              className="flex-1 px-6 py-4 border-2 border-[color:var(--color-primary)] text-[color:var(--color-primary)] rounded-xl font-zain font-semibold text-center hover:bg-[color:var(--color-primary)] hover:text-white transition-colors"
            >
              {t("payment.try_again", "Try Again")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
