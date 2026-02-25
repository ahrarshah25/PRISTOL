import React from 'react'

const SpecificationsTab = ({ product }) => {
  const specs = [
    { label: 'Category', value: product.category },
    { label: 'Price', value: `Rs. ${product.price.toLocaleString()}` },
    { label: 'Stock', value: `${product.stock} units` },
    { label: 'Rating', value: `${product.rating} / 5` },
    { label: 'Discount', value: product.discount ? `${product.discount}%` : 'No discount' },
    { label: 'Product ID', value: product.id }
  ]

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">Specifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {specs.map((spec, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <span className="text-sm text-gray-600">{spec.label}</span>
            <span className="text-sm font-semibold text-gray-900">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpecificationsTab