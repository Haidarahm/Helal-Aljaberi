import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [paymentData, setPaymentData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get payment data from URL parameters
    const orderRef = searchParams.get("order_ref");
    const orderId = searchParams.get("order_id");
    const status = searchParams.get("status");

    if (orderRef && status === "A") {
      // Payment was successful
      setPaymentData({
        orderRef,
        orderId,
        status: "success",
        message: "Payment completed successfully!",
      });
    } else {
      // Payment failed or was cancelled
      setPaymentData({
        orderRef,
        orderId,
        status: "failed",
        message: "Payment was not completed.",
      });
    }

    setIsLoading(false);
  }, [searchParams]);

  if (isLoading) {
    return (
      <section className="w-full bg-[color:var(--color-secondary)] py-16 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-center">
          <div className="text-[color:var(--color-accent)] font-zain">
            Processing payment...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-[color:var(--color-secondary)] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          {/* Success Header */}
          <div
            className={`text-center mb-8 ${isRTL ? "text-right" : "text-left"}`}
          >
            {paymentData?.status === "success" ? (
              <>
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h1 className="text-4xl font-bold text-green-600 font-zain mb-4">
                  {t("payment.success.title", "Payment Successful!")}
                </h1>
                <p className="text-xl text-gray-700 font-zain">
                  {t(
                    "payment.success.message",
                    "Thank you for your payment. Your training session has been booked successfully."
                  )}
                </p>
              </>
            ) : (
              <>
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <h1 className="text-4xl font-bold text-red-600 font-zain mb-4">
                  {t("payment.failed.title", "Payment Not Completed")}
                </h1>
                <p className="text-xl text-gray-700 font-zain">
                  {t(
                    "payment.failed.message",
                    "Your payment was not completed. Please try again or contact us for assistance."
                  )}
                </p>
              </>
            )}
          </div>

          {/* Payment Details */}
          {paymentData?.orderRef && (
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h3
                className={`text-lg font-semibold text-gray-800 font-zain mb-4 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t("payment.details", "Payment Details")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-gray-600 font-zain">
                    {t("payment.order_ref", "Order Reference")}:
                  </span>
                  <p className="font-semibold text-gray-800 font-zain">
                    {paymentData.orderRef}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-600 font-zain">
                    {t("payment.status", "Status")}:
                  </span>
                  <p
                    className={`font-semibold font-zain ${
                      paymentData.status === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {paymentData.status === "success" ? "Completed" : "Failed"}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-2xl p-6 mb-8">
            <h3
              className={`text-lg font-semibold text-blue-800 font-zain mb-4 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t("payment.next_steps", "What's Next?")}
            </h3>
            {paymentData?.status === "success" ? (
              <ul
                className={`space-y-2 text-blue-700 font-zain ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                <li>
                  •{" "}
                  {t(
                    "payment.success.step1",
                    "You will receive a confirmation email shortly"
                  )}
                </li>
                <li>
                  •{" "}
                  {t(
                    "payment.success.step2",
                    "Our team will contact you to schedule your training session"
                  )}
                </li>
                <li>
                  •{" "}
                  {t(
                    "payment.success.step3",
                    "Prepare any questions you'd like to discuss during the session"
                  )}
                </li>
              </ul>
            ) : (
              <ul
                className={`space-y-2 text-blue-700 font-zain ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                <li>
                  •{" "}
                  {t(
                    "payment.failed.step1",
                    "Check your payment method and try again"
                  )}
                </li>
                <li>
                  •{" "}
                  {t(
                    "payment.failed.step2",
                    "Contact us directly for assistance"
                  )}
                </li>
                <li>
                  •{" "}
                  {t(
                    "payment.failed.step3",
                    "We're here to help you complete your booking"
                  )}
                </li>
              </ul>
            )}
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
            {paymentData?.status === "failed" && (
              <Link
                to="/pricing"
                className="flex-1 px-6 py-4 border-2 border-[color:var(--color-primary)] text-[color:var(--color-primary)] rounded-xl font-zain font-semibold text-center hover:bg-[color:var(--color-primary)] hover:text-white transition-colors"
              >
                {t("payment.try_again", "Try Again")}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
