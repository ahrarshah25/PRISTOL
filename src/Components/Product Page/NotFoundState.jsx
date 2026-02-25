import React from 'react'
import { Package } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../LandingPage/Navbar/Navbar'
import Footer from '../LandingPage/Footer/Footer'

const NotFoundState = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="text-center py-20">
        <Package className="w-20 h-20 text-gray-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/shop')}
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300"
        >
          Back to Shop
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default NotFoundState