"use client";

import { useEffect, useRef, useState } from "react";
import { Send, MapPin, Phone, Mail, CheckCircle } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Our Location",
      value: "123 Digital Avenue, Tech City, CA 94102",
      color: "bg-brand-50 text-brand-600",
    },
    {
      icon: Phone,
      label: "Phone Number",
      value: "+1 (555) 123-4567",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: Mail,
      label: "Email Address",
      value: "hello@monoline.studio",
      color: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-50 rounded-full blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-6">
        {/* CTA Banner */}
        <div className="reveal mb-16 rounded-3xl bg-gradient-to-r from-brand-700 via-brand-800 to-brand-950 p-10 lg:p-14 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-brand-500/20 rounded-full translate-y-1/2" />
          </div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white mb-3 leading-tight">
                Say Hello, Let&apos;s Start{" "}
                <span className="text-brand-300">Something New</span>
              </h2>
              <p className="text-brand-200 leading-relaxed">
                Ready to transform your digital presence? We&apos;d love to hear about your project. Drop us a message and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <a
                href="mailto:hello@monoline.studio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700 font-bold rounded-2xl shadow-xl hover:scale-105 transition-transform"
              >
                <Send size={18} />
                Send Message
              </a>
            </div>
          </div>
        </div>

        {/* Contact grid */}
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info column */}
          <div className="lg:col-span-2 reveal space-y-6">
            <div>
              <span className="inline-block text-brand-600 text-sm font-semibold tracking-wider uppercase mb-3 bg-brand-50 px-3 py-1 rounded-full">
                Get In Touch
              </span>
              <h3 className="font-heading font-bold text-3xl text-gray-900 leading-tight">
                We&apos;d Love to Hear From You
              </h3>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Whether you have a question, a project idea, or just want to say hi — our inbox is always open. We respond to every message within one business day.
            </p>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                      {label}
                    </div>
                    <div className="text-gray-700 font-medium text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Follow Us
              </div>
              <div className="flex gap-3">
                {["𝕏", "in", "f", "ig"].map((s) => (
                  <button
                    key={s}
                    className="w-10 h-10 rounded-xl bg-gray-100 text-gray-600 hover:bg-brand-600 hover:text-white transition-all font-bold text-sm"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3 reveal">
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-gray-900">
                    Message Sent!
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-gray-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-brand-600 to-brand-700 text-white font-semibold rounded-xl shadow-md shadow-brand-200 hover:shadow-brand-300 hover:-translate-y-0.5 transition-all"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
