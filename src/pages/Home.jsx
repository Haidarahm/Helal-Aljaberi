export default function Home() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-[color:var(--color-secondary)]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[color:var(--color-secondary)] opacity-70"></div>
      </div>

      {/* Content Container */}
      <div className="container mt-4 mx-auto px-6 lg:px-12 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
          {/* Left Side - Text Content */}
          <div className="space-y-6 lg:space-y-6">
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

            <div className="flex gap-4 pt-4">
              <button className="px-8 py-4 bg-[color:var(--color-primary)] text-[color:var(--color-secondary)] font-semibold rounded-lg hover:bg-[color:var(--color-primary-dark)] transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-[color:var(--color-primary)] text-[color:var(--color-primary)] font-semibold rounded-lg hover:bg-[color:var(--color-primary)] hover:text-[color:var(--color-secondary)] transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Image Space (full height) */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Triangle Shapes at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          className="w-full h-32 lg:h-40"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* Large triangle pointing up */}
          <polygon
            points="0,120 600,20 1200,120"
            fill="var(--color-primary)"
            opacity="0.9"
          />
          {/* Medium triangle */}
          <polygon
            points="200,120 500,60 800,120"
            fill="var(--color-primary-dark)"
            opacity="0.7"
          />
          {/* Small accent triangles */}
          <polygon
            points="0,120 150,80 300,120"
            fill="var(--color-primary-light)"
            opacity="0.5"
          />
          <polygon
            points="900,120 1050,80 1200,120"
            fill="var(--color-primary-light)"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Animated floating elements */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-[color:var(--color-primary-dark)] rounded-full opacity-50 animate-pulse"></div>
      <div
        className="absolute top-1/3 right-1/3 w-3 h-3 bg-[color:var(--color-primary)] rounded-full opacity-40 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-[color:var(--color-primary)] rounded-full opacity-30 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
}
