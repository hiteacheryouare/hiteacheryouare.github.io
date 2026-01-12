import { useState, useEffect, useRef } from 'react';
import { socialLinks, techStack } from '../utils/socialContacts'
import { EMAIL_REGEX } from '../utils/EMAIL_REGEX';

const HERO_NAME = 'Ryan Mullin';
const NON_BREAKING_SPACE = '\u00A0';

// Mesh network configuration
const NODE_COUNT = 40;
const CONNECTION_DISTANCE = 150;
const NODE_SPEED = 0.3;

export default (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [hoveredRole, setHoveredRole] = useState('student');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize nodes
    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * NODE_SPEED,
      vy: (Math.random() - 0.5) * NODE_SPEED,
    }));

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update node positions
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep nodes within bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      });

      // Draw connections
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_DISTANCE) {
            const opacity = (1 - distance / CONNECTION_DISTANCE) * 0.3;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
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
        }
        
        .name-char {
          display: inline-block;
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .name-char:hover {
          transform: translateY(-15px) scale(1.2);
          text-shadow: 0 8px 20px rgba(255, 255, 255, 0.5);
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
        }
        .role-pill:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: #ffffff;
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 30px -5px rgba(255, 255, 255, 0.4);
        }
        .role-pill.active {
          background: rgba(255, 255, 255, 0.25);
          border-color: #ffffff;
          box-shadow: 0 5px 20px -5px rgba(255, 255, 255, 0.3);
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
        }
        .hero-btn-primary:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 40px -10px rgba(255, 255, 255, 0.5);
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
        }
        .hero-btn-secondary:hover {
          border-color: white;
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 40px -10px rgba(255, 255, 255, 0.4);
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
        }
        .social-link-hero:hover {
          border-color: white;
          color: white;
          transform: translateY(-5px) scale(1.15);
          background: rgba(255, 255, 255, 0.25);
          box-shadow: 0 10px 25px -5px rgba(255, 255, 255, 0.4);
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
        
        {/* Mesh Network Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1 }}
        />
        
        <div className="max-w-6xl mx-auto w-full px-6 md:px-12 py-20 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            
            {/* Main Title - Front and Center with Character Animation */}
            <div className="space-y-4">
              
              <h1 className="hero-title text-white">
                <span className="hero-name" style={{ color: '#ffffff !important', WebkitTextFillColor: '#ffffff !important' }}>
                  {HERO_NAME.split('').map((char, index) => (
                    <span
                      key={index}
                      className="name-char"
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
              >
                Developer
              </span>
              <span
                className={`role-pill ${hoveredRole === 'student' ? 'active' : ''}`}
                onMouseEnter={() => setHoveredRole('student')}
              >
                Student
              </span>
              <span
                className={`role-pill ${hoveredRole === 'swimmer' ? 'active' : ''}`}
                onMouseEnter={() => setHoveredRole('swimmer')}
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