import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/images/1.jpeg";
import img2 from "../assets/images/2.jpeg";
import img3 from "../assets/images/3.jpeg";
import img4 from "../assets/images/4.jpeg";
import img5 from "../assets/images/5.jpeg";
import img6 from "../assets/images/6.jpeg";
import img7 from "../assets/images/7.jpeg";

export default function Programs() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out-quart", once: false });
    AOS.refresh();
  }, []);
  const images = [img1, img2, img3, img4, img5, img6, img7];

  const programs = [
    {
      title: "Turning Personal Identities into Additional Income",
      subtitle: "Transform your passions into profit",
      description:
        "Learn how to identify your unique skills and turn them into additional income sources that align with your personal brand.",
    },
    {
      title: "Key Principles of Investment",
      subtitle: "Master the foundations of smart investing",
      description:
        "Understand how to build long-term wealth through intelligent investment strategies and market insights.",
    },
    {
      title: "Developing Start-up Projects",
      subtitle: "From idea to sustainable business",
      description:
        "Explore how to launch, develop, and scale start-ups with practical strategies and proven business models.",
    },
    {
      title: "Public Speaking with Confidence",
      subtitle: "Speak, inspire, and lead",
      description:
        "Build confidence, enhance your speaking presence, and engage your audience with powerful communication techniques.",
    },
    {
      title: "Building Reputation and Branding",
      subtitle: "Create a brand that speaks for you",
      description:
        "Learn how to build a strong reputation and personal brand that attracts opportunities and builds trust.",
    },
    {
      title: "Getting Out of Debt and Investing from Salary",
      subtitle: "Smart money management for real freedom",
      description:
        "Discover step-by-step methods to manage debt, save effectively, and start investing wisely from your monthly income.",
    },
    {
      title: "Finding Additional Income Sources",
      subtitle: "Expand your earning potential",
      description:
        "Explore creative and sustainable ways to generate multiple income streams that support your financial goals.",
    },
  ];

  const programsWithImages = programs.map((p, i) => ({
    ...p,
    image: images[i % images.length],
  }));

  return (
    <div className="bg-secondary text-accent py-16 px-6 md:px-20 overflow-hidden">
      <h1 className="text-4xl font-bold text-primary text-center mb-4">
        Programs
      </h1>
      <p className="text-text-light text-center max-w-2xl mx-auto mb-12">
        Browse my professional training workshops and courses designed to
        enhance your skills, mindset, and career growth.
      </p>

      <div className="space-y-16">
        {programsWithImages.map((program, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between bg-secondary-light rounded-2xl shadow-lg overflow-hidden"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
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
