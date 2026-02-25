import React from 'react'
import { Truck, RefreshCw, Shield } from 'lucide-react'

const FeatureBadges = () => {
  const features = [
    {
      icon: Truck,
      title: 'Free Delivery',
      subtitle: 'On orders over Rs. 1000',
      color: 'text-green-600'
    },
    {
      icon: RefreshCw,
      title: 'Easy Returns',
      subtitle: '30 day return policy',
      color: 'text-green-600'
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      subtitle: '100% secure checkout',
      color: 'text-green-600'
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
      {features.map((feature, index) => {
        const Icon = feature.icon
        return (
          <div key={index} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Icon className={`w-5 h-5 ${feature.color}`} />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{feature.title}</p>
              <p className="text-xs text-gray-500">{feature.subtitle}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FeatureBadges