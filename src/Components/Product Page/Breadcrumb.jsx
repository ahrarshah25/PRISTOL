import React from 'react'
import { useNavigate } from 'react-router-dom'

const Breadcrumb = ({ productName }) => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
      <button onClick={() => navigate('/')} className="hover:text-green-600">Home</button>
      <span>/</span>
      <button onClick={() => navigate('/shop')} className="hover:text-green-600">Shop</button>
      <span>/</span>
      <span className="text-gray-900 font-medium">{productName}</span>
    </div>
  )
}

export default Breadcrumb