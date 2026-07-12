import React from 'react';
import { Smartphone, BatteryCharging, Droplets, Plug, Cpu, Volume2, CalendarDays } from 'lucide-react';
import { getWhatsAppLink } from '../config';

const SERVICES = [
  {
    id: 'screen',
    title: 'Screen Rebuilds & OLED Replacement',
    description: 'We separate damaged outer glass and swap display panels using optical laminators to restore original touch response, color accuracy, and peak brightness. No touch issues, no loose edges.',
    turnaround: 'Within 45 Minutes',
    icon: Smartphone,
    color: '#0FA3A3',
    techNotes: 'Uses OEM specification LCD/OLED panels, preserving ambient light sensors and True Tone calibration.'
  },
  {
    id: 'battery',
    title: 'OEM-Grade Battery Replacement',
    description: 'If your device struggles to hold a charge or shuts down unexpectedly, we replace it with premium high-retention batteries. All cells are certified and match factory capacity.',
    turnaround: 'Within 30 Minutes',
    icon: BatteryCharging,
    color: '#0FA3A3',
    techNotes: 'Calibrated to official charging curves. Battery cycle count reporting reset is available for supporting models.'
  },
  {
    id: 'liquid',
    title: 'Ultrasonic Liquid Damage Recovery',
    description: 'Dropped in water? We disassemble the device completely, run the motherboard through a multi-stage ultrasonic bath to neutralize corrosion, and repair affected microscopic logic board traces.',
    turnaround: '1 - 3 Business Days',
    icon: Droplets,
    color: '#0FA3A3',
    techNotes: 'Includes full chemical oxidation cleaning and individual SMD component logic diagnostics.'
  },
  {
    id: 'port',
    title: 'Micro-Soldering & Charging Ports',
    description: 'Loose charging cable? We swap USB-C and Lightning ports at the micro-component level. If the port itself is intact, we resolve underlying charging IC and filter issues on the circuit board.',
    turnaround: 'Within 60 Minutes',
    icon: Plug,
    color: '#0FA3A3',
    techNotes: 'Soldered under premium binocular microscopes using lead-free alloy to secure durable connectivity.'
  },
  {
    id: 'software',
    title: 'OS Flash & Software Diagnosis',
    description: 'Resolving bootloops, recovering lost files, restoring locked phones, and repairing corrupted firmware. We handle deep OS-level recoveries for iOS, Android, and macOS.',
    turnaround: 'Within 2 Hours',
    icon: Cpu,
    color: '#0FA3A3',
    techNotes: 'Includes system integrity checks and firmware partitions rewrite utilizing secure boot interface.'
  },
  {
    id: 'acoustic',
    title: 'Acoustic Rebuilds (Speaker & Mic)',
    description: 'Muffled call audio or distorted speaker sound? We clear debris-clogged acoustic mesh grills and replace damaged micro-transducers to restore original audio range and microphone sensitivity.',
    turnaround: 'Within 45 Minutes',
    icon: Volume2,
    color: '#0FA3A3',
    techNotes: 'Restores IP68 dust-mesh seal protections using custom adhesive gaskets.'
  }
];

export default function Repairs() {
  return (
    <section id="services" className="py-24 bg-[#FAFAF9] border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-xl mb-20">
          <span className="font-sans font-semibold text-xs uppercase tracking-widest text-[#0FA3A3] mb-3 block">
            Expert Workshop
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#111111] tracking-tight">
            Repair Services
          </h2>
          <p className="font-sans text-[#111111]/60 text-sm sm:text-base mt-2">
            No guess work. We perform repair operations under macro lenses with modern diagnostic tools. All services carry our standard warranty.
          </p>
        </div>

        {/* Alternating Layout */}
        <div className="space-y-24">
          {SERVICES.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            const bookingMsg = getWhatsAppLink(`Hi TechNest, I need to book a "${service.title}" for my device. Turnaround is listed as: ${service.turnaround}.`);

            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                
                {/* Visual Segment (Alternates Left/Right) */}
                <div className={`lg:col-span-5 flex justify-center ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <div className="relative w-full aspect-video sm:aspect-[16/10] lg:aspect-square bg-white border border-gray-200/80 flex flex-col items-center justify-center p-8 group overflow-hidden">
                    <div className="absolute inset-0 bg-[#0FA3A3]/05 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    
                    {/* Big Abstract Icon */}
                    <div className="p-6 bg-[#0FA3A3]/5 border border-[#0FA3A3]/10 text-[#0FA3A3] rounded-none transform transition-transform duration-500 group-hover:scale-105">
                      <IconComponent className="w-16 h-16 stroke-[1.25]" />
                    </div>

                    <div className="mt-8 text-center">
                      <span className="block font-sans text-[10px] uppercase tracking-widest text-[#111111]/40 font-bold mb-1">
                        Est. Service Time
                      </span>
                      <span className="font-display text-xl font-bold text-[#111111]">
                        {service.turnaround}
                      </span>
                    </div>

                    {/* Technical footprint detail */}
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <span className="font-sans text-[9px] text-[#111111]/40 tracking-wider">
                        SECURE BAY REPAIR
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Segment */}
                <div className={`lg:col-span-7 space-y-6 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100/80 border border-gray-200/40 text-xs font-semibold uppercase tracking-wider text-[#111111]/70">
                    <CalendarDays className="w-3.5 h-3.5 text-[#0FA3A3]" />
                    {service.turnaround}
                  </div>
                  
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#111111] leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-base text-[#111111]/70 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="bg-[#111111]/03 border-l-2 border-[#0FA3A3] p-4 font-sans text-xs italic text-[#111111]/60">
                    <strong className="not-italic text-[#111111] font-semibold block uppercase tracking-wide text-[9px] mb-1">Workshop Specs:</strong>
                    {service.techNotes}
                  </div>

                  <div className="pt-2">
                    <a
                      href={bookingMsg}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#0FA3A3] text-white font-sans font-semibold text-xs uppercase tracking-wider px-6 py-3.5 transition-all"
                    >
                      Book {service.id === 'liquid' ? 'Diagnosis' : 'Repair'}
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
