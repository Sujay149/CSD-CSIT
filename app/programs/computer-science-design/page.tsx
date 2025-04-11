import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/ui/section-heading"
import { ShapedImage } from "@/components/ui/shaped-image"
import { ArrowRight, Download, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "B.Tech Computer Science & Design",
  description: "Computer Science & Design program at CSD&IT Departments",
}

export default function CSDPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              B.Tech Program
            </div>
            <h1 className="text-4xl font-bold mb-4">Computer Science & Design (CSD)</h1>
            <p className="text-lg text-muted-foreground">
              Developing computer science graduates who are well versed in Design Approaches and Digital Technologies
              apart from Good Programming & Software Development skills.
            </p>
          </div>

          <div className="prose max-w-none mb-8">
            <p>
              The B.Tech. in Computer Science and Design (CSD), with an intake of 60 seats, at SRKREC aims to develop
              computer science graduates who are well versed in Design Approaches and Digital Technologies apart from
              Good Programming & Software Development skills. The program has a small set of core courses in CS and
              Design, and many electives which can be taken from Computer Science / IT / Other Multidisciplinary Areas.
            </p>
            <p>
              The program will prepare students to work in the IT industry as well as the digital media industry like
              Gaming, Animation, Virtual / Augmented Reality, etc. Students are encouraged to set up their own startups
              on campus.
            </p>
            <p>
              CSD will be run under the aegis of the successful Technology Centre, SRKREC (Etd. 2015). The centre is
              equipped wtih state-of-the-art infrastructure and labs including the AICTE IDEA Lab, Innovation Centre,
              On-Campus Start-ups, Technology Training, and 400+ Computer Lab with Servers, High Speed Internet, and
              24X7 availability.
            </p>
            <p>
              The students of CSD will have the opportunity to access all the resources of Technology Centre & the
              Startups and there by benefit extensively. Students trained earlier at Technology Centre have been placed
              in top MNCs like Amazon, Yahoo, Infosys, TCS, with high packages.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  Focus Skill Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-2">
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
                    "Stress-Free Education",
                    "Softskills / Life Skills",
                  ].map((skill, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                      <span className="text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  Salient Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "New National Education Policy (NEP) 2020 aligned Pedagogy",
                    "On-Campus Internships from First Semester",
                    "Modern Teaching Methodology",
                    "Project-Based Curriculum",
                    "Design & Development of new Web & Mobile Apps, Innovative Products, Games, and Applications by students",
                    "Focused Skills - Creativity, Design & Development, Critical Thinking, Innovation, Problem Solving, Entrepreneurship, Design Thinking, Leadership, Self Learning",
                    "Holistic Learning - Focus on Emotional Intelligence, Decision Making, Communication Skills, Life Skills, and Personality Development",
                    "Stress Free Education - Learning by Doing / Joyful Learning to be practiced",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <SectionHeading
            title="Student Achievements"
            description="Our students excel in various competitions and initiatives"
            accentText="Success Stories"
          />

          <div className="mb-12">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-6">
                  <CardTitle className="text-xl mb-4">
                    CSD Students Startup "Bhimavaram Online" adjudged Winners in NIT AP Startup Expo
                  </CardTitle>
                  <CardDescription className="text-base mb-4">
                    The student startup from CSD department received recognition for their innovative local business
                    solution that connects local businesses with customers in Bhimavaram.
                  </CardDescription>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="font-medium mr-2">Team Members:</span>
                      <span>Ravi Kumar, Priya Sharma, Karthik Reddy</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">Award:</span>
                      <span>First Prize at NIT AP Startup Expo 2023</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">Project:</span>
                      <span>Local Business Marketplace Platform</span>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto">
                  <ShapedImage
                    src="/images/achievements/startup-expo.jpg"
                    alt="CSD Students at Startup Expo"
                    width={500}
                    height={300}
                    shape="wave"
                    className="h-full"
                  />
                </div>
              </div>
            </Card>
          </div>

          <SectionHeading
            title="Events Conducted"
            description="Various events and workshops organized by the CSD department"
            accentText="Department Activities"
          />

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {[
              {
                title: "Design Thinking Workshop",
                date: "March 15, 2023",
                image: "/images/events/design-workshop.jpg",
              },
              {
                title: "Game Development Hackathon",
                date: "February 10, 2023",
                image: "/images/events/game-hackathon.jpg",
              },
              {
                title: "Industry 4.0 Seminar",
                date: "January 25, 2023",
                image: "/images/events/industry-seminar.jpg",
              },
            ].map((event, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-video relative">
                  <ShapedImage
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={225}
                    shape="rectangle"
                    className="w-full h-full"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.date}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <SectionHeading
            title="Picture Gallery"
            description="Glimpses of CSD department activities and facilities"
            accentText="Visual Tour"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { src: "/images/gallery/lab1.jpg", alt: "Computer Lab" },
              { src: "/images/gallery/students1.jpg", alt: "Students Working on Project" },
              { src: "/images/gallery/event1.jpg", alt: "Technical Event" },
              { src: "/images/gallery/facility1.jpg", alt: "Technology Centre" },
              { src: "/images/gallery/lab2.jpg", alt: "Design Lab" },
              { src: "/images/gallery/students2.jpg", alt: "Group Discussion" },
              { src: "/images/gallery/event2.jpg", alt: "Workshop Session" },
              { src: "/images/gallery/facility2.jpg", alt: "Innovation Centre" },
            ].map((img, i) => (
              <div key={i} className="aspect-square relative overflow-hidden rounded-lg">
                <ShapedImage
                  src={img.src}
                  alt={img.alt}
                  width={300}
                  height={300}
                  shape={i % 4 === 0 ? "square" : i % 4 === 1 ? "wave" : i % 4 === 2 ? "oval" : "trapezoid"}
                  className="w-full h-full transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-24 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Program Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-1">Degree</h4>
                  <p>Bachelor of Technology (B.Tech)</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Duration</h4>
                  <p>4 Years (8 Semesters)</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Intake</h4>
                  <p>60 Seats</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Eligibility</h4>
                  <p>10+2 with Mathematics, Physics, Chemistry</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Admission</h4>
                  <p>Through EAPCET / ECET (CODE: SRKR)</p>
                </div>
              </CardContent>
              <CardFooter>
                <Link
                  href="/brochure.pdf"
                  className="flex items-center text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Brochure
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-1">Address</h4>
                  <p className="text-sm">
                    Department of Computer Science & Design
                    <br />
                    2nd Floor, Technology Centre, Z-Block
                    <br />
                    CSD&IT Departments, Chinna Amiram
                    <br />
                    Bhimavaram, Andhra Pradesh 534204
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Phone</h4>
                  <p className="text-sm">9866600002, 9848427327</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Email</h4>
                  <p className="text-sm">csd@srkrec.edu.in</p>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="flex items-center text-primary hover:underline">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    { label: "Admission Process", href: "/admissions" },
                    { label: "Fee Structure", href: "/fee-structure" },
                    { label: "Scholarships", href: "/scholarships" },
                    { label: "Placement Records", href: "/placements" },
                    { label: "Faculty Profiles", href: "/faculty" },
                    { label: "Research Projects", href: "/research" },
                    { label: "Student Testimonials", href: "/testimonials" },
                    { label: "Campus Tour", href: "/campus" },
                  ].map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="text-sm flex items-center text-muted-foreground hover:text-primary transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary mr-2"></span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
