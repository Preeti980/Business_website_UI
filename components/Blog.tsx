"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import SectionHeader from "./SectionHeader";

const posts = [
  {
    id: 1,
    title: "TikTok Illegally Collecting Data & Sharing",
    date: "August 31, 2024",
    category: "Marketing",
    excerpt:
      "An in-depth look at the implications of data privacy violations and what it means for digital marketers navigating an increasingly regulated landscape.",
    gradient: "from-pink-500 via-rose-400 to-orange-400",
    categoryColor: "bg-pink-50 text-pink-600",
  },
  {
    id: 2,
    title: "How to Use Our Latest News Features",
    date: "Sep 01, 2024",
    category: "Design",
    excerpt:
      "Exploring cutting-edge design trends and how our platform integrates the latest tools to keep your brand ahead of the visual curve in 2024.",
    gradient: "from-brand-400 via-blue-400 to-cyan-400",
    categoryColor: "bg-blue-50 text-brand-600",
  },
  {
    id: 3,
    title: "Learning and Growing in the First Year",
    date: "Sep 02, 2024",
    category: "Agency",
    excerpt:
      "Lessons learned from our first year building a modern digital agency: culture, clients, creativity, and everything in between.",
    gradient: "from-green-400 via-teal-400 to-emerald-400",
    categoryColor: "bg-green-50 text-green-600",
  },
];

export default function Blog() {
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
      id="blog"
      ref={sectionRef}
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Latest Blog"
          title="Insights & Ideas"
          subtitle="Thoughts on design, technology, and the ever-evolving digital landscape — straight from our team."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
          {posts.map((post, i) => (
            <article
              key={post.id}
              className="reveal card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Gradient image */}
              <div
                className={`bg-gradient-to-br ${post.gradient} h-52 relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 300 200" className="w-4/5 opacity-25" fill="none">
                    <rect x="20" y="20" width="260" height="160" rx="10" fill="white" />
                    <rect x="35" y="35" width="120" height="12" rx="4" fill="rgba(0,0,0,0.3)" />
                    <rect x="35" y="55" width="230" height="7" rx="3" fill="rgba(0,0,0,0.15)" />
                    <rect x="35" y="68" width="200" height="7" rx="3" fill="rgba(0,0,0,0.1)" />
                    <rect x="35" y="81" width="170" height="7" rx="3" fill="rgba(0,0,0,0.1)" />
                    <rect x="35" y="105" width="80" height="50" rx="6" fill="rgba(0,0,0,0.15)" />
                    <rect x="130" y="105" width="135" height="50" rx="6" fill="rgba(0,0,0,0.1)" />
                  </svg>
                </div>

                <div className="absolute top-4 left-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${post.categoryColor} backdrop-blur-sm`}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag size={12} />
                    {post.category}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-gray-900 text-lg leading-snug group-hover:text-brand-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="pt-2">
                  <button className="flex items-center gap-1.5 text-brand-600 text-sm font-medium hover:gap-3 transition-all duration-200">
                    Read More <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3.5 border-2 border-brand-600 text-brand-600 font-semibold rounded-2xl hover:bg-brand-600 hover:text-white transition-all duration-200">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
}
