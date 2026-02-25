import React from 'react'

const PriceDisplay = ({ price, originalPrice }) => {
  const discount = originalPrice ? ((originalPrice - price) / originalPrice * 100).toFixed(0) : 0

  return (
    <div className="flex items-baseline gap-4">
      <span className="text-4xl font-bold text-green-600">
        Rs. {price.toLocaleString()}
      </span>
      {originalPrice > 0 && (
        <>
          <span className="text-xl text-gray-400 line-through">
            Rs. {originalPrice.toLocaleString()}
          </span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            Save Rs. {(originalPrice - price).toLocaleString()} ({discount}%)
          </span>
        </>
      )}
    </div>
  )
}

export default PriceDisplay