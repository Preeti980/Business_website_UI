"use client";

const partners = [
  { name: "Google", symbol: "G" },
  { name: "Microsoft", symbol: "Ms" },
  { name: "Stripe", symbol: "St" },
  { name: "Notion", symbol: "N" },
  { name: "Figma", symbol: "Fi" },
  { name: "Vercel", symbol: "V△" },
  { name: "Shopify", symbol: "Sh" },
  { name: "Atlassian", symbol: "At" },
];

// Duplicate for seamless loop
const allPartners = [...partners, ...partners];

export default function Partners() {
  return (
    <section className="py-14 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
        Trusted by leading companies worldwide
      </p>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div className="marquee-inner flex gap-10 w-max">
          {allPartners.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex items-center gap-3 px-6 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-100 transition-all duration-200 cursor-default flex-shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                {partner.symbol}
              </div>
              <span className="text-gray-700 font-semibold text-sm whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
