import React from 'react'

const DescriptionTab = ({ description }) => {
  return (
    <div className="prose max-w-none">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Product Description</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

export default DescriptionTab