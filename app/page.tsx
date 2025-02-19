"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import ServiceCard from "@/components/ServiceCard"
import FeatureItem from "@/components/FeatureItem"
import TestimonialCarousel from "@/components/TestimonialCarousel"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
    </div>
  )
}

const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center">
    <Image
      src="/mercedes.jpg"
      alt="Mercedes luxury vehicle"
      fill
      priority
      className="object-cover"
      quality={100}
    />
    <div className="absolute inset-0 bg-black bg-opacity-50" />
    <div className="relative z-10 text-center">
      <motion.h1
        className="text-5xl md:text-7xl font-serif mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Luxury Airport Transfers, Redefined.
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Reliable. Comfortable. On Time.
      </motion.p>
      <BookingForm />
    </div>
  </section>
)

const BookingForm = () => (
  <motion.form
    className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <input
        type="text"
        placeholder="Pickup Location"
        className="bg-transparent border border-accent text-white p-2 rounded"
      />
      <input
        type="text"
        placeholder="Drop-off Location"
        className="bg-transparent border border-accent text-white p-2 rounded"
      />
      <input type="date" className="bg-transparent border border-accent text-white p-2 rounded" />
      <input type="time" className="bg-transparent border border-accent text-white p-2 rounded" />
    </div>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full bg-accent text-primary py-2 rounded font-semibold"
    >
      Book Now
    </motion.button>
  </motion.form>
)

const ServicesSection = () => (
  <section id="services" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-serif text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ServiceCard
          icon="🛫"
          title="Airport Transfers"
          description="Seamless transfers to and from all major airports."
        />
        <ServiceCard
          icon="⛴"
          title="Ferry Port Transfers"
          description="Luxury transport for smooth ferry terminal pickups & drop-offs."
        />
        <ServiceCard
          icon="🚗"
          title="Point-to-Point Travel"
          description="Travel in style between any two locations in comfort."
        />
        <ServiceCard
          icon="🎩"
          title="Custom Chauffeur Service"
          description="Hire a dedicated driver for personal or business trips."
        />
      </div>
    </div>
  </section>
)

const FeaturesSection = () => (
  <section id="features" className="py-20 bg-primary">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-serif text-center mb-12">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureItem icon="⏰" title="Punctuality" />
        <FeatureItem icon="👔" title="Professional Drivers" />
        <FeatureItem icon="🚙" title="Luxury Fleet" />
        <FeatureItem icon="📱" title="24/7 Availability" />
      </div>
    </div>
  </section>
)

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-serif text-center mb-12">What Our Clients Say</h2>
      <TestimonialCarousel />
    </div>
  </section>
)

