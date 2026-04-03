import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Story', href: '#story' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
]

const TIMELINE_ITEMS = [
  { year: '2017', title: '10th Standard', description: 'Completed SSC with flying colors, laying the foundation for my academic journey.', icon: '🎓' },
  { year: '2018', title: 'Started Coding', description: 'Discovered my passion for programming and wrote my first lines of code.', icon: '💻' },
  { year: '2019', title: 'Diploma', description: 'Pursued diploma, diving deeper into technical concepts and practical applications.', icon: '📚' },
  { year: '2021', title: 'Java Internship @ Sumago Infotech', description: 'Gained industry experience as a Java Intern, building robust applications.', icon: '☕' },
  { year: '2021-Present', title: 'B.Tech @ R. C. Patel Institute', description: 'Computer Science Engineering - Building a strong foundation in algorithms, data structures, and software engineering principles.', icon: '🎓' },
  { year: '2023', title: 'Web Dev Internship @ spWeb@Devs', description: 'Expanded into web development, mastering modern frontend and backend technologies.', icon: '🌐' },
  { year: '2023-2024', title: 'Freelancing @ Creonox', description: 'Delivered 8+ months of professional web solutions for clients, honing full-stack skills.', icon: '🚀' },
  { year: '2024', title: 'Technical Member @ GDG', description: 'Google Developer Groups - Collaborating with the developer community, organizing events, and sharing knowledge.', icon: '👥' },
]

const SKILLS = {
  languages: ['Java', 'JavaScript', 'Python', 'C', 'C++', 'SQL'],
  frontend: ['React', 'HTML5', 'CSS3', 'TailwindCSS'],
  backend: ['Node.js', 'Express.js', 'REST APIs'],
  database: ['MongoDB', 'SQL'],
  tools: ['Postman', 'Git', 'GitHub', 'CI/CD'],
  ai: ['Embeddings', 'Semantic Search', 'Vector DB', 'FAISS', 'Doc Processing', 'Context-Aware'],
}

const PROJECTS = [
  { title: 'Interview Analyzer', description: 'AI-powered platform to analyze and improve interview performance with real-time feedback and insights.', tech: ['React', 'Node.js', 'OpenAI', 'MongoDB'], github: 'https://github.com/KashishAgrawal07/InsightPrep.ai', live: 'https://insight-nu.vercel.app/', emoji: '🎯' },
  { title: 'AI Document Q&A System', description: 'Intelligent system that processes documents and provides accurate answers using advanced NLP techniques.', tech: ['Python', 'FAISS', 'LangChain', 'Flask'], github: 'https://github.com/ManasiSonje/QueryDocs-AI', live: null, emoji: '📄' },
  { title: 'Muse - Journey Guide Chatbot', description: 'Smart chatbot-based ticketing system for seamless travel booking and customer support.', tech: ['React', 'Node.js', 'MongoDB', 'Chatbot API'], github: 'https://github.com/ManasiSonje/muse-journey-guide', live: 'https://muse-journey-guide.vercel.app/', emoji: '🎨' },
  { title: 'Graph Traversal Visualizer', description: 'Interactive visualization of BFS algorithm with step-by-step animation and explanation.', tech: ['JavaScript', 'HTML5', 'CSS3'], github: 'https://github.com/ManasiSonje/Graph_Traversal_Using_BFS', live: null, emoji: '🔍' },
]

const ACHIEVEMENTS = [
  { icon: '🏆', number: '100+', label: 'LeetCode Problems' },
  { icon: '📦', number: '20+', label: 'GitHub Repos' },
  { icon: '🚀', number: '3+', label: 'Hackathons' },
  { icon: '⭐', number: '8+', label: 'Months Freelance' },
]

const SOCIAL_LINKS = { github: 'https://github.com/ManasiSonje', linkedin: 'https://www.linkedin.com/in/manasi-sonje/', email: 'sonjemanasi@gmail.com' }

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    const sections = ['home', 'story', 'skills', 'projects', 'achievements', 'contact']
    const handleSection = () => {
      const scrollPosition = window.scrollY + 200
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const el = document.getElementById(section)
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(section)
          return
        }
      }
      setActiveSection('home')
    }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('scroll', handleSection)
    handleSection()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleSection)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('sending')
    setTimeout(() => { setFormStatus('success'); setFormData({ name: '', email: '', message: '' }); setTimeout(() => setFormStatus(null), 3000) }, 1000)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <DSABackground />
      <Navigation scrolled={scrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} activeSection={activeSection} />
      <main className="container mx-auto px-4 relative z-10">
        <HeroSection />
        <StorySection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} formStatus={formStatus} />
      </main>
      <Footer />
    </div>
  )
}

function DSABackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(30,41,59,0.3)_50%,rgba(15,23,42,0.8)_100%)]" />
      
      <svg className="absolute top-20 left-10 opacity-15 animate-float" viewBox="0 0 200 120" width="200">
        <circle cx="40" cy="60" r="15" fill="none" stroke="#3b82f6" strokeWidth="2"/>
        <text x="40" y="64" textAnchor="middle" fill="#3b82f6" fontSize="10" fontFamily="monospace">10th</text>
        <line x1="55" y1="60" x2="85" y2="60" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow1)"/>
        <circle cx="100" cy="60" r="15" fill="none" stroke="#3b82f6" strokeWidth="2"/>
        <text x="100" y="64" textAnchor="middle" fill="#3b82f6" fontSize="10" fontFamily="monospace">Dip.</text>
        <line x1="115" y1="60" x2="145" y2="60" stroke="#3b82f6" strokeWidth="2"/>
        <circle cx="160" cy="60" r="15" fill="none" stroke="#3b82f6" strokeWidth="2"/>
        <text x="160" y="64" textAnchor="middle" fill="#3b82f6" fontSize="10" fontFamily="monospace">B.Tech</text>
        <defs>
          <marker id="arrow1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6"/>
          </marker>
        </defs>
      </svg>
      
      <svg className="absolute bottom-40 right-20 opacity-15 animate-float-reverse" viewBox="0 0 160 100" width="160">
        <rect x="10" y="20" width="25" height="25" fill="none" stroke="#8b5cf6" strokeWidth="2" rx="2"/>
        <rect x="40" y="20" width="25" height="25" fill="none" stroke="#8b5cf6" strokeWidth="2" rx="2"/>
        <rect x="70" y="20" width="25" height="25" fill="none" stroke="#8b5cf6" strokeWidth="2" rx="2"/>
        <rect x="100" y="20" width="25" height="25" fill="none" stroke="#8b5cf6" strokeWidth="2" rx="2"/>
        <text x="60" y="70" textAnchor="middle" fill="#8b5cf6" fontSize="10" fontFamily="monospace">arr = [ ]</text>
      </svg>
      
      <svg className="absolute top-1/3 right-10 opacity-15 animate-float" viewBox="0 0 120 120" width="120">
        <circle cx="60" cy="30" r="18" fill="none" stroke="#06b6d4" strokeWidth="2"/>
        <text x="60" y="34" textAnchor="middle" fill="#06b6d4" fontSize="10" fontFamily="monospace">Root</text>
        <line x1="48" y1="42" x2="30" y2="70" stroke="#06b6d4" strokeWidth="2"/>
        <line x1="72" y1="42" x2="90" y2="70" stroke="#06b6d4" strokeWidth="2"/>
        <circle cx="25" cy="85" r="15" fill="none" stroke="#06b6d4" strokeWidth="2"/>
        <circle cx="95" cy="85" r="15" fill="none" stroke="#06b6d4" strokeWidth="2"/>
      </svg>
      
      <svg className="absolute bottom-20 left-1/4 opacity-15 animate-float-reverse" viewBox="0 0 140 100" width="140">
        <circle cx="70" cy="20" r="12" fill="none" stroke="#6366f1" strokeWidth="2"/>
        <line x1="60" y1="28" x2="40" y2="50" stroke="#6366f1" strokeWidth="2"/>
        <line x1="80" y1="28" x2="100" y2="50" stroke="#6366f1" strokeWidth="2"/>
        <circle cx="35" cy="60" r="12" fill="none" stroke="#6366f1" strokeWidth="2"/>
        <circle cx="105" cy="60" r="12" fill="none" stroke="#6366f1" strokeWidth="2"/>
        <text x="70" y="90" textAnchor="middle" fill="#6366f1" fontSize="9" fontFamily="monospace">Tree</text>
      </svg>
      
      <div className="absolute top-20 right-1/4 font-mono text-xs text-blue-400 opacity-30 animate-float-code">
        <pre>{`const journey = []`}</pre>
      </div>
      <div className="absolute top-40 left-1/4 font-mono text-xs text-cyan-400 opacity-30 animate-float-code-reverse">
        <pre>{`node.next`}</pre>
      </div>
      <div className="absolute bottom-40 right-1/3 font-mono text-xs text-purple-400 opacity-30 animate-float-code" style={{animationDelay: '1s'}}>
        <pre>{`DFS(journey)`}</pre>
      </div>
    </div>
  )
}

function Navigation({ scrolled, mobileMenuOpen, setMobileMenuOpen, activeSection }) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-slate-900/80 backdrop-blur-2xl shadow-[0_4px_30px_rgba(59,130,246,0.15)] border-b border-blue-500/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
              MS
            </div>
          </a>
          
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-400 group overflow-hidden ${
                  activeSection === link.name.toLowerCase() 
                    ? 'text-white' 
                    : 'text-slate-300 hover:text-blue-400'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {activeSection === link.name.toLowerCase() && (
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg shadow-blue-500/40 animate-pulse" />
                )}
                <span className={`relative z-10 transition-transform duration-300 group-hover:scale-110 ${activeSection === link.name.toLowerCase() ? 'text-white' : ''}`}>
                  {link.name}
                </span>
                {activeSection !== link.name.toLowerCase() && (
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          
          <button className="lg:hidden p-2.5 rounded-xl bg-slate-800/50 backdrop-blur-sm text-blue-400 hover:bg-slate-800 transition-all duration-300 hover:scale-105" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 grid grid-cols-3 gap-2">
            {NAV_LINKS.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`px-4 py-2.5 text-sm font-medium rounded-xl text-center transition-all duration-300 animate-fade-in ${
                  activeSection === link.name.toLowerCase() 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30' 
                    : 'text-slate-300 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800'
                }`} 
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16">
          
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 leading-tight">
              <span className="text-slate-200">Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent block mt-2">Manasi Sonje</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-400 mb-4 font-light">
              Full Stack Developer <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">&</span> AI Enthusiast
            </p>
            <p className="text-slate-400 mb-6 max-w-md mx-auto lg:mx-0 leading-relaxed text-sm lg:text-base">
              Building innovative web applications with modern technologies. Passionate about AI, problem-solving, and creating meaningful digital experiences.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a href="/Manasi_Sonje_Resume.pdf" download className="btn-primary text-sm py-2.5 px-5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Resume
              </a>
              <a href="#projects" className="btn-secondary text-sm py-2.5 px-5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                Projects
              </a>
            </div>
          </div>
          
          <div className="flex-none animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-25" />
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem] xl:w-96 xl:h-[32rem] rounded-3xl overflow-hidden shadow-[0_25px_80px_-12px_rgba(59,130,246,0.4)]">
                <img src="/photo.jpg" alt="Manasi Sonje" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 rounded-3xl vignette-overlay" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl border-4 border-slate-900 flex items-center justify-center shadow-xl shadow-blue-500/50 animate-bounce">
                <span className="text-xl">✨</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 animate-slide-in-right">
<div className="flex flex-col gap-4 items-center lg:items-start">
            <h3 className="text-lg font-bold text-slate-200 lg:hidden">Connect</h3>
            <div className="flex flex-col gap-3">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-2xl bg-slate-800/80 border border-blue-500/20 hover:border-blue-400 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20 w-64">
                <svg className="w-6 h-6 text-slate-200" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span className="text-slate-200 font-medium">GitHub</span>
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-2xl bg-slate-800/80 border border-blue-500/20 hover:border-blue-400 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20 w-64">
                <svg className="w-6 h-6 text-slate-200" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <span className="text-slate-200 font-medium">LinkedIn</span>
              </a>
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-800/80 border border-blue-500/20 hover:border-blue-400 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20 w-64">
                <svg className="w-6 h-6 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="text-slate-200 font-medium">Email</span>
              </a>
            </div>
          </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#story" className="text-blue-400 hover:text-blue-300 transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function StorySection() {
  return (
    <section id="story" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-title">My Journey</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">From a curious student to a full-stack developer, here's my story of growth and learning.</p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <svg className="absolute left-1/2 top-0 bottom-0 w-full hidden lg:block" style={{ transform: 'translateX(-50%)' }}>
            <path d="M 100 60 Q 200 30 300 80 T 500 60 Q 600 100 700 80 T 900 60" fill="none" stroke="url(#graphGradient)" strokeWidth="3" strokeDasharray="8,4" opacity="0.5"/>
            <path d="M 100 200 Q 200 170 300 220 T 500 200 Q 600 240 700 220 T 900 200" fill="none" stroke="url(#graphGradient)" strokeWidth="3" strokeDasharray="8,4" opacity="0.5"/>
            <path d="M 100 350 Q 200 320 300 370 T 500 350 Q 600 390 700 370 T 900 350" fill="none" stroke="url(#graphGradient)" strokeWidth="3" strokeDasharray="8,4" opacity="0.5"/>
            <defs>
              <linearGradient id="graphGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6"/>
                <stop offset="50%" stopColor="#8b5cf6"/>
                <stop offset="100%" stopColor="#06b6d4"/>
              </linearGradient>
            </defs>
          </svg>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TIMELINE_ITEMS.map((item, index) => (
              <div 
                key={index} 
                className={`animate-fade-in-up ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`relative ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                  <div className={`absolute top-8 ${index % 2 === 0 ? 'md:-right-6 md:left-auto left-1/2 md:translate-x-0 -translate-x-1/2' : 'md:-left-6 left-1/2 -translate-x-1/2'} w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl shadow-lg shadow-blue-500/40 z-10`}>
                    {item.icon}
                  </div>
                  <div className={`glass-card rounded-3xl p-6 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                    <span className="text-blue-400 text-xs font-bold tracking-wider font-mono">{item.year}</span>
                    <h3 className="text-lg font-bold text-slate-100 mt-1">{item.title}</h3>
                    <p className="text-slate-400 mt-2 text-sm leading-relaxed">{item.description}</p>
                    <div className={`mt-3 flex items-center gap-2 text-xs font-mono text-blue-400 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span>node_{index}</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-title">Tech Stack</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Technologies I work with to bring ideas to life.</p>
        </div>
        <div className="max-w-6xl mx-auto grid gap-8">
          <div className="glass-card rounded-3xl p-8 animate-fade-in-up">
            <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-3"><span className="text-2xl">💻</span> Programming Languages</h3>
            <div className="flex flex-wrap gap-3">{SKILLS.languages.map((skill) => <span key={skill} className="skill-tag">{skill}</span>)}</div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-3xl p-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-3"><span className="text-2xl">🎨</span> Frontend</h3>
              <div className="flex flex-wrap gap-3">{SKILLS.frontend.map((skill) => <span key={skill} className="skill-tag">{skill}</span>)}</div>
            </div>
            <div className="glass-card rounded-3xl p-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-3"><span className="text-2xl">⚙️</span> Backend</h3>
              <div className="flex flex-wrap gap-3">{SKILLS.backend.map((skill) => <span key={skill} className="skill-tag">{skill}</span>)}</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-3xl p-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-3"><span className="text-2xl">🗄️</span> Database & Tools</h3>
              <div className="flex flex-wrap gap-3">{[...SKILLS.database, ...SKILLS.tools].map((skill) => <span key={skill} className="skill-tag">{skill}</span>)}</div>
            </div>
            <div className="glass-card rounded-3xl p-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-3"><span className="text-2xl">🤖</span> AI / ML</h3>
              <div className="flex flex-wrap gap-3">{SKILLS.ai.map((skill) => <span key={skill} className="skill-tag">{skill}</span>)}</div>
            </div>
          </div>
          <div className="glass-card rounded-3xl p-8 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-3"><span className="text-2xl">🌟</span> Soft Skills</h3>
            <div className="flex flex-wrap gap-3">{['Problem Solving', 'Analytical Thinking', 'Communication', 'Team Work', 'Time Management'].map((skill) => <span key={skill} className="skill-tag">{skill}</span>)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">A showcase of my work and technical capabilities.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {PROJECTS.map((project, index) => (
            <div key={index} className="glass-card rounded-3xl overflow-hidden animate-fade-in-up group" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="h-56 bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-8xl group-hover:scale-125 transition-transform duration-500">{project.emoji}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-medium font-mono">
                  {project.tech[0]}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.slice(1).map((tech) => <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-slate-700 text-slate-300 border border-slate-600">{tech}</span>)}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors font-medium">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors font-medium">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2 text-base">
            View All Projects on GitHub
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function AchievementsSection() {
  return (
    <section id="achievements" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-title">Achievements</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Milestones that mark my journey of growth and excellence.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {ACHIEVEMENTS.map((achievement, index) => (
            <div key={index} className="glass-card rounded-3xl p-6 text-center animate-fade-in-up group cursor-default" style={{ animationDelay: `${index * 100}ms` }}>
              <span className="text-5xl mb-4 block group-hover:scale-110 transition-transform duration-300">{achievement.icon}</span>
              <span className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">{achievement.number}</span>
              <span className="text-slate-400 text-sm mt-3 block font-medium">{achievement.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection({ formData, setFormData, handleSubmit, formStatus }) {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Have a project in mind? Let's connect and build something amazing together.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-slate-100 mb-8">Let's Connect</h3>
            <div className="space-y-5">
              {[
                { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, label: 'Email', value: SOCIAL_LINKS.email, href: `mailto:${SOCIAL_LINKS.email}` },
                { icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, label: 'LinkedIn', value: 'Manasi Sonje', href: SOCIAL_LINKS.linkedin },
                { icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>, label: 'GitHub', value: 'ManasiSonje', href: SOCIAL_LINKS.github },
              ].map((item, index) => (
                <a key={index} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="glass-card rounded-2xl p-5 flex items-center gap-5 group hover:border-blue-400">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div><p className="text-slate-400 text-sm">{item.label}</p><p className="text-slate-200 font-medium group-hover:text-blue-400 transition-colors">{item.value}</p></div>
                </a>
              ))}
            </div>
          </div>
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 space-y-6">
              <div>
                <label className="block text-slate-300 text-sm mb-3 font-medium">Name</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="input-field" placeholder="Your name" required />
              </div>
              <div>
                <label className="block text-slate-300 text-sm mb-3 font-medium">Email</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="input-field" placeholder="your@email.com" required />
              </div>
              <div>
                <label className="block text-slate-300 text-sm mb-3 font-medium">Message</label>
                <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="input-field min-h-[140px] resize-none" placeholder="Your message..." required />
              </div>
              <button type="submit" disabled={formStatus === 'sending'} className="btn-primary w-full text-base py-4">
                {formStatus === 'sending' ? <><svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>Sending...</> : formStatus === 'success' ? <><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Message Sent!</> : <><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t border-blue-500/20 bg-slate-900/80 backdrop-blur">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">MS</div>
            <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Manasi Sonje</span>
          </div>
          <p className="text-slate-400 text-sm">© 2024 Manasi Sonje. Built with passion.</p>
          <div className="flex gap-4">
            {[SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin].map((url, i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-800 border border-blue-500/20 text-slate-400 hover:text-blue-400 hover:border-blue-400 transition-all duration-300">
                {i === 0 ? <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> : <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default App
