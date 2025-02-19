"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    text: "MK Travel provided an exceptional service. The driver was punctual, professional, and the vehicle was immaculate.",
    author: "John D., Business Executive",
  },
  {
    id: 2,
    text: "I've never had a smoother airport transfer. MK Travel's attention to detail is unmatched.",
    author: "Sarah L., Frequent Traveler",
  },
  {
    id: 3,
    text: "The custom chauffeur service was perfect for our company retreat. Highly recommended!",
    author: "Michael R., CEO",
  },
]

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-primary p-8 rounded-lg shadow-lg"
        >
          <p className="text-lg mb-4">{testimonials[currentIndex].text}</p>
          <p className="text-accent font-serif">{testimonials[currentIndex].author}</p>
          <div className="flex justify-center mt-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-accent">
                ★
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prevTestimonial}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-accent text-primary p-2 rounded-full"
      >
        ←
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-accent text-primary p-2 rounded-full"
      >
        →
      </button>
    </div>
  )
}

export default TestimonialCarousel

