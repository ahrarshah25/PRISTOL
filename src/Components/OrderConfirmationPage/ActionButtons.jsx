import React from 'react'
import { Printer, Package, ShoppingBag } from 'lucide-react'

const ActionButtons = ({ onPrint, onContinue }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Actions</h2>
      
      <div className="space-y-3">
        <button
          onClick={onPrint}
          className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 group"
        >
          <Printer className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          Print Receipt
        </button>


        <button
          onClick={onContinue}
          className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2 group"
        >
          <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
          Continue Shopping
        </button>
      </div>

      <p className="text-xs text-center text-gray-500 mt-4">
        An email confirmation has been sent to your inbox
      </p>
    </div>
  )
}

export default ActionButtons