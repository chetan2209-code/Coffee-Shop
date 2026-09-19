import React from 'react'
import coffee from '../assets/coffee5.png'
import Bean1 from '../assets/bean1.png'
import Bean2 from '../assets/bean2.png'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "20+", label: "Coffee Blends" },
  { value: "5", label: "Years of Craft" },
];

const Hero = () => {
  return (
    <div className='relative overflow-hidden from-slate-100 to-amber-950 bg-gradient-to-br min-h-screen flex items-center pt-24 pb-10'>

      {/* Background glow blobs - slowly moving */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className='absolute top-0 right-0 w-[500px] h-[500px] bg-amber-700/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none'
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className='absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-900/10 rounded-full blur-3xl -translate-x-1/3 pointer-events-none'
      />

      <div className='max-w-7xl mx-auto grid md:grid-cols-2 place-items-center relative px-4 md:px-0 gap-10'>
        {/* text section */}
        <div className='space-y-6 z-10'>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className='inline-flex items-center gap-2 bg-amber-900/10 border border-amber-900/30 px-4 py-1.5 rounded-full'
          >
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-600 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-amber-700'></span>
            </span>
            <span className='text-amber-900 text-xs font-semibold tracking-wide'>
              Freshly Roasted, Every Morning
            </span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className='text-amber-900 font-semibold text-lg'
          >
            Welcome to King Cafe
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className='text-4xl md:text-6xl font-bold leading-tight'
            style={{ fontFamily: "'Lobster', cursive" }}
          >
            Experience Artisanal <span className='text-amber-900'>Coffee</span> at King Cafe
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='text-gray-700 text-lg max-w-md'
          >
            Small-batch roasted beans, handcrafted brews, and a space designed
            for your best coffee moment — every single day.
          </motion.p>

          {/* Star rating social proof */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className='flex items-center gap-2'
          >
            <div className='flex text-amber-500'>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className='text-sm text-gray-700 font-medium'>4.9/5 from 500+ reviews</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className='flex flex-wrap gap-3 pt-2'
          >
            <a href="#menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className='group bg-amber-900 text-white px-6 py-3 rounded-md hover:bg-amber-800 transition flex items-center gap-2 font-semibold shadow-lg shadow-amber-900/20'
              >
                View Menu
                <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' />
              </motion.button>
            </a>
            <a href="#about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className='bg-transparent border-2 border-amber-900 text-amber-900 rounded-md px-6 py-3 hover:bg-amber-900 hover:text-white transition font-semibold'
              >
                About Us
              </motion.button>
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className='flex gap-8 pt-6 border-t border-amber-900/20 mt-6'
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <h4 className='text-2xl md:text-3xl font-bold text-amber-900'>{stat.value}</h4>
                <p className='text-xs text-gray-600 font-medium'>{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* image section - beans ab isi container ke andar, relative isi se */}
        <div className='relative flex items-center justify-center w-full'>

          {/* Steam wisps rising from cup */}
          <div className='absolute top-[8%] left-1/2 -translate-x-1/2 flex gap-3 z-20 pointer-events-none'>
            <span className='steam-wisp' style={{ animationDelay: '0s' }} />
            <span className='steam-wisp' style={{ animationDelay: '1s' }} />
            <span className='steam-wisp' style={{ animationDelay: '2s' }} />
          </div>

          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            src={coffee}
            alt="Coffee"
            className='w-[500px] drop-shadow-2xl relative z-10'
          />

          {/* Floating beans - restricted to image area only, continuous float animation */}
          <motion.img
            initial={{ opacity: 0, x: -50, y: 50, scale: 0.7 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            animate={{ y: [0, -18, 0], rotate: [45, 55, 45] }}
            transition={{
              opacity: { duration: 1.2, delay: 0.9 },
              scale: { duration: 1.2, delay: 0.9 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
              rotate: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
            }}
            src={Bean2}
            alt=""
            className='absolute hidden md:block bottom-6 left-2 z-10 w-16'
          />

          <motion.img
            initial={{ opacity: 0, x: 50, y: -50, scale: 0.7 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
            transition={{
              opacity: { duration: 1.2, delay: 1 },
              scale: { duration: 1.2, delay: 1 },
              y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.6 },
              rotate: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.6 },
            }}
            src={Bean1}
            alt=""
            className='absolute hidden md:block top-4 left-0 w-16 z-10'
          />

          <motion.img
            initial={{ opacity: 0, x: 50, y: 50, scale: 0.7 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            animate={{ y: [0, -12, 0], rotate: [-45, -35, -45] }}
            transition={{
              opacity: { duration: 1.2, delay: 1.1 },
              scale: { duration: 1.2, delay: 1.1 },
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.7 },
              rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.7 },
            }}
            src={Bean2}
            alt=""
            className='absolute hidden md:block top-2 right-2 w-16 z-10'
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className='absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-amber-900/60'
      >
        <span className='text-xs font-medium'>Scroll</span>
        <div className='w-5 h-8 border-2 border-amber-900/40 rounded-full flex justify-center pt-1'>
          <span className='w-1 h-1.5 bg-amber-900/60 rounded-full'></span>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero