import React from 'react'

const OrderItems = ({ items }) => {
  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Order Items</h2>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/80?text=PRISTOL'
                }}
              />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-400">Rs. {item.price.toLocaleString()} each</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium text-gray-900">Rs. {calculateSubtotal().toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Shipping</span>
            <span className={items.shipping === 0 ? 'text-green-600 font-medium' : 'font-medium'}>
              {items.shipping === 0 ? 'Free' : `Rs. ${items.shipping?.toLocaleString()}`}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Tax (5%)</span>
            <span className="font-medium">Rs. {items.tax?.toLocaleString() || 0}</span>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-gray-200">
            <span className="text-base font-semibold text-gray-900">Total</span>
            <span className="text-xl font-bold text-green-600">
              Rs. {items.totalAmount?.toLocaleString() || items.total?.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderItems