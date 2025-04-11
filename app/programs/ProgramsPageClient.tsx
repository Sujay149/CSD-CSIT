"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { AnimatedButton } from "@/components/ui/animated-button"
import { SectionHeading } from "@/components/ui/section-heading"
import { ShapedImage } from "@/components/ui/shaped-image"

export default function ProgramsPageClient() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Academic Programs</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our diverse range of undergraduate and graduate programs designed to prepare you for success in
                your chosen field.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="undergraduate" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
              <TabsTrigger value="graduate">Graduate</TabsTrigger>
            </TabsList>
            <TabsContent value="undergraduate" className="mt-8">
              <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Computer Science",
                    degree: "Bachelor of Science",
                    image: "/placeholder.svg?height=200&width=400&text=Computer+Science",
                    description:
                      "A comprehensive program covering programming, algorithms, data structures, and software engineering principles.",
                    link: "/programs/computer-science",
                  },
                  {
                    title: "Business Administration",
                    degree: "Bachelor of Business",
                    image: "/placeholder.svg?height=200&width=400&text=Business",
                    description:
                      "Develop essential business skills in management, marketing, finance, and entrepreneurship.",
                    link: "/programs/business-administration",
                  },
                  {
                    title: "Psychology",
                    degree: "Bachelor of Arts",
                    image: "/placeholder.svg?height=200&width=400&text=Psychology",
                    description:
                      "Explore human behavior, cognitive processes, and psychological theories through research and practice.",
                    link: "/programs/psychology",
                  },
                  {
                    title: "Biology",
                    degree: "Bachelor of Science",
                    image: "/placeholder.svg?height=200&width=400&text=Biology",
                    description:
                      "Study living organisms, their structure, function, growth, and evolution through laboratory and field work.",
                    link: "/programs/biology",
                  },
                  {
                    title: "English Literature",
                    degree: "Bachelor of Arts",
                    image: "/placeholder.svg?height=200&width=400&text=English",
                    description:
                      "Analyze literary works, develop critical thinking, and master written and verbal communication.",
                    link: "/programs/english-literature",
                  },
                  {
                    title: "Engineering",
                    degree: "Bachelor of Science",
                    image: "/placeholder.svg?height=200&width=400&text=Engineering",
                    description:
                      "Apply scientific and mathematical principles to design and develop solutions to technical problems.",
                    link: "/programs/engineering",
                  },
                ].map((program, i) => (
                  <StaggerItem key={i}>
                    <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                      <div className="aspect-video relative">
                        <ShapedImage
                          src={program.image || "/placeholder.svg"}
                          alt={program.title}
                          width={400}
                          height={225}
                          shape={
                            i % 4 === 0
                              ? "hexagon"
                              : i % 4 === 1
                                ? "parallelogram"
                                : i % 4 === 2
                                  ? "pentagon"
                                  : "diamond"
                          }
                          className="w-full h-full"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{program.title}</CardTitle>
                        <CardDescription>{program.degree}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{program.description}</p>
                      </CardContent>
                      <CardFooter>
                        <AnimatedButton variant="outline" size="sm" className="w-full" asChild>
                          <Link href={program.link}>
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </AnimatedButton>
                      </CardFooter>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </TabsContent>
            <TabsContent value="graduate" className="mt-8">
              <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Data Science",
                    degree: "Master of Science",
                    image: "/placeholder.svg?height=200&width=400&text=Data+Science",
                    description:
                      "Advanced study of data analysis, machine learning, and statistical methods for solving complex problems.",
                    link: "/programs/data-science",
                  },
                  {
                    title: "MBA",
                    degree: "Master of Business Administration",
                    image: "/placeholder.svg?height=200&width=400&text=MBA",
                    description:
                      "Develop advanced leadership skills and business acumen for executive and management roles.",
                    link: "/programs/mba",
                  },
                  {
                    title: "Clinical Psychology",
                    degree: "Master of Arts",
                    image: "/placeholder.svg?height=200&width=400&text=Clinical+Psychology",
                    description:
                      "Prepare for professional practice with advanced study in assessment, therapy, and clinical research.",
                    link: "/programs/clinical-psychology",
                  },
                  {
                    title: "Environmental Science",
                    degree: "Master of Science",
                    image: "/placeholder.svg?height=200&width=400&text=Environmental+Science",
                    description:
                      "Study environmental systems, sustainability, and solutions to environmental challenges.",
                    link: "/programs/environmental-science",
                  },
                  {
                    title: "Education",
                    degree: "Master of Education",
                    image: "/placeholder.svg?height=200&width=400&text=Education",
                    description:
                      "Advanced study in educational theory, curriculum development, and instructional methods.",
                    link: "/programs/education",
                  },
                  {
                    title: "Public Health",
                    degree: "Master of Public Health",
                    image: "/placeholder.svg?height=200&width=400&text=Public+Health",
                    description:
                      "Prepare for leadership roles in public health policy, research, and program implementation.",
                    link: "/programs/public-health",
                  },
                ].map((program, i) => (
                  <StaggerItem key={i}>
                    <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                      <div className="aspect-video relative">
                        <ShapedImage
                          src={program.image || "/placeholder.svg"}
                          alt={program.title}
                          width={400}
                          height={225}
                          shape={
                            i % 4 === 0
                              ? "hexagon"
                              : i % 4 === 1
                                ? "parallelogram"
                                : i % 4 === 2
                                  ? "pentagon"
                                  : "diamond"
                          }
                          className="w-full h-full"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{program.title}</CardTitle>
                        <CardDescription>{program.degree}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{program.description}</p>
                      </CardContent>
                      <CardFooter>
                        <AnimatedButton variant="outline" size="sm" className="w-full" asChild>
                          <Link href={program.link}>
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </AnimatedButton>
                      </CardFooter>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Academic Departments */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Academic Departments"
            description="Our academic departments bring together faculty experts and resources to provide exceptional educational experiences."
          />

          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {[
              {
                name: "Science & Technology",
                image: "/placeholder.svg?height=200&width=200&text=Science",
                programs: "Computer Science, Biology, Physics, Mathematics",
              },
              {
                name: "Business & Economics",
                image: "/placeholder.svg?height=200&width=200&text=Business",
                programs: "Business Administration, Economics, Finance, Marketing",
              },
              {
                name: "Arts & Humanities",
                image: "/placeholder.svg?height=200&width=200&text=Arts",
                programs: "English, History, Philosophy, Fine Arts",
              },
              {
                name: "Social Sciences",
                image: "/placeholder.svg?height=200&width=200&text=Social+Sciences",
                programs: "Psychology, Sociology, Political Science, Anthropology",
              },
            ].map((dept, i) => (
              <StaggerItem key={i}>
                <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                  <div className="aspect-square relative">
                    <Image src={dept.image || "/placeholder.svg"} alt={dept.name} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{dept.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{dept.programs}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Program Features */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <FadeIn direction="right" className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Program+Features"
                width={600}
                height={400}
                alt="Students in a collaborative learning environment"
                className="rounded-lg object-cover shadow-lg"
              />
            </FadeIn>
            <FadeIn direction="left" className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Program Features</h2>
                <p className="text-muted-foreground">
                  All Westview College programs are designed with these key features to ensure student success.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  {
                    title: "Experiential Learning",
                    description: "Hands-on experiences through internships, research, and community projects.",
                  },
                  {
                    title: "Small Class Sizes",
                    description: "Average 15:1 student-to-faculty ratio for personalized attention and mentorship.",
                  },
                  {
                    title: "Industry Connections",
                    description: "Partnerships with leading companies for internships and career opportunities.",
                  },
                  {
                    title: "Global Perspective",
                    description: "Study abroad options and international curriculum integration.",
                  },
                  {
                    title: "Career Preparation",
                    description: "Resume building, interview preparation, and networking opportunities.",
                  },
                ].map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex gap-2"
                  >
                    <div className="rounded-full bg-primary h-2 w-2 mt-2"></div>
                    <div>
                      <h3 className="font-medium">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <FadeIn className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Apply?</h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Take the first step toward your future at Westview College. Our admissions team is here to help you
              through the process.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <AnimatedButton size="lg" asChild>
                <Link href="/contact">Apply Now</Link>
              </AnimatedButton>
              <AnimatedButton variant="outline" size="lg" asChild>
                <Link href="/contact">Request Information</Link>
              </AnimatedButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
