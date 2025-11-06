import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Login from './components/admin/Login'
import AdminPanel from './components/admin/AdminPanel'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    setIsAuthenticated(false)
  }

  return (
    <div className="min-h-screen bg-black text-slate-100 flex flex-col relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,144,255,0.05),transparent_50%)] animate-pulse"></div>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login onLogin={setIsAuthenticated} />} />
        <Route 
          path="/admin" 
          element={
            isAuthenticated ? (
              <AdminPanel onLogout={handleLogout} />
            ) : (
              <Login onLogin={setIsAuthenticated} />
            )
          } 
        />
        
        {/* Public Routes */}
        <Route path="/*" element={
          <>
            <Header />
            <main className="flex-grow relative z-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </>
        } />
      </Routes>
    </div>
  )
}

export default App