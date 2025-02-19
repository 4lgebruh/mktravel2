"use client"
import { motion } from "framer-motion"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AirportTransfers() {
  const router = useRouter()
  const [journeyType, setJourneyType] = useState<'to' | 'from'>('to')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Store form data in localStorage or state management if needed
    const formData = {
      journeyType,
      // Add other form fields here
    }
    console.log('Form data:', formData)
    router.push('/booking-details')
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h1 
        className="text-4xl font-serif mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Airport Transfers
      </motion.h1>
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Journey Direction Toggle */}
          <div className="flex justify-center gap-4 p-2 bg-white bg-opacity-5 rounded-lg">
            <button
              type="button"
              onClick={() => setJourneyType('to')}
              className={`px-4 py-2 rounded-lg transition-all ${
                journeyType === 'to' 
                  ? 'bg-accent text-primary' 
                  : 'text-white hover:bg-white hover:bg-opacity-10'
              }`}
            >
              To Airport
            </button>
            <button
              type="button"
              onClick={() => setJourneyType('from')}
              className={`px-4 py-2 rounded-lg transition-all ${
                journeyType === 'from' 
                  ? 'bg-accent text-primary' 
                  : 'text-white hover:bg-white hover:bg-opacity-10'
              }`}
            >
              From Airport
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select 
              className="bg-transparent border border-accent text-white p-2 rounded [&>option]:text-primary" 
            >
              <option value="">Select Airport</option>
              <option value="heathrow">Heathrow Airport</option>
              <option value="gatwick">Gatwick Airport</option>
              <option value="stansted">Stansted Airport</option>
              <option value="luton">Luton Airport</option>
            </select>

            <input
              type="text"
              placeholder={journeyType === 'to' ? 'Pickup Address' : 'Destination Address'}
              className="bg-transparent border border-accent text-white p-2 rounded"
            />

            <input
              type="text"
              placeholder="Flight Number"
              className="bg-transparent border border-accent text-white p-2 rounded"
            />

            <input 
              type="datetime-local" 
              className="bg-transparent border border-accent text-white p-2 rounded"
            />
          </div>

          <button className="w-full bg-accent text-primary py-2 rounded font-semibold">
            Continue to Details
          </button>
        </form>
      </div>
    </div>
  )
} 