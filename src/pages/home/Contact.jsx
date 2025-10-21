import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const contactItems = [
    {
      icon: Mail,
      title: t("contact.email"),
      value: "He779@hotmail.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: t("contact.phone"),
      value: "+971 509 590 444",
      description: "Call us for immediate assistance",
    },
    {
      icon: MapPin,
      title: t("contact.location"),
      value: "Muscat, Oman",
      description: "Visit our office location",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-primary-dark)] rounded-full mb-6">
            <span className="text-2xl font-bold text-white font-zain">📧</span>
          </div>
          <h2 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[color:var(--color-primary)] mb-6 font-zain">
            {t("contact.title")}
          </h2>
          <p className="text-[color:var(--color-text-secondary)] font-zain text-lg xl:text-xl 2xl:text-2xl leading-relaxed max-w-3xl mx-auto">
            {t("contact.description")}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group contact-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 overflow-hidden"
              >
                {/* Card Header */}
                <div className="p-8 pb-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--color-primary)]/10 to-[color:var(--color-primary)]/5 rounded-2xl flex items-center justify-center group-hover:from-[color:var(--color-primary)]/20 group-hover:to-[color:var(--color-primary)]/10 transition-all duration-300">
                      <Icon className="w-8 h-8 text-[color:var(--color-primary)]" />
                    </div>
                  </div>

                  <h3 className="text-xl xl:text-2xl font-bold text-[color:var(--color-primary)] mb-3 font-zain text-center">
                    {item.title}
                  </h3>

                  <p className="text-[color:var(--color-text-primary)] font-semibold font-zain text-center mb-2 text-lg">
                    {item.value}
                  </p>

                  <p className="text-[color:var(--color-text-secondary)] font-zain text-center text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[color:var(--color-primary)]/10 to-[color:var(--color-primary)]/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl xl:text-3xl font-bold text-[color:var(--color-primary)] mb-4 font-zain">
              Ready to Start Your Journey?
            </h3>
            <p className="text-[color:var(--color-text-secondary)] font-zain text-lg mb-6">
              Get in touch with us today and let's discuss how we can help you
              achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-[color:var(--color-text-secondary)] font-zain">
                <span className="w-2 h-2 bg-[color:var(--color-primary)] rounded-full mr-3"></span>
                Free consultation
              </div>
              <div className="flex items-center text-[color:var(--color-text-secondary)] font-zain">
                <span className="w-2 h-2 bg-[color:var(--color-primary)] rounded-full mr-3"></span>
                Flexible scheduling
              </div>
              <div className="flex items-center text-[color:var(--color-text-secondary)] font-zain">
                <span className="w-2 h-2 bg-[color:var(--color-primary)] rounded-full mr-3"></span>
                Expert guidance
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
