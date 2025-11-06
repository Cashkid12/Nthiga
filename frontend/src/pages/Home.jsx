import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import DownloadCV from '../components/DownloadCV'

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden bg-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.1, 0.05, 0.1],
            rotate: [90, 0, 90]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,144,255,0.03),transparent_70%)]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-electric/40 rounded-full"
            animate={{
              y: [0, -150, 0],
              x: [0, Math.sin(i) * 80, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <AnimatedSection delay={0.2}>
          {/* Profile Image with Glow */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.1, type: "spring", bounce: 0.4 }}
            className="w-40 h-40 mx-auto mb-8 relative"
          >
            <motion.div 
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-electric rounded-full blur-2xl" 
            />
            <div className="w-40 h-40 rounded-full border-4 border-gray-900 bg-gradient-to-br from-electric to-blue-600 shadow-2xl shadow-electric/30 overflow-hidden relative">
              {/* Replace with your actual profile image */}
              <div className="w-full h-full bg-gradient-to-br from-electric to-blue-600 flex items-center justify-center text-white text-5xl font-bold">
                JN
              </div>
              {/* Uncomment below if you have a profile image */}
              {/* <img src="/images/profile/joe-profile.jpg" alt="Joe Nthiga" className="w-full h-full object-cover" /> */}
            </div>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-white">Joe</span>
            <motion.span 
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              className="bg-gradient-to-r from-electric via-blue-400 to-electric bg-clip-text text-transparent bg-[length:200%_auto]"
            >
              {" "}Nthiga
            </motion.span>
          </motion.h1>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.span 
              animate={{
                color: ['#1E90FF', '#60A5FA', '#1E90FF']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="font-semibold"
            >
              Full-Stack Developer
            </motion.span> & Cybersecurity Learner
          </motion.p>
        </AnimatedSection>

        <AnimatedSection delay={0.8}>
          <motion.p 
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Crafting <span className="text-electric font-semibold">secure, scalable applications</span> with 
            modern technologies. Passionate about building digital solutions that 
            <span className="text-blue-400 font-semibold"> make an impact</span> while ensuring top-notch security.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection delay={1.0}>
          <div className="flex gap-6 justify-center flex-wrap">
            {/* View My Work Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/projects"
                className="group relative bg-gradient-to-r from-electric to-blue-600 hover:from-blue-600 hover:to-electric text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl shadow-electric/30 inline-block overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12"
                  animate={{
                    x: ['-200%', '200%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />
                <span className="relative flex items-center gap-2">
                  🚀 View My Work
                </span>
              </Link>
            </motion.div>
            
            {/* Download CV Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/documents/joe-nthiga-cv.pdf'
                  link.download = 'Joe-Nthiga-CV.pdf'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
                className="group relative bg-gradient-to-r from-electric to-blue-600 hover:from-blue-600 hover:to-electric text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl shadow-electric/30 overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12"
                  animate={{
                    x: ['-200%', '200%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 1,
                    delay: 0.5
                  }}
                />
                <span className="relative flex items-center gap-2">
                  📄 Download CV
                </span>
              </button>
            </motion.div>

            {/* Get In Touch Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/contact"
                className="group relative border-2 border-electric text-electric hover:bg-electric hover:text-black font-semibold py-4 px-8 rounded-xl transition-all duration-300 inline-block overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-electric transform origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center gap-2 z-10">
                  💬 Get In Touch
                </span>
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Tech Stack Preview */}
        <AnimatedSection delay={1.2}>
          <motion.div 
            className="mt-16 flex justify-center items-center gap-6 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <span className="text-gray-500 text-sm">Tech I work with:</span>
            {['React', 'Node.js', 'Python', 'MongoDB', 'Tailwind', 'TypeScript'].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-gray-900 text-gray-300 rounded-full text-sm border border-electric/30 hover:border-electric transition-all duration-300 cursor-default hover:shadow-lg hover:shadow-electric/20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.15, 
                  backgroundColor: "rgba(30, 144, 255, 0.1)",
                  color: "#1E90FF"
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Experience Stats */}
        <AnimatedSection delay={1.4}>
          <motion.div 
            className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="text-2xl font-bold text-electric mb-1"
                animate={{
                  textShadow: [
                    '0 0 5px rgba(30,144,255,0.3)',
                    '0 0 20px rgba(30,144,255,0.6)',
                    '0 0 5px rgba(30,144,255,0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                2+
              </motion.div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="text-2xl font-bold text-blue-400 mb-1"
                animate={{
                  textShadow: [
                    '0 0 5px rgba(96,165,250,0.3)',
                    '0 0 20px rgba(96,165,250,0.6)',
                    '0 0 5px rgba(96,165,250,0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                15+
              </motion.div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="text-2xl font-bold text-green-400 mb-1"
                animate={{
                  textShadow: [
                    '0 0 5px rgba(74,222,128,0.3)',
                    '0 0 20px rgba(74,222,128,0.6)',
                    '0 0 5px rgba(74,222,128,0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                10+
              </motion.div>
              <div className="text-gray-400 text-sm">Technologies</div>
            </motion.div>
          </motion.div>
        </AnimatedSection>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-electric rounded-full flex justify-center shadow-lg shadow-electric/30"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-electric rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}