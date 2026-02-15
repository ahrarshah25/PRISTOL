import React, { useEffect, useRef } from 'react'
import { Bot } from 'lucide-react'

const BotMessage = ({ content, isError }) => {
  const messageRef = useRef(null)

  useEffect(() => {
    if (messageRef.current && typeof content === 'string') {
      formatAIMessage(messageRef.current, content)
    }
  }, [content])

  const formatAIMessage = (element, text) => {
    if (text.includes('```')) {
      const parts = text.split('```')
      let formattedHTML = ''

      for (let i = 0; i < parts.length; i++) {
        if (i % 2 === 0) {
          formattedHTML += parts[i].replace(/\n/g, '<br/>')
        } else {
          formattedHTML += `<div class="ai-code">${parts[i]}</div>`
        }
      }

      element.innerHTML = formattedHTML
    } else {
      element.innerHTML = text.replace(/\n/g, '<br/>')
    }

    const links = element.querySelectorAll('a')
    links.forEach(link => {
      link.style.color = '#22c55e'
      link.style.textDecoration = 'none'
      link.style.borderBottom = '1px dashed #22c55e'
      link.addEventListener('mouseover', () => {
        link.style.color = '#16a34a'
        link.style.borderBottom = '1px solid #16a34a'
      })
      link.addEventListener('mouseout', () => {
        link.style.color = '#22c55e'
        link.style.borderBottom = '1px dashed #22c55e'
      })
    })
  }

  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
        <Bot className="w-4 h-4 text-white" />
      </div>
      <div className={`bg-white rounded-2xl rounded-tl-none p-3 max-w-[80%] shadow-md ${
        isError ? 'border-l-4 border-red-500' : ''
      }`}>
        <div 
          ref={messageRef}
          className={`text-sm ${isError ? 'text-red-600' : 'text-gray-700'}`}
        />
        <span className="text-xs text-gray-400 mt-2 block">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  )
}

export default BotMessage