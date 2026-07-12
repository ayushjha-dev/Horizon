import React from 'react';

export default function TicketModal({ isOpen, onClose, ticketType, ticketData }) {
  if (!isOpen || !ticketData) return null;

  return (
    <div 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 bg-inverse-surface/85 backdrop-blur-sm z-[120] flex items-center justify-center p-4 transition-opacity duration-300"
    >
      <div className="max-w-md w-full relative transform scale-100 transition-transform">
        <div className="vintage-ticket p-8 border-4 border-inverse-surface hard-shadow text-on-surface text-center space-y-6 relative overflow-hidden">
          <div className="tin-texture absolute inset-0 opacity-5 pointer-events-none"></div>
          
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-on-surface hover:text-primary transition-colors cursor-pointer z-10 flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          {ticketType === 'order' ? (
            /* Order Ticket Layout */
            <>
              <div className="border-b-2 border-dashed border-outline pb-4">
                <span className="font-label-md text-label-md text-primary uppercase tracking-widest">Mehfil Chai Adda</span>
                <h3 className="font-headline-sm text-headline-sm uppercase mt-1">Official Bill Ledger</h3>
              </div>
              
              <div className="space-y-2 text-left font-body-md">
                <div className="flex justify-between text-xs text-on-surface-variant mb-2">
                  <span>Order: <strong>{ticketData.ticketId}</strong></span>
                  <span>Date: {ticketData.date}</span>
                </div>
                
                <div className="flex justify-between text-xs text-on-surface-variant mb-2 border-b border-outline-variant/30 pb-1">
                  <span>Guest: <strong>{ticketData.name}</strong></span>
                  <span>Phone: <strong>{ticketData.phone}</strong></span>
                </div>
                
                <div className="border-b border-outline-variant pb-1 font-bold text-xs uppercase tracking-wider text-on-surface-variant">Items Ordered:</div>
                <div className="max-h-[150px] overflow-y-auto space-y-1 custom-scroll pr-1">
                  {ticketData.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between border-b border-outline-variant/50 py-1 text-xs font-body-md text-on-surface">
                      <span>{item.name} (x{item.quantity})</span>
                      <span>₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-outline-variant pt-2 space-y-1 text-sm">
                  <div className="flex justify-between text-xs">
                    <span>Subtotal:</span> 
                    <span>₹{ticketData.subtotal}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Adda GST (5%):</span> 
                    <span>₹{ticketData.tax}</span>
                  </div>
                  <div className="flex justify-between font-bold text-primary">
                    <span>Total Ledger:</span> 
                    <span>₹{ticketData.total}</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t-2 border-dashed border-outline flex flex-col items-center">
                <p className="font-label-lg uppercase text-xs tracking-wider text-primary mb-1">Status: Preparing</p>
                <p className="scrawled text-sm text-on-surface-variant">Panditji is brewing your order. Serve hot, debate long!</p>
              </div>
            </>
          ) : (
            /* Reservation Ticket Layout */
            <>
              <div className="border-b-2 border-dashed border-outline pb-4">
                <span className="font-label-md text-label-md text-primary uppercase tracking-widest">Mehfil Chai Adda</span>
                <h3 className="font-headline-sm text-headline-sm uppercase mt-1">Khatiya Reserved</h3>
              </div>
              
              <div className="space-y-3 font-body-md text-left">
                <div className="flex justify-between border-b border-outline-variant pb-1">
                  <strong>Guest Name:</strong> <span>{ticketData.name}</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant pb-1">
                  <strong>Phone Number:</strong> <span>{ticketData.phone}</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant pb-1">
                  <strong>Party Size:</strong> <span>{ticketData.guests} People</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant pb-1">
                  <strong>Selected Date:</strong> <span>{ticketData.date}</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant pb-1">
                  <strong>Time Slot:</strong> <span>{ticketData.time}</span>
                </div>
              </div>
              
              <div className="pt-4 border-t-2 border-dashed border-outline flex flex-col items-center">
                <div className="bg-inverse-surface text-surface px-4 py-2 font-label-md text-xs tracking-wider mb-2 select-none uppercase">
                  Ticket {ticketData.ticketId}
                </div>
                <p className="scrawled text-sm text-on-surface-variant">Please present this ticket at the counter. Panditji is waiting!</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
