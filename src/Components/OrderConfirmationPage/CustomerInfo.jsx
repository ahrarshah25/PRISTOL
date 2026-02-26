import React from 'react'
import { User, Mail, Phone, MapPin, Home } from 'lucide-react'

const CustomerInfo = ({ order }) => {
  const info = [
    {
      icon: User,
      label: 'Full Name',
      value: order.fullName
    },
    {
      icon: Mail,
      label: 'Email Address',
      value: order.email
    },
    {
      icon: Phone,
      label: 'Phone Number',
      value: order.phone
    },
    {
      icon: Home,
      label: 'Delivery Address',
      value: `${order.address}, ${order.city} ${order.postalCode || ''}`
    }
  ]

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Customer Information</h2>
      
      <div className="space-y-4">
        {info.map((item, index) => {
          const Icon = item.icon
          return (
            <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500">{item.label}</p>
                <p className="text-sm font-medium text-gray-900 break-words">{item.value}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-4 bg-yellow-50 rounded-xl p-3">
        <p className="text-xs text-yellow-700">
          <span className="font-semibold">Cash on Delivery:</span> Please keep exact amount ready at time of delivery.
        </p>
      </div>
    </div>
  )
}

export default CustomerInfo