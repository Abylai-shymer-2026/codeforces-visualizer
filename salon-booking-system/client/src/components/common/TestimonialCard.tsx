'use client'

import { Star, Quote } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  rating: number
  comment: string
  image: string
  service: string
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ))
  }

  return (
    <div className="card p-6 relative">
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 text-primary-200 dark:text-primary-800">
        <Quote className="w-8 h-8" />
      </div>

      {/* Rating */}
      <div className="flex items-center mb-4">
        {renderStars(testimonial.rating)}
      </div>

      {/* Comment */}
      <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        "{testimonial.comment}"
      </blockquote>

      {/* Customer Info */}
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <div className="font-semibold text-gray-900 dark:text-white">
            {testimonial.name}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {testimonial.service}
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
    </div>
  )
}