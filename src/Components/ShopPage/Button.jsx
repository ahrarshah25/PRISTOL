import React, { useState } from 'react'
import { Eye, Share2, Check } from 'lucide-react'

const Button = ({ variant, productId }) => {
  const [copied, setCopied] = useState(false)

  const handleViewProduct = () => {
    window.location.href = `/product?id=${productId}`
  }

  const handleShare = async () => {
    const url = `https://pristol.vercel.app/product?id=${productId}`
    
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  if (variant === 'view') {
    return (
      <button
        onClick={handleViewProduct}
        className="flex-1 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group"
      >
        <Eye className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
        View Product
      </button>
    )
  }

  if (variant === 'share') {
    return (
      <button
        onClick={handleShare}
        className={`w-12 h-12 rounded-xl border-2 transition-all duration-300 hover:scale-110 flex items-center justify-center ${
          copied 
            ? 'border-green-500 bg-green-50' 
            : 'border-gray-200 hover:border-green-500 hover:bg-green-50'
        }`}
      >
        {copied ? (
          <Check className="w-5 h-5 text-green-600 animate-bounce" />
        ) : (
          <Share2 className="w-5 h-5 text-gray-600 group-hover:text-green-600 transition-colors duration-300" />
        )}
      </button>
    )
  }

  return null
}

export default Button