import React from 'react'
import Image from './Image'
import Heading from '../ContactPage/Heading'
import Description from '../ContactPage/Description'
import Button from './Button'

const Card = ({ product }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100 hover:border-green-200">
      <div className="relative overflow-hidden">
        <Image src={product.imageUrl} alt={product.name} />
        {product.discount && (
          <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
            {product.discount}% OFF
          </div>
        )}
        {product.isNew && (
          <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
            NEW
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <Heading text={product.name} />
        </div>
        
        <div className="mb-4">
          <Description text={product.description} type="text" />
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-green-600">${product.price}</span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-gray-400 line-through">${product.originalPrice}</span>
            )}
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button variant="view" productId={product.id} />
          <Button variant="share" productId={product.id} />
        </div>
      </div>
    </div>
  )
}

export default Card