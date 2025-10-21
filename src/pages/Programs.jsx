import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";
import PricingModal from "../components/PricingModal";
import img1 from "../assets/images/1.jpeg";
import img2 from "../assets/images/2.jpeg";
import img3 from "../assets/images/3.jpeg";
import img4 from "../assets/images/4.jpeg";
import img5 from "../assets/images/5.jpeg";
import img6 from "../assets/images/6.jpeg";
import img7 from "../assets/images/7.jpeg";

export default function Programs() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out-quart", once: false });
    AOS.refresh();
  }, []);

  const handleEnrollClick = () => {
    setIsPricingModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsPricingModalOpen(false);
  };

  const images = [img1, img2, img3, img4, img5, img6, img7];
  const programs = t("programs.programs", { returnObjects: true });

  const programsWithImages = programs.map((p, i) => ({
    ...p,
    image: images[i % images.length],
  }));

  return (
    <div className="bg-[color:var(--color-secondary)] text-[color:var(--color-accent)] py-16 px-6 md:px-20 overflow-hidden">
      <h1
        className={`text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[color:var(--color-primary)] text-center mb-4 font-zain`}
      >
        {t("programs.title")}
      </h1>
      <p
        className={`text-[color:var(--color-text-light)] text-center max-w-2xl mx-auto mb-12 font-zain text-base xl:text-lg 2xl:text-xl`}
      >
        {t("programs.description")}
      </p>

      <div className="space-y-16">
        {programsWithImages.map((program, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-between bg-[color:var(--color-secondary-light)] rounded-2xl shadow-lg overflow-hidden ${
              isRTL ? "md:flex-row-reverse" : "md:flex-row"
            }`}
            data-aos={
              index % 2 === 0
                ? isRTL
                  ? "fade-left"
                  : "fade-right"
                : isRTL
                ? "fade-right"
                : "fade-left"
            }
          >
            <div
              className={`md:w-1/2 p-8 ${isRTL ? "md:order-2" : "md:order-1"}`}
            >
              <h2
                className={`text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-[color:var(--color-primary)] mb-2 font-zain ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {program.title}
              </h2>
              <h3
                className={`text-lg xl:text-xl 2xl:text-2xl text-[color:var(--color-text-light)] mb-4 font-zain ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {program.subtitle}
              </h3>
              <p
                className={`text-[color:var(--color-text-secondary)] mb-6 font-zain text-sm xl:text-base 2xl:text-lg ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {program.description}
              </p>
              <button
                onClick={handleEnrollClick}
                className={`bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary-dark)] text-[color:var(--color-accent)] font-medium py-2 px-5 xl:py-3 xl:px-6 2xl:py-4 2xl:px-8 rounded-xl transition font-zain text-sm xl:text-base 2xl:text-lg ${
                  isRTL ? "mr-auto" : "ml-0"
                }`}
              >
                {t("programs.enroll_button")}
              </button>
            </div>

            <div className={`md:w-1/2 ${isRTL ? "md:order-1" : "md:order-2"}`}>
              <img
                src={program.image}
                alt={program.title}
                className={`w-full h-80 object-cover ${
                  isRTL
                    ? "md:rounded-none md:rounded-l-2xl"
                    : "md:rounded-none md:rounded-r-2xl"
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pricing Modal */}
      <PricingModal isOpen={isPricingModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
