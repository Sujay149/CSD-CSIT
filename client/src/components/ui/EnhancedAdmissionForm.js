"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, AlertCircle, Upload, X, Info } from "lucide-react"

const EnhancedAdmissionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    education: {
      tenthBoard: "",
      tenthPercentage: "",
      tenthYear: "",
      twelfthBoard: "",
      twelfthPercentage: "",
      twelfthYear: "",
      entranceExam: "",
      entranceRank: "",
      entranceScore: "",
    },
    address: {
      street: "",
      city: "",
      state: "",
      pincode: "",
      country: "India",
    },
    dateOfBirth: "",
    gender: "",
    category: "",
    nationality: "Indian",
    howDidYouHear: "",
    message: "",
    documents: {
      photo: null,
      tenthCertificate: null,
      twelfthCertificate: null,
      entranceScoreCard: null,
      idProof: null,
    },
    agreeToTerms: false,
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [showHelp, setShowHelp] = useState(false)
  const fileInputRefs = {
    photo: useRef(null),
    tenthCertificate: useRef(null),
    twelfthCertificate: useRef(null),
    entranceScoreCard: useRef(null),
    idProof: useRef(null),
  }

  const totalSteps = 4

  const programs = [
    { value: "", label: "Select a program" },
    { value: "csd", label: "Computer Science & Design (CSD)" },
    { value: "cse", label: "Computer Science & Engineering" },
    { value: "ai-ds", label: "Artificial Intelligence & Data Science" },
    { value: "ece", label: "Electronics & Communication Engineering" },
    { value: "eee", label: "Electrical & Electronics Engineering" },
    { value: "mech", label: "Mechanical Engineering" },
    { value: "civil", label: "Civil Engineering" },
  ]

  const entranceExams = [
    { value: "", label: "Select an exam" },
    { value: "eapcet", label: "EAPCET" },
    { value: "jee", label: "JEE Main" },
    { value: "ecet", label: "ECET" },
    { value: "other", label: "Other" },
  ]

  const categories = [
    { value: "", label: "Select a category" },
    { value: "general", label: "General" },
    { value: "obc", label: "OBC" },
    { value: "sc", label: "SC" },
    { value: "st", label: "ST" },
    { value: "ews", label: "EWS" },
  ]

  const referralSources = [
    { value: "", label: "Select an option" },
    { value: "website", label: "College Website" },
    { value: "social-media", label: "Social Media" },
    { value: "newspaper", label: "Newspaper" },
    { value: "friend", label: "Friend or Family" },
    { value: "school", label: "School Counselor" },
    { value: "alumni", label: "Alumni" },
    { value: "other", label: "Other" },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target

    // Handle nested objects
    if (name.includes(".")) {
      const [parent, child] = name.split(".")
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }

    // Clear error when field is edited
    if (name.includes(".")) {
      const [parent, child] = name.split(".")
      if (errors[parent] && errors[parent][child]) {
        setErrors((prev) => ({
          ...prev,
          [parent]: {
            ...prev[parent],
            [child]: null,
          },
        }))
      }
    } else if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }))
    }
  }

  const handleFileChange = (e, documentType) => {
    const file = e.target.files[0]
    if (file) {
      // Check file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          documents: {
            ...prev.documents,
            [documentType]: "File size should not exceed 2MB",
          },
        }))
        return
      }

      // Check file type
      const validTypes = ["image/jpeg", "image/png", "application/pdf"]
      if (!validTypes.includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          documents: {
            ...prev.documents,
            [documentType]: "Only JPEG, PNG, and PDF files are allowed",
          },
        }))
        return
      }

      // Update form data
      setFormData((prev) => ({
        ...prev,
        documents: {
          ...prev.documents,
          [documentType]: file,
        },
      }))

      // Clear error
      if (errors.documents && errors.documents[documentType]) {
        setErrors((prev) => ({
          ...prev,
          documents: {
            ...prev.documents,
            [documentType]: null,
          },
        }))
      }
    }
  }

  const triggerFileInput = (documentType) => {
    fileInputRefs[documentType].current.click()
  }

  const removeFile = (documentType) => {
    setFormData((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        [documentType]: null,
      },
    }))
  }

  const validateStep = (step) => {
    const newErrors = {}

    switch (step) {
      case 1:
        // Personal Information
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"

        // Email validation
        if (!formData.email.trim()) {
          newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Email is invalid"
        }

        // Phone validation
        if (!formData.phone.trim()) {
          newErrors.phone = "Phone number is required"
        } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ""))) {
          newErrors.phone = "Phone number must be 10 digits"
        }

        // Date of birth validation
        if (!formData.dateOfBirth) {
          newErrors.dateOfBirth = "Date of birth is required"
        } else {
          const dob = new Date(formData.dateOfBirth)
          const today = new Date()
          const age = today.getFullYear() - dob.getFullYear()
          if (age < 16 || age > 30) {
            newErrors.dateOfBirth = "Age must be between 16 and 30 years"
          }
        }

        // Gender
        if (!formData.gender) {
          newErrors.gender = "Gender is required"
        }

        // Program validation
        if (!formData.program) {
          newErrors.program = "Please select a program"
        }

        // Category validation
        if (!formData.category) {
          newErrors.category = "Please select a category"
        }
        break

      case 2:
        // Education details
        if (!formData.education.tenthBoard.trim()) {
          newErrors.education = { ...newErrors.education, tenthBoard: "10th board is required" }
        }
        if (!formData.education.tenthPercentage.trim()) {
          newErrors.education = { ...newErrors.education, tenthPercentage: "10th percentage is required" }
        } else if (
          Number.parseFloat(formData.education.tenthPercentage) < 0 ||
          Number.parseFloat(formData.education.tenthPercentage) > 100
        ) {
          newErrors.education = { ...newErrors.education, tenthPercentage: "Percentage must be between 0 and 100" }
        }
        if (!formData.education.tenthYear.trim()) {
          newErrors.education = { ...newErrors.education, tenthYear: "10th year is required" }
        }

        if (!formData.education.twelfthBoard.trim()) {
          newErrors.education = { ...newErrors.education, twelfthBoard: "12th board is required" }
        }
        if (!formData.education.twelfthPercentage.trim()) {
          newErrors.education = { ...newErrors.education, twelfthPercentage: "12th percentage is required" }
        } else if (
          Number.parseFloat(formData.education.twelfthPercentage) < 0 ||
          Number.parseFloat(formData.education.twelfthPercentage) > 100
        ) {
          newErrors.education = { ...newErrors.education, twelfthPercentage: "Percentage must be between 0 and 100" }
        }
        if (!formData.education.twelfthYear.trim()) {
          newErrors.education = { ...newErrors.education, twelfthYear: "12th year is required" }
        }

        if (!formData.education.entranceExam) {
          newErrors.education = { ...newErrors.education, entranceExam: "Entrance exam is required" }
        }
        if (!formData.education.entranceRank.trim()) {
          newErrors.education = { ...newErrors.education, entranceRank: "Entrance rank is required" }
        }
        if (!formData.education.entranceScore.trim()) {
          newErrors.education = { ...newErrors.education, entranceScore: "Entrance score is required" }
        }
        break

      case 3:
        // Address validation
        if (!formData.address.street.trim()) {
          newErrors.address = { ...newErrors.address, street: "Street address is required" }
        }
        if (!formData.address.city.trim()) {
          newErrors.address = { ...newErrors.address, city: "City is required" }
        }
        if (!formData.address.state.trim()) {
          newErrors.address = { ...newErrors.address, state: "State is required" }
        }
        if (!formData.address.pincode.trim()) {
          newErrors.address = { ...newErrors.address, pincode: "PIN code is required" }
        } else if (!/^\d{6}$/.test(formData.address.pincode.replace(/[^0-9]/g, ""))) {
          newErrors.address = { ...newErrors.address, pincode: "PIN code must be 6 digits" }
        }
        break

      case 4:
        // Document validation
        if (!formData.documents.photo) {
          newErrors.documents = { ...newErrors.documents, photo: "Photo is required" }
        }
        if (!formData.documents.tenthCertificate) {
          newErrors.documents = { ...newErrors.documents, tenthCertificate: "10th certificate is required" }
        }
        if (!formData.documents.twelfthCertificate) {
          newErrors.documents = { ...newErrors.documents, twelfthCertificate: "12th certificate is required" }
        }
        if (!formData.documents.entranceScoreCard) {
          newErrors.documents = { ...newErrors.documents, entranceScoreCard: "Entrance score card is required" }
        }
        if (!formData.documents.idProof) {
          newErrors.documents = { ...newErrors.documents, idProof: "ID proof is required" }
        }

        // Terms agreement
        if (!formData.agreeToTerms) {
          newErrors.agreeToTerms = "You must agree to the terms and conditions"
        }
        break

      default:
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
    window.scrollTo(0, 0)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (validateStep(currentStep)) {
      setIsSubmitting(true)

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))

        if (onSubmit) {
          onSubmit(formData)
        }

        setIsSubmitted(true)
        // Reset form after submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          program: "",
          education: {
            tenthBoard: "",
            tenthPercentage: "",
            tenthYear: "",
            twelfthBoard: "",
            twelfthPercentage: "",
            twelfthYear: "",
            entranceExam: "",
            entranceRank: "",
            entranceScore: "",
          },
          address: {
            street: "",
            city: "",
            state: "",
            pincode: "",
            country: "India",
          },
          dateOfBirth: "",
          gender: "",
          category: "",
          nationality: "Indian",
          howDidYouHear: "",
          message: "",
          documents: {
            photo: null,
            tenthCertificate: null,
            twelfthCertificate: null,
            entranceScoreCard: null,
            idProof: null,
          },
          agreeToTerms: false,
        })
        setCurrentStep(1)
      } catch (error) {
        console.error("Error submitting form:", error)
        setErrors({
          form: "There was an error submitting your application. Please try again.",
        })
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const renderStepIndicator = () => {
    return (
      <div className="flex items-center justify-between mb-8">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                currentStep > index + 1
                  ? "bg-green-500 text-white"
                  : currentStep === index + 1
                    ? "bg-[#006699] text-white"
                    : "bg-gray-200 text-gray-500"
              }`}
            >
              {currentStep > index + 1 ? <Check className="h-5 w-5" /> : index + 1}
            </div>
            <div className="text-xs mt-2 text-center">
              {index === 0 && "Personal Info"}
              {index === 1 && "Education"}
              {index === 2 && "Address"}
              {index === 3 && "Documents"}
            </div>
            {index < totalSteps - 1 && (
              <div
                className={`h-1 w-16 ${currentStep > index + 1 ? "bg-green-500" : "bg-gray-200"} hidden md:block`}
                style={{ marginLeft: "40px" }}
              ></div>
            )}
          </div>
        ))}
      </div>
    )
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
      >
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Application Submitted Successfully!</h3>
        <p className="text-green-700 mb-4">
          Thank you for your interest in CSD&IT Departments. Our admissions team will review your application and
          contact you soon.
        </p>
        <p className="text-green-700 mb-6">
          Your application reference number:{" "}
          <span className="font-bold">
            SRKR-{new Date().getFullYear()}-{Math.floor(10000 + Math.random() * 90000)}
          </span>
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          Submit Another Application
        </button>
      </motion.div>
    )
  }

  return (
    <div className="relative">
      {/* Help button */}
      <button
        onClick={() => setShowHelp(!showHelp)}
        className="absolute top-0 right-0 p-2 text-[#006699] hover:text-[#005588] transition-colors"
        aria-label={showHelp ? "Hide help" : "Show help"}
      >
        <Info className="h-5 w-5" />
      </button>

      {/* Help panel */}
      <AnimatePresence>
        {showHelp && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-10 right-0 bg-white rounded-lg shadow-lg p-4 z-10 w-full max-w-md"
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-bold text-[#006699]">Application Help</h4>
              <button onClick={() => setShowHelp(false)} className="text-gray-500 hover:text-gray-700">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="text-sm text-gray-600 space-y-2">
              <p>
                <span className="font-medium">Step {currentStep}:</span>{" "}
                {currentStep === 1 && "Fill in your personal information and select your preferred program."}
                {currentStep === 2 &&
                  "Provide your educational background including 10th, 12th, and entrance exam details."}
                {currentStep === 3 && "Enter your complete address information."}
                {currentStep === 4 && "Upload required documents and review your application before submission."}
              </p>
              <p>
                Fields marked with <span className="text-red-500">*</span> are required.
              </p>
              <p>
                For assistance, contact our admissions office at{" "}
                <a href="mailto:admissions@srkrec.edu.in" className="text-[#006699] hover:underline">
                  admissions@srkrec.edu.in
                </a>{" "}
                or call{" "}
                <a href="tel:+918816223332" className="text-[#006699] hover:underline">
                  +91 8816 223332
                </a>
                .
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-6">
        {errors.form && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
            <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
            <p className="text-red-700">{errors.form}</p>
          </div>
        )}

        {renderStepIndicator()}

        {/* Step 1: Personal Information */}
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-medium text-[#006699] border-b pb-2">Personal Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${errors.firstName ? "border-red-300" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]`}
                  />
                  {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${errors.lastName ? "border-red-300" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]`}
                  />
                  {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${errors.email ? "border-red-300" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${errors.phone ? "border-red-300" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]`}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium mb-1">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${errors.dateOfBirth ? "border-red-300" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]`}
                  />
                  {errors.dateOfBirth && <p className="mt-1 text-sm text-red-500">{errors.dateOfBirth}</p>}
                </div>

                <div>
                  <label htmlFor="gender" className="block text-sm font-medium mb-1">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${errors.gender ? "border-red-300" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]`}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && <p className="mt-1 text-sm text-red-500">{errors.gender}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="program" className="block text-sm font-medium mb-1">
                    Program of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${errors.program ? "border-red-300" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]`}
                  >
                    {programs.map((program) => (
                      <option key={program.value} value={program.value}>
                        {program.label}
                      </option>
                    ))}
                  </select>
                  {errors.program && <p className="mt-1 text-sm text-red-500">{errors.program}</p>}
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium mb-1">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${errors.category ? "border-red-300" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]`}
                  >
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                  {errors.category && <p className="mt-1 text-sm text-red-500">{errors.category}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="howDidYouHear" className="block text-sm font-medium mb-1">
                  How did you hear about us?
                </label>
                <select
                  id="howDidYouHear"
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]"
                >
                  {referralSources.map((source) => (
                    <option key={source.value} value={source.value}>
                      {source.label}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 2: Education Details */}
        <AnimatePresence mode="wait">
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-medium text-[#006699] border-b pb-2">Educational Background</h3>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-4">10th Standard Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="tenthBoard" className="block text-sm font-medium mb-1">
                      Board <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="tenthBoard"
                      name="education.tenthBoard"
                      value={formData.education.tenthBoard}
                      onChange={handleChange}
                      className={`w-full rounded-md border ${errors.education?.tenthBoard ? "border-red-300" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]`}
                    />
                    {errors.education?.tenthBoard && (
                      <p className="mt-1 text-sm text-red-500">{errors.education.tenthBoard}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="tenthPercentage" className="block text-sm font-medium mb-1">
                      Percentage <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="tenthPercentage"
                      name="education.tenthPercentage"
                      value={formData.education.tenthPercentage}
                      onChange={handleChange}
                      min="0"
                      max="100"
                      step="0.01"
                      className={`w-full rounded-md border ${errors.education?.tenthPercentage ? "border-red-300" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]`}
                    />
                    {errors.education?.tenthPercentage && (
                      <p className="mt-1 text-sm text-red-500">{errors.education.tenthPercentage}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="tenthYear" className="block text-sm font-medium mb-1">
                      Year of Passing <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="tenthYear"
                      name="education.tenthYear"
                      value={formData.education.tenthYear}
                      onChange={handleChange}
                      min="2000"
                      max={new Date().getFullYear()}
                      className={`w-full rounded-md border ${errors.education?.tenthYear ? "border-red-300" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]`}
                    />
                    {errors.education?.tenthYear && (
                      <p className="mt-1 text-sm text-red-500">{errors.education.tenthYear}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-4">12th Standard Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="twelfthBoard" className="block text-sm font-medium mb-1">
                      Board <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="twelfthBoard"
                      name="education.twelfthBoard"
                      value={formData.education.twelfthBoard}
                      onChange={handleChange}
                      className={`w-full rounded-md border ${errors.education?.twelfthBoard ? "border-red-300" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]`}
                    />
                    {errors.education?.twelfthBoard && (
                      <p className="mt-1 text-sm text-red-500">{errors.education.twelfthBoard}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="twelfthPercentage" className="block text-sm font-medium mb-1">
                      Percentage <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="twelfthPercentage"
                      name="education.twelfthPercentage"
                      value={formData.education.twelfthPercentage}
                      onChange={handleChange}
                      min="0"
                      max="100"
                      step="0.01"
                      className={`w-full rounded-md border ${errors.education?.twelfthPercentage ? "border-red-300" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]`}
                    />
                    {errors.education?.twelfthPercentage && (
                      <p className="mt-1 text-sm text-red-500">{errors.education.twelfthPercentage}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="twelfthYear" className="block text-sm font-medium mb-1">
                      Year of Passing <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="twelfthYear"
                      name="education.twelfthYear"
                      value={formData.education.twelfthYear}
                      onChange={handleChange}
                      min="2000"
                      max={new Date().getFullYear()}
                      className={`w-full rounded-md border ${errors.education?.twelfthYear ? "border-red-300" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]`}
                    />
                    {errors.education?.twelfthYear && (
                      <p className="mt-1 text-sm text-red-500">{errors.education.twelfthYear}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-4">Entrance Examination Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="entranceExam" className="block text-sm font-medium mb-1">
                      Entrance Exam <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="entranceExam"
                      name="education.entranceExam"
                      value={formData.education.entranceExam}
                      onChange={handleChange}
                      className={`w-full rounded-md border ${errors.education?.entranceExam ? "border-red-300" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]`}
                    >
                      {entranceExams.map((exam) => (
                        <option key={exam.value} value={exam.value}>
                          {exam.label}
                        </option>
                      ))}
                    </select>
                    {errors.education?.entranceExam && (
                      <p className="mt-1 text-sm text-red-500">{errors.education.entranceExam}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="entranceRank" className="block text-sm font-medium mb-1">
                      Rank <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="entranceRank"
                      name="education.entranceRank"
                      value={formData.education.entranceRank}
                      onChange={handleChange}
                      className={`w-full rounded-md border ${errors.education?.entranceRank ? "border-red-300" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]`}
                    />
                    {errors.education?.entranceRank && (
                      <p className="mt-1 text-sm text-red-500">{errors.education.entranceRank}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="entranceScore" className="block text-sm font-medium mb-1">
                      Score <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="entranceScore"
                      name="education.entranceScore"
                      value={formData.education.entranceScore}
                      onChange={handleChange}
                      className={`w-full rounded-md border ${errors.education?.entranceScore ? "border-red-300" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]`}
                    />
                    {errors.education?.entranceScore && (
                      <p className="mt-1 text-sm text-red-500">{errors.education.entranceScore}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 3: Address Information */}
        <AnimatePresence mode="wait">
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-medium text-[#006699] border-b pb-2">Address Information</h3>

              <div>
                <label htmlFor="street" className="block text-sm font-medium mb-1">
                  Street Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="street"
                  name="address.street"
                  value={formData.address.street}
                  onChange={handleChange}
                  rows="2"
                  className={`w-full rounded-md border ${errors.address?.street ? "border-red-300" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]`}
                ></textarea>
                {errors.address?.street && <p className="mt-1 text-sm text-red-500">{errors.address.street}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium mb-1">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="address.city"
                    value={formData.address.city}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${errors.address?.city ? "border-red-300" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]`}
                  />
                  {errors.address?.city && <p className="mt-1 text-sm text-red-500">{errors.address.city}</p>}
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-medium mb-1">
                    State <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="address.state"
                    value={formData.address.state}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${errors.address?.state ? "border-red-300" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]`}
                  />
                  {errors.address?.state && <p className="mt-1 text-sm text-red-500">{errors.address.state}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="pincode" className="block text-sm font-medium mb-1">
                    PIN Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="address.pincode"
                    value={formData.address.pincode}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${errors.address?.pincode ? "border-red-300" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]`}
                  />
                  {errors.address?.pincode && <p className="mt-1 text-sm text-red-500">{errors.address.pincode}</p>}
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="address.country"
                    value={formData.address.country}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]"
                    readOnly
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Any additional information you'd like to share"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#006699]"
                ></textarea>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 4: Documents Upload */}
        <AnimatePresence mode="wait">
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-medium text-[#006699] border-b pb-2">Required Documents</h3>
              <p className="text-sm text-gray-600 mb-4">
                Please upload the following documents in JPEG, PNG, or PDF format. Maximum file size: 2MB.
              </p>

              <div className="space-y-4">
                {/* Photo Upload */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Passport Size Photo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    ref={fileInputRefs.photo}
                    onChange={(e) => handleFileChange(e, "photo")}
                    accept="image/jpeg,image/png,application/pdf"
                    className="hidden"
                  />
                  <div
                    className={`border-2 border-dashed rounded-md p-4 ${
                      formData.documents.photo
                        ? "border-green-300 bg-green-50"
                        : errors.documents?.photo
                          ? "border-red-300 bg-red-50"
                          : "border-gray-300 hover:border-[#006699]"
                    } transition-colors cursor-pointer`}
                    onClick={() => triggerFileInput("photo")}
                  >
                    {formData.documents.photo ? (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          <span className="text-sm">{formData.documents.photo.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            removeFile("photo")
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center">
                        <Upload className="h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-400 mt-1">JPEG, PNG or PDF (max. 2MB)</p>
                      </div>
                    )}
                  </div>
                  {errors.documents?.photo && <p className="mt-1 text-sm text-red-500">{errors.documents.photo}</p>}
                </div>

                {/* 10th Certificate Upload */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    10th Certificate <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    ref={fileInputRefs.tenthCertificate}
                    onChange={(e) => handleFileChange(e, "tenthCertificate")}
                    accept="image/jpeg,image/png,application/pdf"
                    className="hidden"
                  />
                  <div
                    className={`border-2 border-dashed rounded-md p-4 ${
                      formData.documents.tenthCertificate
                        ? "border-green-300 bg-green-50"
                        : errors.documents?.tenthCertificate
                          ? "border-red-300 bg-red-50"
                          : "border-gray-300 hover:border-[#006699]"
                    } transition-colors cursor-pointer`}
                    onClick={() => triggerFileInput("tenthCertificate")}
                  >
                    {formData.documents.tenthCertificate ? (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          <span className="text-sm">{formData.documents.tenthCertificate.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            removeFile("tenthCertificate")
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center">
                        <Upload className="h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-400 mt-1">JPEG, PNG or PDF (max. 2MB)</p>
                      </div>
                    )}
                  </div>
                  {errors.documents?.tenthCertificate && (
                    <p className="mt-1 text-sm text-red-500">{errors.documents.tenthCertificate}</p>
                  )}
                </div>

                {/* 12th Certificate Upload */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    12th Certificate <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    ref={fileInputRefs.twelfthCertificate}
                    onChange={(e) => handleFileChange(e, "twelfthCertificate")}
                    accept="image/jpeg,image/png,application/pdf"
                    className="hidden"
                  />
                  <div
                    className={`border-2 border-dashed rounded-md p-4 ${
                      formData.documents.twelfthCertificate
                        ? "border-green-300 bg-green-50"
                        : errors.documents?.twelfthCertificate
                          ? "border-red-300 bg-red-50"
                          : "border-gray-300 hover:border-[#006699]"
                    } transition-colors cursor-pointer`}
                    onClick={() => triggerFileInput("twelfthCertificate")}
                  >
                    {formData.documents.twelfthCertificate ? (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          <span className="text-sm">{formData.documents.twelfthCertificate.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            removeFile("twelfthCertificate")
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center">
                        <Upload className="h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-400 mt-1">JPEG, PNG or PDF (max. 2MB)</p>
                      </div>
                    )}
                  </div>
                  {errors.documents?.twelfthCertificate && (
                    <p className="mt-1 text-sm text-red-500">{errors.documents.twelfthCertificate}</p>
                  )}
                </div>

                {/* Entrance Score Card Upload */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Entrance Exam Score Card <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    ref={fileInputRefs.entranceScoreCard}
                    onChange={(e) => handleFileChange(e, "entranceScoreCard")}
                    accept="image/jpeg,image/png,application/pdf"
                    className="hidden"
                  />
                  <div
                    className={`border-2 border-dashed rounded-md p-4 ${
                      formData.documents.entranceScoreCard
                        ? "border-green-300 bg-green-50"
                        : errors.documents?.entranceScoreCard
                          ? "border-red-300 bg-red-50"
                          : "border-gray-300 hover:border-[#006699]"
                    } transition-colors cursor-pointer`}
                    onClick={() => triggerFileInput("entranceScoreCard")}
                  >
                    {formData.documents.entranceScoreCard ? (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          <span className="text-sm">{formData.documents.entranceScoreCard.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            removeFile("entranceScoreCard")
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center">
                        <Upload className="h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-400 mt-1">JPEG, PNG or PDF (max. 2MB)</p>
                      </div>
                    )}
                  </div>
                  {errors.documents?.entranceScoreCard && (
                    <p className="mt-1 text-sm text-red-500">{errors.documents.entranceScoreCard}</p>
                  )}
                </div>

                {/* ID Proof Upload */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    ID Proof (Aadhar/PAN/Passport) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    ref={fileInputRefs.idProof}
                    onChange={(e) => handleFileChange(e, "idProof")}
                    accept="image/jpeg,image/png,application/pdf"
                    className="hidden"
                  />
                  <div
                    className={`border-2 border-dashed rounded-md p-4 ${
                      formData.documents.idProof
                        ? "border-green-300 bg-green-50"
                        : errors.documents?.idProof
                          ? "border-red-300 bg-red-50"
                          : "border-gray-300 hover:border-[#006699]"
                    } transition-colors cursor-pointer`}
                    onClick={() => triggerFileInput("idProof")}
                  >
                    {formData.documents.idProof ? (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          <span className="text-sm">{formData.documents.idProof.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            removeFile("idProof")
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center">
                        <Upload className="h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-400 mt-1">JPEG, PNG or PDF (max. 2MB)</p>
                      </div>
                    )}
                  </div>
                  {errors.documents?.idProof && <p className="mt-1 text-sm text-red-500">{errors.documents.idProof}</p>}
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                    className={`h-4 w-4 mt-1 rounded border ${errors.agreeToTerms ? "border-red-300" : "border-gray-300"} focus:ring-[#006699]`}
                  />
                  <label htmlFor="agreeToTerms" className="ml-2 block text-sm">
                    I agree to the{" "}
                    <a href="#" className="text-[#006699] hover:underline">
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#006699] hover:underline">
                      Privacy Policy
                    </a>
                    . <span className="text-red-500">*</span>
                  </label>
                </div>
                {errors.agreeToTerms && <p className="mt-1 text-sm text-red-500">{errors.agreeToTerms}</p>}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="pt-4 flex justify-between">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-3 border border-[#006699] text-[#006699] rounded-md font-medium hover:bg-[#006699]/5 transition-colors"
            >
              Previous
            </button>
          )}
          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              className="ml-auto px-6 py-3 bg-[#006699] text-white rounded-md font-medium hover:bg-[#005588] transition-colors"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className={`ml-auto px-6 py-3 bg-[#006699] text-white rounded-md font-medium hover:bg-[#005588] transition-colors ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2"></span>
                  Submitting...
                </span>
              ) : (
                "Submit Application"
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default EnhancedAdmissionForm
