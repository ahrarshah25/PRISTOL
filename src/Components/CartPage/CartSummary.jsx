import React from 'react'
import { ShoppingBag, Truck, Shield } from 'lucide-react'

const CartSummary = ({ subtotal, itemCount, onCheckout }) => {
  const shipping = subtotal > 1000 ? 0 : 150
  const tax = subtotal * 0.05
  const total = subtotal + shipping + tax

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sticky top-24">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Subtotal ({itemCount} items)</span>
          <span className="font-medium text-gray-900">Rs. {subtotal.toLocaleString()}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          {shipping === 0 ? (
            <span className="text-green-600 font-medium">Free</span>
          ) : (
            <span className="font-medium text-gray-900">Rs. {shipping.toLocaleString()}</span>
          )}
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Tax (5%)</span>
          <span className="font-medium text-gray-900">Rs. {tax.toLocaleString()}</span>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold text-gray-900">Total</span>
            <span className="text-xl font-bold text-green-600">Rs. {total.toLocaleString()}</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Including all taxes</p>
        </div>
      </div>

      {subtotal < 1000 && (
        <div className="bg-yellow-50 rounded-xl p-3 mb-4">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-yellow-600" />
            <p className="text-xs text-yellow-700">
              Add Rs. {(1000 - subtotal).toLocaleString()} more for free shipping
            </p>
          </div>
        </div>
      )}

      <button
        onClick={onCheckout}
        className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 mb-3"
      >
        Proceed to Checkout
      </button>

      <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
        <Shield className="w-3 h-3" />
        <span>Secure checkout • COD Available</span>
      </div>
    </div>
  )
}

export default CartSummary