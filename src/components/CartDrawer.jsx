import React from 'react'
import { X, Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    totalPrice,
    setIsCheckoutOpen,
  } = useCart();

  return (
    <>
      {/* Dark overlay background jab drawer khula ho */}
      {isCartOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          className='fixed inset-0 bg-black/50 z-40'
        />
      )}

      {/* Sliding drawer panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-full max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        {/* Header */}
        <div className='flex items-center justify-between p-5 border-b'>
          <h2 className='text-xl font-bold text-amber-900'>Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X className='w-6 h-6 text-gray-600' />
          </button>
        </div>

        {/* Items list */}
        <div className='flex-1 overflow-y-auto p-5 space-y-4'>
          {cartItems.length === 0 ? (
            <p className='text-center text-gray-500 mt-10'>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className='flex gap-3 items-center border-b pb-4'>
                <img src={item.img} alt={item.name} className='w-16 h-16 object-contain' />
                <div className='flex-1'>
                  <h3 className='font-semibold text-sm'>{item.name}</h3>
                  <p className='text-amber-900 font-bold text-sm'>${item.basePrice.toFixed(2)}</p>

                  <div className='flex items-center gap-3 mt-2'>
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className='bg-gray-200 rounded-full p-1'
                    >
                      <Minus size={14} />
                    </button>
                    <span className='font-semibold text-sm'>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className='bg-gray-200 rounded-full p-1'
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)}>
                  <Trash2 className='w-5 h-5 text-red-500' />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer with total + checkout */}
        {cartItems.length > 0 && (
          <div className='p-5 border-t'>
            <div className='flex justify-between mb-4 text-lg font-bold'>
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={() => {
                setIsCartOpen(false);
                setIsCheckoutOpen(true);
              }}
              className='w-full bg-amber-900 text-white py-3 rounded-lg font-semibold hover:bg-amber-950 transition'
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer