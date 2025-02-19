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
        className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-serif mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </motion.div>
    </Link>
  )
}

export default ServiceCard