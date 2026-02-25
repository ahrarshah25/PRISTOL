import React from 'react'

const StockStatus = ({ stock }) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${
        stock > 0 ? 'bg-green-500 animate-pulse' : 'bg-red-500'
      }`} />
      <span className={`text-sm font-medium ${
        stock > 0 ? 'text-green-700' : 'text-red-700'
      }`}>
        {stock > 0 
          ? `${stock} in stock` 
          : 'Out of stock'
        }
      </span>
    </div>
  )
}

export default StockStatus