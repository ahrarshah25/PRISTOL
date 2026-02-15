import React from 'react'

const Question = ({ question }) => {
  return (
    <h3 className="text-left text-lg font-semibold text-gray-900 flex-1">
      {question}
    </h3>
  )
}

export default Question