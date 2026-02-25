import React, { useState } from 'react'
import { Minus, Plus, Trash2 } from 'lucide-react'

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const [isRemoving, setIsRemoving] = useState(false)

  const handleRemove = () => {
    setIsRemoving(true)
    setTimeout(() => {
      onRemove(item.id)
    }, 300)
  }

  return (
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 p-4 ${
      isRemoving ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
    }`}>
      <div className="flex flex-col sm:flex-row gap-4">
       
        <div className="sm:w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
              <p className="text-sm text-gray-500">Price: Rs. {item.price.toLocaleString()}</p>
            </div>
            <p className="text-lg font-bold text-green-600">
              Rs. {(item.price * item.quantity).toLocaleString()}
            </p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Qty:</span>
              <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  className="p-2 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <Minus className="w-3 h-3 text-gray-600" />
                </button>
                <span className="w-10 text-center text-sm font-medium text-gray-900">
                  {item.quantity}
                </span>
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="p-2 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <Plus className="w-3 h-3 text-gray-600" />
                </button>
              </div>
            </div>

            <button
              onClick={handleRemove}
              className="p-2 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem