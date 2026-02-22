import React from 'react'
import { 
  MapPin, Phone, Mail, Clock, 
  CheckCircle, Droplets, Shield, Lock,
  Truck, RefreshCw, AlertTriangle, Scale,
  Database, Settings, Cookie, Share2,
  UserCheck, Users, Globe
} from 'lucide-react'

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
      case 'CheckCircle':
        return <CheckCircle className="w-6 h-6 text-green-600" />
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-green-600" />
      case 'Shield':
        return <Shield className="w-6 h-6 text-green-600" />
      case 'Lock':
        return <Lock className="w-6 h-6 text-green-600" />
      case 'Truck':
        return <Truck className="w-6 h-6 text-green-600" />
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-green-600" />
      case 'AlertTriangle':
        return <AlertTriangle className="w-6 h-6 text-green-600" />
      case 'Scale':
        return <Scale className="w-6 h-6 text-green-600" />
      case 'Database':
        return <Database className="w-6 h-6 text-green-600" />
      case 'Settings':
        return <Settings className="w-6 h-6 text-green-600" />
      case 'Cookie':
        return <Cookie className="w-6 h-6 text-green-600" />
      case 'Share2':
        return <Share2 className="w-6 h-6 text-green-600" />
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-green-600" />
      case 'Users':
        return <Users className="w-6 h-6 text-green-600" />
      case 'Globe':
        return <Globe className="w-6 h-6 text-green-600" />
      default:
        return <Shield className="w-6 h-6 text-green-600" />
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