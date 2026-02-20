import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Icon = ({ icon }) => {
  const getIcon = () => {
    switch(icon) {
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-green-600" />
      case 'Phone':
        return <Phone className="w-6 h-6 text-green-600" />
      case 'Mail':
        return <Mail className="w-6 h-6 text-green-600" />
      case 'Clock':
        return <Clock className="w-6 h-6 text-green-600" />
      default:
        return <MapPin className="w-6 h-6 text-green-600" />
    }
  }

  return (
    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
      <div className="group-hover:text-white transition-colors duration-300">
        {getIcon()}
      </div>
    </div>
  )
}

export default Icon