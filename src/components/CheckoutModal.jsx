import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2 } from 'lucide-react'
import { useCart } from '../context/CartContext'

const CheckoutModal = () => {
  const {
    isCheckoutOpen,
    closeCheckout,
    cartItems,
    totalPrice,
    placeOrder,
    orderPlaced,
    lastOrder,
  } = useCart();

  const [form, setForm] = useState({ name: '', address: '', phone: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    placeOrder(form);
    setForm({ name: '', address: '', phone: '' });
  };

  if (!isCheckoutOpen) return null;

  return (
    <div className='fixed inset-0 z-[70] flex items-center justify-center p-4'>
      {/* Overlay */}
      <div onClick={closeCheckout} className='absolute inset-0 bg-black/60' />

      {/* Modal box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className='relative bg-white rounded-2xl w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto'
      >
        <button onClick={closeCheckout} className='absolute top-4 right-4 text-gray-500 hover:text-gray-800'>
          <X className='w-5 h-5' />
        </button>

        <AnimatePresence mode='wait'>
          {!orderPlaced ? (
            // -------- Delivery Details Form --------
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='p-6'
            >
              <h2 className='text-2xl font-bold text-amber-900 mb-4'>Checkout</h2>

              {/* Order summary */}
              <div className='bg-amber-50 rounded-lg p-4 mb-5 space-y-1'>
                {cartItems.map((item) => (
                  <div key={item.id} className='flex justify-between text-sm text-gray-700'>
                    <span>{item.name} x{item.quantity}</span>
                    <span>${(item.basePrice * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className='flex justify-between font-bold text-amber-900 border-t border-amber-200 mt-2 pt-2'>
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <form onSubmit={handlePlaceOrder} className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>Delivery Address</label>
                  <textarea
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Your Address"
                    rows="2"
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900'
                  ></textarea>
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900'
                  />
                </div>

                <button
                  type="submit"
                  className='w-full bg-amber-900 text-white py-3 rounded-lg font-semibold hover:bg-amber-950 transition'
                >
                  Place Order
                </button>
              </form>
            </motion.div>
          ) : (
            // -------- Success Screen --------
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className='p-8 text-center'
            >
              <CheckCircle2 className='w-16 h-16 text-green-600 mx-auto mb-4' />
              <h2 className='text-2xl font-bold text-amber-900 mb-2'>Order Confirmed!</h2>
              <p className='text-gray-600 mb-4'>Thank you, {lastOrder?.deliveryDetails?.name}! Your order has been placed.</p>

              <div className='bg-amber-50 rounded-lg p-4 text-left space-y-1 mb-6'>
                <p className='text-sm'><span className='font-semibold'>Order ID:</span> {lastOrder?.id}</p>
                <p className='text-sm'><span className='font-semibold'>Date:</span> {lastOrder?.date}</p>
                <p className='text-sm'><span className='font-semibold'>Total:</span> ${lastOrder?.total.toFixed(2)}</p>
                <p className='text-sm'><span className='font-semibold'>Delivery to:</span> {lastOrder?.deliveryDetails?.address}</p>
              </div>

              <button
                onClick={closeCheckout}
                className='w-full bg-amber-900 text-white py-3 rounded-lg font-semibold hover:bg-amber-950 transition'
              >
                Continue Shopping
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default CheckoutModal