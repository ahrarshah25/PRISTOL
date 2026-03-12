import React, { useState } from 'react'
import DescriptionTab from './DescriptionTab'
import SpecificationsTab from './SpecificationsTab'
import ProductReviews from './ProductReviews'

const Tabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState('description')

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'reviews', label: 'Reviews' }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'description':
        return <DescriptionTab description={product.description} />
      case 'specifications':
        return <SpecificationsTab product={product} />
      case 'reviews':
        return <ProductReviews productId={product.id} />
      default:
        return null
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-4 px-6 text-sm font-medium transition-all duration-300 relative ${
              activeTab === tab.id
                ? 'text-green-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></span>
            )}
          </button>
        ))}
      </div>

      <div className="p-8">
        {renderContent()}
      </div>
    </div>
  )
}

export default Tabs