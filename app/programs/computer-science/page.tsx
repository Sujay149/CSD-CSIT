import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, BookOpen, Code, Users, Briefcase, GraduationCap } from "lucide-react"

// Update the metadata to match SRKR CSD
export const metadata = {
  title: "Computer Science & Design (CSD) - CSD&IT Departments",
  description:
    "B.Tech in Computer Science & Design (CSD) at CSD&IT Departments - Develop computer science graduates who are well versed in Design Approaches and Digital Technologies.",
}

export default function ComputerSciencePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              {/* Update the hero section content */}
              <div className="space-y-2">
                <Link href="/programs" className="inline-flex items-center text-sm font-medium text-primary mb-2">
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Back to Programs
                </Link>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Computer Science & Design (CSD)</h1>
                <p className="text-xl text-muted-foreground">Bachelor of Technology</p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Develop computer science graduates who are well versed in Design Approaches and Digital Technologies
                  apart from Good Programming & Software Development skills.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">Apply Now</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Request Information</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Computer+Science"
                width={600}
                height={400}
                alt="Computer Science students working on coding projects"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="faculty">Faculty</TabsTrigger>
              <TabsTrigger value="careers">Careers</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-8 space-y-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                {/* Update the program overview section */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Program Overview</h2>
                  <p className="text-muted-foreground">
                    The B.Tech. in Computer Science and Design (CSD), with an intake of 60 seats, at SRKREC aims to
                    develop computer science graduates who are well versed in Design Approaches and Digital Technologies
                    apart from Good Programming & Software Development skills. The program has a small set of core
                    courses in CS and Design, and many electives which can be taken from Computer Science / IT / Other
                    Multidisciplinary Areas.
                  </p>
                  <p className="text-muted-foreground">
                    The program will prepare students to work in the IT industry as well as the digital media industry
                    like Gaming, Animation, Virtual / Augmented Reality, etc. Students are encouraged to set up their
                    own startups on campus.
                  </p>
                </div>
                <div className="space-y-4">
                  {/* Update the program highlights */}
                  <h2 className="text-2xl font-bold">Program Highlights</h2>
                  <ul className="space-y-2">
                    {[
                      "AICTE IDEA Lab, Innovation Centre, and On-Campus Start-ups",
                      "Technology Centre with 400+ Computer Lab, Servers, and 24x7 availability",
                      "Aligned with National Education Policy (NEP) 2020 pedagogy",
                      "On-Campus Internships from the first semester",
                      "Project-Based Curriculum focusing on creativity and innovation",
                      "Opportunities to develop web & mobile apps, games, and VR/AR applications",
                    ].map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="rounded-full bg-primary h-2 w-2 mt-2"></div>
                        <p>{highlight}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Update the program details cards */}
                {[
                  {
                    icon: <BookOpen className="h-10 w-10 text-primary" />,
                    title: "Program Length",
                    description: "4 years (8 semesters)",
                  },
                  {
                    icon: <Code className="h-10 w-10 text-primary" />,
                    title: "Learning Format",
                    description: "On-campus with hands-on labs",
                  },
                  {
                    icon: <Users className="h-10 w-10 text-primary" />,
                    title: "Intake",
                    description: "60 seats",
                  },
                  {
                    icon: <Briefcase className="h-10 w-10 text-primary" />,
                    title: "Approvals",
                    description: "AICTE New Delhi, JNTU Kakinada",
                  },
                ].map((item, i) => (
                  <Card key={i}>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      {item.icon}
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="curriculum" className="mt-8 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Curriculum</h2>
                <p className="text-muted-foreground">
                  Our curriculum is designed to provide a comprehensive education in computer science, covering both
                  theoretical foundations and practical applications. The program includes core computer science
                  courses, mathematics requirements, and electives that allow students to specialize in areas of
                  interest.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Core Courses</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      "Introduction to Computer Science",
                      "Data Structures and Algorithms",
                      "Computer Organization and Architecture",
                      "Operating Systems",
                      "Database Systems",
                      "Software Engineering",
                      "Programming Languages",
                      "Computer Networks",
                      "Web Development",
                      "Artificial Intelligence",
                    ].map((course, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 border rounded-md">
                        <GraduationCap className="h-4 w-4 text-primary" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Mathematics Requirements</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      "Calculus I",
                      "Calculus II",
                      "Discrete Mathematics",
                      "Linear Algebra",
                      "Probability and Statistics",
                      "Numerical Analysis",
                    ].map((course, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 border rounded-md">
                        <GraduationCap className="h-4 w-4 text-primary" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Specialization Tracks</h3>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      {
                        title: "Software Development",
                        courses: "Advanced Programming, Mobile App Development, Cloud Computing",
                      },
                      {
                        title: "Data Science",
                        courses: "Machine Learning, Big Data Analytics, Data Visualization",
                      },
                      {
                        title: "Cybersecurity",
                        courses: "Network Security, Cryptography, Ethical Hacking",
                      },
                    ].map((track, i) => (
                      <Card key={i}>
                        <CardHeader>
                          <CardTitle>{track.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{track.courses}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                <div>
                  {/* Update the focus skill areas section */}
                  <h3 className="text-xl font-bold mb-4">Focus Skill Areas</h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      "Innovative Product Design",
                      "Web & Mobile App Development",
                      "Game Development",
                      "Virtual / Augmented Reality",
                      "Startups / Entrepreneurship",
                      "Multimedia / Animation",
                      "Industry 4.0",
                      "Design Thinking",
                      "Internet of Things (IoT)",
                    ].map((course, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 border rounded-md">
                        <GraduationCap className="h-4 w-4 text-primary" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  {/* Update the salient features section */}
                  <h3 className="text-xl font-bold mb-4">Salient Features</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      "New National Education Policy (NEP) 2020 aligned Pedagogy",
                      "On-Campus Internships from First Semester",
                      "Modern Teaching Methodology",
                      "Project-Based Curriculum",
                      "Design & Development of new Web & Mobile Apps",
                      "Focused Skills - Creativity, Design & Development",
                      "Holistic Learning - Emotional Intelligence, Decision Making",
                      "Stress Free Education - Learning by Doing",
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 border rounded-md">
                        <GraduationCap className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="faculty" className="mt-8 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Faculty</h2>
                <p className="text-muted-foreground">
                  Our Computer Science program is led by distinguished faculty members who are experts in their fields,
                  with extensive industry experience and research accomplishments.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-square relative">
                      <Image
                        src={`/placeholder.svg?height=300&width=300&text=Professor+${i}`}
                        alt={`Professor ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Dr. Jane Smith</CardTitle>
                      <CardDescription>Associate Professor of Computer Science</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Ph.D. in Computer Science with expertise in artificial intelligence and machine learning.
                        Previously worked at Google AI Research.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="careers" className="mt-8 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Career Opportunities</h2>
                <p className="text-muted-foreground">
                  Graduates of our Computer Science program are well-prepared for a wide range of careers in the
                  technology industry, with strong job prospects and competitive salaries.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Software Developer",
                    description: "Design, build, and maintain software applications for various platforms.",
                    salary: "Average Starting Salary: $75,000",
                  },
                  {
                    title: "Data Scientist",
                    description: "Analyze and interpret complex data to inform business decisions.",
                    salary: "Average Starting Salary: $85,000",
                  },
                  {
                    title: "Cybersecurity Analyst",
                    description: "Protect computer systems and networks from security breaches.",
                    salary: "Average Starting Salary: $80,000",
                  },
                  {
                    title: "Web Developer",
                    description: "Create and maintain websites and web applications.",
                    salary: "Average Starting Salary: $70,000",
                  },
                  {
                    title: "Systems Analyst",
                    description: "Analyze and design information systems to meet organizational needs.",
                    salary: "Average Starting Salary: $72,000",
                  },
                  {
                    title: "AI/ML Engineer",
                    description: "Develop artificial intelligence and machine learning solutions.",
                    salary: "Average Starting Salary: $90,000",
                  },
                ].map((career, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <CardTitle>{career.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">{career.description}</p>
                      <p className="text-sm font-medium text-primary">{career.salary}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Industry Partners</h3>
                <p className="text-muted-foreground mb-4">
                  Our program has established partnerships with leading technology companies that provide internships,
                  job opportunities, and guest lectures.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-background p-4 rounded-md flex items-center justify-center">
                      <Image
                        src={`/placeholder.svg?height=60&width=120&text=Partner+${i}`}
                        width={120}
                        height={60}
                        alt={`Industry Partner ${i}`}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Student Projects */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Student Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our Computer Science students work on innovative projects that demonstrate their skills and creativity.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {[
              {
                title: "AI-Powered Health Assistant",
                student: "Senior Capstone Team",
                image: "/placeholder.svg?height=200&width=400&text=AI+Health+App",
                description:
                  "A mobile application that uses machine learning to provide personalized health recommendations.",
              },
              {
                title: "Smart Campus Navigation System",
                student: "Junior Design Team",
                image: "/placeholder.svg?height=200&width=400&text=Campus+Navigation",
                description: "An interactive map and navigation system for the college campus with real-time updates.",
              },
              {
                title: "Blockchain-Based Voting Platform",
                student: "Advanced Security Class",
                image: "/placeholder.svg?height=200&width=400&text=Blockchain+Voting",
                description: "A secure and transparent voting system built on blockchain technology.",
              },
            ].map((project, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.student}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Student Testimonials</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our Computer Science students about their experiences in the program.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="text-center">
                <CardHeader>
                  <div className="flex justify-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=100&width=100&text=Student+${i}`}
                        alt={`Student ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <CardTitle className="mt-4">Michael Johnson</CardTitle>
                  <CardDescription>Class of 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "The Computer Science program at Westview College provided me with both theoretical knowledge and
                    practical skills. The faculty are supportive and the opportunities for internships helped me secure
                    a job before graduation."
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Now */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Apply to our Computer Science program today and take the first step toward a rewarding career in
              technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <Button size="lg" asChild>
                <Link href="/contact">Apply Now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Schedule a Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
