"use client";

import { useEffect, useRef } from "react";
import { Linkedin, Twitter, Globe } from "lucide-react";
import SectionHeader from "./SectionHeader";

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "10+ years driving digital strategy for Fortune 500 brands.",
    gradient: "from-brand-400 to-brand-600",
    initials: "SJ",
  },
  {
    name: "Marcus Lee",
    role: "Creative Director",
    bio: "Award-winning designer with a passion for bold visual systems.",
    gradient: "from-purple-400 to-indigo-600",
    initials: "ML",
  },
  {
    name: "Priya Patel",
    role: "Head of Development",
    bio: "Full-stack engineer obsessed with performance and clean code.",
    gradient: "from-teal-400 to-cyan-600",
    initials: "PP",
  },
  {
    name: "David Kim",
    role: "Growth Lead",
    bio: "Data-driven marketer who turns insights into revenue.",
    gradient: "from-orange-400 to-rose-500",
    initials: "DK",
  },
];

export default function Team() {
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
      id="team"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-100 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Our Team"
          title="The Minds Behind the Magic"
          subtitle="A diverse team of strategists, designers, and engineers united by a single mission: making your brand extraordinary."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-14">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="reveal card-hover group text-center bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Avatar area */}
              <div
                className={`bg-gradient-to-br ${member.gradient} h-40 flex items-end justify-center pb-0 relative`}
              >
                {/* Background pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                {/* Avatar circle — overlaps boundary */}
                <div className="relative w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center translate-y-10 border-4 border-white">
                  <span className="font-heading font-bold text-xl text-gray-700">
                    {member.initials}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="pt-14 pb-6 px-6">
                <h3 className="font-heading font-bold text-gray-900 text-lg">
                  {member.name}
                </h3>
                <p className="text-brand-600 text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Social icons */}
                <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[Linkedin, Twitter, Globe].map((Icon, j) => (
                    <button
                      key={j}
                      className="w-8 h-8 rounded-lg bg-gray-100 text-gray-500 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-all"
                    >
                      <Icon size={13} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
