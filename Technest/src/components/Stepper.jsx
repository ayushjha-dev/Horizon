import React from 'react';
import { ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../config';

const STEPS = [
  {
    number: '/01',
    title: 'Describe the Issue',
    description: 'Tap a booking link or send a message detailing your device model and the fault. Attach a photo if relevant.'
  },
  {
    number: '/02',
    title: 'Receive Custom Quote',
    description: 'Our repair techs diagnose your issue remotely and send back a firm estimate and parts availability within 15 minutes.'
  },
  {
    number: '/03',
    title: 'Drop-off or Pickup',
    description: 'Deliver the device directly to our shop for a same-day fix, or request our local secure courier pickup.'
  }
];

export default function Stepper() {
  const whatsappBooking = getWhatsAppLink("Hi TechNest, I want to describe my device issue and get a quick quote.");

  return (
    <section className="py-24 bg-[#FAFAF9] border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16">
          <span className="font-sans font-semibold text-xs uppercase tracking-widest text-[#0FA3A3] mb-3 block">
            The Process
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#111111] tracking-tight">
            How Booking Works
          </h2>
          <p className="font-sans text-[#111111]/60 text-sm sm:text-base mt-2">
            No endless queues. No diagnostic fees. Get direct access to certified technicians in three simple actions.
          </p>
        </div>

        {/* Stepper Grid with Connecting Line */}
        <div className="relative">
          {/* Horizontal connecting line (hidden on mobile, visible on desktop) */}
          <div className="hidden lg:block absolute top-14 left-8 right-8 h-[1px] bg-gray-200/80 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {STEPS.map((step, idx) => (
              <div key={idx} className="flex flex-col group">
                {/* Step Indicator */}
                <div className="flex items-baseline gap-4 mb-6">
                  {/* Distinct styled typography instead of round circles */}
                  <span className="font-display font-bold text-5xl sm:text-6xl text-[#0FA3A3] tracking-tighter transition-all duration-300 group-hover:translate-x-1">
                    {step.number}
                  </span>
                  
                  {/* Divider block */}
                  <span className="h-px w-8 bg-[#111111]/15 lg:hidden"></span>
                </div>

                {/* Step Info */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111111] mb-3 group-hover:text-[#0FA3A3] transition-colors">
                  {step.title}
                </h3>
                
                <p className="font-sans text-sm sm:text-base text-[#111111]/60 leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stepper CTA */}
        <div className="mt-16 text-left border border-gray-200/60 bg-white p-8 lg:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="font-display font-bold text-2xl text-[#111111]">
              Ready to restore your device?
            </h4>
            <p className="font-sans text-sm text-[#111111]/60 mt-1 max-w-xl">
              Tap below to initiate Step 1. Our team is online right now to review details and supply quotes.
            </p>
          </div>
          
          <a
            href={whatsappBooking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#0FA3A3] text-white font-sans font-semibold text-xs uppercase tracking-wider px-6 py-4 transition-all whitespace-nowrap"
          >
            Start WhatsApp Booking
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
