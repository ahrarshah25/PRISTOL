import React from 'react'
import { CheckCircle, Package, Truck, Home } from 'lucide-react'

const OrderTimeline = ({ status }) => {
  const steps = [
    {
      id: 'pending',
      label: 'Order Placed',
      icon: CheckCircle,
      completed: ['pending', 'processing', 'shipped', 'delivered'].includes(status)
    },
    {
      id: 'processing',
      label: 'Processing',
      icon: Package,
      completed: ['processing', 'shipped', 'delivered'].includes(status)
    },
    {
      id: 'shipped',
      label: 'Shipped',
      icon: Truck,
      completed: ['shipped', 'delivered'].includes(status)
    },
    {
      id: 'delivered',
      label: 'Delivered',
      icon: Home,
      completed: ['delivered'].includes(status)
    }
  ]

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Order Status</h2>
      
      <div className="space-y-4">
        {steps.map((step, index) => {
          const Icon = step.icon
          const isCompleted = step.completed
          const isCurrent = step.id === status

          return (
            <div key={step.id} className="relative">
              {index < steps.length - 1 && (
                <div className={`absolute left-5 top-10 w-0.5 h-12 ${
                  steps[index + 1].completed ? 'bg-green-500' : 'bg-gray-300'
                }`} />
              )}
              
              <div className="flex items-start gap-3">
                <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center ${
                  isCompleted 
                    ? 'bg-green-100' 
                    : isCurrent 
                      ? 'bg-yellow-100 animate-pulse' 
                      : 'bg-gray-100'
                }`}>
                  <Icon className={`w-5 h-5 ${
                    isCompleted 
                      ? 'text-green-600' 
                      : isCurrent 
                        ? 'text-yellow-600' 
                        : 'text-gray-400'
                  }`} />
                  {isCompleted && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1 pt-1">
                  <p className={`text-sm font-semibold ${
                    isCompleted 
                      ? 'text-green-600' 
                      : isCurrent 
                        ? 'text-yellow-600' 
                        : 'text-gray-400'
                  }`}>
                    {step.label}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {isCompleted 
                      ? 'Completed' 
                      : isCurrent 
                        ? 'In Progress' 
                        : 'Pending'}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OrderTimeline