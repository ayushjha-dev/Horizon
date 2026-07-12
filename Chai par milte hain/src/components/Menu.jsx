import React, { useState } from 'react';

const MENU_ITEMS = [
  // Kulhad Brews
  {
    id: 'masala-chai',
    name: 'Masala Chai',
    price: 20,
    category: 'brews',
    description: 'Signature blend of cardamom, cloves, and ginger.',
    icon: 'local_cafe',
    badge: 'verified'
  },
  {
    id: 'adrak-chai',
    name: 'Adrak Chai',
    price: 15,
    category: 'brews',
    description: 'The sharp kick of fresh hand-crushed ginger root.',
    icon: 'eco'
  },
  {
    id: 'elaichi-chai',
    name: 'Elaichi Chai',
    price: 18,
    category: 'brews',
    description: 'A fragrant brew infused with green cardamom pods.',
    icon: 'local_cafe'
  },
  {
    id: 'kesar-pista-chai',
    name: 'Kesar Pista Chai',
    price: 25,
    category: 'brews',
    description: 'Premium saffron and pistachio infused rich milk tea.',
    icon: 'local_cafe',
    badge: 'star'
  },
  {
    id: 'tandoori-chai',
    name: 'Tandoori Chai',
    price: 30,
    category: 'brews',
    description: 'Clay-pot smoked hot tea with caramelized aroma.',
    icon: 'mode_heat'
  },
  {
    id: 'adda-filter-coffee',
    name: 'Adda Filter Coffee',
    price: 22,
    category: 'brews',
    description: 'Strong frothed coffee served in a traditional hot steel tumbler.',
    icon: 'coffee'
  },

  // Adda Bakery
  {
    id: 'bun-makkhan',
    name: 'Bun Makkhan',
    price: 45,
    category: 'bakery',
    description: 'Soft bun with a thick slab of fresh white butter.',
    icon: 'bakery_dining',
    badge: 'favorite'
  },
  {
    id: 'bun-jam-makkhan',
    name: 'Bun Jam Makkhan',
    price: 50,
    category: 'bakery',
    description: 'Soft bun loaded with sweet mixed fruit jam and white butter.',
    icon: 'bakery_dining'
  },
  {
    id: 'shrewsbury-rusk',
    name: 'Shrewsbury Rusk',
    price: 15,
    category: 'bakery',
    description: 'Crispy twice-baked sweet shortbread rusk.',
    icon: 'cookie'
  },
  {
    id: 'traditional-rusk',
    name: 'Traditional Rusk',
    price: 10,
    category: 'bakery',
    description: 'Crunchy twice-baked bread, perfect for dunking.',
    icon: 'cookie'
  },
  {
    id: 'mawa-cake-slice',
    name: 'Mawa Cake Slice',
    price: 35,
    category: 'bakery',
    description: 'Rich cake slice made with caramelized milk solids and cardamom.',
    icon: 'cake'
  },
  {
    id: 'jeera-biscuits',
    name: 'Jeera Biscuits',
    price: 15,
    category: 'bakery',
    description: 'Light, crunchy, salty-sweet cumin cookies.',
    icon: 'cookie'
  },

  // Garam Nashta
  {
    id: 'aloo-paratha',
    name: 'Aloo Paratha',
    price: 60,
    category: 'nashta',
    description: 'Tawa-fried flatbread stuffed with spiced potatoes and butter.',
    icon: 'breakfast_dining',
    badge: 'verified'
  },
  {
    id: 'paneer-paratha',
    name: 'Paneer Paratha',
    price: 80,
    category: 'nashta',
    description: 'Stuffed wheat flatbread with grated spiced paneer and fresh herbs.',
    icon: 'breakfast_dining'
  },
  {
    id: 'bread-omelette',
    name: 'Bread Omelette',
    price: 55,
    category: 'nashta',
    description: 'Spicy two-egg omelette toasted with buttered bread slices.',
    icon: 'breakfast_dining'
  },
  {
    id: 'samosa-dual',
    name: 'Samosa Dual',
    price: 30,
    category: 'nashta',
    description: 'Pair of crispy golden pastry cones stuffed with spiced potatoes.',
    icon: 'restaurant'
  },
  {
    id: 'vegetable-maggi',
    name: 'Vegetable Maggi',
    price: 45,
    category: 'nashta',
    description: 'Street-style instant noodles tossed with fresh garden vegetables.',
    icon: 'ramen_dining'
  },
  {
    id: 'cheese-maggi',
    name: 'Cheese Maggi',
    price: 60,
    category: 'nashta',
    description: 'Hot noodles topped with a generous layer of grated cheddar cheese.',
    icon: 'ramen_dining',
    badge: 'star'
  }
];

export default function Menu({ onAddToCart }) {
  const [activeTab, setActiveTab] = useState('brews');

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeTab);

  return (
    <section className="bg-inverse-surface py-24 border-y-4 border-tertiary overflow-hidden relative" id="menu">
      <div className="absolute inset-0 tin-texture opacity-10"></div>
      <div className="px-6 md:px-margin-desktop max-w-max-width mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="hand-painted text-surface-bright font-headline-lg text-headline-lg mb-2">The Daily Ledger</h2>
          <div className="brass-divider w-32 mx-auto"></div>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 overflow-x-auto pb-4 max-w-4xl mx-auto px-4">
          <button 
            onClick={() => setActiveTab('brews')}
            className={`${
              activeTab === 'brews' 
                ? 'bg-primary text-on-primary border-inverse-surface hard-shadow' 
                : 'bg-surface-container-highest text-on-surface border-outline hover:bg-surface-container-high'
            } border-2 px-6 py-2.5 font-label-lg text-label-lg uppercase tracking-wider transition-all cursor-pointer`}
          >
            Kulhad Brews
          </button>
          <button 
            onClick={() => setActiveTab('bakery')}
            className={`${
              activeTab === 'bakery' 
                ? 'bg-primary text-on-primary border-inverse-surface hard-shadow' 
                : 'bg-surface-container-highest text-on-surface border-outline hover:bg-surface-container-high'
            } border-2 px-6 py-2.5 font-label-lg text-label-lg uppercase tracking-wider transition-all cursor-pointer`}
          >
            Adda Bakery
          </button>
          <button 
            onClick={() => setActiveTab('nashta')}
            className={`${
              activeTab === 'nashta' 
                ? 'bg-primary text-on-primary border-inverse-surface hard-shadow' 
                : 'bg-surface-container-highest text-on-surface border-outline hover:bg-surface-container-high'
            } border-2 px-6 py-2.5 font-label-lg text-label-lg uppercase tracking-wider transition-all cursor-pointer`}
          >
            Garam Nashta
          </button>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div 
              key={item.id}
              className="bg-surface-container-highest p-6 border-2 border-outline relative group hover:bg-primary-container transition-all duration-300 menu-item-animate flex flex-col justify-between hover:-translate-y-1 hover:scale-[1.02]"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span 
                    className="material-symbols-outlined text-primary group-hover:text-surface-bright transition-colors" 
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {item.icon}
                  </span>
                  <span className="font-label-lg text-label-lg text-tertiary font-bold group-hover:text-surface-bright">
                    ₹{item.price}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 group-hover:text-surface-bright uppercase">
                  {item.name}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant group-hover:text-surface-bright/80">
                  {item.description}
                </p>
              </div>
              <div className="mt-6 relative">
                <button 
                  onClick={() => onAddToCart(item.name, item.price)}
                  className="add-to-order-btn w-full bg-surface text-on-surface border-2 border-outline py-2 font-label-md text-label-md uppercase tracking-wider group-hover:bg-surface-bright group-hover:text-primary transition-all duration-300 cursor-pointer"
                >
                  Add to Order
                </button>
                {item.badge && (
                  <div className="absolute bottom-2 right-2 opacity-10 group-hover:opacity-30 pointer-events-none transition-opacity">
                    <span className="material-symbols-outlined text-4xl">{item.badge}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
