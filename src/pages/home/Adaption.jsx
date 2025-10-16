import React from "react";
import { Quote } from "lucide-react"; // npm install lucide-react

export const Adaptation = () => {
  return (
    <section className="flex items-center justify-center bg-white py-24 px-6">
      <div className="max-w-4xl bg-[color:var(--color-secondary)] rounded-2xl shadow-lg shadow-black/20 p-10 md:p-16 text-center flex flex-col items-center">
        {/* Quote Icon */}
        <Quote
          size={60}
          className="text-[color:var(--color-primary)] mb-6 opacity-90"
        />

        {/* Quote Text */}
        <p className="text-xl md:text-2xl font-medium leading-relaxed text-[color:var(--color-accent-muted)] italic">
          “Success is not just a goal, but a journey filled with challenges and
          learning. I always strive to help others discover and develop their
          potential to achieve lasting success.”
        </p>

        {/* Author */}
        <h4 className="mt-6 text-[color:var(--color-primary-light)] font-semibold text-lg">
          — Hilal Al-Jabri
        </h4>
      </div>
    </section>
  );
};
