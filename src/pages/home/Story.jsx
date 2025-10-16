import React from "react";
import story from "../../assets/home/story.png";

export const Story = () => {
  return (
    <section className="relative flex flex-col md:flex-row h-screen w-full overflow-hidden bg-[color:var(--color-secondary)] text-white">
      {/* Left Content */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-16 py-10 z-10">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-5xl font-bold text-[color:var(--color-primary)] mb-6">
            Success Stories
          </h2>
          <p className="text-base md:text-lg text-[color:var(--color-accent-muted)] leading-relaxed">
            Hilal Al-Jabri began his career as a police officer, where he gained
            solid experience in criminal investigations and field work. After
            years of excellence in this field, Hilal felt a passion to develop
            his skills and share his expertise with others. He decided to pursue
            a career in training. Through his dedication to continuous learning
            and the acquisition of numerous locally and internationally
            accredited certifications, Hilal has become a recognized trainer,
            specializing in trading, crisis management, and self-development.
            Hilal has established a strong reputation for delivering outstanding
            training courses, helping numerous individuals achieve their goals
            and develop their capabilities.
          </p>
        </div>
      </div>

      {/* Right Image Background */}
      <div className="flex-1 relative">
        <img
          src={story}
          alt="Success Story Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
    </section>
  );
};
