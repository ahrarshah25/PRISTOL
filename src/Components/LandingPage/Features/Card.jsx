import React, { useState } from 'react'
import Text from './Text'
import Icon from './Icon'

const Card = ({ title, description, icon, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className={`relative h-full p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 ${
        isHovered ? 'scale-105' : ''
      }`}>
        <div className="relative mb-6">
          <div className={`absolute inset-0 bg-green-500 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
          <div className={`relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center text-white transform group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-green-200`}>
            <Icon icon={icon} />
          </div>
          
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm border-2 border-white shadow-lg">
            {index + 1}
          </div>
        </div>

        <Text title={title} description={description} />

        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-green-500 rounded-full group-hover:w-1/2 transition-all duration-500`}></div>
      </div>
    </div>
  )
}

export default Card