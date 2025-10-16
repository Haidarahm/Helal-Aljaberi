import React from "react";
import aboutImg from "../../assets/home/aboutHome.png";

export default function About() {
  return (
    <section className="relative  bg-[color:var(--color-accent)] text-[color:var(--color-text-primary)] top-12">
      {/* Text content */}
      <div className="space-y-6 order-2 lg:order-1 w-full lg:w-1/2 ml-0 lg:ml-10 px-6 lg:px-0">
        <img
          src={aboutImg}
          alt="About"
          className="hidden lg:block w-2/3 helal-image absolute top-4 right-0 opacity-15 h-full object-cover"
        />
        <h2 className="text-3xl lg:text-4xl font-bold text-[color:var(--color-primary)]">
          About Hilal Al Jaberi
        </h2>
        <p className="text-[color:var(--color-text-secondary)] leading-relaxed">
          He is an entrepreneur and internationally certified financial analyst
          from the British Academy and locally accredited by the Emirates
          Training Institute. SMT is internationally accredited (USA, UK) in the
          field of training. Since 2017, he has specialized in investment and
          stock trading, and in startup and medium-sized enterprises. He has
          extensive experience in providing training and developing individuals.
          He has experience in successful businesses, including providing
          consulting to support projects and finding income-generating
          opportunities. Thanks to his success stories, he helps individuals and
          organizations build investment strategies and achieve financial
          sustainability.
        </p>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-[color:var(--color-primary)]">
            Why Hilal Al Jabri?
          </h3>
          <div className="space-y-2">
            <h4 className="text-xl font-semibold">His Goals</h4>
            <p className="text-[color:var(--color-text-secondary)] leading-relaxed">
              Hilal seeks to provide effective training programs that aim to
              enable trainees to acquire the skills and knowledge necessary to
              achieve success in their fields, with a focus on innovation and
              continuous development.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-semibold">His Message to the World</h4>
            <p className="text-[color:var(--color-text-secondary)] leading-relaxed">
              "Knowledge is power, and participating in the development of
              others is my message. I believe that investing in people is the
              greatest investment, and I always strive to help others discover
              their latent potential and achieve their goals."
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-semibold">
              Passion for Developing People
            </h4>
            <p className="text-[color:var(--color-text-secondary)] leading-relaxed">
              Hilal is committed to developing individuals and communities
              through his expertise in training and development. He believes in
              empowering individuals with practical skills and knowledge that
              help them improve their lives and achieve their dreams.
            </p>
          </div>
        </div>
      </div>

      {/* Image + stats */}
    </section>
  );
}
