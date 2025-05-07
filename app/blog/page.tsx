"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, Calendar, User, ArrowRight, BookOpen, Clock, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = [
  "Digital Marketing",
  "Social Media",
  "Content Strategy",
  "SEO",
  "Branding",
  "Photography",
  "Design",
  "Business Growth",
]

const blogPosts = [
  {
    id: "social-media-strategies",
    title: "10 Essential Social Media Strategies for Startups",
    excerpt:
      "Learn the key social media strategies that can help your startup gain traction and build a strong online presence.",
    date: "May 2, 2023",
    author: "Sarah Johnson",
    category: "Social Media",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "8 min read",
  },
  {
    id: "content-converts",
    title: "How to Create Content That Converts",
    excerpt:
      "Discover proven techniques for creating content that not only engages your audience but also drives conversions for your business.",
    date: "April 18, 2023",
    author: "Michael Chen",
    category: "Content Strategy",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "6 min read",
  },
  {
    id: "digital-marketing-guide",
    title: "The Ultimate Guide to Digital Marketing for New Businesses",
    excerpt:
      "A comprehensive guide to help new businesses establish a strong digital presence and reach their target audience effectively.",
    date: "April 5, 2023",
    author: "Emma Wilson",
    category: "Digital Marketing",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "12 min read",
  },
  {
    id: "seo-techniques",
    title: "5 Advanced SEO Techniques to Boost Your Website Traffic",
    excerpt:
      "Take your SEO strategy to the next level with these advanced techniques that can significantly increase your website traffic.",
    date: "March 22, 2023",
    author: "David Rodriguez",
    category: "SEO",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "7 min read",
  },
  {
    id: "brand-identity",
    title: "Building a Strong Brand Identity in a Competitive Market",
    excerpt:
      "Learn how to develop a distinctive brand identity that helps your business stand out in a crowded marketplace.",
    date: "March 10, 2023",
    author: "Jessica Lee",
    category: "Branding",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "9 min read",
  },
  {
    id: "product-photography",
    title: "Product Photography Tips That Will Transform Your E-commerce Store",
    excerpt:
      "Discover professional product photography techniques that can enhance your product listings and increase sales.",
    date: "February 28, 2023",
    author: "Ryan Thompson",
    category: "Photography",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "5 min read",
  },
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [hoveredPost, setHoveredPost] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "list" | "compact">("grid")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50 mt-[80px]">
      {/* Hero Section with Enhanced Design */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/20"
            >
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-blue-300 text-sm font-medium">
                Expert Marketing Insights
              </span>
              <Star className="w-5 h-5 text-yellow-400" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Explore Our Latest{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Marketing Insights
                </span>
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-lg"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay ahead with expert tips, industry trends, and actionable strategies for digital success.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-6 bg-white/10 border-white/20 text-white placeholder:text-blue-200 rounded-xl"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <Card className="overflow-hidden border-0 shadow-lg bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6 text-blue-700">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <motion.button
                          key={category}
                          whileHover={{ x: 5 }}
                          onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                          className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                            category === selectedCategory
                              ? "bg-blue-50 text-blue-700 font-medium"
                              : "hover:bg-gray-50 text-gray-600"
                          }`}
                        >
                          <span className="flex items-center">
                            <ChevronRight className={`w-4 h-4 mr-2 transition-transform ${
                              category === selectedCategory ? "rotate-90" : ""
                            }`} />
                            {category}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              {/* View Mode Selector with Animation */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory || "All Articles"}
                </h2>
                <Tabs
                  defaultValue="grid"
                  value={viewMode}
                  onValueChange={(value) => setViewMode(value as "grid" | "list" | "compact")}
                  className="w-[400px]"
                >
                  <TabsList className="w-full bg-gradient-to-br from-gray-50 to-blue-50 p-1 rounded-2xl backdrop-blur-sm border border-gray-200">
                    <motion.div className="flex w-full gap-2" initial={false}>
                      <TabsTrigger
                        value="grid"
                        className="relative flex-1 data-[state=active]:bg-white data-[state=active]:shadow-lg rounded-xl py-4 transition-all"
                      >
                        <motion.div
                          className="flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.span
                            animate={{ rotate: viewMode === "grid" ? 15 : 0 }}
                            className="inline-block"
                          >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="3" y="3" width="7" height="7" />
                              <rect x="14" y="3" width="7" height="7" />
                              <rect x="3" y="14" width="7" height="7" />
                              <rect x="14" y="14" width="7" height="7" />
                            </svg>
                          </motion.span>
                          Grid
                        </motion.div>
                        {viewMode === "grid" && (
                          <motion.div
                            className="absolute inset-0 border-2 border-blue-200 rounded-xl"
                            layoutId="viewModeIndicator"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 25
                            }}
                          />
                        )}
                      </TabsTrigger>

                      <TabsTrigger
                        value="list"
                        className="relative flex-1 data-[state=active]:bg-white data-[state=active]:shadow-lg rounded-xl py-3 transition-all"
                      >
                        <motion.div
                          className="flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.span
                            animate={{ rotate: viewMode === "list" ? 15 : 0 }}
                            className="inline-block"
                          >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <line x1="3" y1="6" x2="21" y2="6" />
                              <line x1="3" y1="12" x2="21" y2="12" />
                              <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                          </motion.span>
                          List
                        </motion.div>
                        {viewMode === "list" && (
                          <motion.div
                            className="absolute inset-0 border-2 border-blue-200 rounded-xl"
                            layoutId="viewModeIndicator"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 25
                            }}
                          />
                        )}
                      </TabsTrigger>

                      <TabsTrigger
                        value="compact"
                        className="relative flex-1 data-[state=active]:bg-white data-[state=active]:shadow-lg rounded-xl py-3 transition-all"
                      >
                        <motion.div
                          className="flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.span
                            animate={{ rotate: viewMode === "compact" ? 15 : 0 }}
                            className="inline-block"
                          >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <line x1="3" y1="6" x2="21" y2="6" />
                              <line x1="3" y1="10" x2="21" y2="10" />
                              <line x1="3" y1="14" x2="21" y2="14" />
                              <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                          </motion.span>
                          Compact
                        </motion.div>
                        {viewMode === "compact" && (
                          <motion.div
                            className="absolute inset-0 border-2 border-blue-200 rounded-xl"
                            layoutId="viewModeIndicator"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 25
                            }}
                          />
                        )}
                      </TabsTrigger>
                    </motion.div>
                  </TabsList>
                </Tabs>
              </div>

              {/* Posts Container */}
              <motion.div
                layout
                className={`
                  ${viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : ""}
                  ${viewMode === "list" ? "space-y-6" : ""}
                  ${viewMode === "compact" ? "space-y-4" : ""}
                `}
                transition={{
                  type: "spring",
                  bounce: 0.25,
                  duration: 0.5
                }}
              >
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      type: "spring",
                      bounce: 0.3,
                      delay: index * 0.05,
                      duration: 0.6
                    }}
                    layout
                  >
                    <Link href={`/blog/${post.id}`}>
                      {viewMode === "grid" && (
                        <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                          <CardContent className="p-0">
                            <div className="relative h-48 w-full">
                              <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="p-6 space-y-4">
                              <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                                {post.category}
                              </Badge>
                              <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                                {post.title}
                              </h3>
                              <p className="text-gray-600 line-clamp-3">
                                {post.excerpt}
                              </p>
                              <div className="flex items-center justify-between text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4" />
                                  {post.date}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4" />
                                  {post.readTime}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      {viewMode === "list" && (
                        <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                          <CardContent className="p-6 flex gap-6">
                            <div className="relative h-40 w-60 flex-shrink-0">
                              <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover rounded-lg"
                              />
                            </div>
                            <div className="flex-1 space-y-4">
                              <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                                {post.category}
                              </Badge>
                              <h3 className="text-2xl font-bold text-gray-900">
                                {post.title}
                              </h3>
                              <p className="text-gray-600">
                                {post.excerpt}
                              </p>
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4" />
                                  {post.date}
                                </div>
                                <div className="flex items-center gap-2">
                                  <User className="w-4 h-4" />
                                  {post.author}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4" />
                                  {post.readTime}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      {viewMode === "compact" && (
                        <Card className="overflow-hidden border-0 shadow hover:shadow-md transition-all duration-300">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-4">
                              <Badge variant="secondary" className="bg-blue-50 text-blue-700 flex-shrink-0">
                                {post.category}
                              </Badge>
                              <h3 className="text-lg font-semibold text-gray-900 flex-1">
                                {post.title}
                              </h3>
                              <div className="flex items-center gap-2 text-sm text-gray-500">
                                <Calendar className="w-4 h-4" />
                                {post.date}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
