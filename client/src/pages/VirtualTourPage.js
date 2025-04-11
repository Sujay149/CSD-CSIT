"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Info, ArrowRight } from "lucide-react"
import VirtualCampusTour from "../components/ui/VirtualCampusTour"
import SectionHeading from "../components/ui/SectionHeading"
import FadeIn from "../components/animations/FadeIn"
import { Link } from "react-router-dom"

const VirtualTourPage = () => {
  // Animation variants
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  // Virtual tour data
  const tourSpots = [
    {
      title: "Technology Centre",
      image: "/images/tech-centre.jpg",
      description:
        "Our state-of-the-art Technology Centre houses advanced labs, innovation spaces, and startup incubation facilities. Established in 2015, it serves as the hub for all technology and innovation activities at CSD&IT Departments.",
      features: [
        "AICTE IDEA Lab",
        "Innovation Centre",
        "On-Campus Startups",
        "24/7 Computer Labs",
        "High-Speed Internet",
        "Servers and Cloud Infrastructure",
      ],
    },
    {
      title: "Computer Science Department",
      image: "/images/cs-department.jpg",
      description:
        "The Computer Science Department offers cutting-edge programs including Computer Science & Design (CSD), Computer Science & Engineering (CSE), and Artificial Intelligence & Data Science (AI-DS).",
      features: [
        "Modern Classrooms",
        "Specialized Labs",
        "Research Facilities",
        "Faculty Offices",
        "Student Collaboration Spaces",
        "Project Demonstration Areas",
      ],
    },
    {
      title: "Central Library",
      image: "/images/library.jpg",
      description:
        "Our extensive library provides access to thousands of books, journals, and digital resources. It serves as a quiet study space and research hub for students and faculty.",
      features: [
        "Digital Repository",
        "Reading Rooms",
        "Group Study Areas",
        "Online Journals",
        "Reference Section",
        "Multimedia Resources",
      ],
    },
    {
      title: "Sports Complex",
      image: "/images/sports-complex.jpg",
      description:
        "The sports complex offers facilities for various indoor and outdoor sports activities, promoting physical fitness and team building among students.",
      features: [
        "Cricket Ground",
        "Basketball Courts",
        "Indoor Games",
        "Fitness Center",
        "Swimming Pool",
        "Athletics Track",
      ],
    },
    {
      title: "Auditorium",
      image: "/images/auditorium.jpg",
      description:
        "Our modern auditorium hosts academic events, cultural programs, conferences, and guest lectures throughout the year.",
      features: [
        "500+ Seating Capacity",
        "Advanced Audio System",
        "Projection Facilities",
        "Stage Lighting",
        "Green Rooms",
        "Conference Facilities",
      ],
    },
    {
      title: "Hostel Facilities",
      image: "/images/hostel.jpg",
      description:
        "CSD&IT Departments provides comfortable and secure hostel facilities for both boys and girls with all necessary amenities.",
      features: [
        "Separate Boys & Girls Hostels",
        "Furnished Rooms",
        "Dining Facilities",
        "24/7 Security",
        "Wi-Fi Connectivity",
        "Recreation Areas",
      ],
    },
    {
      title: "Canteen",
      image: "/images/canteen.jpg",
      description:
        "Our campus canteen offers a variety of nutritious and affordable food options for students and staff in a clean and comfortable environment.",
      features: [
        "Hygienic Food Preparation",
        "Vegetarian & Non-Vegetarian Options",
        "Affordable Prices",
        "Spacious Seating",
        "Special Meal Plans",
        "Snack Counters",
      ],
    },
    {
      title: "Placement Cell",
      image: "/images/placement-cell.jpg",
      description:
        "The Placement Cell facilitates campus recruitment drives, training programs, and industry interactions to ensure excellent career opportunities for our students.",
      features: [
        "Interview Rooms",
        "Group Discussion Areas",
        "Training Facilities",
        "Company Presentation Space",
        "Career Counseling",
        "Industry Collaboration Office",
      ],
    },
  ]

  // Campus map locations
  const mapLocations = [
    { id: 1, name: "Main Building", coordinates: { x: 35, y: 45 } },
    { id: 2, name: "Technology Centre", coordinates: { x: 65, y: 30 } },
    { id: 3, name: "Library", coordinates: { x: 50, y: 60 } },
    { id: 4, name: "Sports Complex", coordinates: { x: 80, y: 70 } },
    { id: 5, name: "Hostels", coordinates: { x: 20, y: 75 } },
    { id: 6, name: "Canteen", coordinates: { x: 45, y: 80 } },
    { id: 7, name: "Auditorium", coordinates: { x: 60, y: 40 } },
    { id: 8, name: "Parking", coordinates: { x: 25, y: 25 } },
  ]

  const [selectedLocation, setSelectedLocation] = useState(null)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#006699] text-white">
        <div className="container px-4 md:px-6">
          <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Virtual Campus Tour</h1>
              <p className="max-w-[900px] text-white/80 md:text-xl/relaxed">
                Explore CSD&IT Departments's campus facilities and experience our vibrant academic environment
                from anywhere.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Explore Our Campus"
            description="Take a virtual tour of our state-of-the-art facilities and experience CSD&IT Departments's campus life."
          />

          <div className="mt-8">
            <VirtualCampusTour tourSpots={tourSpots} />
            <div className="mt-4 text-center text-sm text-gray-500">
              <p>Use arrow keys to navigate or click the navigation buttons</p>
              <p>Press 'i' to toggle information panel, 'f' for fullscreen view</p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Map */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Interactive Campus Map"
            description="Explore our campus layout and locate key facilities."
          />

          <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <div className="aspect-[16/9] relative bg-gray-200">
                <img
                  src="/images/campus-map.jpg"
                  alt="CSD&IT Departments Campus Map"
                  className="w-full h-full object-cover"
                />

                {/* Map Pins */}
                {mapLocations.map((location) => (
                  <button
                    key={location.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{
                      left: `${location.coordinates.x}%`,
                      top: `${location.coordinates.y}%`,
                    }}
                    onClick={() => setSelectedLocation(location)}
                  >
                    <div className="relative">
                      <MapPin
                        className={`h-8 w-8 text-red-500 drop-shadow-md ${selectedLocation?.id === location.id ? "text-blue-500 scale-125" : "hover:text-blue-500 hover:scale-110"} transition-all duration-200`}
                      />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white px-2 py-1 rounded shadow-md text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        {location.name}
                      </div>
                    </div>
                  </button>
                ))}

                {/* Selected Location Info */}
                {selectedLocation && (
                  <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-72 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-lg text-[#006699]">{selectedLocation.name}</h3>
                      <button className="text-gray-500 hover:text-gray-700" onClick={() => setSelectedLocation(null)}>
                        <Info className="h-5 w-5" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      {selectedLocation.id === 1 &&
                        "The main administrative building housing offices, classrooms, and laboratories."}
                      {selectedLocation.id === 2 &&
                        "Our state-of-the-art Technology Centre with advanced labs and innovation spaces."}
                      {selectedLocation.id === 3 &&
                        "The central library with extensive collection of books, journals, and digital resources."}
                      {selectedLocation.id === 4 &&
                        "Sports facilities including indoor and outdoor courts, fields, and fitness center."}
                      {selectedLocation.id === 5 && "Comfortable and secure residential facilities for boys and girls."}
                      {selectedLocation.id === 6 &&
                        "Campus canteen offering a variety of food options in a clean environment."}
                      {selectedLocation.id === 7 && "Modern auditorium for events, conferences, and cultural programs."}
                      {selectedLocation.id === 8 && "Designated parking areas for students, faculty, and visitors."}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="p-4 bg-[#006699] text-white text-center">
              <p className="text-sm">Click on map pins to view location details</p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Campus Facilities"
            description="CSD&IT Departments provides world-class facilities to enhance the learning experience."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {[
              {
                title: "Technology Centre",
                description: "State-of-the-art facility with advanced labs, innovation spaces, and startup incubation.",
                image: "/images/tech-centre-thumb.jpg",
              },
              {
                title: "Central Library",
                description: "Extensive collection of books, journals, and digital resources with quiet study spaces.",
                image: "/images/library-thumb.jpg",
              },
              {
                title: "Sports Complex",
                description: "Comprehensive sports facilities for cricket, basketball, swimming, and fitness training.",
                image: "/images/sports-thumb.jpg",
              },
              {
                title: "Hostels",
                description: "Comfortable and secure residential facilities for boys and girls with all amenities.",
                image: "/images/hostel-thumb.jpg",
              },
              {
                title: "Canteen",
                description: "Clean and spacious dining facility offering nutritious and affordable food options.",
                image: "/images/canteen-thumb.jpg",
              },
              {
                title: "Auditorium",
                description: "Modern venue for academic events, cultural programs, and conferences.",
                image: "/images/auditorium-thumb.jpg",
              },
            ].map((facility, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#006699]">{facility.title}</h3>
                    <p className="text-gray-600">{facility.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Visit CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#006699] text-white">
        <div className="container px-4 md:px-6 text-center">
          <FadeIn className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Experience SRKR in Person</h2>
            <p className="text-white/80 md:text-xl/relaxed">
              While our virtual tour gives you a glimpse of our campus, nothing compares to experiencing it in person.
              Schedule a visit today!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-500 text-[#006699] px-6 py-2 text-sm font-medium shadow transition-colors hover:bg-yellow-400"
              >
                <Link to="/contact">Schedule a Visit</Link>
              </motion.button>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-white/20"
              >
                <Link to="/contact" className="flex items-center">
                  Contact Admissions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

export default VirtualTourPage
