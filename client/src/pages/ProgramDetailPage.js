"use client"

import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  BookOpen,
  Code,
  Users,
  GraduationCap,
  Monitor,
  Gamepad,
  VideoIcon as VirtualReality,
  Lightbulb,
} from "lucide-react"
import FadeIn from "../components/animations/FadeIn"
import { StaggerChildren, StaggerItem } from "../components/animations/StaggerChildren"
import axios from "axios"

const ProgramDetailPage = () => {
  const { programId } = useParams()
  const [program, setProgram] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const response = await axios.get(`/api/programs/${programId}`)
        setProgram(response.data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching program:", error)
        setLoading(false)

        // Fallback data for Computer Science & Design program
        if (programId === "computer-science-design") {
          setProgram({
            _id: "1",
            title: "Computer Science & Design (CSD)",
            degree: "B.Tech",
            description:
              "Develop computer science graduates who are well versed in Design Approaches and Digital Technologies apart from Good Programming & Software Development skills.",
            fullDescription:
              "The B.Tech. in Computer Science and Design (CSD), with an intake of 60 seats, at SRKREC aims to develop computer science graduates who are well versed in Design Approaches and Digital Technologies apart from Good Programming & Software Development skills. The program has a small set of core courses in CS and Design, and many electives which can be taken from Computer Science / IT / Other Multidisciplinary Areas. The program will prepare students to work in the IT industry as well as the digital media industry like Gaming, Animation, Virtual / Augmented Reality, etc. Students are encouraged to set up their own startups on campus.",
            image: "/images/computer-science-design.jpg",
            department: "Computer Science",
            featured: true,
            programLength: "4 years (8 semesters)",
            learningFormat: "On-campus with hands-on labs",
            intake: 60,
            approvals: ["AICTE New Delhi"],
            accreditations: ["NAAC", "NIRF & ARIIA Ranked Institute", "Affiliated by JNTU Kakinada"],
            focusSkillAreas: [
              {
                title: "Innovative Product Design",
                description: "Learn to create user-centered digital products with focus on innovation and usability.",
              },
              {
                title: "Web & Mobile App Development",
                description:
                  "Build responsive web applications and native mobile apps using modern frameworks and technologies.",
              },
              {
                title: "Game Development",
                description:
                  "Design and develop interactive games with focus on gameplay mechanics and user experience.",
              },
              {
                title: "Virtual/Augmented Reality",
                description:
                  "Create immersive VR/AR experiences for education, entertainment, and industry applications.",
              },
              {
                title: "Startups/Entrepreneurship",
                description:
                  "Learn to transform ideas into viable tech startups with focus on innovation and business development.",
              },
              {
                title: "Multimedia/Animation",
                description: "Develop skills in digital content creation, animation, and multimedia production.",
              },
            ],
            salientFeatures: [
              {
                title: "Technology Centre",
                description:
                  "CSD will be run under the aegis of the successful Technology Centre, SRKREC (Estd. 2015). The centre is equipped with state-of-the-art infrastructure and labs including the AICTE IDEA Lab, Innovation Centre, On-Campus Start-ups, Technology Training, and 400+ Computer Lab with Servers, High Speed Internet, and 24x7 availability.",
              },
              {
                title: "National Education Policy (NEP) 2020",
                description: "Aligned with NEP 2020 pedagogy for comprehensive learning experience.",
              },
              {
                title: "On-Campus Internships",
                description: "Available from the first semester to gain practical industry experience.",
              },
              {
                title: "Modern Teaching Methodology",
                description: "Project-based curriculum focusing on creativity, critical thinking, and problem-solving.",
              },
              {
                title: "Design & Development",
                description:
                  "Focus on creating web & mobile apps, innovative products, games, and applications by students.",
              },
              {
                title: "Focused Skills",
                description:
                  "Creativity, Design & Development, Critical Thinking, Innovation, Problem Solving, Entrepreneurship, Design Thinking, Leadership, Self Learning.",
              },
            ],
            courses: [
              {
                title: "Programming Fundamentals",
                description: "Introduction to programming concepts and problem-solving techniques.",
              },
              {
                title: "Data Structures and Algorithms",
                description: "Study of fundamental data structures and algorithm design principles.",
              },
              {
                title: "Web Development",
                description: "Building responsive and interactive web applications using modern frameworks.",
              },
              {
                title: "Mobile App Development",
                description: "Creating native and cross-platform mobile applications.",
              },
              {
                title: "UI/UX Design",
                description: "Principles of user interface and experience design for digital products.",
              },
              {
                title: "Game Development",
                description: "Fundamentals of game design, development, and deployment.",
              },
            ],
            careerOpportunities: [
              {
                title: "Software Developer",
                description: "Design, build, and maintain software applications for various platforms.",
                averageSalary: "₹6-12 LPA",
              },
              {
                title: "UX/UI Designer",
                description: "Create user-centered designs for digital products and services.",
                averageSalary: "₹5-10 LPA",
              },
              {
                title: "Game Developer",
                description: "Design and develop games for mobile, console, or PC platforms.",
                averageSalary: "₹5-15 LPA",
              },
              {
                title: "AR/VR Developer",
                description: "Create immersive experiences using augmented and virtual reality technologies.",
                averageSalary: "₹8-18 LPA",
              },
              {
                title: "Product Manager",
                description: "Lead the development and launch of digital products.",
                averageSalary: "₹10-20 LPA",
              },
              {
                title: "Tech Entrepreneur",
                description: "Start and grow technology-based businesses.",
                averageSalary: "Variable",
              },
            ],
            news: ["2/4 CSD Students Win Prajwalan Hackathon Runners Prize - 10,000/-"],
            successStories: [
              {
                name: "CSD Students",
                achievement:
                  "The students of CSD will have the opportunity to access all the resources of Technology Centre & the Startups and there by benefit extensively. Students trained earlier at Technology Centre have been placed in top MNCs like Amazon, Yahoo, Infosys, TCS, with high packages.",
              },
            ],
          })
        }
      }
    }

    fetchProgram()
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [programId])

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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#006699]"></div>
      </div>
    )
  }

  if (!program) {
    return (
      <div className="container px-4 md:px-6 py-12">
        <h1 className="text-2xl font-bold">Program not found</h1>
        <p className="mt-4">The program you're looking for doesn't exist or has been removed.</p>
        <Link to="/programs" className="text-[#006699] hover:underline mt-4 inline-block">
          Back to Programs
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#ffcc00]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <FadeIn direction="right" className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Link to="/programs" className="inline-flex items-center text-sm font-medium text-[#006699] mb-2">
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Back to Programs
                </Link>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{program.title}</h1>
                <p className="text-xl text-[#006699]">{program.degree}</p>
                <p className="max-w-[600px] text-[#006699] md:text-xl/relaxed">{program.description}</p>
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
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Link to="/contact">Request Information</Link>
                </motion.button>
              </div>
            </FadeIn>
            <FadeIn direction="left" className="flex items-center justify-center">
              <img
                src={program.image || "/placeholder.svg?height=400&width=600&text=Computer+Science+Design"}
                alt={`${program.title} students working on projects`}
                className="rounded-lg object-cover shadow-lg max-w-full h-auto"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Latest News */}
      {program.news && program.news.length > 0 && (
        <section className="w-full py-4 bg-[#006699] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex items-center">
              <div className="font-bold mr-2">LATEST NEWS:</div>
              <div className="overflow-hidden">
                <div className="whitespace-nowrap animate-marquee">
                  {program.news.map((item, index) => (
                    <span key={index} className="inline-block mr-8">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Program Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Program Overview</h2>
              <p className="text-muted-foreground">{program.fullDescription}</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Program Highlights</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2 p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-[#006699]" />
                    <h3 className="font-medium">Program Length</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{program.programLength}</p>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-[#006699]" />
                    <h3 className="font-medium">Learning Format</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{program.learningFormat}</p>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#006699]" />
                    <h3 className="font-medium">Intake</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{program.intake} seats</p>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-[#006699]" />
                    <h3 className="font-medium">Approvals & Accreditations</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {program.approvals?.join(", ")}
                    <br />
                    {program.accreditations?.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Skill Areas */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#006699] text-white">
        <div className="container px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Focus Skill Areas</h2>
            <p className="max-w-[800px] mx-auto text-white/80">
              The {program.title} program focuses on developing these key skills for industry readiness.
            </p>
          </FadeIn>

          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {program.focusSkillAreas?.map((skill, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#005588] rounded-lg p-6 h-full hover:bg-[#004477] transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    {i === 0 && <Lightbulb className="h-6 w-6 text-yellow-500" />}
                    {i === 1 && <Monitor className="h-6 w-6 text-yellow-500" />}
                    {i === 2 && <Gamepad className="h-6 w-6 text-yellow-500" />}
                    {i === 3 && <VirtualReality className="h-6 w-6 text-yellow-500" />}
                    {i === 4 && <Code className="h-6 w-6 text-yellow-500" />}
                    {i === 5 && <Users className="h-6 w-6 text-yellow-500" />}
                    <h3 className="font-bold text-lg">{skill.title}</h3>
                  </div>
                  <p className="text-white/80 text-sm">{skill.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Salient Features */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Salient Features</h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground">
              What makes the {program.title} program at CSD&IT Departments unique.
            </p>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2">
            {program.salientFeatures?.map((feature, i) => (
              <FadeIn
                key={i}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 0.1}
                className="bg-muted p-6 rounded-lg hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-2 text-[#006699]">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      {program.successStories && program.successStories.length > 0 && (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Success Stories</h2>
              <p className="max-w-[800px] mx-auto text-muted-foreground">
                Our students achieve great success in their careers after graduation.
              </p>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-1">
              {program.successStories?.map((story, i) => (
                <FadeIn
                  key={i}
                  direction="up"
                  delay={i * 0.1}
                  className="bg-white p-6 rounded-lg hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-2 text-[#006699]">{story.name}</h3>
                  <p className="text-muted-foreground">{story.achievement}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Courses */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Core Courses</h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground">
              The curriculum includes these key courses to build a strong foundation in {program.title}.
            </p>
          </FadeIn>

          <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {program.courses?.map((course, i) => (
              <StaggerItem key={i}>
                <div className="bg-background p-6 rounded-lg border hover:border-[#006699] transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="h-5 w-5 text-[#006699]" />
                    <h3 className="font-bold">{course.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{course.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Career Opportunities</h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground">
              Graduates of the {program.title} program are prepared for these exciting career paths.
            </p>
          </FadeIn>

          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {program.careerOpportunities?.map((career, i) => (
              <StaggerItem key={i}>
                <div className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold mb-2 text-[#006699]">{career.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{career.description}</p>
                  <div className="mt-auto pt-2 border-t">
                    <p className="text-sm font-medium text-yellow-600">
                      Average Starting Salary: {career.averageSalary}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Apply Now */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#006699] text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Your Journey?</h2>
            <p className="text-white/80 md:text-xl/relaxed">
              Apply to our {program.title} program today and take the first step toward a rewarding career in
              technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-500 text-[#006699] px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-yellow-400"
              >
                <Link to="/admissions">Apply Now</Link>
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
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProgramDetailPage
