import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import { Menu, X, ShoppingCart } from 'lucide-react'
import ResponsiveMenu from './ResponsiveMenu'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <div className='bg-amber-950 px-4 md:px-0 fixed z-50 w-full top-0'>
      <div className='max-w-7xl mx-auto flex justify-between items-center py-2'>
        <div className='flex items-center'>
            <img src={Logo} alt="" className='w-10 h-10' />
            <h1 className='text-2xl text-white' style={{fontFamily:"'pacifico', cursive"}}>King Cafe</h1>
        </div>
        <nav className='md:flex hidden items-center gap-7'>
          <ul className='flex gap-7 items-center text-xl font-semibold text-white'>
            <li><a href="/" className='cursor-pointer'>Home</a></li>
            <li><a href="#menu" className='cursor-pointer'>Menu</a></li>
            <li><a href="#about" className='cursor-pointer'>About</a></li>
            <li><a href="#testimonial" className='cursor-pointer'>Testimonial</a></li>
          </ul>
          <a href="#contact"><button className='bg-amber-900 text-white hover:bg-amber-800 px-3 py-1 rounded-md'>contact</button></a>

          {/* Cart Icon */}
          <button onClick={() => setIsCartOpen(true)} className='relative text-white'>
            <ShoppingCart className='w-7 h-7' />
            {totalItems > 0 && (
              <span className='absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                {totalItems}
              </span>
            )}
          </button>
        </nav>

        <div className='flex items-center gap-4 md:hidden'>
          {/* Mobile Cart Icon */}
          <button onClick={() => setIsCartOpen(true)} className='relative text-white'>
            <ShoppingCart className='w-6 h-6' />
            {totalItems > 0 && (
              <span className='absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                {totalItems}
              </span>
            )}
          </button>

          {
            open ? <X onClick={() => setOpen(false)} className='text-white w-7 h-7' /> : <Menu onClick={() => setOpen(true)} className='text-white w-7 h-7' />
          }
        </div>
      </div>
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </div>
  )
}
export default Navbar