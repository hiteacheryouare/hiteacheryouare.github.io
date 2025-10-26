import { useState, useEffect } from 'react';
import { socialLinks, techStack } from '../utils/socialContacts'
import { EMAIL_REGEX } from '../utils/EMAIL_REGEX';

export default (props) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden ">
      {/* Animated cursor follower */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(3, 91, 255, 0.08), transparent 50%)`,
        }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-20 ">
        <div className="max-w-7xl w-full">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
                Hi, I'm Ryan Mullin
                <br />
                <span className="text-gray-500 dark:text-gray-400">
                  Developer <br />
                  & Student <br />
                  & Swimmer <br />
                </span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-blue-600" />
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-mono">
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
                <i className="bi bi-chevron-right ml-2 transition-transform group-hover:translate-x-1"></i>
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
      <section id="about" className="min-h-screen flex items-center px-6 md:px-12 py-24 ">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-mono text-blue-600">01 / About</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold">
                Building impactful solutions at the intersection of tech and business
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a Computer Science and Business Administration student at Northeastern University with a passion for FinTech and full-stack development. From building mission-driven nonprofit platforms to managing corporate sponsorship outreach for a 400+ member electric racing team, I thrive on projects that blend technical innovation with real-world impact.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
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
                <img src="/ryan_nu.jpg" alt="Ryan Mullin" className="max-w-full h-auto" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary border border-blue-600 -z-10" />
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
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                From nonprofit platforms to eco-tech applications, here's a selection of projects where I've combined technical skills with mission-driven development.
              </p>
            </div>

            <div className="grid gap-8">
              {props.children}
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
                <i className="bi bi-arrow-right"></i>
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
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          I'm always interested in new opportunities—whether it's a FinTech project, web development work, or collaborative ventures at the intersection of business and technology. Let's connect!
            </p>
            <div className="space-y-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center gap-3 text-lg transition-colors group"
            >
              <i className={`bi bi-${link.icon} fs-4`}></i>
              <span className="group-hover:translate-x-1 transition-transform">{link.text}</span>
            </a>
          ))}
            </div>
            <div className="pt-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
            📍 Proudly based in Boston, MA & Philadelphia, PA
          </p>
            </div>
          </div>

          <form className="space-y-6">
            <div className="mb-3">
          <label htmlFor="nameInput" className="form-label text-sm font-mono text-gray-600">Name</label>
          <input
            id="nameInput"
            type="text"
            className="form-control"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
            </div>
            <div className="mb-3">
          <label htmlFor="emailInput" className="form-label text-sm font-mono text-gray-600">Email</label>
          <input
            id="emailInput"
            type="email"
            className={`form-control ${email ? (EMAIL_REGEX.test(email) ? 'is-valid' : 'is-invalid') : ''}`}
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="invalid-feedback">
            Please enter a valid email address.
          </div>
            </div>
            <div className="mb-3">
          <label htmlFor="messageInput" className="form-label text-sm font-mono text-gray-600">Message</label>
          <textarea
            id="messageInput"
            rows={4}
            className="form-control"
            placeholder="Tell me about your project or opportunity..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
            </div>
            <a 
              href={`mailto:rpmullin17@gmail.com?subject=Contact from ${name}&body=${message}%0D%0A%0D%0AFrom: ${name}%0D%0AEmail: ${email}`} 
              className="btn btn-primary w-100"
            >
          Send Message
            </a>
          </form>
        </div>
          </div>
        </div>
      </section>
    </main>
  );
}