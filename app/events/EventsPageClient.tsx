"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Users, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EventsPageClient() {
  const [filter, setFilter] = useState("all")

  const events = [
    {
      id: 1,
      title: "CSD Students Startup Bhimavaram Online adjudged Winners in NIT AP Startup Expo",
      date: "2023-04-15",
      image: "/images/events/startup-expo.jpg",
      description:
        "The student startup from CSD department received recognition for their innovative local business solution at the NIT AP Startup Expo.",
      category: "achievement",
      location: "NIT Andhra Pradesh",
      time: "10:00 AM - 4:00 PM",
      attendees: 200,
      link: "#",
    },
    {
      id: 2,
      title: "Workshop on Game Development using Unity",
      date: "2023-05-20",
      image: "/images/events/game-dev-workshop.jpg",
      description:
        "A hands-on workshop on game development using Unity, covering basics to advanced techniques for creating interactive games.",
      category: "workshop",
      location: "Technology Centre, CSD&IT Departments",
      time: "9:00 AM - 5:00 PM",
      attendees: 50,
      link: "#",
    },
    {
      id: 3,
      title: "Hackathon: Solving Real-World Problems",
      date: "2023-06-10",
      image: "/images/events/hackathon.jpg",
      description:
        "A 24-hour coding competition where students develop innovative solutions to real-world problems using technology.",
      category: "competition",
      location: "IDEA Lab, CSD&IT Departments",
      time: "9:00 AM (Day 1) - 9:00 AM (Day 2)",
      attendees: 100,
      link: "#",
    },
    {
      id: 4,
      title: "Guest Lecture: AI in Healthcare",
      date: "2023-07-05",
      image: "/images/events/ai-healthcare.jpg",
      description:
        "An insightful lecture on the applications of artificial intelligence in healthcare by industry experts.",
      category: "lecture",
      location: "Auditorium, CSD&IT Departments",
      time: "2:00 PM - 4:00 PM",
      attendees: 150,
      link: "#",
    },
    {
      id: 5,
      title: "Industry Visit to Microsoft Development Center",
      date: "2023-08-15",
      image: "/images/events/industry-visit.jpg",
      description:
        "A visit to Microsoft Development Center to understand industry practices and gain insights into professional software development.",
      category: "visit",
      location: "Microsoft Development Center, Hyderabad",
      time: "9:00 AM - 6:00 PM",
      attendees: 40,
      link: "#",
    },
    {
      id: 6,
      title: "Web Development Bootcamp",
      date: "2023-09-20",
      image: "/images/events/web-dev-bootcamp.jpg",
      description:
        "An intensive bootcamp on modern web development technologies including React, Node.js, and database integration.",
      category: "workshop",
      location: "Computer Lab, Technology Centre",
      time: "9:00 AM - 5:00 PM (3 days)",
      attendees: 60,
      link: "#",
    },
  ]

  const filteredEvents = filter === "all" ? events : events.filter((event) => event.category === filter)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Events & Activities</h1>
            <p className="mt-4 max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
              Explore past and upcoming events at SRKR's Computer Science & Design Department, including workshops,
              competitions, guest lectures, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Events Conducted"
            description="Browse through our various events and activities"
            accentText="CSD Activities"
          />

          <div className="mt-8">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center rounded-md border p-1 bg-muted">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-3 py-1.5 text-sm font-medium rounded-sm ${
                    filter === "all" ? "bg-background shadow-sm" : "text-muted-foreground"
                  }`}
                >
                  All Events
                </button>
                <button
                  onClick={() => setFilter("workshop")}
                  className={`px-3 py-1.5 text-sm font-medium rounded-sm ${
                    filter === "workshop" ? "bg-background shadow-sm" : "text-muted-foreground"
                  }`}
                >
                  Workshops
                </button>
                <button
                  onClick={() => setFilter("competition")}
                  className={`px-3 py-1.5 text-sm font-medium rounded-sm ${
                    filter === "competition" ? "bg-background shadow-sm" : "text-muted-foreground"
                  }`}
                >
                  Competitions
                </button>
                <button
                  onClick={() => setFilter("lecture")}
                  className={`px-3 py-1.5 text-sm font-medium rounded-sm ${
                    filter === "lecture" ? "bg-background shadow-sm" : "text-muted-foreground"
                  }`}
                >
                  Lectures
                </button>
                <button
                  onClick={() => setFilter("achievement")}
                  className={`px-3 py-1.5 text-sm font-medium rounded-sm ${
                    filter === "achievement" ? "bg-background shadow-sm" : "text-muted-foreground"
                  }`}
                >
                  Achievements
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full flex flex-col overflow-hidden">
                    <div className="aspect-video relative">
                      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                      <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription>
                        {new Date(event.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{event.attendees} Attendees</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href={event.link} className="text-primary hover:underline flex items-center text-sm">
                        View Details
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Upcoming Events"
            description="Mark your calendar for these exciting events"
            accentText="Don't Miss"
          />

          <div className="mt-8 max-w-3xl mx-auto bg-background rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Mobile App Development Workshop</h3>
              <div className="flex items-center mb-2">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                <span>October 15, 2023</span>
              </div>
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span>Technology Centre, CSD&IT Departments</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Join us for a hands-on workshop on mobile app development using React Native. Learn to build
                cross-platform mobile applications with industry-standard tools and techniques.
              </p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">Registration Deadline:</span> October 10, 2023
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-9 px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-primary/90"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
