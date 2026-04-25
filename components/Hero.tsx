"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Play, Star, Users, Briefcase } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const items = el.querySelectorAll(".hero-animate");
    items.forEach((item, i) => {
      setTimeout(() => {
        (item as HTMLElement).style.opacity = "1";
        (item as HTMLElement).style.transform = "translateY(0)";
      }, i * 150);
    });
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen hero-gradient flex items-center overflow-hidden pt-20"
    >
      {/* Background decorative shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-brand-100/60 rounded-full blur-3xl float-shape" />
        <div
          className="absolute bottom-1/3 left-1/5 w-48 h-48 bg-accent/10 rounded-full blur-2xl float-shape"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-10 w-32 h-32 bg-brand-200/40 rounded-full blur-xl float-shape"
          style={{ animationDelay: "4s" }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #006fc6 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Decorative lines */}
        <svg
          className="absolute top-0 right-0 w-1/2 h-full opacity-10"
          viewBox="0 0 600 800"
          fill="none"
        >
          <circle
            cx="500"
            cy="200"
            r="300"
            stroke="#006fc6"
            strokeWidth="1"
            strokeDasharray="8 8"
          />
          <circle
            cx="500"
            cy="200"
            r="200"
            stroke="#006fc6"
            strokeWidth="1"
            strokeDasharray="6 12"
          />
          <circle
            cx="500"
            cy="200"
            r="100"
            stroke="#006fc6"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left content */}
        <div className="space-y-8">
          {/* Badge */}
          <div
            className="hero-animate inline-flex items-center gap-2 bg-brand-50 border border-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            <Star size={14} className="fill-brand-500 text-brand-500" />
            Award-Winning Digital Agency
          </div>

          {/* Headline */}
          <h1
            className="hero-animate font-heading text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-gray-900"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            We Are a{" "}
            <span className="gradient-text">Full Service</span>{" "}
            <br />
            Digital Company
          </h1>

          {/* Subtext */}
          <p
            className="hero-animate text-gray-500 text-lg leading-relaxed max-w-lg"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            We craft exceptional digital experiences that drive growth, build
            brands, and create lasting impressions. From strategy to execution,
            we&apos;ve got you covered.
          </p>

          {/* CTA Buttons */}
          <div
            className="hero-animate flex flex-wrap gap-4"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            <a
              href="#services"
              className="group flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-brand-600 to-brand-700 text-white font-semibold rounded-2xl shadow-lg shadow-brand-200 hover:shadow-brand-300 hover:-translate-y-0.5 transition-all duration-200"
            >
              Explore Services
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#portfolio"
              className="group flex items-center gap-2 px-7 py-4 bg-white text-gray-700 font-semibold rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-gray-100 transition-all duration-200"
            >
              <Play size={16} className="fill-accent text-accent" />
              View Our Work
            </a>
          </div>

          {/* Stats strip */}
          <div
            className="hero-animate flex gap-8 pt-4 border-t border-gray-100"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            {[
              { icon: Users, value: "32K+", label: "Happy Clients" },
              { icon: Briefcase, value: "21K+", label: "Projects Done" },
              { icon: Star, value: "4.9/5", label: "Average Rating" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center">
                  <Icon size={16} className="text-brand-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{value}</div>
                  <div className="text-gray-400 text-xs">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div
          className="hero-animate relative"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          {/* Main card */}
          <div className="relative bg-white rounded-3xl shadow-2xl shadow-blue-100/50 overflow-hidden border border-gray-100">
            {/* Header bar */}
            <div className="bg-gradient-to-r from-brand-600 to-brand-800 px-6 py-4 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white/20 rounded-full h-6 mx-4 flex items-center px-3">
                <span className="text-white/70 text-xs">monoline.studio</span>
              </div>
            </div>

            {/* Mock website content */}
            <div className="p-6 space-y-4">
              <div className="h-4 bg-gradient-to-r from-brand-100 to-brand-50 rounded-full w-3/4" />
              <div className="h-3 bg-gray-100 rounded-full w-full" />
              <div className="h-3 bg-gray-100 rounded-full w-5/6" />
              <div className="grid grid-cols-3 gap-3 mt-4">
                {["bg-brand-100", "bg-accent/20", "bg-green-100"].map(
                  (color, i) => (
                    <div
                      key={i}
                      className={`${color} rounded-xl h-20 flex items-center justify-center`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/70 shadow-sm" />
                    </div>
                  )
                )}
              </div>
              <div className="flex gap-3">
                <div className="h-8 bg-brand-600 rounded-xl flex-1" />
                <div className="h-8 bg-gray-100 rounded-xl w-16" />
              </div>
              <div className="space-y-2">
                {[75, 60, 85].map((w, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-16 h-2 bg-gray-100 rounded-full" />
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-brand-500 to-brand-600 rounded-full"
                        style={{ width: `${w}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400">{w}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating badge 1 */}
          <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3 float-shape">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
              <span className="text-xl">🚀</span>
            </div>
            <div>
              <div className="font-bold text-gray-900 text-sm">Project Live</div>
              <div className="text-gray-400 text-xs">Just deployed</div>
            </div>
          </div>

          {/* Floating badge 2 */}
          <div
            className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3 float-shape"
            style={{ animationDelay: "3s" }}
          >
            <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center">
              <Users size={18} className="text-brand-600" />
            </div>
            <div>
              <div className="font-bold text-gray-900 text-sm">+1,240</div>
              <div className="text-gray-400 text-xs">New visitors today</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C360,60 1080,20 1440,40 L1440,60 L0,60 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
