import React, { useState } from 'react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onChangeQuantity, 
  onRemoveItem, 
  onSubmitOrder 
}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + tax;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    onSubmitOrder({ name, phone });
    setName('');
    setPhone('');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className={`fixed inset-0 bg-inverse-surface/60 backdrop-blur-sm z-[90] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      ></div>

      {/* Cart Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[450px] max-w-full bg-surface-container border-l-4 border-inverse-surface z-[100] transition-transform duration-300 flex flex-col justify-between p-6 md:p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-headline-sm text-headline-sm uppercase text-primary">Your Order Ledger</h2>
          <button 
            onClick={onClose} 
            className="text-on-surface hover:text-primary transition-colors cursor-pointer flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>

        {cartItems.length === 0 ? (
          /* Empty State */
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
            <span className="material-symbols-outlined text-6xl text-outline">shopping_bag</span>
            <p className="font-label-lg uppercase text-on-surface-variant">Your ledger is empty.</p>
            <p className="font-body-md text-sm text-on-surface-variant">Add hot brews and parathas to start debating.</p>
          </div>
        ) : (
          /* Items List */
          <div className="flex-1 flex flex-col justify-between overflow-hidden">
            <div className="flex-1 overflow-y-auto space-y-4 pr-1 custom-scroll mb-6">
              {cartItems.map((item, index) => (
                <div 
                  key={`${item.name}-${index}`}
                  className="flex justify-between items-center bg-surface-container-highest p-3 border border-outline rounded text-on-surface"
                >
                  <div>
                    <p className="font-label-lg uppercase text-sm font-bold text-on-surface-variant">{item.name}</p>
                    <p className="font-body-md text-xs text-on-surface-variant">₹{item.price} x {item.quantity}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => onChangeQuantity(item.name, -1)}
                      className="bg-surface border border-outline px-2 py-0.5 font-label-md cursor-pointer hover:bg-surface-variant transition-colors"
                    >
                      -
                    </button>
                    <span className="font-label-lg font-bold min-w-[20px] text-center">{item.quantity}</span>
                    <button 
                      onClick={() => onChangeQuantity(item.name, 1)}
                      className="bg-surface border border-outline px-2 py-0.5 font-label-md cursor-pointer hover:bg-surface-variant transition-colors"
                    >
                      +
                    </button>
                    <button 
                      onClick={() => onRemoveItem(item.name)}
                      className="text-error hover:text-red-700 ml-2 cursor-pointer flex items-center justify-center"
                    >
                      <span className="material-symbols-outlined text-xl">delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Summary & Form */}
            <div className="border-t-2 border-dashed border-outline pt-6 space-y-4">
              <div className="space-y-2 text-on-surface font-body-md">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Adda GST (5%):</span>
                  <span>₹{tax}</span>
                </div>
                <div className="flex justify-between font-label-lg text-lg font-bold text-primary">
                  <span>Total Ledger:</span>
                  <span>₹{total}</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 border-t border-outline-variant/30 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-label-md text-label-md block text-on-surface-variant">Name</label>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required 
                      className="w-full bg-surface-container-highest border-2 border-outline text-on-surface p-2 font-body-md rounded focus:outline-none focus:border-primary" 
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-label-md text-label-md block text-on-surface-variant">Phone Number</label>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required 
                      pattern="[0-9]{10}" 
                      className="w-full bg-surface-container-highest border-2 border-outline text-on-surface p-2 font-body-md rounded focus:outline-none focus:border-primary" 
                      placeholder="10-digit number"
                    />
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-primary text-on-primary py-3 border-2 border-inverse-surface hard-shadow hard-shadow-active font-label-lg text-label-lg uppercase tracking-wider transition-all cursor-pointer"
                >
                  Send Order Details
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
