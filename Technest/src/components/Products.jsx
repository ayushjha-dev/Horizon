import React, { useState } from 'react';
import { ShoppingBag, ArrowUpRight, X } from 'lucide-react';
import { getWhatsAppLink } from '../config';

const PRODUCTS_DATA = [
  {
    id: 'macbook-pro',
    name: 'MacBook Pro 14" (M3 Max)',
    category: 'Laptops',
    price: '₹1,99,900',
    priceRaw: 199900,
    image: '/product_laptop.png',
    description: 'The ultimate professional workstation. Features a 14-core CPU, 30-core GPU, 36GB unified memory, and 1TB SSD. Built for extreme workflows, compiling, and creators.',
    specs: ['Apple M3 Max chip', '14.2" Liquid Retina XDR display', '120Hz ProMotion refresh rate', '36GB Unified RAM', '1TB Superfast SSD storage', 'Up to 18 hours battery life'],
    featured: true
  },
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro Max',
    category: 'Mobiles',
    price: '₹1,34,900',
    priceRaw: 134900,
    image: '/product_phone.png',
    description: 'Forged in aerospace-grade titanium. Features the ground-breaking A17 Pro chip, custom Action button, and the most powerful iPhone camera system ever.',
    specs: ['A17 Pro chip with 6-core GPU', 'Titanium design with Ceramic Shield front', '6.7" Super Retina XDR OLED', '5x Telephoto optical zoom lens', 'USB-C supporting USB 3 speeds'],
    featured: false
  },
  {
    id: 'sony-headphones',
    name: 'Sony WH-1000XM5 ANC',
    category: 'Audio',
    price: '₹29,999',
    priceRaw: 29999,
    image: '/product_headphones.png',
    description: 'Industry-leading noise cancellation with eight microphones and Auto NC Optimizer. Incredible high-res audio and crystal-clear hands-free calling.',
    specs: ['Auto Noise Cancelling Optimizer', 'Specially developed 30mm driver unit', 'Ultra-comfortable light weight leather', 'Up to 30-hour battery life', 'Quick charging: 3 min for 3 hours'],
    featured: false
  },
  {
    id: 'keychron-keyboard',
    name: 'Keychron Q1 Pro Mechanical',
    category: 'Accessories',
    price: '₹18,499',
    priceRaw: 18499,
    image: '/product_keyboard.png',
    description: 'A full aluminum QMK/VIA wireless mechanical keyboard. Double-gasket mount design with hot-swappable switches, keycaps, and premium stabilizers.',
    specs: ['CNC Aluminum body', 'QMK/VIA open-source key mapping', 'Bluetooth 5.1 & Wired Type-C', 'Hot-swappable mechanical switches', 'South-facing RGB backlighting'],
    featured: false
  },
  {
    id: 'ipad-pro-11',
    name: 'iPad Pro 11" (M4)',
    category: 'Mobiles',
    price: '₹99,900',
    priceRaw: 99900,
    image: '/product_phone.png', // Reusing titanium smartphone for similar premium slate feel
    description: 'Impossibly thin design powered by the next-generation M4 chip. Features the breakthrough Tandem OLED Ultra Retina XDR display.',
    specs: ['Apple M4 Chip with 10-core GPU', 'Ultra Retina XDR Tandem OLED display', 'Pro camera system with LiDAR Scanner', 'Wi-Fi 6E and 5G cellular capability'],
    featured: false
  },
  {
    id: 'audio-momentum-4',
    name: 'Sennheiser Momentum 4',
    category: 'Audio',
    price: '₹24,990',
    priceRaw: 24990,
    image: '/product_headphones.png', // Reusing premium headphones image
    description: 'Audiophile-inspired sound quality meets outstanding comfort. Adaptive Noise Cancellation and customizable sound profiles create a bespoke listening experience.',
    specs: ['Sennheiser signature sound', 'Adaptive Noise Cancellation', 'Remarkable 60-hour battery life', 'Premium fabric headband design'],
    featured: false
  }
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = ['All', 'Mobiles', 'Laptops', 'Accessories', 'Audio'];

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.category === activeCategory);

  return (
    <section id="shop" className="py-24 bg-[#FAFAF9] border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <span className="font-sans font-semibold text-xs uppercase tracking-widest text-[#0FA3A3] mb-3 block">
              Curated Catalog
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#111111] tracking-tight">
              Selected Hardware
            </h2>
            <p className="font-sans text-[#111111]/60 text-sm sm:text-base mt-2">
              Every device is individually inspected, certified, and backed by our shop warranty. Ready for immediate pickup or delivery.
            </p>
          </div>
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0 border-b md:border-b-0 pb-4 md:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 font-sans font-semibold text-xs uppercase tracking-wider transition-all ${
                  activeCategory === category
                    ? 'border-b-2 border-[#0FA3A3] text-[#111111]'
                    : 'text-[#111111]/40 hover:text-[#111111]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isFeatured = product.featured && activeCategory === 'All';
            const chatLink = getWhatsAppLink(`Hi TechNest, I am interested in buying the ${product.name} priced at ${product.price}. Is this item available in stock?`);

            return (
              <div
                key={product.id}
                className={`group relative flex flex-col justify-between border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#111111] ${
                  isFeatured ? 'md:col-span-2 row-span-1 lg:flex-row gap-8' : ''
                }`}
              >
                {/* Product Image Panel */}
                <div className={`relative overflow-hidden bg-gray-50 flex items-center justify-center border border-gray-100 ${
                  isFeatured ? 'lg:w-[45%] aspect-[4/3] lg:aspect-square flex-shrink-0' : 'aspect-square mb-6'
                }`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-102"
                  />
                  {product.featured && (
                    <span className="absolute top-4 left-4 bg-[#111111] text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1">
                      Featured
                    </span>
                  )}
                </div>

                {/* Product Meta & Actions */}
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <span className="font-sans text-[10px] uppercase tracking-wider text-[#111111]/40 font-bold">
                        {product.category}
                      </span>
                      <span className="font-display font-bold text-lg text-[#111111]">
                        {product.price}
                      </span>
                    </div>
                    
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111111] group-hover:text-[#0FA3A3] transition-colors mb-3">
                      {product.name}
                    </h3>
                    
                    <p className="font-sans text-sm text-[#111111]/60 leading-relaxed mb-6 line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 mt-auto">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="inline-flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-wider text-[#111111] border-b border-[#111111] pb-1 hover:text-[#0FA3A3] hover:border-[#0FA3A3] transition-all"
                    >
                      View Details
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    
                    <a
                      href={chatLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-2 bg-[#111111] hover:bg-[#0FA3A3] text-white font-sans font-semibold text-xs uppercase tracking-wider px-4 py-2.5 transition-all"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Chat to Buy
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111111]/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-[#111111]/20 flex flex-col md:flex-row">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#FAFAF9] hover:bg-gray-100 border border-gray-200 text-[#111111] hover:text-[#0FA3A3] transition-colors"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image side */}
            <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-gray-200">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="max-h-[300px] md:max-h-full object-cover"
              />
            </div>

            {/* Content side */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <span className="font-sans text-xs uppercase tracking-widest text-[#0FA3A3] font-semibold mb-1 block">
                  {selectedProduct.category}
                </span>
                
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#111111] mb-2 leading-tight">
                  {selectedProduct.name}
                </h3>
                
                <div className="font-display font-bold text-xl text-[#0FA3A3] mb-6">
                  {selectedProduct.price}
                </div>

                <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-[#111111] mb-2">
                  Overview
                </h4>
                <p className="font-sans text-sm text-[#111111]/70 leading-relaxed mb-6">
                  {selectedProduct.description}
                </p>

                <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-[#111111] mb-2">
                  Technical Specifications
                </h4>
                <ul className="space-y-1.5 mb-8">
                  {selectedProduct.specs.map((spec, i) => (
                    <li key={i} className="font-sans text-xs text-[#111111]/60 flex items-start gap-2">
                      <span className="text-[#0FA3A3] mt-0.5">•</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 border-t border-gray-100 pt-6">
                <a
                  href={getWhatsAppLink(`Hi TechNest, I want to purchase ${selectedProduct.name} (${selectedProduct.price}). Can you confirm if it is in stock?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0FA3A3] hover:bg-[#0C8F8F] text-white font-sans font-semibold text-xs uppercase tracking-wider py-4 transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Chat to Buy Now
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
