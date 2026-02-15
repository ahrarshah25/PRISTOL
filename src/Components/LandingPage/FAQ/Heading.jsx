import React from 'react'
import { HelpCircle } from 'lucide-react'

const Heading = () => {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
        <HelpCircle className="w-4 h-4 text-green-600" />
        <span className="text-sm font-medium text-green-700">Got Questions?</span>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Frequently Asked{' '}
        <span className="text-green-600 relative">
          Questions
          <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
            <path d="M1 5.5C41.5 2 106 0.5 199 1" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
      </h2>
      
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Everything you need to know about PRISTOL. Can't find what you're looking for? Feel free to ask!
      </p>
    </div>
  )
}

export default Heading