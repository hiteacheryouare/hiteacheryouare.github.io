import { useState, useEffect, useRef } from 'react';
import { socialLinks, techStack } from '../utils/socialContacts'
import { EMAIL_REGEX } from '../utils/EMAIL_REGEX';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const HERO_NAME = 'Ryan Mullin';
const NON_BREAKING_SPACE = '\u00A0';
const PARTICLE_COUNT = 30;
const MIN_PARTICLE_SIZE = 2;
const MAX_PARTICLE_SIZE = 6;
const MIN_DURATION = 10;
const MAX_DURATION = 20;
const MAX_DELAY = 5;

export default (props) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [hoveredRole, setHoveredRole] = useState('student');
  const [particles, setParticles] = useState<Particle[]>([]);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (MAX_PARTICLE_SIZE - MIN_PARTICLE_SIZE) + MIN_PARTICLE_SIZE,
      duration: Math.random() * (MAX_DURATION - MIN_DURATION) + MIN_DURATION,
      delay: Math.random() * MAX_DELAY,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      <style>{`
        /* ===== MESH GRADIENT HERO ===== */
        .mesh-gradient-bg {
          position: relative;
          overflow: hidden;
        }
        .mesh-gradient-bg::before {
          content: "";
          position: absolute;
          inset: -50%;
          background: 
            radial-gradient(circle at 0% 0%, #fdb913 0%, #fdb913 20%, transparent 50%),
            radial-gradient(circle at 100% 0%, #0089cf 0%, #0089cf 20%, transparent 50%),
            radial-gradient(circle at 100% 100%, #0db14b 0%, #0db14b 20%, transparent 50%),
            radial-gradient(circle at 0% 100%, #c9234a 0%, #c9234a 20%, transparent 50%);
          animation: meshMove 8s ease-in-out infinite alternate;
        }
        .mesh-gradient-bg::after {
          content: "";
          position: absolute;
          inset: -50%;
          background: 
            radial-gradient(circle at 50% 0%, #f36f21 0%, #f36f21 15%, transparent 45%),
            radial-gradient(circle at 50% 100%, #645faa 0%, #645faa 15%, transparent 45%),
            radial-gradient(circle at 0% 50%, #0089cf 0%, #0089cf 15%, transparent 45%),
            radial-gradient(circle at 100% 50%, #fdb913 0%, #fdb913 15%, transparent 45%),
            radial-gradient(circle at 50% 50%, #c9234a 0%, #c9234a 10%, transparent 40%);
          animation: meshMove2 10s ease-in-out infinite alternate;
        }
        @keyframes meshMove {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          50% { transform: translate(5%, -4%) rotate(2deg) scale(1.1); }
          100% { transform: translate(-3%, 3%) rotate(-1deg) scale(1.05); }
        }
        @keyframes meshMove2 {
          0% { transform: translate(0, 0) rotate(0deg) scale(1.05); }
          50% { transform: translate(-4%, 5%) rotate(-2deg) scale(1); }
          100% { transform: translate(3%, -3%) rotate(1deg) scale(1.1); }
        }

        /* ===== FLOATING PARTICLES ===== */
        .particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          pointer-events: none;
          filter: blur(1px);
        }
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-30px) translateX(15px) rotate(90deg);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-60px) translateX(-10px) rotate(180deg);
            opacity: 0.3;
          }
          75% { 
            transform: translateY(-30px) translateX(-20px) rotate(270deg);
            opacity: 0.5;
          }
        }

        /* ===== INTERACTIVE TEXT ===== */
        .hero-title {
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.05;
          font-size: clamp(4rem, 12vw, 10rem);
        }
        .hero-name {
          display: inline-block;
          background: none !important;
          background-image: none !important;
          -webkit-background-clip: unset !important;
          background-clip: unset !important;
          -webkit-text-fill-color: #ffffff !important;
          color: #ffffff !important;
          cursor: default;
          animation: titlePulse 3s ease-in-out infinite;
        }
        .hero-name:hover {
          animation: titleBounce 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
        }
        
        .name-char {
          display: inline-block;
          animation: charFloat 3s ease-in-out infinite;
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .name-char:hover {
          transform: translateY(-20px) rotate(10deg) scale(1.3);
          text-shadow: 0 10px 30px rgba(255, 255, 255, 0.6);
        }
        
        @keyframes titlePulse {
          0%, 100% { 
            transform: scale(1);
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
          }
          50% { 
            transform: scale(1.02);
            text-shadow: 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4);
          }
        }
        
        @keyframes titleBounce {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(-2deg); }
          75% { transform: translateY(-10px) rotate(2deg); }
        }
        
        @keyframes charFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hero-subtitle {
          font-size: clamp(1.25rem, 3vw, 2rem);
          font-weight: 300;
          color: #1a1a2e;
          letter-spacing: 0.02em;
        }

        .hero-tagline {
          font-size: clamp(1.125rem, 2vw, 1.5rem);
          color: #ffffff;
          max-width: 600px;
          line-height: 1.6;
          animation: fadeInUp 1s ease-out, taglineGlow 2s ease-in-out infinite alternate;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes taglineGlow {
          0%, 100% { 
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
          }
          50% { 
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
          }
        }

        .role-pill {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-radius: 9999px;
          font-size: clamp(0.875rem, 1.5vw, 1.125rem);
          font-weight: 500;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          cursor: pointer;
          position: relative;
          animation: pillFloat 3s ease-in-out infinite;
        }
        .role-pill:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: #ffffff;
          transform: translateY(-10px) scale(1.15) rotate(5deg);
          box-shadow: 
            0 20px 50px -5px rgba(255, 255, 255, 0.4),
            0 0 30px rgba(255, 255, 255, 0.6);
        }
        .role-pill.active {
          background: rgba(255, 255, 255, 0.3);
          border-color: #ffffff;
          box-shadow: 0 10px 40px -5px rgba(255, 255, 255, 0.5);
          animation: pillActive 1s ease-in-out infinite;
        }
        
        @keyframes pillFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(2deg); }
        }
        
        @keyframes pillActive {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 0 10px 40px -5px rgba(255, 255, 255, 0.5);
          }
          50% { 
            transform: scale(1.05);
            box-shadow: 0 15px 50px -5px rgba(255, 255, 255, 0.7);
          }
        }

        .hero-btn-primary {
          background: white;
          color: #1a1a2e;
          padding: 0.875rem 2rem;
          border-radius: 9999px;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          border: 2px solid white;
          box-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
          position: relative;
          overflow: hidden;
          animation: btnPulse 2s ease-in-out infinite;
        }
        .hero-btn-primary::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        .hero-btn-primary:hover {
          transform: translateY(-5px) scale(1.1) rotate(-2deg);
          box-shadow: 
            0 20px 50px -10px rgba(255, 255, 255, 0.5),
            0 0 40px rgba(255, 255, 255, 0.4);
          animation: none;
        }
        .hero-btn-primary:hover::before {
          width: 300px;
          height: 300px;
        }
        
        @keyframes btnPulse {
          0%, 100% { 
            box-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
          }
          50% { 
            box-shadow: 0 4px 30px rgba(255, 255, 255, 0.6);
          }
        }
        
        .hero-btn-secondary {
          background: rgba(255, 255, 255, 0.15);
          color: white;
          padding: 0.875rem 2rem;
          border-radius: 9999px;
          font-weight: 600;
          border: 2px solid rgba(255, 255, 255, 0.6);
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          backdrop-filter: blur(12px);
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
          position: relative;
          overflow: hidden;
        }
        .hero-btn-secondary::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }
        .hero-btn-secondary:hover {
          border-color: white;
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-5px) scale(1.1) rotate(2deg);
          box-shadow: 
            0 20px 50px -10px rgba(255, 255, 255, 0.4),
            0 0 30px rgba(255, 255, 255, 0.3);
        }
        .hero-btn-secondary:hover::after {
          left: 100%;
        }

        .social-link-hero {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          background: rgba(255, 255, 255, 0.15);
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          backdrop-filter: blur(12px);
          position: relative;
          animation: socialFloat 3s ease-in-out infinite;
        }
        .social-link-hero:hover {
          border-color: white;
          color: white;
          transform: translateY(-8px) scale(1.2) rotate(15deg);
          background: rgba(255, 255, 255, 0.3);
          box-shadow: 
            0 15px 40px -5px rgba(255, 255, 255, 0.5),
            0 0 30px rgba(255, 255, 255, 0.4);
        }
        
        @keyframes socialFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(5deg); }
        }
        /* ===== REST OF PAGE STYLES ===== */
        .whimsy-text {
          display: inline-block;
          transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .whimsy-text:hover { transform: rotate(-2deg) scale(1.05); }

        .image-transition { transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out; }
        .image-scale { animation: subtleFloat 3s ease-in-out infinite; }
        @keyframes subtleFloat { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }

        @media (max-width: 768px) {
          .hero-title { font-size: clamp(3rem, 15vw, 5rem); }
          .hero-subtitle { font-size: 1.125rem; }
          .hero-tagline { font-size: 1rem; }
          .role-pill { font-size: 0.875rem; padding: 0.4rem 1rem; }
        }
      `}</style>

      {/* ===== NEW HERO SECTION ===== */}
      <section className="mesh-gradient-bg min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] pointer-events-none" />
        
        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
        
        <div className="max-w-6xl mx-auto w-full px-6 md:px-12 py-20 relative z-10" ref={heroRef}>
          <div className="flex flex-col items-center text-center space-y-8">
            
            {/* Main Title - Front and Center with Character Animation */}
            <div className="space-y-4">
              
              <h1 className="hero-title text-white">
                <span className="hero-name" style={{ color: '#ffffff !important', WebkitTextFillColor: '#ffffff !important' }}>
                  {HERO_NAME.split('').map((char, index) => (
                    <span
                      key={index}
                      className="name-char"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      {char === ' ' ? NON_BREAKING_SPACE : char}
                    </span>
                  ))}
                </span>
              </h1>
              
              <p className="hero-tagline mx-auto text-white font-mono">
                CS + Business @ Northeastern
              </p>
            </div>

            {/* Interactive Role Pills */}
            <div className="flex flex-wrap gap-3 justify-center pt-4">
              <span
                className={`role-pill ${hoveredRole === 'developer' ? 'active' : ''}`}
                onMouseEnter={() => setHoveredRole('developer')}
                style={{ animationDelay: '0s' }}
              >
                Developer
              </span>
              <span
                className={`role-pill ${hoveredRole === 'student' ? 'active' : ''}`}
                onMouseEnter={() => setHoveredRole('student')}
                style={{ animationDelay: '0.2s' }}
              >
                Student
              </span>
              <span
                className={`role-pill ${hoveredRole === 'swimmer' ? 'active' : ''}`}
                onMouseEnter={() => setHoveredRole('swimmer')}
                style={{ animationDelay: '0.4s' }}
              >
                Swimmer
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a href="#work" className="hero-btn-primary">
                Explore My Work
              </a>
              <a href="#contact" className="hero-btn-secondary">
                Let's Connect
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center pt-4">
              {socialLinks.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-hero"
                  aria-label={link.text}
                  style={{ animationDelay: `${index * 0.1}s` }}
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
                <span className="text-sm font-mono text-primary">01 / About</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold">
                Building impactful solutions at the intersection of tech and business
              </h2>
              <p className="text-lg text-gray-600 dark:text-neutral-200 leading-relaxed">
                I'm a Computer Science and Business Administration student at Northeastern University with a passion for FinTech and full-stack development. From building mission-driven nonprofit platforms to managing corporate sponsorship outreach for a 400+ member electric racing team, I thrive on projects that blend technical innovation with real-world impact.
              </p>
              <p className="text-lg text-gray-600 dark:text-neutral-200 leading-relaxed">
                Whether it's deploying responsive web applications, analyzing carbon footprints, or coordinating high-stakes recruitment events, I bring a unique combination of technical expertise and strategic thinking to every challenge.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full border border-neutral-200 text-sm font-mono hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden flex items-center justify-center">
                <img src="https://avatars.githubusercontent.com/u/82683251" alt="Ryan Mullin" className="max-w-full h-auto rounded-2xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary border border-primary -z-10" />
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
              <p className="text-lg text-gray-600 dark:text-neutral-200 max-w-2xl">
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
                className="inline-flex items-center gap-2 text-gray-600 dark:text-neutral-300 hover:text-primary transition-colors font-medium"
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
              <span className="text-sm font-mono text-primary">03 / Get in Touch</span>
              <h2 className="text-4xl md:text-6xl font-bold">Let's build something great together</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <p className="text-lg text-gray-600 dark:text-neutral-200 leading-relaxed">
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
                  <p className="text-sm text-gray-500 dark:text-neutral-300 font-mono">
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
                  <div className="invalid-feedback">Please enter a valid email address.</div>
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