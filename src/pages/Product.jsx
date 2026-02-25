import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../Firebase/config'
import Navbar from '../Components/LandingPage/Navbar/Navbar'
import Footer from '../Components/LandingPage/Footer/Footer'
import Breadcrumb from '../Components/Product Page/Breadcrumb'
import ImageGallery from '../Components/Product Page/ImageGallery'
import ProductInfo from '../Components/Product Page/ProductInfo'
import PriceDisplay from '../Components/Product Page/PriceDisplay'
import StockStatus from '../Components/Product Page/StockStatus'
import QuantitySelector from '../Components/Product Page/QuantitySelector'
import ActionButtons from '../Components/Product Page/ActionButtons'
import FeatureBadges from '../Components/Product Page/FeatureBadges'
import Tabs from '../Components/Product Page/Tabs'
import LoadingState from '../Components/Product Page/LoadingState'
import NotFoundState from '../Components/Product Page/NotFoundState'
import showLoading from '../Components/Alerts/loading'
import fireAlert from '../Components/Alerts/alert'
import Swal from 'sweetalert2'

const Product = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [isInWishlist, setIsInWishlist] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        var loader = showLoading('Loading product details...')
        const docRef = doc(db, 'products', id)
        const docSnap = await getDoc(docRef)
        
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() })
        } else {
          fireAlert('error', 'Product not found')
          navigate('/shop')
        }
      } catch (error) {
        console.error('Error fetching product:', error)
        fireAlert('error', 'Error loading product')
      } finally {
        setLoading(false)
        Swal.close(loader)
      }
    }

    if (id) {
      fetchProduct()
    }
  }, [id, navigate])

  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity(prev => prev + 1)
    } else {
      setQuantity(prev => prev > 1 ? prev - 1 : 1)
    }
  }

  const handleAddToCart = () => {
    showLoading('Adding to cart...')
    const arr = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = arr.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      const ob = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        imageUrl: product.imageUrl
      }
      arr.push(ob)
    }
    
    localStorage.setItem('cart', JSON.stringify(arr))
    setTimeout(() => {
      fireAlert('success', 'Product added to cart!')
    }, 1000)
  }

  const handleBuyNow = () => {
    showLoading('Processing...')
    setTimeout(() => {
      const productForCheckout = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        imageUrl: product.imageUrl
      }
      navigate('/checkout', { state: { type: 'product', product: productForCheckout } })
    }, 1000)
  }

  const handleShare = async () => {
    const url = window.location.href
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      fireAlert('success', 'Link copied to clipboard!')
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      fireAlert('error', 'Failed to copy link')
      console.error(err)
    }
  }

  const handleWishlist = () => {
    setIsInWishlist(!isInWishlist)
    fireAlert('success', isInWishlist ? 'Removed from wishlist' : 'Added to wishlist')
  }

  if (loading) {
    return <LoadingState />
  }

  if (!product) {
    return <NotFoundState />
  }

  const productImages = product.imageUrl ? [product.imageUrl] : []

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb productName={product.name} />

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-12">
            <ImageGallery
              images={productImages}
              name={product.name}
              discount={product.discount}
              isNew={product.isNew}
              onWishlist={handleWishlist}
              onShare={handleShare}
              isInWishlist={isInWishlist}
              copied={copied}
            />

            <div className="space-y-6">
              <ProductInfo
                name={product.name}
                rating={product.rating}
                category={product.category}
              />
              
              <PriceDisplay
                price={product.price}
                originalPrice={product.originalPrice}
              />
              
              <StockStatus stock={product.stock} />
              
              <QuantitySelector
                quantity={quantity}
                onIncrement={() => handleQuantityChange('increment')}
                onDecrement={() => handleQuantityChange('decrement')}
                maxStock={product.stock}
              />
              
              <ActionButtons
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
                disabled={product.stock === 0}
              />
              
              <FeatureBadges />
            </div>
          </div>
        </div>

        <Tabs product={product} />
      </div>

      <Footer />
    </div>
  )
}

export default Product