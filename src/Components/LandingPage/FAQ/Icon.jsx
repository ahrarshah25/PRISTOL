import React from 'react'
import { ChevronDown } from 'lucide-react'

const Icon = ({ isOpen, onClick }) => {
  return (
    <div 
      className={`w-8 h-8 rounded-full bg-green-100 flex items-center justify-center transition-all duration-500 ${
        isOpen ? 'bg-green-500 rotate-180' : 'hover:bg-green-200'
      }`}
      onClick={onClick}
    >
      <ChevronDown 
        className={`w-5 h-5 transition-all duration-500 ${
          isOpen ? 'text-white' : 'text-green-600'
        }`}
      />
    </div>
  )
}

export default Icon