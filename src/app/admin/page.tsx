"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPanel() {
  const [projects, setProjects] = useState<any[]>([]);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    tech: '',
    category: 'Web',
    demoLink: '#',
    sourceLink: '#'
  });
  const [editingProject, setEditingProject] = useState<any>(null);
  const router = useRouter();

  // Check authentication on load
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('admin-auth');
    if (!isAuthenticated) {
      router.push('/admin/login');
    } else {
      // Load projects from localStorage or initialize
      const savedProjects = localStorage.getItem('portfolio-projects');
      if (savedProjects) {
        setProjects(JSON.parse(savedProjects));
      } else {
        // Initialize with default projects
        setProjects([
          {
            id: 1,
            title: "E-commerce Platform",
            description: "A full-featured online shopping platform with cart functionality and payment integration.",
            tech: ["React", "Node.js", "MongoDB"],
            category: "Web",
            demoLink: "#",
            sourceLink: "#"
          },
          {
            id: 2,
            title: "Task Management App",
            description: "A productivity application for managing tasks and projects with team collaboration features.",
            tech: ["Next.js", "TypeScript", "Firebase"],
            category: "Web",
            demoLink: "#",
            sourceLink: "#"
          },
          {
            id: 3,
            title: "Weather Dashboard",
            description: "Real-time weather forecasting application with interactive maps and alerts.",
            tech: ["JavaScript", "API Integration", "Chart.js"],
            category: "Web",
            demoLink: "#",
            sourceLink: "#"
          },
          {
            id: 4,
            title: "Authentication System",
            description: "Secure user authentication and authorization microservice with JWT tokens.",
            tech: ["Express.js", "JWT", "PostgreSQL"],
            category: "Backend",
            demoLink: "#",
            sourceLink: "#"
          }
        ]);
      }
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('admin-auth');
    router.push('/');
  };

  const handleAddProjectChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewProject(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const projectToAdd = {
      ...newProject,
      id: Date.now(),
      tech: newProject.tech.split(',').map((tag: string) => tag.trim())
    };
    const updatedProjects = [...projects, projectToAdd];
    setProjects(updatedProjects);
    localStorage.setItem('portfolio-projects', JSON.stringify(updatedProjects));
    setNewProject({
      title: '',
      description: '',
      tech: '',
      category: 'Web',
      demoLink: '#',
      sourceLink: '#'
    });
  };

  const handleEditProject = (project: any) => {
    setEditingProject(project);
    setNewProject({
      ...project,
      tech: Array.isArray(project.tech) ? project.tech.join(', ') : project.tech
    });
  };

  const handleUpdateProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const projectToUpdate = {
      ...newProject,
      id: editingProject.id,
      tech: newProject.tech.split(',').map((tag: string) => tag.trim())
    };
    
    const updatedProjects = projects.map(proj => 
      proj.id === editingProject.id ? projectToUpdate : proj
    );
    
    setProjects(updatedProjects);
    localStorage.setItem('portfolio-projects', JSON.stringify(updatedProjects));
    setEditingProject(null);
    setNewProject({
      title: '',
      description: '',
      tech: '',
      category: 'Web',
      demoLink: '#',
      sourceLink: '#'
    });
  };

  const handleCancelEdit = () => {
    setEditingProject(null);
    setNewProject({
      title: '',
      description: '',
      tech: '',
      category: 'Web',
      demoLink: '#',
      sourceLink: '#'
    });
  };

  const deleteProject = (id: number) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const updatedProjects = projects.filter(proj => proj.id !== id);
      setProjects(updatedProjects);
      localStorage.setItem('portfolio-projects', JSON.stringify(updatedProjects));
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f4f5] font-sans text-gray-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Admin Header */}
        <header className="bg-white rounded-xl shadow-md p-6 mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Add/Edit Project Form */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>
            
            <form onSubmit={editingProject ? handleUpdateProjectSubmit : handleAddProjectSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={newProject.title}
                    onChange={handleAddProjectChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    id="category"
                    name="category"
                    value={newProject.category}
                    onChange={handleAddProjectChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  >
                    <option value="Web">Web</option>
                    <option value="Backend">Backend</option>
                    <option value="Mobile">Mobile</option>
                    <option value="AI/ML">AI/ML</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={newProject.description}
                    onChange={handleAddProjectChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    rows={3}
                    required
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="tech" className="block text-sm font-medium text-gray-700 mb-1">Tech Stack (comma separated)</label>
                  <input
                    type="text"
                    id="tech"
                    name="tech"
                    value={newProject.tech}
                    onChange={handleAddProjectChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="e.g., React, Node.js, MongoDB"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="demoLink" className="block text-sm font-medium text-gray-700 mb-1">Demo Link</label>
                  <input
                    type="text"
                    id="demoLink"
                    name="demoLink"
                    value={newProject.demoLink}
                    onChange={handleAddProjectChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="https://example.com/demo"
                  />
                </div>
                
                <div>
                  <label htmlFor="sourceLink" className="block text-sm font-medium text-gray-700 mb-1">Source Link</label>
                  <input
                    type="text"
                    id="sourceLink"
                    name="sourceLink"
                    value={newProject.sourceLink}
                    onChange={handleAddProjectChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="https://github.com/username/project"
                  />
                </div>
              </div>
              
              <div className="mt-4 flex gap-2">
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  {editingProject ? 'Update Project' : 'Add Project'}
                </button>
                
                {editingProject && (
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
          
          {/* Current Projects List */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Current Projects</h2>
            <div className="space-y-4">
              {projects.length > 0 ? (
                projects.map((project) => (
                  <div key={project.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-lg">{project.title}</h3>
                        <p className="text-sm text-gray-600">{project.category}</p>
                        <p className="text-sm text-gray-500 mt-1">{project.description.substring(0, 60)}...</p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {Array.isArray(project.tech) ? project.tech.map((tech: string, idx: number) => (
                            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                              {tech}
                            </span>
                          )) : project.tech.split(',').map((tech: string, idx: number) => (
                            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                              {tech.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditProject(project)}
                          className="text-sm bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteProject(project.id)}
                          className="text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No projects yet. Add your first project!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}