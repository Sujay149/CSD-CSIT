"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, BookOpen, Code, Beaker, PenTool, GraduationCap, Briefcase } from "lucide-react"

const CurriculumTimeline = ({ program }) => {
  const [expandedSemester, setExpandedSemester] = useState(1)
  const [expandedCourse, setExpandedCourse] = useState(null)

  const toggleSemester = (semester) => {
    setExpandedSemester(expandedSemester === semester ? null : semester)
    setExpandedCourse(null)
  }

  const toggleCourse = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId)
  }

  // Sample curriculum data for Computer Science & Design program
  const curriculum = {
    programName: "Computer Science & Design (CSD)",
    totalCredits: 160,
    semesters: [
      {
        number: 1,
        name: "First Semester",
        courses: [
          {
            id: "CS101",
            name: "Introduction to Programming",
            credits: 4,
            type: "Theory + Lab",
            description:
              "Fundamentals of programming using Python, covering basic syntax, data structures, and algorithms.",
            outcomes: [
              "Understand basic programming concepts",
              "Write simple programs using Python",
              "Implement basic data structures",
              "Solve problems using algorithmic thinking",
            ],
            icon: <Code />,
          },
          {
            id: "CS102",
            name: "Digital Logic Design",
            credits: 3,
            type: "Theory",
            description: "Introduction to digital logic, Boolean algebra, logic gates, and combinational circuits.",
            outcomes: [
              "Understand Boolean algebra and logic operations",
              "Design and analyze combinational logic circuits",
              "Implement sequential logic circuits",
              "Use hardware description languages",
            ],
            icon: <Beaker />,
          },
          {
            id: "DES101",
            name: "Design Thinking",
            credits: 3,
            type: "Theory + Studio",
            description: "Introduction to design thinking methodology and its application in problem-solving.",
            outcomes: [
              "Understand the design thinking process",
              "Apply empathy in problem identification",
              "Generate creative solutions through ideation",
              "Prototype and test design solutions",
            ],
            icon: <PenTool />,
          },
          {
            id: "MATH101",
            name: "Calculus and Linear Algebra",
            credits: 4,
            type: "Theory",
            description:
              "Mathematical foundations including differential calculus, integral calculus, and linear algebra.",
            outcomes: [
              "Apply differential and integral calculus",
              "Solve problems using linear algebra",
              "Understand mathematical modeling",
              "Apply mathematics to computer science problems",
            ],
            icon: <BookOpen />,
          },
        ],
      },
      {
        number: 2,
        name: "Second Semester",
        courses: [
          {
            id: "CS201",
            name: "Data Structures",
            credits: 4,
            type: "Theory + Lab",
            description: "Study of fundamental data structures and their implementations in Java.",
            outcomes: [
              "Implement and use arrays, linked lists, stacks, and queues",
              "Understand tree and graph data structures",
              "Analyze algorithm efficiency using Big O notation",
              "Select appropriate data structures for specific problems",
            ],
            icon: <Code />,
          },
          {
            id: "CS202",
            name: "Object-Oriented Programming",
            credits: 3,
            type: "Theory + Lab",
            description:
              "Principles of object-oriented programming using Java, including classes, inheritance, and polymorphism.",
            outcomes: [
              "Apply object-oriented design principles",
              "Implement classes and inheritance hierarchies",
              "Use polymorphism and abstraction",
              "Develop modular and reusable code",
            ],
            icon: <Code />,
          },
          {
            id: "DES201",
            name: "UI/UX Design Fundamentals",
            credits: 3,
            type: "Theory + Studio",
            description: "Introduction to user interface and user experience design principles and practices.",
            outcomes: [
              "Understand UI/UX design principles",
              "Create wireframes and prototypes",
              "Conduct usability testing",
              "Design user-centered interfaces",
            ],
            icon: <PenTool />,
          },
          {
            id: "MATH201",
            name: "Discrete Mathematics",
            credits: 3,
            type: "Theory",
            description:
              "Mathematical structures and techniques used in computer science, including logic, sets, and graph theory.",
            outcomes: [
              "Apply logical reasoning and proof techniques",
              "Understand set theory and relations",
              "Use graph theory for problem-solving",
              "Apply combinatorial analysis",
            ],
            icon: <BookOpen />,
          },
        ],
      },
      {
        number: 3,
        name: "Third Semester",
        courses: [
          {
            id: "CS301",
            name: "Algorithms",
            credits: 4,
            type: "Theory + Lab",
            description: "Design and analysis of algorithms, including sorting, searching, and graph algorithms.",
            outcomes: [
              "Analyze algorithm efficiency",
              "Apply divide-and-conquer strategies",
              "Implement dynamic programming solutions",
              "Solve problems using greedy algorithms",
            ],
            icon: <Code />,
          },
          {
            id: "CS302",
            name: "Database Systems",
            credits: 3,
            type: "Theory + Lab",
            description: "Fundamentals of database design, SQL, and database management systems.",
            outcomes: [
              "Design relational database schemas",
              "Write complex SQL queries",
              "Implement database normalization",
              "Understand transaction processing",
            ],
            icon: <Beaker />,
          },
          {
            id: "DES301",
            name: "Web Design and Development",
            credits: 4,
            type: "Theory + Studio",
            description:
              "Principles and practices of web design and front-end development using HTML, CSS, and JavaScript.",
            outcomes: [
              "Create responsive web designs",
              "Implement interactive web interfaces",
              "Apply modern CSS frameworks",
              "Develop single-page applications",
            ],
            icon: <PenTool />,
          },
          {
            id: "CS303",
            name: "Computer Organization",
            credits: 3,
            type: "Theory",
            description: "Study of computer architecture, including CPU design, memory hierarchy, and I/O systems.",
            outcomes: [
              "Understand computer architecture components",
              "Analyze CPU performance",
              "Explain memory hierarchy and caching",
              "Describe I/O and storage systems",
            ],
            icon: <Beaker />,
          },
        ],
      },
      {
        number: 4,
        name: "Fourth Semester",
        courses: [
          {
            id: "CS401",
            name: "Operating Systems",
            credits: 4,
            type: "Theory + Lab",
            description:
              "Principles and design of operating systems, including process management, memory management, and file systems.",
            outcomes: [
              "Understand process management techniques",
              "Explain memory management strategies",
              "Implement basic synchronization mechanisms",
              "Analyze file system organization",
            ],
            icon: <Code />,
          },
          {
            id: "CS402",
            name: "Software Engineering",
            credits: 3,
            type: "Theory + Lab",
            description: "Software development methodologies, requirements engineering, design patterns, and testing.",
            outcomes: [
              "Apply software development methodologies",
              "Gather and analyze requirements",
              "Implement design patterns",
              "Conduct software testing and quality assurance",
            ],
            icon: <Code />,
          },
          {
            id: "DES401",
            name: "Mobile App Design",
            credits: 3,
            type: "Theory + Studio",
            description:
              "Design and development of mobile applications with focus on user experience and interface design.",
            outcomes: [
              "Design mobile user interfaces",
              "Apply mobile design patterns",
              "Create prototypes for mobile apps",
              "Implement responsive mobile designs",
            ],
            icon: <PenTool />,
          },
          {
            id: "CS403",
            name: "Computer Networks",
            credits: 3,
            type: "Theory + Lab",
            description: "Fundamentals of computer networking, protocols, and network programming.",
            outcomes: [
              "Understand network architectures and protocols",
              "Implement socket programming",
              "Analyze network performance",
              "Configure basic network services",
            ],
            icon: <Beaker />,
          },
        ],
      },
      {
        number: 5,
        name: "Fifth Semester",
        courses: [
          {
            id: "CS501",
            name: "Artificial Intelligence",
            credits: 3,
            type: "Theory + Lab",
            description: "Introduction to artificial intelligence concepts, algorithms, and applications.",
            outcomes: [
              "Understand AI problem-solving approaches",
              "Implement search algorithms",
              "Apply knowledge representation techniques",
              "Develop basic machine learning models",
            ],
            icon: <Code />,
          },
          {
            id: "CS502",
            name: "Web Application Development",
            credits: 4,
            type: "Theory + Lab",
            description: "Advanced web development using modern frameworks and backend technologies.",
            outcomes: [
              "Build full-stack web applications",
              "Implement RESTful APIs",
              "Use modern JavaScript frameworks",
              "Deploy web applications to cloud platforms",
            ],
            icon: <Code />,
          },
          {
            id: "DES501",
            name: "Game Design",
            credits: 3,
            type: "Theory + Studio",
            description: "Principles of game design, mechanics, and development using game engines.",
            outcomes: [
              "Design engaging game mechanics",
              "Create game prototypes",
              "Implement game physics and AI",
              "Evaluate player experience",
            ],
            icon: <PenTool />,
          },
          {
            id: "CS503",
            name: "Information Security",
            credits: 3,
            type: "Theory",
            description: "Fundamentals of cybersecurity, cryptography, and secure software development.",
            outcomes: [
              "Understand security principles and threats",
              "Apply cryptographic techniques",
              "Implement secure coding practices",
              "Conduct basic security assessments",
            ],
            icon: <Beaker />,
          },
        ],
      },
      {
        number: 6,
        name: "Sixth Semester",
        courses: [
          {
            id: "CS601",
            name: "Machine Learning",
            credits: 4,
            type: "Theory + Lab",
            description: "Fundamentals of machine learning algorithms, models, and applications.",
            outcomes: [
              "Implement supervised learning algorithms",
              "Apply unsupervised learning techniques",
              "Evaluate model performance",
              "Solve real-world problems using ML",
            ],
            icon: <Code />,
          },
          {
            id: "DES601",
            name: "Virtual and Augmented Reality",
            credits: 3,
            type: "Theory + Studio",
            description: "Design and development of VR/AR applications and experiences.",
            outcomes: [
              "Design immersive VR/AR experiences",
              "Implement 3D interactions",
              "Create spatial user interfaces",
              "Develop for VR/AR platforms",
            ],
            icon: <PenTool />,
          },
          {
            id: "CS602",
            name: "Cloud Computing",
            credits: 3,
            type: "Theory + Lab",
            description: "Introduction to cloud computing concepts, services, and deployment models.",
            outcomes: [
              "Understand cloud service models",
              "Deploy applications to cloud platforms",
              "Implement serverless architectures",
              "Design scalable cloud solutions",
            ],
            icon: <Beaker />,
          },
          {
            id: "CS603",
            name: "Software Project Management",
            credits: 3,
            type: "Theory",
            description: "Principles and practices of managing software projects, teams, and resources.",
            outcomes: [
              "Apply project management methodologies",
              "Estimate project costs and schedules",
              "Manage software development teams",
              "Conduct risk assessment and mitigation",
            ],
            icon: <BookOpen />,
          },
        ],
      },
      {
        number: 7,
        name: "Seventh Semester",
        courses: [
          {
            id: "CS701",
            name: "Capstone Project I",
            credits: 6,
            type: "Project",
            description:
              "First phase of the capstone project focusing on problem definition, requirements, and design.",
            outcomes: [
              "Define project scope and objectives",
              "Gather and analyze requirements",
              "Design system architecture",
              "Create project plan and documentation",
            ],
            icon: <GraduationCap />,
          },
          {
            id: "CS702",
            name: "Entrepreneurship and Innovation",
            credits: 3,
            type: "Theory",
            description: "Fundamentals of technology entrepreneurship, innovation, and startup development.",
            outcomes: [
              "Develop business models for tech startups",
              "Apply lean startup methodology",
              "Create product pitches",
              "Understand funding and growth strategies",
            ],
            icon: <BookOpen />,
          },
          {
            id: "CS703",
            name: "Elective I",
            credits: 3,
            type: "Theory + Lab",
            description: "Specialized course based on student interest and career goals.",
            outcomes: [
              "Gain specialized knowledge in chosen area",
              "Apply advanced concepts to practical problems",
              "Develop expertise in emerging technologies",
              "Prepare for specific career paths",
            ],
            icon: <BookOpen />,
          },
          {
            id: "CS704",
            name: "Elective II",
            credits: 3,
            type: "Theory + Lab",
            description: "Specialized course based on student interest and career goals.",
            outcomes: [
              "Gain specialized knowledge in chosen area",
              "Apply advanced concepts to practical problems",
              "Develop expertise in emerging technologies",
              "Prepare for specific career paths",
            ],
            icon: <BookOpen />,
          },
        ],
      },
      {
        number: 8,
        name: "Eighth Semester",
        courses: [
          {
            id: "CS801",
            name: "Capstone Project II",
            credits: 6,
            type: "Project",
            description: "Second phase of the capstone project focusing on implementation, testing, and deployment.",
            outcomes: [
              "Implement designed solution",
              "Conduct thorough testing",
              "Deploy and document final product",
              "Present and defend project",
            ],
            icon: <GraduationCap />,
          },
          {
            id: "CS802",
            name: "Professional Ethics",
            credits: 2,
            type: "Theory",
            description: "Ethical considerations in computing, professional responsibility, and societal impact.",
            outcomes: [
              "Understand ethical issues in computing",
              "Apply ethical frameworks to decision-making",
              "Recognize professional responsibilities",
              "Evaluate societal impact of technology",
            ],
            icon: <BookOpen />,
          },
          {
            id: "CS803",
            name: "Elective III",
            credits: 3,
            type: "Theory + Lab",
            description: "Specialized course based on student interest and career goals.",
            outcomes: [
              "Gain specialized knowledge in chosen area",
              "Apply advanced concepts to practical problems",
              "Develop expertise in emerging technologies",
              "Prepare for specific career paths",
            ],
            icon: <BookOpen />,
          },
          {
            id: "CS804",
            name: "Industry Internship",
            credits: 4,
            type: "Internship",
            description: "Practical industry experience through internship at technology companies or startups.",
            outcomes: [
              "Apply academic knowledge in industry settings",
              "Gain practical work experience",
              "Develop professional networks",
              "Understand industry practices and expectations",
            ],
            icon: <Briefcase />,
          },
        ],
      },
    ],
  }

  // Get course icon based on course type
  const getCourseIcon = (course) => {
    if (course.icon) return course.icon

    switch (course.type) {
      case "Theory":
        return <BookOpen className="h-5 w-5 text-blue-500" />
      case "Theory + Lab":
        return <Code className="h-5 w-5 text-green-500" />
      case "Theory + Studio":
        return <PenTool className="h-5 w-5 text-purple-500" />
      case "Project":
        return <GraduationCap className="h-5 w-5 text-red-500" />
      default:
        return <BookOpen className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-[#006699] text-white p-4">
        <h3 className="text-lg font-bold">Curriculum: {curriculum.programName}</h3>
        <p className="text-sm text-white/80">Total Credits: {curriculum.totalCredits}</p>
      </div>

      <div className="p-4">
        <div className="space-y-4">
          {curriculum.semesters.map((semester) => (
            <div key={semester.number} className="border rounded-lg overflow-hidden">
              <div
                className={`p-4 flex justify-between items-center cursor-pointer ${
                  expandedSemester === semester.number ? "bg-[#006699] text-white" : "bg-gray-50 hover:bg-gray-100"
                }`}
                onClick={() => toggleSemester(semester.number)}
              >
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      expandedSemester === semester.number ? "bg-white text-[#006699]" : "bg-[#006699] text-white"
                    }`}
                  >
                    {semester.number}
                  </div>
                  <div>
                    <h4 className="font-medium">{semester.name}</h4>
                    <p
                      className={`text-sm ${expandedSemester === semester.number ? "text-white/80" : "text-gray-500"}`}
                    >
                      {semester.courses.length} Courses
                    </p>
                  </div>
                </div>
                {expandedSemester === semester.number ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </div>

              <AnimatePresence>
                {expandedSemester === semester.number && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 space-y-3">
                      {semester.courses.map((course) => (
                        <div key={course.id} className="border rounded-lg overflow-hidden">
                          <div
                            className={`p-3 flex justify-between items-center cursor-pointer hover:bg-gray-50 ${
                              expandedCourse === course.id ? "border-b" : ""
                            }`}
                            onClick={() => toggleCourse(course.id)}
                          >
                            <div className="flex items-center">
                              <div className="mr-3">{getCourseIcon(course)}</div>
                              <div>
                                <h5 className="font-medium">{course.name}</h5>
                                <div className="flex items-center text-xs text-gray-500 space-x-2">
                                  <span>{course.id}</span>
                                  <span>•</span>
                                  <span>{course.credits} Credits</span>
                                  <span>•</span>
                                  <span>{course.type}</span>
                                </div>
                              </div>
                            </div>
                            {expandedCourse === course.id ? (
                              <ChevronUp className="h-4 w-4 text-gray-500" />
                            ) : (
                              <ChevronDown className="h-4 w-4 text-gray-500" />
                            )}
                          </div>

                          <AnimatePresence>
                            {expandedCourse === course.id && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="p-4 bg-gray-50">
                                  <p className="text-sm text-gray-700 mb-4">{course.description}</p>

                                  <h6 className="text-sm font-medium mb-2">Course Outcomes:</h6>
                                  <ul className="space-y-1 pl-5 list-disc text-sm text-gray-600">
                                    {course.outcomes.map((outcome, index) => (
                                      <li key={index}>{outcome}</li>
                                    ))}
                                  </ul>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CurriculumTimeline
