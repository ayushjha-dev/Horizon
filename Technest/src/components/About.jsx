import React from 'react';
import { Award, Compass, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#FAFAF9] border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <span className="font-sans font-semibold text-xs uppercase tracking-widest text-[#0FA3A3] mb-3 block">
              Our Philosophy
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#111111] tracking-tight leading-[1.05]">
              Built on precision. Honed by experience.
            </h2>
            
            {/* Minimal Stat cards stacked on left for asymmetry */}
            <div className="space-y-6 mt-10">
              <div className="flex gap-4 items-start">
                <div className="p-2.5 bg-white border border-gray-200 text-[#0FA3A3] flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-[#111111]">
                    90-Day Bench Warranty
                  </h4>
                  <p className="font-sans text-xs text-[#111111]/60 mt-0.5 leading-relaxed">
                    We stand by our repairs. Any issues with replaced parts within 90 days are addressed with zero questions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 bg-white border border-gray-200 text-[#0FA3A3] flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-[#111111]">
                    Certified Micro-Soldering
                  </h4>
                  <p className="font-sans text-xs text-[#111111]/60 mt-0.5 leading-relaxed">
                    Our team holds IPC-7711/7721 certifications for high-reliability rework and micro-component replacements.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 bg-white border border-gray-200 text-[#0FA3A3] flex-shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-[#111111]">
                    True Component Sourcing
                  </h4>
                  <p className="font-sans text-xs text-[#111111]/60 mt-0.5 leading-relaxed">
                    We use only OEM specification and high-grade aftermarket parts, directly sourced and bench-tested.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Paragraph and stats grid */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#111111] leading-relaxed">
              We do what general repair kiosks avoid. We perform schematic trace repair, logic-board micro-soldering, and optical laminations.
            </h3>
            
            <p className="font-sans text-base text-[#111111]/70 leading-relaxed">
              Founded in Delhi by a small team of engineering enthusiasts, TechNest Electronics has serviced Connaught Place and the NCR region for over 8 years. We built our workshop around transparency and detail. We don't hide behind back-room doors; our repair bench is visible, our pricing is upfront, and our diagnostic updates are fast.
            </p>

            <p className="font-sans text-base text-[#111111]/70 leading-relaxed">
              Whether you possess a high-end flagship phone with a cracked OLED screen, a laptop with liquid contact on its motherboard, or simply need a battery replacement that won't ruin your device, we utilize laboratory-grade tools (thermal sensors, digital oscilloscopes, and microscope soldering stations) to ensure factory-perfect rebuilds.
            </p>
            
            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-200/50">
              <div>
                <span className="block font-display text-4xl font-bold text-[#111111]">8+</span>
                <span className="font-sans text-xs text-[#111111]/50 uppercase tracking-wider block mt-1">
                  Years Active Service
                </span>
              </div>
              
              <div>
                <span className="block font-display text-4xl font-bold text-[#111111]">5,000+</span>
                <span className="font-sans text-xs text-[#111111]/50 uppercase tracking-wider block mt-1">
                  Repairs Completed
                </span>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <span className="block font-display text-4xl font-bold text-[#111111]">98%</span>
                <span className="font-sans text-xs text-[#111111]/50 uppercase tracking-wider block mt-1">
                  Same-Day Turnaround
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
