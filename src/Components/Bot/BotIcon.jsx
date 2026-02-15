import React from 'react'
import { Bot } from 'lucide-react'

const BotIcon = () => {
  return (
    <div className="relative">
      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
        <Bot className="w-6 h-6 text-white" />
      </div>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
    </div>
  )
}

export default BotIcon