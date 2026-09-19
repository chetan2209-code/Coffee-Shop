import React from 'react'
import Bg from '../assets/Bg.png'
import { Lottie } from 'lottie-react'
import Coffee from '../assets/Coffee-love.json'
import { motion } from 'framer-motion'
import { Coffee as CoffeeIcon, Leaf, Users, Award } from 'lucide-react'

const bgImage = {
  backgroundImage: `linear-gradient(rgba(39,12,3,0.85), rgba(39,12,3,0.9)), url(${Bg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const highlights = [
  { icon: Leaf, text: "100% Organic Beans" },
  { icon: CoffeeIcon, text: "Handcrafted Every Cup" },
  { icon: Users, text: "Expert Baristas" },
  { icon: Award, text: "Award-Winning Blends" },
];

const About = () => {
  return (
    <div id='about' className='md:py-24 py-16' style={bgImage}>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.2 }}
        className='text-center text-sm font-semibold text-amber-500 tracking-[0.2em] uppercase mb-2'
      >
        Our Story
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className='text-amber-500 font-cursive text-5xl text-center mb-10'
      >
        About Us
      </motion.h1>

      <div className='flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto px-4'>
        {/* image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className='flex-shrink-0'
        >
          <Lottie
            src={Coffee}
            loop={true}
            autoplay={true}
            style={{ width: 380, height: 380 }}
          />
        </motion.div>

        {/* text section */}
        <div className='space-y-5 px-4 md:px-0'>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className='text-3xl font-cursive2 text-amber-500'
          >
            Passion for Perfect Coffee
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className='text-amber-100/90 leading-relaxed'
          >
            At King Cafe, every cup tells a story. We source our beans directly
            from sustainable farms, roast them in small batches to lock in
            flavor, and let our baristas turn each order into a moment worth
            savoring. What started as a single counter and a love for good
            coffee has grown into a neighborhood favorite — a place where
            regulars know each other by name and first-timers leave feeling
            like they belong.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className='text-amber-100/80 leading-relaxed'
          >
            Whether you're grabbing a quick espresso on your way to work or
            settling in for a slow Sunday latte, we're here to make sure your
            coffee moment is the best part of your day.
          </motion.p>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.7 }}
            className='grid grid-cols-2 gap-4 pt-4'
          >
            {highlights.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className='flex items-center gap-2 bg-white/5 border border-amber-500/20 rounded-lg px-3 py-2.5'
              >
                <Icon className='w-5 h-5 text-amber-500 flex-shrink-0' />
                <span className='text-amber-100 text-sm font-medium'>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About