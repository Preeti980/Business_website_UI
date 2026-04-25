"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    name: "Alex Chohan",
    role: "Director, Accurate Themes",
    quote:
      "Monoline transformed our digital presence completely. Their team delivered beyond expectations — a truly world-class experience from start to finish.",
    rating: 5,
    initials: "AC",
    color: "from-brand-500 to-brand-700",
  },
  {
    name: "Johnson Brown",
    role: "Marketing Head, Spyro Themes",
    quote:
      "The brand identity they built for us has been a game-changer. We saw a 40% increase in brand recognition within just three months.",
    rating: 5,
    initials: "JB",
    color: "from-purple-500 to-indigo-600",
  },
  {
    name: "Devid Miller",
    role: "Founder, Theme Ocean",
    quote:
      "Professional, responsive, and incredibly talented. Monoline is the only agency we'll ever work with. They simply get it.",
    rating: 5,
    initials: "DM",
    color: "from-green-500 to-teal-600",
  },
  {
    name: "Maya Khan",
    role: "Chairman, Web Template",
    quote:
      "Their SEO work helped us rank #1 for our top 20 keywords. Revenue from organic traffic grew by 180% in just six months.",
    rating: 5,
    initials: "MK",
    color: "from-orange-500 to-rose-500",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-50 rounded-full blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Client Love"
          title="From Our Clients"
          subtitle="Real words from real clients who've experienced the Monoline difference."
        />

        <div
          className={`mt-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Featured testimonial */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="relative">
              <Quote
                size={60}
                className="text-brand-100 mx-auto mb-6"
                fill="currentColor"
              />
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light italic">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonials[active].color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}
              >
                {testimonials[active].initials}
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">
                  {testimonials[active].name}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonials[active].role}
                </div>
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
          </div>

          {/* Carousel nav */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === active
                      ? "w-8 h-2.5 bg-brand-600"
                      : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* All testimonials grid below */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                onClick={() => setActive(i)}
                className={`testimonial-card p-5 cursor-pointer transition-all duration-300 ${
                  i === active
                    ? "ring-2 ring-brand-500 ring-offset-2"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                  {t.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
