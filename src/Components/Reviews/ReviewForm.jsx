import React, { useState } from 'react'
import { X, Star } from 'lucide-react'
import RatingStars from './RatingStars'

const ReviewForm = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    review: '',
    rating: 0
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleRatingChange = (rating) => {
    setFormData(prev => ({ ...prev, rating }))
    if (errors.rating) {
      setErrors(prev => ({ ...prev, rating: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.review.trim()) newErrors.review = 'Review is required'
    if (formData.rating === 0) newErrors.rating = 'Please select a rating'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData)
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp">
        <div className="sticky top-0 bg-white p-6 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Write a Review</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-xl transition-all">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
        
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all ${
                  errors.firstName
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
                    : 'border-gray-200 focus:border-green-500 focus:ring-green-100'
                }`}
                placeholder="John"
              />
              {errors.firstName && (
                <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all ${
                  errors.lastName
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
                    : 'border-gray-200 focus:border-green-500 focus:ring-green-100'
                }`}
                placeholder="Doe"
              />
              {errors.lastName && (
                <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Rating <span className="text-red-500">*</span>
            </label>
            <RatingStars
              rating={formData.rating}
              onChange={handleRatingChange}
              size="lg"
            />
            {errors.rating && (
              <p className="text-xs text-red-500 mt-1">{errors.rating}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Review <span className="text-red-500">*</span>
            </label>
            <textarea
              name="review"
              value={formData.review}
              onChange={handleChange}
              rows="5"
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all resize-none ${
                errors.review
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
                  : 'border-gray-200 focus:border-green-500 focus:ring-green-100'
              }`}
              placeholder="Share your experience with PRISTOL..."
            />
            {errors.review && (
              <p className="text-xs text-red-500 mt-1">{errors.review}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 mt-4"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  )
}

export default ReviewForm