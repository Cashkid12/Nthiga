import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import DownloadCV from './DownloadCV' // Add this import

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800/50 shadow-lg shadow-electric/5">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gradient-to-br from-electric to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-electric/30"
            >
              <span className="text-white font-bold text-lg">JN</span>
            </motion.div>
            <motion.span 
              whileHover={{ x: 5 }}
              className="text-xl font-bold bg-gradient-to-r from-electric to-blue-400 bg-clip-text text-transparent"
            >
              Joe Nthiga
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium transition-all duration-300 group ${
                  location.pathname === item.path
                    ? 'text-electric'
                    : 'text-gray-300 hover:text-electric'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-electric rounded-full shadow-lg shadow-electric/50"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-gray-900 text-electric px-2 py-1 rounded text-xs whitespace-nowrap border border-electric/30">
                    {item.label}
                  </div>
                </div>
              </Link>
            ))}
            {/* Add Download CV button in header */}
            <DownloadCV />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors border border-electric/30"
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1">
              <motion.span 
                animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-electric transition-all" 
              />
              <motion.span 
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-electric transition-all" 
              />
              <motion.span 
                animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-electric transition-all" 
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden mt-4 bg-gray-900 rounded-2xl shadow-2xl border border-electric/30 overflow-hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-6 py-4 font-medium transition-all duration-300 border-l-4 ${
                  location.pathname === item.path
                    ? 'bg-gray-800 text-electric border-electric'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-electric border-transparent'
                }`}
              >
                {item.label}
              </Link>
            ))}
            {/* Add Download CV in mobile menu */}
            <div className="px-6 py-4 border-t border-electric/30">
              <motion.button
                onClick={() => {
                  handleDownload()
                  setIsMenuOpen(false)
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-electric to-blue-600 hover:from-blue-600 hover:to-electric text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg shadow-electric/30"
              >
                📄 Download CV
              </motion.button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )

  // Add download function for mobile
  function handleDownload() {
    const link = document.createElement('a')
    link.href = '/documents/joe-nthiga-cv.pdf'
    link.download = 'Joe-Nthiga-CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}