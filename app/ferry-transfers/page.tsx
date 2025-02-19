"use client"
import { motion } from "framer-motion"

export default function FerryTransfers() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your booking logic here
    console.log('Ferry transfer booking submitted')
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h1 
        className="text-4xl font-serif mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Ferry Port Transfers
      </motion.h1>
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select className="bg-transparent border border-accent text-white p-2 rounded">
            <option value="">Select Ferry Port</option>
            <option value="dover">Dover</option>
            <option value="portsmouth">Portsmouth</option>
            <option value="southampton">Southampton</option>
          </select>
          <input
            type="text"
            placeholder="Ferry Reference"
            className="bg-transparent border border-accent text-white p-2 rounded"
          />
          <input
            type="text"
            placeholder="Pickup/Dropoff Address"
            className="bg-transparent border border-accent text-white p-2 rounded"
          />
          <select className="bg-transparent border border-accent text-white p-2 rounded">
            <option value="">Journey Type</option>
            <option value="to-port">To Ferry Port</option>
            <option value="from-port">From Ferry Port</option>
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
            Book Ferry Transfer
          </button>
        </form>
      </div>
    </div>
  )
} 