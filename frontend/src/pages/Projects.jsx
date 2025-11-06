import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import { projectsData, projectCategories } from '../data/projectsData'
import { useState, useEffect } from 'react'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [projects, setProjects] = useState([])

  // Load projects from localStorage or fallback to default data
  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolioProjects')
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects))
    } else {
      // Use the default projects data if nothing in localStorage
      setProjects(projectsData)
    }
  }, [])

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => 
                           tech.toLowerCase().includes(searchTerm.toLowerCase())
                         )
    return matchesCategory && matchesSearch
  })

  const getCategoryColor = (category) => {
    switch(category) {
      case 'frontend': return 'from-electric to-blue-500'
      case 'fullstack': return 'from-amber-500 to-orange-500'
      case 'backend': return 'from-green-500 to-emerald-500'
      default: return 'from-electric to-amber-500'
    }
  }

  return (
    <section className="min-h-screen pt-20 px-4 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-80 h-80 bg-electric/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.05, 0.1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-white">My </span>
              <span className="bg-gradient-to-r from-electric via-amber-400 to-amber-500 bg-clip-text text-transparent">Projects</span>
            </motion.h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              A collection of projects that showcase my skills and passion for building amazing web experiences.
              Each project tells a story of challenges overcome and lessons learned.
            </p>
          </div>
        </AnimatedSection>

        {/* Filters and Search */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 p-6 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 shadow-xl">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {projectCategories.map(category => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 border ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-electric to-amber-500 text-white shadow-lg shadow-electric/30 border-transparent'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border-gray-700 hover:border-electric/50'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                🔍
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent w-64 text-white placeholder-gray-400 transition-all duration-300"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <motion.div 
                className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-electric/50 overflow-hidden group transition-all duration-500 shadow-xl hover:shadow-electric/20"
                whileHover={{ y: -10, scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Project Image */}
                <div className="h-48 relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"
                    whileHover={{ opacity: 0.4 }}
                    transition={{ duration: 0.3 }}
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      ⭐ Featured
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}>
                      {project.category}
                    </span>
                  </div>
                  {/* Project Image Placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-gray-600">
                    <motion.div 
                      className="text-4xl opacity-30"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      💻
                    </motion.div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <motion.span 
                        key={tech}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs border border-gray-700 hover:border-electric/50 transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-electric to-blue-600 hover:from-blue-600 hover:to-electric text-white text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm shadow-lg shadow-electric/30"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Demo
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-gray-700 hover:border-amber-400 hover:bg-amber-400/10 text-gray-300 hover:text-amber-400 text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        GitHub
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <AnimatedSection>
            <div className="text-center py-16">
              <motion.div 
                className="text-6xl mb-4 text-gray-600"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🔍
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-300 mb-2">No projects found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          </AnimatedSection>
        )}

        {/* CTA Section */}
        <AnimatedSection delay={0.6}>
          <motion.div 
            className="mt-16 bg-gradient-to-r from-electric/10 to-amber-500/10 rounded-2xl p-8 border border-electric/30 text-center shadow-2xl"
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Like What You See?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. 
              Let's create something amazing together!
            </p>
            <motion.a
              href="/contact"
              className="inline-block bg-gradient-to-r from-electric to-amber-500 hover:from-amber-500 hover:to-electric text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-electric/30"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}