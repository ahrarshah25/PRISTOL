import React from 'react'
import Navbar from '../LandingPage/Navbar/Navbar'
import Footer from '../LandingPage/Footer/Footer'

const LoadingState = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="flex items-center justify-center h-96">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-green-200 rounded-full"></div>
          <div className="w-20 h-20 border-4 border-green-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LoadingState