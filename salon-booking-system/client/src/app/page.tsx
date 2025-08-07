'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Star, MapPin, Phone } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/common/Hero'
import ServiceCard from '@/components/common/ServiceCard'
import TestimonialCard from '@/components/common/TestimonialCard'
import BookingModal from '@/components/booking/BookingModal'

// Mock data - in production, this would come from your API
const mockServices = [
  {
    id: '1',
    name: 'Haircut & Styling',
    description: 'Professional haircut with styling',
    duration: 60,
    price: 65,
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop',
  },
  {
    id: '2',
    name: 'Hair Color',
    description: 'Full hair coloring service',
    duration: 120,
    price: 120,
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop',
  },
  {
    id: '3',
    name: 'Manicure',
    description: 'Complete nail care and polish',
    duration: 45,
    price: 35,
    category: 'nails',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop',
  },
  {
    id: '4',
    name: 'Facial Treatment',
    description: 'Deep cleansing facial treatment',
    duration: 60,
    price: 80,
    category: 'skincare',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop',
  },
]

const mockTestimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Amazing service! The staff is professional and the atmosphere is so relaxing.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    service: 'Hair Color',
  },
  {
    id: '2',
    name: 'Michael Chen',
    rating: 5,
    comment: 'Best haircut I\'ve ever had. Will definitely be coming back!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    service: 'Haircut',
  },
  {
    id: '3',
    name: 'Emily Davis',
    rating: 5,
    comment: 'The facial treatment was incredible. My skin feels amazing!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    service: 'Facial',
  },
]

const stats = [
  { icon: Users, label: 'Happy Customers', value: '2,500+' },
  { icon: Star, label: 'Average Rating', value: '4.9' },
  { icon: Calendar, label: 'Appointments', value: '10,000+' },
  { icon: Clock, label: 'Years Experience', value: '15+' },
]

export default function HomePage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const handleBookService = (serviceId: string) => {
    setSelectedService(serviceId)
    setIsBookingModalOpen(true)
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Hero onBookNow={() => setIsBookingModalOpen(true)} />

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="page-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary-100 rounded-full dark:bg-primary-900">
                    <stat.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover our comprehensive range of beauty and wellness services,
              designed to help you look and feel your absolute best.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard
                  service={service}
                  onBook={() => handleBookService(service.id)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose Our Salon?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                With over 15 years of experience, we are committed to providing exceptional
                beauty services in a luxurious and relaxing environment. Our team of skilled
                professionals uses only the finest products and latest techniques.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Expert Professionals
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our team consists of licensed and experienced beauty professionals.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Premium Products
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We use only high-quality, professional-grade products and equipment.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Relaxing Atmosphere
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Enjoy a peaceful and luxurious environment designed for your comfort.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=400&fit=crop"
                alt="Salon Interior"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-primary-600 mb-1">4.9/5</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Customer Rating</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about their experience with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Visit Our Salon
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Experience luxury and relaxation at our beautiful salon. We're conveniently
                located in the heart of the city with easy parking and accessibility.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      123 Beauty Street<br />
                      Downtown, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Contact
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      (555) 123-4567<br />
                      info@yoursalon.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Hours
                    </h3>
                    <div className="text-gray-600 dark:text-gray-400 space-y-1">
                      <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
                      <p>Sat: 9:00 AM - 6:00 PM</p>
                      <p>Sun: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Book Your Appointment
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Ready to treat yourself? Book your appointment online and we'll take care of the rest.
              </p>
              
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full btn-primary btn-lg"
              >
                Book Now
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => {
          setIsBookingModalOpen(false)
          setSelectedService(null)
        }}
        selectedServiceId={selectedService}
      />
    </div>
  )
}