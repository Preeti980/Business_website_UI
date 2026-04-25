"use client";

import { useEffect, useRef } from "react";
import {
  Palette,
  Code2,
  LineChart,
  Monitor,
  Camera,
  Search,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    desc: "We craft compelling brand identities that resonate with your audience and stand out in a crowded market.",
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
    delay: 0,
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "We build fast, scalable, and secure web applications using modern technologies and best practices.",
    color: "from-brand-500 to-brand-700",
    bg: "bg-brand-50",
    iconColor: "text-brand-600",
    delay: 100,
  },
  {
    icon: LineChart,
    title: "Business Strategy",
    desc: "Data-driven strategies that align your digital presence with your core business objectives.",
    color: "from-green-500 to-teal-500",
    bg: "bg-green-50",
    iconColor: "text-green-600",
    delay: 200,
  },
  {
    icon: Monitor,
    title: "Web Design",
    desc: "Stunning, user-centered designs that captivate visitors and drive meaningful conversions.",
    color: "from-orange-500 to-accent",
    bg: "bg-orange-50",
    iconColor: "text-orange-600",
    delay: 300,
  },
  {
    icon: Camera,
    title: "Photography",
    desc: "Professional photography services that bring your brand story to life through stunning visuals.",
    color: "from-cyan-500 to-blue-500",
    bg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    delay: 400,
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Boost your online visibility and drive organic traffic with our proven SEO strategies.",
    color: "from-rose-500 to-pink-500",
    bg: "bg-rose-50",
    iconColor: "text-rose-600",
    delay: 500,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
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
      id="services"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="What We Do"
          title="Our Core Services"
          subtitle="We deliver end-to-end digital solutions tailored to your unique needs, combining creativity with technology to achieve outstanding results."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="reveal card-hover group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:border-brand-100 relative overflow-hidden"
                style={{ transitionDelay: `${service.delay}ms` }}
              >
                {/* Top gradient line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div
                  className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={26} className={service.iconColor} />
                </div>

                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {service.desc}
                </p>

                <div className="mt-5 flex items-center gap-1.5 text-brand-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
