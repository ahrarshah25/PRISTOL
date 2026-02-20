import React from 'react'

const Description = ({ text, type }) => {
  if (type === "whatsapp") {
    return (
      <a 
        href={`https://wa.me/${text}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-green-600 transition-colors duration-300"
      >
        {text}
      </a>
    )
  }

  if (type === "email") {
    return (
      <a 
        href="mailto:ahrar.0932@gmail.com"
        className="text-gray-600 hover:text-green-600 transition-colors duration-300"
      >
        {text}
      </a>
    )
  }

  return (
    <p className="text-gray-600">
      {text}
    </p>
  )
}

export default Description