"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Phone, Info, Book, Coffee, Utensils, Wifi, Home, Users, Dumbbell } from "lucide-react"
import FadeIn from "../components/animations/FadeIn"
import { StaggerChildren, StaggerItem } from "../components/animations/StaggerChildren"
import SectionHeading from "../components/ui/SectionHeading"
import ParallaxSection from "../components/animations/ParallaxSection"
import TextReveal from "../components/animations/TextReveal"

const CampusPage = () => {
  // Campus facilities data
  const facilities = [
    {
      title: "Library",
      description: "State-of-the-art library with over 50,000 books, journals, and digital resources.",
      icon: <Book className="h-6 w-6" />,
      image: "/images/campus/library.jpg",
    },
    {
      title: "Cafeteria",
      description: "Modern cafeteria serving nutritious meals and refreshments throughout the day.",
      icon: <Coffee className="h-6 w-6" />,
      image: "/images/campus/cafeteria.jpg",
    },
    {
      title: "Dining Hall",
      description: "Spacious dining hall with a variety of food options catering to different tastes and preferences.",
      icon: <Utensils className="h-6 w-6" />,
      image: "/images/campus/dining.jpg",
    },
    {
      title: "Wi-Fi Campus",
      description: "High-speed internet connectivity across the entire campus for seamless learning and research.",
      icon: <Wifi className="h-6 w-6" />,
      image: "/images/campus/wifi.jpg",
    },
    {
      title: "Hostels",
      description: "Comfortable and secure accommodation for students with modern amenities and 24/7 security.",
      icon: <Home className="h-6 w-6" />,
      image: "/images/campus/hostel.jpg",
    },
    {
      title: "Auditorium",
      description: "Multi-purpose auditorium for academic events, cultural programs, and guest lectures.",
      icon: <Users className="h-6 w-6" />,
      image: "/images/campus/auditorium.jpg",
    },
    {
      title: "Sports Complex",
      description: "Comprehensive sports facilities including indoor and outdoor games, gymnasium, and fitness center.",
      icon: <Dumbbell className="h-6 w-6" />,
      image: "/images/campus/sports.jpg",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        backgroundImage="/images/campus/campus-aerial.jpg"
        height="500px"
        overlayColor="rgba(0, 102, 153, 0.7)"
      >
        <div className="container px-4 md:px-6 text-center text-white mx-auto">
          <TextReveal
            text="Campus Life at SRKR"
            element="h1"
            className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4"
          />
          <p className="max-w-[800px] mx-auto text-white/80 md:text-xl">
            Experience world-class facilities and vibrant campus life at CSD&IT Departments
          </p>
        </div>
      </ParallaxSection>

      {/* Campus Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <FadeIn direction="right">
              <SectionHeading
                title="Campus Overview"
                description="A glimpse into our sprawling campus and state-of-the-art facilities"
                align="left"
              />
              <div className="mt-4 space-y-4">
                <p className="text-gray-700">
                  CSD&IT Departments is spread across a lush green campus of 120 acres, providing a perfect
                  environment for academic excellence and holistic development. The campus is designed to offer a
                  conducive learning atmosphere with modern infrastructure and amenities.
                </p>
                <p className="text-gray-700">
                  Our campus features state-of-the-art classrooms, well-equipped laboratories, a central library, sports
                  facilities, hostels, cafeteria, and much more. The serene environment, away from the hustle and bustle
                  of the city, allows students to focus on their studies while enjoying a vibrant campus life.
                </p>
                <div className="pt-4">
                  <h3 className="text-lg font-bold text-[#006699] mb-2">Campus Highlights</h3>
                  <ul className="space-y-2">
                    {[
                      "120-acre green campus",
                      "Modern infrastructure",
                      "Wi-Fi enabled campus",
                      "Eco-friendly environment",
                      "Smart classrooms",
                    ].map((highlight, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-yellow-500 flex items-center justify-center mt-0.5 mr-2">
                          <motion.div className="h-2 w-2 bg-white rounded-full" />
                        </div>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#006699] to-yellow-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <img
                  src="/images/campus/campus-main.jpg"
                  alt="CSD&IT Departments Campus"
                  className="w-full h-auto rounded-lg relative z-10"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">Aerial view of CSD&IT Departments campus</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <SectionHeading
            title="Campus Facilities"
            description="Explore the world-class facilities available at CSD&IT Departments"
          />

          <div className="mt-12">
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{
                      y: -10,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 h-full transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={facility.image || "/placeholder.svg?height=192&width=384"}
                        alt={facility.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-0 right-0 bg-[#006699] text-white p-2 rounded-bl-lg">
                        {facility.icon}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-[#006699] mb-2">{facility.title}</h3>
                      <p className="text-gray-600 text-sm">{facility.description}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="w-full py-12 md:py-16 bg-[#006699] text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Experience Our Campus Virtually</h2>
          <p className="max-w-[600px] mx-auto mb-6 text-white/80">
            Take a virtual tour of our campus and explore the facilities from the comfort of your home
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-4 py-2 bg-yellow-500 text-[#006699] font-medium rounded-md hover:bg-yellow-400 transition-colors"
          >
            Start Virtual Tour
          </motion.button>
        </div>
      </section>

      {/* Campus Location */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <SectionHeading title="Campus Location" description="Strategically located for easy accessibility" />

          <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-12">
            <FadeIn direction="right">
              <div className="bg-white rounded-lg shadow-md p-6 h-full">
                <h3 className="text-xl font-bold text-[#006699] mb-4">How to Reach Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-[#006699] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-gray-600">
                        CSD&IT Departments, Bhimavaram, West Godavari District, Andhra Pradesh - 534204
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Info className="h-5 w-5 text-[#006699] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Nearest Landmarks</h4>
                      <ul className="text-gray-600 space-y-1 mt-1">
                        <li>• 2 km from Bhimavaram Railway Station</li>
                        <li>• 1.5 km from Bhimavaram Bus Stand</li>
                        <li>• 80 km from Rajahmundry Airport</li>
                        <li>• 120 km from Vijayawada Airport</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-[#006699] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Contact</h4>
                      <p className="text-gray-600">+91 8816 223344</p>
                      <p className="text-gray-600">info@srkrec.edu.in</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-[#006699] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Office Hours</h4>
                      <p className="text-gray-600">Monday to Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.7554454526213!2d81.5197!3d16.4423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37c2f24ee6c2a7%3A0xc7b37d2e7d156acc!2sSRKR%20Engineering%20College!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CSD&IT Departments Location"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CampusPage
