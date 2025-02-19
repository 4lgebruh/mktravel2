"use client"
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'

export default function BookingDetails() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking details submitted')
    // Add payment navigation here later
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h1 
        className="text-4xl font-serif mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Passenger Details
      </motion.h1>
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent border border-accent text-white p-2 rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent border border-accent text-white p-2 rounded"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-transparent border border-accent text-white p-2 rounded"
            />
            <input
              type="text"
              placeholder="Additional Passenger Names"
              className="bg-transparent border border-accent text-white p-2 rounded"
            />
            <select 
              className="bg-transparent border border-accent text-white p-2 rounded [&>option]:text-primary"
            >
              <option value="">Number of Passengers</option>
              <option value="1">1 Passenger</option>
              <option value="2">2 Passengers</option>
              <option value="3">3 Passengers</option>
              <option value="4">4 Passengers</option>
              <option value="5">5+ Passengers</option>
            </select>
            <select 
              className="bg-transparent border border-accent text-white p-2 rounded [&>option]:text-primary"
            >
              <option value="">Luggage Amount</option>
              <option value="small">1-2 Bags</option>
              <option value="medium">3-4 Bags</option>
              <option value="large">5+ Bags</option>
            </select>
          </div>

          <textarea
            placeholder="Special Requirements (Optional)"
            className="w-full bg-transparent border border-accent text-white p-2 rounded h-24"
          />

          <button className="w-full bg-accent text-primary py-2 rounded font-semibold">
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  )
} 