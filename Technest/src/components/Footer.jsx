import React from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { config, getWhatsAppLink } from '../config';

export default function Footer() {
  const whatsappFooterLink = getWhatsAppLink("Hi TechNest, I want to inquire about a repair service. I am ready to book.");

  return (
    <footer id="contact" className="bg-[#111111] text-white pt-24 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Footers Prominent WhatsApp CTA Banner */}
        <div className="border border-white/10 p-8 lg:p-16 mb-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 bg-white/[0.02]">
          <div className="max-w-xl">
            <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#0FA3A3] mb-3 block">
              Direct Communication
            </span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-none mb-3">
              Need an immediate repair quote?
            </h3>
            <p className="font-sans text-white/60 text-sm sm:text-base leading-relaxed">
              We respond to WhatsApp requests during shop hours. Tap to start a chat, describe your fault, and receive a diagnosis within minutes.
            </p>
          </div>
          
          <a
            href={whatsappFooterLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#0FA3A3] hover:bg-[#0C8F8F] text-white font-sans font-semibold text-sm uppercase tracking-wider px-8 py-4 transition-all duration-200 transform whitespace-nowrap"
          >
            Chat on WhatsApp to Book
          </a>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Column 1: Contact Details & Brand */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-display font-bold text-2xl tracking-tight text-white">
              TechNest<span className="text-[#0FA3A3]">.</span>
            </h2>
            
            <p className="font-sans text-sm text-white/50 leading-relaxed max-w-sm">
              Delhi's dedicated micro-repair workshop. We specialize in high-precision screen rebuilds, logic board diagnostics, and certified parts installations.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0FA3A3] flex-shrink-0 mt-0.5" />
                <span className="font-sans text-sm text-white/80 leading-relaxed">
                  {config.address}
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0FA3A3] flex-shrink-0" />
                <span className="font-sans text-sm text-white/80">
                  {config.phone}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#0FA3A3] flex-shrink-0" />
                <span className="font-sans text-sm text-white/80">
                  {config.email}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <a
                href={config.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/10 text-white/60 hover:text-[#0FA3A3] hover:border-[#0FA3A3] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={config.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/10 text-white/60 hover:text-[#0FA3A3] hover:border-[#0FA3A3] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Hours & Navigation */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-[#0FA3A3]">
              Shop Hours
            </h4>
            
            <div className="space-y-4">
              {config.hours.map((h, i) => (
                <div key={i} className="font-sans text-sm">
                  <span className="block text-white/40 text-xs font-semibold uppercase tracking-wider">
                    {h.days}
                  </span>
                  <span className="block text-white/80 mt-0.5">
                    {h.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="block text-xs text-white/40 uppercase tracking-wider">
                Support Window
              </span>
              <span className="block text-sm text-white/80 mt-1">
                Same-day diagnostic response for requests submitted before 05:00 PM.
              </span>
            </div>
          </div>

          {/* Column 3: Grayscale Map Embed */}
          <div className="lg:col-span-4 w-full h-64 lg:h-full min-h-[240px] border border-white/10 p-1 bg-white/5">
            <iframe
              title="TechNest Location Map"
              src={config.mapEmbedUrl}
              className="w-full h-full border-0 filter grayscale contrast-125 invert opacity-80"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 mt-8 text-xs text-white/40 font-sans gap-4">
          <p>© {new Date().getFullYear()} TechNest Electronics. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#0FA3A3] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#0FA3A3] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#0FA3A3] transition-colors">Diagnostics Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
