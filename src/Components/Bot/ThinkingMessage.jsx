import React from 'react'
import { Bot } from 'lucide-react'

const ThinkingMessage = () => {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
        <Bot className="w-4 h-4 text-white" />
      </div>
      <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-md">
        <div className="flex items-center gap-2">
          <div className="typing-dots flex gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce animation-delay-200"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce animation-delay-400"></span>
          </div>
          <span className="text-sm text-gray-500">Thinking...</span>
        </div>
      </div>
    </div>
  )
}

export default ThinkingMessage