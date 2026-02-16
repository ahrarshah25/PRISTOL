import React from 'react'

const Heading = ({ text, highlight, center = false }) => {
  return (
    <div className={`${center ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
        {text}{' '}
        {highlight && (
          <span className="relative inline-block">
            <span className="text-green-600">{highlight}</span>
            <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
              <path d="M1 5.5C41.5 2 106 0.5 199 1" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
        )}
      </h2>
    </div>
  )
}

export default Heading