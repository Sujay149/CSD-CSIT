"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  Award,
  Briefcase,
  Building,
  Users,
  CheckCircle,
  Download,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react"
import FadeIn from "../components/animations/FadeIn"
import { StaggerChildren, StaggerItem } from "../components/animations/StaggerChildren"
import SectionHeading from "../components/ui/SectionHeading"
import ParallaxSection from "../components/animations/ParallaxSection"
import TextReveal from "../components/animations/TextReveal"
import PlacementStats from "../components/ui/PlacementStats"

const PlacementsPage = () => {
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

  // Top recruiters
  const topRecruiters = [
    { name: "TCS", logo: "/images/companies/tcs.png", count: 85 },
    { name: "Infosys", logo: "/images/companies/infosys.png", count: 72 },
    { name: "Wipro", logo: "/images/companies/wipro.png", count: 65 },
    { name: "Cognizant", logo: "/images/companies/cognizant.png", count: 58 },
    { name: "Accenture", logo: "/images/companies/accenture.png", count: 52 },
    { name: "IBM", logo: "/images/companies/ibm.png", count: 45 },
    { name: "HCL", logo: "/images/companies/hcl.png", count: 40 },
    { name: "Tech Mahindra", logo: "/images/companies/techmahindra.png", count: 35 },
    { name: "Amazon", logo: "/images/companies/amazon.png", count: 12 },
    { name: "Microsoft", logo: "/images/companies/microsoft.png", count: 8 },
    { name: "Google", logo: "/images/companies/google.png", count: 5 },
    { name: "Deloitte", logo: "/images/companies/deloitte.png", count: 25 },
  ]

  // Placement process steps
  const placementProcess = [
    {
      title: "Pre-Placement Training",
      description:
        "Comprehensive training on aptitude, technical skills, and soft skills to prepare students for the recruitment process.",
      icon: <Users className="h-8 w-8 text-[#006699]" />,
    },
    {
      title: "Resume Building",
      description:
        "Professional guidance on creating effective resumes and portfolios that highlight students' skills and achievements.",
      icon: <Briefcase className="h-8 w-8 text-[#006699]" />,
    },
    {
      title: "Mock Interviews",
      description:
        "Practice interviews conducted by industry professionals to help students improve their interview skills.",
      icon: <Users className="h-8 w-8 text-[#006699]" />,
    },
    {
      title: "Company Presentations",
      description:
        "Information sessions where companies present their organization, work culture, and job opportunities.",
      icon: <Building className="h-8 w-8 text-[#006699]" />,
    },
    {
      title: "Aptitude Tests",
      description: "Written or online tests to assess students' analytical, logical, and technical abilities.",
      icon: <CheckCircle className="h-8 w-8 text-[#006699]" />,
    },
    {
      title: "Technical & HR Interviews",
      description:
        "Multiple rounds of interviews to evaluate technical knowledge, problem-solving skills, and cultural fit.",
      icon: <Users className="h-8 w-8 text-[#006699]" />,
    },
    {
      title: "Job Offers",
      description: "Successful candidates receive job offers with details about role, compensation, and joining date.",
      icon: <Award className="h-8 w-8 text-[#006699]" />,
    },
  ]

  // Success stories
  const successStories = [
    {
      name: "Rahul Sharma",
      batch: "2023",
      program: "Computer Science & Design",
      company: "Google",
      position: "Software Engineer",
      package: "₹42 LPA",
      image: "/images/students/rahul.jpg",
      quote:
        "The placement training and mentorship at CSD&IT Departments were instrumental in helping me secure my dream job at Google.",
    },
    {
      name: "Priya Patel",
      batch: "2022",
      program: "Computer Science & Engineering",
      company: "Microsoft",
      position: "Software Development Engineer",
      package: "₹38 LPA",
      image: "/images/students/priya.jpg",
      quote:
        "The practical exposure and industry-aligned curriculum at SRKR gave me the competitive edge needed to excel in technical interviews.",
    },
    {
      name: "Aditya Reddy",
      batch: "2023",
      program: "AI & Data Science",
      company: "Amazon",
      position: "Data Scientist",
      package: "₹35 LPA",
      image: "/images/students/aditya.jpg",
      quote:
        "The specialized training in AI and machine learning provided by SRKR helped me stand out during the recruitment process at Amazon.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#006699] to-[#004477] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <FadeIn direction="right" className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <TextReveal
                  text="Placements & Career Services"
                  element="h1"
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                />
                <p className="max-w-[600px] text-white/80 md:text-xl">
                  CSD&IT Departments has an outstanding placement record with top companies recruiting our
                  students for various roles.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-[#006699] shadow transition-colors hover:bg-yellow-400"
                >
                  <a href="#placement-stats" className="flex items-center">
                    View Placement Statistics
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </motion.button>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-white/20"
                >
                  <a href="#recruiters">Our Recruiters</a>
                </motion.button>
              </div>
            </FadeIn>
            <FadeIn direction="left" className="flex items-center justify-center">
              <img
                src="/images/placements.jpg"
                alt="Students at placement drive"
                className="rounded-lg object-cover shadow-lg max-w-full h-auto"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Placement Statistics */}
      <section id="placement-stats" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Placement Statistics"
            description="Our placement record speaks for itself with consistent growth year after year"
          />

          <div className="mt-8">
            <PlacementStats year="2022-2023" />
          </div>

          <div className="mt-8 text-center">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#006699] text-white px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-[#005588]"
            >
              <Link to="#" className="flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download Placement Brochure
              </Link>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section id="recruiters" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Our Top Recruiters"
            description="Leading companies that regularly recruit from CSD&IT Departments"
          />

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {topRecruiters.map((company, index) => (
              <FadeIn
                key={index}
                direction="up"
                delay={index * 0.05}
                className="bg-white rounded-lg p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="h-16 w-16 relative mb-2">
                  <img
                    src={company.logo || `/placeholder.svg?height=64&width=64&text=${company.name}`}
                    alt={company.name}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="text-center">
                  <div className="font-medium text-sm">{company.name}</div>
                  <div className="text-xs text-gray-500">{company.count} offers</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Placement Process"
            description="Our structured approach to ensure students are well-prepared for the recruitment process"
          />

          <div className="mt-12 relative">
            {/* Process timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

            <StaggerChildren className="space-y-8">
              {placementProcess.map((step, index) => (
                <StaggerItem key={index}>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="flex items-center justify-center md:justify-start">
                      <div className="w-8 h-8 rounded-full bg-[#006699] text-white flex items-center justify-center font-bold z-10">
                        {index + 1}
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6 flex-1 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="hidden sm:block">{step.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-[#006699]">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Parallax CTA */}
      <ParallaxSection
        backgroundImage="/images/campus-students.jpg"
        height="400px"
        overlayColor="rgba(0, 102, 153, 0.85)"
      >
        <div className="container px-4 md:px-6 text-center text-white">
          <TextReveal
            text="Preparing Students for Global Careers"
            element="h2"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4"
          />
          <p className="max-w-[800px] mx-auto text-white/80 md:text-xl mb-6">
            Our placement cell works tirelessly to bridge the gap between industry requirements and student skills,
            ensuring excellent career opportunities.
          </p>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-500 text-[#006699] px-6 py-2 text-sm font-medium shadow transition-colors hover:bg-yellow-400"
          >
            <Link to="/contact">Contact Placement Cell</Link>
          </motion.button>
        </div>
      </ParallaxSection>

      {/* Success Stories */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Success Stories"
            description="Meet our alumni who have secured prestigious positions in top companies"
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {successStories.map((story, index) => (
              <FadeIn
                key={index}
                direction="up"
                delay={index * 0.1}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden">
                      <img
                        src={story.image || "/placeholder.svg?height=64&width=64"}
                        alt={story.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#006699]">{story.name}</h3>
                      <p className="text-sm text-gray-600">{story.program}</p>
                      <p className="text-xs text-gray-500">Batch of {story.batch}</p>
                    </div>
                  </div>

                  <div className="bg-[#006699]/5 p-3 rounded-md mb-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">{story.company}</div>
                        <div className="text-sm text-gray-600">{story.position}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-[#006699]">{story.package}</div>
                        <div className="text-xs text-gray-500">Package</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 italic">"{story.quote}"</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <FadeIn direction="right" className="flex flex-col justify-center">
              <SectionHeading
                title="Training Programs"
                description="Comprehensive training to enhance employability skills"
                align="left"
              />

              <div className="mt-8 space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-lg text-[#006699] mb-2">Technical Skills Training</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Specialized training in programming languages, frameworks, and tools relevant to industry
                    requirements.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "Python", "C++", "Web Development", "Data Science", "Cloud Computing", "DevOps"].map(
                      (skill, index) => (
                        <span key={index} className="bg-[#006699]/10 text-[#006699] text-xs px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-lg text-[#006699] mb-2">Soft Skills Development</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Training in communication, presentation, teamwork, and other essential workplace skills.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Communication",
                      "Presentation",
                      "Leadership",
                      "Team Building",
                      "Time Management",
                      "Problem Solving",
                    ].map((skill, index) => (
                      <span key={index} className="bg-[#006699]/10 text-[#006699] text-xs px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-lg text-[#006699] mb-2">Aptitude & Reasoning</h3>
                  <p className="text-sm text-gray-600">
                    Intensive training and practice sessions to excel in aptitude tests conducted by companies.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="flex items-center justify-center">
              <img
                src="/images/training.jpg"
                alt="Students in training session"
                className="rounded-lg object-cover shadow-lg max-w-full h-auto"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Placement Cell */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 text-center">
          <SectionHeading
            title="Contact Placement Cell"
            description="Get in touch with our placement team for any queries or assistance"
          />

          <div className="mt-8 max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-[#006699]">Placement Officer</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-[#006699]" />
                    <span>Dr. Ramesh Kumar</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-[#006699]" />
                    <a href="mailto:placements@srkrec.edu.in" className="text-[#006699] hover:underline">
                      placements@srkrec.edu.in
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-[#006699]" />
                    <a href="tel:+918816223332" className="text-[#006699] hover:underline">
                      +91 8816 223332
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg text-[#006699]">Placement Cell</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-[#006699]" />
                    <span>Administrative Block, 2nd Floor, CSD&IT Departments</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-[#006699]" />
                    <span>Monday to Friday: 9:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]"
              ></textarea>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#006699] text-white px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-[#005588]"
              >
                Send Message
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PlacementsPage
