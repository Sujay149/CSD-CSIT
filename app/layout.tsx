import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"
import { MobileNav } from "@/components/ui/mobile-nav"
import { AnimatedLink } from "@/components/ui/animated-link"
import { AnimatedButton } from "@/components/ui/animated-button"
import { ScrollProgress } from "@/components/animations/scroll-progress"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "CSD&IT Departments",
    template: "%s | CSD&IT Departments",
  },
  description:
    "Department of Computer Science & Information Technology - Shaping the future through innovation and excellence in computing education.",
    generator: 'v0.dev'
}

const navItems = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/programs", title: "Programs" },
  { href: "/faculty", title: "Faculty" },
  { href: "/campus", title: "Campus" },
  { href: "/events", title: "Events" },
  { href: "/contact", title: "Contact" },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preload" href="/images/srkr-main-building.jpg" as="image" />
        <link rel="preload" href="/images/programs/product-design.jpg" as="image" />
        <link rel="preload" href="/images/programs/web-mobile.jpg" as="image" />
        <link rel="preload" href="/images/programs/game-dev.jpg" as="image" />
        <link rel="preload" href="/images/campus/student-life.jpg" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ScrollProgress />
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                  <Link href="/" className="flex items-center gap-2">
                    <GraduationCap className="h-6 w-6" />
                    <span className="text-xl font-bold">CSD&IT Departments</span>
                  </Link>
                </div>
                <nav className="hidden md:flex gap-6">
                  {navItems.map((item) => (
                    <AnimatedLink
                      key={item.href}
                      href={item.href}
                      className="text-sm font-medium transition-colors hover:text-primary"
                    >
                      {item.title}
                    </AnimatedLink>
                  ))}
                </nav>
                <div className="flex items-center gap-4">
                  <AnimatedButton variant="outline" size="sm" className="hidden md:flex" asChild whileHoverScale={1.03}>
                    <Link href="/student-portal">Student Portal</Link>
                  </AnimatedButton>
                  <AnimatedButton size="sm" asChild whileHoverScale={1.03}>
                    <Link href="/contact">Apply Now</Link>
                  </AnimatedButton>
                  <MobileNav items={navItems} />
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="w-full border-t bg-[#006699] text-white">
              <div className="container flex flex-col gap-6 py-8 md:py-12 lg:flex-row lg:justify-between">
                <div className="flex flex-col gap-4 lg:max-w-sm">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-6 w-6" />
                    <span className="text-xl font-bold">CSD&IT Departments</span>
                  </div>
                  <p className="text-sm text-white/80">
                    Approved by AICTE New Delhi, Accredited by NAAC, NIRF & ARIIA Ranked Institute, Affiliated by JNTU
                    Kakinada
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
                        <Link href="/programs" className="text-white/80 transition-colors hover:text-white">
                          Programs
                        </Link>
                      </li>
                      <li>
                        <Link href="/admissions" className="text-white/80 transition-colors hover:text-white">
                          Admissions
                        </Link>
                      </li>
                      <li>
                        <Link href="/campus" className="text-white/80 transition-colors hover:text-white">
                          Campus Life
                        </Link>
                      </li>
                      <li>
                        <Link href="/research" className="text-white/80 transition-colors hover:text-white">
                          Research
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-yellow-300">CSD Department</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="/programs/computer-science"
                          className="text-white/80 transition-colors hover:text-white"
                        >
                          B.Tech CSD Profile
                        </Link>
                      </li>
                      <li>
                        <Link href="/campus" className="text-white/80 transition-colors hover:text-white">
                          Student Achievements
                        </Link>
                      </li>
                      <li>
                        <Link href="/events" className="text-white/80 transition-colors hover:text-white">
                          Events Conducted
                        </Link>
                      </li>
                      <li>
                        <Link href="/gallery" className="text-white/80 transition-colors hover:text-white">
                          Picture Gallery
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-yellow-300">Contact CSD</h3>
                    <div className="text-sm text-white/80">
                      <p>Department of Computer Science & Design</p>
                      <p>2nd Floor, Technology Centre, Z-Block</p>
                      <p>CSD&IT Departments, Chinna Amiram</p>
                      <p>Bhimavaram, Andhra Pradesh 534204</p>
                      <p>Ph: 9866600002, 9848427327</p>
                      <p>Email: csd@srkrec.edu.in</p>
                    </div>
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
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'