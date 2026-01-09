"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // State for projects
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    // Load projects from localStorage or initialize with defaults
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
          tech: ["React", "Node.js", "MongoDB"] as string[],
          category: "Web",
          demoLink: "#",
          sourceLink: "#"
        },
        {
          id: 2,
          title: "Task Management App",
          description: "A productivity application for managing tasks and projects with team collaboration features.",
          tech: ["Next.js", "TypeScript", "Firebase"] as string[],
          category: "Web",
          demoLink: "#",
          sourceLink: "#"
        },
        {
          id: 3,
          title: "Weather Dashboard",
          description: "Real-time weather forecasting application with interactive maps and alerts.",
          tech: ["JavaScript", "API Integration", "Chart.js"] as string[],
          category: "Web",
          demoLink: "#",
          sourceLink: "#"
        },
        {
          id: 4,
          title: "Authentication System",
          description: "Secure user authentication and authorization microservice with JWT tokens.",
          tech: ["Express.js", "JWT", "PostgreSQL"] as string[],
          category: "Backend",
          demoLink: "#",
          sourceLink: "#"
        }
      ]);
    }
  }, []);

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const experiences = [
    {
      id: 1,
      title: "Full-Stack Developer",
      company: "Self-Employed",
      duration: "Present",
      description: "Developed web, mobile, and AI-powered projects using Next.js, React, Node.js, Express, React Native, Expo, and Python. Built full-stack applications including student management systems, mobile apps, and AI prediction tools."
    },
    {
      id: 2,
      title: "Database & API Developer",
      company: "Freelance",
      duration: "2021 - Present",
      description: "Experienced in database design (PostgreSQL, MongoDB), REST APIs, and deployment to platforms like Vercel and Render. Passionate about learning new technologies and building real-world applications."
    }
  ];

  const education = [
    {
      id: 1,
      institution: "Self-Taught Full-Stack Developer & AI Enthusiast",
      course: "Full Stack Web Development & AI",
      period: "2021 - Present",
      description: "Learned JavaScript, React, Next.js, Node.js, Express, React Native, Expo, Python, FastAPI. Studied through YouTube tutorials, FreeCodeCamp, and Udemy courses. Gained practical experience in full-stack development, AI integration, REST APIs, and deployment."
    }
  ];

  const skills = {
    languages: ["JavaScript (ES6+)", "Python"],
    frontend: ["React", "Next.js", "Tailwind CSS", "Vite"],
    mobile: ["React Native", "Expo"],
    backend: ["Node.js", "Express.js", "FastAPI"],
    ai_ml: ["scikit-learn", "PyTorch", "NumPy, Pandas"],
    tools: ["Git & GitHub", "Docker", "PostgreSQL", "Vercel"]
  };

  return (
    <div className="min-h-screen bg-[#f4f4f5] font-sans text-gray-900">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <img 
              src="/images/projects/profile.jpg" 
              alt="Joe Nthiga - Developer" 
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-gray-200"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/300x300/4A5568/FFFFFF?text=JN";
              }}
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Joe Nthiga
          </h1>
          <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl text-gray-600 mb-4">
            Self-Taught Full-Stack Developer
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Passionate about creating elegant solutions to complex problems. 
            Specializing in modern web technologies and user-centered design as a self-taught developer.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a 
              href="#contact" 
              className="bg-black text-white px-5 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="border border-gray-300 px-5 py-2.5 rounded-full font-medium hover:bg-gray-50 transition-colors text-sm sm:text-base"
            >
              View Projects
            </a>
          </div>
          <a 
            href="#" 
            className="inline-flex items-center mt-4 text-sm sm:text-base text-gray-700 hover:text-black"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download Resume
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">About Me</h2>
          <div className="space-y-4 text-base sm:text-lg text-gray-700">
            <p>
              I'm Joe Nthiga, a passionate self-taught full-stack developer with 3 years of experience teaching myself 
              to code. My journey in tech began 3 years ago when I started my self-learning path, and I've been hooked ever since.
            </p>
            <p>
              Self-taught developer passionate about building real-world applications and continuously learning new technologies. 
              As a self-taught developer, I bring a unique perspective to problem-solving, with a deep appreciation 
              for continuous learning and hands-on experimentation. I believe in writing clean, maintainable code 
              and creating intuitive user experiences. When I'm not coding, you can find me contributing to 
              open-source projects or exploring new technologies in the ever-evolving world of web development.
            </p>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Core Competencies</h2>
          
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-full text-gray-700 hover:border-gray-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-full text-gray-700 hover:border-gray-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">Mobile</h3>
              <div className="flex flex-wrap gap-2">
                {skills.mobile.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-full text-gray-700 hover:border-gray-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-full text-gray-700 hover:border-gray-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">AI / ML</h3>
              <div className="flex flex-wrap gap-2">
                {skills.ai_ml.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-full text-gray-700 hover:border-gray-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-full text-gray-700 hover:border-gray-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Education</h2>
          
          <div className="space-y-4">
            {education.map((edu) => (
              <div 
                key={edu.id}
                className="p-4 sm:p-6 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{edu.institution}</h3>
                  <span className="text-gray-500 text-sm self-start sm:self-auto">{edu.period}</span>
                </div>
                <h4 className="text-base sm:text-lg text-gray-700 mt-1">{edu.course}</h4>
                <p className="text-sm sm:text-base text-gray-600 mt-2">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Featured Projects</h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <div className="inline-flex rounded-full border border-gray-200 p-1">
              {['All', 'Web', 'Backend', 'Mobile'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1.5 text-sm rounded-full font-medium ${
                    activeFilter === filter
                      ? 'bg-black text-white'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors"
              >
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {Array.isArray(project.tech) ? project.tech.map((tech: string, index: number) => (
                      <span 
                        key={index}
                        className="px-2 py-1 text-xs sm:text-sm bg-gray-100 text-gray-700 rounded-full"
                      >
                        {tech}
                      </span>
                    )) : (project.tech as string).split(',').map((tech: string, index: number) => (
                      <span 
                        key={index}
                        className="px-2 py-1 text-xs sm:text-sm bg-gray-100 text-gray-700 rounded-full"
                      >
                        tech.trim()
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={project.demoLink} 
                      className="flex-1 text-center py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.sourceLink} 
                      className="flex-1 text-center py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Experience</h2>
          
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div 
                key={exp.id}
                className="border-l-2 border-gray-200 pl-4 pb-6 relative"
              >
                <div className="absolute -left-1 top-0 w-3 h-3 rounded-full bg-black"></div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{exp.title}</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mt-1 gap-1">
                  <span className="text-gray-700">{exp.company}</span>
                  <span className="text-gray-500 text-sm">{exp.duration}</span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Get In Touch</h2>
          
          <div className="grid grid-cols-1 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Contact Information</h3>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-gray-600 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">joenthiga@gmail.com</span>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-gray-600 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">+254701747503</span>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-gray-600 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">Nairobi, Kenya</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-base sm:text-lg font-semibold mb-3 text-gray-800">Connect with me</h4>
                <div className="flex gap-3">
                  <a 
                    href="mailto:joenthiga@gmail.com" 
                    className="bg-black text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/Cashkid12" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border border-gray-300 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="sm:w-4 sm:h-4">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/in/joe-nthiga" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border border-gray-300 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="sm:w-4 sm:h-4">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Send a Message</h3>
              
              <form className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors"
                    placeholder="Enter subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors mt-2 text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}