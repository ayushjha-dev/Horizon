import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Repairs from './components/Repairs';
import Stepper from './components/Stepper';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#111111] font-sans antialiased overflow-x-hidden selection:bg-[#0FA3A3]/20 selection:text-[#0FA3A3]">
      {/* Sticky Navbar */}
      <Navbar />
      
      {/* Asymmetrical Hero Banner */}
      <Hero />
      
      {/* Product Catalog */}
      <Products />
      
      {/* Alternating Repair Services */}
      <Repairs />
      
      {/* Booking Stepper Process */}
      <Stepper />
      
      {/* Certified Diagnostics & Trust */}
      <About />
      
      {/* Editorial Testimonials */}
      <Testimonials />
      
      {/* Contact & Map Footer */}
      <Footer />
      
      {/* Persistent WhatsApp Floating Shortcut */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
