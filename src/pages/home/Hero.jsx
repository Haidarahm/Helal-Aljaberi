import helal from "../../assets/image2.webp";
import background from "../../assets/back.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out-quart", once: false });
  }, []);

  return (
    <div className="relative h-[90vh] md:h-screen flex items-center overflow-hidden bg-[color:var(--color-secondary)]">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={background} className="w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-secondary)]/95 via-[color:var(--color-secondary)]/85 to-[color:var(--color-primary-dark)]/50"></div>
      </div>

      {/* Left: Content */}
      <div className="left-section flex flex-col gap-5 w-full md:w-1/2 relative z-20 px-6 md:px-10">
        <h1
          className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[color:var(--color-primary)] tracking-tight drop-shadow-md"
          data-aos="fade-up"
        >
          Master the Art of Trading
        </h1>
        <h2
          className="text-xl md:text-2xl lg:text-3xl font-semibold text-[color:var(--color-primary-light)] drop-shadow"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Your Gateway to Financial Freedom
        </h2>
        <p
          className="text-base md:text-lg lg:text-xl text-[color:var(--color-accent)]/95 leading-relaxed md:leading-8 max-w-xl drop-shadow"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Join thousands of successful traders who have transformed their
          financial future. Our advanced platform combines cutting-edge
          technology with expert insights to help you make informed trading
          decisions and maximize your returns.
        </p>
        <div className="flex gap-4" data-aos="fade-up" data-aos-delay="300">
          <button className="group relative px-7 py-3 md:px-8 md:py-4 rounded-xl bg-[color:var(--color-primary)] text-[color:var(--color-secondary)] font-semibold shadow-md shadow-black/10 transition-all duration-300 hover:bg-[color:var(--color-primary-dark)]">
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25),rgba(255,255,255,0))]"></span>
          </button>
          <button className="px-7 py-3 md:px-8 md:py-4 rounded-xl border-2 border-[color:var(--color-primary)] text-[color:var(--color-primary)] font-semibold transition-all duration-300 hover:bg-[color:var(--color-primary)] hover:text-[color:var(--color-secondary)]">
            Learn More
          </button>
        </div>
      </div>

      {/* Right: Image */}
      <div
        className="right-section h-full relative z-20 w-0 md:w-1/2"
        data-aos="fade-left"
        data-aos-delay="150"
      >
        <div className="container-image relative h-full w-full">
          <img
            src={helal}
            alt="Helal"
            className="h-full w-full object-cover opacity-95 md:absolute md:left-12"
          />
        </div>
      </div>
    </div>
  );
}
