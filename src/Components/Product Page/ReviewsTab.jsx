import React from 'react'
import { Star } from 'lucide-react'

const ReviewsTab = () => {
  return (
    <div className="text-center py-12">
      <Star className="w-16 h-16 text-gray-300 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">No Reviews Yet</h3>
      <p className="text-gray-500">Be the first to review this product</p>
      <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
        Write a Review
      </button>
    </div>
  )
}

export default ReviewsTab