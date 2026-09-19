import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

// Custom inline social icons (lucide-react v1 ne brand icons remove kar diye hain)
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" {...props}>
    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6v1.9h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/>
  </svg>
)

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" {...props}>
    <path d="M18.9 2H22l-7.6 8.7L23 22h-7l-5.5-6.7L4 22H1l8.2-9.3L1 2h7.1l5 6.1L18.9 2zm-1.2 18h1.9L7.4 4H5.4l12.3 16z"/>
  </svg>
)

const Footer = () => {
  return (
    <footer className='bg-[#270c03] text-amber-100 pt-14 pb-6 px-4'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10'>

        <div>
          <h1 className='text-3xl font-cursive text-amber-500 mb-4'>Coffee Shop</h1>
          <p className='text-sm text-amber-200/80 leading-relaxed'>
            Brewing happiness one cup at a time. Fresh beans, warm ambiance, and a place you'll love to call your second home.
          </p>
        </div>

        <div>
          <h2 className='text-lg font-semibold text-amber-500 mb-4'>Quick Links</h2>
          <ul className='space-y-2 text-sm'>
            <li><a href="#home" className='hover:text-amber-500 transition-colors duration-300'>Home</a></li>
            <li><a href="#about" className='hover:text-amber-500 transition-colors duration-300'>About Us</a></li>
            <li><a href="#menu" className='hover:text-amber-500 transition-colors duration-300'>Menu</a></li>
            <li><a href="#contact" className='hover:text-amber-500 transition-colors duration-300'>Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className='text-lg font-semibold text-amber-500 mb-4'>Contact Us</h2>
          <ul className='space-y-3 text-sm'>
            <li className='flex items-center gap-2'>
              <MapPin size={16} className='text-amber-500' />
              <span>123 Coffee Street, Pune, India</span>
            </li>
            <li className='flex items-center gap-2'>
              <Phone size={16} className='text-amber-500' />
              <span>+91 1234567890</span>
            </li>
            <li className='flex items-center gap-2'>
              <Mail size={16} className='text-amber-500' />
              <span>contact@coffeeshop.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className='text-lg font-semibold text-amber-500 mb-4'>Follow Us</h2>
          <div className='flex gap-4 mb-6'>
            <a href="#" className='p-2 bg-amber-900/40 rounded-full hover:bg-amber-500 hover:text-[#270c03] transition-colors duration-300'>
              <FacebookIcon />
            </a>
            <a href="#" className='p-2 bg-amber-900/40 rounded-full hover:bg-amber-500 hover:text-[#270c03] transition-colors duration-300'>
              <InstagramIcon />
            </a>
            <a href="#" className='p-2 bg-amber-900/40 rounded-full hover:bg-amber-500 hover:text-[#270c03] transition-colors duration-300'>
              <TwitterIcon />
            </a>
          </div>
        </div>

      </div>

      <div className='border-t border-amber-900/50 mt-10 pt-6 text-center text-xs text-amber-200/60'>
        © {new Date().getFullYear()} Coffee Shop. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer