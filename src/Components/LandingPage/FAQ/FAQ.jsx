import React, { useState } from 'react'
import Heading from './Heading'
import faqs from '../../../data/FAQ'
import Question from './Question'
import Icon from './Icon'
import Message from './Message'

const FAQ = ({ botOpen, func }) => {
  const [openId, setOpenId] = useState(null)

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading />
        
        <div className="mt-16 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors duration-300"
              >
                <Question question={faq.question} />
                <Icon 
                  isOpen={openId === faq.id} 
                  onClick={() => toggleFAQ(faq.id)}
                />
              </button>

              <div 
                className={`transition-all duration-500 ease-in-out ${
                  openId === faq.id 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <Message answer={faq.answer} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <button onClick={() => {func(!botOpen)}} className="text-green-600 font-semibold hover:text-green-700 hover:underline transition-all">
              Contact our support team
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}

export default FAQ