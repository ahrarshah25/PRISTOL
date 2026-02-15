import React, { useState } from 'react'
import { Send } from 'lucide-react'

const Button = ({ onClick, disabled }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative p-3 rounded-xl transition-all duration-300 ${
        disabled 
          ? 'bg-gray-200 cursor-not-allowed' 
          : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 hover:scale-105 hover:shadow-lg'
      }`}
    >
      <Send className={`w-5 h-5 text-white transition-transform duration-300 ${
        isHovered && !disabled ? 'translate-x-0.5 -translate-y-0.5' : ''
      }`} />
      
      {!disabled && (
        <span className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:animate-ripple"></span>
      )}
    </button>
  )
}

export default Button