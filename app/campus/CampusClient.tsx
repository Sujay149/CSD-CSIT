"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Building, Users, Coffee, Dumbbell, Home, Utensils, Wifi } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { AnimatedButton } from "@/components/ui/animated-button"
import { SectionHeading } from "@/components/ui/section-heading"

export default function CampusClient() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <FadeIn direction="right" className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Campus Life</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Experience a vibrant community with state-of-the-art facilities designed to enhance your learning and
                  living experience.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <AnimatedButton size="lg" asChild>
                  <Link href="/contact">Schedule a Visit</Link>
                </AnimatedButton>
                <AnimatedButton variant="outline" size="lg" asChild>
                  <Link href="#virtual-tour">Virtual Tour</Link>
                </AnimatedButton>
              </div>
            </FadeIn>
            <FadeIn direction="left" className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Campus+Overview"
                width={600}
                height={400}
                alt="Aerial view of CSD&IT Departments campus"
                className="rounded-lg object-cover shadow-lg"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Campus Facilities"
            description="Our modern campus provides state-of-the-art facilities to enhance your learning experience."
          />

          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <StaggerItem>
              <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Library"
                    alt="Library"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Library
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our extensive library houses over 100,000 books, digital resources, and quiet study spaces. Open
                    24/7 during exam periods with dedicated librarians to assist with research.
                  </p>
                </CardContent>
                <CardFooter>
                  <AnimatedButton variant="outline" size="sm" className="w-full">
                    Learn More
                  </AnimatedButton>
                </CardFooter>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Research+Labs"
                    alt="Research Labs"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Research Labs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Cutting-edge laboratories equipped with the latest technology for hands-on learning and research.
                    Specialized labs for computer science, biology, chemistry, and physics.
                  </p>
                </CardContent>
                <CardFooter>
                  <AnimatedButton variant="outline" size="sm" className="w-full">
                    Learn More
                  </AnimatedButton>
                </CardFooter>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Student+Center"
                    alt="Student Center"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Student Center
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A vibrant hub for student activities, dining, recreation, and collaborative spaces. The center
                    includes meeting rooms, lounge areas, and spaces for student organizations.
                  </p>
                </CardContent>
                <CardFooter>
                  <AnimatedButton variant="outline" size="sm" className="w-full">
                    Learn More
                  </AnimatedButton>
                </CardFooter>
              </Card>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* Housing */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <FadeIn direction="right" className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Student Housing</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Comfortable and convenient housing options designed to create a supportive living and learning
                  environment.
                </p>
              </div>
              <ul className="space-y-2">
                {[
                  {
                    icon: <Home className="h-5 w-5 text-primary" />,
                    title: "Residence Halls",
                    description:
                      "Traditional dormitory-style living for first-year students with community bathrooms and common areas.",
                  },
                  {
                    icon: <Building className="h-5 w-5 text-primary" />,
                    title: "Apartment-Style Living",
                    description:
                      "Fully furnished apartments with private bedrooms, shared living spaces, and kitchens for upperclassmen.",
                  },
                  {
                    icon: <Wifi className="h-5 w-5 text-primary" />,
                    title: "Modern Amenities",
                    description:
                      "High-speed internet, laundry facilities, study lounges, and 24/7 security in all housing options.",
                  },
                  {
                    icon: <Users className="h-5 w-5 text-primary" />,
                    title: "Living-Learning Communities",
                    description:
                      "Themed housing options where students with similar interests or majors live and learn together.",
                  },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2"
                  >
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
              <AnimatedButton asChild>
                <Link href="/contact">Housing Application</Link>
              </AnimatedButton>
            </FadeIn>
            <FadeIn direction="left" className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Student+Housing"
                width={600}
                height={400}
                alt="Student residence halls"
                className="rounded-lg object-cover shadow-lg"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Dining */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Campus Dining"
            description="Enjoy a variety of dining options across campus, featuring fresh, nutritious, and delicious meals."
          />

          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {[
              {
                name: "Main Dining Hall",
                icon: <Utensils className="h-10 w-10 text-primary" />,
                image: "/placeholder.svg?height=200&width=400&text=Dining+Hall",
                description:
                  "All-you-can-eat buffet with stations for international cuisine, grill, salad bar, and desserts.",
              },
              {
                name: "Campus Café",
                icon: <Coffee className="h-10 w-10 text-primary" />,
                image: "/placeholder.svg?height=200&width=400&text=Campus+Cafe",
                description:
                  "Grab-and-go options including sandwiches, salads, coffee, and pastries for students on the move.",
              },
              {
                name: "Food Court",
                icon: <Utensils className="h-10 w-10 text-primary" />,
                image: "/placeholder.svg?height=200&width=400&text=Food+Court",
                description: "Multiple restaurant options including pizza, sushi, Mexican, and vegetarian selections.",
              },
            ].map((dining, i) => (
              <StaggerItem key={i}>
                <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                  <div className="aspect-video relative">
                    <Image
                      src={dining.image || "/placeholder.svg"}
                      alt={dining.name}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    {dining.icon}
                    <CardTitle>{dining.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{dining.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.3} className="mt-8 p-6 bg-muted rounded-lg">
            <h3 className="text-xl font-bold mb-4">Meal Plans</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Unlimited",
                  price: "$2,200/semester",
                  features: "Unlimited meals, $200 dining dollars",
                },
                {
                  name: "14-Meal Plan",
                  price: "$1,800/semester",
                  features: "14 meals per week, $300 dining dollars",
                },
                {
                  name: "10-Meal Plan",
                  price: "$1,500/semester",
                  features: "10 meals per week, $400 dining dollars",
                },
              ].map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>{plan.price}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{plan.features}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Recreation */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Recreation & Wellness"
            description="Stay active and healthy with our comprehensive recreation and wellness facilities."
          />

          <Tabs defaultValue="fitness" className="w-full mt-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="fitness">Fitness Center</TabsTrigger>
              <TabsTrigger value="sports">Sports Facilities</TabsTrigger>
              <TabsTrigger value="wellness">Wellness Services</TabsTrigger>
            </TabsList>
            <TabsContent value="fitness" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <FadeIn direction="right" className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Fitness+Center"
                    width={600}
                    height={400}
                    alt="State-of-the-art fitness center"
                    className="rounded-lg object-cover shadow-lg"
                  />
                </FadeIn>
                <FadeIn direction="left" className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Fitness Center</h3>
                    <p className="text-muted-foreground">
                      Our 30,000 square foot fitness center features state-of-the-art equipment, group fitness classes,
                      and personal training services.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Cardio equipment (treadmills, ellipticals, bikes)",
                      "Free weights and weight machines",
                      "Dedicated stretching and functional training areas",
                      "Group fitness studios for yoga, cycling, and more",
                      "Indoor track for walking and running",
                    ].map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2"
                      >
                        <div className="rounded-full bg-primary h-2 w-2 mt-2"></div>
                        <p>{feature}</p>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2">
                    <Dumbbell className="h-5 w-5 text-primary" />
                    <p className="font-medium">Hours: Monday-Friday 6am-11pm, Weekends 8am-8pm</p>
                  </div>
                </FadeIn>
              </div>
            </TabsContent>
            <TabsContent value="sports" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <FadeIn direction="right" className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Sports+Facilities"
                    width={600}
                    height={400}
                    alt="Indoor and outdoor sports facilities"
                    className="rounded-lg object-cover shadow-lg"
                  />
                </FadeIn>
                <FadeIn direction="left" className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Sports Facilities</h3>
                    <p className="text-muted-foreground">
                      Our campus features comprehensive indoor and outdoor sports facilities for varsity athletics,
                      intramural sports, and recreational use.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      "Indoor basketball courts",
                      "Olympic-size swimming pool",
                      "Tennis courts",
                      "Soccer and baseball fields",
                      "Volleyball courts",
                      "Racquetball courts",
                      "Indoor running track",
                      "Outdoor track and field",
                    ].map((facility, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 p-2 border rounded-md hover:bg-background/80 transition-colors"
                      >
                        <div className="rounded-full bg-primary h-2 w-2"></div>
                        <span>{facility}</span>
                      </motion.div>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </TabsContent>
            <TabsContent value="wellness" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <FadeIn direction="right" className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Wellness+Center"
                    width={600}
                    height={400}
                    alt="Wellness center with counseling services"
                    className="rounded-lg object-cover shadow-lg"
                  />
                </FadeIn>
                <FadeIn direction="left" className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Wellness Services</h3>
                    <p className="text-muted-foreground">
                      We offer comprehensive wellness services to support the physical and mental health of our campus
                      community.
                    </p>
                  </div>
                  <ul className="space-y-4">
                    {[
                      {
                        title: "Health Center",
                        description: "On-campus medical care for illnesses, injuries, and preventive services.",
                      },
                      {
                        title: "Counseling Services",
                        description:
                          "Individual and group counseling, crisis intervention, and mental health workshops.",
                      },
                      {
                        title: "Nutrition Services",
                        description: "Consultations with registered dietitians for personalized nutrition plans.",
                      },
                      {
                        title: "Wellness Programs",
                        description: "Stress management, sleep education, and other wellness initiatives.",
                      },
                    ].map((service, i) => (
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
                          <h4 className="font-medium">{service.title}</h4>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Virtual Tour */}
      <section id="virtual-tour" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 text-center">
          <FadeIn className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Virtual Campus Tour</h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Can't visit in person? Explore our campus through our interactive virtual tour.
            </p>
            <div className="aspect-video relative mt-6 bg-muted rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=1000&text=Virtual+Tour+Video"
                fill
                alt="Virtual campus tour video placeholder"
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <AnimatedButton size="lg" variant="outline" className="bg-background/80 backdrop-blur-sm">
                  Start Tour
                </AnimatedButton>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <AnimatedButton asChild>
                <Link href="/contact">Schedule In-Person Visit</Link>
              </AnimatedButton>
              <AnimatedButton variant="outline" asChild>
                <Link href="/contact">Download Campus Map</Link>
              </AnimatedButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
