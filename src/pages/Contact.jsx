import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { t, ready } = useTranslation();
  const { isRTL } = useLanguage();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId = "service_s1bnuf5"; // Replace with your EmailJS service ID
      const templateId = "template_wepujjo"; // Replace with your EmailJS template ID
      const publicKey = "nQa8Dl52tciDY0ZY5"; // Replace with your EmailJS public key

      const templateParams = {
        from_name: formData.full_name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "haidarahmad421@gmail.com",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setFormData({
        full_name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show loading state if translations aren't ready
  if (!ready) {
    return (
      <section className="w-full bg-[color:var(--color-secondary)] py-16 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <div className="text-[color:var(--color-accent)] font-zain">
            Loading...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-[color:var(--color-secondary)] py-22 px-6 ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Info */}
        <div
          className={`rounded-2xl bg-[color:var(--color-secondary-light)] p-8 shadow-lg shadow-black/20`}
        >
          <h2
            className={`text-3xl font-bold text-[color:var(--color-primary-light)] font-zain ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            {t("contact_page.info_title")}
          </h2>
          <p
            className={`mt-3 text-[color:var(--color-accent-muted)] font-zain ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            {t("contact_page.info_description")}
          </p>

          <div
            className={`mt-8 space-y-4 ${isRTL ? "text-right" : "text-left"}`}
          >
            <div>
              <p className="text-sm text-[color:var(--color-text-light)] font-zain">
                {t("contact_page.email")}
              </p>
              <p className="text-[color:var(--color-accent)] font-zain">
                haidarahmad421@gmail.com
              </p>
            </div>
            <div>
              <p className="text-sm text-[color:var(--color-text-light)] font-zain">
                {t("contact_page.phone")}
              </p>
              <p className="text-[color:var(--color-accent)] font-zain">
                +971 509 590 444
              </p>
            </div>
            <div>
              <p className="text-sm text-[color:var(--color-text-light)] font-zain">
                {t("contact_page.location")}
              </p>
              <p className="text-[color:var(--color-accent)] font-zain">
                Muscat, Oman
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div
          className={`rounded-2xl bg-[color:var(--color-accent)] p-8 shadow-lg shadow-black/20 ${
            isRTL ? "md:order-1" : "md:order-2"
          }`}
        >
          <h3
            className={`text-2xl font-bold text-[color:var(--color-text-primary)] mb-6 font-zain ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            {t("contact_page.form.title")}
          </h3>
          <form className="grid grid-cols-1 gap-5" onSubmit={handleSubmit}>
            <div>
              <label
                className={`block text-sm font-medium text-[color:var(--color-text-primary)] font-zain ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t("contact_page.form.full_name")}
              </label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleInputChange}
                required
                className={`mt-2 w-full rounded-xl border border-[color:var(--color-accent-muted)] bg-[color:var(--color-accent)] px-4 py-3 text-[color:var(--color-text-primary)] outline-none focus:border-[color:var(--color-primary)] focus:ring-2 focus:ring-[color:var(--color-primary)]/20 font-zain ${
                  isRTL ? "text-right" : "text-left"
                }`}
                placeholder={t("contact_page.form.name_placeholder")}
                dir={isRTL ? "rtl" : "ltr"}
              />
            </div>

            <div>
              <label
                className={`block text-sm font-medium text-[color:var(--color-text-primary)] font-zain ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t("contact_page.form.email")}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`mt-2 w-full rounded-xl border border-[color:var(--color-accent-muted)] bg-[color:var(--color-accent)] px-4 py-3 text-[color:var(--color-text-primary)] outline-none focus:border-[color:var(--color-primary)] focus:ring-2 focus:ring-[color:var(--color-primary)]/20 font-zain ${
                  isRTL ? "text-right" : "text-left"
                }`}
                placeholder={t("contact_page.form.email_placeholder")}
                dir="ltr"
              />
            </div>

            <div>
              <label
                className={`block text-sm font-medium text-[color:var(--color-text-primary)] font-zain ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t("contact_page.form.subject")}
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className={`mt-2 w-full rounded-xl border border-[color:var(--color-accent-muted)] bg-[color:var(--color-accent)] px-4 py-3 text-[color:var(--color-text-primary)] outline-none focus:border-[color:var(--color-primary)] focus:ring-2 focus:ring-[color:var(--color-primary)]/20 font-zain ${
                  isRTL ? "text-right" : "text-left"
                }`}
                placeholder={t("contact_page.form.subject_placeholder")}
                dir={isRTL ? "rtl" : "ltr"}
              />
            </div>

            <div>
              <label
                className={`block text-sm font-medium text-[color:var(--color-text-primary)] font-zain ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t("contact_page.form.message")}
              </label>
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className={`mt-2 w-full rounded-xl border border-[color:var(--color-accent-muted)] bg-[color:var(--color-accent)] px-4 py-3 text-[color:var(--color-text-primary)] outline-none focus:border-[color:var(--color-primary)] focus:ring-2 focus:ring-[color:var(--color-primary)]/20 resize-y font-zain ${
                  isRTL ? "text-right" : "text-left"
                }`}
                placeholder={t("contact_page.form.message_placeholder")}
                dir={isRTL ? "rtl" : "ltr"}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`group relative mt-2 inline-flex items-center justify-center rounded-xl bg-[color:var(--color-primary)] px-6 py-3 font-semibold text-[color:var(--color-accent)] shadow-md shadow-black/10 transition-all duration-300 hover:bg-[color:var(--color-primary-dark)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] font-zain disabled:opacity-50 disabled:cursor-not-allowed ${
                isRTL ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <span className="relative z-10">
                {isSubmitting
                  ? "Sending..."
                  : t("contact_page.form.send_button")}
              </span>
              <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25),rgba(255,255,255,0))]"></span>
              <span
                className={`${
                  isRTL ? "mr-2" : "ml-2"
                } inline-block h-2 w-2 rounded-full bg-[color:var(--color-accent)] group-hover:scale-125 transition-transform duration-300`}
              ></span>
            </button>

            {/* Success/Error Messages */}
            {submitStatus === "success" && (
              <div className="mt-4 p-4 rounded-xl bg-green-100 border border-green-300 text-green-800 font-zain">
                <p className={`${isRTL ? "text-right" : "text-left"}`}>
                  Message sent successfully! We'll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mt-4 p-4 rounded-xl bg-red-100 border border-red-300 text-red-800 font-zain">
                <p className={`${isRTL ? "text-right" : "text-left"}`}>
                  Sorry, there was an error sending your message. Please try
                  again or contact us directly.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
