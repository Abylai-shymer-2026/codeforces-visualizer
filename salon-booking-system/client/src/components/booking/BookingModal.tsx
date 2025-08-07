'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { X, Calendar, Clock, User } from 'lucide-react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  selectedServiceId: string | null
}

export default function BookingModal({ isOpen, onClose, selectedServiceId }: BookingModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-semibold text-gray-900 dark:text-white"
                  >
                    Book Your Appointment
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  {/* Service Selection */}
                  <div>
                    <label className="label">Select Service</label>
                    <select className="input">
                      <option>Haircut & Styling - $65 (1h)</option>
                      <option>Hair Color - $120 (2h)</option>
                      <option>Manicure - $35 (45m)</option>
                      <option>Facial Treatment - $80 (1h)</option>
                    </select>
                  </div>

                  {/* Date Selection */}
                  <div>
                    <label className="label">Select Date</label>
                    <input type="date" className="input" />
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="label">Select Time</label>
                    <div className="grid grid-cols-4 gap-2">
                      {['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'].map((time) => (
                        <button
                          key={time}
                          className="p-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary-500 hover:text-primary-600 transition-colors"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Staff Selection */}
                  <div>
                    <label className="label">Select Staff (Optional)</label>
                    <select className="input">
                      <option>Any Available</option>
                      <option>Sarah - Hair Specialist</option>
                      <option>Mike - Senior Stylist</option>
                      <option>Emma - Nail Artist</option>
                    </select>
                  </div>

                  {/* Customer Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="label label-required">Full Name</label>
                      <input type="text" className="input" placeholder="Enter your name" />
                    </div>
                    <div>
                      <label className="label label-required">Phone</label>
                      <input type="tel" className="input" placeholder="Enter your phone" />
                    </div>
                  </div>

                  <div>
                    <label className="label label-required">Email</label>
                    <input type="email" className="input" placeholder="Enter your email" />
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="label">Special Requests</label>
                    <textarea 
                      className="input resize-none" 
                      rows={3}
                      placeholder="Any special requests or notes..."
                    />
                  </div>

                  {/* Summary */}
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Booking Summary</h4>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex justify-between">
                        <span>Service:</span>
                        <span>Haircut & Styling</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span>1 hour</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date & Time:</span>
                        <span>Select date and time</span>
                      </div>
                      <div className="flex justify-between font-semibold text-gray-900 dark:text-white">
                        <span>Total:</span>
                        <span>$65.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end space-x-4 mt-8">
                  <button
                    onClick={onClose}
                    className="btn-secondary"
                  >
                    Cancel
                  </button>
                  <button className="btn-primary">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}