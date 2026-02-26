import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CheckCircle, Package, Truck, Clock, MapPin, Mail, Phone, Printer } from 'lucide-react'
import Navbar from '../Components/LandingPage/Navbar/Navbar'
import Footer from '../Components/LandingPage/Footer/Footer'
import ConfirmationHeader from '../Components/OrderConfirmationPage/ConfirmationHeader'
import OrderDetails from '../Components/OrderConfirmationPage/OrderDetails'
import CustomerInfo from '../Components/OrderConfirmationPage/CustomerInfo'
import OrderItems from '../Components/OrderConfirmationPage/OrderItems'
import ActionButtons from '../Components/OrderConfirmationPage/ActionButtons'
import OrderTimeline from '../Components/OrderConfirmationPage/OrderTimeline'
import fireAlert from '../Components/Alerts/alert'
import Swal from 'sweetalert2'

const OrderConfirmation = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOrder = async () => {
      const orderData = location.state?.order
      
      if (!orderData) {
        fireAlert('error', 'No order information found')
        navigate('/')
        return
      }

      setOrder(orderData)
      setLoading(false)
    }

    fetchOrder()
  }, [location, navigate])

  const handlePrint = () => {
    window.print()
  }

  const handleTrackOrder = () => {
    fireAlert('info', 'Tracking feature coming soon!')
  }

  const handleContinueShopping = () => {
    navigate('/shop')
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

  if (!order) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Animation */}
        <div className="flex justify-center mb-8 animate-bounce">
          <div className="relative">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
              ✓
            </div>
          </div>
        </div>

        {/* Header */}
        <ConfirmationHeader orderId={order.id} />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Left Column - Order Details */}
          <div className="lg:col-span-2 space-y-6">
            <OrderDetails order={order} />
            <OrderItems items={order.items} />
          </div>

          {/* Right Column - Customer Info & Actions */}
          <div className="space-y-6">
            <CustomerInfo order={order} />
            <OrderTimeline status={order.status} />
            <ActionButtons 
              onPrint={handlePrint}
              onTrack={handleTrackOrder}
              onContinue={handleContinueShopping}
            />
          </div>
        </div>

        <style jsx>{`
          @media print {
            .no-print {
              display: none !important;
            }
            body {
              background: white;
            }
          }
        `}</style>
      </div>

      <Footer />
    </div>
  )
}

export default OrderConfirmation