import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { menuItems, categories } from '../data/menuData';
import { useCart } from '../context/CartContext';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useCart();

  const filteredMenu = menuItems.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div id='menu' className='py-20 bg-slate-50 min-h-screen'>
      <div className='max-w-7xl mx-auto px-4'>

        <div className='text-center mb-10'>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-4xl font-bold font-cursive text-amber-900'
          >
            Explore Our Craft Menu
          </motion.h1>
          <p className='text-gray-600 mt-2 text-sm'>Freshly brewed drinks & artisanal bakeries</p>

          <div className='mt-6 max-w-md mx-auto relative'>
            <input
              type="text"
              placeholder="Search coffee, snacks, desserts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-300 focus:outline-none focus:border-amber-900 bg-white shadow-sm text-sm"
            />
            <Search className="absolute left-3.5 top-3 text-gray-400" size={18} />
          </div>

          <div className='flex justify-center gap-2 md:gap-3 mt-6 flex-wrap'>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-semibold text-xs md:text-sm transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-amber-900 text-white shadow-md scale-105'
                    : 'bg-white text-gray-700 hover:bg-amber-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 place-items-center mt-12'>
          {filteredMenu.length > 0 ? (
            filteredMenu.map((menu) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                key={menu.id} 
                className='rounded-2xl bg-white hover:bg-amber-900 transition-all duration-300 hover:text-white relative shadow-xl group w-full max-w-[320px] p-5 text-center flex flex-col justify-between mt-6'
              >
                <div className='h-[120px]'>
                  <img 
                    src={menu.img} 
                    alt={menu.name} 
                    className='max-w-[170px] max-h-[140px] object-contain block mx-auto transform -translate-y-12 group-hover:scale-105 group-hover:rotate-6 duration-300' 
                  />
                </div>

                <div className='p-2 text-center flex-1 flex flex-col justify-between'>
                  <div>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 group-hover:bg-amber-800 group-hover:text-amber-100 transition-colors">
                      {menu.category}
                    </span>
                    <h2 className='text-xl font-bold mt-2'>{menu.name}</h2>
                    <p className='text-gray-500 group-hover:text-amber-100 transition-colors text-xs line-clamp-2 mt-1.5'>
                      {menu.description}
                    </p>
                  </div>
                  
                  <div className='flex justify-between mt-6 items-center px-2'>
                    <p className='text-lg font-bold'>${menu.basePrice.toFixed(2)}</p>
                    <button 
                      onClick={() => addToCart(menu)}
                      className='bg-amber-900 text-white py-2 px-4 rounded-lg group-hover:bg-white group-hover:text-amber-900 font-semibold transition-colors duration-300 text-sm shadow-md'
                    >
                      Customize & Add
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500 font-medium">
              No items match "{searchQuery}". Try searching for something else!
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Menu;