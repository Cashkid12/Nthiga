import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProjectForm from './ProjectForm'
import ProjectList from './ProjectList'

export default function AdminPanel({ onLogout }) {
  const [projects, setProjects] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingProject, setEditingProject] = useState(null)

  // Load projects from localStorage on component mount
  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolioProjects')
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects))
    }
  }, [])

  // Save projects to localStorage whenever projects change
  useEffect(() => {
    localStorage.setItem('portfolioProjects', JSON.stringify(projects))
  }, [projects])

  const handleAddProject = (projectData) => {
    const newProject = {
      ...projectData,
      id: editingProject ? editingProject.id : Date.now()
    }

    if (editingProject) {
      // Update existing project
      setProjects(projects.map(p => p.id === editingProject.id ? newProject : p))
    } else {
      // Add new project
      setProjects([...projects, newProject])
    }

    setShowForm(false)
    setEditingProject(null)
  }

  const handleEditProject = (project) => {
    setEditingProject(project)
    setShowForm(true)
  }

  const handleDeleteProject = (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== projectId))
    }
  }

  const handleExport = () => {
    const dataStr = JSON.stringify(projects, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'projects-export.json'
    link.click()
  }

  const handleImport = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const importedProjects = JSON.parse(e.target.result)
          setProjects(importedProjects)
        } catch (error) {
          alert('Error importing file. Please check the format.')
        }
      }
      reader.readAsText(file)
    }
  }

  return (
    <div className="min-h-screen bg-black px-4 py-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-0 w-80 h-80 bg-electric/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0], opacity: [0.1, 0.05, 0.1] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 mb-8 border border-gray-800"
        >
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-electric via-amber-400 to-amber-500 bg-clip-text text-transparent">
                📊 Project Admin
              </h1>
              <p className="text-gray-400">Manage your portfolio projects</p>
            </div>
            <div className="flex gap-3">
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImport}
                  className="hidden"
                />
                <motion.div
                  className="px-4 py-2 border border-green-600 text-green-400 hover:bg-green-600/10 rounded-xl transition-colors cursor-pointer shadow-lg shadow-green-600/20"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📂 Import JSON
                </motion.div>
              </label>
              <motion.button
                onClick={handleExport}
                className="px-4 py-2 border border-electric text-electric hover:bg-electric/10 rounded-xl transition-colors shadow-lg shadow-electric/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                💾 Export JSON
              </motion.button>
              <motion.button
                onClick={onLogout}
                className="px-4 py-2 border border-red-600 text-red-400 hover:bg-red-600/10 rounded-xl transition-colors shadow-lg shadow-red-600/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                🚪 Logout
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 mb-8 border border-gray-800"
        >
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">
                📁 Projects ({projects.length})
              </h2>
              <p className="text-gray-400">
                Add, edit, or remove projects from your portfolio
              </p>
            </div>
            <motion.button
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-electric to-amber-500 hover:from-amber-500 hover:to-electric text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-electric/30"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              ➕ Add Project
            </motion.button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          <motion.div 
            className="bg-gray-900/80 rounded-xl p-4 text-center border border-gray-800 hover:border-electric/50 transition-all duration-300 shadow-xl hover:shadow-electric/20"
            whileHover={{ scale: 1.05, y: -3 }}
          >
            <motion.div 
              className="text-2xl font-bold text-electric mb-1"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {projects.length}
            </motion.div>
            <div className="text-gray-400 text-sm">Total Projects</div>
          </motion.div>
          <motion.div 
            className="bg-gray-900/80 rounded-xl p-4 text-center border border-gray-800 hover:border-amber-500/50 transition-all duration-300 shadow-xl hover:shadow-amber-500/20"
            whileHover={{ scale: 1.05, y: -3 }}
          >
            <motion.div 
              className="text-2xl font-bold text-amber-400 mb-1"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            >
              {projects.filter(p => p.featured).length}
            </motion.div>
            <div className="text-gray-400 text-sm">Featured</div>
          </motion.div>
          <motion.div 
            className="bg-gray-900/80 rounded-xl p-4 text-center border border-gray-800 hover:border-green-500/50 transition-all duration-300 shadow-xl hover:shadow-green-500/20"
            whileHover={{ scale: 1.05, y: -3 }}
          >
            <motion.div 
              className="text-2xl font-bold text-green-400 mb-1"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            >
              {projects.filter(p => p.category === 'fullstack').length}
            </motion.div>
            <div className="text-gray-400 text-sm">Full Stack</div>
          </motion.div>
        </motion.div>

        {/* Projects List */}
        <ProjectList
          projects={projects}
          onEdit={handleEditProject}
          onDelete={handleDeleteProject}
        />

        {/* Project Form Modal */}
        {showForm && (
          <ProjectForm
            project={editingProject}
            onSubmit={handleAddProject}
            onCancel={() => {
              setShowForm(false)
              setEditingProject(null)
            }}
          />
        )}
      </div>
    </div>
  )
}