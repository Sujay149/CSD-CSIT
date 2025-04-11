"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Mail, Phone, Clock, Calendar } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { AnimatedButton } from "@/components/ui/animated-button"
import { SectionHeading } from "@/components/ui/section-heading"

export default function ContactPageClient() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're here to answer your questions and help you on your educational journey.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Options */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="admissions">Admissions</TabsTrigger>
              <TabsTrigger value="visit">Visit Us</TabsTrigger>
            </TabsList>
            <TabsContent value="general" className="mt-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <FadeIn direction="right" className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
                    <p className="text-muted-foreground">
                      Have questions about Westview College? We're here to help. Fill out the form and we'll get back to
                      you as soon as possible.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className="flex items-start gap-4"
                    >
                      <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-sm text-muted-foreground">123 College Avenue, Westview, CA 90210</p>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="flex items-start gap-4"
                    >
                      <Mail className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-sm text-muted-foreground">info@westviewcollege.edu</p>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="flex items-start gap-4"
                    >
                      <Phone className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="flex items-start gap-4"
                    >
                      <Clock className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-medium">Office Hours</h3>
                        <p className="text-sm text-muted-foreground">Monday-Friday: 8:00 AM - 5:00 PM</p>
                      </div>
                    </motion.div>
                  </div>
                </FadeIn>
                <FadeIn direction="left" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                    />
                  </div>
                  <AnimatedButton className="w-full">Send Message</AnimatedButton>
                </FadeIn>
              </div>
            </TabsContent>
            <TabsContent value="admissions" className="mt-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <FadeIn direction="right" className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Admissions</h2>
                    <p className="text-muted-foreground">
                      Ready to apply or have questions about the application process? Our admissions team is here to
                      help you through every step.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className="flex items-start gap-4"
                    >
                      <Mail className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-sm text-muted-foreground">admissions@westviewcollege.edu</p>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="flex items-start gap-4"
                    >
                      <Phone className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-sm text-muted-foreground">(555) 123-4569</p>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="flex items-start gap-4"
                    >
                      <Clock className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-medium">Office Hours</h3>
                        <p className="text-sm text-muted-foreground">Monday-Friday: 9:00 AM - 4:00 PM</p>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="flex items-start gap-4"
                    >
                      <Calendar className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-medium">Application Deadlines</h3>
                        <p className="text-sm text-muted-foreground">Fall Semester: May 1</p>
                        <p className="text-sm text-muted-foreground">Spring Semester: November 1</p>
                      </div>
                    </motion.div>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <AnimatedButton asChild>
                      <Link href="#">Apply Now</Link>
                    </AnimatedButton>
                    <AnimatedButton variant="outline" asChild>
                      <Link href="#">Request Information</Link>
                    </AnimatedButton>
                  </div>
                </FadeIn>
                <FadeIn direction="left" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name-admissions"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        id="name-admissions"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email-admissions"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        id="email-admissions"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Phone
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        id="phone"
                        type="tel"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your phone"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="program"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Program of Interest
                      </label>
                      <motion.select
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        id="program"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a program</option>
                        <option value="computer-science">Computer Science</option>
                        <option value="business">Business Administration</option>
                        <option value="psychology">Psychology</option>
                        <option value="other">Other</option>
                      </motion.select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="questions"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Questions or Comments
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      id="questions"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your questions or comments"
                    />
                  </div>
                  <AnimatedButton className="w-full">Request Information</AnimatedButton>
                </FadeIn>
              </div>
            </TabsContent>
            <TabsContent value="visit" className="mt-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <FadeIn direction="right" className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Visit Our Campus</h2>
                    <p className="text-muted-foreground">
                      Experience Westview College firsthand by scheduling a campus visit. We offer individual tours and
                      group information sessions.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className="flex items-start gap-4"
                    >
                      <Calendar className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-medium">Tour Schedule</h3>
                        <p className="text-sm text-muted-foreground">Monday-Friday: 10:00 AM, 1:00 PM, 3:00 PM</p>
                        <p className="text-sm text-muted-foreground">Saturday: 10:00 AM, 12:00 PM</p>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="flex items-start gap-4"
                    >
                      <Mail className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-sm text-muted-foreground">visits@westviewcollege.edu</p>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="flex items-start gap-4"
                    >
                      <Phone className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-sm text-muted-foreground">(555) 123-4570</p>
                      </div>
                    </motion.div>
                  </div>
                  <div className="aspect-video relative">
                    <Image
                      src="/placeholder.svg?height=300&width=500&text=Campus+Map"
                      alt="Campus map"
                      fill
                      className="object-cover rounded-lg shadow-md"
                    />
                  </div>
                </FadeIn>
                <FadeIn direction="left" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name-visit"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        id="name-visit"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email-visit"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        id="email-visit"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="phone-visit"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Phone
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        id="phone-visit"
                        type="tel"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your phone"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="visitors"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Number of Visitors
                      </label>
                      <motion.select
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        id="visitors"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5+">5+</option>
                      </motion.select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="visit-date"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Preferred Visit Date
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        id="visit-date"
                        type="date"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="visit-time"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Preferred Time
                      </label>
                      <motion.select
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        id="visit-time"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a time</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                      </motion.select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="comments"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Additional Comments
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      id="comments"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Any special requests or questions about your visit"
                    />
                  </div>
                  <AnimatedButton className="w-full">Schedule Visit</AnimatedButton>
                </FadeIn>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Find Us"
            description="Our campus is conveniently located in the heart of Westview, with easy access to public transportation."
          />

          <FadeIn className="mt-8 aspect-video relative rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=600&width=1200&text=Interactive+Campus+Map"
              alt="Interactive campus map"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatedButton size="lg" variant="outline" className="bg-background/80 backdrop-blur-sm">
                View Interactive Map
              </AnimatedButton>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Directions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  From Highway 101, take exit 25 and follow College Avenue for 2 miles. The main entrance will be on
                  your right.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Parking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Visitor parking is available in Lot A near the main entrance. Parking permits can be obtained at the
                  information kiosk.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Public Transportation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Bus routes 10 and 15 stop directly in front of campus. The nearest train station is a 10-minute walk
                  away.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Frequently Asked Questions"
            description="Find answers to common questions about contacting and visiting Westview College."
          />

          <div className="mx-auto max-w-3xl mt-8 space-y-4">
            {[
              {
                question: "How do I schedule a campus tour?",
                answer:
                  "You can schedule a campus tour by filling out the form on this page, calling our visit office at (555) 123-4570, or emailing visits@westviewcollege.edu.",
              },
              {
                question: "Is parking available for visitors?",
                answer:
                  "Yes, visitor parking is available in Lot A near the main entrance. Temporary parking permits are provided at the information kiosk.",
              },
              {
                question: "How can I contact the admissions office?",
                answer:
                  "You can reach our admissions office by phone at (555) 123-4569 or by email at admissions@westviewcollege.edu. Office hours are Monday through Friday, 9:00 AM to 4:00 PM.",
              },
              {
                question: "What should I bring when visiting campus?",
                answer:
                  "We recommend bringing a government-issued ID, comfortable walking shoes, and a list of questions you may have about our programs or campus life.",
              },
              {
                question: "Can I meet with faculty during my visit?",
                answer:
                  "Yes, meetings with faculty can be arranged with advance notice. Please indicate your interest when scheduling your visit.",
              },
            ].map((faq, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1} className="rounded-lg border p-6">
                <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
