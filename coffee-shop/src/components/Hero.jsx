import React from 'react'
import coffee from '../assets/coffee5.png'
import Bean1 from '../assets/bean1.png'
import Bean2 from '../assets/bean2.png'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='from-slate-100 to-amber-950 bg-gradient-to-r min-h-screen flex items-center '>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 place-items-center relative'>
        {/* text section */}
        <div className='space-y-5 px-4 md:px-0'>
            <motion.h3
            nitial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1, delay: 0.2}}             
            className='text-amber-900 font-semibold text-lg'>Welcome to King Cafe.......</motion.h3>
            <motion.h1
            nitial={{opacity: 0, x: -60}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1, delay: 0.4}}
            className='text-4xl md:text-6xl font-bold' style={{fontFamily: "'Lobster', cursive"}}>
              Experience Artisanal <span className='text-amber-900'>Coffee</span> at King Cafe
            </motion.h1>
            <motion.p 
            nitial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1, delay: 0.2}}
            >We take care of your taste, made from natural beans.</motion.p>
            <div className='space-x-3'>
                <a href="#menu"><button className='bg-amber-900 text-white px-4 py-2 rounded-md hover:bg-amber-800 transition'>View Menu</button></a>
                <a href="#about"><button className='bg-transparent border border-amber-900 text-amber-900 rounded-md px-4 py-2 hover:bg-amber-900 hover:text-white transition'>About Us</button></a>
            </div>
        </div>

        {/* image section */}
        <div className='relative'>
            <motion.img
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 1.5, delay: 0.8}}
             src={coffee} alt="Coffee" className='w-[500px]' />
        </div>

        {/* Floating beans animation */}
        <motion.img
          initial={{opacity: 0, x: -100, y: 100, scale: 0.7}}
          whileInView={{opacity: 1, x: 0, y: 0, scale: 1, rotate: 45}}
          transition={{duration: 1.8, delay: 0.8}}
          src={Bean2} alt="" className='absolute hidden md:block bottom-20 left-36 z-10 w-20 rotate-45' 
        />

        <motion.img
          initial={{opacity: 0, x: 400, y: 200, scale: 0.7}}
          whileInView={{opacity: 1, x: 0, y: 0, scale: 1, rotate:45}}
          transition={{duration: 1.8, delay: 0.8}}
          src={Bean1} alt="" className='absolute hidden md:block top-14 left-0 w-20' 
        />

        <motion.img
          initial={{opacity: 0, x: -100, y: 100, scale: 0.7}}
          whileInView={{opacity: 1, x: 0, y: 0, scale: 1, rotate: 45}}
          transition={{duration: 1.8, delay: 0.8}}
          src={Bean2} alt="" className='absolute hidden md:block w-20 top-0 right-0 -rotate-45' 
        />
      </div>
    </div>
  )
}

export default Hero