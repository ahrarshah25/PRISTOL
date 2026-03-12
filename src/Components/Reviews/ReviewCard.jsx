import React from 'react'
import { Star } from 'lucide-react'

const ReviewCard = ({ review }) => {
  const { firstName, lastName, review: text, rating, createdAt } = review
  const initials = `${firstName?.charAt(0) || ''}${lastName?.charAt(0) || ''}`.toUpperCase()
  const fullName = `${firstName} ${lastName}`

  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString('en-PK', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 group">
      <div className="flex items-start gap-4 mb-4">
       
        <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
          {initials || 'U'}
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{fullName}</h3>
          <p className="text-xs text-gray-500 mt-1">{formatDate(createdAt)}</p>
        </div>
      </div>

      <div className="flex items-center gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
        <span className="text-sm text-gray-500 ml-2">({rating})</span>
      </div>

      <p className="text-gray-600 leading-relaxed line-clamp-4">
        {text}
      </p>

      {text.length > 200 && (
        <button className="text-sm text-green-600 font-medium mt-2 hover:text-green-700">
          Read more
        </button>
      )}
    </div>
  )
}

export default ReviewCard