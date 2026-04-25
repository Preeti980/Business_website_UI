"use client";

import { useEffect, useRef } from "react";
import { Check, Zap } from "lucide-react";
import SectionHeader from "./SectionHeader";

const plans = [
  {
    name: "Starter",
    price: 49,
    desc: "Perfect for small businesses just getting started with their digital presence.",
    features: [
      "5 Page Website",
      "Basic SEO Setup",
      "Mobile Responsive",
      "Contact Form",
      "1 Revision Round",
      "2 Weeks Delivery",
    ],
    cta: "Get Started",
    popular: false,
    gradient: "from-gray-100 to-gray-50",
    border: "border-gray-200",
  },
  {
    name: "Professional",
    price: 149,
    desc: "For growing businesses that need a robust online presence and marketing edge.",
    features: [
      "Up to 15 Pages",
      "Advanced SEO",
      "Custom Animations",
      "CMS Integration",
      "3 Revision Rounds",
      "4 Weeks Delivery",
      "Analytics Dashboard",
      "Priority Support",
    ],
    cta: "Most Popular",
    popular: true,
    gradient: "from-brand-600 to-brand-800",
    border: "border-brand-500",
  },
  {
    name: "Enterprise",
    price: 399,
    desc: "Full-service digital transformation for established brands demanding excellence.",
    features: [
      "Unlimited Pages",
      "Full SEO Strategy",
      "Custom Development",
      "API Integrations",
      "Unlimited Revisions",
      "Dedicated Manager",
      "Monthly Reporting",
      "24/7 Support",
    ],
    cta: "Contact Us",
    popular: false,
    gradient: "from-gray-100 to-gray-50",
    border: "border-gray-200",
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Pricing"
          title="Simple, Transparent Pricing"
          subtitle="No hidden fees. Choose the plan that fits your needs and scale as you grow."
        />

        <div className="grid md:grid-cols-3 gap-7 mt-14 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal relative rounded-3xl overflow-hidden border-2 transition-all duration-300 ${
                plan.popular
                  ? "border-brand-500 shadow-2xl shadow-brand-200/40 scale-105"
                  : `${plan.border} shadow-sm hover:shadow-lg`
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white text-brand-700 text-xs font-bold px-3 py-1 rounded-full shadow">
                  <Zap size={11} className="fill-brand-500 text-brand-500" />
                  Popular
                </div>
              )}

              {/* Header */}
              <div
                className={`bg-gradient-to-br ${plan.gradient} p-7 ${
                  plan.popular ? "pb-8" : ""
                }`}
              >
                <h3
                  className={`font-heading font-bold text-xl mb-1 ${
                    plan.popular ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-5 ${
                    plan.popular ? "text-brand-200" : "text-gray-500"
                  }`}
                >
                  {plan.desc}
                </p>
                <div className="flex items-end gap-1">
                  <span
                    className={`font-heading font-bold text-5xl ${
                      plan.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className={`mb-2 text-sm ${
                      plan.popular ? "text-brand-200" : "text-gray-400"
                    }`}
                  >
                    /mo
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white p-7 flex flex-col flex-1">
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          plan.popular ? "bg-brand-100" : "bg-green-50"
                        }`}
                      >
                        <Check
                          size={12}
                          className={
                            plan.popular ? "text-brand-600" : "text-green-600"
                          }
                          strokeWidth={3}
                        />
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 ${
                    plan.popular
                      ? "bg-gradient-to-r from-brand-600 to-brand-700 text-white shadow-lg shadow-brand-200 hover:shadow-brand-300"
                      : "border-2 border-gray-200 text-gray-700 hover:border-brand-500 hover:text-brand-600"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
