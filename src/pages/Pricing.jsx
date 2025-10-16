import { Briefcase, Building2, Users } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      category: "Small Institutes & Organizations",
      icon: Users,
      items: [
        {
          title: "General / Specialized Consultation (1 Hour)",
          price: "1,000 AED",
          desc: "Receive expert advice tailored to your needs for personal or organizational growth.",
        },
        {
          title: "One-Hour Training Workshop",
          price: "3,500 AED",
          desc: "A focused, practical session delivering actionable skills and insights.",
        },
        {
          title: "One-Day Training Workshop",
          price: "5,000 AED",
          desc: "Comprehensive one-day workshop to build and refine essential professional skills.",
        },
        {
          title: "One-Day Training Course",
          price: "8,000 AED",
          desc: "A full-day intensive course designed for measurable development outcomes.",
        },
      ],
    },
    {
      category: "Medium Companies",
      icon: Building2,
      items: [
        {
          title: "Full Training Program (1 Week)",
          price: "20,000 AED",
          desc: "An in-depth, week-long training experience designed for organizational improvement.",
        },
      ],
    },
    {
      category: "Large Companies",
      icon: Briefcase,
      items: [
        {
          title: "Full Training Program (1 Day)",
          price: "40,000 AED",
          desc: "A premium corporate training session focused on leadership, strategy, and performance.",
        },
      ],
    },
  ];

  return (
    <section className="bg-secondary text-accent py-16 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-primary text-center mb-4">
        Pricing
      </h1>
      <p className="text-text-light text-center max-w-2xl mx-auto mb-12">
        Explore flexible training packages tailored for institutes, companies,
        and individuals — designed to maximize value and growth.
      </p>

      <div className="space-y-10">
        {plans.map((plan, i) => (
          <div key={i} className="bg-secondary-light rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <plan.icon className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-2xl font-semibold text-primary">
                {plan.category}
              </h2>
            </div>

            <div className="space-y-6">
              {plan.items.map((item, j) => (
                <div
                  key={j}
                  className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-secondary-light pb-4"
                >
                  <div className="md:w-3/4">
                    <h3 className="text-lg font-medium text-accent mb-1">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex flex-col items-end md:flex-row md:items-center gap-3 mt-3 md:mt-0">
                    <span className="text-primary text-xl font-bold">
                      {item.price}
                    </span>
                    <button className="bg-primary hover:bg-primary-dark text-accent font-medium py-2 px-4 rounded-xl transition">
                      Subscribe
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
