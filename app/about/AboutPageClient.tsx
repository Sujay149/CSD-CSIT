"use client"
import { FadeIn } from "@/components/animations/fade-in"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Check, Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPageClient() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About CSD&IT Departments</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Discover our rich history, mission, vision, and values that drive our commitment to excellence in
                  education.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://tse1.mm.bing.net/th?id=OIP.spQ8s0k7DMwAit0k2DH_8AHaHa&pid=Api&P=0&h=180"
                width={600}
                height={400}
                alt="CSD&IT Departments campus aerial view"
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About CSD Department */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Department of Computer Science & Design"
            description="Developing graduates well versed in Design Approaches and Digital Technologies"
            accentText="CSD Department"
          />

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 mt-8">
            <FadeIn direction="right">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  The B.Tech. in Computer Science and Design (CSD), with an intake of 60 seats, at SRKREC aims to
                  develop computer science graduates who are well versed in Design Approaches and Digital Technologies
                  apart from Good Programming & Software Development skills. The program has a small set of core courses
                  in CS and Design, and many electives which can be taken from Computer Science / IT / Other
                  Multidisciplinary Areas.
                </p>
                <p className="text-muted-foreground">
                  The program will prepare students to work in the IT industry as well as the digital media industry
                  like Gaming, Animation, Virtual / Augmented Reality, etc. Students are encouraged to set up their own
                  startups on campus.
                </p>
                <p className="text-muted-foreground">
                  CSD will be run under the aegis of the successful Technology Centre, SRKREC (Etd. 2015). The centre is
                  equipped wtih state-of-the-art infrastructure and labs including the AICTE IDEA Lab, Innovation
                  Centre, On-Campus Start-ups, Technology Training, and 400+ Computer Lab with Servers, High Speed
                  Internet, and 24X7 availability.
                </p>
                <p className="text-muted-foreground">
                  The students of CSD will have the opportunity to access all the resources of Technology Centre & the
                  Startups and there by benefit extensively. Students trained earlier at Technology Centre have been
                  placed in top MNCs like Amazon, Yahoo, Infosys, TCS, with high packages.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div className="space-y-6">
                <Image
                  src="https://srkrec.edu.in/img/csd/csd_brochure_back.jpg"
                  width={600}
                  height={400}
                  alt="CSD Department at SRKR"
                  className="rounded-lg object-cover shadow-lg w-full"
                />
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Focus Skill Areas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>Innovative Product Design</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>Web & Mobile App Development</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>Game Development</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>Virtual / Augmented Reality</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Salient Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>NEP 2020 aligned Pedagogy</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>On-Campus Internships</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>Project-Based Curriculum</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>Stress-Free Education</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Technology Centre */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Technology Centre"
            description="State-of-the-art facilities for hands-on learning and innovation"
            accentText="Infrastructure"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card>
              <div className="aspect-video relative">
                <Image
                  src="https://srkrec.edu.in/img/gallery/idea_lab/5.jpeg"
                  alt="AICTE IDEA Lab"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>AICTE IDEA Lab</CardTitle>
                <CardDescription>Innovation hub for creative problem-solving</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our AICTE IDEA Lab provides students with tools and resources to prototype their innovative ideas and
                  develop practical solutions to real-world problems.
                </p>
              </CardContent>
            </Card>
            <Card>
              <div className="aspect-video relative">
                <Image
                  src="https://srkrec.edu.in/img/gallery/idea_lab/6.jpeg"
                  alt="Innovation Centre"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Innovation Centre</CardTitle>
                <CardDescription>Fostering creativity and entrepreneurship</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  The Innovation Centre serves as an incubator for student startups and projects, providing mentorship,
                  resources, and networking opportunities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <div className="aspect-video relative">
                <Image
                  src="https://tse1.mm.bing.net/th?id=OIP.jwCbnWcebSwRqGL1PNeFfwHaEL&pid=Api&P=0&h=180"
                  alt="Computer Labs"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>400+ Computer Lab</CardTitle>
                <CardDescription>24x7 access to cutting-edge technology</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our computer labs feature the latest hardware and software, with high-speed internet and 24/7
                  availability to support student learning and projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CSD */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Contact CSD Department"
            description="Get in touch with us for more information about our programs and facilities"
            accentText="Contact Us"
          />

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Department Address</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p>Department of Computer Science & Design</p>
                    <p>2nd Floor, Technology Centre, Z-Block</p>
                    <p>CSD&IT Departments, Chinna Amiram</p>
                    <p>Bhimavaram, Andhra Pradesh 534204</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p>Ph: 9866600002, 9848427327</p>
                    <p>Email: csd@srkrec.edu.in</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.7554430648716!2d81.5199!3d16.4433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37c06f34e0b5e3%3A0x9c3b0652d68d3e1e!2sSRKR%20Engineering%20College!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Download */}
      <section className="w-full py-12 md:py-16 bg-primary/5">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Download CSD Brochure</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get detailed information about our Computer Science & Design program, curriculum, and facilities in our
            comprehensive brochure.
          </p>
          <Link
            href="/brochures/csd-brochure.pdf"
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-10 px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-primary/90"
            download
          >
            Download Brochure
          </Link>
        </div>
      </section>
    </div>
  )
}
