"use client"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const NewsCard = ({ title, date, excerpt, image, category, slug, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="relative">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
        {category && (
          <div className="absolute top-0 right-0 bg-yellow-500 text-[#006699] px-3 py-1 text-sm font-medium">
            {category}
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-[#006699] line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <Link
          to={`/news/${slug}`}
          className="inline-flex items-center text-[#006699] font-medium hover:text-[#005588] transition-colors"
        >
          Read More
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}

export default NewsCard
