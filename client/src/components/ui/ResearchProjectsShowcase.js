"use client"

import { useState } from "react"

const researchProjects = [
  {
    id: 1,
    title: "AI-Powered Smart Campus System",
    department: "Computer Science & Design",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Development of an integrated smart campus system using AI and IoT technologies to enhance campus security, energy efficiency, and student experience.",
    investigators: ["Dr. Ramesh Kumar", "Dr. Priya Sharma"],
    funding: "₹45 Lakhs from DST, Government of India",
    duration: "2022-2025",
    achievements: [
      "Published 3 papers in international journals",
      "Filed 1 patent for the smart security system",
      "Implemented pilot project in campus main building",
    ],
    tags: ["AI", "IoT", "Smart Campus"],
  },
  {
    id: 2,
    title: "Sustainable Water Management Solutions",
    department: "Civil Engineering",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Research on innovative water conservation and management techniques suitable for urban areas in coastal Andhra Pradesh, with focus on rainwater harvesting and groundwater recharge.",
    investigators: ["Dr. Suresh Reddy", "Prof. Anand Verma"],
    funding: "₹32 Lakhs from Ministry of Water Resources",
    duration: "2021-2024",
    achievements: [
      "Developed new rainwater harvesting model",
      "Implemented in 5 villages near Bhimavaram",
      "Increased groundwater levels by 15% in test areas",
    ],
    tags: ["Water Conservation", "Sustainability", "Civil Engineering"],
  },
  {
    id: 3,
    title: "Next-Generation Renewable Energy Systems",
    department: "Electrical Engineering",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Development of hybrid solar-wind energy systems with advanced storage solutions for rural electrification in remote areas of Andhra Pradesh.",
    investigators: ["Dr. Lakshmi Narayana", "Dr. Kiran Rao"],
    funding: "₹38 Lakhs from Ministry of New and Renewable Energy",
    duration: "2022-2024",
    achievements: [
      "Developed prototype with 40% higher efficiency",
      "Implemented in 3 remote villages",
      "Reduced energy costs by 35% in test locations",
    ],
    tags: ["Renewable Energy", "Solar", "Rural Development"],
  },
  {
    id: 4,
    title: "Advanced Materials for Aerospace Applications",
    department: "Mechanical Engineering",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Research on lightweight composite materials with enhanced strength and heat resistance for aerospace applications, in collaboration with ISRO.",
    investigators: ["Dr. Venkat Rao", "Dr. Meenakshi Sundaram"],
    funding: "₹52 Lakhs from ISRO",
    duration: "2021-2024",
    achievements: [
      "Developed new composite with 25% weight reduction",
      "Testing phase with ISRO for satellite components",
      "Published research in 4 high-impact journals",
    ],
    tags: ["Aerospace", "Materials Science", "ISRO"],
  },
  {
    id: 5,
    title: "Machine Learning for Healthcare Diagnostics",
    department: "Computer Science & Design",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Development of ML algorithms for early detection of chronic diseases using minimal diagnostic data, with focus on rural healthcare applications.",
    investigators: ["Dr. Srinivas Rao", "Dr. Anjali Desai"],
    funding: "₹28 Lakhs from ICMR",
    duration: "2022-2025",
    achievements: [
      "Developed algorithm with 92% accuracy for diabetes prediction",
      "Testing in collaboration with 3 rural hospitals",
      "Mobile app prototype developed for healthcare workers",
    ],
    tags: ["Machine Learning", "Healthcare", "Rural Development"],
  },
]

const ResearchProjectsShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter
