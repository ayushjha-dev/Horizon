import React from 'react';
import { ArrowRight, Wrench } from 'lucide-react';
import { getWhatsAppLink } from '../config';

export default function Hero() {
  const whatsappBooking = getWhatsAppLink("Hi, I want to book a repair service. Please let me know how to proceed.");

  const handleBrowseClick = (e) => {
    e.preventDefault();
    const target = document.querySelector('#shop');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen pt-28 lg:pt-36 flex items-center overflow-hidden bg-[#FAFAF9] grain-texture">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Asymmetric Typography & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            <span className="font-sans font-semibold text-xs uppercase tracking-widest text-[#0FA3A3] mb-4">
              Premium Device Service & Retail
            </span>
            <h1 className="font-display font-bold text-5xl sm:text-6xl xl:text-7xl text-[#111111] leading-[0.95] tracking-tighter mb-6">
              Precision Care.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#333333] to-[#0FA3A3]">
                Expert Repairs.
              </span>
            </h1>
            <p className="font-sans text-[#111111]/70 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
              We diagnose, restore, and upgrade your premium electronics. From screen rebuilds to charging port replacements, get certified repairs with instant WhatsApp booking and transparent, upfront quotes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappBooking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#0FA3A3] text-white font-sans font-semibold text-sm uppercase tracking-wider px-8 py-4 hover:bg-[#0C8F8F] transition-all duration-200 transform"
              >
                <Wrench className="w-4 h-4" />
                Book Repair
              </a>
              <a
                href="#shop"
                onClick={handleBrowseClick}
                className="inline-flex items-center justify-center gap-2.5 bg-transparent text-[#111111] border border-[#111111]/25 font-sans font-semibold text-sm uppercase tracking-wider px-8 py-4 hover:border-[#111111] hover:bg-[#111111]/5 transition-all duration-200"
              >
                Browse Products
                <ArrowRight className="w-4 h-4 text-[#0FA3A3]" />
              </a>
            </div>
            
            {/* Minimal Stat Badges */}
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-gray-200/50">
              <div>
                <span className="block font-display text-2xl font-bold text-[#111111]">500+</span>
                <span className="font-sans text-xs text-[#111111]/55 uppercase tracking-wider">Devices Fixed</span>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div>
                <span className="block font-display text-2xl font-bold text-[#111111]">4.8★</span>
                <span className="font-sans text-xs text-[#111111]/55 uppercase tracking-wider">Google Rating</span>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div>
                <span className="block font-display text-2xl font-bold text-[#111111]">Same Day</span>
                <span className="font-sans text-xs text-[#111111]/55 uppercase tracking-wider">Screen Turnaround</span>
              </div>
            </div>
          </div>
          
          {/* Right Column: Asymmetric bleeding image */}
          <div className="lg:col-span-5 relative w-full lg:w-[120%] lg:left-8 xl:left-12">
            <div className="relative group">
              {/* Asymmetrical background accents */}
              <div className="absolute inset-0 bg-[#0FA3A3]/5 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative border border-[#111111]/10 bg-white p-2">
                <img
                  src="/hero_repair_workbench.png"
                  alt="TechNest repair workbench showcasing disassembled high-end smartphone and precise tools"
                  className="w-full object-cover aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] object-center transition-all duration-500 hover:scale-[1.01]"
                />
              </div>
              <div className="absolute bottom-6 left-6 bg-[#111111] text-white py-2.5 px-4 font-sans text-xs uppercase tracking-widest font-semibold">
                Certified Service Bay
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
