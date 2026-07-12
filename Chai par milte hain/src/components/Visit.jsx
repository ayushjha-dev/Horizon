import React from 'react';

export default function Visit() {
  return (
    <section className="py-24 px-6 md:px-margin-desktop max-w-max-width mx-auto" id="visit">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Find Your Spot</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <div>
                <p className="font-label-lg text-label-lg uppercase tracking-widest text-primary mb-1">The Original Stall</p>
                <p 
                  className="font-body-lg text-body-lg text-on-surface font-bold tracking-tight" 
                  style={{ fontFamily: "'Courier Prime', monospace" }}
                >
                  1428 Gali Guliyan, <br /> 
                  Near Jama Masjid Gate No. 1, <br /> 
                  Old Delhi 110006
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 pt-4">
              <span className="material-symbols-outlined text-primary">call</span>
              <p 
                className="font-body-lg text-body-lg text-on-surface" 
                style={{ fontFamily: "'Courier Prime', monospace" }}
              >
                +91 11 2326 4XXX
              </p>
            </div>
          </div>
          <div className="bg-inverse-surface text-surface p-8 relative overflow-hidden border-4 border-tertiary hard-shadow">
            <div className="tin-texture absolute inset-0 opacity-10"></div>
            <div className="relative z-10">
              <h3 className="hand-painted text-tertiary-fixed text-headline-sm mb-4">Hours of Discussion</h3>
              <ul className="space-y-2 font-label-lg text-label-lg">
                <li className="flex justify-between border-b border-surface/20 pb-2">
                  <span>Monday - Saturday</span> 
                  <span>06:00 - 22:00</span>
                </li>
                <li className="flex justify-between border-b border-surface/20 pb-2">
                  <span>Sunday</span> 
                  <span>07:00 - 13:00</span>
                </li>
                <li className="flex justify-between text-error pt-2">
                  <span>National Holidays</span> 
                  <span>Closed for Adda</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Map Layout */}
        <div className="h-[450px] bg-surface-container-highest border-2 border-outline relative overflow-hidden">
          <img 
            className="w-full h-full object-cover grayscale opacity-80" 
            alt="A vintage style hand-drawn map of Old Delhi lanes with a prominent red marker on a small corner shop titled Mehfil Chai Adda." 
            src="/delhi_map.png"
          />
          <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
