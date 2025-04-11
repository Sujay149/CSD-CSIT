const mongoose = require("mongoose")

const ProgramSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  degree: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  fullDescription: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
    trim: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  programLength: {
    type: String,
    required: true,
  },
  learningFormat: {
    type: String,
    required: true,
  },
  intake: {
    type: Number,
    required: true,
  },
  approvals: [
    {
      type: String,
    },
  ],
  accreditations: [
    {
      type: String,
    },
  ],
  focusSkillAreas: [
    {
      title: String,
      description: String,
    },
  ],
  salientFeatures: [
    {
      title: String,
      description: String,
    },
  ],
  courses: [
    {
      title: String,
      description: String,
    },
  ],
  careerOpportunities: [
    {
      title: String,
      description: String,
      averageSalary: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("Program", ProgramSchema)
