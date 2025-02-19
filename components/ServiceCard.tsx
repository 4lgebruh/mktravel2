"use client"
import { motion } from "framer-motion"
import type React from "react"

interface ServiceCardProps {
  icon: string
  title: string
  description: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <motion.div
    className="bg-primary p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-serif mb-2">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <motion.button
      className="bg-accent text-primary px-4 py-2 rounded font-semibold"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Book Now
    </motion.button>
  </motion.div>
)

export default ServiceCard

