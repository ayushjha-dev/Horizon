import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-inverse-surface border-t-4 border-tertiary relative">
      <div className="absolute top-0 left-0 w-full brass-divider"></div>
      <div className="px-6 md:px-margin-desktop py-16 max-w-max-width mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <h2 className="font-headline-md text-headline-md text-primary uppercase mb-2">Mehfil Chai Adda</h2>
            <p className="font-body-md text-body-md text-surface-variant max-w-xs">
              Preserving the culture of conversation, one terracotta cup at a time.
            </p>
          </div>
          <nav className="flex flex-wrap gap-8 text-surface-variant font-label-md text-label-md">
            <a className="hover:text-primary transition-colors" href="#gallery">The Gallery</a>
            <a className="hover:text-primary transition-colors" href="#">Privacy Ledger</a>
            <a className="hover:text-primary transition-colors" href="#story">Our Legacy</a>
            <a className="hover:text-primary transition-colors" href="#">Franchise (Coming 2025)</a>
          </nav>
        </div>
        
        <div className="mt-16 pt-8 border-t border-surface-variant/20 flex flex-col md:flex-row justify-between items-center gap-6 pb-12 md:pb-0">
          <p className="font-label-md text-label-md text-surface-variant">
            ESTD 1965 • Purani Dilli. All Rights Reserved.
          </p>
          <p className="hand-painted text-tertiary-fixed text-headline-sm">
            Chai pe milte hain.
          </p>
          <div className="flex gap-4">
            <a className="text-surface-variant hover:text-primary transition-colors flex items-center justify-center" href="#">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a className="text-surface-variant hover:text-primary transition-colors flex items-center justify-center" href="#">
              <span className="material-symbols-outlined">chat</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
