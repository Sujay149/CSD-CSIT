"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Home } from "lucide-react"

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-9xl font-bold text-[#006699]">404</h1>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-8">The page you are looking for doesn't exist or has been moved.</p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-[#006699] text-white rounded-md hover:bg-[#005588] transition-colors"
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default NotFoundPage
