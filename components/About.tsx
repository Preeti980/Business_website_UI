"use client";

import { useEffect, useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const highlights = [
  "Strategic brand development & positioning",
  "User-centered design thinking approach",
  "Agile development methodology",
  "Data-driven performance optimization",
  "Continuous post-launch support",
];

const skills = [
  { label: "Web Design", value: 92 },
  { label: "Branding", value: 78 },
  { label: "Mobile App", value: 85 },
  { label: "Digital Marketing", value: 70 },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Animate progress bars
            const bars = entry.target.querySelectorAll(".progress-bar");
            bars.forEach((bar) => {
              const target = (bar as HTMLElement).dataset.width;
              setTimeout(() => {
                (bar as HTMLElement).style.width = `${target}%`;
              }, 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-50 rounded-full blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Top section: image + text */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Visual */}
          <div className="reveal relative">
            {/* Main image mock */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-50 to-brand-100 aspect-[4/3] flex items-center justify-center">
              {/* Office scene SVG illustration */}
              <svg viewBox="0 0 500 375" className="w-4/5" fill="none">
                {/* Desk */}
                <rect x="80" y="250" width="340" height="15" rx="4" fill="#d1e8ff" />
                {/* Monitor */}
                <rect x="170" y="140" width="160" height="105" rx="8" fill="#1a56db" />
                <rect x="178" y="148" width="144" height="89" rx="4" fill="#3b82f6" />
                <rect x="245" y="246" width="10" height="10" rx="2" fill="#d1e8ff" />
                <rect x="220" y="256" width="60" height="6" rx="3" fill="#d1e8ff" />
                {/* Screen content */}
                <rect x="188" y="158" width="80" height="6" rx="3" fill="white" fillOpacity="0.7" />
                <rect x="188" y="170" width="124" height="4" rx="2" fill="white" fillOpacity="0.4" />
                <rect x="188" y="180" width="110" height="4" rx="2" fill="white" fillOpacity="0.4" />
                <rect x="188" y="195" width="50" height="14" rx="3" fill="white" fillOpacity="0.2" />
                <rect x="244" y="195" width="50" height="14" rx="3" fill="#60a5fa" fillOpacity="0.8" />
                {/* Keyboard */}
                <rect x="170" y="242" width="90" height="10" rx="3" fill="#93c5fd" />
                {/* Mouse */}
                <rect x="275" y="240" width="30" height="14" rx="7" fill="#93c5fd" />
                {/* Plant */}
                <rect x="100" y="210" width="10" height="40" rx="2" fill="#86efac" />
                <ellipse cx="105" cy="210" rx="25" ry="25" fill="#4ade80" />
                <ellipse cx="90" cy="215" rx="18" ry="18" fill="#22c55e" />
                <ellipse cx="120" cy="212" rx="18" ry="18" fill="#16a34a" />
                {/* Coffee mug */}
                <rect x="355" y="230" width="30" height="25" rx="4" fill="#fbbf24" />
                <path d="M385,240 Q400,240 400,253 Q400,266 385,265" stroke="#f59e0b" strokeWidth="3" fill="none" />
                {/* Papers */}
                <rect x="130" y="245" width="45" height="5" rx="2" fill="white" fillOpacity="0.8" />
                <rect x="128" y="248" width="45" height="5" rx="2" fill="white" fillOpacity="0.6" />
                {/* Person silhouette */}
                <circle cx="250" cy="95" r="30" fill="#dbeafe" />
                <rect x="215" y="125" width="70" height="120" rx="20" fill="#bfdbfe" />
                <rect x="195" y="130" width="25" height="70" rx="12" fill="#bfdbfe" />
                <rect x="280" y="130" width="25" height="70" rx="12" fill="#bfdbfe" />
              </svg>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-medium text-gray-700">Team Online</span>
                </div>
              </div>
            </div>

            {/* Stats card overlay */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
              <div className="text-sm text-gray-400 mb-1">Client Satisfaction</div>
              <div className="font-heading font-bold text-3xl text-gray-900">98%</div>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-1.5 rounded-full bg-brand-500" />
                ))}
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -top-4 -left-4 bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl shadow-xl p-4 text-white">
              <div className="font-heading font-bold text-2xl">15+</div>
              <div className="text-brand-200 text-xs">Years of experience</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="reveal space-y-7">
            <div>
              <span className="inline-block text-brand-600 text-sm font-semibold tracking-wider uppercase mb-3 bg-brand-50 px-3 py-1 rounded-full">
                About Us
              </span>
              <h2 className="font-heading font-bold text-4xl lg:text-5xl text-gray-900 leading-tight">
                We Create Amazing{" "}
                <span className="gradient-text">Digital Products</span>
              </h2>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard since the
              1500s. We&apos;ve been crafting exceptional digital experiences
              for over 15 years, helping businesses transform and grow.
            </p>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-brand-600 flex-shrink-0 mt-0.5"
                  />
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-brand-600 to-brand-700 text-white font-semibold rounded-2xl shadow-md shadow-brand-200 hover:shadow-brand-300 hover:-translate-y-0.5 transition-all"
            >
              Learn More <ArrowRight size={17} />
            </a>
          </div>
        </div>

        {/* Skills section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal space-y-6">
            <div>
              <span className="inline-block text-brand-600 text-sm font-semibold tracking-wider uppercase mb-3 bg-brand-50 px-3 py-1 rounded-full">
                Our Expertise
              </span>
              <h2 className="font-heading font-bold text-4xl text-gray-900 leading-tight">
                Generating New Ideas.{" "}
                <span className="gradient-text">Solving Big Problems</span>
              </h2>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Our team combines deep expertise with creative thinking to tackle
              your most complex challenges. We bring technical excellence and
              innovative solutions to every project.
            </p>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      {skill.label}
                    </span>
                    <span className="text-sm font-bold text-brand-600">
                      {skill.value}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="progress-bar h-full bg-gradient-to-r from-brand-500 to-brand-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: "0%" }}
                      data-width={skill.value}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team image */}
          <div className="reveal relative">
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 aspect-[4/3] flex items-center justify-center relative">
              {/* Team SVG illustration */}
              <svg viewBox="0 0 500 375" className="w-full h-full" fill="none">
                {/* Background */}
                <rect width="500" height="375" fill="#1e293b" />
                {/* Floating shapes bg */}
                <circle cx="100" cy="100" r="80" fill="#1e40af" fillOpacity="0.3" />
                <circle cx="400" cy="280" r="100" fill="#7c3aed" fillOpacity="0.2" />
                {/* Team members */}
                {[
                  { x: 150, y: 200, color: "#3b82f6" },
                  { x: 250, y: 160, color: "#8b5cf6" },
                  { x: 350, y: 200, color: "#06b6d4" },
                ].map((m, i) => (
                  <g key={i}>
                    <circle cx={m.x} cy={m.y - 40} r="28" fill={m.color} fillOpacity="0.8" />
                    <rect x={m.x - 40} y={m.y - 10} width="80" height="90" rx="20" fill={m.color} fillOpacity="0.6" />
                  </g>
                ))}
                {/* Connecting lines */}
                <line x1="178" y1="190" x2="222" y2="180" stroke="white" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="278" y1="180" x2="322" y2="185" stroke="white" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 4" />
                {/* Stats bar */}
                <rect x="60" y="310" width="380" height="40" rx="10" fill="white" fillOpacity="0.1" />
                {[0, 1, 2, 3].map((i) => (
                  <rect key={i} x={80 + i * 90} y="322" width={50 + i * 8} height="16" rx="4" fill="white" fillOpacity="0.2" />
                ))}
              </svg>

              {/* Overlay text */}
              <div className="absolute inset-0 flex items-end p-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 w-full">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-lg">Meet Our Team</div>
                      <div className="text-white/60 text-sm">50+ talented professionals</div>
                    </div>
                    <div className="flex -space-x-2">
                      {["#3b82f6", "#8b5cf6", "#06b6d4", "#f59e0b"].map((c, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full border-2 border-white/30"
                          style={{ background: c }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
