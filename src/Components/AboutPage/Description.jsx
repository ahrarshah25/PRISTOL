import React from 'react'

const Description = ({ text }) => {
  return (
    <div className="prose prose-lg max-w-none">
      {text.split('\n\n').map((paragraph, index) => (
        <p key={index} className="text-gray-600 leading-relaxed mb-4">
          {paragraph}
        </p>
      ))}
    </div>
  )
}

export default Description