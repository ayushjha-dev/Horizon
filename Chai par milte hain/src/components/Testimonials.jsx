import React from 'react';

export default function Testimonials() {
  return (
    <section className="bg-surface-container-low py-24 border-t-4 border-tertiary overflow-hidden">
      <div className="px-6 md:px-margin-desktop max-w-max-width mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="hand-painted text-primary font-headline-lg text-headline-lg leading-tight">
              Overheard <br className="hidden md:block"/> At the <br className="hidden md:block"/> Adda
            </h2>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Scrawled Note 1 */}
            <div className="weathered-paper p-8 hard-shadow border border-outline-variant transform -rotate-1 relative">
              <span className="material-symbols-outlined absolute -top-4 -left-4 text-tertiary text-4xl bg-surface p-1 rounded-full border border-outline">
                format_quote
              </span>
              <p className="scrawled text-xl text-on-surface mb-6">
                "Still the best place in the city to argue about nothing for three hours. The Bun Makkhan is non-negotiable."
              </p>
              <p className="font-label-lg text-label-lg text-primary uppercase">— Sameer K.</p>
            </div>
            
            {/* Scrawled Note 2 */}
            <div className="weathered-paper p-8 hard-shadow border border-outline-variant transform rotate-2 relative">
              <p className="scrawled text-xl text-on-surface mb-6">
                "Panditji's grandson knows exactly how much ginger I like. It's not a shop, it's home."
              </p>
              <p className="font-label-lg text-label-lg text-primary uppercase">— Mrs. Kapoor</p>
            </div>
            
            {/* Scrawled Note 3 */}
            <div className="weathered-paper p-8 hard-shadow border border-outline-variant transform -rotate-2 relative">
              <p className="scrawled text-xl text-on-surface mb-6">
                "The scent of coal and cardamom. It's the smell of my childhood. Don't change a single brick."
              </p>
              <p className="font-label-lg text-label-lg text-primary uppercase">— Dr. Ahmed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
