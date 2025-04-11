"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle, Calendar, FileText, HelpCircle, Download } from "lucide-react"
import FadeIn from "../components/animations/FadeIn"
import { StaggerChildren, StaggerItem } from "../components/animations/StaggerChildren"
import SectionHeading from "../components/ui/SectionHeading"
import ParallaxSection from "../components/animations/ParallaxSection"
import TextReveal from "../components/animations/TextReveal"
import AdmissionForm from "../components/ui/AdmissionForm"

const AdmissionsPage = () => {
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

  // Admission process steps
  const admissionSteps = [
    {
      title: "Research Programs",
      description: "Explore our academic programs to find the one that aligns with your interests and career goals.",
      icon: <FileText className="h-8 w-8 text-[#006699]" />,
    },
    {
      title: "Submit Application",
      description: "Complete and submit the online application form with all required documents.",
      icon: <CheckCircle className="h-8 w-8 text-[#006699]" />,
    },
    {
      title: "Entrance Examination",
      description: "Prepare for and take the required entrance examination (EAPCET/ECET/JEE).",
      icon: <FileText className="h-8 w-8 text-[#006699]" />,
    },
    {
      title: "Counseling Process",
      description: "Participate in the counseling process for seat allocation based on your rank.",
      icon: <HelpCircle className="h-8 w-8 text-[#006699]" />,
    },
    {
      title: "Fee Payment",
      description: "Pay the required tuition and other fees to confirm your admission.",
      icon: <CheckCircle className="h-8 w-8 text-[#006699]" />,
    },
    {
      title: "Orientation",
      description: "Attend the orientation program to get familiar with the campus and academic procedures.",
      icon: <Calendar className="h-8 w-8 text-[#006699]" />,
    },
  ]

  // Important dates
  const importantDates = [
    {
      event: "Application Opens",
      date: "March 1, 2023",
    },
    {
      event: "Application Deadline",
      date: "May 15, 2023",
    },
    {
      event: "Entrance Exam",
      date: "June 5-10, 2023",
    },
    {
      event: "Results Announcement",
      date: "June 30, 2023",
    },
    {
      event: "Counseling Process",
      date: "July 10-20, 2023",
    },
    {
      event: "Fee Payment Deadline",
      date: "July 31, 2023",
    },
    {
      event: "Orientation Program",
      date: "August 10, 2023",
    },
    {
      event: "Classes Begin",
      date: "August 16, 2023",
    },
  ]

  // Required documents
  const requiredDocuments = [
    "Completed application form",
    "10th and 12th mark sheets",
    "Transfer Certificate",
    "Migration Certificate (if applicable)",
    "Entrance exam rank card/score",
    "Category certificate (if applicable)",
    "Income certificate (if applicable)",
    "Passport size photographs",
    "Aadhar Card",
    "Medical fitness certificate",
  ]

  // Handle form submission
  const handleFormSubmit = (formData) => {
    console.log("Form submitted:", formData)
    // In a real application, this would send the data to a server
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#006699] to-[#004477] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <FadeIn direction="right" className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <TextReveal
                  text="Join Our Academic Community"
                  element="h1"
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                />
                <p className="max-w-[600px] text-white/80 md:text-xl">
                  Take the first step toward a successful career by applying to CSD&IT Departments. Our admissions
                  process is designed to be straightforward and supportive.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-[#006699] shadow transition-colors hover:bg-yellow-400"
                >
                  <a href="#apply-now" className="flex items-center">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </motion.button>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-white/20"
                >
                  <a href="#admission-process">View Admission Process</a>
                </motion.button>
              </div>
            </FadeIn>
            <FadeIn direction="left" className="flex items-center justify-center">
              <img
                src="/images/admissions.jpg"
                alt="Students at CSD&IT Departments"
                className="rounded-lg object-cover shadow-lg max-w-full h-auto"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section id="admission-process" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Admission Process" description="Follow these steps to join CSD&IT Departments" />

          <div className="mt-12 relative">
            {/* Process timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

            <StaggerChildren className="space-y-8">
              {admissionSteps.map((step, index) => (
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

      {/* Important Dates */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Important Dates"
            description="Mark your calendar with these key admissions deadlines"
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {importantDates.map((item, index) => (
              <FadeIn
                key={index}
                direction="up"
                delay={index * 0.1}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <Calendar className="h-8 w-8 text-[#006699] mb-3" />
                  <h3 className="font-bold text-lg mb-2">{item.event}</h3>
                  <p className="text-[#006699]">{item.date}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <FadeIn direction="right" className="flex flex-col justify-center">
              <SectionHeading
                title="Required Documents"
                description="Prepare these documents for your application"
                align="left"
              />

              <ul className="mt-8 space-y-3">
                {requiredDocuments.map((document, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="h-5 w-5 text-[#006699] mt-0.5" />
                    <span>{document}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#006699] text-white px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-[#005588]"
                >
                  <Link to="#" className="flex items-center">
                    <Download className="mr-2 h-4 w-4" />
                    Download Document Checklist
                  </Link>
                </motion.button>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="flex items-center justify-center">
              <img
                src="/images/documents.jpg"
                alt="Application documents"
                className="rounded-lg object-cover shadow-lg max-w-full h-auto"
              />
            </FadeIn>
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
            text="Begin Your Journey at CSD&IT Departments"
            element="h2"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4"
          />
          <p className="max-w-[800px] mx-auto text-white/80 md:text-xl mb-6">
            Join a community of innovators, creators, and future leaders. Apply today and take the first step toward a
            successful career.
          </p>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-500 text-[#006699] px-6 py-2 text-sm font-medium shadow transition-colors hover:bg-yellow-400"
          >
            <a href="#apply-now">Apply Now</a>
          </motion.button>
        </div>
      </ParallaxSection>

      {/* Application Form */}
      <section id="apply-now" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Apply Now" description="Fill out the form below to start your application process" />

          <div className="mt-8 max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
            <AdmissionForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Frequently Asked Questions"
            description="Find answers to common questions about our admissions process"
          />

          <div className="mt-8 max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What are the eligibility criteria for B.Tech programs?",
                answer:
                  "Candidates must have passed 10+2 with Physics, Chemistry, and Mathematics with a minimum of 60% marks (50% for reserved categories) and should have qualified in EAPCET/JEE Main.",
              },
              {
                question: "Is there a direct admission process?",
                answer:
                  "No, all admissions to B.Tech programs are through the state-level entrance examination (EAPCET) or JEE Main, followed by the counseling process.",
              },
              {
                question: "Are there any scholarships available?",
                answer:
                  "Yes, CSD&IT Departments offers merit-based scholarships, as well as scholarships for economically disadvantaged students. Government scholarships are also applicable as per eligibility.",
              },
              {
                question: "What is the fee structure?",
                answer:
                  "The fee structure varies by program. Please visit our fee structure page or contact the admissions office for detailed information about tuition and other fees.",
              },
              {
                question: "Is hostel accommodation available?",
                answer:
                  "Yes, CSD&IT Departments provides separate hostel facilities for boys and girls with modern amenities. Hostel allocation is done on a first-come, first-served basis.",
              },
            ].map((faq, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.1} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-[#006699] mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </FadeIn>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Still have questions? Contact our admissions office for more information.
            </p>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#006699] text-white px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-[#005588]"
            >
              <Link to="/contact" className="flex items-center">
                Contact Admissions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdmissionsPage
