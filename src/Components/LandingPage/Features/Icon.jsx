import React from 'react'

const Icon = ({ icon: IconComponent }) => {
  return (
    <div className="w-8 h-8 text-white">
      <IconComponent className="w-full h-full" />
    </div>
  )
}

export default Icon