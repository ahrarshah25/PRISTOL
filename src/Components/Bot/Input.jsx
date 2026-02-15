import React from 'react'

const Input = ({ value, onChange, onKeyPress, disabled }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      disabled={disabled}
      placeholder="Ask about PRISTOL products..."
      className="flex-1 px-4 py-2 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm disabled:opacity-50 disabled:cursor-not-allowed"
    />
  )
}

export default Input