import React from 'react'
import { Send } from 'lucide-react'

const Button = ({ type = "submit", text = "Send Message" }) => {
  return (
    <button
      type={type}
      className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2 group"
    >
      <span>{text}</span>
      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
    </button>
  )
}

export default Button