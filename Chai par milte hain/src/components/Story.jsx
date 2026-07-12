import React from 'react';

export default function Story() {
  return (
    <section className="py-24 px-6 md:px-margin-desktop max-w-max-width mx-auto" id="story">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 order-2 md:order-1">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-primary"></div>
            <span className="font-label-lg text-label-lg text-primary uppercase tracking-widest">Since 1965</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg mb-8 text-on-surface">The Legacy of Panditji</h2>
          <div className="font-body-lg text-body-lg space-y-6 text-on-surface-variant max-w-xl">
            <p>In the narrow lanes of Purani Dilli, where the air is thick with history and spices, Panditji lit his first coal stove in 1965. It wasn't just about the tea; it was about the *Adda*—the gathering. A place where poets debated politics over a steaming glass of masala chai.</p>
            <p>Three generations later, the kettle remains the same. The brass is a bit more oxidized, the wall plaster a little more weathered, but the brew? It's exactly how it was fifty years ago.</p>
          </div>
          <div className="mt-12 p-8 border-l-4 border-tertiary bg-surface-container-low relative overflow-hidden">
            <div className="chai-stain absolute inset-0"></div>
            <p className="scrawled text-2xl text-tertiary relative z-10">"The kettle never stops, neither do the tales."</p>
          </div>
        </div>
        <div className="md:col-span-5 order-1 md:order-2">
          <div className="relative p-2 bg-surface border-2 border-outline-variant shadow-xl transform rotate-2">
            <img 
              alt="Archival photo of Panditji at the original tea stall" 
              className="w-full h-auto grayscale sepia-[.3]" 
              src="/a_weathered_black_and_white_archival_style_photo_of_a_small_chai_stall_mehfil.png"
            />
            <div className="absolute -bottom-4 -left-4 bg-tertiary text-on-tertiary px-4 py-2 font-label-md text-label-md">PURANI DILLI, CIRCA 1965</div>
          </div>
        </div>
      </div>
    </section>
  );
}
