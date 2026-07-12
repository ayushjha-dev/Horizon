import React from 'react';

export default function Hero({ onOpenCart, onOpenReservation }) {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center brightness-50" 
          style={{ 
            backgroundImage: "url('/cinematic_close_up_of_strong_masala_chai_being_poured_from_a_soot_blackened.png')" 
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 px-6 md:px-margin-desktop max-w-max-width mx-auto w-full">
        <div className="max-w-2xl transform -rotate-1">
          <div className="max-w-[280px] md:max-w-[380px] mb-6 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <img 
              src="/mehfil_chai_adda_wordmark_logo.png" 
              alt="Mehfil Chai Adda" 
              className="w-full h-auto object-contain drop-shadow-[4px_4px_10px_rgba(0,0,0,0.5)]"
            />
          </div>
          <h1 className="hand-painted text-surface font-headline-lg text-headline-lg leading-none mb-6">
            Strong chai. <br/>
            <span className="text-tertiary-fixed">Longer stories.</span>
          </h1>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#menu" 
              className="bg-tertiary text-on-tertiary px-8 py-4 border-2 border-inverse-surface hard-shadow hard-shadow-active font-label-lg text-label-lg uppercase text-center flex items-center justify-center cursor-pointer transition-all"
            >
              View Menu
            </a>
            <button 
              onClick={onOpenReservation} 
              className="bg-primary text-on-primary px-8 py-4 border-2 border-inverse-surface hard-shadow hard-shadow-active font-label-lg text-label-lg uppercase cursor-pointer transition-all"
            >
              Book a Table
            </button>
            <button 
              onClick={onOpenCart} 
              className="bg-surface text-on-surface px-8 py-4 border-2 border-outline hover:bg-surface-variant hard-shadow hard-shadow-active font-label-lg text-label-lg uppercase cursor-pointer transition-all"
            >
              Order Online
            </button>
          </div>
        </div>
      </div>
      {/* Brass Line Decorative */}
      <div className="absolute bottom-0 left-0 w-full brass-divider"></div>
    </section>
  );
}
