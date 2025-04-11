"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { AnimatedButton } from "@/components/ui/animated-button"
import { SectionHeading } from "@/components/ui/section-heading"

export default function FacultyClientPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Faculty</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our distinguished faculty brings expertise, passion, and dedication to the classroom, providing students
                with exceptional educational experiences.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="flex items-center justify-center mt-8">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                type="text"
                placeholder="Search faculty by name or department"
                className="h-10 w-full rounded-md border border-input pl-8 pr-4 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Faculty Directory */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="science">Science & Tech</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="arts">Arts & Humanities</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-8">
              <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <StaggerItem key={i}>
                    <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                      <div className="aspect-square relative">
                        <Image
                          src={`/placeholder.svg?height=300&width=300&text=Professor+${i + 1}`}
                          alt={`Professor ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Dr. Jane Smith</CardTitle>
                        <CardDescription>Professor of Computer Science</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Ph.D. in Computer Science with 15+ years of teaching and research experience in AI and machine
                          learning.
                        </p>
                        <AnimatedButton variant="outline" size="sm" className="w-full" asChild>
                          <Link href={`/faculty/profile-${i + 1}`}>View Profile</Link>
                        </AnimatedButton>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </TabsContent>
            <TabsContent value="science" className="mt-8">
              <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <StaggerItem key={i}>
                    <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                      <div className="aspect-square relative">
                        <Image
                          src={`/placeholder.svg?height=300&width=300&text=Science+${i + 1}`}
                          alt={`Science Professor ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Dr. Robert Chen</CardTitle>
                        <CardDescription>Professor of Physics</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Ph.D. in Physics with research focus on quantum mechanics and theoretical physics.
                        </p>
                        <AnimatedButton variant="outline" size="sm" className="w-full" asChild>
                          <Link href={`/faculty/science-${i + 1}`}>View Profile</Link>
                        </AnimatedButton>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </TabsContent>
            <TabsContent value="business" className="mt-8">
              <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <StaggerItem key={i}>
                    <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                      <div className="aspect-square relative">
                        <Image
                          src={`/placeholder.svg?height=300&width=300&text=Business+${i + 1}`}
                          alt={`Business Professor ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Dr. Maria Rodriguez</CardTitle>
                        <CardDescription>Professor of Marketing</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Ph.D. in Business Administration with expertise in digital marketing and consumer behavior.
                        </p>
                        <AnimatedButton variant="outline" size="sm" className="w-full" asChild>
                          <Link href={`/faculty/business-${i + 1}`}>View Profile</Link>
                        </AnimatedButton>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </TabsContent>
            <TabsContent value="arts" className="mt-8">
              <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <StaggerItem key={i}>
                    <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                      <div className="aspect-square relative">
                        <Image
                          src={`/placeholder.svg?height=300&width=300&text=Arts+${i + 1}`}
                          alt={`Arts Professor ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Dr. James Wilson</CardTitle>
                        <CardDescription>Professor of English Literature</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Ph.D. in English with specialization in 20th century American literature and creative writing.
                        </p>
                        <AnimatedButton variant="outline" size="sm" className="w-full" asChild>
                          <Link href={`/faculty/arts-${i + 1}`}>View Profile</Link>
                        </AnimatedButton>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Faculty Research */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Faculty Research"
            description="Our faculty members are engaged in groundbreaking research across various disciplines."
          />

          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {[
              {
                title: "Artificial Intelligence and Machine Learning",
                researchers: "Dr. Jane Smith, Dr. Michael Johnson",
                image: "/placeholder.svg?height=200&width=400&text=AI+Research",
                description:
                  "Developing new algorithms for natural language processing and computer vision applications.",
              },
              {
                title: "Sustainable Business Practices",
                researchers: "Dr. Maria Rodriguez, Dr. David Lee",
                image: "/placeholder.svg?height=200&width=400&text=Sustainability",
                description:
                  "Investigating how businesses can implement environmentally sustainable practices while maintaining profitability.",
              },
              {
                title: "Modern American Literature",
                researchers: "Dr. James Wilson, Dr. Sarah Thompson",
                image: "/placeholder.svg?height=200&width=400&text=Literature",
                description: "Exploring themes of identity and social justice in contemporary American fiction.",
              },
            ].map((research, i) => (
              <StaggerItem key={i}>
                <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md">
                  <div className="aspect-video relative">
                    <Image
                      src={research.image || "/placeholder.svg"}
                      alt={research.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{research.title}</CardTitle>
                    <CardDescription>{research.researchers}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{research.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <div className="flex justify-center mt-8">
            <AnimatedButton variant="outline" asChild>
              <Link href="/about">View All Research</Link>
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Faculty Awards */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <FadeIn direction="right" className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Faculty Recognition</h2>
                <p className="text-muted-foreground">
                  Our faculty members have been recognized for their outstanding contributions to teaching, research,
                  and service.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  {
                    award: "National Science Foundation CAREER Award",
                    recipient: "Dr. Jane Smith, Computer Science",
                    year: "2023",
                  },
                  {
                    award: "Outstanding Teaching Award",
                    recipient: "Dr. Robert Chen, Physics",
                    year: "2022",
                  },
                  {
                    award: "Business Innovation Research Grant",
                    recipient: "Dr. Maria Rodriguez, Marketing",
                    year: "2023",
                  },
                  {
                    award: "Humanities Research Fellowship",
                    recipient: "Dr. James Wilson, English Literature",
                    year: "2022",
                  },
                  {
                    award: "Distinguished Service Award",
                    recipient: "Dr. Sarah Thompson, Psychology",
                    year: "2023",
                  },
                ].map((award, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-1"
                  >
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-primary h-2 w-2 mt-1"></div>
                      <h3 className="font-medium">{award.award}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground pl-4">
                      {award.recipient} ({award.year})
                    </p>
                  </motion.li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn direction="left" className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Faculty+Awards"
                width={600}
                height={400}
                alt="Faculty receiving awards"
                className="rounded-lg object-cover shadow-lg"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Join Our Faculty */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <FadeIn className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Faculty</h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              We're always looking for talented educators and researchers to join our academic community. Explore
              current faculty openings.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <AnimatedButton size="lg" asChild>
                <Link href="/contact">View Open Positions</Link>
              </AnimatedButton>
              <AnimatedButton variant="outline" size="lg" asChild>
                <Link href="/contact">Contact HR</Link>
              </AnimatedButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
