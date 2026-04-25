"use client";

import { useEffect, useRef, useState } from "react";
import { Users, FolderOpen, Clock, HeadphonesIcon } from "lucide-react";

const stats = [
  { icon: Users, value: 32652, label: "Happy Customers", suffix: "+" },
  { icon: FolderOpen, value: 21821, label: "Projects Done", suffix: "+" },
  { icon: Clock, value: 15, label: "Years In Business", suffix: "+" },
  { icon: HeadphonesIcon, value: 11859, label: "Support Cases", suffix: "+" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration, start]);

  return count;
}

function StatItem({ icon: Icon, value, label, suffix, animate }: {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix: string;
  animate: boolean;
}) {
  const count = useCountUp(value, 2000, animate);
  return (
    <div className="text-center group">
      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
        <Icon size={28} className="text-white" />
      </div>
      <div className="font-heading font-bold text-4xl lg:text-5xl text-white mb-1 tabular-nums">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-brand-200 font-medium text-sm tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-brand-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-brand-400/20 rounded-full blur-3xl" />
        <svg
          className="absolute bottom-0 left-0 right-0 w-full"
          viewBox="0 0 1440 80"
          fill="none"
        >
          <path
            d="M0,60 C400,80 1000,20 1440,60 L1440,80 L0,80 Z"
            fill="white"
            fillOpacity="0.05"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
}
