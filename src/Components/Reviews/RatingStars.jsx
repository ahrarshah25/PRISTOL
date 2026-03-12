import React from 'react'
import { Star } from 'lucide-react'

const RatingStars = ({ rating, onChange, size = 'md' }) => {
  const [hoverRating, setHoverRating] = React.useState(0)

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  const handleMouseEnter = (index) => {
    setHoverRating(index)
  }

  const handleMouseLeave = () => {
    setHoverRating(0)
  }

  const handleClick = (index) => {
    onChange(index)
  }

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = (hoverRating || rating) >= star
        return (
          <button
            key={star}
            type="button"
            onClick={() => handleClick(star)}
            onMouseEnter={() => handleMouseEnter(star)}
            onMouseLeave={handleMouseLeave}
            className="focus:outline-none transition-transform hover:scale-110"
          >
            <Star
              className={`${sizeClasses[size]} transition-colors ${
                filled
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300 hover:text-yellow-200'
              }`}
            />
          </button>
        )
      })}
    </div>
  )
}

export default RatingStars