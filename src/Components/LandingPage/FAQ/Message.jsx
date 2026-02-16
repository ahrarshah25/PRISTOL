import React from 'react'
import fireAlert from '../../Alerts/alert'

const Message = ({ answer }) => {
  return (
    <div className="prose prose-green max-w-none">
      <p className="text-gray-600 leading-relaxed">
        {answer}
      </p>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-500">
          Was this helpful?{' '}
          <button onClick={() => {fireAlert("success", "Thanks for your feedback")}} className="text-green-600 hover:text-green-700 font-medium ml-2">
            Yes
          </button>
          <span className="text-gray-300 mx-2">•</span>
          <button onClick={() => {fireAlert("success", "Thanks for your feedback")}} className="text-green-600 hover:text-green-700 font-medium">
            No
          </button>
        </p>
      </div>
    </div>
  )
}

export default Message