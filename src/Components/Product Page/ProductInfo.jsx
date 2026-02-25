import React from 'react'
import { Star } from 'lucide-react'

const ProductInfo = ({ name, rating, category }) => {
  return (
    <div>
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        {name}
      </h1>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < Math.floor(rating)
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500">
          ({rating} out of 5)
        </span>
        <span className="text-sm text-gray-400">|</span>
        <span className="text-sm text-green-600">{category}</span>
      </div>
    </div>
  )
}

export default ProductInfo