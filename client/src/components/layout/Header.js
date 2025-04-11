"use client"

import React, { useState, useEffect, useCallback } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { GraduationCap, Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "../theme/ThemeProvider"

const navItems = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About SRKR" },
  { href: "/programs", title: "Academics" },
  { href: "/admissions", title: "Admissions" },
  { href: "/research", title: "Research" },
  { href: "/campus", title: "Amenities" },
  { href: "/placements", title: "Placements" },
  { href: "/contact", title: "Contact" },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  // Handle mobile menu with useCallback to improve performance
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), [])
  const closeMenu = useCallback(() => setIsOpen(false), [])

  // Close menu on route change
  useEffect(() => {
    closeMenu()
  }, [location.pathname, closeMenu])

  // Handle scroll effect with throttling for better performance
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Animation variants for better performance
  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-[#006699]/95 text-white backdrop-blur supports-[backdrop-filter]:bg-[#006699]/80 transition-shadow ${scrolled ? "shadow-md" : ""}`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6" />
            <span className="text-xl font-bold">CSD&IT Departments</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4 text-xs text-white/80">
          <div>Approvals | Accreditations</div>
          <div>EAPCET / ECET CODE: SRKR</div>
          <div>M.TECH CODE: SRKRI</div>
          <div>BBA CODE: 7086</div>
        </div>

        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-yellow-300 relative group ${location.pathname === item.href ? "text-yellow-300" : ""}`}
            >
              {item.title}
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-200"
                initial={{ width: 0 }}
                animate={{ width: location.pathname === item.href ? "100%" : 0 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="rounded-md p-2 text-white/80 hover:text-white hover:bg-[#005588] transition-colors"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="hidden md:flex h-9 rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-[#006699] shadow transition-colors hover:bg-yellow-400"
          >
            <Link to="/admissions">Apply Now</Link>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="hidden md:flex h-9 rounded-md border border-white/20 bg-[#005588] px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-[#004477] hover:border-white/40"
          >
            <Link to="/student-portal">Student Portal</Link>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-md p-2 text-white/80 hover:text-white hover:bg-[#005588] transition-colors relative z-50"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={closeMenu}
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="fixed top-0 right-0 bottom-0 z-40 w-full max-w-xs bg-[#006699] p-6 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mt-12 flex flex-col space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + index * 0.05, type: "spring", stiffness: 400, damping: 40 }}
                  >
                    <Link
                      to={item.href}
                      className={`text-lg font-medium transition-colors hover:text-yellow-300 ${
                        location.pathname === item.href ? "text-yellow-300" : "text-white"
                      }`}
                      onClick={closeMenu}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + navItems.length * 0.05, type: "spring", stiffness: 400, damping: 40 }}
                  className="pt-6"
                >
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="w-full h-10 rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-[#006699] shadow transition-colors hover:bg-yellow-400"
                  >
                    <Link to="/admissions" className="w-full block" onClick={closeMenu}>
                      Apply Now
                    </Link>
                  </motion.button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.05 + (navItems.length + 1) * 0.05,
                    type: "spring",
                    stiffness: 400,
                    damping: 40,
                  }}
                >
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="w-full h-10 rounded-md border border-white/20 bg-[#005588] px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-[#004477] hover:border-white/40"
                  >
                    <Link to="/student-portal" className="w-full block" onClick={closeMenu}>
                      Student Portal
                    </Link>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default React.memo(Header)
