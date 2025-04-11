"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, ArrowRight, Award, BookOpen, Users, Globe, ArrowDown, Sparkles, Zap, Star } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { AnimatedButton } from "@/components/ui/animated-button"
import { SectionHeading } from "@/components/ui/section-heading"
import { StatsCard } from "@/components/ui/stats-card"
import { HeroBackground } from "@/components/ui/hero-background"
import { FloatingElement } from "@/components/animations/floating-element"
import { TextGradient } from "@/components/ui/text-gradient"
import { ShapedImage } from "@/components/ui/shaped-image"
import { useRef, useState, useEffect } from "react"

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const smoothScrollYProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  const heroScale = useTransform(smoothScrollYProgress, [0, 0.2], [1, 0.9])
  const heroOpacity = useTransform(smoothScrollYProgress, [0, 0.2], [1, 0])
  const heroY = useTransform(smoothScrollYProgress, [0, 0.2], [0, -50])

  const statsRef = useRef<HTMLDivElement>(null)
  const programsRef = useRef<HTMLDivElement>(null)
  const featuredRef = useRef<HTMLDivElement>(null)
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })
  const isProgramsInView = useInView(programsRef, { once: false, amount: 0.3 })
  const isFeaturedInView = useInView(featuredRef, { once: false, amount: 0.3 })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToStats = () => {
    statsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Parallax effect for sections
  const parallaxY1 = useTransform(smoothScrollYProgress, [0, 1], [0, -100])
  const parallaxY2 = useTransform(smoothScrollYProgress, [0, 1], [0, -150])
  const parallaxY3 = useTransform(smoothScrollYProgress, [0, 1], [0, -200])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with Advanced Background */}
      <section className="relative w-full py-20 md:py-28 lg:py-36 xl:py-44 overflow-hidden">
        <HeroBackground />

        <motion.div
          className="container relative z-10 px-4 md:px-6"
          style={{
            scale: heroScale,
            opacity: heroOpacity,
            y: heroY,
          }}
        >
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <FadeIn direction="right" className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="inline-flex items-center px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  <span>Empowering Future Leaders</span>
                </motion.div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Welcome to{" "}
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                  >
                    <TextGradient className="inline-block">CSD&IT Departments</TextGradient>
                  </motion.span>
                </h1>
                <motion.p
                  className="max-w-[600px] text-muted-foreground md:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Department of Computer Science & Design - Developing graduates well versed in Design Approaches and
                  Digital Technologies apart from Programming & Software Development skills.
                </motion.p>
              </div>
              <motion.div
                className="flex flex-col gap-3 min-[400px]:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <AnimatedButton size="lg" className="group relative overflow-hidden" asChild>
                  <Link href="/programs">
                    <span className="relative z-10 flex items-center">
                      Explore Programs
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </Link>
                </AnimatedButton>
                <AnimatedButton variant="outline" size="lg" className="group relative overflow-hidden" asChild>
                  <Link href="/contact">
                    <span className="relative z-10">Schedule a Visit</span>
                    <motion.span
                      className="absolute inset-0 bg-primary/10"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </Link>
                </AnimatedButton>
              </motion.div>
              <motion.div
                className="hidden md:flex items-center space-x-4 mt-8 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <span>Scroll to discover</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  className="relative"
                >
                  <ArrowDown className="h-4 w-4" />
                  <motion.div
                    className="absolute -inset-1 rounded-full bg-primary/20"
                    animate={{ scale: [0.8, 1.5, 0.8], opacity: [0.7, 0, 0.7] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  />
                </motion.div>
              </motion.div>
            </FadeIn>
            <div className="relative flex items-center justify-center">
              <FloatingElement>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, duration: 1, type: "spring" }}
                >
                  <ShapedImage
                    src="https://srkrec.edu.in/img/csd/gallery/2.jpg"
                    width={650}
                    height={650}
                    alt="CSD&IT Departments main building"
                    shape="arch"
                    className="relative z-10 w-[650px] h-[650px]"
                    priority
                    quality={90}
                  />

                  {/* Animated border effect */}
                  <motion.div
                    className="absolute inset-0 clip-path-hexagon border-2 border-primary/30 w-[650px] h-[650px] z-0"
                    animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  />

                  {/* Animated glow effect */}
                  <motion.div
                    className="absolute inset-0 clip-path-hexagon bg-primary/5 w-[650px] h-[650px] z-0 blur-md"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  />
                </motion.div>
              </FloatingElement>

              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>

              {/* Accent circles */}
              <motion.div
                className="absolute top-1/4 -right-6 w-16 h-16 rounded-full bg-secondary/30 backdrop-blur-md"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute bottom-1/4 -left-6 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              />

              {/* Floating dots */}
              <motion.div
                className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-primary"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-secondary"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              />

              {/* Decorative lines */}
              <div className="absolute top-1/2 right-0 w-24 h-px bg-gradient-to-r from-transparent to-primary/50"></div>
              <div className="absolute bottom-1/3 left-0 w-24 h-px bg-gradient-to-l from-transparent to-secondary/50"></div>

              {/* Animated decorative elements */}
              <motion.div
                className="absolute -top-10 -right-10 w-20 h-20 rounded-full border border-primary/20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              <motion.div
                className="absolute -bottom-5 left-1/4 w-16 h-16 rounded-full border border-secondary/20"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                  rotate: [0, -180, -360],
                }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </div>
          </div>

          {/* Trusted by section */}
          <motion.div
            className="mt-16 md:mt-24 border-t border-border/40 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="text-center mb-6">
              <span className="text-sm text-muted-foreground">Partnered with leading organizations</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {[
                { name: "TCS", image: "https://tse2.mm.bing.net/th?id=OIP.B6jYRQ-YrweGKzuD1kUqsAAAAA&pid=Api&P=0&h=180" },
                { name: "Infosys", image: "https://tse2.mm.bing.net/th?id=OIP.D_lZppQJvOI0ci2t0hoZfgHaC9&pid=Api&P=0&h=180" },
                { name: "Wipro", image: "https://tse1.mm.bing.net/th?id=OIP.LCNgAL5L174Punk-ntgy4gHaD3&pid=Api&P=0&h=180" },
                { name: "Bluconn", image: "https://tse3.mm.bing.net/th?id=OIP.imrU0XJRd8tlzumg6R67-wHaCI&pid=Api&P=0&h=180" },
                { name: "Frejun", image: "https://tse3.mm.bing.net/th?id=OIP.n7xLfnLtQWFMv9kCrdklIQAAAA&pid=Api&P=0&h=180" },
              ].map((partner, i) => (
                <motion.div
                  key={i}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Image
                    src={partner.image || "https://tse1.mm.bing.net/th?id=OIP.U-4CC2tg7D_VkRb8sICMFAHaEK&pid=Api&P=0&h=180"}
                    alt={`${partner.name} logo`}
                    width={120}
                    height={30}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {[
              { icon: <BookOpen className="h-5 w-5" />, label: "Academic Programs", link: "/programs" },
              { icon: <Users className="h-5 w-5" />, label: "Student Life", link: "/campus" },
              { icon: <Award className="h-5 w-5" />, label: "Admissions", link: "/contact" },
              { icon: <Globe className="h-5 w-5" />, label: "Research", link: "/faculty" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Link
                  href={item.link}
                  className="flex items-center p-3 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-primary/5 transition-colors group"
                >
                  <div className="mr-3 text-primary group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.button
          onClick={scrollToStats}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-background transition-colors"
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowDown className="h-5 w-5 text-primary" />
          <motion.div
            className="absolute inset-0 rounded-full border border-primary/50"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.button>
      </section>

      {/* Stats Section with Glass Morphism */}
      <section
        ref={statsRef}
        className="w-full py-16 md:py-20 bg-gradient-to-r from-primary/5 to-secondary/5 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>

        <motion.div className="container relative z-10 px-4 md:px-6" style={{ y: parallaxY1 }}>
          <FadeIn direction="up" className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Impact in Numbers</h2>
            <p className="mt-4 text-muted-foreground">
              Discover the scale of our educational community and the success of our graduates.
            </p>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <StatsCard
                value={60}
                label="CSD Intake per Year"
                suffix="+"
                icon={<Users className="h-5 w-5 text-primary" />}
                glassEffect
                animated
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <StatsCard
                value={120}
                label="Expert Faculty Members"
                suffix="+"
                icon={<BookOpen className="h-5 w-5 text-primary" />}
                glassEffect
                animated
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <StatsCard
                value={25}
                label="Research Labs"
                suffix="+"
                icon={<Award className="h-5 w-5 text-primary" />}
                glassEffect
                animated
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <StatsCard
                value={98}
                label="Placement Rate"
                suffix="%"
                icon={<Globe className="h-5 w-5 text-primary" />}
                glassEffect
                animated
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Recognition & Rankings */}
      <section className="w-full py-12 md:py-16 border-y border-border/30 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

        <motion.div className="container px-4 md:px-6 relative z-10" style={{ y: parallaxY2 }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/3">
              <FadeIn direction="right">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-2 flex items-center">
                    <Star className="mr-2 h-5 w-5 text-secondary" />
                    Recognition & Rankings
                  </h3>
                  <p className="text-muted-foreground">
                    SRKR's Computer Science Department consistently ranks among the top educational institutions
                    nationwide.
                  </p>
                </motion.div>
              </FadeIn>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { rank: "#3", category: "Best CS Programs in AP", source: "Tech Education Review" },
                { rank: "#5", category: "Campus Placements", source: "Industry Survey 2023" },
                { rank: "#7", category: "Research Publications", source: "Academic Index" },
              ].map((item, i) => (
                <FadeIn key={i} direction="up" delay={i * 0.1}>
                  <motion.div
                    className="text-center p-4 rounded-lg border border-border/50 bg-background hover:shadow-md transition-all duration-300"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      borderColor: "rgba(0, 102, 153, 0.3)",
                    }}
                  >
                    <motion.div
                      className="text-3xl font-bold text-primary mb-1"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {item.rank}
                    </motion.div>
                    <div className="text-sm font-medium">{item.category}</div>
                    <div className="text-xs text-muted-foreground">{item.source}</div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Programs with Enhanced Cards */}
      <section ref={programsRef} className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.02]"></div>

        <motion.div className="container px-4 md:px-6 relative z-10" style={{ y: parallaxY3 }}>
          <SectionHeading
            title="Focus Skill Areas"
            description="Our Computer Science & Design program focuses on developing these key skills for industry readiness."
            accentText="CSD Excellence"
          />

          <StaggerChildren className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            {[
              {
                title: "Innovative Product Design",
                degree: "Focus Area",
                image: "https://tse4.mm.bing.net/th?id=OIP.0O0C4RmwXOZOTDXurRasbQHaFD&pid=Api&P=0&h=180",
                description: "Learn to create user-centered digital products with focus on innovation and usability.",
                link: "/programs/computer-science",
                features: ["Design Thinking", "User Experience", "Prototyping", "User Testing"],
              },
              {
                title: "Web & Mobile App Development",
                degree: "Focus Area",
                image: "https://tse1.mm.bing.net/th?id=OIP.U-4CC2tg7D_VkRb8sICMFAHaEK&pid=Api&P=0&h=180",
                description:
                  "Build responsive web applications and native mobile apps using modern frameworks and technologies.",
                link: "/programs/information-technology",
                features: ["Frontend Development", "Backend Systems", "Mobile Apps", "Responsive Design"],
              },
              {
                title: "Game Development",
                degree: "Focus Area",
                image: "https://tse1.mm.bing.net/th?id=OIP.U-4CC2tg7D_VkRb8sICMFAHaEK&pid=Api&P=0&h=180",
                description:
                  "Design and develop interactive games with focus on gameplay mechanics and user experience.",
                link: "/programs/mtech-cs",
                features: ["Game Design", "Unity/Unreal", "3D Modeling", "Game Physics"],
              },
            ].map((program, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 border-border/50 group">
                    <div className="aspect-video relative overflow-hidden">
                      <ShapedImage
                        src={program.image}
                        alt={`${program.title}`}
                        width={400}
                        height={225}
                        shape={i === 0 ? "custom" : i === 1 ? "trapezoid" : "wave"}
                        customClipPath={i === 0 ? "polygon(0 0, 100% 0, 100% 100%, 0 85%)" : undefined}
                        className="w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <motion.div
                        className="absolute bottom-0 left-0 p-4 w-full"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                          {program.degree}
                        </span>
                      </motion.div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <CardDescription>{program.degree}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground mb-4">{program.description}</p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Key Focus Areas:</h4>
                        <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                          {program.features.map((feature, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <AnimatedButton variant="outline" size="sm" className="w-full group" asChild>
                        <Link href={program.link} className="flex items-center justify-center">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </AnimatedButton>
                    </CardFooter>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <div className="flex justify-center mt-12">
            <AnimatedButton asChild>
              <Link href="/programs" className="group flex items-center">
                View All Programs
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedButton>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us with Interactive Cards */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0  right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="container relative z-10 px-4 md:px-6">
          <SectionHeading
            title="Salient Features of CSD"
            description="Discover what sets our Computer Science & Design program apart and makes it the right choice for your educational journey."
            accentText="Program Highlights"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {[
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "NEP 2020 Aligned",
                description:
                  "New National Education Policy (NEP) 2020 aligned pedagogy with modern teaching methodology.",
              },
              {
                icon: <BookOpen className="h-10 w-10 text-primary" />,
                title: "On-Campus Internships",
                description: "On-Campus Internships from the first semester with project-based curriculum.",
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Holistic Learning",
                description:
                  "Focus on emotional intelligence, decision making, communication skills, and personality development.",
              },
              {
                icon: <Globe className="h-10 w-10 text-primary" />,
                title: "Stress-Free Education",
                description: "Learning by doing and joyful learning practices for better skill development.",
              },
            ].map((feature, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1} className="group">
                <motion.div
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-background shadow-sm border border-border/50 h-full"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div
                    className="mb-4 rounded-full bg-primary/10 p-3 transition-colors duration-300 group-hover:bg-primary/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life Highlights with Masonry Grid */}
      <section ref={featuredRef} className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.02]"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <SectionHeading
            title="Campus Life"
            description="Experience a vibrant community with endless opportunities for growth and connection."
            accentText="Student Experience"
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
            {/* Large feature */}
            <FadeIn className="md:col-span-8" direction="left">
              <motion.div
                className="relative rounded-xl overflow-hidden group h-full"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="aspect-[16/9] md:aspect-auto md:h-full relative">
                  <ShapedImage
                    src="http://srkrec.edu.in/img/slides/l2.jpg"
                    alt="SRKR CS students collaborating on a project"
                    width={800}
                    height={400}
                    shape="custom"
                    customClipPath="polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)"
                    className="w-full h-full"
                    priority
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 0.9 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <motion.h3
                    className="text-2xl font-bold text-white mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={isFeaturedInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Vibrant Student Community
                  </motion.h3>
                  <motion.p
                    className="text-white/80 mb-4 max-w-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={isFeaturedInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Join a diverse and inclusive community where lifelong friendships are formed and personal growth is
                    nurtured through tech clubs, hackathons, and coding competitions.
                  </motion.p>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={isFeaturedInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <AnimatedButton size="sm" variant="secondary" asChild>
                      <Link href="/campus">Explore Campus Life</Link>
                    </AnimatedButton>
                  </motion.div>
                </div>
              </motion.div>
            </FadeIn>

            {/* Smaller items */}
            <div className="md:col-span-4 grid grid-cols-1 gap-6">
              {[
                {
                  title: "Tech Clubs",
                  image: "https://tse1.mm.bing.net/th?id=OIP.KxJat7yohd5anhgmlfiQvwHaHa&pid=Api&P=0&h=180",
                  description: "Join one of our 15+ technology-focused student organizations",
                },
                {
                  title: "Hackathons",
                  image: "https://tse3.mm.bing.net/th?id=OIP.XM432sgftsyufwaH0i7_6QHaEK&pid=Api&P=0&h=180",
                  description: "Participate in regular coding competitions and hackathons",
                },
              ].map((item, i) => (
                <FadeIn key={i} direction="right" delay={i * 0.2}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg group border-border/50">
                      <div className="aspect-[4/3] relative">
                        <ShapedImage
                          src={item.image}
                          alt={item.title}
                          width={300}
                          height={225}
                          shape="wave"
                          className="w-full h-full"
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0"
                          whileHover={{ opacity: 1 }}
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </FadeIn>
              ))}
            </div>

            {/* Bottom row */}
            <StaggerChildren className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  title: "Computer Labs",
                  image: "https://srkrec.edu.in/img/csd/gallery/11.jpg",
                  description: "State-of-the-art computing facilities with the latest hardware and software",
                },
                {
                  title: "library",
                  image: "https://tse2.mm.bing.net/th?id=OIP.g8mU-G_mReNrt2N_6UVdEwHaDt&pid=Api&P=0&h=180",
                  description: "Extensive collection of technical books, journals, and digital resources",
                },
                {
                  title: "Research Centers",
                  image: "https://srkrec.edu.in/img/csd/gallery/11.jpg",
                  description: "Specialized labs for AI, cybersecurity, and other emerging technologies",
                },
                {
                  title: "Recreation",
                  image: "https://srkrec.edu.in/img/csd/gallery/11.jpg",
                  description: "Balance your academic life with sports and recreational activities",
                },
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg group border-border/50">
                      <div className="aspect-square relative">
                        <ShapedImage
                          src={item.image}
                          alt={item.title}
                          width={300}
                          height={300}
                          shape={i % 4 === 0 ? "square" : i % 4 === 1 ? "wave" : i % 4 === 2 ? "oval" : "trapezoid"}
                          className="w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 w-full">
                          <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Learn More
                          </span>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-background to-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <SectionHeading
            title="Latest News"
            description="Stay updated with the latest happenings at SRKR's Computer Science & Design Department."
            accentText="Department Updates"
          />

          <div className="grid gap-8 md:grid-cols-3 mt-12">
            <FadeIn direction="up" className="col-span-1 md:col-span-2">
              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg border-border/50 group">
                  <div className="aspect-[16/9] relative">
                    <Image
                      src="https://tse1.mm.bing.net/th?id=OIP.U-4CC2tg7D_VkRb8sICMFAHaEK&pid=Api&P=0&h=180"
                      alt="CSD Students Startup Bhimavaram Online adjudged Winners in NIT AP Startup Expo"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                      whileHover={{ opacity: 0.9 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 p-6"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">Featured</span>
                      <h3 className="text-2xl font-bold text-white mt-2">
                        CSD Students Startup Bhimavaram Online adjudged Winners in NIT AP Startup Expo
                      </h3>
                      <p className="text-white/80 text-sm mt-2">
                        The student startup from CSD department received recognition for their innovative local business
                        solution
                      </p>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </FadeIn>

            <div className="col-span-1 space-y-6">
              {[
                {
                  title: "SRKR Students Win National Coding Competition",
                  date: "June 12, 2023",
                  category: "Achievement",
                },
                {
                  title: "New AI Research Lab Inaugurated",
                  date: "June 8, 2023",
                  category: "Facilities",
                },
                {
                  title: "Record Placements for CS Graduates",
                  date: "June 1, 2023",
                  category: "Placements",
                },
              ].map((news, i) => (
                <FadeIn key={i} direction="up" delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Card className="group hover:shadow-md transition-all duration-300 border-border/50">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <motion.span
                            className="text-xs bg-secondary/20 text-secondary-foreground px-2 py-1 rounded-full"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 153, 204, 0.3)" }}
                          >
                            {news.category}
                          </motion.span>
                          <span className="text-xs text-muted-foreground">{news.date}</span>
                        </div>
                        <CardTitle className="text-base mt-2 group-hover:text-primary transition-colors">
                          {news.title}
                        </CardTitle>
                      </CardHeader>
                      <CardFooter className="pt-0">
                        <Link href="/news" className="text-sm text-primary hover:underline flex items-center group">
                          Read more
                          <motion.div
                            className="ml-1 inline-flex"
                            whileHover={{ x: 3 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <ArrowRight className="h-3 w-3" />
                          </motion.div>
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient Background */}
      <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>

        <motion.div
          className="absolute top-20 right-20 w-20 h-20 rounded-full border-4 border-primary/20"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.5, 0.7] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        />

        <motion.div
          className="absolute bottom-20 left-20 w-12 h-12 rounded-full border-4 border-secondary/20"
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0.5, 0.7] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-border/50"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
                <FadeIn direction="right" className="flex flex-col justify-center space-y-4 lg:col-span-3">
                  <div className="space-y-2">
                    <motion.span
                      className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: false, amount: 0.5 }}
                    >
                      <Zap className="mr-1 h-3 w-3" />
                      Contact Us
                    </motion.span>
                    <motion.h2
                      className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: false, amount: 0.5 }}
                    >
                      Ready to Join SRKR CSD?
                    </motion.h2>
                    <motion.p
                      className="text-muted-foreground md:text-xl/relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: false, amount: 0.5 }}
                    >
                      Department of Computer Science & Design
                      <br />
                      2nd Floor, Technology Centre, Z-Block
                      <br />
                      CSD&IT Departments, Chinna Amiram
                      <br />
                      Bhimavaram, Andhra Pradesh 534204
                      <br />
                      Ph: 9866600002, 9848427327
                      <br />
                      Email: csd@srkrec.edu.in
                    </motion.p>
                  </div>
                </FadeIn>
                <FadeIn direction="left" className="flex items-center justify-center lg:col-span-2">
                  <motion.div
                    className="relative"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <ShapedImage
                      src="https://tse1.mm.bing.net/th?id=OIP.U-4CC2tg7D_VkRb8sICMFAHaEK&pid=Api&P=0&h=180"
                      width={600}
                      height={400}
                      alt="SRKR CS students coding together"
                      shape="custom"
                      customClipPath="polygon(0 0, 100% 0, 100% 100%, 15% 100%, 0 85%)"
                      className="shadow-lg w-full h-full"
                    />
                    <motion.div
                      className="absolute -bottom-4 -right-4 bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      Join us this fall!
                    </motion.div>
                  </motion.div>
                </FadeIn>
              </div>
            </motion.div>

            {/* Additional info cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: "Scholarships",
                  description: "Learn about merit scholarships and financial assistance options",
                  icon: <Award className="h-5 w-5" />,
                  link: "/financial-aid",
                },
                {
                  title: "Hostel Facilities",
                  description: "Explore on-campus accommodation options for students",
                  icon: <Users className="h-5 w-5" />,
                  link: "/housing",
                },
                {
                  title: "Industry Partners",
                  description: "Discover our connections with leading tech companies",
                  icon: <Globe className="h-5 w-5" />,
                  link: "/partners",
                },
              ].map((item, i) => (
                <FadeIn key={i} direction="up" delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Card className="border-border/50 hover:shadow-md transition-all duration-300 group h-full">
                      <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <motion.div
                          className="bg-primary/10 p-2 rounded-full text-primary"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {item.icon}
                        </motion.div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Link
                          href={item.link}
                          className="text-sm text-primary hover:underline flex items-center group-hover:font-medium"
                        >
                          Learn more
                          <motion.div
                            className="ml-1 inline-flex"
                            whileHover={{ x: 3 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                          </motion.div>
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
