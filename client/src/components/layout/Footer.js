import React from "react"
import { Link } from "react-router-dom"
import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="w-full border-t bg-[#006699] text-white">
      <div className="container flex flex-col gap-6 py-8 md:py-12 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-4 lg:max-w-sm">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6" />
            <span className="text-xl font-bold">CSD&IT Departments</span>
          </div>
          <p className="text-sm text-white/80">
            Approved by AICTE New Delhi, Accredited by NAAC, NIRF & ARIIA Ranked Institute, Affiliated by JNTU Kakinada
          </p>
          <div className="flex flex-col gap-2 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-yellow-300" />
              <span>Bhimavaram, West Godavari District, Andhra Pradesh - 534204</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-yellow-300" />
              <span>+91 8816 223332</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-yellow-300" />
              <span>info@srkrec.edu.in</span>
            </div>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-yellow-300">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/programs" className="text-white/80 transition-colors hover:text-white">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-white/80 transition-colors hover:text-white">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/campus" className="text-white/80 transition-colors hover:text-white">
                  Campus Life
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-white/80 transition-colors hover:text-white">
                  Research
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-yellow-300">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/campus" className="text-white/80 transition-colors hover:text-white">
                  Library
                </Link>
              </li>
              <li>
                <Link to="/student-portal" className="text-white/80 transition-colors hover:text-white">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link to="/placements" className="text-white/80 transition-colors hover:text-white">
                  Placement Cell
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 transition-colors hover:text-white">
                  Alumni
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-yellow-300">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="pt-2">
              <h4 className="text-sm font-medium text-yellow-300 mb-2">Approvals & Accreditations</h4>
              <p className="text-xs text-white/80">EAPCET / ECET CODE: SRKR</p>
              <p className="text-xs text-white/80">M.TECH CODE: SRKRI</p>
              <p className="text-xs text-white/80">BBA CODE: 7086</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-white/80 md:text-left">
            © {new Date().getFullYear()} CSD&IT Departments. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-white/80">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default React.memo(Footer)
