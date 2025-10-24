import { useState, useEffect } from 'react';

interface SocialLink {
  href: string;
  icon: string;
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
  ]

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated cursor follower */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgb(3, 91, 255), transparent 20%)`,
        }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-20">
        <div className="max-w-7xl w-full">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
                Creative
                <br />
                <span className="text-gray-500">Developer</span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-primary" />
                <p className="text-lg md:text-xl text-gray-600 font-mono">Building digital experiences</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-8">
              <button className="group bg-primary hover:bg-secondary text-black px-6 py-3 rounded-lg font-medium inline-flex items-center transition-colors">
                View My Work
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="px-6 py-3 rounded-lg font-medium border border-gray-300 hover:border-gray-400 transition-colors">
                Get in Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-8">
              {socialLinks.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
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
                <span className="text-sm font-mono text-primary">01 / About</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold">
                Crafting digital experiences with precision
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a creative developer passionate about building beautiful, functional, and accessible web
                experiences. With a focus on modern technologies and clean design, I bring ideas to life through code.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {["React", "Next.js", "TypeScript", "Tailwind", "Node.js"].map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full border border-gray-300 text-sm font-mono hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gray-100 overflow-hidden border border-gray-200">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                  <span className="text-4xl font-mono">[Image]</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-green-100 border border-primary -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen flex items-center px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="space-y-16">
            <div className="space-y-4">
              <span className="text-sm font-mono text-primary">02 / Selected Work</span>
              <h2 className="text-4xl md:text-6xl font-bold">Featured Projects</h2>
            </div>

            <div className="grid gap-8">
              {[
                {
                  title: "E-Commerce Platform",
                  description: "A modern shopping experience with seamless checkout",
                  tags: ["Next.js", "Stripe", "Tailwind"],
                },
                {
                  title: "Portfolio Dashboard",
                  description: "Real-time analytics and data visualization",
                  tags: ["React", "D3.js", "Node.js"],
                },
                {
                  title: "Social Media App",
                  description: "Connect and share with your community",
                  tags: ["TypeScript", "Supabase", "React"],
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-gray-200 overflow-hidden hover:border-primary transition-all duration-300"
                >
                  <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-mono text-gray-500">0{index + 1}</span>
                        <div className="h-px flex-1 bg-gray-200" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 pt-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 text-xs font-mono">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="group/btn mt-4 hover:text-primary inline-flex items-center font-medium transition-colors">
                        View Project
                        <svg className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                    <div className="relative aspect-video rounded-xl bg-gray-100 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                        <span className="text-2xl font-mono">[Project {index + 1}]</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="space-y-16">
            <div className="space-y-4">
              <span className="text-sm font-mono text-primary">03 / Get in Touch</span>
              <h2 className="text-4xl md:text-6xl font-bold">Let's create something amazing together</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. Whether you have a question or
                  just want to say hi, feel free to reach out!
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:hello@example.com"
                    className="flex items-center gap-3 text-lg hover:text-primary transition-colors group"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="group-hover:translate-x-1 transition-transform">hello@example.com</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-lg hover:text-primary transition-colors group">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    <span className="group-hover:translate-x-1 transition-transform">@yourhandle</span>
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-600">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-600">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-600">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button className="w-full bg-primary hover:bg-secondary text-black font-medium px-6 py-3 rounded-lg transition-colors">
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
          <p className="text-sm text-gray-600 font-mono">© 2025 YourName. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}