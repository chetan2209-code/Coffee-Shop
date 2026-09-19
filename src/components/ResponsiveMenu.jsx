import React from 'react'

const ResponsiveMenu = ({open, setOpen}) => {
  return (
    <div className={`${open ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-30 flex h-screen w-[75%] flex-col justify-between bg-amber-950 px-8 pb-6 pt-16 text-black md:hidden rounded-xl shadow-md transition-all`}>
        <div>
            <nav className='mt-12'>
                <ul className='flex flex-col gap-7 text-lg font-semibold text-white'>
                    <li><a href="/" onClick={() => setOpen(false)} className='cursor-pointer'>Home</a></li>
                    <li><a href="#menu" onClick={() => setOpen(false)} className='cursor-pointer'>Menu</a></li>
                    <li><a href="#about" onClick={() => setOpen(false)} className='cursor-pointer'>About</a></li>
                    <li><a href="#testimonial" onClick={() => setOpen(false)} className='cursor-pointer'>Testimonial</a></li>
                    <li><a href="#contact" onClick={() => setOpen(false)}><button className='bg-amber-900 text-white hover:bg-amber-800 px-3 py-1 rounded-md'>contact</button></a></li>
                </ul>
            </nav>
        </div>
        <div className='text-white'>
            <h1>Made with Love, for you</h1>
        </div>
    </div>
  )
}

export default ResponsiveMenu