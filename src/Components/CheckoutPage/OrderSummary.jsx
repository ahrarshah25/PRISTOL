import React from 'react'
import { Package } from 'lucide-react'

const OrderSummary = ({ items, subtotal }) => {
  const shipping = subtotal > 1000 ? 0 : 150
  const tax = subtotal * 0.05
  const total = subtotal + shipping + tax

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sticky top-24">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
      
      <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
        {items.map((item, index) => (
          <div key={index} className="flex gap-3">
            <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2">{item.name}</h3>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs text-gray-500">Qty: {item.quantity || 1}</span>
                <span className="text-sm font-semibold text-green-600">
                  Rs. {(item.price * (item.quantity || 1)).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
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
        
        <div className="border-t border-gray-200 pt-3 mt-3">
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold text-gray-900">Total</span>
            <span className="text-xl font-bold text-green-600">Rs. {total.toLocaleString()}</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Including all taxes</p>
        </div>
      </div>

      <div className="mt-6 bg-green-50 rounded-xl p-3">
        <div className="flex items-center gap-2">
          <Package className="w-4 h-4 text-green-600" />
          <p className="text-xs text-green-700">
            You'll pay <span className="font-bold">Rs. {total.toLocaleString()}</span> at delivery
          </p>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary