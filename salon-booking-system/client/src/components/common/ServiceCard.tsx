'use client'

import { motion } from 'framer-motion'
import { Clock, DollarSign, Calendar } from 'lucide-react'

interface Service {
  id: string
  name: string
  description: string
  duration: number
  price: number
  category: string
  image: string
}

interface ServiceCardProps {
  service: Service
  onBook: () => void
}

export default function ServiceCard({ service, onBook }: ServiceCardProps) {
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    
    if (hours > 0 && remainingMinutes > 0) {
      return `${hours}h ${remainingMinutes}m`
    } else if (hours > 0) {
      return `${hours}h`
    } else {
      return `${remainingMinutes}m`
    }
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      hair: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      nails: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
      skincare: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      wellness: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="card-hover group"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(service.category)}`}>
            {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
          </span>
        </div>

        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            ${service.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
          {service.name}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {service.description}
        </p>

        {/* Service Details */}
        <div className="flex items-center justify-between mb-6 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{formatDuration(service.duration)}</span>
          </div>
          
          <div className="flex items-center">
            <DollarSign className="w-4 h-4 mr-1" />
            <span>From ${service.price}</span>
          </div>
        </div>

        {/* Book Button */}
        <button
          onClick={onBook}
          className="w-full btn-primary group-hover:shadow-lg transition-all duration-200"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Book Now
        </button>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl pointer-events-none" />
    </motion.div>
  )
}