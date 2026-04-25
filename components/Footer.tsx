"use client";

import { useState } from "react";
import { Send, ArrowUp } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Company: ["About Us", "Our Team", "Careers", "News & Blog", "Contact"],
  Services: ["Brand Identity", "Web Development", "SEO", "Digital Marketing", "Photography"],
  Resources: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap", "Support"],
  Legal: ["Licenses", "Market API", "Jobs in US", "Jobs in EU", "Disclaimers"],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-dark text-gray-400 relative overflow-hidden">
      {/* Top decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-700 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-900/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Main footer grid */}
        <div className="grid lg:grid-cols-6 gap-10 pb-12 border-b border-dark-600">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-md">
                <span className="text-white font-heading font-bold text-lg">M</span>
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                mono<span className="text-brand-400">line</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed text-gray-500">
              We&apos;re a full-service digital agency crafting exceptional experiences that drive real business results. Based in San Francisco, working worldwide.
            </p>

            {/* Newsletter */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                Subscribe for updates
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                  <span>✓</span> You&apos;re subscribed!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    className="flex-1 bg-dark-700 border border-dark-600 rounded-xl px-4 py-2.5 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-brand-500 transition min-w-0"
                  />
                  <button
                    type="submit"
                    className="w-10 h-10 rounded-xl bg-brand-600 hover:bg-brand-500 text-white flex items-center justify-center flex-shrink-0 transition"
                    aria-label="Subscribe"
                  >
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>

            {/* Social icons */}
            <div className="flex gap-2 pt-1">
              {[
                { label: "𝕏", title: "Twitter" },
                { label: "in", title: "LinkedIn" },
                { label: "f", title: "Facebook" },
                { label: "ig", title: "Instagram" },
              ].map(({ label, title }) => (
                <button
                  key={title}
                  title={title}
                  className="w-9 h-9 rounded-xl bg-dark-700 text-gray-400 hover:bg-brand-600 hover:text-white transition-all font-bold text-xs border border-dark-600 hover:border-brand-600"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-brand-400 transition-colors link-hover"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Monoline. All Rights Reserved. Crafted with ❤️ by{" "}
            <a href="#" className="text-brand-500 hover:text-brand-400 transition">
              Priti Chauhan
            </a>
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition">
              Privacy Policy
            </a>
            <span className="text-gray-700">·</span>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition">
              Terms of Service
            </a>
            <span className="text-gray-700">·</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-dark-700 border border-dark-600 flex items-center justify-center text-gray-500 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
