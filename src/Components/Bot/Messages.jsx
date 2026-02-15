import React from 'react'
import UserMessage from './UserMessage'
import BotMessage from './BotMessage'
import ThinkingMessage from './ThinkingMessage'

const Messages = ({ messages }) => {
  return (
    <div className="space-y-4">
      {messages.map((message) => {
        if (message.type === 'user') {
          return <UserMessage key={message.id} content={message.content} />
        } else if (message.type === 'thinking') {
          return <ThinkingMessage key={message.id} />
        } else {
          return <BotMessage key={message.id} content={message.content} isError={message.isError} />
        }
      })}
    </div>
  )
}

export default Messages