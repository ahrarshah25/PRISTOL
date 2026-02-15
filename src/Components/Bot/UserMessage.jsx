import React from 'react'
import { User } from 'lucide-react'

const UserMessage = ({ content }) => {
  return (
    <div className="flex items-start gap-3 justify-end">
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl rounded-tr-none p-3 max-w-[80%] shadow-md">
        <p className="text-sm">{content}</p>
        <span className="text-xs text-green-100 mt-1 block">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
      <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
        <User className="w-4 h-4 text-white" />
      </div>
    </div>
  )
}

export default UserMessage