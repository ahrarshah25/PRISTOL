import React from 'react'
import { CheckCircle } from 'lucide-react'

const ConfirmationHeader = ({ orderId }) => {
  return (
    <div className="text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        Thank You for Your Order!
      </h1>
      <p className="text-lg text-gray-600 mb-4">
        Your order has been successfully placed
      </p>
      <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
        <span className="text-sm font-medium text-green-700">Order ID:</span>
        <span className="text-sm font-mono font-bold text-green-800">#{orderId?.slice(-8)}</span>
      </div>
    </div>
  )
}

export default ConfirmationHeader