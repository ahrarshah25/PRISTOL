import React, { useState } from 'react'
import { Heart, Share2, Check } from 'lucide-react'

const ImageGallery = ({ images, name, discount, isNew, onWishlist, onShare, isInWishlist, copied }) => {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4">
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden group">
        <div className="aspect-square p-8">
          <img
            src={images[selectedImage]}
            alt={name}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        
        <div className="absolute top-4 left-4 flex gap-2">
          {discount > 0 && (
            <span className="bg-red-500 text-white px-3 py-1.5 rounded-full text-sm font-bold">
              -{discount}% OFF
            </span>
          )}
          {isNew && (
            <span className="bg-green-500 text-white px-3 py-1.5 rounded-full text-sm font-bold">
              NEW
            </span>
          )}
        </div>

        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button
            onClick={onWishlist}
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Heart className={`w-5 h-5 transition-all duration-300 ${
              isInWishlist 
                ? 'fill-red-500 text-red-500 scale-110' 
                : 'text-gray-400 group-hover:text-red-500'
            }`} />
          </button>
          <button
            onClick={onShare}
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            {copied ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <Share2 className="w-5 h-5 text-gray-400 group-hover:text-green-500" />
            )}
          </button>
        </div>
      </div>

      {images.length > 1 && (
        <div className="flex gap-4">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                selectedImage === index 
                  ? 'border-green-500 scale-110 shadow-lg' 
                  : 'border-gray-200 hover:border-green-300'
              }`}
            >
              <img src={img} alt={`${name} ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageGallery