import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

export default function About() {
  const skills = [
    { 
      name: 'Frontend Development', 
      icon: '💻', 
      description: 'React, JavaScript, HTML5, CSS3, Tailwind',
      color: 'from-electric to-blue-500'
    },
    { 
      name: 'Backend Development', 
      icon: '⚙️', 
      description: 'Node.js, Express, REST APIs, Python',
      color: 'from-amber-500 to-orange-500'
    },
    { 
      name: 'Cybersecurity', 
      icon: '🛡️', 
      description: 'Web security, Secure coding practices, Learning enthusiast',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Tools & DevOps', 
      icon: '🔧', 
      description: 'Git, VS Code, Linux, Docker basics',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const stats = [
    { number: '2+', label: 'Years Coding', icon: '🚀' },
    { number: '15+', label: 'Projects Completed', icon: '💼' },
    { number: '∞', label: 'Passion for Learning', icon: '💡' }
  ]

  return (
    <section className="min-h-screen pt-20 px-4 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.08, 0.03],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-electric/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.03, 0.08],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-white">About </span>
              <span className="bg-gradient-to-r from-electric via-amber-400 to-amber-500 bg-clip-text text-transparent">Me</span>
            </motion.h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Passionate developer crafting digital experiences with security and innovation at heart
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Bio Text */}
          <div className="space-y-6">
            <AnimatedSection delay={0.2}>
              <motion.div 
                className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-electric/50 transition-all duration-500 group shadow-xl hover:shadow-electric/10"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="w-2 h-8 bg-gradient-to-b from-electric to-amber-500 rounded-full"
                    animate={{
                      height: [32, 40, 32]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <h3 className="text-2xl font-bold text-white">My Journey</h3>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I'm a passionate <span className="text-electric font-semibold">self-taught software engineer</span> with a strong interest in cybersecurity. 
                    My journey in tech started with curiosity about how websites work, and has evolved into a love for building secure, efficient applications.
                  </p>
                  <p>
                    When I'm not coding, I'm exploring new technologies, contributing to open-source projects, 
                    and continuously learning about cybersecurity best practices to create safer digital experiences.
                  </p>
                  <p>
                    I believe in writing <span className="text-amber-400 font-semibold">clean, maintainable code</span> and building solutions that solve real-world problems 
                    while prioritizing security and user experience.
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
          
          {/* Skills Overview */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <AnimatedSection key={skill.name} delay={0.2 + index * 0.1}>
                <motion.div 
                  className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-amber-500/50 transition-all duration-500 group shadow-xl hover:shadow-amber-500/10"
                  whileHover={{ scale: 1.03, y: -3 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className={`text-2xl p-3 rounded-xl bg-gradient-to-r ${skill.color} bg-opacity-10 border border-gray-700 group-hover:border-${skill.color.split('-')[1]}-500/50 transition-all duration-300`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-electric transition-colors duration-300">
                        {skill.name}
                      </h4>
                      <p className="text-gray-400">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <AnimatedSection delay={0.6}>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center p-8 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-electric/50 transition-all duration-500 group shadow-xl hover:shadow-electric/20"
                whileHover={{ scale: 1.08, y: -8 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <motion.div 
                  className="text-4xl mb-4"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-4xl font-bold bg-gradient-to-r from-electric via-amber-400 to-amber-500 bg-clip-text text-transparent mb-2"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Passion Section */}
        <AnimatedSection delay={0.8}>
          <motion.div 
            className="mt-16 bg-gradient-to-r from-electric/10 to-amber-500/10 rounded-2xl p-8 border border-electric/30 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center">
              <motion.h3 
                className="text-2xl font-bold text-white mb-4"
                animate={{
                  textShadow: [
                    '0 0 10px rgba(30,144,255,0.3)',
                    '0 0 20px rgba(251,191,36,0.3)',
                    '0 0 10px rgba(30,144,255,0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                My Passion
              </motion.h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                I'm driven by the challenge of creating technology that not only works flawlessly but also 
                <span className="text-electric font-semibold"> protects users and their data</span>. Every line of code is an opportunity to build 
                something <span className="text-amber-400 font-semibold">secure, efficient, and meaningful</span>.
              </p>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}