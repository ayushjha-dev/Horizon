import React from 'react';

export default function Gallery() {
  return (
    <section className="py-24 bg-surface overflow-hidden" id="gallery">
      <div className="px-6 md:px-margin-desktop max-w-max-width mx-auto mb-16">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">The Adda Atmosphere</h2>
        <div className="brass-divider w-24 mt-4"></div>
      </div>
      <div className="relative h-[400px] md:h-[800px] w-full max-w-[1400px] mx-auto px-6 md:px-margin-desktop">
        <img 
          alt="Collage of Old Delhi chai life, rickshaws, and terracotta cups" 
          className="w-full h-full object-contain filter saturate-75 contrast-110" 
          src="/a_scattered_collage_of_old_delhi_chai_culture_stacked_clay_kulhads_a_soot.png"
        />
        {/* Decorative elements to enhance the scattering */}
        <div className="absolute top-1/4 right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-tertiary/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
}
