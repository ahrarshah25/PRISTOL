import React from 'react'
import { Minus, Plus } from 'lucide-react'

const QuantitySelector = ({ quantity, onIncrement, onDecrement, maxStock }) => {
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-gray-700">Quantity:</span>
      <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden">
        <button
          onClick={onDecrement}
          className="p-3 bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <Minus className="w-4 h-4 text-gray-600" />
        </button>
        <span className="w-16 text-center font-medium text-gray-900">
          {quantity}
        </span>
        <button
          onClick={onIncrement}
          className="p-3 bg-gray-50 hover:bg-gray-100 transition-colors"
          disabled={quantity >= maxStock}
        >
          <Plus className="w-4 h-4 text-gray-600" />
        </button>
      </div>
      <span className="text-xs text-gray-500">
        Max: {maxStock}
      </span>
    </div>
  )
}

export default QuantitySelector