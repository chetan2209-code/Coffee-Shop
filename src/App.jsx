import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Toast from './components/Toast'
import CheckoutModal from './components/CheckoutModal'

// import { menuItems, categories } from '../data/menuData';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <CartDrawer />
      <Toast />
      <CheckoutModal />
    </div>
  )
}

export default App
