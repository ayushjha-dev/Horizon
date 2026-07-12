import React, { useState } from 'react';

export default function ReservationModal({ isOpen, onClose, onSubmitReservation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('4');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('06:00 PM');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !date) return;
    
    onSubmitReservation({
      name,
      phone,
      guests,
      date,
      time
    });

    // Reset fields
    setName('');
    setPhone('');
    setGuests('4');
    setDate('');
    setTime('06:00 PM');
  };

  if (!isOpen) return null;

  return (
    <div 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 bg-inverse-surface/85 backdrop-blur-sm z-[110] flex items-center justify-center p-4 transition-opacity duration-300"
    >
      <div className="bg-surface-container border-4 border-inverse-surface p-8 max-w-lg w-full relative hard-shadow transform scale-100 transition-transform">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-on-surface hover:text-primary transition-colors cursor-pointer flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>
        <div className="text-center mb-6">
          <h2 className="font-headline-sm text-headline-sm uppercase text-primary">Reserve a Khatiya</h2>
          <p className="font-body-md text-sm text-on-surface-variant mt-1">Snag a spot for tea and talks. No time limit on stories.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="font-label-md text-label-md block text-on-surface-variant">Full Name</label>
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
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="font-label-md text-label-md block text-on-surface-variant">Guests</label>
              <select 
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required 
                className="w-full bg-surface-container-highest border-2 border-outline text-on-surface p-2 font-body-md rounded focus:outline-none focus:border-primary"
              >
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="4">4 People</option>
                <option value="6">6 People</option>
                <option value="8">8+ People</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="font-label-md text-label-md block text-on-surface-variant">Date</label>
              <input 
                type="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required 
                className="w-full bg-surface-container-highest border-2 border-outline text-on-surface p-2 font-body-md rounded focus:outline-none focus:border-primary"
              />
            </div>
            <div className="space-y-1">
              <label className="font-label-md text-label-md block text-on-surface-variant">Time Slot</label>
              <select 
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required 
                className="w-full bg-surface-container-highest border-2 border-outline text-on-surface p-2 font-body-md rounded focus:outline-none focus:border-primary"
              >
                <option value="08:00 AM">08:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="04:00 PM">04:00 PM</option>
                <option value="06:00 PM">06:00 PM</option>
                <option value="08:00 PM">08:00 PM</option>
              </select>
            </div>
          </div>
          <button 
            type="submit" 
            className="w-full bg-primary text-on-primary py-3 border-2 border-inverse-surface hard-shadow hard-shadow-active font-label-lg text-label-lg uppercase tracking-wider transition-all mt-4 cursor-pointer"
          >
            Lock My Table
          </button>
        </form>
      </div>
    </div>
  );
}
