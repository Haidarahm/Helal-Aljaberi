import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <div className="text-[color:var(--color-text-primary)] font-zain">
            Loading...
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="w-full bg-white">
      {/* Header Section */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center mb-16">
         
          <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[color:var(--color-primary)] mb-6 font-zain">
            {t("contact_page.title")}
          </h1>
          <p className="text-[color:var(--color-text-secondary)] font-zain text-lg xl:text-xl 2xl:text-2xl leading-relaxed max-w-3xl mx-auto">
            {t("contact_page.description")}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Info Section */}
          <div className="contact-info-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[color:var(--color-primary)]/10 to-[color:var(--color-primary)]/5 rounded-xl flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-[color:var(--color-primary)]" />
                </div>
                <h2 className="text-2xl xl:text-3xl font-bold text-[color:var(--color-primary)] font-zain">
                  {t("contact_page.info_title")}
                </h2>
              </div>

              <p className="text-[color:var(--color-text-secondary)] font-zain text-lg mb-8 leading-relaxed">
                {t("contact_page.info_description")}
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-[color:var(--color-primary)]/10 to-[color:var(--color-primary)]/5 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 text-[color:var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[color:var(--color-text-light)] font-zain mb-1">
                      {t("contact_page.email")}
                    </p>
                    <p className="text-[color:var(--color-text-primary)] font-semibold font-zain">
                      haidarahmad421@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-[color:var(--color-primary)]/10 to-[color:var(--color-primary)]/5 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5 text-[color:var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[color:var(--color-text-light)] font-zain mb-1">
                      {t("contact_page.phone")}
                    </p>
                    <p className="text-[color:var(--color-text-primary)] font-semibold font-zain">
                      +971 509 590 444
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-[color:var(--color-primary)]/10 to-[color:var(--color-primary)]/5 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[color:var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[color:var(--color-text-light)] font-zain mb-1">
                      {t("contact_page.location")}
                    </p>
                    <p className="text-[color:var(--color-text-primary)] font-semibold font-zain">
                      Muscat, Oman
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="contact-form-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[color:var(--color-primary)]/10 to-[color:var(--color-primary)]/5 rounded-xl flex items-center justify-center mr-4">
                  <Send className="w-6 h-6 text-[color:var(--color-primary)]" />
                </div>
                <h3 className="text-2xl xl:text-3xl font-bold text-[color:var(--color-primary)] font-zain">
                  {t("contact_page.form.title")}
                </h3>
              </div>
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
                    className={`mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[color:var(--color-text-primary)] outline-none focus:border-[color:var(--color-primary)] focus:ring-2 focus:ring-[color:var(--color-primary)]/20 font-zain transition-colors duration-200 ${
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
                    className={`mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[color:var(--color-text-primary)] outline-none focus:border-[color:var(--color-primary)] focus:ring-2 focus:ring-[color:var(--color-primary)]/20 font-zain transition-colors duration-200 ${
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
                    className={`mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[color:var(--color-text-primary)] outline-none focus:border-[color:var(--color-primary)] focus:ring-2 focus:ring-[color:var(--color-primary)]/20 font-zain transition-colors duration-200 ${
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
                  className="w-full pricing-button text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 font-zain text-lg transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    <span>
                      {isSubmitting
                        ? "Sending..."
                        : t("contact_page.form.send_button")}
                    </span>
                  </div>
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
        </div>
      </section>
    </div>
  );
}
