import React from 'react';

const TESTIMONIALS_DATA = [
  {
    quote: "Fixed my phone's charging port in 20 minutes. The pricing was completely fair, and they showed me the replaced pins under their microscopes before handoff.",
    author: "Rahul M. Sharma",
    role: "System Administrator",
    meta: "iPhone 14 Pro Port Repair"
  },
  {
    quote: "Brought in a water-damaged MacBook that other shops declared dead. They identified a shorted capacitor on the power rail and micro-soldered a replacement. Saved me 90% of the cost of a new motherboard.",
    author: "Ananya Goel",
    role: "Visual Artist",
    meta: "MacBook Pro Liquid Rework"
  },
  {
    quote: "Same-day screen swap on my iPad. The display colors and touch sensitivity are identical to original factory state, and the face recognition calibration remained completely intact.",
    author: "Devansh Nair",
    role: "Architect",
    meta: "iPad Pro Screen Rebuild"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#FAFAF9] border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16">
          <span className="font-sans font-semibold text-xs uppercase tracking-widest text-[#0FA3A3] mb-3 block">
            Customer Journals
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#111111] tracking-tight">
            Realistic Feedback
          </h2>
          <p className="font-sans text-[#111111]/60 text-sm sm:text-base mt-2">
            We let our bench outcomes speak for themselves. Here are verified stories from individuals who service their hardware with us.
          </p>
        </div>

        {/* Testimonials Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={idx}
              className="border border-gray-200/60 bg-white p-8 flex flex-col justify-between hover:border-[#111111] transition-colors duration-300"
            >
              <div>
                {/* Visual quote mark */}
                <span className="font-display text-4xl text-[#0FA3A3] font-bold block mb-4 leading-none">
                  “
                </span>
                <p className="font-sans text-sm sm:text-base text-[#111111] leading-relaxed mb-8 italic">
                  {t.quote}
                </p>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <span className="block font-display font-bold text-sm text-[#111111]">
                  {t.author}
                </span>
                <span className="block font-sans text-xs text-[#111111]/50 mt-0.5">
                  {t.role}
                </span>
                
                {/* Repaired Device Tag */}
                <span className="inline-block font-sans text-[9px] uppercase tracking-wider font-bold text-[#0FA3A3] bg-[#0FA3A3]/5 px-2 py-0.5 mt-3 border border-[#0FA3A3]/10">
                  {t.meta}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
