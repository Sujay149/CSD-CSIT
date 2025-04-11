"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function GalleryPageClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryCategories = [
    {
      id: "campus",
      label: "Campus",
      images: [
        { src: "/images/gallery/campus/campus-1.jpg", alt: "SRKR Campus Main Building" },
        { src: "/images/gallery/campus/campus-2.jpg", alt: "Technology Centre" },
        { src: "/images/gallery/campus/campus-3.jpg", alt: "Computer Labs" },
        { src: "/images/gallery/campus/campus-4.jpg", alt: "Library" },
        { src: "/images/gallery/campus/campus-5.jpg", alt: "Auditorium" },
        { src: "/images/gallery/campus/campus-6.jpg", alt: "Sports Facilities" },
      ],
    },
    {
      id: "events",
      label: "Events",
      images: [
        { src: "/images/gallery/events/event-1.jpg", alt: "Tech Fest 2023" },
        { src: "/images/gallery/events/event-2.jpg", alt: "Hackathon" },
        { src: "/images/gallery/events/event-3.jpg", alt: "Workshop on AI" },
        { src: "/images/gallery/events/event-4.jpg", alt: "Industry Visit" },
        { src: "/images/gallery/events/event-5.jpg", alt: "Guest Lecture" },
        { src: "/images/gallery/events/event-6.jpg", alt: "Cultural Event" },
      ],
    },
    {
      id: "students",
      label: "Student Activities",
      images: [
        { src: "/images/gallery/students/student-1.jpg", alt: "Project Presentation" },
        { src: "/images/gallery/students/student-2.jpg", alt: "Coding Competition" },
        { src: "/images/gallery/students/student-3.jpg", alt: "Group Project" },
        { src: "/images/gallery/students/student-4.jpg", alt: "Startup Pitch" },
        { src: "/images/gallery/students/student-5.jpg", alt: "Game Development" },
        { src: "/images/gallery/students/student-6.jpg", alt: "App Development Workshop" },
      ],
    },
    {
      id: "achievements",
      label: "Achievements",
      images: [
        { src: "/images/gallery/achievements/achievement-1.jpg", alt: "Hackathon Winners" },
        { src: "/images/gallery/achievements/achievement-2.jpg", alt: "Award Ceremony" },
        { src: "/images/gallery/achievements/achievement-3.jpg", alt: "Startup Recognition" },
        { src: "/images/gallery/achievements/achievement-4.jpg", alt: "Research Publication" },
        { src: "/images/gallery/achievements/achievement-5.jpg", alt: "Industry Recognition" },
        { src: "/images/gallery/achievements/achievement-6.jpg", alt: "Competition Winners" },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">CSD Picture Gallery</h1>
            <p className="mt-4 max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
              Browse through images of our campus, events, student activities, and achievements at SRKR's Computer
              Science & Design Department.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Browse Our Gallery"
            description="Explore images from different categories"
            accentText="Visual Journey"
          />

          <Tabs defaultValue="campus" className="w-full mt-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              {galleryCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {galleryCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {category.images.map((image, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white">
                          <p className="text-sm font-medium">{image.alt}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Enlarged gallery image"
              width={1200}
              height={800}
              className="object-contain max-h-[90vh]"
            />
            <button
              className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </motion.div>
        </div>
      )}
    </div>
  )
}
