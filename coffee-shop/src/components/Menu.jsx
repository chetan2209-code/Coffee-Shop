import React from 'react'
import Img1 from '../assets/coffee-white.png'
import Img2 from '../assets/coffee2.png'
import { motion } from 'framer-motion'

const MenuData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description: "Lorem ipsum dolor sit amet."
  },
  {
    id: 2,
    img: Img1,
    name: "Americano",
    description: "Lorem ipsum dolor sit amet."
  },
  {
    id: 3,
    img: Img2,
    name: "Cappuccino",
    description: "Lorem ipsum dolor sit amet."
  },
];

const Menu = () => {
  return (
    <div id='menu' className='py-20'>
        <div className='max-w-7xl mx-auto'>
            {/* heading section */}
            <div className='text-center mb-20'>
                <h1 className='text-4xl font-bold font-cursive text-amber-900'>Best coffee for you</h1>
            </div>

            {/* menu card section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                {MenuData.map((menu)=>(
                    <div 
                      key={menu.id} 
                      className='rounded-2xl bg-white hover:bg-amber-900 transition-all hover:text-white relative shadow-xl duration-300 group max-w-[300px] p-4 text-center mt-10'
                    >
                        <div className='h-[122px]'>
                            <img 
                              src={menu.img} 
                              alt={menu.name} 
                              className='max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300' 
                            />
                        </div>

                        {/* Text section for Name & Description */}
                        <div className='p-4 text-center'>
                          <h1 className='text-xl font-bold'>{menu.name}</h1>
                          <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>
                            {menu.description}
                          </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Menu