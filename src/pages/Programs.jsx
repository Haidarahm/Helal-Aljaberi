export default function Programs() {
  const programs = [
    {
      title: "Turning Personal Identities into Additional Income",
      subtitle: "Transform your passions into profit",
      description:
        "Learn how to identify your unique skills and turn them into additional income sources that align with your personal brand.",
      image:
        "https://i.pinimg.com/736x/4d/0a/2c/4d0a2c44b3cb502661fdc928a0e2af63.jpg",
    },
    {
      title: "Key Principles of Investment",
      subtitle: "Master the foundations of smart investing",
      description:
        "Understand how to build long-term wealth through intelligent investment strategies and market insights.",
      image:
        "https://i.pinimg.com/736x/9a/3d/40/9a3d40d34a6f9e5dbfc1f87e2e99b6d3.jpg",
    },
    {
      title: "Developing Start-up Projects",
      subtitle: "From idea to sustainable business",
      description:
        "Explore how to launch, develop, and scale start-ups with practical strategies and proven business models.",
      image:
        "https://i.pinimg.com/736x/2f/53/41/2f5341e88a3e6c3e69da38b4bcb3cb50.jpg",
    },
    {
      title: "Public Speaking with Confidence",
      subtitle: "Speak, inspire, and lead",
      description:
        "Build confidence, enhance your speaking presence, and engage your audience with powerful communication techniques.",
      image:
        "https://i.pinimg.com/736x/8e/51/1c/8e511c305f1b1e70364a1d42c5dc8c02.jpg",
    },
    {
      title: "Building Reputation and Branding",
      subtitle: "Create a brand that speaks for you",
      description:
        "Learn how to build a strong reputation and personal brand that attracts opportunities and builds trust.",
      image:
        "https://i.pinimg.com/736x/f2/0b/41/f20b41c22d0b5aab42c0f09ab8d73e7b.jpg",
    },
    {
      title: "Getting Out of Debt and Investing from Salary",
      subtitle: "Smart money management for real freedom",
      description:
        "Discover step-by-step methods to manage debt, save effectively, and start investing wisely from your monthly income.",
      image:
        "https://i.pinimg.com/736x/7a/cc/17/7acc17ff2e4c7f7817ad47b41f00373c.jpg",
    },
    {
      title: "Finding Additional Income Sources",
      subtitle: "Expand your earning potential",
      description:
        "Explore creative and sustainable ways to generate multiple income streams that support your financial goals.",
      image:
        "https://i.pinimg.com/736x/14/97/64/149764c8ab4c6ce8f97c27806a22c3b9.jpg",
    },
  ];

  return (
    <div className="bg-secondary text-accent py-16 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-primary text-center mb-4">
        Programs
      </h1>
      <p className="text-text-light text-center max-w-2xl mx-auto mb-12">
        Browse my professional training workshops and courses designed to
        enhance your skills, mindset, and career growth.
      </p>

      <div className="space-y-16">
        {programs.map((program, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between bg-secondary-light rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-semibold text-primary mb-2">
                {program.title}
              </h2>
              <h3 className="text-lg text-text-light mb-4">
                {program.subtitle}
              </h3>
              <p className="text-text-secondary mb-6">{program.description}</p>
              <button className="bg-primary hover:bg-primary-dark text-accent font-medium py-2 px-5 rounded-xl transition">
                Enroll Now
              </button>
            </div>

            <div className="md:w-1/2">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-80 object-cover md:rounded-none md:rounded-r-2xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
