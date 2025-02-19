"use client"
import { motion } from "framer-motion"

export default function AToB() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your booking logic here
    console.log('A to B transfer booking submitted')
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h1 
        className="text-4xl font-serif mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        A to B Transfer
      </motion.h1>
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Pickup Address"
            className="bg-transparent border border-accent text-white p-2 rounded"
          />
          <input
            type="text"
            placeholder="Destination Address"
            className="bg-transparent border border-accent text-white p-2 rounded"
          />
          <select className="bg-transparent border border-accent text-white p-2 rounded">
            <option value="">Number of Passengers</option>
            <option value="1-3">1-3 Passengers</option>
            <option value="4-6">4-6 Passengers</option>
            <option value="7-8">7-8 Passengers</option>
          </select>
          <select className="bg-transparent border border-accent text-white p-2 rounded">
            <option value="">Luggage</option>
            <option value="small">Small (1-2 bags)</option>
            <option value="medium">Medium (3-4 bags)</option>
            <option value="large">Large (5+ bags)</option>
          </select>
          <input 
            type="date" 
            className="bg-transparent border border-accent text-white p-2 rounded" 
          />
          <input 
            type="time" 
            className="bg-transparent border border-accent text-white p-2 rounded" 
          />
          <button className="md:col-span-2 bg-accent text-primary py-2 rounded font-semibold">
            Book Transfer
          </button>
        </form>
      </div>
    </div>
  )
} 