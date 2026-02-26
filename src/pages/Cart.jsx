import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/LandingPage/Navbar/Navbar'
import Footer from '../Components/LandingPage/Footer/Footer'
import CartItem from '../Components/CartPage/CartItem'
import CartSummary from '../Components/CartPage/CartSummary'
import EmptyCart from '../Components/CartPage/EmptyCart'
import { ShoppingBag } from 'lucide-react'
import fireAlert from '../Components/Alerts/alert'
import {
  clearCartItems,
  getCartItems as getStoredCartItems,
  setCartItems as saveCartItems
} from '../utils/cartStorage'

const Cart = () => {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadCartFromStorage()
  }, [])

  useEffect(() => {
      document.title = "Cart - PPRISTOL";
    }, []);

  const loadCartFromStorage = () => {
    try {
      const savedCart = getStoredCartItems()
      setCartItems(savedCart)
    } catch (error) {
      console.error('Error loading cart:', error)
      setCartItems([])
    } finally {
      setLoading(false)
    }
  }

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    
    const updatedItems = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    )
    
    saveCartItems(updatedItems)
    saveCartItems(updatedItems)
  }

  const removeItem = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id)
    setCartItems(updatedItems)
    setCartItems(updatedItems)
    fireAlert('success', 'Item removed from cart')
  }

  const clearCart = () => {
    if (cartItems.length === 0) return
    
    if (window.confirm('Are you sure you want to clear your cart?')) {
      setCartItems([])
      clearCartItems()
      fireAlert('success', 'Cart cleared successfully')
    }
  }

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      fireAlert('error', 'Your cart is empty')
      return
    }
    navigate('/checkout', { state: { type: 'cart', items: cartItems } })
  }

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
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
      
      <div className="mt-[100px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
              <p className="text-sm text-gray-500">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
              </p>
            </div>
          </div>
          
          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-300"
            >
              Clear Cart
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                />
              ))}
            </div>

            <div className="lg:col-span-1">
              <CartSummary
                subtotal={calculateSubtotal()}
                itemCount={cartItems.length}
                onCheckout={handleCheckout}
              />
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default Cart
