import React, { useState } from 'react';

export default function Header({ onOpenCart, onOpenReservation }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full top-0 sticky z-50 bg-surface border-b-4 border-tertiary shadow-[0_2px_0_0_rgba(54,47,43,1)]">
      <div className="flex justify-between items-center px-4 md:px-margin-desktop py-4 max-w-max-width mx-auto">
        <a className="font-headline-md text-headline-md text-primary uppercase tracking-tighter hover:opacity-80 transition-opacity" href="#">
          Mehfil Chai Adda
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <a className="text-on-surface-variant font-label-lg text-label-lg hover:text-primary transition-colors" href="#story">Our Story</a>
          <a className="text-on-surface-variant font-label-lg text-label-lg hover:text-primary transition-colors" href="#menu">The Menu</a>
          <a className="text-on-surface-variant font-label-lg text-label-lg hover:text-primary transition-colors" href="#gallery">The Adda</a>
          <a className="text-on-surface-variant font-label-lg text-label-lg hover:text-primary transition-colors" href="#visit">Find Us</a>
          <button 
            onClick={onOpenReservation} 
            className="bg-tertiary text-on-tertiary px-6 py-2 border-2 border-inverse-surface hard-shadow hard-shadow-active font-label-lg text-label-lg uppercase transition-all cursor-pointer"
          >
            Book Table
          </button>
          <button 
            onClick={onOpenCart} 
            className="bg-primary text-on-primary px-6 py-2 border-2 border-inverse-surface hard-shadow hard-shadow-active font-label-lg text-label-lg uppercase transition-all cursor-pointer"
          >
            Order Online
          </button>
        </nav>

        {/* Mobile Navigation Trigger */}
        <button onClick={toggleMobileMenu} className="md:hidden text-primary flex items-center justify-center cursor-pointer">
          <span className="material-symbols-outlined text-4xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-low border-b-4 border-tertiary px-4 py-6 space-y-4">
          <nav className="flex flex-col gap-4">
            <a 
              className="text-on-surface-variant font-label-lg text-label-lg hover:text-primary transition-colors py-2 border-b border-outline-variant/30" 
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Story
            </a>
            <a 
              className="text-on-surface-variant font-label-lg text-label-lg hover:text-primary transition-colors py-2 border-b border-outline-variant/30" 
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              The Menu
            </a>
            <a 
              className="text-on-surface-variant font-label-lg text-label-lg hover:text-primary transition-colors py-2 border-b border-outline-variant/30" 
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
            >
              The Adda
            </a>
            <a 
              className="text-on-surface-variant font-label-lg text-label-lg hover:text-primary transition-colors py-2 border-b border-outline-variant/30" 
              href="#visit"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Us
            </a>
            <div className="flex flex-col gap-3 pt-2">
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenReservation(); }}
                className="w-full bg-tertiary text-on-tertiary py-3 border-2 border-inverse-surface hard-shadow hard-shadow-active font-label-lg text-label-lg uppercase transition-all cursor-pointer text-center"
              >
                Book Table
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenCart(); }}
                className="w-full bg-primary text-on-primary py-3 border-2 border-inverse-surface hard-shadow hard-shadow-active font-label-lg text-label-lg uppercase transition-all cursor-pointer text-center"
              >
                Order Online
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
