"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
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
  ChevronRight,
} from "lucide-react"
import FadeIn from "../components/animations/FadeIn"
import { StaggerChildren, StaggerItem } from "../components/animations/StaggerChildren"
import SectionHeading from "../components/ui/SectionHeading"
import ParallaxSection from "../components/animations/ParallaxSection"
import TextReveal from "../components/animations/TextReveal"
import PlacementStats from "../components/ui/PlacementStats"
import DepartmentPlacementStats from "../components/ui/DepartmentPlacementStats"
import FloatingShapes from "../components/animations/FloatingShapes"
import AnimatedBackground from "../components/animations/AnimatedBackground"
import ImageReveal from "../components/animations/ImageReveal"
import HexagonImage from "../components/ui/HexagonImage"
import GradientCard from "../components/ui/GradientCard"

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

  // Department-specific placement data
  const departmentData = [
    {
      id: "csd",
      name: "Computer Science & Design",
      placementRate: 98,
      averagePackage: 12.5,
      highestPackage: 42,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Adobe"],
      description:
        "The CSD department has consistently achieved excellent placement records with students securing positions in top tech companies and startups. The unique blend of computer science and design skills makes our graduates highly sought after in the industry.",
    },
    {
      id: "cse",
      name: "Computer Science & Engineering",
      placementRate: 95,
      averagePackage: 10.2,
      highestPackage: 38,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Microsoft"],
      description:
        "CSE students have shown exceptional performance in placements with many securing positions in both service and product-based companies. The strong foundation in core computer science subjects prepares them for diverse roles in the IT industry.",
    },
    {
      id: "ece",
      name: "Electronics & Communication",
      placementRate: 92,
      averagePackage: 8.5,
      highestPackage: 25,
      topRecruiters: ["Qualcomm", "Intel", "Samsung", "Cisco"],
      description:
        "ECE graduates are placed in core electronics companies as well as IT firms. Their expertise in hardware and software integration makes them valuable assets for companies working on IoT, embedded systems, and telecommunications.",
    },
    {
      id: "mech",
      name: "Mechanical Engineering",
      placementRate: 88,
      averagePackage: 7.8,
      highestPackage: 18,
      topRecruiters: ["Tata Motors", "L&T", "BHEL", "Mahindra"],
      description:
        "Mechanical Engineering students find opportunities in manufacturing, automotive, and design sectors. The department's focus on practical skills and industry projects helps students secure good positions in core mechanical companies.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section with Animated Background */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
        <AnimatedBackground />
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <FadeIn direction="right" className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <TextReveal
                  text="Placements & Career Services"
                  element="h1"
                  className="text-3xl font-bold tracking-tighter sm:text-5xl text-white"
                />
                <p className="max-w-[600px] text-white/80 md:text-xl">
                  CSD&IT Departments has an outstanding placement record with top companies recruiting our
                  students for various roles. Our dedicated Training & Placement Cell works tirelessly to ensure
                  excellent career opportunities.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-[#006699] shadow transition-colors hover:bg-yellow-400 relative overflow-hidden group"
                >
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                  <a href="#placement-stats" className="flex items-center relative z-10">
                    View Placement Statistics
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </motion.button>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-white/20 relative overflow-hidden group"
                >
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                  <a href="#recruiters" className="relative z-10">
                    Our Recruiters
                  </a>
                </motion.button>
              </div>
            </FadeIn>
            <ImageReveal className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-[#006699] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative">
                  <img
                    src="/images/placements.jpg"
                    alt="Students at placement drive"
                    className="rounded-lg object-cover shadow-lg max-w-full h-auto clip-path-polygon"
                  />
                </div>
              </div>
            </ImageReveal>
          </div>
        </div>
        <FloatingShapes />
      </section>

      {/* Placement Statistics */}
      <section id="placement-stats" className="w-full py-12 md:py-24 lg:py-32 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 right-0 bg-yellow-500 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute top-1/3 left-1/4 bg-[#006699] w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 bg-blue-500 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <SectionHeading
            title="Placement Statistics"
            description="Our placement record speaks for itself with consistent growth year after year"
          />

          <div className="mt-8">
            <PlacementStats year="2022-2023" />
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-[#006699] mb-6">Department-wise Placement Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departmentData.map((dept, index) => (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <DepartmentPlacementStats department={dept} />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#006699] text-white px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-[#005588] relative overflow-hidden group"
            >
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
              <Link to="#" className="flex items-center relative z-10">
                <Download className="mr-2 h-4 w-4" />
                Download Placement Brochure
              </Link>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section
        id="recruiters"
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <SectionHeading
            title="Our Top Recruiters"
            description="Leading companies that regularly recruit from CSD&IT Departments"
          />

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {topRecruiters.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="bg-white rounded-lg p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="h-16 w-16 relative mb-2 overflow-hidden rounded-full bg-gray-50 p-2">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CSD Department Placements */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-[url('/images/dot-pattern.png')] opacity-5 z-0"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <SectionHeading
            title="Computer Science & Design Placements"
            description="Our flagship department with exceptional placement records"
          />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="bg-gradient-to-r from-[#006699] to-[#0088cc] text-white p-6">
              <h3 className="text-xl font-bold">CSD Department Highlights</h3>
              <p className="text-white/80 mt-2">
                The Computer Science & Design program at CSD&IT Departments has consistently achieved outstanding
                placement results
              </p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-[#006699] mb-4">Key Achievements</h4>
                  <ul className="space-y-3">
                    {[
                      "98% placement rate for eligible students in 2022-23",
                      "Average package of ₹12.5 LPA, a 15% increase from previous year",
                      "Highest package of ₹42 LPA offered by Google",
                      "25+ students placed in FAANG and other top-tier companies",
                      "12 students received international offers",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-yellow-500 flex items-center justify-center mt-0.5 mr-2">
                          <ChevronRight className="h-3 w-3 text-white" />
                        </div>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#006699] mb-4">Industry Roles</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { role: "Software Development", percentage: 42 },
                      { role: "UX/UI Design", percentage: 18 },
                      { role: "Data Science", percentage: 15 },
                      { role: "Product Management", percentage: 10 },
                      { role: "DevOps & Cloud", percentage: 8 },
                      { role: "Other Roles", percentage: 7 },
                    ].map((role, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03 }}
                        className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg border border-gray-100 shadow-sm"
                      >
                        <div className="font-medium">{role.role}</div>
                        <div className="text-sm text-gray-600">{role.percentage}% of placements</div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                          <div
                            className="bg-[#006699] h-1.5 rounded-full"
                            style={{ width: `${role.percentage}%` }}
                          ></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-[#006699] mb-4">CSD Placement Preparation</h4>
                <p className="text-gray-700 mb-4">
                  The CSD department offers specialized placement preparation tailored to the unique blend of technical
                  and design skills required in the industry:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Technical Training",
                      description:
                        "Advanced coding workshops, system design sessions, and competitive programming contests to strengthen technical skills.",
                    },
                    {
                      title: "Design Portfolio",
                      description:
                        "Guidance on creating impressive design portfolios showcasing UI/UX projects, product designs, and creative work.",
                    },
                    {
                      title: "Industry Projects",
                      description:
                        "Collaboration with industry partners on real-world projects that provide practical experience and portfolio material.",
                    },
                  ].map((item, index) => (
                    <GradientCard key={index} title={item.title} description={item.description} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <SectionHeading
            title="Placement Process"
            description="Our structured approach to ensure students are well-prepared for the recruitment process"
          />

          <div className="mt-12 relative">
            {/* Process timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#006699] via-yellow-500 to-[#006699] hidden md:block"></div>

            <StaggerChildren className="space-y-8">
              {placementProcess.map((step, index) => (
                <StaggerItem key={index}>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="flex items-center justify-center md:justify-start">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                          delay: index * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-[#006699] to-[#0088cc] text-white flex items-center justify-center font-bold z-10 shadow-md"
                      >
                        {index + 1}
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      }}
                      className="bg-white rounded-lg shadow-sm p-6 flex-1 hover:shadow-md transition-all duration-300 border border-gray-100"
                    >
                      <div className="flex items-start gap-4">
                        <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-[#006699]/10 flex-shrink-0">
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-[#006699]">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </motion.div>
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
        <div className="container px-4 md:px-6 text-center text-white mx-auto">
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
            className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-500 text-[#006699] px-6 py-2 text-sm font-medium shadow transition-colors hover:bg-yellow-400 relative overflow-hidden group"
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <Link to="/contact" className="relative z-10">
              Contact Placement Cell
            </Link>
          </motion.button>
        </div>
      </ParallaxSection>

      {/* Success Stories */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-[url('/images/dot-pattern.png')] opacity-5 z-0"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <SectionHeading
            title="Success Stories"
            description="Meet our alumni who have secured prestigious positions in top companies"
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <HexagonImage
                      src={story.image || "/placeholder.svg?height=64&width=64"}
                      alt={story.name}
                      size={64}
                    />
                    <div>
                      <h3 className="font-bold text-lg text-[#006699]">{story.name}</h3>
                      <p className="text-sm text-gray-600">{story.program}</p>
                      <p className="text-xs text-gray-500">Batch of {story.batch}</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#006699]/10 to-[#0088cc]/10 p-3 rounded-md mb-4">
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

                  <p className="text-sm text-gray-600 italic relative pl-2 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-yellow-500 before:rounded-full">
                    "{story.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <FadeIn direction="right" className="flex flex-col justify-center">
              <SectionHeading
                title="Training Programs"
                description="Comprehensive training to enhance employability skills"
                align="left"
              />

              <div className="mt-8 space-y-4">
                {[
                  {
                    title: "Technical Skills Training",
                    description:
                      "Specialized training in programming languages, frameworks, and tools relevant to industry requirements.",
                    skills: ["Java", "Python", "C++", "Web Development", "Data Science", "Cloud Computing", "DevOps"],
                  },
                  {
                    title: "Soft Skills Development",
                    description:
                      "Training in communication, presentation, teamwork, and other essential workplace skills.",
                    skills: [
                      "Communication",
                      "Presentation",
                      "Leadership",
                      "Team Building",
                      "Time Management",
                      "Problem Solving",
                    ],
                  },
                  {
                    title: "Aptitude & Reasoning",
                    description:
                      "Intensive training and practice sessions to excel in aptitude tests conducted by companies.",
                    skills: [],
                  },
                ].map((program, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      x: 5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 transition-all duration-300"
                  >
                    <h3 className="font-bold text-lg text-[#006699] mb-2">{program.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{program.description}</p>
                    {program.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {program.skills.map((skill, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-[#006699]/10 text-[#006699] text-xs px-2 py-1 rounded-full"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            <ImageReveal className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#006699] to-yellow-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative">
                  <img
                    src="/images/training.jpg"
                    alt="Students in training session"
                    className="rounded-lg object-cover shadow-lg max-w-full h-auto clip-path-diamond"
                  />
                </div>
              </div>
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* Contact Placement Cell */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-[url('/images/dot-pattern.png')] opacity-5 z-0"></div>
        <div className="container px-4 md:px-6 text-center mx-auto relative z-10">
          <SectionHeading
            title="Contact Placement Cell"
            description="Get in touch with our placement team for any queries or assistance"
          />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-8 max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-100"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
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
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 grid gap-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699] transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699] transition-all duration-300"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699] transition-all duration-300"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699] transition-all duration-300"
              ></textarea>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-[#006699] to-[#0088cc] text-white px-4 py-2 text-sm font-medium shadow transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
              >
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                <span className="relative z-10">Send Message</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PlacementsPage
