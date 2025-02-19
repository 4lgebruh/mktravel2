"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import * as React from 'react'

interface Props {
  icon: string
  title: string
  description: string
  href: string
}

const ServiceCard: React.FunctionComponent<Props> = (props) => {
  const { icon, title, description, href } = props
  return (
    <Link href={href}>
      <motion.div
        className="bg-black bg-opacity-80 backdrop-blur-md p-6 rounded-lg cursor-pointer border border-accent/20 shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-serif mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>
        <motion.button
          className="w-full bg-accent text-primary py-2 px-4 rounded font-semibold hover:bg-accent/90 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Book Now
        </motion.button>
      </motion.div>
    </Link>
  )
}

export default ServiceCard

