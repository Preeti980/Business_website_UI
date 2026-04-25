"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";

const categories = ["All", "Branding", "Web Template", "SEO", "Digital Marketing"];

const projects = [
  {
    id: 1,
    title: "Luxe Brand Identity",
    category: "Branding",
    tags: ["Branding", "Strategy"],
    gradient: "from-purple-400 via-pink-400 to-rose-400",
    accent: "#a855f7",
  },
  {
    id: 2,
    title: "Ecommerce Platform",
    category: "Web Template",
    tags: ["Web Template", "UI/UX"],
    gradient: "from-brand-400 via-cyan-400 to-teal-400",
    accent: "#0ea5e9",
  },
  {
    id: 3,
    title: "SEO Growth Campaign",
    category: "SEO",
    tags: ["SEO", "Analytics"],
    gradient: "from-green-400 via-emerald-400 to-cyan-400",
    accent: "#10b981",
  },
  {
    id: 4,
    title: "Social Media Strategy",
    category: "Digital Marketing",
    tags: ["Digital Marketing"],
    gradient: "from-orange-400 via-amber-400 to-yellow-400",
    accent: "#f59e0b",
  },
  {
    id: 5,
    title: "SaaS Dashboard",
    category: "Web Template",
    tags: ["Web Template", "Branding"],
    gradient: "from-brand-500 via-indigo-500 to-violet-500",
    accent: "#6366f1",
  },
  {
    id: 6,
    title: "Fashion Brand Launch",
    category: "Branding",
    tags: ["Branding", "Digital Marketing"],
    gradient: "from-rose-400 via-fuchsia-400 to-purple-400",
    accent: "#ec4899",
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Our Work"
          title="Latest Works"
          subtitle="A curated selection of our finest projects — each one a story of collaboration, creativity, and measurable results."
        />

        {/* Filter buttons */}
        <div
          className={`flex flex-wrap justify-center gap-3 mt-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-btn px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-brand-600 text-white shadow-md shadow-brand-200"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-brand-300 hover:text-brand-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl overflow-hidden card-hover transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Gradient image */}
              <div
                className={`bg-gradient-to-br ${project.gradient} aspect-[4/3] relative overflow-hidden`}
              >
                {/* Mock content inside */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 300 225" className="w-4/5 opacity-30" fill="none">
                    <rect x="20" y="30" width="260" height="165" rx="12" fill="white" />
                    <rect x="32" y="45" width="100" height="10" rx="4" fill="rgba(0,0,0,0.3)" />
                    <rect x="32" y="62" width="236" height="6" rx="3" fill="rgba(0,0,0,0.15)" />
                    <rect x="32" y="74" width="200" height="6" rx="3" fill="rgba(0,0,0,0.15)" />
                    <rect x="32" y="92" width="70" height="24" rx="6" fill="rgba(0,0,0,0.25)" />
                    <rect x="32" y="128" width="108" height="60" rx="8" fill="rgba(0,0,0,0.15)" />
                    <rect x="152" y="128" width="116" height="60" rx="8" fill="rgba(0,0,0,0.1)" />
                  </svg>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <button className="flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 rounded-xl font-semibold text-sm hover:scale-105 transition-transform shadow-lg">
                      <ExternalLink size={15} />
                      View Project
                    </button>
                  </div>
                </div>
              </div>

              {/* Card info */}
              <div className="bg-white p-5 border-t border-gray-100">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-600 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-heading font-bold text-gray-900 text-lg">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3.5 border-2 border-brand-600 text-brand-600 font-semibold rounded-2xl hover:bg-brand-600 hover:text-white transition-all duration-200">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
