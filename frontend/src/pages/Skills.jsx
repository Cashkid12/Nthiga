import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "💻",
      gradient: "from-electric to-blue-500",
      skills: [
        { name: "React", level: "Advanced", icon: "⚛️" },
        { name: "JavaScript", level: "Advanced", icon: "🟨" },
        { name: "HTML5", level: "Expert", icon: "🌐" },
        { name: "CSS3/Tailwind", level: "Advanced", icon: "🎨" },
        { name: "Vite", level: "Proficient", icon: "⚡" }
      ]
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      gradient: "from-amber-500 to-orange-500",
      skills: [
        { name: "Node.js", level: "Advanced", icon: "🟢" },
        { name: "Express", level: "Advanced", icon: "🚂" },
        { name: "REST APIs", level: "Advanced", icon: "🔌" },
        { name: "Python", level: "Proficient", icon: "🐍" },
        { name: "Django", level: "Intermediate", icon: "🎯" }
      ]
    },
    {
      category: "Database & Tools",
      icon: "🗄️",
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "MongoDB", level: "Advanced", icon: "🍃" },
        { name: "PostgreSQL", level: "Proficient", icon: "🐘" },
        { name: "Git & GitHub", level: "Advanced", icon: "📦" },
        { name: "VS Code", level: "Expert", icon: "💙" },
        { name: "Linux", level: "Intermediate", icon: "🐧" }
      ]
    },
    {
      category: "Cybersecurity & Learning",
      icon: "🛡️",
      gradient: "from-red-500 to-pink-500",
      skills: [
        { name: "Web Security", level: "Learning", icon: "🔐" },
        { name: "Secure Coding", level: "Learning", icon: "✅" },
        { name: "Network Basics", level: "Learning", icon: "🌐" },
        { name: "Problem Solving", level: "Proficient", icon: "🧩" },
        { name: "Continuous Learning", level: "Expert", icon: "📚" }
      ]
    }
  ]

  const featuredSkills = [
    {
      icon: "🚀",
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks",
      gradient: "from-electric to-blue-500"
    },
    {
      icon: "🔒",
      title: "Security Focused",
      description: "Building with security best practices in mind",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: "💡",
      title: "Problem Solver",
      description: "Creative solutions for complex challenges",
      gradient: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section className="min-h-screen pt-20 px-4 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
            x: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-80 h-80 bg-electric/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.1, 0.05, 0.1],
            x: [0, -50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-900/30 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-white">My </span>
              <span className="bg-gradient-to-r from-electric via-amber-400 to-amber-500 bg-clip-text text-transparent">Skills</span>
            </motion.h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Continuously expanding my technical toolkit to build better, more secure applications. 
              Always learning, always growing.
            </p>
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.category} delay={categoryIndex * 0.2}>
              <motion.div 
                className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-electric/50 transition-all duration-500 group shadow-xl hover:shadow-electric/20"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <motion.div 
                    className={`text-2xl p-3 rounded-xl bg-gradient-to-r ${category.gradient} bg-opacity-10 border border-gray-700 group-hover:border-${category.gradient.split('-')[1]}-500/50 transition-all duration-300`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-electric transition-colors duration-300">
                      {category.category}
                    </h3>
                    <motion.div 
                      className={`w-12 h-1 bg-gradient-to-r ${category.gradient} rounded-full mt-2`}
                      animate={{ width: [48, 60, 48] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      className="relative group"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    >
                      <motion.div
                        className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-electric/50 transition-all duration-300 shadow-lg hover:shadow-electric/20"
                        whileHover={{ scale: 1.05, y: -3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <motion.span 
                              className="text-2xl"
                              animate={{
                                rotate: [0, 10, -10, 0]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: skillIndex * 0.3
                              }}
                            >
                              {skill.icon}
                            </motion.span>
                            <div>
                              <h5 className="font-semibold text-white group-hover:text-electric transition-colors duration-300">
                                {skill.name}
                              </h5>
                              <motion.span 
                                className={`text-xs font-medium px-2 py-1 rounded-full ${
                                  skill.level === 'Expert' ? 'bg-electric/20 text-electric border border-electric/30' :
                                  skill.level === 'Advanced' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                                  skill.level === 'Proficient' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                                  skill.level === 'Intermediate' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                                  'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                }`}
                                whileHover={{ scale: 1.1 }}
                              >
                                {skill.level}
                              </motion.span>
                            </div>
                          </div>
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: skillIndex * 0.2
                            }}
                          >
                            {skill.level === 'Expert' && <span className="text-electric text-xl">⭐</span>}
                            {skill.level === 'Advanced' && <span className="text-amber-400 text-xl">🔥</span>}
                            {skill.level === 'Proficient' && <span className="text-green-400 text-xl">✅</span>}
                            {skill.level === 'Intermediate' && <span className="text-blue-400 text-xl">💡</span>}
                            {skill.level === 'Learning' && <span className="text-purple-400 text-xl">📚</span>}
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Skill Level Legend */}
        <AnimatedSection delay={0.6}>
          <motion.div 
            className="mb-16 bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-lg font-bold text-white mb-4 text-center">Skill Level Guide</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div 
                className="flex items-center gap-2 bg-electric/10 px-4 py-2 rounded-full border border-electric/30"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xl">⭐</span>
                <span className="text-electric font-medium">Expert</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 bg-amber-500/10 px-4 py-2 rounded-full border border-amber-500/30"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xl">🔥</span>
                <span className="text-amber-400 font-medium">Advanced</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/30"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xl">✅</span>
                <span className="text-green-400 font-medium">Proficient</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/30"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xl">💡</span>
                <span className="text-blue-400 font-medium">Intermediate</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/30"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xl">📚</span>
                <span className="text-purple-400 font-medium">Learning</span>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Featured Skills */}
        <AnimatedSection delay={1.0}>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredSkills.map((skill, index) => (
              <motion.div 
                key={skill.title}
                className="text-center p-8 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-amber-500/50 transition-all duration-500 group shadow-xl hover:shadow-amber-500/20"
                whileHover={{ scale: 1.08, y: -8 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <motion.div 
                  className={`text-4xl mb-4 p-3 rounded-xl bg-gradient-to-r ${skill.gradient} bg-opacity-10 border border-${skill.gradient.split('-')[1]}-500/30 inline-block`}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, delay: index * 0.3 }
                  }}
                >
                  {skill.icon}
                </motion.div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-electric transition-colors duration-300">
                  {skill.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Learning Journey */}
        <AnimatedSection delay={1.2}>
          <motion.div 
            className="mt-16 bg-gradient-to-r from-electric/10 to-amber-500/10 rounded-2xl p-8 border border-electric/30 text-center shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and security practices to stay at the forefront of web development.
            </p>
            <div className="flex justify-center gap-4 mt-6 flex-wrap">
              {['Next.js', 'TypeScript', 'GraphQL', 'Docker', 'AWS'].map((tech) => (
                <motion.span 
                  key={tech} 
                  className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-electric/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3, borderColor: "rgba(30,144,255,0.5)" }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}