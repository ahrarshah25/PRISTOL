import React from 'react'

const RightImage = () => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
      <div className="relative transform group-hover:scale-105 transition-transform duration-500">
        <img 
          src="/PRISTOL - About.png" 
          alt="PRISTOL About"
          className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
        />
        <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-gray-700">Since 2026</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightImage