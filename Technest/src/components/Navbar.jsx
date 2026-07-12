import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { config, getWhatsAppLink } from '../config';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', href: '#shop' },
    { name: 'Repair Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const bookingLink = getWhatsAppLink("Hi, I'd like to book a repair service for my device.");

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#FAFAF9]/95 backdrop-blur-md border-b border-gray-200/50 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display font-bold text-2xl tracking-tight text-[#111111] hover:opacity-85 transition-opacity">
          TechNest<span className="text-[#0FA3A3]">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-sans font-medium text-sm text-[#111111]/75 hover:text-[#111111] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:height-[1px] after:bg-[#0FA3A3] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0FA3A3] text-white font-sans font-semibold text-xs uppercase tracking-wider px-5 py-2.5 hover:bg-[#0C8F8F] transition-all transform duration-200"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            Book Repair
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 text-[#111111] hover:text-[#0FA3A3] transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Backdrop Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-[#111111]/30 backdrop-blur-xs z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer Panel */}
      <div className={`fixed inset-y-0 right-0 w-full max-w-xs z-50 bg-[#FAFAF9] shadow-2xl border-l border-gray-200/80 p-8 flex flex-col justify-between md:hidden transition-transform duration-300 ease-in-out transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`} style={{ backgroundColor: '#FAFAF9' }}>
        <div>
          {/* Header inside drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-gray-200/60 mb-8">
            <span className="font-display font-bold text-xl tracking-tight text-[#111111]">
              TechNest<span className="text-[#0FA3A3]">.</span>
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#111111] hover:text-[#0FA3A3] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-display font-semibold text-xl text-[#111111] hover:text-[#0FA3A3] transition-colors py-2 border-b border-gray-100/50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom actions in drawer */}
        <div className="space-y-6">
          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#0FA3A3] text-white font-sans font-semibold uppercase tracking-wider text-xs py-4 w-full hover:bg-[#0C8F8F] transition-all"
          >
            <PhoneCall className="w-4 h-4" />
            Book Repair
          </a>
          <div className="text-center text-xs text-[#111111]/50 font-sans">
            <p>Open daily from 09:30 AM - 08:00 PM</p>
            <p className="mt-1">{config.phone}</p>
          </div>
        </div>
      </div>

    </nav>
  );
}
