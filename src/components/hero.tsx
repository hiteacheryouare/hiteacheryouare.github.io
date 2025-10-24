import { useState, useEffect } from 'react';

interface SocialLink {
  href: string;
  icon: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  year: string;
  link?: string;
}

export default () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const socialLinks: SocialLink[] = [
    {
      href: 'https://github.com/hiteacheryouare',
      icon: 'github',
    },
    {
      href: 'https://linkedin.com/in/rpmullin06',
      icon: 'linkedin',
    },
    {
      href: 'https://instagram.com/rpmullin06',
      icon: 'instagram',
    }
  ];

  const projects: Project[] = [
    {
      title: "SmartCarbon",
      description: "An eco-friendly travel carbon calculator that helps travelers make sustainable decisions by calculating and visualizing their carbon footprint with dynamic algorithms and actionable reduction strategies.",
      tags: ["Next.js", "React", "TypeScript", "TailwindCSS"],
      year: "2024",
    },
    {
      title: "Tritons Swim",
      description: "Complete team website solution for Deerwood Tritons swim team featuring integrated registration system, comprehensive record management, and dynamic team roster displays.",
      tags: ["Astro", "React", "Svelte", "TailwindCSS", "Bootstrap"],
      year: "2024",
    },
    {
      title: "The Book Nook Project",
      description: "Mission-driven nonprofit website connecting underprivileged youth with books, featuring donation tracking, volunteer coordination, and community impact visualization.",
      tags: ["Astro", "HTML", "TailwindCSS", "Netlify"],
      year: "2023",
    },
    {
      title: "Launchpad",
      description: "Modern link-in-bio card generator for personal branding, allowing users to create customizable landing pages with drag-and-drop functionality and real-time preview.",
      tags: ["Next.js", "React", "TailwindCSS", "Vercel"],
      year: "2024",
    },
  ];

  const techStack = [
    "JavaScript", 
    "TypeScript", 
    "React", 
    "Next.js", 
    "Astro", 
    "Svelte",
    "TailwindCSS", 
    "Python"
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden bg-white">
      {/* Animated cursor follower */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(3, 91, 255, 0.08), transparent 50%)`,
        }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-20">
        <div className="max-w-7xl w-full">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
                Hi, I'm Ryan Mullin
                <br />
                <span className="text-gray-500">
                  Developer <br />
                  & Student <br />
                  & Swimmer <br />
                </span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-blue-600" />
                <p className="text-lg md:text-xl text-gray-600 font-mono">
                  CS & Business @ Northeastern University
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-8">
              <a 
                href="#work"
                className="group bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center transition-colors"
              >
                View My Work
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a 
                href="#contact"
                className="px-6 py-3 rounded-lg font-medium border border-gray-300 hover:border-gray-400 transition-colors"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-8">
              {socialLinks.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  <i className={`bi bi-${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-mono text-blue-600">01 / About</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold">
                Building impactful solutions at the intersection of tech and business
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a Computer Science and Business Administration student at Northeastern University with a passion for FinTech and full-stack development. From building mission-driven nonprofit platforms to managing corporate sponsorship outreach for a 400+ member electric racing team, I thrive on projects that blend technical innovation with real-world impact.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether it's deploying responsive web applications, analyzing carbon footprints, or coordinating high-stakes recruitment events, I bring a unique combination of technical expertise and strategic thinking to every challenge.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {techStack.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full border border-gray-300 text-sm font-mono hover:border-blue-600 hover:text-blue-600 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-50 to-gray-100 overflow-hidden border border-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">💻</div>
                  <p className="text-gray-500 font-mono text-sm">
                    Northeastern University
                    <br />
                    Khoury College of CS
                    <br />
                    D'Amore-McKim School of Business
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-blue-100 border border-blue-600 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen flex items-center px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="space-y-16">
            <div className="space-y-4">
              <span className="text-sm font-mono text-blue-600">02 / Selected Work</span>
              <h2 className="text-4xl md:text-6xl font-bold">Featured Projects</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                From nonprofit platforms to eco-tech applications, here's a selection of projects where I've combined technical skills with mission-driven development.
              </p>
            </div>

            <div className="grid gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-gray-200 overflow-hidden hover:border-blue-600 hover:shadow-lg transition-all duration-300"
                >
                  <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-mono text-gray-500">0{index + 1}</span>
                        <div className="h-px flex-1 bg-gray-200" />
                        <span className="text-sm font-mono text-gray-500">{project.year}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 pt-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 text-xs font-mono group-hover:bg-blue-50 transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn mt-4 hover:text-blue-600 inline-flex items-center font-medium transition-colors"
                        >
                          View Project
                          <svg className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      )}
                    </div>
                    <div className="relative aspect-video rounded-xl bg-gradient-to-br from-blue-50 to-gray-100 overflow-hidden border border-gray-200 flex items-center justify-center">
                      <div className="text-4xl opacity-20">
                        {index === 0 && "🌱"}
                        {index === 1 && "🏊"}
                        {index === 2 && "📚"}
                        {index === 3 && "🔗"}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <a 
                href="https://github.com/hiteacheryouare"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                <i className="bi bi-github"></i>
                View more projects on GitHub
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="space-y-16">
            <div className="space-y-4">
              <span className="text-sm font-mono text-blue-600">03 / Get in Touch</span>
              <h2 className="text-4xl md:text-6xl font-bold">Let's build something great together</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm always interested in new opportunities—whether it's a FinTech project, web development work, or collaborative ventures at the intersection of business and technology. Let's connect!
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:rpmullin17@gmail.com"
                    className="flex items-center gap-3 text-lg hover:text-blue-600 transition-colors group"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="group-hover:translate-x-1 transition-transform">rpmullin17@gmail.com</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/rpmullin06" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg hover:text-blue-600 transition-colors group"
                  >
                    <i className="bi bi-linkedin text-xl"></i>
                    <span className="group-hover:translate-x-1 transition-transform">linkedin.com/in/rpmullin06</span>
                  </a>
                  <a 
                    href="https://github.com/hiteacheryouare" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg hover:text-blue-600 transition-colors group"
                  >
                    <i className="bi bi-github text-xl"></i>
                    <span className="group-hover:translate-x-1 transition-transform">github.com/hiteacheryouare</span>
                  </a>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-gray-500 font-mono">
                    📍 Based in Boston, MA & Philadelphia, PA
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-600">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-600">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-600">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-600 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 font-mono">© 2025 Ryan Mullin. Built with React & TailwindCSS.</p>
          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                <i className={`bi bi-${link.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}