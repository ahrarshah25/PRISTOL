import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db } from '../Firebase/config'
import Navbar from '../Components/LandingPage/Navbar/Navbar'
import Footer from '../Components/LandingPage/Footer/Footer'
import CheckoutForm from '../Components/CheckoutPage/CheckoutForm'
import OrderSummary from '../Components/CheckoutPage/OrderSummary'
import { ShoppingBag } from 'lucide-react'
import fireAlert from '../Components/Alerts/alert'
import showLoading from '../Components/Alerts/loading'
import Swal from 'sweetalert2'
import { clearCartItems } from '../utils/cartStorage'

const Checkout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [checkoutItems, setCheckoutItems] = useState([])
  const [checkoutType, setCheckoutType] = useState('cart')

  useEffect(() => {
    const { type, items, product } = location.state || {}
    
    if (type === 'cart') {
      setCheckoutType('cart')
      setCheckoutItems(items || [])
    } else if (type === 'product') {
      setCheckoutType('product')
      const productWithQuantity = { ...product, quantity: product.quantity || 1 }
      setCheckoutItems([productWithQuantity])
    } else {
      fireAlert('error', 'No items to checkout')
      navigate('/shop')
    }
  }, [location, navigate])

  const calculateSubtotal = () => {
    return checkoutItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0)
  }

  const handlePlaceOrder = async (formData) => {
    const loader = showLoading('Placing your order...')
    
    try {
      const subtotal = calculateSubtotal()
      const shipping = subtotal > 1000 ? 0 : 150
      const tax = subtotal * 0.05
      const total = subtotal + shipping + tax

      const orderData = {
        ...formData,
        items: checkoutItems.map(item => ({
          productId: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity || 1,
          imageUrl: item.imageUrl
        })),
        orderType: checkoutType,
        subtotal: subtotal,
        shipping: shipping,
        tax: tax,
        total: total,
        paymentMethod: 'COD',
        paymentStatus: 'unpaid',
        status: 'pending',
        orderDate: Timestamp.now().toMillis(),
        createdAt: Timestamp.now().toMillis()
      }

      const docRef = await addDoc(collection(db, 'orders'), orderData)
      
      if (checkoutType === 'cart') {
        clearCartItems()
      }
      
      Swal.close(loader)
      fireAlert('success', 'Order placed successfully!')
      navigate('/order-confirmation', { state: { order: { ...orderData, id: docRef.id } } })
      
    } catch (error) {
      console.error('Error placing order:', error)
      Swal.close(loader)
      fireAlert('error', 'Failed to place order. Please try again.')
    }
  }

  

  if (checkoutItems.length === 0) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <Navbar />
      
      <div className="mt-[100px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <ShoppingBag className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
            <p className="text-sm text-gray-500">
              {checkoutType === 'cart' ? 'Complete your purchase' : 'Complete your product purchase'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CheckoutForm onSubmit={handlePlaceOrder} />
          </div>
          
          <div className="lg:col-span-1">
            <OrderSummary 
              items={checkoutItems}
              subtotal={calculateSubtotal()}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Checkout
