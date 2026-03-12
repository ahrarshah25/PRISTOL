import React, { useState, useEffect } from 'react'
import { collection, query, orderBy, getDocs, addDoc, Timestamp } from 'firebase/firestore'
import { db } from '../Firebase/config'
import Navbar from '../Components/LandingPage/Navbar/Navbar'
import Footer from '../Components/LandingPage/Footer/Footer'
import ReviewCard from '../Components/Reviews/ReviewCard'
import ReviewForm from '../Components/Reviews/ReviewForm'
import FilterBar from '../Components/Reviews/FilterBar'
import { MessageSquare, Star } from 'lucide-react'
import fireAlert from '../Components/Alerts/alert'
import showLoading from '../Components/Alerts/loading'
import Swal from 'sweetalert2'

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const [filteredReviews, setFilteredReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [sortBy, setSortBy] = useState('newest')

  useEffect(() => {
    fetchReviews()
  }, [])

  useEffect(() => {
    let sorted = [...reviews]
    if (sortBy === 'newest') {
      sorted.sort((a, b) => b.createdAt - a.createdAt)
    } else if (sortBy === 'highest') {
      sorted.sort((a, b) => b.rating - a.rating)
    }
    setFilteredReviews(sorted)
  }, [sortBy, reviews])

  const fetchReviews = async () => {
    try {
      const q = query(collection(db, 'globalReviews'), orderBy('createdAt', 'desc'))
      const querySnapshot = await getDocs(q)
      const reviewsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setReviews(reviewsData)
    } catch (error) {
      console.error('Error fetching reviews:', error)
      fireAlert('error', 'Failed to load reviews')
    } finally {
      setLoading(false)
    }
  }

  const handleAddReview = async (reviewData) => {
    const loader = showLoading('Submitting your review...')
    try {
      await addDoc(collection(db, 'globalReviews'), {
        ...reviewData,
        createdAt: Timestamp.now().toMillis()
      })
      Swal.close(loader)
      fireAlert('success', 'Review added successfully!')
      setShowForm(false)
      fetchReviews()
    } catch (error) {
      console.error('Error adding review:', error)
      Swal.close(loader)
      fireAlert('error', 'Failed to add review')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="flex items-center justify-center h-96">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-green-200 rounded-full"></div>
            <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
            <MessageSquare className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">Customer Reviews</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-green-600">Customers Say</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read genuine reviews from people who trust PRISTOL for their daily hygiene needs.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <FilterBar sortBy={sortBy} setSortBy={setSortBy} />
          
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2"
          >
            <Star className="w-5 h-5" />
            Write a Review
          </button>
        </div>

        {filteredReviews.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-xl border border-gray-100">
            <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No reviews yet</h3>
            <p className="text-gray-500 mb-6">Be the first to share your experience with PRISTOL!</p>
            <button
              onClick={() => setShowForm(true)}
              className="px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors"
            >
              Write a Review
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}

        {showForm && (
          <ReviewForm
            onSubmit={handleAddReview}
            onClose={() => setShowForm(false)}
          />
        )}
      </div>

      <Footer />
    </div>
  )
}

export default Reviews