"use client"

import { motion } from "framer-motion"
import EnhancedAcademicCalendar from "../components/ui/EnhancedAcademicCalendar"
import SectionHeading from "../components/ui/SectionHeading"
import FadeIn from "../components/animations/FadeIn"

const AcademicCalendarPage = () => {
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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#006699] text-white">
        <div className="container px-4 md:px-6">
          <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Academic Calendar</h1>
              <p className="max-w-[900px] text-white/80 md:text-xl/relaxed">
                Stay updated with important academic dates, events, and deadlines at CSD&IT Departments.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="2023-2024 Academic Year"
            description="Plan your academic year with our comprehensive calendar of important dates and events."
          />

          <div className="mt-8">
            <EnhancedAcademicCalendar academicYear="2023-2024" />
          </div>

          <div className="mt-8 text-center">
            <motion.button
              variants={buttonVariants}
\
