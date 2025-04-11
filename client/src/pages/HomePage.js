"use client"

import React, { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  ChevronRight,
  ArrowRight,
  Users,
  Code,
  Monitor,
  Gamepad,
  VideoIcon as VirtualReality,
  Lightbulb,
  Calendar,
  MapPin,
  ExternalLink,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import FadeIn from "../components/animations/FadeIn"
import { StaggerChildren, StaggerItem } from "../components/animations/StaggerChildren"
import SectionHeading from "../components/ui/SectionHeading"
import CountUpNumber from "../components/ui/CountUpNumber"
import ParallaxSection from "../components/animations/ParallaxSection"
import TextReveal from "../components/animations/TextReveal"
import ScrollProgress from "../components/animations/ScrollProgress"
import NewsCard from "../components/ui/NewsCard"
import Tabs from "../components/ui/Tabs"
import SearchBar from "../components/ui/SearchBar"
import VirtualTour from "../components/ui/VirtualTour"
import EventCalendar from "../components/ui/EventCalendar"
import axios from "axios"

// Import SRKR logo
import srkrLogo from "../assets/images/srkr-logo.png"

const HomePage = () => {
  const [featuredPrograms, setFeaturedPrograms] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [events, setEvents] = useState([])
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  // Scroll animations
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3])

  // Refs for scroll animations
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 })

  // Virtual tour data
  const tourSpots = [
    {
      title: "Technology Centre",
      image: "/images/tech-centre.jpg",
      description:
        "Our state-of-the-art Technology Centre houses advanced labs, innovation spaces, and startup incubation facilities.",
      features: [
        "AICTE IDEA Lab",
        "Innovation Centre",
        "On-Campus Startups",
        "24/7 Computer Labs",
        "High-Speed Internet",
      ],
    },
    {
      title: "Computer Science Department",
      image: "/images/cs-department.jpg",
      description: "The Computer Science Department offers cutting-edge programs in various technology disciplines.",
      features: [
        "Modern Classrooms",
        "Specialized Labs",
        "Research Facilities",
        "Faculty Offices",
        "Student Collaboration Spaces",
      ],
    },
    {
      title: "Central Library",
      image: "/images/library.jpg",
      description: "Our extensive library provides access to thousands of books, journals, and digital resources.",
      features: ["Digital Repository", "Reading Rooms", "Group Study Areas", "Online Journals", "Reference Section"],
    },
    {
      title: "Sports Complex",
      image: "/images/sports-complex.jpg",
      description: "The sports complex offers facilities for various indoor and outdoor sports activities.",
      features: ["Cricket Ground", "Basketball Courts", "Indoor Games", "Fitness Center", "Swimming Pool"],
    },
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch featured programs
        const programsResponse = await axios.get("/api/programs/featured")
        setFeaturedPrograms(programsResponse.data)

        // Fetch testimonials
        const testimonialsResponse = await axios.get("/api/testimonials")
        setTestimonials(testimonialsResponse.data)

        // Fetch upcoming events
        const eventsResponse = await axios.get("/api/events/upcoming")
        setEvents(eventsResponse.data)

        // Fetch latest news
        const newsResponse = await axios.get("/api/news/latest")
        setNews(newsResponse.data)

        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error)
        setLoading(false)

        // Set fallback data if API fails
        setFeaturedPrograms([
          {
            _id: "1",
            title: "Computer Science & Design (CSD)",
            degree: "B.Tech",
            image: "/images/computer-science.jpg",
            description:
              "Develop computer science graduates who are well versed in Design Approaches and Digital Technologies apart from Good Programming & Software Development skills.",
            slug: "computer-science-design",
          },
          {
            _id: "2",
            title: "Computer Science & Engineering",
            degree: "B.Tech",
            image: "/images/cse.jpg",
            description:
              "A comprehensive program covering programming, algorithms, data structures, and software engineering principles.",
            slug: "computer-science-engineering",
          },
          {
            _id: "3",
            title: "Artificial Intelligence & Data Science",
            degree: "B.Tech",
            image: "/images/ai-ds.jpg",
            description:
              "Learn cutting-edge AI technologies, machine learning algorithms, and data science techniques to solve complex problems.",
            slug: "ai-data-science",
          },
        ])

        setTestimonials([
          {
            _id: "1",
            name: "Rahul Sharma",
            program: "Class of 2023, Computer Science & Design",
            image: "/images/student-1.jpg",
            quote:
              "The CSD program at CSD&IT Departments provided me with both theoretical knowledge and practical skills. I secured a job at a top tech company before graduation.",
          },
          {
            _id: "2",
            name: "Priya Patel",
            program: "Class of 2022, Computer Science & Engineering",
            image: "/images/student-2.jpg",
            quote:
              "The faculty at SRKR are exceptional mentors who guided me throughout my academic journey. The industry connections helped me land a great internship.",
          },
          {
            _id: "3",
            name: "Aditya Reddy",
            program: "Class of 2023, AI & Data Science",
            image: "/images/student-3.jpg",
            quote:
              "The hands-on projects and state-of-the-art labs at SRKR gave me the practical experience I needed to excel in my field. I'm now working at a leading AI startup.",
          },
        ])

        setEvents([
          {
            _id: "1",
            title: "Prajwalan Hackathon",
            date: "2023-05-15",
            time: "9:00 AM - 9:00 PM",
            image: "/images/hackathon.jpg",
            description:
              "A 24-hour coding competition where students can showcase their programming and problem-solving skills.",
            location: "Technology Centre, SRKR Campus",
          },
          {
            _id: "2",
            title: "Tech Symposium",
            date: "2023-06-10",
            time: "10:00 AM - 5:00 PM",
            image: "/images/symposium.jpg",
            description: "Annual technical symposium featuring workshops, guest lectures, and project exhibitions.",
            location: "Main Auditorium, SRKR Campus",
          },
          {
            _id: "3",
            title: "Campus Recruitment Drive",
            date: "2023-07-05",
            time: "9:00 AM - 4:00 PM",
            image: "/images/recruitment.jpg",
            description: "Major tech companies visiting campus for recruitment of final year students.",
            location: "Placement Cell, SRKR Campus",
          },
        ])

        setNews([
          {
            _id: "1",
            title: "2/4 CSD Students Win Prajwalan Hackathon Runners Prize - 10,000/-",
            date: "April 28, 2023",
            image: "/images/news-1.jpg",
            excerpt:
              "Second-year Computer Science & Design students secured the runners-up position at the prestigious Prajwalan Hackathon, winning a cash prize of ₹10,000.",
            category: "Student Achievement",
            slug: "csd-students-win-hackathon",
          },
          {
            _id: "2",
            title: "CSD&IT Departments Ranked Among Top 100 in NIRF Rankings",
            date: "April 15, 2023",
            image: "/images/news-2.jpg",
            excerpt:
              "CSD&IT Departments has been ranked among the top 100 engineering institutions in India by the National Institutional Ranking Framework (NIRF).",
            category: "College Achievement",
            slug: "srkr-nirf-ranking",
          },
          {
            _id: "3",
            title: "Technology Centre Launches New AI Research Lab",
            date: "April 5, 2023",
            image: "/images/news-3.jpg",
            excerpt:
              "The Technology Centre at CSD&IT Departments has launched a new Artificial Intelligence Research Laboratory equipped with state-of-the-art facilities.",
            category: "Infrastructure",
            slug: "new-ai-research-lab",
          },
        ])
      }
    }

    fetchData()
  }, [])

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

  // News and Events tabs
  const tabsContent = [
    {
      label: "Latest News",
      content: (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <NewsCard
              key={item._id}
              title={item.title}
              date={item.date}
              excerpt={item.excerpt}
              image={item.image}
              category={item.category}
              slug={item.slug}
              delay={index * 0.1}
            />
          ))}
        </div>
      ),
    },
    {
      label: "Upcoming Events",
      content: (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={event._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="relative">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
                <div className="absolute top-0 right-0 bg-yellow-500 text-[#006699] px-3 py-1 text-sm font-medium">
                  {new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-[#006699]">{event.title}</h3>
                <p className="text-gray-600 mb-3">{event.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{event.location}</span>
                </div>
                <Link
                  to={`/events/${event._id}`}
                  className="inline-flex items-center text-[#006699] font-medium hover:text-[#005588] transition-colors"
                >
                  View Details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      label: "Event Calendar",
      content: (
        <div className="mt-4">
          <EventCalendar
            events={events.map((event) => ({
              ...event,
              date: new Date(event.date),
            }))}
          />
        </div>
      ),
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Scroll Progress Indicator */}
      <ScrollProgress color="#ffcc00" height={3} />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-[#006699] to-[#004477] text-white overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <FadeIn direction="right" className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <TextReveal
                  text="Welcome to CSD&IT Departments"
                  element="h1"
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                />
                <p className="max-w-[600px] text-white/80 md:text-xl">
                  Approved by AICTE New Delhi, Accredited by NAAC, NIRF & ARIIA Ranked Institute, Affiliated by JNTU
                  Kakinada
                </p>
              </div>
              <div className="mt-4 w-full max-w-md">
                <SearchBar placeholder="Search programs, faculty, events..." />
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-[#006699] shadow transition-colors hover:bg-yellow-400"
                >
                  <Link to="/programs" className="flex items-center">
                    Explore Programs
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.button>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-white/20"
                >
                  <Link to="/contact">Schedule a Visit</Link>
                </motion.button>
              </div>
            </FadeIn>
            <FadeIn direction="left" className="flex items-center justify-center">
              <motion.div
                style={{ scale, opacity }}
                initial={{ rotate: -5 }}
                animate={{ rotate: 5 }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  duration: 5,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={srkrLogo || "/images/srkr-logo.png"}
                  alt="CSD&IT Departments logo"
                  className="rounded-lg object-cover shadow-2xl max-w-full h-auto"
                />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="w-full py-12 md:py-16 bg-yellow-500">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={statsInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    duration: 0.5,
                  }}
                  className="space-y-2"
                >
                  <div className="text-3xl font-bold md:text-4xl text-[#006699]">
                    <CountUpNumber end={5000} suffix="+" />
                  </div>
                  <p className="text-sm text-muted-foreground md:text-base">Students Enrolled</p>
                </motion.div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={statsInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    duration: 0.5,
                    delay: 0.1,
                  }}
                  className="space-y-2"
                >
                  <div className="text-3xl font-bold md:text-4xl text-[#006699]">
                    <CountUpNumber end={300} suffix="+" />
                  </div>
                  <p className="text-sm text-muted-foreground md:text-base">Expert Faculty Members</p>
                </motion.div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={statsInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    duration: 0.5,
                    delay: 0.2,
                  }}
                  className="space-y-2"
                >
                  <div className="text-3xl font-bold md:text-4xl text-[#006699]">
                    <CountUpNumber end={25} suffix="+" />
                  </div>
                  <p className="text-sm text-muted-foreground md:text-base">Academic Programs</p>
                </motion.div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={statsInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    duration: 0.5,
                    delay: 0.3,
                  }}
                  className="space-y-2"
                >
                  <div className="text-3xl font-bold md:text-4xl text-[#006699]">
                    <CountUpNumber end={90} suffix="%" />
                  </div>
                  <p className="text-sm text-muted-foreground md:text-base">Graduate Placement Rate</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Campus Tour */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Virtual Campus Tour"
            description="Explore our campus facilities and experience CSD&IT Departments virtually."
          />

          <div className="mt-8">
            <VirtualTour tourSpots={tourSpots} />
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500 mb-4">Use arrow keys to navigate or click the navigation buttons</p>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#006699] text-white px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-[#005588]"
              >
                <Link to="/campus" className="flex items-center">
                  Schedule In-Person Visit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Featured Programs"
            description="Discover our most popular academic programs designed to prepare you for success in the technology industry."
          />

          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {loading
              ? // Loading skeleton
                Array(3)
                  .fill()
                  .map((_, i) => (
                    <StaggerItem key={i}>
                      <div className="bg-card rounded-lg overflow-hidden h-full flex flex-col animate-pulse">
                        <div className="aspect-video bg-muted"></div>
                        <div className="p-6 space-y-4 flex-grow">
                          <div className="h-6 bg-muted rounded w-3/4"></div>
                          <div className="h-4 bg-muted rounded w-1/2"></div>
                          <div className="h-4 bg-muted rounded w-full"></div>
                          <div className="h-4 bg-muted rounded w-full"></div>
                        </div>
                        <div className="p-6 pt-0">
                          <div className="h-10 bg-muted rounded"></div>
                        </div>
                      </div>
                    </StaggerItem>
                  ))
              : featuredPrograms.map((program) => (
                  <StaggerItem key={program._id}>
                    <div className="bg-card rounded-lg overflow-hidden h-full flex flex-col transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                      <div className="aspect-video relative">
                        <img
                          src={program.image || "/placeholder.svg"}
                          alt={`${program.title} students working on a project`}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute top-0 right-0 bg-yellow-500 text-[#006699] px-3 py-1 font-medium text-sm">
                          {program.degree}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold">{program.title}</h3>
                      </div>
                      <div className="p-6 pt-0 flex-grow">
                        <p className="text-sm text-muted-foreground">{program.description}</p>
                      </div>
                      <div className="p-6 pt-0">
                        <motion.button
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          className="inline-flex h-10 w-full items-center justify-center rounded-md border border-input bg-[#006699] text-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-[#005588]"
                        >
                          <Link to={`/programs/${program.slug}`} className="flex items-center w-full justify-center">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </motion.button>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
          </StaggerChildren>

          <div className="flex justify-center mt-8">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#006699] text-white px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-[#005588]"
            >
              <Link to="/programs" className="flex items-center">
                View All Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <ParallaxSection
        backgroundImage="/images/campus-aerial.jpg"
        height="400px"
        overlayColor="rgba(0, 102, 153, 0.85)"
      >
        <div className="container px-4 md:px-6 text-center text-white">
          <TextReveal
            text="Shaping the Future of Technology Education"
            element="h2"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4"
          />
          <p className="max-w-[800px] mx-auto text-white/80 md:text-xl">
            CSD&IT Departments is committed to providing world-class education and fostering innovation in
            technology and engineering.
          </p>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-yellow-500 text-[#006699] px-6 py-2 text-sm font-medium shadow transition-colors hover:bg-yellow-400"
          >
            <Link to="/about">Discover Our Legacy</Link>
          </motion.button>
        </div>
      </ParallaxSection>

      {/* Focus Skill Areas */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Focus Skill Areas"
            description="Our Computer Science & Design program focuses on developing these key skills for industry readiness."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {[
              {
                icon: <Lightbulb className="h-10 w-10 text-yellow-500" />,
                title: "Innovative Product Design",
                description: "Learn to create user-centered digital products with focus on innovation and usability.",
              },
              {
                icon: <Monitor className="h-10 w-10 text-yellow-500" />,
                title: "Web & Mobile App Development",
                description:
                  "Build responsive web applications and native mobile apps using modern frameworks and technologies.",
              },
              {
                icon: <Gamepad className="h-10 w-10 text-yellow-500" />,
                title: "Game Development",
                description:
                  "Design and develop interactive games with focus on gameplay mechanics and user experience.",
              },
              {
                icon: <VirtualReality className="h-10 w-10 text-yellow-500" />,
                title: "Virtual/Augmented Reality",
                description:
                  "Create immersive VR/AR experiences for education, entertainment, and industry applications.",
              },
              {
                icon: <Code className="h-10 w-10 text-yellow-500" />,
                title: "Programming & Software Development",
                description:
                  "Master programming languages and software development methodologies for building robust applications.",
              },
              {
                icon: <Users className="h-10 w-10 text-yellow-500" />,
                title: "Startups & Entrepreneurship",
                description:
                  "Learn to transform ideas into viable tech startups with focus on innovation and business development.",
              },
            ].map((skill, i) => (
              <FadeIn
                key={i}
                direction="up"
                delay={i * 0.1}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4 rounded-full bg-[#006699]/10 p-3">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* News and Events Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="News & Events"
            description="Stay updated with the latest happenings at CSD&IT Departments."
          />

          <div className="mt-8">
            <Tabs tabs={tabsContent} />
          </div>

          <div className="flex justify-center mt-8">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#006699] text-white px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-[#005588]"
            >
              <Link to="/news-events" className="flex items-center">
                View All News & Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#006699] text-white">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Student Success Stories"
            description="Hear from our students about their experiences at CSD&IT Departments."
            className="text-white"
          />

          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {loading
              ? // Loading skeleton
                Array(3)
                  .fill()
                  .map((_, i) => (
                    <StaggerItem key={i}>
                      <div className="bg-[#005588] rounded-lg p-6 text-center animate-pulse">
                        <div className="flex justify-center mb-4">
                          <div className="rounded-full bg-[#004477] h-24 w-24"></div>
                        </div>
                        <div className="h-6 bg-[#004477] rounded w-3/4 mx-auto mb-2"></div>
                        <div className="h-4 bg-[#004477] rounded w-1/2 mx-auto mb-4"></div>
                        <div className="space-y-2">
                          <div className="h-4 bg-[#004477] rounded w-full"></div>
                          <div className="h-4 bg-[#004477] rounded w-full"></div>
                          <div className="h-4 bg-[#004477] rounded w-3/4 mx-auto"></div>
                        </div>
                      </div>
                    </StaggerItem>
                  ))
              : testimonials.map((testimonial) => (
                  <StaggerItem key={testimonial._id}>
                    <div className="bg-[#005588] rounded-lg p-6 text-center h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                      <div className="flex justify-center">
                        <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-yellow-500">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mt-4 text-white">{testimonial.name}</h3>
                      <p className="text-sm text-white/80 mb-4">{testimonial.program}</p>
                      <p className="text-white/90 italic">"{testimonial.quote}"</p>
                    </div>
                  </StaggerItem>
                ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-yellow-500">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <FadeIn direction="right" className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#006699]">
                  Ready to Join Our Community?
                </h2>
                <p className="text-[#006699]/80 md:text-xl/relaxed">
                  Take the first step toward your future. Apply now or schedule a campus visit to learn more about our
                  programs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#006699] text-white px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-[#005588]"
                >
                  <Link to="/admissions">Apply Now</Link>
                </motion.button>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-[#006699] bg-transparent text-[#006699] px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-[#006699]/10"
                >
                  <Link to="/contact">Schedule a Visit</Link>
                </motion.button>
              </div>
            </FadeIn>
            <FadeIn direction="left" className="flex items-center justify-center">
              <img
                src="/images/campus-life.jpg"
                alt="Students on SRKR campus"
                className="rounded-lg object-cover shadow-lg max-w-full h-auto"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="w-full py-12 md:py-16 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-4 text-[#006699]">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/admissions"
                    className="text-sm text-muted-foreground hover:text-[#006699] transition-colors"
                  >
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link to="/programs" className="text-sm text-muted-foreground hover:text-[#006699] transition-colors">
                    Academic Programs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/placements"
                    className="text-sm text-muted-foreground hover:text-[#006699] transition-colors"
                  >
                    Placements
                  </Link>
                </li>
                <li>
                  <Link to="/research" className="text-sm text-muted-foreground hover:text-[#006699] transition-colors">
                    Research
                  </Link>
                </li>
                <li>
                  <Link to="/campus" className="text-sm text-muted-foreground hover:text-[#006699] transition-colors">
                    Campus Life
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-4 text-[#006699]">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-[#006699] transition-colors flex items-center"
                  >
                    Student Portal
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-[#006699] transition-colors flex items-center"
                  >
                    Library
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-[#006699] transition-colors flex items-center"
                  >
                    E-Learning
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-[#006699] transition-colors flex items-center"
                  >
                    Examination Portal
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-[#006699] transition-colors flex items-center"
                  >
                    Alumni Network
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-4 text-[#006699]">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <MapPin className="h-4 w-4 text-[#006699] mt-1 mr-2" />
                  <span className="text-sm text-muted-foreground">
                    Bhimavaram, West Godavari District, Andhra Pradesh - 534204
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 text-[#006699] mr-2" />
                  <span className="text-sm text-muted-foreground">+91 8816 223332</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 text-[#006699] mr-2" />
                  <span className="text-sm text-muted-foreground">info@srkrec.edu.in</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-4 text-[#006699]">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-[#006699] transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-[#006699] transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-[#006699] transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-[#006699] transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-medium mb-2 text-[#006699]">Subscribe to Newsletter</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 h-10 rounded-l-md border border-input bg-background px-3 py-2 text-sm"
                  />
                  <button className="h-10 rounded-r-md bg-[#006699] text-white px-3 hover:bg-[#005588] transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default React.memo(HomePage)
