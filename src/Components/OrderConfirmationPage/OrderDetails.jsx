import React from 'react'
import { Package, Calendar, Clock, CreditCard } from 'lucide-react'

const OrderDetails = ({ order }) => {
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-PK', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const details = [
    {
      icon: Package,
      label: 'Order Type',
      value: order.orderType === 'cart' ? 'Multiple Items' : 'Single Item'
    },
    {
      icon: Calendar,
      label: 'Order Date',
      value: formatDate(order.createdAt)
    },
    {
      icon: Clock,
      label: 'Estimated Delivery',
      value: '3-5 Business Days'
    },
    {
      icon: CreditCard,
      label: 'Payment Method',
      value: order.paymentMethod
    }
  ]

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Order Details</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {details.map((detail, index) => {
          const Icon = detail.icon
          return (
            <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">{detail.label}</p>
                <p className="text-sm font-semibold text-gray-900">{detail.value}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OrderDetails