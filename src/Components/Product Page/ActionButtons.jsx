import React from 'react'
import { ShoppingCart } from 'lucide-react'

const ActionButtons = ({ onAddToCart, onBuyNow, disabled }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-4">
      <button
        onClick={onAddToCart}
        disabled={disabled}
        className="flex-1 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
      >
        <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
        Add to Cart
      </button>
      <button
        onClick={onBuyNow}
        disabled={disabled}
        className="flex-1 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Buy Now
      </button>
    </div>
  )
}

export default ActionButtons