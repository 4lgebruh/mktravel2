"use client"
import { motion } from "framer-motion"

export default function AirportTransfers() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your booking logic here
    console.log('Airport transfer booking submitted')
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
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Flight Number"
            className="bg-transparent border border-accent text-white p-2 rounded"
          />
          <select className="bg-transparent border border-accent text-white p-2 rounded">
            <option value="">Select Airport</option>
            <option value="heathrow">Heathrow Airport</option>
            <option value="gatwick">Gatwick Airport</option>
            <option value="stansted">Stansted Airport</option>
            <option value="luton">Luton Airport</option>
          </select>
          <input
            type="text"
            placeholder="Destination Address"
            className="bg-transparent border border-accent text-white p-2 rounded"
          />
          <select className="bg-transparent border border-accent text-white p-2 rounded">
            <option value="">Journey Type</option>
            <option value="arrival">Airport Arrival</option>
            <option value="departure">Airport Departure</option>
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
            Book Airport Transfer
          </button>
        </form>
      </div>
    </div>
  )
} 