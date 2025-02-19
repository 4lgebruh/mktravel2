"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Hamburger Button - only visible on mobile */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 text-white md:hidden"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {/* Mobile Menu - only visible on mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center space-y-8 text-white text-2xl">
              <a href="#" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
              <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
              <a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a>
              <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation 