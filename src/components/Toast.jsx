import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Toast = () => {
  const { toast } = useCart();

  return (
    <AnimatePresence>
      {toast.visible && (
        <motion.div
          initial={{ opacity: 0, y: -30, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: -30, x: '-50%' }}
          transition={{ duration: 0.3 }}
          className='fixed top-20 left-1/2 z-[60] bg-amber-900 text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-2'
        >
          <CheckCircle className='w-5 h-5 text-amber-200' />
          <span className='font-medium text-sm'>{toast.message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Toast