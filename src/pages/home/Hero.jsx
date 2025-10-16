import helal from "../../assets/image2.png";
export default function Hero() {
  return (
    <div className="relative  h-screen flex items-center overflow-hidden bg-[color:var(--color-secondary)]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-secondary)]/95 via-[color:var(--color-secondary)]/85 to-[color:var(--color-primary-dark)]/60"></div>
      </div>
      <div className="left-section flex flex-col gap-6 w-1/2 relative z-20 px-6">
        <h1 className="text-5xl lg:text-7xl font-bold text-[color:var(--color-primary)] ">
          Master the Art of Trading
        </h1>
        <h2 className="text-2xl lg:text-3xl font-semibold text-[color:var(--color-primary-light)]">
          Your Gateway to Financial Freedom
        </h2>
        <p className="text-lg lg:text-xl text-[color:var(--color-accent)] leading-relaxed max-w-xl">
          Join thousands of successful traders who have transformed their
          financial future. Our advanced platform combines cutting-edge
          technology with expert insights to help you make informed trading
          decisions and maximize your returns.
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-4 bg-[color:var(--color-primary)] text-[color:var(--color-secondary)] font-semibold rounded-lg hover:bg-[color:var(--color-primary-dark)] transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
          <button className="px-8 py-4 border-2 border-[color:var(--color-primary)] text-[color:var(--color-primary)] font-semibold rounded-lg hover:bg-[color:var(--color-primary)] hover:text-[color:var(--color-secondary)] transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
      <div className="right-section h-full  relative z-20 w-1/2">
        <div className="container-image relative h-full w-full">
          <img
            src={helal}
            alt="Helal"
            className="h-full w-full object-cover opacity-95 absolute left-12 "
          />
        </div>
      </div>
      */
    </div>
  );
}
