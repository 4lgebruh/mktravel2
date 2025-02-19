"use client"
import { motion } from "framer-motion"

export default function OtherServices() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your booking logic here
    console.log('Other services booking submitted')
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h1 
        className="text-4xl font-serif mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Other Services
      </motion.h1>
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select className="bg-transparent border border-accent text-white p-2 rounded md:col-span-2">
            <option value="">Select Service Type</option>
            <option value="wedding">Wedding Transport</option>
            <option value="corporate">Corporate Events</option>
            <option value="tour">City Tours</option>
            <option value="special">Special Occasions</option>
          </select>
          <input
            type="text"
            placeholder="Pickup Location"
            className="bg-transparent border border-accent text-white p-2 rounded"
          />
          <input
            type="text"
            placeholder="Destination (if applicable)"
            className="bg-transparent border border-accent text-white p-2 rounded"
          />
          <select className="bg-transparent border border-accent text-white p-2 rounded">
            <option value="">Number of Passengers</option>
            <option value="1-3">1-3 Passengers</option>
            <option value="4-6">4-6 Passengers</option>
            <option value="7-8">7-8 Passengers</option>
          </select>
          <select className="bg-transparent border border-accent text-white p-2 rounded">
            <option value="">Duration</option>
            <option value="2">2 Hours</option>
            <option value="4">4 Hours</option>
            <option value="6">6 Hours</option>
            <option value="8">8 Hours</option>
            <option value="custom">Custom Duration</option>
          </select>
          <input 
            type="date" 
            className="bg-transparent border border-accent text-white p-2 rounded" 
          />
          <input 
            type="time" 
            className="bg-transparent border border-accent text-white p-2 rounded" 
          />
          <textarea
            placeholder="Additional Requirements or Special Requests"
            className="bg-transparent border border-accent text-white p-2 rounded md:col-span-2"
            rows={4}
          />
          <button className="md:col-span-2 bg-accent text-primary py-2 rounded font-semibold">
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  )
} 