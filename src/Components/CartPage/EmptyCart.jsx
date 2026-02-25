import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'

const EmptyCart = () => {
  const navigate = useNavigate()

  return (
    <div className="text-center py-20 bg-white rounded-3xl shadow-xl border border-gray-100">
      <div className="relative inline-block">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-12 h-12 text-green-600" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce">
          0
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h2>
      <p className="text-gray-500 mb-8 max-w-md mx-auto">
        Looks like you haven't added any items to your cart yet. 
        Browse our products and find something you'll love!
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => navigate('/shop')}
          className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          Continue Shopping
        </button>
        
        <button
          onClick={() => navigate('/')}
          className="px-8 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
        >
          Go to Home
        </button>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-500 mb-4">Popular Categories</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {['Antiseptic', 'Cleaning', 'Personal Care', 'Household'].map((cat) => (
            <button
              key={cat}
              onClick={() => navigate('/shop')}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-green-100 hover:text-green-700 transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmptyCart