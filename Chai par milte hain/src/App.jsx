import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Visit from './components/Visit';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ReservationModal from './components/ReservationModal';
import TicketModal from './components/TicketModal';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);
  
  // Ticket modal state
  const [ticketOpen, setTicketOpen] = useState(false);
  const [ticketType, setTicketType] = useState('order');
  const [ticketData, setTicketData] = useState(null);

  // Add item to cart
  const handleAddToCart = (name, price) => {
    setCartItems(prevItems => {
      const existing = prevItems.find(item => item.name === name);
      if (existing) {
        return prevItems.map(item => 
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { name, price, quantity: 1 }];
    });
    setCartOpen(true);
  };

  // Change quantity of cart item
  const handleChangeQuantity = (name, delta) => {
    setCartItems(prevItems => 
      prevItems.map(item => {
        if (item.name === name) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean)
    );
  };

  // Remove item from cart
  const handleRemoveItem = (name) => {
    setCartItems(prevItems => prevItems.filter(item => item.name !== name));
  };

  // Submit Order Form
  const handleSubmitOrder = (customerData) => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = Math.round(subtotal * 0.05);
    const total = subtotal + tax;
    const ticketId = `MCA-ORD-${Math.floor(10000 + Math.random() * 90000)}`;

    const newTicketData = {
      ticketId,
      date: new Date().toLocaleDateString(),
      name: customerData.name,
      phone: customerData.phone,
      items: [...cartItems],
      subtotal,
      tax,
      total
    };

    setTicketData(newTicketData);
    setTicketType('order');
    
    // Reset states
    setCartItems([]);
    setCartOpen(false);
    setTicketOpen(true);
  };

  // Submit Reservation Form
  const handleSubmitReservation = (reservationData) => {
    const ticketId = `MCA-RES-${Math.floor(1000 + Math.random() * 9000)}`;
    
    const newTicketData = {
      ticketId,
      name: reservationData.name,
      phone: reservationData.phone,
      guests: reservationData.guests,
      date: reservationData.date,
      time: reservationData.time
    };

    setTicketData(newTicketData);
    setTicketType('reservation');
    
    setReservationOpen(false);
    setTicketOpen(true);
  };

  return (
    <div className="bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col pb-16 md:pb-0">
      <Header 
        onOpenCart={() => setCartOpen(true)} 
        onOpenReservation={() => setReservationOpen(true)} 
      />
      
      <main className="flex-grow">
        <Hero 
          onOpenCart={() => setCartOpen(true)} 
          onOpenReservation={() => setReservationOpen(true)} 
        />
        
        <Story />
        
        <Menu onAddToCart={handleAddToCart} />
        
        <Gallery />
        
        <Testimonials />
        
        <Visit />
      </main>

      <Footer />

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={cartOpen} 
        onClose={() => setCartOpen(false)} 
        cartItems={cartItems}
        onChangeQuantity={handleChangeQuantity}
        onRemoveItem={handleRemoveItem}
        onSubmitOrder={handleSubmitOrder}
      />

      {/* Table Reservation Modal */}
      <ReservationModal 
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
        onSubmitReservation={handleSubmitReservation}
      />

      {/* Ticket Confirmation Modal */}
      <TicketModal 
        isOpen={ticketOpen}
        onClose={() => setTicketOpen(false)}
        ticketType={ticketType}
        ticketData={ticketData}
      />

      {/* Mobile Sticky Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-high border-t-4 border-tertiary z-50 flex justify-around py-3">
        <a className="flex flex-col items-center text-primary" href="#story">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>history</span>
          <span className="text-[10px] font-label-md uppercase">Story</span>
        </a>
        <a className="flex flex-col items-center text-on-surface-variant hover:text-primary" href="#menu">
          <span className="material-symbols-outlined">restaurant_menu</span>
          <span className="text-[10px] font-label-md uppercase">Menu</span>
        </a>
        <a className="flex flex-col items-center text-on-surface-variant hover:text-primary" href="#gallery">
          <span className="material-symbols-outlined">photo_library</span>
          <span className="text-[10px] font-label-md uppercase">Adda</span>
        </a>
        <a className="flex flex-col items-center text-on-surface-variant hover:text-primary" href="#visit">
          <span className="material-symbols-outlined">pin_drop</span>
          <span className="text-[10px] font-label-md uppercase">Visit</span>
        </a>
      </div>
    </div>
  );
}
